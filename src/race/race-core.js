// Toyz Race — race logic core. Dependency-injected (Car, AIDriver, CARS, resolveCarCollisions)
// so it can be tested without the cars module. `index.js` wires the real ones in.
import * as THREE from 'three';
import { ITEMS, ITEM_BY_ID, ITEM_TUNING, MAX_SLOW_TIME, SLOW_GRACE, pickItemFor } from './items.js';
import { Particles } from './particles.js';
import { PickupField } from './pickups.js';
import { Weapons } from './weapons.js';
import { PuppetTrack } from './puppet.js';
import { HostNet, ClientNet } from './net.js';

export const DRIVER_NAMES = [
  'Zippy Zoe', 'Sprocket Sam', 'Captain Cog', 'Nitro Nell', 'Dizzy Dax', 'Pip Piston',
  'Wobbly Wes', 'Turbo Tam', 'Bolt Benny', 'Lulu Lugnut', 'Axel Fizz', 'Greta Grip',
];

const COUNTDOWN_AT = [0.2, 1.2, 2.2]; // '3', '2', '1'
const GO_AT = 3.2;
const RACE_OVER_DELAY = 1.6;
const SKILL_BY_DIFFICULTY = [0.45, 0.68, 0.88];
const CRASH_THRESHOLD = 4;
const WRONG_WAY_TIME = 1.0;
const MP_OVER_TIMEOUT = 20; // multiplayer: the race ends for everybody this long after the first human finished
const ALT_COLORS = ['#ff5a3c', '#3c8dff', '#ffd23f', '#41d67a', '#c05cff', '#ff8ad1', '#3fe0d0', '#f2f2f2'];

const _v = new THREE.Vector3();

function shuffle(a, rnd) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = (rnd() * (i + 1)) | 0;
    const t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

/** is (x, z) in the lane right in front of a car at p heading (fx, fz), between `near` and `reach` units away? */
function inPath(p, fx, fz, reach, x, z, near) {
  const dx = x - p.x, dz = z - p.z;
  const along = dx * fx + dz * fz, side = dx * fz - dz * fx;
  return along > near && along < reach && side > -1.6 && side < 1.6;
}

function byRank(a, b) {
  if (a.finished !== b.finished) return a.finished ? -1 : 1;
  if (a.finished) return a.finishTime - b.finishTime || a.index - b.index;
  return b.progress - a.progress || a.index - b.index;
}

