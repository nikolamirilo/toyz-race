// Relay + client self-test:  node server/_test.mjs
import http from 'node:http';
import assert from 'node:assert/strict';
import WebSocket from 'ws';
import { attachRelay, handleMpInfo } from './relay.js';
import { createNet } from '../src/net/index.js';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let passed = 0;
const failures = [];
async function test(name, fn) {
  try {
    await fn();
    passed++;
    console.log(`  ok   ${name}`);
  } catch (err) {
    failures.push(name);
    console.log(`  FAIL ${name}\n       ${err?.stack || err}`);
  }
}

async function startServer(opts) {
  const server = http.createServer((req, res) => {
    if (!handleMpInfo(req, res)) res.writeHead(404).end();
  });
  const relay = attachRelay(server, { path: '/mp', ...opts });
  const socks = new Set();
  server.on('connection', (s) => { socks.add(s); s.on('close', () => socks.delete(s)); });
  await new Promise((r) => server.listen(0, '127.0.0.1', r));
  const port = server.address().port;
  return { server, relay, port, stop: () => new Promise((r) => { relay.close(); server.close(r); for (const s of socks) s.destroy(); }) };
}

// --- tiny raw protocol client --------------------------------------------------------------
function rawClient(port, wsOpts) {
  const ws = new WebSocket(`ws://127.0.0.1:${port}/mp`, wsOpts);
  const c = { ws, inbox: [], waiters: [], closed: false, closeCode: null };
  ws.on('message', (d) => {
    const m = JSON.parse(d.toString());
    const i = c.waiters.findIndex((w) => w.pred(m));
    if (i >= 0) c.waiters.splice(i, 1)[0].resolve(m);
    else c.inbox.push(m);
  });
  ws.on('close', (code) => {
    c.closed = true;
    c.closeCode = code;
    for (const w of c.waiters.splice(0)) w.reject(new Error('socket closed while waiting for ' + w.label));
    c.onclose?.();
  });
  ws.on('error', () => {});
  c.open = new Promise((res, rej) => { ws.once('open', res); ws.once('error', rej); });
  c.send = (o) => ws.send(JSON.stringify(o));
  c.next = (t, ms = 1500) => {
    const pred = typeof t === 'function' ? t : (m) => m.t === t;
    const i = c.inbox.findIndex(pred);
    if (i >= 0) return Promise.resolve(c.inbox.splice(i, 1)[0]);
    return new Promise((resolve, reject) => {
      const w = { pred, label: String(t), resolve: (m) => { clearTimeout(timer); resolve(m); }, reject: (e) => { clearTimeout(timer); reject(e); } };
      const timer = setTimeout(() => { c.waiters.splice(c.waiters.indexOf(w), 1); reject(new Error(`timeout waiting for ${w.label}`)); }, ms);
      c.waiters.push(w);
    });
  };
  c.none = async (t, ms = 150) => {
    await sleep(ms);
    const pred = typeof t === 'function' ? t : (m) => m.t === t;
    assert.equal(c.inbox.filter(pred).length, 0, `unexpected ${t} message`);
  };
  c.waitClose = (ms = 1500) => c.closed ? Promise.resolve() : new Promise((res, rej) => { const timer = setTimeout(() => rej(new Error('timeout waiting for close')), ms); c.onclose = () => { clearTimeout(timer); res(); }; });
  c.drain = () => { c.inbox.length = 0; };
  return c;
}
async function hostRoom(port, name = 'Host', meta = {}) {
  const c = rawClient(port);
  await c.open;
  c.send({ t: 'host', name, meta });
  const w = await c.next('welcome');
  return Object.assign(c, { id: w.id, code: w.code, welcome: w });
}
async function joinRoom(port, code, name, meta = {}) {
  const c = rawClient(port);
  await c.open;
  c.send({ t: 'join', code, name, meta });
  const m = await c.next((x) => x.t === 'welcome' || x.t === 'error');
  if (m.t === 'error') { c.error = m; return c; }
  return Object.assign(c, { id: m.id, code: m.code, welcome: m });
}

