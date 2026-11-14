// Toyz Race — multiplayer sync for the race (CONTRACT-NET.md section 2).
//
// Model: host-authoritative world, client-authoritative own car.
//
// Messages (plain JSON, emitted through race.on('net', (msg, toId)) and fed back with race.netReceive(msg, fromId)):
//
//  client -> host
//   { t:'s', n, c, s:[car state], f }  own car, 30 Hz. n = packet counter, c = sender's estimate of the host clock,
//                                      f = fire-request counter (host fires when it grows — survives packet loss)
//   { t:'f', f }                       fire request, sent immediately on the key edge (same counter)
//   { t:'p', k }                       clock ping (k = client clock)
//  host -> client
//   { t:'q', k, c }                    pong (targeted): c = host clock
//   { t:'w', n, c, d, g, k:[[car state + progress] per car], pk:[pickup masks], r:[rockets], m:[marbles],
//     p:[puddles], e:[recent events], w:1 while waiting for players,
//     q, L, s:[[lapsDone, item, shield, finishTime, bestLap, lastLap, lapStart, human] per car]  (every 4th),
//     o:[final standings] once the race is over }                                              snapshot, 20 Hz
//   { t:'e', e:[[seq, kind, ...]] }    events, sent immediately (also repeated in snapshots for ~0.7 s; dedup by seq)
//        kinds: 'l' lap [car, lap, lapTime, isBest, lapStart]   'f' finish [car, position, finishTime]
//               'p' pickup [car, item]   'u' item used [car, item]   'h' hit [car, item]   'b' shield block [car, item]
//               'e' explosion [x, y, z]
//               'x' effect on a remote human's own car [car, item, spin, launchVy, ix, iz, slow, boost,
//                   slowTime, slowFactor, kick]  (sent targeted to the owner; only the owner applies it;
//                   slowTime/slowFactor = top speed capped at factor x own for that long, kick = forward impulse
//                   along the car's own heading; the last three are optional — absent on old hosts)
//               't' tow beam [car, targetCar, time]   (the car is reeled toward targetCar; everybody draws the beam)
//        slow block per car (optional trailing fields): [8] shrink time left, [9] tow target car (-1 none), [10] tow time left
//   { t:'o', o:[...] }                 final standings (race over), also in every later snapshot
import * as THREE from 'three';
import { ITEMS, ITEM_TUNING, MAX_SLOW_TIME } from './items.js';
import { encodeCar, validState, r1, r2, r3 } from './puppet.js';

export const SNAP_DT = 1 / 20;     // host snapshot interval
export const SEND_DT = 1 / 30;     // client own-car state interval
const SLOW_EVERY = 4;              // every n-th snapshot carries the slow block
const EVENT_KEEP = 0.7;            // s an event keeps being repeated in snapshots
const MAX_WAIT = 5;                // s the host holds the countdown for clients that have not checked in
const EPS = 1e-4;

const _v = new THREE.Vector3();
const fin = (v) => typeof v === 'number' && Number.isFinite(v);
const num = (v) => (fin(v) ? v : 0);
const tnum = (v) => (v == null || !fin(v) ? -1 : r3(v));
const itemIndex = (item) => (item ? ITEMS.indexOf(item) : -1);
const itemIdIndex = (id) => ITEMS.findIndex((it) => it.id === id);

// ======================================================================================================== host
export class HostNet {
  constructor(race, cfg) {
    this.race = race;
    this.role = 'host';
    this.localId = cfg.localId != null ? cfg.localId : null;
    this.wall = 0;                 // host clock used for all stamps (keeps running while waiting)
    this.wallNow = 0;
    this.byId = new Map();         // netId -> car state (remote humans only)
    this.waiting = new Set();      // remote ids that have not sent anything yet
    this.waitTime = 0;
    this.snapAcc = SNAP_DT;
    this.n = 0;
    this.seq = 0;
    this.recent = [];              // [{ at, e }]
    this.finalMsg = null;
  }