export class RaceCore {
  /**
   * @param {object} opts { scene, track, playerCarId, playerName, laps, opponents, difficulty, mode }
   *   extras: random (rng fn), autopilot (bool: AI drives the player car from the start — attract mode),
   *           playerGridSlot (number, default last occupied slot; 0 in time trial)
   *   multiplayer (CONTRACT-NET.md): net: { role: 'host', localId, remotes: [{ id, name, carId }] }
   *                                  net: { role: 'client', localId, roster }   (roster = host's getRoster())
   * @param {object} deps { Car, AIDriver, CARS, resolveCarCollisions }
   */
  constructor(opts, deps) {
    const {
      scene, track, playerCarId, playerName = 'Player', laps = 3, opponents = 0,
      difficulty = 1, mode = 'race',
    } = opts;
    this.deps = deps;
    this.scene = scene;
    this.track = track;
    this.mode = mode === 'timetrial' ? 'timetrial' : 'race';
    this.laps = Math.max(1, laps | 0);
    this.difficulty = Math.min(2, Math.max(0, difficulty | 0));
    this.random = opts.random || Math.random;
    this.state = 'countdown';
    this.time = 0;
    this.cars = [];
    this.states = [];
    this._byCar = new Map();
    this._order = [];
    this._listeners = new Map();
    this._cd = 0;
    this._cdStep = 0;
    this._clock = 0;
    this._overTimer = -1;
    this._raceOverFired = false;
    this._final = null;
    this._finishedCount = 0;
    this._disposed = false;
    this._prevFire = false;
    this._goClock = -1;       // value of _clock when the race started
    this._nextId = 0;         // ids for projectiles / puddles (stable across the network)
    this._countdownAt = COUNTDOWN_AT;
    this._goAt = GO_AT;
    this._crashThreshold = CRASH_THRESHOLD;
    this._pair = [null, null];

    // --- multiplayer role
    const netCfg = opts.net && (opts.net.role === 'host' || opts.net.role === 'client') && this.mode !== 'timetrial' ? opts.net : null;
    this.netRole = netCfg ? netCfg.role : null;
    this._replica = this.netRole === 'client';   // world state comes from the host
    this._net = null;

    const rnd = this.random;
    const { Car, AIDriver, CARS } = deps;
    const grid = track.startGrid || [];
    const remotes = this.netRole === 'host' && Array.isArray(netCfg.remotes)
      ? netCfg.remotes.filter((r) => r && r.id != null && r.id !== netCfg.localId).slice(0, 7) : [];
    const nOpp = this.mode === 'timetrial' ? 0
      : Math.min(7, Math.max(0, opponents | 0, remotes.length), Math.max(0, grid.length - 1, remotes.length));
    const total = nOpp + 1;

    // --- visuals root + particles
    this.root = new THREE.Group();
    this.root.name = 'race-fx';
    scene.add(this.root);
    this.fx = new Particles(1600, true);
    this.smoke = new Particles(700, false);
    this.root.add(this.smoke.points, this.fx.points);

    // --- cars
    const defs = CARS && CARS.length ? CARS : [{ id: playerCarId, name: String(playerCarId) }];
    if (this._replica) {
      this._net = new ClientNet(this, netCfg);
      this._buildFromRoster(netCfg, defs, grid);
    } else {
    const pid = defs.some((c) => c.id === playerCarId) ? playerCarId : defs[0].id;
    const playerSlot = Math.min(total - 1, Math.max(0, opts.playerGridSlot != null ? opts.playerGridSlot | 0 : total - 1));
    const player = new Car(pid, { name: playerName, isPlayer: true });
    this.player = player;
    this._pst = this._addCar(player, null);
    this._pst.human = !opts.autopilot;

    // remote humans (host): their cars are puppets fed by the owners' state packets
    const taken = new Set([pid]);
    if (this.netRole === 'host') {
      this._net = new HostNet(this, netCfg);
      this._pst.netId = netCfg.localId != null ? netCfg.localId : null;
      const colors = new Set([String(player.color || '').toLowerCase()]);
      for (const r of remotes) {
        const cid = defs.some((c) => c.id === r.carId) ? r.carId : defs[0].id;
        const def = defs.find((c) => c.id === cid);
        // two humans in the same model: give the later one a different paint job
        let color;
        if (colors.has(String(def.color || '').toLowerCase())) color = ALT_COLORS.find((c) => !colors.has(c)) || undefined;
        const car = new Car(cid, { name: String(r.name || 'Player').slice(0, 24), isPlayer: false, color });
        colors.add(String(car.color || color || def.color || '').toLowerCase());
        taken.add(cid);
        const st = this._addCar(car, null);
        st.human = true;
        st.netId = r.id;
        st.pup = new PuppetTrack();
        car.puppet = true;
        this._net.addRemote(st);
      }
    }
    const nBots = nOpp - (this.states.length - 1);

    let pool = shuffle(defs.filter((c) => !taken.has(c.id)).map((c) => c.id), rnd);
    if (!pool.length) pool = shuffle(defs.filter((c) => c.id !== pid).map((c) => c.id), rnd);
    if (!pool.length) pool = [pid];
    const names = shuffle(DRIVER_NAMES.slice(), rnd);
    const base = SKILL_BY_DIFFICULTY[this.difficulty];
    for (let i = 0; i < nBots; i++) {
      const car = new Car(pool[i % pool.length], { name: names[i % names.length], isPlayer: false });
      // small spread; cars nearer the front of the grid are a touch better
      const skill = Math.min(1, Math.max(0.05, base + 0.07 - (0.14 * i) / Math.max(1, nBots - 1) + (rnd() - 0.5) * 0.06));
      const ai = new AIDriver(car, { skill });
      this._addCar(car, ai).skill = skill;
    }
    if (opts.autopilot) this.states[0].ai = new AIDriver(player, { skill: base });

    // --- grid: opponents fill the slots the player does not use, in order
    //     (multiplayer: bots in front, the humans share the back rows in random order)
    let slot = 0;
    if (this.netRole === 'host') {
      const order = this.states.filter((st) => !st.human).concat(shuffle(this.states.filter((st) => st.human), rnd));
      order.forEach((st, s) => { st.gridSlot = s; });
    }
    for (let i = 0; i < this.states.length; i++) {
      const st = this.states[i];
      let s;
      if (this.netRole === 'host') s = st.gridSlot;
      else if (i === 0) s = playerSlot;
      else { if (slot === playerSlot) slot++; s = slot++; }
      st.gridSlot = s;
    }
    }
    for (let i = 0; i < this.states.length; i++) {
      const st = this.states[i];
      const s = st.gridSlot;
      {
      const g = grid[s] || grid[grid.length - 1];
      const car = st.car;
      if (g) car.placeAt(g.pos, g.heading, track);
      car.frozen = true;
      let t = car.trackT;
      if (!Number.isFinite(t) && g) t = track.project(g.pos).t;
      if (!Number.isFinite(t)) t = 0;
      st.lastT = t;
      st.progress = t > 0.5 ? t - 1 : t; // grid sits just behind the line → slightly negative
      st.maxProgress = st.progress;
      st.px = car.pos.x; st.pz = car.pos.z;
      scene.add(car.mesh);
      }
    }
    this._rank();

    // --- pickups + weapons
    this.weapons = new Weapons(this);
    this.pickups =
      this.mode !== 'timetrial' && track.pickupSpots && track.pickupSpots.length
        ? new PickupField(this, track.pickupSpots)
        : null;
  }

  _addCar(car, ai) {
    const st = {
      car, ai, index: this.states.length, skill: 0, gridSlot: 0,
      progress: 0, maxProgress: 0, lastT: 0, jumpTime: 0,
      lapsDone: 0, lapStart: 0, bestLap: null, lastLap: null,
      finished: false, finishTime: null, estimated: false, position: this.states.length + 1,
      item: null, itemHeld: 0, aiFireAt: 0,
      wrongWay: false, wrongTimer: 0,
      shieldTime: 0, shieldMesh: null, hitImmune: 0,
      wasBoosting: false, crashCd: 0, flameAcc: 0, smokeAcc: 0,
      // status effects (see Weapons._updateStatus / _statusPhysics)
      slowTime: 0, slowFactor: 1, slowImmune: 0,           // top speed capped at slowFactor x def.topSpeed
      shrinkTime: 0, scaleVis: 1, cloudMesh: null, cloudAcc: 0, // storm visual: small car + cloud
      towTarget: null, towTime: 0, towMesh: null,          // tow beam: this car is being reeled toward towTarget
      pogo: 0, pogoT: 0,                                   // 1 = hop requested, 2 = airborne (landing makes a ring)
      // multiplayer
      human: false, netId: null, pup: null, pupN: 0, tp: 0, wh: 0, px: 0, pz: 0, teleported: false, fireReq: 0, fireSeen: 0,
    };
    this.states.push(st);
    this._order.push(st);
    this.cars.push(car);
    this._byCar.set(car, st);
    return st;
  }