// ============================================================================================
console.log('relay protocol');
const S = await startServer();
const { port } = S;

await test('GET /mp/info', async () => {
  const info = await (await fetch(`http://127.0.0.1:${port}/mp/info`)).json();
  assert.ok(Array.isArray(info.addresses));
  assert.equal(info.port, port);
  for (const a of info.addresses) assert.match(a, /^\d+\.\d+\.\d+\.\d+$/);
});

await test('upgrade on another path is not handled by the relay', async () => {
  const ws = new WebSocket(`ws://127.0.0.1:${port}/other`, { handshakeTimeout: 300 });
  const r = await new Promise((res) => { ws.on('open', () => res('open')); ws.on('error', () => res('error')); });
  ws.terminate();
  assert.equal(r, 'error');
});

await test('create room: 4-letter code, host is first peer', async () => {
  const h = await hostRoom(port, 'Hana', { carId: 'buggy' });
  assert.match(h.code, /^[A-HJ-NP-Z]{4}$/);
  assert.equal(h.welcome.isHost, true);
  assert.deepEqual(h.welcome.peers, [{ id: h.id, name: 'Hana', isHost: true, meta: { carId: 'buggy' } }]);
  assert.deepEqual(h.welcome.room, {});
  h.ws.close();
  await h.waitClose();
  await sleep(30);
  assert.equal(S.relay.rooms.size, 0, 'room removed when host leaves');
});

await test('join by code (case-insensitive), peers consistent + ordered, host first', async () => {
  const h = await hostRoom(port, 'H');
  const a = await joinRoom(port, h.code.toLowerCase(), 'A', { carId: 'x' });
  assert.equal(a.code, h.code);
  assert.equal(a.welcome.isHost, false);
  const b = await joinRoom(port, ` ${h.code} `, 'B');
  const expect = [
    { id: h.id, name: 'H', isHost: true, meta: {} },
    { id: a.id, name: 'A', isHost: false, meta: { carId: 'x' } },
    { id: b.id, name: 'B', isHost: false, meta: {} },
  ];
  assert.deepEqual(b.welcome.peers, expect);
  assert.deepEqual((await h.next((m) => m.t === 'peers' && m.peers.length === 3)).peers, expect);
  assert.deepEqual((await a.next((m) => m.t === 'peers' && m.peers.length === 3)).peers, expect);
  assert.equal(new Set([h.id, a.id, b.id]).size, 3);
  h.ws.close(); await a.waitClose(); await b.waitClose();
});

await test('wrong code -> error, socket closed', async () => {
  const h = await hostRoom(port);
  const bad = h.code === 'ZZZZ' ? 'YYYY' : 'ZZZZ';
  const c = await joinRoom(port, bad, 'X');
  assert.equal(c.error.code, 'unknown');
  assert.match(c.error.message, /not found/i);
  await c.waitClose();
  h.ws.close();
});

await test('full room: 9th member rejected', async () => {
  const h = await hostRoom(port);
  const members = [h];
  for (let i = 1; i < 8; i++) {
    const c = await joinRoom(port, h.code, 'P' + i);
    assert.ok(!c.error, 'member ' + (i + 1) + ' should get in');
    members.push(c);
  }
  const ninth = await joinRoom(port, h.code, 'P9');
  assert.equal(ninth.error.code, 'full');
  assert.match(ninth.error.message, /full/i);
  await ninth.waitClose();
  assert.equal(S.relay.rooms.get(h.code).members.length, 8);
  // a slot frees up -> joinable again
  members[3].send({ t: 'leave' });
  await members[3].waitClose();
  const again = await joinRoom(port, h.code, 'P9');
  assert.ok(!again.error);
  assert.equal(again.welcome.peers.length, 8);
  assert.equal(again.welcome.peers[7].id, again.id);
  h.ws.close();
  await again.waitClose();
});

