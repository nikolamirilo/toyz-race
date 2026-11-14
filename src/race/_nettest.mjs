// node src/race/_nettest.mjs [--latency=40-120] [--loss=0.02] [--track=garden] [--ordered] [--quick]
// Multiplayer sync tests: one host Race + two client Races (real cars, real tracks, own THREE.Scene each),
// connected by an in-memory fake network with latency, jitter and packet loss, stepped with different variable dts.
import * as THREE from 'three';
import { Race } from './index.js';
import { ITEM_TUNING } from './items.js';
import { AIDriver } from '../cars/index.js';
import { buildTrack } from '../tracks/index.js';

const arg = (name, def) => {
  const a = process.argv.find((x) => x.startsWith('--' + name + '='));
  return a ? a.slice(name.length + 3) : def;
};
const [LAT_MIN, LAT_MAX] = arg('latency', '40-120').split('-').map((x) => +x / 1000);
const LOSS = +arg('loss', '0.02');
const ORDERED = process.argv.includes('--ordered');
const TRACK_A = arg('track', 'garden');

let failures = 0, checks = 0;
function ok(cond, msg) {
  checks++;
  if (!cond) { failures++; console.error('  FAIL: ' + msg); }
  return !!cond;
}
function section(name) { console.log('\n# ' + name); }
const fin = (n) => typeof n === 'number' && Number.isFinite(n);
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ---------------------------------------------------------------------------------------------- session
class Session {
  constructor({ trackId, laps, bots, seed = 1, latMin = LAT_MIN, latMax = LAT_MAX, loss = LOSS, clientDelay = [0.15, 0.3] }) {
    this.T = 0;
    this.rnd = rng(seed);
    this.latMin = latMin; this.latMax = latMax; this.loss = loss;
    this.queue = [];
    this.linkLast = new Map();
    this.stats = { sent: 0, lost: 0, bytesDown: 0, bytesUp: 0 };
    this.sims = [];
    this.trackId = trackId; this.laps = laps;
    this.ev = {};
    this.err = { bots: mk(), hostCar: mk(), otherClient: mk(), all: mk(), hostPuppet: mk(), truth: mk() };
    this.jitter = { frames: 0, bad: 0, worst: 0, snaps: 0 };
    this.lapTimer = { frames: 0, bad: 0 };
    this.pick = { checks: 0, bad: 0, taken: 0 };
    this.nan = 0;
    this.measure = true;

    const remotes = [{ id: 'A', name: 'Alice', carId: null }, { id: 'B', name: 'Bob', carId: null }];
    const host = this.addSim('H', 1 / 60, (scene, track) => new Race({
      scene, track, playerCarId: 'none', playerName: 'Hosty', laps, opponents: 2 + bots, difficulty: 1, mode: 'race',
      random: rng(seed * 7 + 1), net: { role: 'host', localId: 'H', remotes },
    }));
    this.host = host;
    this.roster = JSON.parse(JSON.stringify(host.race.getRoster()));
    this.pending = [
      { at: clientDelay[0], id: 'A', base: 1 / 50 },
      { at: clientDelay[1], id: 'B', base: 1 / 90 },
    ];
    // host-side pickup history (for the "consumed crates disappear on clients" check)
    const pk = host.race.pickups;
    this.pkHist = pk ? pk.spots.map(() => ({ off: false, since: -10 })) : [];
  }

  addSim(id, base, make) {
    const scene = new THREE.Scene();
    const track = buildTrack(this.trackId);
    scene.add(track.group);
    const race = make(scene, track);
    const sim = { id, race, scene, track, base, t: this.T, last: this.T, frames: 0, ai: null, fire: false, over: null,
      hist: null, prev: new Map(), lastLapTime: 0, lapEvt: false, goAt: -1, override: null, alive: true };
    this.ev[id] = {};
    const count = (name) => race.on(name, (...a) => {
      const e = this.ev[id];
      (e[name] || (e[name] = [])).push(a);
    });
    for (const n of ['countdown', 'go', 'lap', 'finalLap', 'finish', 'raceOver', 'pickup', 'fire', 'hit', 'boost', 'crash', 'block', 'explode', 'tow', 'land']) count(n);
    race.on('go', () => { sim.goAt = this.T; });
    race.on('raceOver', (st) => { sim.over = st; });
    race.on('lap', (car) => { if (car === race.player) sim.lapEvt = true; });
    race.on('net', (msg, toId) => this.send(id, toId, msg));
    if (id !== 'H') sim.ai = new AIDriver(race.player, { skill: 0.8 });
    this.sims.push(sim);
    return sim;
  }

  sim(id) { return this.sims.find((s) => s.id === id); }

  send(from, toId, msg) {
    const text = JSON.stringify(msg);
    const targets = from === 'H' ? (toId == null ? ['A', 'B'] : [toId]) : ['H'];
    for (const to of targets) {
      this.stats.sent++;
      if (from === 'H') this.stats.bytesDown += text.length; else this.stats.bytesUp += text.length;
      if (this.rnd() < this.loss) { this.stats.lost++; continue; }
      let due = this.T + this.latMin + (this.latMax - this.latMin) * this.rnd();
      if (ORDERED) {
        const key = from + to;
        due = Math.max(due, (this.linkLast.get(key) || 0) + 1e-6);
        this.linkLast.set(key, due);
      }
      this.queue.push({ due, from, to, text });
    }
  }

  deliver(upTo) {
    const q = this.queue;
    if (!q.length) return;
    q.sort((a, b) => a.due - b.due);
    let n = 0;
    while (n < q.length && q[n].due <= upTo) n++;
    const now = q.splice(0, n);
    for (const m of now) {
      const s = this.sim(m.to);
      if (s && s.alive) s.race.netReceive(JSON.parse(m.text), m.from);
    }
  }

  /** run until predicate(session) is true or `maxT` seconds of simulated time passed */
  run(until, maxT = 600, hook = null) {
    const end = this.T + maxT;
    while (this.T < end) {
      while (this.pending.length && this.pending[0].at <= this.T) {
        const p = this.pending.shift();
        this.addSim(p.id, p.base, (scene, track) => new Race({
          scene, track, playerCarId: 'x', playerName: p.id, laps: this.laps, opponents: this.roster.length - 1,
          random: rng(p.id.charCodeAt(0)), net: { role: 'client', localId: p.id, roster: JSON.parse(JSON.stringify(this.roster)) },
        }));
      }
      // next frame of whichever sim is due first
      let s = null;
      for (const x of this.sims) if (x.alive && (!s || x.t < s.t)) s = x;
      if (this.pending.length && this.pending[0].at < s.t) { this.T = this.pending[0].at; continue; }
      this.T = s.t;
      this.deliver(this.T);
      const dt = Math.min(1 / 30, Math.max(1 / 144, this.T - s.last));
      this.step(s, dt);
      s.last = this.T;
      let next = s.base * (0.8 + 0.4 * this.rnd());
      if (this.rnd() < 0.03) next *= 2; // hitch
      s.t = this.T + Math.min(1 / 30, Math.max(1 / 144, next));
      if (hook) hook(this, s);
      if (until(this)) return true;
    }
    return false;
  }