  /** client: build the same cars (same indices) as the host from its roster */
  _buildFromRoster(cfg, defs, grid) {
    const { Car } = this.deps;
    const roster = (Array.isArray(cfg.roster) ? cfg.roster : []).filter((e) => e && typeof e === 'object')
      .slice().sort((a, b) => (a.index | 0) - (b.index | 0)).slice(0, 8);
    let local = null;
    roster.forEach((e, i) => {
      const cid = defs.some((c) => c.id === e.carId) ? e.carId : defs[0].id;
      const mine = !local && cfg.localId != null && e.netId === cfg.localId;
      const car = new Car(cid, { name: String(e.name || 'Racer').slice(0, 24), isPlayer: mine, color: typeof e.color === 'string' ? e.color : undefined });
      const st = this._addCar(car, null);
      st.human = e.kind === 'human';
      st.netId = e.netId != null ? e.netId : null;
      st.gridSlot = Number.isFinite(e.slot) ? Math.max(0, Math.min(grid.length - 1, e.slot | 0)) : i;
      if (mine) local = st;
      else { st.pup = new PuppetTrack(); car.puppet = true; }
    });
    if (!this.states.length) { // empty / broken roster: a lone car so nothing downstream breaks
      const car = new Car(defs[0].id, { name: 'Player', isPlayer: true });
      local = this._addCar(car, null);
      local.human = true;
    }
    if (!local) { this._net.localSim = false; local = this.states[0]; } // not in the roster: spectate car 0
    this._pst = local;
    this.player = local.car;
  }

  // ------------------------------------------------------------- multiplayer API
  /** JSON roster in grid order: [{ index, name, carId, kind: 'human'|'bot', netId|null, color, slot }] */
  getRoster() {
    return this.states.slice().sort((a, b) => a.gridSlot - b.gridSlot).map((st) => ({
      index: st.index,
      name: st.car.name,
      carId: st.car.def && st.car.def.id,
      kind: st.human ? 'human' : 'bot',
      netId: st.netId != null ? st.netId : null,
      color: st.car.color || (st.car.def && st.car.def.color) || null,
      slot: st.gridSlot,
    }));
  }

  /** feed a message received from the network (never throws on malformed input) */
  netReceive(msg, fromId) {
    if (this._disposed || !this._net) return;
    try { this._net.receive(msg, fromId); } catch (e) { /* malformed message: ignore */ }
  }

  /** host: that human left — the car carries on as a bot */
  dropRemote(netId) {
    const net = this._net;
    if (this._disposed || !net || net.role !== 'host') return false;
    const st = net.byId.get(netId);
    if (!st) return false;
    net.byId.delete(netId);
    net.waiting.delete(netId);
    st.pup = null;
    st.human = false;
    st.netId = null;
    st.fireReq = 0;
    st.car.puppet = false;
    st.px = st.car.pos.x; st.pz = st.car.pos.z;
    st.ai = new this.deps.AIDriver(st.car, { skill: st.finished ? 0.55 : SKILL_BY_DIFFICULTY[this.difficulty] });
    st.skill = st.ai.skill || 0;
    this._mpCheckOver();
    return true;
  }

  // ------------------------------------------------------------- events
  on(event, cb) {
    let l = this._listeners.get(event);
    if (!l) this._listeners.set(event, (l = []));
    l.push(cb);
    return () => this.off(event, cb);
  }

  off(event, cb) {
    const l = this._listeners.get(event);
    if (!l) return;
    const i = l.indexOf(cb);
    if (i >= 0) l.splice(i, 1);
  }

  _emit(event, a, b, c, d) {
    if (this.netRole === 'host' && event !== 'net') this._net.forward(event, a, b, c, d);
    const l = this._listeners.get(event);
    if (!l) return;
    for (let i = 0; i < l.length; i++) l[i](a, b, c, d);
  }

  // ------------------------------------------------------------- queries
  info(car) {
    const st = this._byCar.get(car);
    if (!st) return null;
    const racing = this.state !== 'countdown';
    return {
      lap: Math.min(st.lapsDone + 1, this.laps),
      laps: this.laps,
      position: st.position,
      total: this.states.length,
      lapTime: st.finished ? st.lastLap || 0 : racing ? Math.max(0, this.time - st.lapStart) : 0,
      bestLap: st.bestLap,
      lastLap: st.lastLap,
      item: st.item,
      wrongWay: st.wrongWay,
      finished: st.finished,
      finishTime: st.finishTime,
      progress: st.maxProgress,
      // extras
      shield: st.shieldTime > 0,
      boosting: (car.boostTime || 0) > 0,
      slowed: st.slowTime > 0,
      shrunk: st.shrinkTime > 0,
      towing: !!st.towTarget,
    };
  }

  standings() {
    if (this._final) return this._final.map((e) => ({ ...e }));
    return this._buildStandings(false);
  }

  _buildStandings(estimate) {
    const out = [];
    let prev = 0;
    for (let i = 0; i < this._order.length; i++) {
      const st = this._order[i];
      let finished = st.finished, finishTime = st.finishTime, estimated = false;
      if (!finished && estimate) {
        // extrapolate from average pace so far; keep the order monotonic
        const pace = this.time / Math.max(0.05, st.progress + 0.02);
        let est = Math.min(this.time * 3 + 30, pace * this.laps);
        est = Math.max(est, this.time + 0.4, prev + 0.15);
        finished = true;
        estimated = true;
        finishTime = est;
      }
      if (finishTime != null) prev = finishTime;
      out.push(this._standingEntry(st, i + 1, finished, finishTime, estimated, st.bestLap, st.lapsDone));
    }
    return out;
  }

  _standingEntry(st, position, finished, finishTime, estimated, bestLap, lapsDone) {
    return {
      car: st.car,
      name: st.car.name,
      carName: st.car.def && st.car.def.name ? st.car.def.name : '',
      position,
      finished,
      finishTime,
      bestLap,
      isPlayer: !!st.car.isPlayer,
      estimated,
      lapsDone,
      isHuman: !!st.human, // (multiplayer) any human driver, local or remote
      index: st.index,
    };
  }