  get isWaiting() { return this.waiting.size > 0 && this.waitTime < MAX_WAIT; }

  addRemote(st) {
    this.byId.set(st.netId, st);
    this.waiting.add(st.netId);
  }

  /** advances the net clock; returns true while the countdown must be held for late clients */
  begin(dt) {
    this.wall += dt;
    this.wallNow = this.wall;
    if (this.waiting.size && this.waitTime < MAX_WAIT) {
      this.waitTime += dt;
      return this.waitTime < MAX_WAIT;
    }
    return false;
  }

  // ---- events
  _event(arr, toId) {
    arr.unshift(++this.seq);
    this.recent.push({ at: this.wall, e: arr });
    this.race._emit('net', { t: 'e', e: [arr] }, toId == null ? null : toId);
  }

  /** called for every event the race emits: forward the ones clients can not derive themselves */
  forward(event, a, b, c, d) {
    const r = this.race;
    switch (event) {
      case 'lap': { const st = r._byCar.get(a); if (st) this._event(['l', st.index, b | 0, r3(c), d ? 1 : 0, r3(st.lapStart)]); break; }
      case 'finish': { const st = r._byCar.get(a); if (st) this._event(['f', st.index, b | 0, tnum(st.finishTime)]); break; }
      case 'pickup': { const st = r._byCar.get(a); if (st) this._event(['p', st.index, itemIndex(b)]); break; }
      case 'fire': { const st = r._byCar.get(a); if (st) this._event(['u', st.index, itemIndex(b)]); break; }
      case 'hit': { const st = r._byCar.get(a); if (st) this._event(['h', st.index, itemIdIndex(b)]); break; }
      case 'block': { const st = r._byCar.get(a); if (st) this._event(['b', st.index, itemIdIndex(b)]); break; }
      case 'explode': if (a) this._event(['e', r2(a.x), r2(a.y), r2(a.z)]); break;
      case 'tow': { const st = r._byCar.get(a), tg = r._byCar.get(b); if (st && tg) this._event(['t', st.index, tg.index, r2(c || 0)]); break; }
      default:
    }
  }

  /** something happened to a remote human's car: its owner applies it to the real thing */
  effect(st, itemId, spin, launchVy, ix, iz, slow, boost, slowTime, slowFactor, kick) {
    if (!st.pup || st.netId == null) return;
    st.pup.hold = 0.35; // keep our visual copy until the owner's state reflects it
    this._event(['x', st.index, itemIdIndex(itemId), r2(spin || 0), r2(launchVy || 0), r2(ix || 0), r2(iz || 0), r3(slow || 0), r2(boost || 0),
      r2(slowTime || 0), r2(slowFactor || 0), r2(kick || 0)], st.netId);
  }

  // ---- outgoing
  end(dt) {
    while (this.recent.length && this.recent[0].at < this.wall - EVENT_KEEP) this.recent.shift();
    this.snapAcc += dt;
    if (this.snapAcc >= SNAP_DT - EPS) {
      this.snapAcc -= SNAP_DT;
      if (this.snapAcc > SNAP_DT) this.snapAcc = 0;
      this.race._emit('net', this.snapshot(), null);
    }
  }