  step(s, dt) {
    const race = s.race;
    let pc = null;
    if (s.ai) {
      s.ai.update(dt, s.track, race.cars);
      const c = race.player.controls;
      pc = { throttle: c.throttle, steer: c.steer, handbrake: c.handbrake, fire: s.fire };
      if (s.override) pc = { ...pc, ...s.override };
      s.fire = false;
    } else {
      // the host "human" is a stand-in too
      if (!s.hostAi) s.hostAi = new AIDriver(race.player, { skill: 0.8 });
      s.hostAi.update(dt, s.track, race.cars);
      const c = race.player.controls;
      pc = { throttle: c.throttle, steer: c.steer, handbrake: c.handbrake, fire: s.fire };
      s.fire = false;
    }
    race.update(dt, pc);
    s.frames++;
    if (s.frames % 20 === 0) this.checkFinite(s);
    if (s.id === 'H') this.afterHost(s, dt); else this.afterClient(s, dt);
  }

  checkFinite(s) {
    const race = s.race;
    for (const car of race.cars) {
      if (!(fin(car.pos.x) && fin(car.pos.y) && fin(car.pos.z) && fin(car.heading) && fin(car.speed) && fin(car.vel.x) && fin(car.vel.z))) this.nan++;
      const i = race.info(car);
      if (!(fin(i.progress) && fin(i.lapTime) && fin(i.position))) this.nan++;
    }
    for (const ps of [race.fx, race.smoke]) for (let k = 0; k < ps.count * 3; k++) if (!fin(ps._pos[k])) { this.nan++; break; }
    if (!fin(race.time)) this.nan++;
  }

  afterHost(s, dt) {
    const race = s.race;
    s.hist = race.cars.map((c) => ({ x: c.pos.x, z: c.pos.z, vx: c.vel.x, vz: c.vel.z }));
    s.histT = this.T;
    this.puppetJitter(s, dt);
    // host's puppet of a client car vs that client's real car
    if (race.state !== 'countdown' && this.measure) {
      for (const st of race.states) {
        if (!st.pup) continue;
        const cs = this.sim(st.netId);
        if (!cs || !cs.alive || !cs.selfT) continue;
        const e = this.T - cs.selfT;
        add(this.err.hostPuppet, Math.hypot(st.car.pos.x - (cs.self.x + cs.self.vx * e), st.car.pos.z - (cs.self.z + cs.self.vz * e)));
      }
    }
    const pk = race.pickups;
    if (pk) pk.spots.forEach((sp, i) => {
      const off = sp.timer > 0, h = this.pkHist[i];
      if (off !== h.off) { h.off = off; h.since = this.T; if (off) this.pick.taken++; }
    });
  }

  afterClient(s, dt) {
    const race = s.race, host = this.host;
    const me = race.player;
    s.self = { x: me.pos.x, z: me.pos.z, vx: me.vel.x, vz: me.vel.z };
    s.selfT = this.T;
    this.puppetJitter(s, dt);
    if (race.state !== 'countdown' && host.hist && this.measure) {
      const e = this.T - host.histT;
      race.states.forEach((st, i) => {
        if (!st.pup) return;
        const h = host.hist[i];
        const d = Math.hypot(st.car.pos.x - (h.x + h.vx * e), st.car.pos.z - (h.z + h.vz * e));
        add(this.err.all, d);
        const hst = host.race.states[i];
        if (hst === host.race._pst) add(this.err.hostCar, d);
        else if (hst.pup) {
          add(this.err.otherClient, d);
          const o = this.sim(hst.netId);
          if (o && o.alive && o.selfT) {
            const eo = this.T - o.selfT;
            add(this.err.truth, Math.hypot(st.car.pos.x - (o.self.x + o.self.vx * eo), st.car.pos.z - (o.self.z + o.self.vz * eo)));
          }
        } else add(this.err.bots, d);
      });
    }
    // lap timer must run smoothly (it is derived from the synced clock)
    if (race.state === 'racing') {
      const lt = race.info(me).lapTime;
      if (s.wasRacing && !s.lapEvt) {
        const d = lt - s.lastLapTime;
        this.lapTimer.frames++;
        if (d < -1e-9 || d > dt * 1.25 + 0.012) { this.lapTimer.bad++; if (this.lapTimer.bad < 4) console.log(`   lapTime step ${d.toFixed(4)} at dt ${dt.toFixed(4)} (${s.id}, T=${this.T.toFixed(2)})`); }
      }
      s.lastLapTime = lt; s.wasRacing = true; s.lapEvt = false;
    }
    // crates: gone on the host for a while => gone here; back on the host for a while => back here
    const pk = race.pickups;
    if (pk && race.state !== 'countdown' && s.frames % 5 === 0) {
      pk.spots.forEach((sp, i) => {
        const h = this.pkHist[i], age = this.T - h.since;
        if (h.off && age > 0.45 && age < 5) { this.pick.checks++; if (!(sp.timer > 0)) { this.pick.bad++; console.log('   crate', i, 'gone on host for', age.toFixed(2), 'but present on', s.id, 'T', this.T.toFixed(2)); } }
        if (!h.off && age > 1.2 && !(sp.pred > 0)) { this.pick.checks++; if (sp.timer > 0) { this.pick.bad++; console.log('   crate', i, 'present on host for', age.toFixed(2), 'but gone on', s.id, 'pred', sp.pred.toFixed(2), 'off', sp.off, 'T', this.T.toFixed(2)); } }
      });
    }
  }

  /** frame-to-frame displacement of every puppet must look like driving, not teleporting */
  puppetJitter(s, dt) {
    const race = s.race;
    for (const st of race.states) {
      if (!st.pup) { s.prev.delete(st); continue; }
      const car = st.car, p = s.prev.get(st);
      const sp = Math.hypot(car.vel.x, car.vel.z);
      if (p && race.state !== 'countdown') {
        const d = Math.hypot(car.pos.x - p.x, car.pos.z - p.z);
        if (st.teleported) this.jitter.snaps++;
        else {
          this.jitter.frames++;
          const allowed = 2.5 * Math.max(sp, p.sp) * dt + 6.5 * dt;
          if (d > allowed) {
            this.jitter.bad++;
            if (this.jitter.bad < 6) console.log(`   jitter: ${s.id} car ${st.index} moved ${d.toFixed(2)} (allowed ${allowed.toFixed(2)}, speed ${sp.toFixed(1)}, dt ${dt.toFixed(4)}) T=${this.T.toFixed(2)}`);
          }
          if (sp > 8) this.jitter.worst = Math.max(this.jitter.worst, d / (sp * dt));
        }
      }
      s.prev.set(st, { x: car.pos.x, z: car.pos.z, sp });
    }
  }

  dispose() {
    for (const s of this.sims) {
      if (s.alive) s.race.dispose();
      s.alive = false;
      ok(s.scene.children.length === 1 && s.scene.children[0] === s.track.group, `dispose leaves only the track in scene ${s.id} (children: ${s.scene.children.length})`);
      s.track.dispose && s.track.dispose();
    }
  }
}
function mk() { return { n: 0, sum: 0, max: 0 }; }
function add(e, d) { e.n++; e.sum += d; if (d > e.max) e.max = d; }
const fmt = (e) => (e.n ? `mean ${(e.sum / e.n).toFixed(3)}  max ${e.max.toFixed(2)}  (n=${e.n})` : 'n/a');
const mean = (e) => (e.n ? e.sum / e.n : 0);

function compareStandings(a, b, label) {
  const sa = a.standings(), sb = b.standings();
  let same = sa.length === sb.length;
  for (let i = 0; same && i < sa.length; i++) {
    const x = sa[i], y = sb[i];
    if (x.index !== y.index || x.position !== y.position || x.finished !== y.finished || x.name !== y.name ||
      x.isHuman !== y.isHuman || Math.abs((x.finishTime || 0) - (y.finishTime || 0)) > 0.0015 ||
      Math.abs((x.bestLap || 0) - (y.bestLap || 0)) > 0.0015 || x.lapsDone !== y.lapsDone) {
      same = false;
      console.log('   mismatch at', i, JSON.stringify({ ...x, car: undefined }), JSON.stringify({ ...y, car: undefined }));
    }
  }
  ok(same, label);
}