  /** Extra: give a car an item directly (tests / cheats). */
  giveItem(car, itemId) {
    const st = this._byCar.get(car);
    const it = ITEM_BY_ID[itemId];
    if (!st || !it) return false;
    st.item = it;
    st.itemHeld = 0;
    st.aiFireAt = 1 + this.random() * 3;
    return true;
  }

  /** Extra: use the held item of a car right now. Returns the item used or null. */
  useItem(car) {
    const st = this._byCar.get(car);
    return st ? this._fire(st) : null;
  }

  // ------------------------------------------------------------- update
  update(dt, pc) {
    if (this._disposed) return;
    if (!(dt > 0)) dt = 0;
    if (dt > 0.05) dt = 0.05;
    const net = this._net;
    if (net && net.role === 'client') { net.update(dt, pc); return; }
    const S = this.states, cars = this.cars, track = this.track;
    if (net && net.begin(dt) && this.state === 'countdown') {
      // host: hold the countdown until every remote player has checked in (or a few seconds passed)
      for (let i = 0; i < cars.length; i++) { cars[i].frozen = true; cars[i].update(dt, track); }
      this._updateFx(dt);
      net.end(dt);
      return;
    }
    this._clock += dt;

    if (this.state === 'countdown') {
      this._cd += dt;
      while (this._cdStep < 3 && this._cd >= COUNTDOWN_AT[this._cdStep]) {
        this._emit('countdown', 3 - this._cdStep);
        this._cdStep++;
      }
      if (this._cd < GO_AT) {
        for (let i = 0; i < cars.length; i++) {
          cars[i].frozen = true;
          if (S[i].pup) S[i].pup.advance(cars[i], net.wall, dt);
          cars[i].update(dt, track);
        }
        this._updateFx(dt);
        if (net) net.end(dt);
        return;
      }
      this.state = 'racing';
      this._goClock = this._clock - dt;
      for (let i = 0; i < cars.length; i++) cars[i].frozen = false;
      this._emit('go');
    }

    this.time += dt;

    // --- drivers
    const pst = this._pst;
    const ref = net ? this._humanProgress() : pst.progress;
    for (let i = 0; i < S.length; i++) {
      const st = S[i];
      if (st.pup) {
        // remote human: dead-reckon from the owner's last state packet
        st.pup.advance(st.car, net.wall, dt);
        if (st.pup.snapped) { st.tp = (st.tp + 1) & 15; st.teleported = true; } else st.teleported = false;
      } else if (st.ai) {
        if ('playerProgressDelta' in st.ai) st.ai.playerProgressDelta = st.progress - ref; // laps, + = AI ahead of the player
        st.ai.update(dt, track, cars);
      } else if (pc && st === pst) {
        const c = st.car.controls;
        c.throttle = +pc.throttle || 0;
        c.steer = +pc.steer || 0;
        c.handbrake = !!pc.handbrake;
      }
    }
    for (let i = 0; i < cars.length; i++) cars[i].update(dt, track);
    for (let i = 0; i < S.length; i++) if (!S[i].pup && (S[i].towTarget || S[i].slowTime > 0)) this._statusPhysics(S[i], dt);
    const impact = cars.length > 1 ? (net ? this._collideNet() : this.deps.resolveCarCollisions(cars) || 0) : 0;
    if (net) for (let i = 0; i < S.length; i++) if (!S[i].pup) this._teleportCheck(S[i], dt);

    // --- progress / laps / wrong way
    for (let i = 0; i < S.length; i++) this._updateProgress(S[i], dt);
    this._rank();

    // --- car feedback (boost, smoke, sparks, crashes)
    for (let i = 0; i < S.length; i++) this._carFx(S[i], dt);
    if (impact > CRASH_THRESHOLD) this._carImpact(impact);

    // --- items
    const fire = !!(pc && pc.fire);
    if (fire && !this._prevFire && !pst.ai && !pst.finished) this._fire(pst);
    this._prevFire = fire;
    for (let i = 0; i < S.length; i++) {
      const st = S[i];
      if (st.hitImmune > 0) st.hitImmune -= dt;
      if (st.ai) this._aiItems(st, dt);
      else if (st.fireReq) { // remote human asked to use the item: valid only if it holds one
        st.fireReq = 0;
        if (st.pup && !st.finished) this._fire(st);
      }
    }

    this._updateFx(dt);

    // --- race over
    if (this._overTimer >= 0 && !this._raceOverFired) {
      this._overTimer -= dt;
      if (this._overTimer <= 0) {
        this._raceOverFired = true;
        this._final = this._buildStandings(true);
        if (net) {
          this._goAutopilot();       // the host may not have finished when the time ran out
          net.sendFinal(this._final);
        }
        this._emit('raceOver', this.standings());
      }
    }
    if (net) net.end(dt);
  }

  // ------------------------------------------------------------- multiplayer helpers
  /** rubber-band reference in multiplayer: mean progress of the humans still racing */
  _humanProgress() {
    let sum = 0, n = 0;
    for (let i = 0; i < this.states.length; i++) {
      const st = this.states[i];
      if (st.human && !st.finished) { sum += st.progress; n++; }
    }
    return n ? sum / n : this._pst.progress;
  }