  snapshot() {
    const r = this.race, S = r.states;
    const k = [];
    for (let i = 0; i < S.length; i++) {
      const st = S[i];
      const a = encodeCar(st.car, st.tp, st.wh);
      st.wh = 0;
      a.push(r3(st.progress));
      k.push(a);
    }
    const m = { t: 'w', n: ++this.n, c: r3(this.wall), d: r3(this.wall - r._clock), g: r._goClock >= 0 ? r3(r._goClock) : -1, k };
    if (this.isWaiting) m.w = 1;
    if (r.pickups) m.pk = r.pickups.mask();
    const W = r.weapons;
    if (W.rockets.length) m.r = W.rockets.map((x) => [x.id, r2(x.pos.x), r2(x.pos.y), r2(x.pos.z), r3(x.ang), r1(x.speed)]);
    if (W.marbles.length) m.m = W.marbles.map((x) => [x.id, r2(x.pos.x), r2(x.pos.y), r2(x.pos.z), r3(x.dx), r3(x.dz), r1(x.speed)]);
    if (W.puddles.length) {
      const p = [];
      for (const x of W.puddles) if (!x.dying) p.push([x.id, r2(x.x), r2(x.y), r2(x.z)]);
      if (p.length) m.p = p;
    }
    if (this.recent.length) m.e = this.recent.map((x) => x.e);
    if (this.n % SLOW_EVERY === 1) {
      m.q = this.seq;
      m.L = r.laps;
      m.s = S.map((st) => [
        st.lapsDone, itemIndex(st.item), st.shieldTime > 0 ? r1(st.shieldTime) : 0,
        st.finished ? tnum(st.finishTime) : -1, tnum(st.bestLap), tnum(st.lastLap), r3(st.lapStart), st.human ? 1 : 0,
        st.shrinkTime > 0 ? r1(st.shrinkTime) : 0, st.towTarget ? st.towTarget.index : -1, st.towTime > 0 ? r1(st.towTime) : 0,
      ]);
    }
    if (this.finalMsg) m.o = this.finalMsg;
    return m;
  }

  sendFinal(final) {
    this.finalMsg = final.map((e) => [
      r_index(this.race, e.car), e.finished ? 1 : 0, tnum(e.finishTime), tnum(e.bestLap), e.estimated ? 1 : 0, e.lapsDone | 0,
    ]);
    this.race._emit('net', { t: 'o', o: this.finalMsg }, null);
  }

  // ---- incoming
  receive(msg, from) {
    if (!msg || typeof msg !== 'object') return;
    const st = this.byId.get(from);
    if (!st) return; // unknown / dropped peer
    this.waiting.delete(from);
    switch (msg.t) {
      case 's': {
        const n = msg.n | 0;
        if (n <= st.pupN && n > st.pupN - 100000) return; // old or duplicate
        if (!validState(msg.s) || !st.pup) return;
        st.pupN = n;
        // the client stamps with its estimate of our clock, so we can extrapolate to "now"
        let stamp = fin(msg.c) ? msg.c : this.wall - 0.05;
        if (stamp > this.wall) stamp = this.wall;
        else if (stamp < this.wall - 0.5) stamp = this.wall - 0.5;
        if (stamp <= st.pup.lastT) stamp = st.pup.lastT + 0.001;
        st.pup.push(stamp, msg.s);
        this._fireCount(st, msg.f);
        break;
      }
      case 'f': this._fireCount(st, msg.f); break;
      case 'p': if (fin(msg.k)) this.race._emit('net', { t: 'q', k: msg.k, c: r3(this.wall) }, from); break;
      default: // unknown types are ignored
    }
  }

  _fireCount(st, f) {
    if (!fin(f)) return;
    f |= 0;
    if (f > st.fireSeen) { st.fireSeen = f; st.fireReq = 1; }
  }
}

function r_index(race, car) {
  const st = race._byCar.get(car);
  return st ? st.index : -1;
}

// ====================================================================================================== client
export class ClientNet {
  constructor(race, cfg) {
    this.race = race;
    this.role = 'client';
    this.localId = cfg.localId != null ? cfg.localId : null;
    this.localSim = true;          // false when the roster has no entry for us (spectating)
    this.local = 0;                // own monotonic clock (sum of dt)
    this.off = 0;                  // host clock ≈ local + off (smoothed)
    this.offT = 0;                 // filter target
    this.synced = false;           // got a snapshot
    this.pinged = false;           // got a pong
    this.rttMin = Infinity;
    this.rtt = 0;
    this.wallNow = 0;              // estimated host clock right now
    this.d = 0;                    // host: wall - race clock
    this.g = -1;                   // host race-clock value at GO (-1 = not yet)
    this.w = false;                // host is still waiting for players
    this.holdClock = 0;
    this.pingIn = 0;
    this.sendAcc = SEND_DT;
    this.n = 0;
    this.fireN = 0;
    this.snapN = 0;
    this.seen = new Set();
    this.maxSeq = 0;
    this.itemHold = 0;
    this.lastSnapAt = -1;          // local time of the newest snapshot
    this.hostId = null;            // sender of the first snapshot
  }