// ============================================================================== A. full race: 3 humans + 4 bots
section(`A. full 2-lap race on ${TRACK_A}: 3 humans + 4 bots, latency ${LAT_MIN * 1000}-${LAT_MAX * 1000} ms (jitter), loss ${LOSS * 100}%${ORDERED ? ', ordered' : ''}`);
{
  const S = new Session({ trackId: TRACK_A, laps: 2, bots: 4, seed: 11 });
  const H = S.host.race;
  ok(H.cars.length === 7 && H.netRole === 'host', '7 cars on the host');
  ok(H.getRoster().filter((r) => r.kind === 'human').length === 3 && H.getRoster().filter((r) => r.kind === 'bot').length === 4, '3 humans + 4 bots in the roster');
  ok(H.states.filter((s) => s.ai).length === 4 && H.states.filter((s) => s.pup).length === 2, 'no AIDriver for remote humans');
  ok(H.getRoster().every((r, i) => r.slot === i), 'roster is in grid order');

  // malformed input must never throw
  let threw = false;
  const junk = [null, undefined, 42, 'x', [], {}, { t: 'zz' }, { t: 's' }, { t: 's', n: 'a', s: 'x' }, { t: 's', n: 1, s: [1, 2, 3] },
    { t: 's', n: 2, c: NaN, s: new Array(12).fill(null) }, { t: 'f', f: {} }, { t: 'p', k: 'q' }, { t: 'w' }, { t: 'w', n: 'x', c: 'y' },
    { t: 'e', e: 'no' }, { t: 'e', e: [[1e9, 'l', 99], [1e9 + 1, 'x'], [1e9 + 2, 'p', 0, 77], 5, null, [1e9 + 3, 'l', 0, {}, 'a']] },
    { t: 'q', k: 'a' }, { t: 'o', o: 5 }, { t: 'o' },
    // new kinds / fields with garbage in them
    { t: 'e', e: [[1e9 + 10, 't', 0, 99, 5], [1e9 + 11, 't', 0, 0, 5], [1e9 + 12, 't', 1, 0, 'x'], [1e9 + 13, 't', 1, {}, 2], [1e9 + 14, 't'],
      [1e9 + 15, 'x', 0, 6, 0, 0, 0, 0, 0, 0, 'a', {}, -5], [1e9 + 16, 'x', 1, 7, 0, 0, 0, 0, 0, 0, 1e9, null, [1]], [1e9 + 17, 'zz', 0, 1, 2]] }];
  try { for (const j of junk) { H.netReceive(j, 'A'); H.netReceive(j, 'nobody'); H.netReceive(j); } } catch (e) { threw = true; console.error(e); }
  ok(!threw, 'host netReceive ignores malformed / unknown messages');

  let fuzzed = false;
  const done = S.run((s) => s.sims.length === 3 && s.sims.every((x) => x.over), 300, (s) => {
    if (!fuzzed && s.sims.length === 3 && s.T > 1) {
      fuzzed = true;
      try { for (const j of junk) { s.sim('A').race.netReceive(j, 'H'); s.sim('B').race.netReceive(j); } } catch (e) { threw = true; console.error(e); }
    }
  });
  ok(!threw, 'client netReceive ignores malformed / unknown messages');
  ok(done, 'race is over on the host and both clients (T=' + S.T.toFixed(1) + ' s)');
  const A = S.sim('A').race, B = S.sim('B').race;

  ok(JSON.stringify(H.getRoster()) === JSON.stringify(A.getRoster()) && JSON.stringify(H.getRoster()) === JSON.stringify(B.getRoster()), 'rosters identical on all three');
  ok(A.netRole === 'client' && A.player.isPlayer && A.player.name === 'Alice' && !A.player.puppet && A.cars.filter((c) => c.puppet).length === 6, 'client A: own car local, 6 puppets');
  ok(B.player.name === 'Bob' && B.cars.indexOf(B.player) === H.states.find((s) => s.netId === 'B').index, 'client B: same car index as on the host');
  ok(A.cars.every((c, i) => c.def.id === H.cars[i].def.id && c.name === H.cars[i].name), 'same cars / names per index');

  const goH = S.host.goAt, goA = S.sim('A').goAt, goB = S.sim('B').goAt;
  console.log(`   GO at T: host ${goH.toFixed(3)}  A ${goA.toFixed(3)}  B ${goB.toFixed(3)}`);
  ok(Math.abs(goA - goH) < 0.06 && Math.abs(goB - goH) < 0.06, 'GO lines up within 60 ms');
  ok(Math.abs(A.time - H.time) < 0.06 && Math.abs(B.time - H.time) < 0.06, `race clocks agree (A ${(A.time - H.time).toFixed(3)}, B ${(B.time - H.time).toFixed(3)})`);

  console.log('   puppet error vs host position, per frame [units]:');
  console.log('     all puppets      ' + fmt(S.err.all));
  console.log('     bots             ' + fmt(S.err.bots));
  console.log('     host human car   ' + fmt(S.err.hostCar));
  console.log('     other client car ' + fmt(S.err.otherClient) + '   (vs its owner\'s real car: ' + fmt(S.err.truth) + ')');
  console.log('   host puppet vs the owning client\'s real car: ' + fmt(S.err.hostPuppet));
  ok(mean(S.err.all) < 1.5, 'mean puppet error < 1.5 units');
  ok(mean(S.err.bots) < 1.5 && mean(S.err.hostCar) < 1.5 && mean(S.err.otherClient) < 1.5, 'mean error < 1.5 for every kind of car');
  ok(mean(S.err.hostPuppet) < 1.5, 'host-side puppets within 1.5 units of the owners\' cars');
  ok(S.err.all.max < 12, 'max puppet error stays bounded (' + S.err.all.max.toFixed(2) + ')');
  console.log(`   teleport-jitter: ${S.jitter.bad} bad of ${S.jitter.frames} puppet frames, worst displacement ${S.jitter.worst.toFixed(2)} x speed*dt, snaps ${S.jitter.snaps}`);
  ok(S.jitter.bad === 0, 'no teleport-jitter (displacement <= 2.5 x speed x dt)');
  console.log(`   lap timer: ${S.lapTimer.bad} uneven steps of ${S.lapTimer.frames}`);
  ok(S.lapTimer.bad === 0, 'client lap timer runs smoothly');
  console.log(`   pickups: ${S.pick.taken} taken on host, ${S.pick.bad} mismatches in ${S.pick.checks} checks`);
  ok(S.pick.taken > 5 && S.pick.checks > 100 && S.pick.bad === 0, 'crates consumed on the host disappear (and come back) on clients');

  compareStandings(H, A, 'final standings identical: host vs A');
  compareStandings(H, B, 'final standings identical: host vs B');
  ok(JSON.stringify(S.host.over.map((e) => e.index)) === JSON.stringify(S.sim('A').over.map((e) => e.index)) &&
    JSON.stringify(S.host.over.map((e) => e.index)) === JSON.stringify(S.sim('B').over.map((e) => e.index)), "'raceOver' payload order identical");
  const st = H.standings();
  ok(st.filter((e) => e.isHuman).length === 3 && st.filter((e) => e.isHuman).every((e) => e.finished && !e.estimated), 'all three humans finished with real times');
  ok(A.standings().filter((e) => e.isPlayer).length === 1 && A.standings().find((e) => e.isPlayer).name === 'Alice', 'isPlayer = local player on the client');
  for (const [n, R] of [['A', A], ['B', B]]) {
    ok(R.states.every((s, i) => s.lapsDone === H.states[i].lapsDone || !H.states[i].finished), n + ': lap counts agree');
    ok(R.state === 'finished' && R.info(R.player).finished, n + ': local player finished');
    const hi = H.info(H.cars[R.cars.indexOf(R.player)]), ci = R.info(R.player);
    ok(Math.abs(hi.finishTime - ci.finishTime) < 0.002 && Math.abs(hi.bestLap - ci.bestLap) < 0.002 && hi.position === ci.position, n + ': info() matches the host');
  }
  // events
  for (const id of ['A', 'B']) {
    const e = S.ev[id], h = S.ev.H;
    const names = ['countdown', 'go', 'lap', 'finalLap', 'finish', 'raceOver', 'pickup', 'fire', 'boost'];
    ok(names.every((n) => e[n] && e[n].length), id + ': events fired: ' + names.map((n) => n + '=' + (e[n] ? e[n].length : 0)).join(' ') + ` hit=${(e.hit || []).length} crash=${(e.crash || []).length}`);
    ok(e.countdown.length === 3 && e.countdown.map((a) => a[0]).join() === '3,2,1' && e.go.length === 1, id + ': countdown 3,2,1 + go');
    for (const n of ['lap', 'finalLap', 'finish', 'pickup', 'fire', 'hit', 'block', 'tow']) {
      ok((e[n] || []).length === (h[n] || []).length, `${id}: same number of '${n}' events as the host (${(e[n] || []).length} vs ${(h[n] || []).length})`);
    }
    ok(e.raceOver.length === 1, id + ": 'raceOver' exactly once");
  }
  ok(S.nan === 0, 'no NaN anywhere');
  const secs = S.T;
  console.log(`   traffic: host->each client ${(S.stats.bytesDown / 2 / secs / 1024).toFixed(1)} KB/s, each client->host ${(S.stats.bytesUp / 2 / secs / 1024).toFixed(1)} KB/s, lost ${S.stats.lost}/${S.stats.sent} packets`);
  S.dispose();
}