  /**
   * Car-vs-car with network puppets: locally simulated cars collide normally; against a puppet only the
   * local car takes its share (the puppet belongs to its owner, who resolves the same contact on their side).
   */
  _collideNet() {
    const S = this.states, resolve = this.deps.resolveCarCollisions, pair = this._pair;
    let impact = 0, nSim = 0;
    const sims = this._sims || (this._sims = []);
    sims.length = 0;
    for (let i = 0; i < S.length; i++) if (!S[i].pup) sims.push(S[i].car);
    nSim = sims.length;
    if (nSim > 1) impact = resolve(sims) || 0;
    if (nSim === S.length) return impact;
    for (let i = 0; i < S.length; i++) {
      if (!S[i].pup) continue;
      const p = S[i].car;
      const x = p.pos.x, y = p.pos.y, z = p.pos.z, vx = p.vel.x, vy = p.vel.y, vz = p.vel.z;
      for (let j = 0; j < nSim; j++) {
        const c = sims[j];
        const dx = c.pos.x - x, dz = c.pos.z - z, rr = (c.radius || 1) + (p.radius || 1);
        if (dx * dx + dz * dz > rr * rr) continue;
        pair[0] = c; pair[1] = p;
        const im = resolve(pair) || 0;
        if (im > impact) impact = im;
        p.pos.x = x; p.pos.y = y; p.pos.z = z;
        p.vel.x = vx; p.vel.y = vy; p.vel.z = vz;
      }
    }
    pair[0] = pair[1] = null;
    return impact;
  }

  /** a locally simulated car that jumped (reset to track, respawn) tells the others to snap instead of slide */
  _teleportCheck(st, dt) {
    const car = st.car;
    const dx = car.pos.x - st.px, dz = car.pos.z - st.pz;
    const lim = 4 + 1.5 * Math.hypot(car.vel.x, car.vel.z) * dt;
    st.teleported = dx * dx + dz * dz > lim * lim;
    if (st.teleported) st.tp = (st.tp + 1) & 15;
    st.px = car.pos.x; st.pz = car.pos.z;
  }

  /** the local player's car drives itself from now on (finished / race over) */
  _goAutopilot() {
    const st = this._pst;
    this.state = 'finished';
    if (!st.ai && !st.pup) st.ai = new this.deps.AIDriver(st.car, { skill: 0.55 });
  }

  /** host: all humans home → results after a short beat; first human home → everybody else gets 20 s */
  _mpCheckOver() {
    if (this._raceOverFired || this.netRole !== 'host') return;
    let humans = 0, done = 0;
    for (let i = 0; i < this.states.length; i++) {
      const st = this.states[i];
      if (st.human) { humans++; if (st.finished) done++; }
    }
    if (!done && humans) return;
    if (done >= humans) {
      if (this.state === 'countdown') return;
      this._overTimer = this._overTimer < 0 ? RACE_OVER_DELAY : Math.min(this._overTimer, RACE_OVER_DELAY);
    } else if (this._overTimer < 0) this._overTimer = MP_OVER_TIMEOUT;
  }

  /** client: the host says this car finished */
  _clientFinish(st, position, finishTime) {
    if (st.finished) return;
    st.finished = true;
    st.finishTime = finishTime;
    st.item = null;
    st.wrongWay = false;
    this._finishedCount = Math.max(this._finishedCount + 1, position | 0);
    this._emit('finish', st.car, position > 0 ? position : this._finishedCount);
    if (st === this._pst) this._finishFx(st);
  }

  _finishFx(st) {
    this.state = 'finished';
    if (!st.ai && !st.pup) st.ai = new this.deps.AIDriver(st.car, { skill: 0.55 }); // autopilot cool-down lap
    const p = st.car.pos;
    this.fx.burst(p.x, p.y + 1, p.z, 60, 14, 1.1, 0.6, 0.1, 1.0, 0.85, 0.3, 1, 9, 0.8, 0.9, this.random);
  }

  _updateFx(dt) {
    if (this.pickups) this.pickups.update(dt, this._clock);
    this.weapons.update(dt, this._clock);
    this.fx.update(dt);
    this.smoke.update(dt);
  }

  _updateProgress(st, dt) {
    const car = st.car, track = this.track;
    let t = car.trackT;
    if (!Number.isFinite(t)) {
      const pr = track.project(car.pos, st.lastT);
      t = pr ? pr.t : NaN;
      if (!Number.isFinite(t)) return;
    }
    let d = t - st.lastT;
    if (d > 0.5) d -= 1;
    else if (d < -0.5) d += 1;

    // anti-teleport: a car can not physically cover this much track in one frame
    const maxStep = Math.max(0.01, (160 * dt) / (track.length || 500));
    let accept = true;
    if (Math.abs(d) > maxStep) {
      st.jumpTime += dt;
      // wait for the projection to come back; re-sync only if the jump persists
      // (quickly for a loss, slowly for a gain)
      if (st.jumpTime < (d < 0 ? 0.4 : 1.5)) accept = false;
    }
    if (accept) {
      st.jumpTime = 0;
      st.lastT = t;
      st.progress += d;
      if (st.progress > st.maxProgress) st.maxProgress = st.progress;

      // lap crossing: unwrapped progress passes the next integer (never fires going backwards,
      // and re-crossing the line after reversing over it does not count twice)
      while (!st.finished && st.progress >= st.lapsDone + 1) {
        const target = st.lapsDone + 1;
        const frac = d > 1e-9 ? Math.min(1, Math.max(0, (st.progress - target) / d)) : 0;
        const cross = this.time - dt * frac;
        const lapTime = cross - st.lapStart;
        st.lapStart = cross;
        st.lapsDone = target;
        st.lastLap = lapTime;
        const isBest = st.bestLap == null || lapTime < st.bestLap;
        if (isBest) st.bestLap = lapTime;
        this._emit('lap', car, target, lapTime, isBest);
        if (target >= this.laps) {
          st.finished = true;
          st.finishTime = cross;
          this._finishedCount++;
          this._onFinish(st);
        } else if (target === this.laps - 1) {
          this._emit('finalLap', car);
        }
      }
    }

    this._wrongWay(st, dt);
  }