  // ---------------------------------------------------------------- per frame
  update(dt, pc) {
    const r = this.race, S = r.states, cars = r.cars, track = r.track;
    this.local += dt;
    if (this.itemHold > 0) this.itemHold -= dt;

    // --- clock: slew the offset toward the filter target (never jump once racing unless far off)
    const err = this.offT - this.off;
    if (err > 0.4 || err < -0.4) this.off = this.offT;
    else {
      const mx = (r.state === 'countdown' ? 0.5 : 0.1) * dt;
      this.off += err > mx ? mx : err < -mx ? -mx : err;
    }
    const wall = (this.wallNow = this.local + this.off);
    let clock = !this.synced ? 0 : this.w ? this.holdClock : wall - this.d;
    if (clock < r._clock) clock = r._clock; // monotonic
    r._clock = clock;

    if (r.state === 'countdown') {
      r._cd = clock;
      let step = r._cdStep;
      while (step < 3 && clock >= r._countdownAt[step]) step++;
      if (step > r._cdStep) { r._cdStep = step; r._emit('countdown', 4 - step); }
      const go = clock >= r._goAt || (this.g >= 0 && clock >= this.g);
      if (!go) {
        for (let i = 0; i < S.length; i++) {
          const st = S[i];
          st.car.frozen = true;
          if (st.pup) st.pup.advance(st.car, wall, dt);
          st.car.update(dt, track);
        }
        r._updateFx(dt);
        this._send(dt);
        return;
      }
      r.state = 'racing';
      for (let i = 0; i < cars.length; i++) cars[i].frozen = false;
      r._emit('go');
    }
    const t = clock - (this.g >= 0 ? this.g : r._goAt - 0.008);
    if (t > r.time) r.time = t;

    // --- drivers: own car = local physics, everybody else = puppet of the host's snapshots
    const pst = r._pst, sim = this.localSim;
    if (pst.ai) pst.ai.update(dt, track, cars);
    else if (pc && sim) {
      const c = pst.car.controls;
      c.throttle = +pc.throttle || 0;
      c.steer = +pc.steer || 0;
      c.handbrake = !!pc.handbrake;
    }
    for (let i = 0; i < S.length; i++) {
      const st = S[i];
      if (st.pup) { st.pup.advance(st.car, wall, dt); st.teleported = st.pup.snapped; }
    }
    for (let i = 0; i < cars.length; i++) cars[i].update(dt, track);
    if (sim && (pst.towTarget || pst.slowTime > 0)) r._statusPhysics(pst, dt); // host-decided tow pull / speed cap on our own car
    const impact = cars.length > 1 ? r._collideNet() : 0;
    if (sim) r._teleportCheck(pst, dt);

    // --- laps / progress come from the host; only wrong-way is judged here
    for (let i = 0; i < S.length; i++) {
      const st = S[i], tt = st.car.trackT;
      if (Number.isFinite(tt)) st.lastT = tt;
    }
    if (sim) r._wrongWay(pst, dt);
    r._rank();

    for (let i = 0; i < S.length; i++) r._carFx(S[i], dt);
    if (impact > r._crashThreshold) r._carImpact(impact);

    // --- items: the fire key only asks the host
    const fire = !!(pc && pc.fire);
    if (fire && !r._prevFire && sim && !pst.ai && !pst.finished) {
      this.fireN++;
      r._emit('net', { t: 'f', f: this.fireN }, null);
      if (pst.item) { pst.item = null; this.itemHold = 1; } // predicted; the host's 'u' event confirms
    }
    r._prevFire = fire;

    r._updateFx(dt);
    this._send(dt);
  }