// ============================================================================== B. directed scenario
section('B. items, effects, shield, respawn, dropRemote (kitchen, 4 laps, 3 humans + 2 bots)');
{
  const S = new Session({ trackId: 'kitchen', laps: 4, bots: 2, seed: 5 });
  const H = S.host.race;
  S.run((s) => s.sims.length === 3 && s.sims.every((x) => x.race.state === 'racing'), 30);
  const sa = S.sim('A'), sb = S.sim('B');
  const A = sa.race, B = sb.race;
  ok(H.state === 'racing' && A.state === 'racing' && B.state === 'racing', 'all racing');
  const hA = H.states.find((s) => s.netId === 'A'), hB = H.states.find((s) => s.netId === 'B');
  const iA = hA.index, iB = hB.index;
  // bots must not interfere with the script
  for (const st of H.states) if (st.ai) st.ai = { update() {}, wantsToFire: false, skill: 0 }, st.car.controls.throttle = 0;
  H.pickups.spots.forEach((s) => { s.timer = 1e9; }); // and no random pickups
  const wait = (sec) => { const t = S.T + sec; S.run((s) => s.T >= t, sec + 5); };
  const evCount = (id, name, pred = () => true) => (S.ev[id][name] || []).filter((a) => pred(...a)).length;
  const until = (pred, sec) => { const t = S.T + sec; return S.run((s) => pred() || s.T >= t, sec + 5) && pred(); };
  const clearImmune = () => { for (const st of H.states) { st.hitImmune = 0; st.slowImmune = 0; } };
  const hsp = (car) => Math.hypot(car.vel.x, car.vel.z);

  // --- 1. zap ring from the host's car right after the start: both remote cars are close
  H.giveItem(H.player, 'pulse');
  H.useItem(H.player);
  let spunA = false, spunB = false, ringB = false;
  S.run((s) => {
    spunA = spunA || A.player.spinTime > 0; spunB = spunB || B.player.spinTime > 0;
    ringB = ringB || B.weapons.pulses.length > 0;
    return spunA && spunB && ringB;
  }, 1.5);
  ok(spunA && spunB, 'zap: both clients\' own cars really spin (effect message applied locally)');
  ok(ringB, 'zap: ring visual appears on clients');
  ok(evCount('A', 'hit', (c, id) => id === 'pulse') >= 2 && evCount('B', 'hit', (c, id) => c === B.player && id === 'pulse') === 1, "zap: 'hit' events on clients");
  ok(!hA.car.spinTime || hA.car.puppet, 'host did not take over the puppet');
  wait(2.5);

  // --- 2. client fire requests: rocket / marble / goo / turbo
  const fireTest = (itemId, list, label) => {
    // a projectile / puddle can be used up within a few ms (car right in front): retry until one lives long enough to be seen
    let visible = false, tries = 0;
    while (!visible && tries++ < 5) {
      clearImmune();
      H.giveItem(hA.car, itemId);
      const got = until(() => A.info(A.player).item && A.info(A.player).item.id === itemId, 1.5);
      ok(got, `${label}: held item replicates to the owner's HUD`);
      ok(until(() => B.info(B.cars[iA]).item && B.info(B.cars[iA]).item.id === itemId, 1), `${label}: held item visible on the other client`);
      const nH = evCount('H', 'fire'), nB = evCount('B', 'fire'), nA = evCount('A', 'fire');
      sa.fire = true;
      let seenB = false, seenA = false, seenH = false;
      S.run((s) => {
        if (list) { seenB = seenB || B.weapons[list].length > 0; seenA = seenA || A.weapons[list].length > 0; seenH = seenH || H.weapons[list].length > 0; }
        return evCount('B', 'fire') > nB && evCount('A', 'fire') > nA && (!list || (seenA && seenB));
      }, 1.5);
      const last = (id) => S.ev[id].fire[S.ev[id].fire.length - 1];
      ok(evCount('H', 'fire') === nH + 1 && last('H')[0] === hA.car && last('H')[1].id === itemId, `${label}: client fire request fires on the host`);
      ok(evCount('B', 'fire') === nB + 1 && last('B')[0] === B.cars[iA] && last('B')[1].id === itemId, `${label}: 'fire' event on the other client`);
      ok(evCount('A', 'fire') === nA + 1 && last('A')[0] === A.player, `${label}: 'fire' event on the firing client`);
      ok(A.info(A.player).item === null && hA.item === null, `${label}: item consumed`);
      visible = !list || (seenH && seenA && seenB);
      if (!visible) wait(2.5);
    }
    if (list) ok(visible, `${label}: ${list} visible on host and both clients (tries: ${tries})`);
    return visible;
  };
  fireTest('rocket', 'rockets', 'rocket');
  wait(3);
  ok(B.weapons.rockets.length === 0 && A.weapons.rockets.length === 0 && H.weapons.rockets.length === 0, 'rocket: gone everywhere after it exploded');
  fireTest('marble', 'marbles', 'marble');
  wait(1);
  if (fireTest('glue', 'puddles', 'goo')) {
    const hp = H.weapons.puddles[H.weapons.puddles.length - 1], bp = hp && B.weapons.puddles.find((p) => p.id === hp.id);
    ok(!hp || (bp && Math.abs(bp.x - hp.x) < 0.02 && Math.abs(bp.z - hp.z) < 0.02), 'goo: same puddle (id + place) on the client');
  }
  for (const p of H.weapons.puddles) p.life = 0; // clean up
  for (const m of H.weapons.marbles) m.life = 0;
  wait(1);
  ok(B.weapons.puddles.length === 0 && B.weapons.marbles.length === 0, 'goo / marble: removed on clients when removed on the host');
  {
    const nBoostA = evCount('A', 'boost', (c) => c === A.player), nBoostB = evCount('B', 'boost', (c) => c === B.cars[iA]);
    A.player.boostTime = 0;
    fireTest('turbo', null, 'turbo');
    const boosted = until(() => A.player.boostTime > 1 && B.cars[iA].boostTime > 0.5, 1.5);
    ok(boosted, 'turbo: the owner\'s real car boosts, the puppet on the other client shows it');
    wait(0.2);
    ok(evCount('A', 'boost', (c) => c === A.player) > nBoostA && evCount('B', 'boost', (c) => c === B.cars[iA]) > nBoostB, "turbo: 'boost' events on both clients");
  }
  // a fire request without an item does nothing
  {
    const n = evCount('H', 'fire');
    sa.fire = true; wait(0.6);
    ok(evCount('H', 'fire') === n, 'fire request without an item is ignored by the host');
  }
  wait(2);

  // --- 3. weapons hitting a client's car: rocket, marble, goo
  const hitTest = (label, itemId, hst, cs, spawn) => {
    let hit = false, tries = 0, spun = false, air = false;
    const R = cs.race;
    while (!hit && tries++ < 6) {
      clearImmune();
      const nh = evCount('H', 'hit', (c, id) => c === hst.car && id === itemId);
      spawn();
      S.run(() => {
        spun = spun || R.player.spinTime > 0; air = air || R.player.onGround === false;
        return spun && evCount(cs.id, 'hit', (c, id) => c === R.player && id === itemId) > 0;
      }, 3);
      hit = evCount('H', 'hit', (c, id) => c === hst.car && id === itemId) > nh;
    }
    ok(hit, `${label}: host registers the hit on the puppet (tries: ${tries})`);
    ok(spun, `${label}: the client's local car actually spins`);
    const other = cs === sa ? 'B' : 'A';
    until(() => evCount(other, 'hit', (c, id) => c === S.sim(other).race.cars[hst.index] && id === itemId) > 0, 1);
    ok(evCount(other, 'hit', (c, id) => c === S.sim(other).race.cars[hst.index] && id === itemId) > 0, `${label}: 'hit' event on the other client`);
    return air;
  };
  const behind = (st, dist) => {
    const car = st.car, h = car.heading;
    return { x: car.pos.x - Math.sin(h) * dist, y: car.pos.y, z: car.pos.z - Math.cos(h) * dist, h };
  };
  const airB = hitTest('rocket hit', 'rocket', hB, sb, () => {
    const p = behind(hB, 14);
    const r = H.weapons._spawnRocket(++H._nextId, p.x, p.y + 0.75, p.z, p.h, 60);
    r.owner = H._pst; r.target = hB; r.t = hB.car.trackT;
  });
  ok(airB, 'rocket hit: the client car is launched into the air');
  wait(2.5);
  hitTest('marble hit', 'marble', hA, sa, () => {
    const p = behind(hA, 7);
    const m = H.weapons._spawnMarble(++H._nextId, p.x, p.y + 0.75, p.z, Math.sin(p.h), Math.cos(p.h), Math.max(46, hA.car.speed + 22));
    m.owner = H._pst; m.t = hA.car.trackT; m.age = 2;
  });
  wait(2.5);
  {
    const v0 = { v: 0 };
    hitTest('goo hit', 'glue', hB, sb, () => {
      // a row of puddles across the road ahead of B
      const tr = S.host.track, t = (hB.car.trackT + 22 / tr.length) % 1, sp = tr.sample(t);
      for (const l of [-5, -2.5, 0, 2.5, 5]) {
        if (Math.abs(l) > sp.halfWidth - 1) continue;
        const pu = H.weapons._spawnPuddle(++H._nextId, sp.pos.x + sp.right.x * l, sp.pos.y, sp.pos.z + sp.right.z * l);
        pu.owner = H._pst; pu.age = 5;
      }
      v0.v = B.player.speed;
    });
    ok(evCount('B', 'hit', (c, id) => c === B.player && id === 'glue') > 0, 'goo hit: seen by the victim');
  }
  for (const p of H.weapons.puddles) p.life = 0;
  wait(2.5);

  // --- 4. shield blocks
  {
    const nb = evCount('H', 'block'), nbA = evCount('A', 'block', (c) => c === A.player), nbB = evCount('B', 'block', (c) => c === B.cars[iA]);
    let spun = false, up = false, tries = 0;
    while (evCount('H', 'block') === nb && tries++ < 5) {
      clearImmune();
      if (!(hA.shieldTime > 3)) {
        hA.shieldTime = 0;
        H.giveItem(hA.car, 'shield');
        until(() => !!A.info(A.player).item, 1.5);
        sa.fire = true;
        up = until(() => hA.shieldTime > 0 && B.states[iA].shieldTime > 0 && B.states[iA].shieldMesh && B.states[iA].shieldMesh.visible && A.info(A.player).shield, 1.5);
      }
      const p = behind(hA, 6); // (may still hit somebody else first: retry)
      const r = H.weapons._spawnRocket(++H._nextId, p.x, p.y + 0.75, p.z, p.h, 60);
      r.owner = H._pst; r.target = hA; r.t = hA.car.trackT;
      const t0 = S.T;
      S.run((s) => { spun = spun || A.player.spinTime > 0; return s.T > t0 + 2; }, 5);
    }
    ok(up, 'shield: active on the host, bubble visible on both clients');
    ok(evCount('H', 'block') === nb + 1, `shield: host blocks the rocket (tries: ${tries})`);
    ok(!spun, 'shield: the shielded client car does not spin');
    ok(evCount('A', 'block', (c) => c === A.player) === nbA + 1 && evCount('B', 'block', (c) => c === B.cars[iA]) === nbB + 1, "shield: 'block' event on both clients");
    ok(!(B.states[iA].shieldTime > 0) && !(A.states[iA].shieldTime > 0), 'shield: bubble gone on clients after the block');
  }

  // --- 4b. pogo fired by a client: the owner's real car hops, everybody sees the flight and the landing ring
  {
    wait(2.5);
    const nLand = { H: evCount('H', 'land'), A: evCount('A', 'land', (c) => c === A.player), B: evCount('B', 'land', (c) => c === B.cars[iA]) };
    fireTest('pogo', null, 'pogo');
    let airA = false, airB = false, airH = false, ringA = false, ringB = false, ringH = false, peak = 0;
    S.run(() => {
      airA = airA || A.player.onGround === false; airB = airB || B.cars[iA].onGround === false; airH = airH || hA.car.onGround === false;
      ringA = ringA || A.weapons.rings.length > 0; ringB = ringB || B.weapons.rings.length > 0; ringH = ringH || H.weapons.rings.length > 0;
      peak = Math.max(peak, A.player.pos.y - A.player._groundY);
      return airA && airB && airH && ringA && ringB && ringH;
    }, 3);
    console.log(`   pogo: peak ${peak.toFixed(2)} units above the road`);
    ok(airA && peak > 1.5, `pogo: the firing client's own car hops (peak ${peak.toFixed(2)} above the road)`);
    ok(airB && airH, 'pogo: the flight is visible on the host and the other client');
    ok(ringA && ringB && ringH, 'pogo: landing ring on host and both clients');
    wait(0.8);
    ok(evCount('H', 'land') === nLand.H + 1 && evCount('A', 'land', (c) => c === A.player) === nLand.A + 1 && evCount('B', 'land', (c) => c === B.cars[iA]) === nLand.B + 1, "pogo: 'land' event once everywhere");
    ok(A.weapons.rings.length === 0 && B.weapons.rings.length === 0 && H.weapons.rings.length === 0, 'pogo: rings removed');
  }

  // --- 4c. storm fired by the client that is behind: the other client's OWN car is capped + shrunk, everybody sees it
  {
    wait(2.5);
    const Z = ITEM_TUNING.shockcloud;
    const [ss, vs, hS, hV] = hA.position > hB.position ? [sa, sb, hA, hB] : [sb, sa, hB, hA];
    const SR = ss.race, VR = vs.race, vst = VR._pst, top = VR.player.def.topSpeed;
    const isV = (R) => (c, id) => c === R.cars[hV.index] && id === 'shockcloud';
    H.giveItem(hS.car, 'shockcloud');
    ok(until(() => SR.info(SR.player).item && SR.info(SR.player).item.id === 'shockcloud', 1.5), 'storm: item reaches the client');
    clearImmune();
    const nFire = evCount(vs.id, 'fire');
    ss.fire = true;
    let t0 = -1, slowed = false, spun = false, small = false, cloud = false, smallOwn = false, smallHost = false, over = 0, moving = 0;
    S.run((s) => {
      if (vst.slowTime > 0 && t0 < 0) t0 = s.T;
      slowed = slowed || (vst.slowTime > 0 && Math.abs(vst.slowFactor - Z.slow) < 1e-6);
      spun = spun || VR.player.spinTime > 0;
      const pv = SR.states[hV.index];
      small = small || pv.car.mesh.scale.x < 0.7;
      cloud = cloud || !!(pv.cloudMesh && pv.cloudMesh.visible && pv.cloudMesh.parent === SR.root);
      smallOwn = smallOwn || VR.player.mesh.scale.x < 0.7;
      smallHost = smallHost || hV.car.mesh.scale.x < 0.7;
      if (t0 >= 0 && s.T > t0 + 0.7 && vst.slowTime > 0.1) { over = Math.max(over, hsp(VR.player) / top); moving = Math.max(moving, hsp(VR.player)); }
      return t0 >= 0 && s.T > t0 + 2.2;
    }, 5);
    ok(evCount(vs.id, 'fire') === nFire + 1, 'storm: client fire request fires on the host');
    ok(slowed, 'storm: the victim client got the slow-down for its own car (effect message)');
    ok(moving > 5 && over <= Z.slow + 0.03, `storm: the victim's real car is capped at ${Z.slow} x top on its own simulation (peak ${over.toFixed(2)} x)`);
    ok(!spun, 'storm: no spin — the victim keeps steering');
    ok(small && cloud, 'storm: the shooter sees the victim puppet shrunk with a cloud');
    ok(smallOwn && smallHost, 'storm: shrunk on the victim\'s own screen and on the host');
    ok(evCount(ss.id, 'hit', isV(SR)) === 1 && evCount(vs.id, 'hit', isV(VR)) === 1, "storm: 'hit' event on both clients");
    wait(1.6);
    ok(SR.cars[hV.index].mesh.scale.x === 1 && VR.player.mesh.scale.x === 1 && hV.car.mesh.scale.x === 1 && !(vst.slowTime > 0), 'storm: expiry restores the scale everywhere');
    ok(until(() => hsp(VR.player) / top > Z.slow * 1.12, 12), 'storm: expiry restores normal speed');
    console.log(`   storm: ${ss.id} zapped ${vs.id}; victim peak ${over.toFixed(2)} x top (${moving.toFixed(1)} u/s) while shrunk`);

    // shielded victim
    clearImmune();
    hV.shieldTime = 0;
    H.giveItem(hV.car, 'shield');
    until(() => !!VR.info(VR.player).item, 1.5);
    vs.fire = true;
    until(() => hV.shieldTime > 0, 1.5);
    H.giveItem(hS.car, 'shockcloud');
    until(() => !!SR.info(SR.player).item, 1.5);
    clearImmune();
    const nb = evCount(vs.id, 'block', isV(VR)), nh = evCount(vs.id, 'hit', isV(VR));
    ss.fire = true;
    let slow2 = false;
    const t1 = S.T;
    S.run((s) => { slow2 = slow2 || vst.slowTime > 0 || VR.player.mesh.scale.x < 0.99; return s.T > t1 + 1.2; }, 3);
    if (hS.position > hV.position || evCount(vs.id, 'block', isV(VR)) > nb) {
      ok(evCount(vs.id, 'block', isV(VR)) === nb + 1 && evCount(vs.id, 'hit', isV(VR)) === nh && !slow2, 'storm: a shield blocks it (block event, no slow, no shrink)');
      ok(!(hV.shieldTime > 0) && !(VR.states[hV.index].shieldTime > 0), 'storm: the shield popped');
    } else console.log('   (storm vs shield skipped: the order of the two clients changed)');
  }

  // --- 4d. tow beam fired by client A at client B: A's own car is reeled in, B's own car drags, beam everywhere
  {
    wait(3);
    const Z = ITEM_TUNING.zaptow;
    let done = false, tries = 0;
    while (!done && tries++ < 5) {
      // A resets itself a little behind B (on its own simulation), matching B's pace
      const tr = sa.track, t = (((hB.car.trackT - 16 / tr.length) % 1) + 1) % 1, sp = tr.sample(t);
      A.player.placeAt(sp.pos.clone(), Math.atan2(sp.tangent.x, sp.tangent.z), tr);
      const v = Math.max(8, hsp(hB.car));
      A.player.vel.set(sp.tangent.x * v, 0, sp.tangent.z * v);
      S.measure = false;
      wait(2);
      S.measure = true;
      clearImmune();
      if (H.weapons._towTarget(hA) !== hB || hB.shieldTime > 0) { wait(0.7); continue; }
      H.giveItem(hA.car, 'zaptow');
      if (!until(() => !!A.info(A.player).item, 1.5) || H.weapons._towTarget(hA) !== hB) { hA.item = null; wait(0.7); continue; }
      const n = { towA: evCount('A', 'tow'), towB: evCount('B', 'tow'), towH: evCount('H', 'tow'), hitB: evCount('B', 'hit', (c, id) => c === B.player && id === 'zaptow') };
      const pa = A._pst, pb = B._pst, topB = B.player.def.topSpeed;
      sa.fire = true;
      let t0 = -1, v0 = 0, vPull = 0, close = false, latched = false, beamA = false, beamB = false, beamH = false, slowedB = false, overB = 0, spun = false;
      S.run((s) => {
        if (pa.towTarget && t0 < 0) { t0 = s.T; v0 = A.player.speed; sa.override = { throttle: 0, handbrake: false }; } // coast: any gain is the beam
        if (t0 >= 0) {
          latched = latched || pa.towTarget === A.states[iB];
          beamA = beamA || !!(pa.towMesh && pa.towMesh.visible && pa.towMesh.parent === A.root);
          beamB = beamB || !!(B.states[iA].towTarget === pb && B.states[iA].towMesh && B.states[iA].towMesh.visible);
          beamH = beamH || !!(hA.towTarget === hB && hA.towMesh && hA.towMesh.visible);
          slowedB = slowedB || (pb.slowTime > 0 && Math.abs(pb.slowFactor - Z.slow) < 0.011);
          spun = spun || B.player.spinTime > 0 || A.player.spinTime > 0;
          if (pa.towTarget) vPull = Math.max(vPull, A.player.speed);
          close = close || Math.hypot(A.player.pos.x - A.cars[iB].pos.x, A.player.pos.z - A.cars[iB].pos.z) < 4.5;
          if (s.T > t0 + 0.7 && pb.slowTime > 0.1) overB = Math.max(overB, hsp(B.player) / topB);
        }
        return t0 >= 0 && s.T > t0 + 1.8;
      }, 4);
      sa.override = null;
      done = t0 >= 0;
      if (!done) { wait(1); continue; }
      ok(latched && hA.towTarget === hB, 'tow: client A latched onto client B (host + A agree)');
      ok(vPull > v0 + 1.5 || close, `tow: A's real car is reeled in on its own simulation while coasting (${v0.toFixed(1)} -> ${vPull.toFixed(1)} u/s${close ? ', caught up' : ''})`);
      ok(slowedB && overB <= Z.slow + 0.03, `tow: B's real car drags on its own simulation (cap ${Z.slow} x, saw ${overB.toFixed(2)} x)`);
      ok(!spun, 'tow: nobody spins');
      ok(beamA && beamB && beamH, 'tow: beam visible on the host and both clients');
      ok(evCount('A', 'tow') === n.towA + 1 && evCount('B', 'tow') === n.towB + 1 && evCount('H', 'tow') === n.towH + 1, "tow: 'tow' event everywhere");
      ok(evCount('B', 'hit', (c, id) => c === B.player && id === 'zaptow') === n.hitB + 1, "tow: 'hit' event for the dragged player");
      wait(1.6);
      ok(!pa.towTarget && !B.states[iA].towTarget && !hA.towTarget && !pa.towMesh.visible && !B.states[iA].towMesh.visible && !hA.towMesh.visible, 'tow: beam gone everywhere after 2.5 s');
      ok(!(pb.slowTime > 0), 'tow: drag expired');
      console.log(`   tow: A coasting ${v0.toFixed(1)} -> ${vPull.toFixed(1)} u/s${close ? ' (caught up)' : ''}, B peak ${overB.toFixed(2)} x top while dragged, tries ${tries}`);
    }
    ok(done, `tow: scenario ran (tries: ${tries})`);
    wait(2);
  }

  // --- 5. crash event is local
  {
    const n = evCount('A', 'crash', (c) => c === A.player);
    // the wall hit travels owner -> host -> other client so sparks can be shown on the puppet
    let relayed = 0, cur = 0;
    Object.defineProperty(B.states[iA].pup, 'wallHit', { get: () => cur, set: (v) => { cur = v; if (v > relayed) relayed = v; }, configurable: true });
    sa.override = { steer: 1, throttle: 1, handbrake: false };
    until(() => evCount('A', 'crash', (c) => c === A.player) > n, 4);
    sa.override = null;
    ok(evCount('A', 'crash', (c) => c === A.player) > n, "crash: wall hit raises a local 'crash' event on the client");
    wait(0.5);
    ok(relayed > 1.5, `crash: wall-hit strength reaches the other client for sparks (${relayed})`);
    ok(evCount('B', 'crash', (c) => c === B.cars[iA]) === 0, "crash: no 'crash' event for puppets");
    wait(2.5);
  }

  // --- 6. respawn / reset-to-track: puppets snap instead of sliding
  {
    const snaps0 = S.jitter.snaps, bad0 = S.jitter.bad;
    const tr = sa.track, car = A.player;
    const sp = tr.sample((car.trackT + 60 / tr.length) % 1);
    car.placeAt(sp.pos.clone(), Math.atan2(sp.tangent.x, sp.tangent.z), tr);
    S.measure = false;
    wait(0.6);
    S.measure = true;
    const dH = Math.hypot(hA.car.pos.x - car.pos.x, hA.car.pos.z - car.pos.z), dB = Math.hypot(B.cars[iA].pos.x - car.pos.x, B.cars[iA].pos.z - car.pos.z);
    ok(S.jitter.snaps >= snaps0 + 2 && S.jitter.bad === bad0, `respawn: host + other client snap the puppet (snaps +${S.jitter.snaps - snaps0}), no slide`);
    ok(dH < 3 && dB < 4, `respawn: puppets are at the new place (host ${dH.toFixed(2)}, B ${dB.toFixed(2)})`);
    wait(1.5);
  }

  // --- 7. packet gap: puppet extrapolates <= 0.5 s then freezes, recovers afterwards
  {
    const loss = S.loss;
    S.loss = 1;
    S.measure = false;
    wait(1.2);
    const pa = B.cars[iA];
    ok(Math.hypot(pa.vel.x, pa.vel.z) === 0 && B.states[iA].pup.stale, 'packet gap: puppets freeze after 0.5 s without data');
    ok(hA.pup.stale && Math.hypot(hA.car.vel.x, hA.car.vel.z) === 0, 'packet gap: host-side puppet freezes too');
    const p0 = { x: pa.pos.x, z: pa.pos.z };
    wait(0.3);
    ok(Math.hypot(pa.pos.x - p0.x, pa.pos.z - p0.z) < 0.05, 'packet gap: frozen puppet stays put');
    S.loss = loss;
    wait(1.5);
    S.measure = true;
    ok(!B.states[iA].pup.stale && !hA.pup.stale && Math.hypot(pa.pos.x - A.player.pos.x, pa.pos.z - A.player.pos.z) < 6, 'packet gap: recovers when data flows again');
  }
  ok(S.jitter.bad === 0, `no teleport-jitter in the whole scenario (${S.jitter.bad} of ${S.jitter.frames})`);

  // --- 8. dropRemote: B leaves, its car becomes a bot and keeps lapping; A plays on
  {
    for (const st of H.states) if (st.ai && !st.ai.car) st.ai = new AIDriver(st.car, { skill: 0.6 }); // give the bots their brains back
    const prog0 = hB.progress, laps0 = hB.lapsDone;
    ok(H.dropRemote('B') === true && H.dropRemote('B') === false && H.dropRemote('nobody') === false, 'dropRemote returns true once');
    sb.alive = false;
    B.dispose();
    ok(hB.ai instanceof AIDriver && !hB.pup && hB.car.puppet === false && !hB.human, 'dropped human is a normal bot now');
    ok(H.getRoster().find((r) => r.index === iB).kind === 'bot' && H.getRoster().find((r) => r.index === iB).netId === null, 'roster shows it as a bot');
    const p1 = { x: hB.car.pos.x, z: hB.car.pos.z };
    wait(0.1);
    ok(Math.hypot(hB.car.pos.x - p1.x, hB.car.pos.z - p1.z) < 6, 'takeover is seamless (no jump)');
    const overOk = S.run(() => S.host.over && sa.over, 400);
    ok(overOk, 'race over on host and the remaining client (T=' + S.T.toFixed(1) + ')');
    ok(hB.lapsDone > laps0 && hB.progress > prog0 + 1, `bot kept lapping (${laps0} -> ${hB.lapsDone} laps)`);
    compareStandings(H, A, 'final standings identical: host vs A');
    ok(A.standings().find((e) => e.index === iB).isHuman === false && A.standings().filter((e) => e.isHuman).length === 2, 'client knows the dropped player is a bot now');
    ok(S.ev.A.raceOver.length === 1 && S.ev.H.raceOver.length === 1, "'raceOver' once on host and client");
  }
  ok(S.nan === 0, 'no NaN anywhere');
  console.log('   puppet error in this scenario: ' + fmt(S.err.all));
  S.dispose();
}

