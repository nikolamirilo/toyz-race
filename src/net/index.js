// Toyz Race — multiplayer transport client (see CONTRACT-NET.md §1, protocol in server/relay.js).
// Safe to import in node: nothing touches window / WebSocket until host() / join() is called.

const hasLocation = () => typeof location !== 'undefined' && !!location && !!location.host;

function resolveUrls(url) {
  // -> { ws: 'ws(s)://host/mp', http: 'http(s)://host' | null }
  if (url) {
    const u = new URL(url);
    const secure = u.protocol === 'https:' || u.protocol === 'wss:';
    const path = u.pathname && u.pathname !== '/' ? u.pathname.replace(/\/+$/, '') : '/mp';
    return { ws: `${secure ? 'wss' : 'ws'}://${u.host}${path}`, http: `${secure ? 'https' : 'http'}://${u.host}` };
  }
  if (hasLocation()) {
    const secure = location.protocol === 'https:';
    return { ws: `${secure ? 'wss' : 'ws'}://${location.host}/mp`, http: location.origin };
  }
  return { ws: null, http: null };
}

/**
 * @param {object} [opts]
 * @param {string} [opts.url]            base URL of the server (http(s)://host[:port] or ws(s)://host[:port][/mp]); default: location
 * @param {Function} [opts.WebSocketImpl] WebSocket constructor; default: globalThis.WebSocket
 * @param {number} [opts.timeout]        connect/join timeout in ms (default 8000)
 * @param {number} [opts.pingInterval]   ping period in ms (default 2000)
 */