  _send(dt) {
    const r = this.race;
    this.pingIn -= dt;
    if (this.pingIn <= 0) {
      this.pingIn = this.local < 5 || !this.pinged ? 0.2 : 0.5;
      r._emit('net', { t: 'p', k: r3(this.local) }, null);
    }
    if (!this.localSim) return;
    this.sendAcc += dt;
    if (this.sendAcc >= SEND_DT - EPS) {
      this.sendAcc -= SEND_DT;
      if (this.sendAcc > SEND_DT) this.sendAcc = 0;
      const pst = r._pst;
      r._emit('net', { t: 's', n: ++this.n, c: r3(this.wallNow), s: encodeCar(pst.car, pst.tp, pst.wh), f: this.fireN }, null);
      pst.wh = 0;
    }
  }

  // ---------------------------------------------------------------- incoming
  receive(msg, from) {
    if (!msg || typeof msg !== 'object') return;
    // world state only comes from the host: other clients' packets (if the transport broadcasts them) are ignored
    if (msg.t === 's' || msg.t === 'f' || msg.t === 'p') return;
    if (from != null) {
      if (this.hostId == null) { if (msg.t === 'w') this.hostId = from; }
      else if (from !== this.hostId) return;
    }
    switch (msg.t) {
      case 'w': this._snapshot(msg); break;
      case 'e': this._events(msg.e); break;
      case 'q': this._pong(msg); break;
      case 'o': this._final(msg.o); break;
      default: // unknown types are ignored
    }
  }

  _pong(m) {
    if (!fin(m.k) || !fin(m.c)) return;
    const rtt = this.local - m.k;
    if (!(rtt >= 0 && rtt < 2)) return;
    this.rttMin = Math.min(rtt, this.rttMin + 0.002);
    if (this.pinged && rtt > this.rttMin + 0.06) return; // congested sample, not representative
    this.rtt = rtt;
    const s = m.c + rtt * 0.5 - this.local;
    if (!this.pinged) { this.pinged = true; this.offT = s; if (this.race.state === 'countdown') this.off = s; }
    else {
      const e = s - this.offT;
      this.offT = e > 0.12 || e < -0.12 ? s : this.offT + e * 0.2;
    }
  }

  _snapshot(m) {
    this._events(m.e);
    const n = m.n | 0;
    if (!fin(m.c) || !(n > this.snapN || n < this.snapN - 100000)) return; // old / duplicate / malformed
    this.snapN = n;
    const r = this.race, S = r.states, c = m.c;

    // clock: a snapshot can not come from the future, so c - local is a lower bound for the offset
    const sample = c - this.local;
    if (!this.synced) {
      this.synced = true;
      if (!this.pinged) { this.offT = sample + 0.03; this.off = this.offT; }
    } else if (!this.pinged ? sample > this.offT : sample > this.offT + 0.02) this.offT = sample;
    if (fin(m.d)) this.d = m.d;
    if (fin(m.g)) this.g = m.g;
    this.w = !!m.w;
    if (this.w) this.holdClock = c - this.d;
    this.lastSnapAt = this.local;

    if (Array.isArray(m.k)) {
      for (let i = 0; i < S.length && i < m.k.length; i++) {
        const a = m.k[i], st = S[i];
        if (!validState(a)) continue;
        if (st.pup) st.pup.push(c, a);
        const p = a[12];
        if (fin(p)) {
          st.progress = p;
          if (p > st.maxProgress) st.maxProgress = p;
        }
      }
    }
    if (r.pickups && m.pk) r.pickups.setMask(m.pk);
    r.weapons.sync(m.r, m.m, m.p, c);
    if (Array.isArray(m.s)) this._slow(m);
    if (m.o) this._final(m.o);
  }