  _wrongWay(st, dt) {
    const car = st.car, track = this.track;
    // wrong way: heading against the track direction while driving forward for > 1 s
    let wrong = false;
    if (!st.finished && car.speed > 2.5 && !(car.spinTime > 0)) {
      const sp = track.sample(st.lastT);
      const tg = sp && sp.tangent;
      if (tg) wrong = Math.sin(car.heading) * tg.x + Math.cos(car.heading) * tg.z < -0.25;
    }
    if (wrong) {
      st.wrongTimer += dt;
      if (st.wrongTimer > WRONG_WAY_TIME) st.wrongWay = true;
    } else {
      st.wrongTimer = 0;
      st.wrongWay = false;
    }
  }

  _onFinish(st) {
    const car = st.car;
    st.item = null;
    st.wrongWay = false;
    this._emit('finish', car, this._finishedCount);
    if (st === this._pst) {
      this._finishFx(st);
      if (!this._net) this._overTimer = RACE_OVER_DELAY;
    }
    if (this._net) this._mpCheckOver();
  }

  _rank() {
    const o = this._order;
    o.sort(byRank);
    for (let i = 0; i < o.length; i++) o[i].position = i + 1;
  }

  // ------------------------------------------------------------- car fx
  _boostBurst(st) {
    const p = st.car.pos, h = st.car.heading;
    this.fx.burst(p.x - Math.sin(h), p.y + 0.4, p.z - Math.cos(h), 18, 8, 0.4, 0.8, 0.1, 0.4, 0.8, 1.0, 1, 0, 2, 0.4, this.random);
  }

  _carFx(st, dt) {
    const car = st.car, rnd = this.random, fx = this.fx;
    const h = car.heading, fx_ = Math.sin(h), fz = Math.cos(h); // forward
    const px = fz, pz = -fx_; // sideways
    const p = car.pos;

    // boost start (pads handled by Car, turbo by us) + flames
    const boosting = car.boostTime > 0;
    if (boosting && !st.wasBoosting) {
      this._boostBurst(st);
      this._emit('boost', car);
    }
    st.wasBoosting = boosting;
    if (boosting) {
      st.flameAcc += dt * 90;
      const vx = car.vel ? car.vel.x : 0, vz = car.vel ? car.vel.z : 0;
      while (st.flameAcc >= 1) {
        st.flameAcc -= 1;
        const side = rnd() < 0.5 ? -0.32 : 0.32;
        const hot = rnd();
        fx.emit(
          p.x - fx_ * 1.05 + px * side, p.y + 0.38, p.z - fz * 1.05 + pz * side,
          vx * 0.35 - fx_ * (5 + rnd() * 5) + (rnd() - 0.5) * 1.5, (rnd() - 0.3) * 1.5, vz * 0.35 - fz * (5 + rnd() * 5) + (rnd() - 0.5) * 1.5,
          0.16 + rnd() * 0.14, 0.75, 0.12,
          hot < 0.3 ? 0.5 : 1.0, hot < 0.3 ? 0.8 : 0.45 + hot * 0.4, hot < 0.3 ? 1.0 : 0.12, 1, 0, 0
        );
      }
    } else st.flameAcc = 0;

    // tyre smoke
    if (car.drifting && car.onGround !== false && Math.abs(car.speed) > 6) {
      st.smokeAcc += dt * 34;
      while (st.smokeAcc >= 1) {
        st.smokeAcc -= 1;
        const side = rnd() < 0.5 ? -0.5 : 0.5;
        const g = 0.8 + rnd() * 0.15;
        this.smoke.emit(
          p.x - fx_ * 0.8 + px * side, p.y + 0.15, p.z - fz * 0.8 + pz * side,
          (rnd() - 0.5) * 1.5, 0.8 + rnd() * 0.9, (rnd() - 0.5) * 1.5,
          0.55 + rnd() * 0.35, 0.5, 2.1, g, g, g, 0.32, 0, 1.2
        );
      }
    } else st.smokeAcc = 0;

    // wall / obstacle hits
    if (st.crashCd > 0) st.crashCd -= dt;
    let wh = car.wallHit;
    if (st.pup) { wh = st.pup.wallHit; st.pup.wallHit = 0; }   // puppet: as reported by its owner
    if (this._net && wh > st.wh) st.wh = wh;                    // latched for the next outgoing packet
    if (wh > 1.5) {
      const n = Math.min(14, 2 + (wh | 0));
      const a = rnd() * Math.PI * 2;
      fx.burst(p.x + Math.sin(a) * 0.6, p.y + 0.35, p.z + Math.cos(a) * 0.6, n, 6 + wh * 0.5, 0.35, 0.28, 0.04, 1.0, 0.8, 0.35, 1, 16, 0.5, 0.6, rnd);
      if (wh > CRASH_THRESHOLD && st.crashCd <= 0 && !st.pup) {
        st.crashCd = 0.3;
        this._emit('crash', car, wh);
      }
    }
  }

  _carImpact(strength) {
    const S = this.states, rnd = this.random;
    for (let i = 0; i < S.length; i++) {
      for (let j = i + 1; j < S.length; j++) {
        const a = S[i], b = S[j];
        const dx = b.car.pos.x - a.car.pos.x, dz = b.car.pos.z - a.car.pos.z;
        const rr = (a.car.radius || 1) + (b.car.radius || 1) + 0.25;
        if (dx * dx + dz * dz > rr * rr) continue;
        if (a.crashCd > 0 && b.crashCd > 0) continue;
        if (a.pup && b.pup) continue; // neither is simulated here
        this.fx.burst(a.car.pos.x + dx * 0.5, a.car.pos.y + 0.45, a.car.pos.z + dz * 0.5,
          Math.min(12, 3 + (strength | 0)), 6 + strength * 0.4, 0.3, 0.28, 0.04, 1.0, 0.85, 0.4, 1, 16, 0.5, 0.6, rnd);
        if (a.crashCd <= 0) { a.crashCd = 0.3; if (!a.pup) this._emit('crash', a.car, strength); }
        if (b.crashCd <= 0) { b.crashCd = 0.3; if (!b.pup) this._emit('crash', b.car, strength); }
      }
    }
  }