await test('setRoomState is host-only; locked room rejects joins; unlock re-opens', async () => {
  const h = await hostRoom(port);
  const a = await joinRoom(port, h.code, 'A');
  a.send({ t: 'room', patch: { locked: true, hacked: 1 } });
  await h.none('room');
  assert.deepEqual(S.relay.rooms.get(h.code).state, {});
  h.send({ t: 'room', patch: { settings: { laps: 3 } } });
  h.send({ t: 'room', patch: { locked: true } });
  const want = { settings: { laps: 3 }, locked: true };
  assert.deepEqual((await a.next((m) => m.t === 'room' && m.room.locked)).room, want);
  assert.deepEqual((await h.next((m) => m.t === 'room' && m.room.locked)).room, want);
  const c = await joinRoom(port, h.code, 'Late');
  assert.equal(c.error.code, 'locked');
  assert.match(c.error.message, /started/i);
  h.send({ t: 'room', patch: { locked: false } });
  await a.next((m) => m.t === 'room' && m.room.locked === false);
  const d = await joinRoom(port, h.code, 'Late');
  assert.ok(!d.error);
  assert.deepEqual(d.welcome.room, { settings: { laps: 3 }, locked: false });
  h.ws.close();
  await d.waitClose();
});

await test('setMeta propagates to everyone (merge)', async () => {
  const h = await hostRoom(port, 'H', { carId: 'a', color: 1 });
  const a = await joinRoom(port, h.code, 'A');
  await h.next('peers');
  h.send({ t: 'meta', patch: { carId: 'b' } });
  for (const c of [h, a]) {
    const p = (await c.next('peers')).peers;
    assert.deepEqual(p[0].meta, { carId: 'b', color: 1 });
    assert.equal(p.length, 2);
  }
  a.send({ t: 'meta', patch: { carId: 'z' } });
  for (const c of [h, a]) assert.deepEqual((await c.next('peers')).peers[1].meta, { carId: 'z' });
  h.ws.close(); await a.waitClose();
});

await test('broadcast reaches everyone except sender; targeted send reaches only the target', async () => {
  const h = await hostRoom(port);
  const a = await joinRoom(port, h.code, 'A');
  const b = await joinRoom(port, h.code, 'B');
  // a second room must never see anything
  const other = await hostRoom(port);
  a.send({ t: 'msg', type: 'st', data: [1, 2.5, 'x', { k: null }] });
  for (const c of [h, b]) assert.deepEqual(await c.next('msg'), { t: 'msg', type: 'st', data: [1, 2.5, 'x', { k: null }], from: a.id });
  await a.none('msg');
  h.send({ t: 'msg', type: 'fx', data: { spin: 1 }, to: b.id });
  assert.deepEqual(await b.next('msg'), { t: 'msg', type: 'fx', data: { spin: 1 }, from: h.id });
  await a.none('msg');
  await h.none('msg');
  // unknown target / self target: dropped silently
  h.send({ t: 'msg', type: 'fx', data: 1, to: 'nope' });
  h.send({ t: 'msg', type: 'fx', data: 1, to: h.id });
  // garbage is ignored and does not kill the socket
  h.ws.send('not json');
  h.ws.send(Buffer.from([1, 2, 3]));
  for (const c of [h, a, b, other]) await c.none('msg', 60);
  // ordering is preserved
  for (let i = 0; i < 50; i++) h.send({ t: 'msg', type: 'n', data: i });
  for (let i = 0; i < 50; i++) assert.equal((await a.next('msg')).data, i);
  h.send({ t: 'ping', n: 42 });
  assert.deepEqual(await h.next('pong'), { t: 'pong', n: 42 });
  h.ws.close(); other.ws.close(); await a.waitClose(); await b.waitClose();
});

await test('client leaving (explicit and abrupt) updates peers', async () => {
  const h = await hostRoom(port);
  const a = await joinRoom(port, h.code, 'A');
  const b = await joinRoom(port, h.code, 'B');
  await sleep(30); h.drain(); a.drain(); b.drain();
  a.send({ t: 'leave' });
  await a.waitClose();
  for (const c of [h, b]) assert.deepEqual((await c.next('peers')).peers.map((p) => p.id), [h.id, b.id]);
  b.ws.terminate();
  assert.deepEqual((await h.next('peers')).peers.map((p) => p.id), [h.id]);
  assert.ok(S.relay.rooms.has(h.code));
  h.ws.close(); await h.waitClose();
});