  _slow(m) {
    const r = this.race, S = r.states;
    if (fin(m.L) && m.L >= 1 && m.L < 100) r.laps = m.L | 0;
    // lap data / item / shield are only trusted when no newer event has already been applied
    // (a snapshot can be overtaken by an event on an unordered transport)
    const current = !fin(m.q) || m.q >= this.maxSeq;
    for (let i = 0; i < S.length && i < m.s.length; i++) {
      const a = m.s[i], st = S[i];
      if (!Array.isArray(a) || a.length < 8) continue;
      let good = true;
      for (let j = 0; j < 8; j++) if (!fin(a[j])) { good = false; break; }
      if (!good) continue;
      st.human = !!a[7];
      if (current) {
        if (a[0] > st.lapsDone) st.lapsDone = a[0] | 0;    // (the lap event got lost: adopt silently)
        st.bestLap = a[4] >= 0 ? a[4] : null;
        st.lastLap = a[5] >= 0 ? a[5] : null;
        st.lapStart = a[6];
        if (!(st === r._pst && this.itemHold > 0)) st.item = ITEMS[a[1]] || null;
        if (a[2] > 0) {
          if (!(st.shieldTime > 0)) r.weapons._shield(st, a[2], true);
          else st.shieldTime = a[2];
        } else if (st.shieldTime > 0.3) st.shieldTime = 0;
        // optional trailing fields (newer hosts): shrink visual + tow beam
        if (a.length >= 11 && fin(a[8]) && fin(a[9]) && fin(a[10])) {
          if (a[8] > 0) {
            if (!(st.shrinkTime > 0)) r.weapons._shrink(st, a[8]);
            else st.shrinkTime = Math.min(MAX_SLOW_TIME, a[8]);
          } else if (st.shrinkTime > 0.3) st.shrinkTime = 0;
          const tg = a[9] >= 0 && a[10] > 0 ? S[a[9] | 0] : null;
          if (tg && tg !== st) {
            if (st.towTarget !== tg) r.weapons._latch(st, tg, a[10]);
            else st.towTime = Math.min(ITEM_TUNING.zaptow.time, a[10]);
          } else if (st.towTarget && st.towTime > 0.3) r.weapons._unlatch(st);
        }
      }
      if (a[3] >= 0 && !st.finished) r._clientFinish(st, 0, a[3]);
    }
  }

  _events(list) {
    if (!Array.isArray(list)) return;
    for (let i = 0; i < list.length && i < 256; i++) {
      const e = list[i];
      if (!Array.isArray(e) || !fin(e[0]) || typeof e[1] !== 'string') continue;
      const q = e[0];
      if (this.seen.has(q)) continue;
      this.seen.add(q);
      if (q > this.maxSeq) this.maxSeq = q;
      if (this.seen.size > 600) { // forget old ones
        const lim = this.maxSeq - 300;
        for (const s of this.seen) if (s < lim) this.seen.delete(s);
      }
      try { this._event(e); } catch (err) { /* malformed event: ignore */ }
    }
  }