export function createNet(opts = {}) {
  const timeoutMs = opts.timeout ?? 8000;
  const pingEvery = opts.pingInterval ?? 2000;
  const listeners = new Map();

  let ws = null;
  let pingTimer = null;
  let lastPong = 0;
  let closeReason = null;

  const net = {
    connected: false,
    isHost: false,
    id: null,
    code: null,
    peers: [],
    room: {},
    ping: null, // last measured round trip in ms

    on(event, cb) {
      if (!listeners.has(event)) listeners.set(event, new Set());
      listeners.get(event).add(cb);
      return () => net.off(event, cb);
    },
    off(event, cb) {
      listeners.get(event)?.delete(cb);
    },

    host({ name, meta } = {}) {
      return connect({ t: 'host', name, meta: meta || {} });
    },
    join(code, { name, meta } = {}) {
      const c = String(code ?? '').trim().toUpperCase();
      if (!/^[A-Z]{4}$/.test(c)) return Promise.reject(new Error('Enter the 4-letter room code.'));
      return connect({ t: 'join', code: c, name, meta: meta || {} });
    },
    /** Leave the room / abort a pending connect. Does NOT emit 'close'. */
    leave() {
      const sock = ws;
      const wasConnected = net.connected;
      teardown();
      if (sock) {
        detach(sock);
        try {
          if (wasConnected && sock.readyState === 1) sock.send(JSON.stringify({ t: 'leave' }));
          sock.close(1000);
        } catch {}
      }
      if (pendingReject) {
        const r = pendingReject;
        pendingReject = null;
        r(new Error('Cancelled'));
      }
    },

    setMeta(patch) {
      if (!net.connected || !patch) return false;
      const me = net.peers.find((p) => p.id === net.id);
      if (me) me.meta = { ...me.meta, ...patch }; // optimistic; server echo follows
      return raw({ t: 'meta', patch });
    },
    setRoomState(patch) {
      if (!net.connected || !net.isHost || !patch) return false;
      net.room = { ...net.room, ...patch }; // optimistic; server echo follows
      return raw({ t: 'room', patch });
    },
    send(type, data, toId) {
      if (!net.connected) return false;
      return raw(toId != null ? { t: 'msg', type, data, to: toId } : { t: 'msg', type, data });
    },
    /** Host only (extra): remove a peer from the room. */
    kick(id) {
      if (!net.connected || !net.isHost) return false;
      return raw({ t: 'kick', id });
    },

    async joinUrls() {
      const code = net.code || '';
      const suffix = code ? `/?join=${code}` : '/';
      const base = resolveUrls(opts.url).http;
      const urls = [];
      const add = (u, front) => {
        if (!urls.includes(u)) front ? urls.unshift(u) : urls.push(u);
      };
      let proto = 'http:';
      let host = null;
      let fallbackPort = '';
      if (base) {
        const u = new URL(base);
        proto = u.protocol;
        host = u.hostname;
        fallbackPort = u.port;
        try {
          const ctl = typeof AbortController !== 'undefined' ? new AbortController() : null;
          const t = ctl && setTimeout(() => ctl.abort(), 3000);
          const res = await fetch(`${base}/mp/info`, ctl ? { signal: ctl.signal } : undefined);
          if (t) clearTimeout(t);
          if (res.ok) {
            const info = await res.json();
            const port = info.port ?? fallbackPort;
            for (const a of info.addresses || []) add(`${proto}//${a}${port ? ':' + port : ''}${suffix}`);
          }
        } catch {}
        // the address this page was opened with: first when it is a real (shareable) host, last when loopback
        const loopback = host === 'localhost' || host === '127.0.0.1' || host === '[::1]' || host === '::1';
        add(`${base}${suffix}`, !loopback);
      }
      return urls;
    },
  };

  let pendingReject = null;

  function emit(event, ...args) {
    const set = listeners.get(event);
    if (!set) return;
    for (const cb of [...set]) {
      try {
        cb(...args);
      } catch (err) {
        console.error(`[net] '${event}' listener failed`, err);
      }
    }
  }

  function raw(obj) {
    if (!ws || ws.readyState !== 1) return false;
    try {
      ws.send(JSON.stringify(obj));
      return true;
    } catch {
      return false;
    }
  }

  function detach(sock) {
    sock.onopen = sock.onmessage = sock.onclose = null;
    sock.onerror = () => {}; // keep a handler: node's `ws` throws on an unhandled 'error'
  }

  function teardown() {
    if (pingTimer) clearInterval(pingTimer);
    pingTimer = null;
    ws = null;
    net.connected = false;
    net.isHost = false;
    net.id = null;
    net.code = null;
    net.peers = [];
    net.room = {};
    net.ping = null;
  }

  function startPing() {
    lastPong = Date.now();
    const tick = () => {
      if (!ws) return;
      if (Date.now() - lastPong > Math.max(10000, pingEvery * 5)) {
        // server went silent (wifi dropped, laptop asleep, ...)
        const sock = ws;
        detach(sock);
        try {
          sock.close();
        } catch {}
        teardown();
        emit('close', { reason: 'Connection lost' });
        return;
      }
      raw({ t: 'ping', n: Date.now() });
    };
    pingTimer = setInterval(tick, pingEvery);
    pingTimer.unref?.();
    tick();
  }

  function connect(hello) {
    net.leave();
    const WS = opts.WebSocketImpl || globalThis.WebSocket;
    const target = resolveUrls(opts.url).ws;
    if (!WS || !target) return Promise.reject(new Error('Multiplayer is not available here.'));

    return new Promise((resolve, reject) => {
      let settled = false;
      let sock;
      const fail = (message) => {
        if (settled) return;
        settled = true;
        clearTimeout(timer);
        pendingReject = null;
        if (ws === sock) teardown();
        if (sock) {
          detach(sock);
          try {
            sock.close();
          } catch {}
        }
        reject(new Error(message));
      };
      const timer = setTimeout(() => fail('The game server did not answer. Check the connection and try again.'), timeoutMs);
      pendingReject = (err) => {
        settled = true;
        clearTimeout(timer);
        reject(err);
      };

      try {
        sock = new WS(target);
      } catch {
        fail('Could not reach the game server.');
        return;
      }
      ws = sock;
      closeReason = null;

      sock.onopen = () => raw(hello);
      sock.onerror = () => {
        if (!settled) fail('Could not reach the game server.');
      };
      sock.onclose = () => {
        if (ws !== sock) return;
        if (!settled) {
          fail(closeReason || 'Could not reach the game server.');
          return;
        }
        const reason = closeReason || 'Connection lost';
        teardown();
        emit('close', { reason });
      };
      sock.onmessage = (ev) => {
        if (ws !== sock || typeof ev.data !== 'string') return;
        let m;
        try {
          m = JSON.parse(ev.data);
        } catch {
          return;
        }
        switch (m.t) {
          case 'msg':
            emit('message', m.type, m.data, m.from);
            break;
          case 'pong':
            lastPong = Date.now();
            if (typeof m.n === 'number') {
              net.ping = Math.max(0, lastPong - m.n);
              emit('ping', net.ping);
            }
            break;
          case 'peers':
            net.peers = m.peers || [];
            net.isHost = net.peers.some((p) => p.id === net.id && p.isHost);
            emit('peers', net.peers);
            break;
          case 'room':
            net.room = m.room || {};
            emit('room', net.room);
            break;
          case 'welcome':
            if (settled) break;
            settled = true;
            clearTimeout(timer);
            pendingReject = null;
            net.connected = true;
            net.id = m.id;
            net.code = m.code;
            net.isHost = !!m.isHost;
            net.peers = m.peers || [];
            net.room = m.room || {};
            startPing();
            resolve({ code: m.code });
            emit('peers', net.peers);
            emit('room', net.room);
            break;
          case 'error':
            if (!settled) fail(m.message || 'Could not join the room.');
            break;
          case 'closed':
            closeReason = m.reason || 'The room was closed';
            break;
          default:
        }
      };
    });
  }

  return net;
}

export default createNet;
