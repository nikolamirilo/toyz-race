// Toyz Race — multiplayer relay. Rooms over WebSocket; the server never interprets game messages.
//
// Wire protocol (JSON text frames)
//   client -> server
//     { t:'host', name, meta }                 create a room, become host
//     { t:'join', code, name, meta }           join a room (code is case-insensitive)
//     { t:'meta', patch }                      merge into own meta            -> 'peers' to everyone
//     { t:'room', patch }                      host only: merge room state    -> 'room' to everyone
//     { t:'msg', type, data, to? }             relay to everyone else, or only to peer `to`
//     { t:'kick', id }                         host only
//     { t:'ping', n }                          -> { t:'pong', n }
//     { t:'leave' }
//   server -> client
//     { t:'welcome', id, code, isHost, peers, room }
//     { t:'error', code:'unknown'|'full'|'locked'|'bad', message }   (join/host failed; socket is closed after)
//     { t:'peers', peers }                     [{ id, name, isHost, meta }] host first, join order
//     { t:'room', room }
//     { t:'msg', type, data, from }
//     { t:'pong', n }
//     { t:'closed', reason }                   room closed / kicked; socket is closed right after
import os from 'node:os';
import { WebSocketServer } from 'ws';

export const CODE_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // no I / O
export const MAX_MEMBERS = 8;

const OPEN = 1;

/** Non-internal IPv4 addresses of this machine. */
export function lanAddresses() {
  const out = [];
  for (const list of Object.values(os.networkInterfaces())) {
    for (const a of list || []) {
      if ((a.family === 'IPv4' || a.family === 4) && !a.internal && !out.includes(a.address)) out.push(a.address);
    }
  }
  return out;
}

/**
 * http helper for `GET /mp/info`. Returns true when it handled the request.
 * Usable as a raw http handler step or through `mpInfoMiddleware()` in connect.
 */
export function handleMpInfo(req, res, { path = '/mp' } = {}) {
  const pathname = (req.originalUrl || req.url || '').split('?')[0].replace(/\/+$/, '');
  if (pathname !== `${path}/info`) return false;
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.statusCode = 405;
    res.end();
    return true;
  }
  const body = JSON.stringify({ addresses: lanAddresses(), port: req.socket?.localPort ?? null });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.end(req.method === 'HEAD' ? undefined : body);
  return true;
}

/** connect-style middleware (Vite dev / preview). */
export function mpInfoMiddleware(opts) {
  return (req, res, next) => {
    if (!handleMpInfo(req, res, opts)) next();
  };
}

function cleanName(name) {
  const s = String(name ?? '').replace(/\s+/g, ' ').trim().slice(0, 24);
  return s || 'Player';
}

function cleanObj(o) {
  return o && typeof o === 'object' && !Array.isArray(o) ? o : {};
}

/**
 * Attach the relay to an http(s) server. Only upgrade requests for `path` are touched,
 * so other websocket users of the same server (Vite HMR) keep working.
 * @returns {{ wss, rooms: Map, close(): void }}
 */