  _event(e) {
    const r = this.race, S = r.states;
    const kind = e[1];
    if (kind === 'e') {
      if (fin(e[2]) && fin(e[3]) && fin(e[4])) r._emit('explode', _v.set(e[2], e[3], e[4]).clone(), 'rocket');
      return;
    }
    const st = S[e[2]];
    if (!st) return;
    const car = st.car;
    switch (kind) {
      case 'l': {
        const lap = e[3] | 0;
        if (!(lap > st.lapsDone) || !fin(e[4])) return;
        st.lapsDone = lap;
        st.lastLap = e[4];
        if (st.bestLap == null || e[4] < st.bestLap) st.bestLap = e[4];
        if (fin(e[6])) st.lapStart = e[6];
        r._emit('lap', car, lap, e[4], !!e[5]);
        if (lap === r.laps - 1) r._emit('finalLap', car);
        break;
      }
      case 'f': r._clientFinish(st, e[3] | 0, fin(e[4]) && e[4] >= 0 ? e[4] : r.time); break;
      case 'p': {
        const item = ITEMS[e[3]];
        if (!item) return;
        st.item = item;
        if (st === r._pst) this.itemHold = 0;
        r._emit('pickup', car, item);
        break;
      }
      case 'u': {
        const item = ITEMS[e[3]];
        if (!item) return;
        st.item = null;
        if (st === r._pst) this.itemHold = 0;
        // visuals that are not replicated as objects
        if (item.id === 'pulse') r.weapons._pulse(st);
        else if (item.id === 'shield') r.weapons._shield(st);
        else if (item.id === 'shockcloud') r.weapons._stormFx(st);
        else if (item.id === 'pogo') r.weapons._pogoArm(st); // landing ring is detected locally from the car's flight
        r._emit('fire', car, item);
        break;
      }
      case 'h': {
        const item = ITEMS[e[3]];
        const id = item ? item.id : 'rocket';
        if (id === 'shockcloud') r.weapons._shrink(st, ITEM_TUNING.shockcloud.time); // zapped small
        r._hitFx(st, id);
        r._emit('hit', car, id);
        break;
      }
      case 'b': {
        const item = ITEMS[e[3]];
        st.shieldTime = 0;
        r._blockFx(st);
        r._emit('block', car, item ? item.id : 'rocket');
        break;
      }
      case 't': {
        const tg = fin(e[3]) ? S[e[3] | 0] : null, time = num(e[4]);
        if (!tg || tg === st || !(time > 0)) return;
        r.weapons._latch(st, tg, time); // our own car being `st`: the pull itself happens in race._statusPhysics
        r._emit('tow', car, tg.car, time);
        break;
      }
      case 'x': {
        // an effect on OUR car, decided by the host: apply it to the real physics
        if (st !== r._pst || !this.localSim) return;
        const spin = +e[4] || 0, launch = +e[5] || 0, ix = +e[6] || 0, iz = +e[7] || 0, slow = +e[8] || 0, boost = +e[9] || 0;
        if (spin > 0) car.spinTime = Math.max(car.spinTime || 0, Math.min(1.2, spin));
        if (slow > 0) { const k = 1 - Math.min(0.9, slow); car.vel.x *= k; car.vel.z *= k; }
        if (ix || iz) car.applyImpulse(_v.set(Math.max(-30, Math.min(30, ix)), 0, Math.max(-30, Math.min(30, iz))));
        if (launch > 0) car.launch(Math.min(16, launch));
        if (boost > 0) car.boostTime = Math.max(car.boostTime || 0, Math.min(5, boost));
        // newer fields (absent / non-numeric → 0 → ignored)
        const slowTime = num(e[10]), slowFactor = num(e[11]), kick = num(e[12]);
        if (slowTime > 0 && slowFactor > 0 && slowFactor < 1) {
          st.slowTime = Math.min(MAX_SLOW_TIME, slowTime);
          st.slowFactor = Math.max(0.4, slowFactor);
        }
        if (kick > 0) {
          const k = Math.min(15, kick);
          car.applyImpulse(_v.set(Math.sin(car.heading) * k, 0, Math.cos(car.heading) * k));
        }
        break;
      }
      default:
    }
  }

  _final(o) {
    const r = this.race, S = r.states;
    if (r._final || !Array.isArray(o)) return;
    const out = [], used = new Set();
    for (let i = 0; i < o.length; i++) {
      const a = o[i];
      if (!Array.isArray(a)) continue;
      const st = S[a[0]];
      if (!st || used.has(st)) continue;
      used.add(st);
      out.push(r._standingEntry(st, out.length + 1, !!a[1], a[2] >= 0 ? a[2] : null, !!a[4], a[3] >= 0 ? a[3] : null, a[5] | 0));
    }
    for (const st of r._order) if (!used.has(st)) out.push(r._standingEntry(st, out.length + 1, st.finished, st.finishTime, false, st.bestLap, st.lapsDone));
    r._final = out;
    r._raceOverFired = true;
    r._goAutopilot();
    r._emit('raceOver', r.standings());
  }
}