// ============================================================================== C. 20 s rule + estimated times + late client
section('C. first human home -> 20 s for the rest (beach, 1 lap); client that never shows up');
{
  const S = new Session({ trackId: 'beach', laps: 1, bots: 1, seed: 3, clientDelay: [0.4, 1e9] });
  const H = S.host.race;
  const t0 = S.T;
  S.run((s) => H.state !== 'countdown' && s.sim('A') && s.sim('A').race.state !== 'countdown', 30);
  ok(S.host.goAt > 5 + 3.1 && S.host.goAt < 5 + 3.4, `host waits (max 5 s) for a client that never checks in, then counts down (GO at ${S.host.goAt.toFixed(2)})`);
  const sa = S.sim('A'), A = sa.race;
  ok(Math.abs(sa.goAt - S.host.goAt) < 0.06, `present client still starts in sync (host ${S.host.goAt.toFixed(3)}, A ${sa.goAt.toFixed(3)})`);
  // A parks; host player finishes -> 20 s later the race is over for everybody, A gets an estimated time
  sa.override = { throttle: 0, steer: 0, handbrake: true };
  const hostFinish = () => (S.ev.H.finish || []).some((a) => a[0] === H.player);
  S.run(hostFinish, 200);
  const tf = S.T;
  ok(hostFinish() && !S.host.over, 'host player finished, race not over yet');
  S.run(() => S.host.over && sa.over, 60);
  ok(S.host.over && sa.over && Math.abs(S.T - tf - 20) < 0.5, `race over ${(S.T - tf).toFixed(2)} s after the first human finished`);
  compareStandings(H, A, 'standings with estimated times identical');
  const me = A.standings().find((e) => e.isPlayer);
  ok(me && me.estimated && me.finished && me.finishTime > H.info(H.player).finishTime, 'unfinished client gets an estimated time behind the winner');
  ok(A.state === 'finished', 'client state is finished');
  ok(S.nan === 0, 'no NaN');
  S.dispose();
}