export function attachRelay(httpServer, opts = {}) {
  const path = opts.path || '/mp';
  const heartbeatMs = opts.heartbeatMs ?? 15000;
  const maxMembers = opts.maxMembers ?? MAX_MEMBERS;

  const wss = new WebSocketServer({ noServer: true, maxPayload: 512 * 1024, perMessageDeflate: false });
  /** @type {Map<string, { code, members: any[], state: object }>} */
  const rooms = new Map();
  let nextId = 1;

  const send = (ws, obj) => {
    if (ws.readyState === OPEN) ws.send(JSON.stringify(obj));
  };
  const peersOf = (room) => room.members.map((m) => ({ id: m.id, name: m.name, isHost: m.isHost, meta: m.meta }));
  const broadcast = (room, obj, except) => {
    const raw = JSON.stringify(obj);
    for (const m of room.members) if (m !== except && m.ws.readyState === OPEN) m.ws.send(raw);
  };

  function newCode() {
    for (;;) {
      let c = '';
      for (let i = 0; i < 4; i++) c += CODE_ALPHABET[Math.floor(Math.random() * CODE_ALPHABET.length)];
      if (!rooms.has(c)) return c;
    }
  }

  function reject(ws, code, message) {
    send(ws, { t: 'error', code, message });
    ws.close(4002, code);
  }

  function closeRoom(room, reason, except) {
    rooms.delete(room.code);
    for (const m of room.members) {
      m.room = null;
      if (m === except) continue;
      send(m.ws, { t: 'closed', reason });
      m.ws.close(4001, 'room closed');
    }
    room.members = [];
  }

  function removeMember(m) {
    const room = m.room;
    if (!room) return;
    m.room = null;
    if (m.isHost) {
      closeRoom(room, 'The host left the game', m);
      return;
    }
    const i = room.members.indexOf(m);
    if (i >= 0) room.members.splice(i, 1);
    if (room.members.length === 0) rooms.delete(room.code);
    else broadcast(room, { t: 'peers', peers: peersOf(room) });
  }

  function enter(m, room, msg) {
    m.name = cleanName(msg.name);
    m.meta = cleanObj(msg.meta);
    m.room = room;
    m.isHost = room.members.length === 0;
    room.members.push(m);
    const peers = peersOf(room);
    send(m.ws, { t: 'welcome', id: m.id, code: room.code, isHost: m.isHost, peers, room: room.state });
    broadcast(room, { t: 'peers', peers }, m);
  }

  function onMessage(m, raw) {
    let msg;
    try {
      msg = JSON.parse(raw);
    } catch {
      return;
    }
    if (!msg || typeof msg !== 'object') return;
    const room = m.room;
    switch (msg.t) {
      case 'msg': {
        if (!room) return;
        const out = JSON.stringify({ t: 'msg', type: msg.type, data: msg.data, from: m.id });
        if (msg.to != null) {
          const target = room.members.find((x) => x.id === msg.to);
          if (target && target !== m && target.ws.readyState === OPEN) target.ws.send(out);
        } else {
          for (const x of room.members) if (x !== m && x.ws.readyState === OPEN) x.ws.send(out);
        }
        return;
      }
      case 'ping':
        send(m.ws, { t: 'pong', n: msg.n });
        return;
      case 'host': {
        if (room) return;
        const r = { code: newCode(), members: [], state: {} };
        rooms.set(r.code, r);
        enter(m, r, msg);
        return;
      }
      case 'join': {
        if (room) return;
        const code = String(msg.code ?? '').trim().toUpperCase();
        const r = rooms.get(code);
        if (!r) return reject(m.ws, 'unknown', `Room ${code || '????'} not found. Check the code and try again.`);
        if (r.state.locked === true) return reject(m.ws, 'locked', 'That race has already started. Try again when it is over.');
        if (r.members.length >= maxMembers) return reject(m.ws, 'full', `Room ${code} is full (${maxMembers} players max).`);
        enter(m, r, msg);
        return;
      }
      case 'meta':
        if (!room) return;
        Object.assign(m.meta, cleanObj(msg.patch));
        if (typeof msg.name === 'string') m.name = cleanName(msg.name);
        broadcast(room, { t: 'peers', peers: peersOf(room) });
        return;
      case 'room':
        if (!room || !m.isHost) return;
        Object.assign(room.state, cleanObj(msg.patch));
        broadcast(room, { t: 'room', room: room.state });
        return;
      case 'kick': {
        if (!room || !m.isHost) return;
        const target = room.members.find((x) => x.id === msg.id);
        if (!target || target === m) return;
        removeMember(target);
        send(target.ws, { t: 'closed', reason: 'You were removed by the host' });
        target.ws.close(4003, 'kicked');
        return;
      }
      case 'leave':
        removeMember(m);
        m.ws.close(1000, 'bye');
        return;
      default:
    }
  }

  wss.on('connection', (ws) => {
    const m = { id: 'p' + (nextId++).toString(36), ws, name: 'Player', meta: {}, isHost: false, room: null };
    ws.isAlive = true;
    ws.on('pong', () => {
      ws.isAlive = true;
    });
    ws.on('message', (data, isBinary) => {
      ws.isAlive = true;
      if (!isBinary) onMessage(m, data.toString());
    });
    ws.on('close', () => removeMember(m));
    ws.on('error', () => {});
  });

  const onUpgrade = (req, socket, head) => {
    const pathname = (req.url || '').split('?')[0].replace(/\/+$/, '');
    if (pathname !== path) return; // not ours (e.g. Vite HMR)
    wss.handleUpgrade(req, socket, head, (ws) => wss.emit('connection', ws, req));
  };
  httpServer.on('upgrade', onUpgrade);

  const timer = setInterval(() => {
    for (const ws of wss.clients) {
      if (!ws.isAlive) {
        ws.terminate();
        continue;
      }
      ws.isAlive = false;
      try {
        ws.ping();
      } catch {}
    }
  }, heartbeatMs);
  timer.unref?.();

  let closed = false;
  function close() {
    if (closed) return;
    closed = true;
    clearInterval(timer);
    httpServer.off('upgrade', onUpgrade);
    for (const ws of wss.clients) ws.terminate();
    rooms.clear();
    wss.close();
  }
  httpServer.once('close', close);

  return { wss, rooms, close, path };
}