await test('host leaving closes the room for everyone with a reason', async () => {
  for (const how of ['leave', 'drop']) {
    const h = await hostRoom(port);
    const a = await joinRoom(port, h.code, 'A');
    const b = await joinRoom(port, h.code, 'B');
    if (how === 'leave') h.send({ t: 'leave' }); else h.ws.terminate();
    for (const c of [a, b]) {
      const m = await c.next('closed');
      assert.match(m.reason, /host left/i);
      await c.waitClose();
      assert.equal(c.closeCode, 4001);
    }
    assert.equal(S.relay.rooms.has(h.code), false);
    const late = await joinRoom(port, h.code, 'Late');
    assert.equal(late.error.code, 'unknown');
  }
});

await test('kick (extra): host removes a peer', async () => {
  const h = await hostRoom(port);
  const a = await joinRoom(port, h.code, 'A');
  const b = await joinRoom(port, h.code, 'B');
  await sleep(30); h.drain(); b.drain();
  a.send({ t: 'kick', id: b.id }); // not host -> ignored
  await b.none('closed', 80);
  h.send({ t: 'kick', id: a.id });
  assert.match((await a.next('closed')).reason, /removed/i);
  await a.waitClose();
  assert.deepEqual((await h.next('peers')).peers.map((p) => p.id), [h.id, b.id]);
  h.ws.close(); await b.waitClose();
});
await S.stop();

await test('heartbeat drops a dead socket (and keeps live ones)', async () => {
  const s = await startServer({ heartbeatMs: 60 });
  try {
    const h = await hostRoom(s.port);
    const live = await joinRoom(s.port, h.code, 'Live');
    const dead = rawClient(s.port, { autoPong: false });
    await dead.open;
    dead.send({ t: 'join', code: h.code, name: 'Dead' });
    await dead.next('welcome');
    await h.next((m) => m.t === 'peers' && m.peers.length === 3);
    dead.ws.pause?.(); // stop reading too
    const p = await h.next((m) => m.t === 'peers' && m.peers.length === 2, 1000);
    assert.deepEqual(p.peers.map((x) => x.name), ['Host', 'Live']);
    await sleep(250); // several more heartbeats: live members stay
    assert.equal(s.relay.rooms.get(h.code).members.length, 2);
    assert.equal(h.closed, false);
    assert.equal(live.closed, false);
    // dead host -> room closed
    const s2h = rawClient(s.port, { autoPong: false });
    await s2h.open;
    s2h.send({ t: 'host', name: 'DeadHost' });
    const w = await s2h.next('welcome');
    const g = await joinRoom(s.port, w.code, 'Guest');
    assert.match((await g.next('closed', 1000)).reason, /host left/i);
    dead.ws.terminate(); s2h.ws.terminate(); h.ws.close();
  } finally {
    await s.stop();
  }
});

// ============================================================================================
console.log('src/net client');
const C = await startServer();
const base = `http://127.0.0.1:${C.port}`;
const mk = (extra) => createNet({ url: base, WebSocketImpl: WebSocket, pingInterval: 50, ...extra });
const once = (net, ev, pred = () => true, ms = 1500) => new Promise((res, rej) => {
  const timer = setTimeout(() => { off(); rej(new Error(`timeout waiting for '${ev}'`)); }, ms);
  const off = net.on(ev, (...args) => { if (pred(...args)) { clearTimeout(timer); off(); res(args); } });
});

await test('import is side-effect free; unconnected state', async () => {
  const n = createNet();
  assert.equal(n.connected, false);
  assert.equal(n.isHost, false);
  assert.equal(n.id, null);
  assert.equal(n.code, null);
  assert.deepEqual(n.peers, []);
  assert.equal(n.send('x', 1), false);
  assert.equal(n.setMeta({ a: 1 }), false);
  assert.equal(n.setRoomState({ a: 1 }), false);
  n.leave();
  assert.deepEqual(await n.joinUrls(), []);
});