// ============================================================================== D. optional protocol fields
section('D. protocol compatibility: old-format and garbage values in the optional fields');
{
  const scene = new THREE.Scene();
  const track = buildTrack('garden');
  const roster = [
    { index: 0, name: 'Host', carId: null, kind: 'human', netId: 'H', slot: 0 },
    { index: 1, name: 'Me', carId: null, kind: 'human', netId: 'A', slot: 1 },
    { index: 2, name: 'Bot', carId: null, kind: 'bot', netId: null, slot: 2 },
  ];
  const R = new Race({ scene, track, playerCarId: 'x', laps: 2, opponents: 2, net: { role: 'client', localId: 'A', roster } });
  const St = R.states, me = R._pst;
  ok(me === St[1] && R.cars.length === 3, 'standalone client built');
  let n = 0, threw = false;
  const snap = (rows) => ({ t: 'w', n: ++n, c: 0.05 + n * 0.05, d: 0, g: -1, q: 0, L: 2, s: rows });
  const base = [0, -1, 0, -1, -1, -1, 0, 1];
  const feed = (m) => { try { R.netReceive(JSON.parse(JSON.stringify(m)), 'H'); R.update(1 / 60, null); } catch (e) { threw = true; console.error(e); } };
  const clean = () => St.every((st) => !(st.shrinkTime > 0) && !st.towTarget && !(st.slowTime > 0) && st.car.mesh.scale.x === 1);
  feed(snap([base, base, base]));
  ok(!threw && clean(), 'old host (8-field slow block): accepted, no status effects');
  feed(snap([[...base, 'a', {}, null], [...base, 2, 1, 2], [...base, null, 0, 1], [...base, 0, 99, 2], [...base, 0]]));
  ok(!threw && !St[0].towTarget && !St[1].towTarget && !St[2].towTarget && !(St[0].shrinkTime > 0) && !(St[2].shrinkTime > 0), 'garbage / self-target / unknown car in the new fields: ignored');
  ok(St[1].shrinkTime > 1.5, '(the one well-formed shrink value in that packet is applied)');
  feed(snap([base, [...base, 0, -1, 0], [...base, 99, 0, 99]]));
  ok(!(St[1].shrinkTime > 0) && St[2].shrinkTime > 2 && St[2].shrinkTime <= 2.5 && St[2].towTarget === St[0] && St[2].towTime <= 2.5 && St[2].towMesh.visible, 'valid fields: shrink + tow beam shown, durations clamped to 2.5 s');
  for (let i = 0; i < 20; i++) feed(snap([base, base, [...base, 2, 0, 2]]));
  ok(St[2].car.mesh.scale.x < 0.7 && St[2].cloudMesh.visible, 'puppet shows the shrink scale + cloud');
  for (let i = 0; i < 30; i++) feed(snap([[...base, 0, -1, 0], [...base, 0, -1, 0], [...base, 0, -1, 0]]));
  ok(!threw && clean(), 'cleared by the host: back to normal scale, beam gone');
  // targeted effect: old 10-field form, garbage, clamping
  const v0 = me.car.vel.clone();
  const ev = (...e) => feed({ t: 'e', e: [e] });
  ev(1, 'x', 1, 0, 0, 0, 0, 0, 0, 0);
  ev(2, 'x', 1, 7, 0, 0, 0, 0, 0, 0, 'a', {}, [1]);
  ev(3, 'x', 1, 7, 0, 0, 0, 0, 0, 0, 2, null, -4);
  ev(4, 'x', 1, 7, 0, 0, 0, 0, 0, 0, 2, 1.5, 0);
  ev(5, 'x', 0, 7, 0, 0, 0, 0, 0, 0, 2, 0.65, 9);
  ok(!threw && !(me.slowTime > 0) && !(St[0].slowTime > 0) && me.car.vel.distanceTo(v0) < 1e-9 && me.car.onGround !== false, "'x' effect: old form / garbage / somebody else's car → nothing happens");
  ev(6, 'x', 1, 7, 0, 0, 0, 0, 0, 0, 99, 0.01, 0);
  ok(me.slowTime > 2 && me.slowTime <= 2.5 && me.slowFactor === 0.4, "'x' effect: slow time clamped to 2.5 s, factor to ≥ 0.4");
  ev(7, 't', 1, 0, 99); ev(8, 't', 1, 1, 2); ev(9, 't', 0, 42, 2); ev(10, 't', 2, 0, 'x'); ev(11, 'zz', 1, 2, 3);
  ok(!threw && me.towTarget === St[0] && me.towTime <= 2.5 && !St[0].towTarget && !St[2].towTarget, "'t' tow event: clamped, self / unknown targets ignored, unknown kinds ignored");
  for (let i = 0; i < 240; i++) feed(null);
  ok(!threw && R.cars.every((c) => fin(c.pos.x) && fin(c.vel.x) && fin(c.speed)), 'no NaN, no throw');
  R.dispose();
  ok(scene.children.length === 0, 'dispose clean');
  track.dispose && track.dispose();
}

console.log(failures ? `\n${failures} FAILED of ${checks} checks` : `\nALL PASSED — ${checks} checks`);
process.exit(failures ? 1 : 0);