  // ------------------------------------------------------------- items
  _givePickup(st) {
    st.item = pickItemFor(st.position, this.states.length, this.random);
    st.itemHeld = 0;
    st.aiFireAt = 1 + this.random() * 3;
    this._emit('pickup', st.car, st.item);
  }

  _fire(st) {
    const item = st.item;
    if (!item || this.state === 'countdown') return null;
    st.item = null;
    st.itemHeld = 0;
    this.weapons.use(st, item.id);
    this._emit('fire', st.car, item);
    return item;
  }

  /**
   * Apply a weapon hit. Returns 0 = ignored (recently hit), 1 = hit, 2 = blocked by a shield.
   * Loss of control is capped at 1.2 s.
   */
  _hit(st, itemId, spin, launchVy, ix, iz, slow) {
    if (st.hitImmune > 0) return 0;
    const car = st.car;
    if (st.shieldTime > 0) {
      st.shieldTime = 0;
      st.hitImmune = 0.6;
      this._blockFx(st);
      this._emit('block', car, itemId);
      return 2;
    }
    st.hitImmune = 1.8;
    car.spinTime = Math.max(car.spinTime || 0, Math.min(1.2, spin));
    if (st.pup && this._net) {
      // remote human's car: its owner simulates it — send the effect instead of touching the physics here
      // (the spin above is only our visual copy until the owner's state shows it)
      this._net.effect(st, itemId, Math.min(1.2, spin), launchVy, slow ? 0 : ix, slow ? 0 : iz, slow || 0, 0);
    } else {
      if (ix || iz) car.applyImpulse(_v.set(ix || 0, 0, iz || 0));
      if (launchVy > 0) car.launch(launchVy);
    }
    this._hitFx(st, itemId);
    this._emit('hit', car, itemId);
    return 1;
  }

  /**
   * Hostile slow-down that leaves the driver in control (tow drag, shrink storm): top speed is capped at
   * `factor` x the car's own for `time` s (≤ 2.5 s), optionally with the shrink visual.
   * Returns 0 = ignored (recently hit / slowed), 1 = applied, 2 = blocked by a shield.
   */
  _slowHit(st, itemId, time, factor, shrink) {
    if (st.hitImmune > 0 || st.slowImmune > 0) return 0;
    const car = st.car;
    if (st.shieldTime > 0) {
      st.shieldTime = 0;
      st.hitImmune = 0.6;
      this._blockFx(st);
      this._emit('block', car, itemId);
      return 2;
    }
    time = Math.min(MAX_SLOW_TIME, time);
    st.hitImmune = 0.5;
    st.slowImmune = time + SLOW_GRACE;
    st.slowTime = time;
    st.slowFactor = Math.min(1, Math.max(0.4, factor));
    if (shrink) this.weapons._shrink(st, time);
    // remote human's car: the owner applies the cap to the real thing
    if (st.pup && this._net) this._net.effect(st, itemId, 0, 0, 0, 0, 0, 0, time, st.slowFactor, 0);
    this._hitFx(st, itemId);
    this._emit('hit', car, itemId);
    return 1;
  }

  /**
   * Status effects on a locally simulated car, right after its physics step: tow-beam pull toward the target
   * and the slow-down speed cap. (Puppets get theirs from their owners.)
   */
  _statusPhysics(st, dt) {
    const car = st.car, v = car.vel;
    const top = (car.def && car.def.topSpeed) || 35;
    const tg = st.towTarget;
    if (tg && !(car.spinTime > 0)) {
      const Z = ITEM_TUNING.zaptow;
      const dx = tg.car.pos.x - car.pos.x, dz = tg.car.pos.z - car.pos.z;
      const d = Math.hypot(dx, dz);
      if (d > 3.5) {
        const nx = dx / d, nz = dz / d;
        const along = v.x * nx + v.z * nz;
        const cap = top * Z.top;
        if (along < cap) {
          const add = Math.min(Z.pull * dt, cap - along);
          v.x += nx * add; v.z += nz * add;
          car.speed += add * (nx * Math.sin(car.heading) + nz * Math.cos(car.heading));
        }
      }
    }
    if (st.slowTime > 0) {
      const cap = top * st.slowFactor;
      const sp = Math.hypot(v.x, v.z);
      if (sp > cap) {
        const k = Math.max(cap, sp - 70 * dt) / sp; // ease down, never a dead stop
        v.x *= k; v.z *= k;
        car.speed *= k;
      }
    }
  }

  _blockFx(st) {
    const p = st.car.pos;
    this.fx.burst(p.x, p.y + 0.6, p.z, 30, 11, 0.5, 0.5, 0.08, 0.5, 0.92, 1.0, 1, 5, 1.5, 0.5, this.random);
  }

  _hitFx(st, itemId) {
    const p = st.car.pos;
    const c = itemId === 'glue' ? 0 : 1;
    if (itemId === 'zaptow') { // a tug, not a bang
      this.fx.burst(p.x, p.y + 0.6, p.z, 10, 5, 0.35, 0.4, 0.08, 0.5, 0.75, 1.0, 1, 0, 2, 0.5, this.random);
      return;
    }
    this.fx.burst(p.x, p.y + 0.6, p.z, 20, 9, 0.5, 0.5, 0.08, c ? 1.0 : 0.5, c ? 0.9 : 1.0, c ? 0.4 : 0.3, 1, 10, 1, 0.7, this.random);
  }