await test('host / join / peers / meta / room / messages between three clients', async () => {
  const h = mk(), a = mk(), b = createNet({ url: `ws://127.0.0.1:${C.port}/mp`, pingInterval: 50 }); // b: node's global WebSocket
  const { code } = await h.host({ name: 'Hana', meta: { carId: 'buggy' } });
  assert.match(code, /^[A-Z]{4}$/);
  assert.equal(h.connected, true);
  assert.equal(h.isHost, true);
  assert.equal(h.code, code);
  assert.deepEqual(h.peers, [{ id: h.id, name: 'Hana', isHost: true, meta: { carId: 'buggy' } }]);

  let hp = once(h, 'peers', (p) => p.length === 2);
  assert.deepEqual(await a.join(code.toLowerCase(), { name: 'Ann', meta: { carId: 'kart' } }), { code });
  await hp;
  hp = once(h, 'peers', (p) => p.length === 3);
  const ap = once(a, 'peers', (p) => p.length === 3);
  await b.join(code, { name: 'Bob' });
  await hp; await ap;
  assert.equal(a.isHost, false);
  assert.equal(b.connected, true);
  const expect = [
    { id: h.id, name: 'Hana', isHost: true, meta: { carId: 'buggy' } },
    { id: a.id, name: 'Ann', isHost: false, meta: { carId: 'kart' } },
    { id: b.id, name: 'Bob', isHost: false, meta: {} },
  ];
  for (const n of [h, a, b]) assert.deepEqual(n.peers, expect);

  // setMeta
  let waits = [h, a, b].map((n) => once(n, 'peers', (p) => p[1].meta.carId === 'truck'));
  a.setMeta({ carId: 'truck' });
  await Promise.all(waits);
  for (const n of [h, a, b]) assert.deepEqual(n.peers[1].meta, { carId: 'truck' });

  // setRoomState: host only
  assert.equal(a.setRoomState({ locked: true }), false);
  waits = [h, a, b].map((n) => once(n, 'room', (r) => r.settings?.laps === 5));
  assert.equal(h.setRoomState({ settings: { trackId: 't1', laps: 5 } }), true);
  await Promise.all(waits);
  for (const n of [h, a, b]) assert.deepEqual(n.room, { settings: { trackId: 't1', laps: 5 } });

  // broadcast: everyone but the sender
  const got = { h: [], a: [], b: [] };
  const offs = [h.on('message', (...x) => got.h.push(x)), a.on('message', (...x) => got.a.push(x)), b.on('message', (...x) => got.b.push(x))];
  a.send('state', [1, 2, 3]);
  await sleep(80);
  assert.deepEqual(got, { h: [['state', [1, 2, 3], a.id]], a: [], b: [['state', [1, 2, 3], a.id]] });
  // targeted
  h.send('fx', { boost: 2 }, b.id);
  await sleep(80);
  assert.deepEqual(got.b[1], ['fx', { boost: 2 }, h.id]);
  assert.equal(got.a.length, 0);
  assert.equal(got.h.length, 1);
  offs.forEach((off) => off());
  a.send('state', 1);
  await sleep(50);
  assert.equal(got.h.length, 1, 'off() unsubscribes');

  // ping
  const [ms] = await once(a, 'ping');
  assert.equal(typeof ms, 'number');
  assert.ok(ms >= 0 && ms < 500);
  assert.equal(a.ping, ms);

  // joinUrls
  const urls = await a.joinUrls();
  assert.ok(urls.length >= 1);
  for (const u of urls) assert.match(u, new RegExp(`^http://[\\d.]+:${C.port}/\\?join=${code}$`));
  assert.equal(urls[urls.length - 1], `${base}/?join=${code}`);

  // locked room
  const late = mk();
  h.setRoomState({ locked: true });
  await once(a, 'room', (r) => r.locked === true);
  await assert.rejects(late.join(code, { name: 'Late' }), /already started/i);
  assert.equal(late.connected, false);
  h.setRoomState({ locked: false });
  await once(a, 'room', (r) => r.locked === false);

  // client leaves cleanly: no 'close' on itself, peers updated elsewhere
  let closedSelf = false;
  a.on('close', () => { closedSelf = true; });
  waits = [h, b].map((n) => once(n, 'peers', (p) => p.length === 2));
  a.leave();
  assert.equal(a.connected, false);
  assert.equal(a.code, null);
  assert.deepEqual(a.peers, []);
  await Promise.all(waits);
  assert.deepEqual(h.peers.map((p) => p.name), ['Hana', 'Bob']);
  assert.equal(closedSelf, false);

  // rejoin with the same instance works
  hp = Promise.all([h, b].map((n) => once(n, 'peers', (p) => p.length === 3)));
  await a.join(code, { name: 'Ann2' });
  await hp;
  assert.deepEqual(b.peers.map((p) => p.name), ['Hana', 'Bob', 'Ann2']);

  // host leaves: everybody else gets 'close' with a reason
  const closes = [a, b].map((n) => once(n, 'close'));
  h.leave();
  for (const [info] of await Promise.all(closes)) assert.match(info.reason, /host left/i);
  for (const n of [h, a, b]) {
    assert.equal(n.connected, false);
    assert.equal(n.id, null);
    assert.deepEqual(n.peers, []);
  }
  await sleep(30);
  assert.equal(C.relay.rooms.size, 0);
});