  /** Nearest car ahead on the road within `maxFrac` of a lap (lapped cars count), or null. */
  _targetAhead(st, maxFrac) {
    let best = null, bd = maxFrac;
    for (let i = 0; i < this.states.length; i++) {
      const o = this.states[i];
      if (o === st) continue;
      let d = (o.progress - st.progress) % 1;
      if (d < 0) d += 1;
      if (d < bd) { bd = d; best = o; }
    }
    return best;
  }

  _nearestOther(st) {
    let bd = Infinity;
    const p = st.car.pos;
    for (let i = 0; i < this.states.length; i++) {
      const o = this.states[i];
      if (o === st) continue;
      const dx = o.car.pos.x - p.x, dz = o.car.pos.z - p.z;
      const d = dx * dx + dz * dz;
      if (d < bd) bd = d;
    }
    return Math.sqrt(bd);
  }

  _aiItems(st, dt) {
    const ai = st.ai;
    const wants = !!ai.wantsToFire;
    if (wants) ai.wantsToFire = false;
    if (!st.item || st.finished || st.car.spinTime > 0) return;
    st.itemHeld += dt;
    if (st.itemHeld < 0.6) return;
    const id = st.item.id;
    const len = this.track.length || 500;
    const due = st.itemHeld >= st.aiFireAt;
    let go = false;
    if (id === 'rocket' || id === 'marble') {
      const ahead = this._targetAhead(st, 70 / len);
      go = (ahead && (wants || due)) || st.itemHeld > 9;
    } else if (id === 'glue') {
      // someone close behind?
      let behind = false;
      for (let i = 0; i < this.states.length && !behind; i++) {
        const o = this.states[i];
        if (o === st) continue;
        let d = (st.progress - o.progress) % 1;
        if (d < 0) d += 1;
        behind = d < 30 / len;
      }
      go = (behind && (wants || due)) || st.itemHeld > 7;
    } else if (id === 'pulse') {
      go = this._nearestOther(st) < 8.5 || st.itemHeld > 12;
    } else if (id === 'shield') {
      go = due || wants;
    } else if (id === 'turbo') {
      go = (wants || due) && Math.abs(st.car.controls.steer || 0) < 0.35 && !(st.car.boostTime > 0);
      if (st.itemHeld > 8) go = true;
    } else if (id === 'zaptow') {
      // somebody in reach but not already on our bumper
      const tg = this.weapons._towTarget(st);
      if (tg) {
        const dx = tg.car.pos.x - st.car.pos.x, dz = tg.car.pos.z - st.car.pos.z;
        go = dx * dx + dz * dz > 64 && !(tg.shieldTime > 0 && st.itemHeld < 4);
      }
      if (st.itemHeld > 12) go = true;
    } else if (id === 'shockcloud') {
      // worth it only with cars in front; the further back, the sooner
      go = st.position > 1 && (due || wants || st.position > 3);
      if (st.itemHeld > 15) go = true;
    } else if (id === 'pogo') {
      go = this._aiPogo(st, due && wants) || st.itemHeld > 10;
      if (go && !this._straightAhead(st)) go = st.itemHeld > 14; // never hop into a bend
    }
    if (go) this._fire(st);
  }

  /** is the road ahead straight enough to fly over it for a second? */
  _straightAhead(st) {
    const car = st.car, track = this.track, len = track.length || 500;
    if (car.onGround === false || Math.abs(car.controls.steer || 0) > 0.3) return false;
    const fx = Math.sin(car.heading), fz = Math.cos(car.heading);
    const sp = track.sample((st.lastT + Math.max(26, Math.abs(car.speed || 0) * 1.1) / len) % 1);
    const tg = sp && sp.tangent;
    return !tg || fx * tg.x + fz * tg.z > 0.9;
  }

  /** pogo heuristic: something worth hopping over right in front (car, goo, marble), or a free straight */
  _aiPogo(st, idle) {
    const car = st.car, top = (car.def && car.def.topSpeed) || 35;
    if (!(car.speed > top * 0.45)) return false;
    const p = car.pos, fx = Math.sin(car.heading), fz = Math.cos(car.heading);
    const reach = 4 + car.speed * 0.3;
    const S = this.states, W = this.weapons;
    for (let i = 0; i < S.length; i++) {
      const o = S[i];
      if (o !== st && inPath(p, fx, fz, reach, o.car.pos.x, o.car.pos.z, 2.5) && (o.car.speed || 0) < car.speed - 1) return true;
    }
    for (let i = 0; i < W.puddles.length; i++) if (!W.puddles[i].dying && inPath(p, fx, fz, reach, W.puddles[i].x, W.puddles[i].z, 2.5)) return true;
    for (let i = 0; i < W.marbles.length; i++) if (inPath(p, fx, fz, reach, W.marbles[i].pos.x, W.marbles[i].pos.z, 1.5)) return true;
    return idle;
  }

  // ------------------------------------------------------------- dispose
  dispose() {
    if (this._disposed) return;
    this._disposed = true;
    if (this.pickups) this.pickups.dispose();
    this.weapons.dispose();
    this.fx.dispose();
    this.smoke.dispose();
    // anything left under the fx root
    this.root.traverse((o) => {
      if (o.geometry && o.geometry.dispose) o.geometry.dispose();
      const m = o.material;
      if (Array.isArray(m)) m.forEach((x) => x.dispose && x.dispose());
      else if (m && m.dispose) m.dispose();
    });
    this.root.clear();
    this.scene.remove(this.root);
    for (const car of this.cars) {
      if (car.mesh) {
        if (car.mesh.parent) car.mesh.parent.remove(car.mesh);
        else this.scene.remove(car.mesh);
      }
      if (typeof car.dispose === 'function') car.dispose();
    }
    this._listeners.clear();
  }
}

export { ITEMS };