await test('join errors: unknown room, bad code, full room', async () => {
  const n = mk();
  await assert.rejects(n.join('QQQQ', { name: 'x' }), /not found/i);
  await assert.rejects(n.join('12', { name: 'x' }), /4-letter/i);
  assert.equal(n.connected, false);
  const h = mk();
  const { code } = await h.host({ name: 'H' });
  const others = [];
  for (let i = 0; i < 7; i++) { const c = mk(); await c.join(code, { name: 'P' + i }); others.push(c); }
  await assert.rejects(n.join(code, { name: 'x' }), /full/i);
  await sleep(30);
  assert.equal(h.peers.length, 8);
  h.leave();
  await sleep(50);
  for (const c of others) assert.equal(c.connected, false);
});

await test('kick + server lost -> close events; unreachable server / timeout -> rejections', async () => {
  const s = await startServer();
  const u = `http://127.0.0.1:${s.port}`;
  const h = createNet({ url: u, WebSocketImpl: WebSocket }), a = createNet({ url: u, WebSocketImpl: WebSocket }), b = createNet({ url: u, WebSocketImpl: WebSocket });
  const { code } = await h.host({ name: 'H' });
  await a.join(code, { name: 'A' });
  await b.join(code, { name: 'B' });
  const kicked = once(a, 'close');
  assert.equal(b.kick(a.id), false);
  h.kick(a.id);
  assert.match((await kicked)[0].reason, /removed/i);
  const lost = [h, b].map((n) => once(n, 'close'));
  await s.stop(); // server dies
  for (const [info] of await Promise.all(lost)) assert.equal(info.reason, 'Connection lost');
  assert.equal(h.connected, false);
  await assert.rejects(h.host({ name: 'H' }), /could not reach/i);

  // a server that accepts TCP but never answers -> timeout
  const mute = http.createServer();
  const held = [];
  mute.on('upgrade', (req, socket) => held.push(socket));
  await new Promise((r) => mute.listen(0, '127.0.0.1', r));
  const t = createNet({ url: `http://127.0.0.1:${mute.address().port}`, WebSocketImpl: WebSocket, timeout: 200 });
  await assert.rejects(t.host({ name: 'H' }), /did not answer/i);
  for (const sk of held) sk.destroy();
  await new Promise((r) => mute.close(r));
});
await C.stop();

console.log(`\n${passed} passed, ${failures.length} failed`);
process.exit(failures.length ? 1 : 0);
