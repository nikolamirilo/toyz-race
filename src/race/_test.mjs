// node src/race/_test.mjs [--real]   — race module tests. Default: mocks; --real: real ../cars (+ ../tracks if present).
import * as THREE from 'three';
import { RaceCore } from './race-core.js';
import { ITEMS, ITEM_TUNING, pickItemFor } from './items.js';
import * as mocks from './_mocks.mjs';

const DT = 1 / 60;
let failures = 0, checks = 0;
function ok(cond, msg) {
  checks++;
  if (!cond) { failures++; console.error('  FAIL: ' + msg); }
  return !!cond;
}
function section(name) { console.log('\n# ' + name); }

let deps = mocks.deps;
let makeTrack = () => mocks.makeMockTrack();
let label = 'mocks';
if (process.argv.includes('--real')) {
  const cars = await import('../cars/index.js');
  deps = { Car: cars.Car, AIDriver: cars.AIDriver, CARS: cars.CARS, resolveCarCollisions: cars.resolveCarCollisions };
  label = 'real cars';
  try {
    const tr = await import('../tracks/index.js');
    const ids = tr.TRACKS.map((t) => t.id);
    const want = process.argv.find((a) => a.startsWith('--track='));
    const id = want ? want.slice(8) : ids[0];
    makeTrack = () => tr.buildTrack(id);
    label += ' + real track ' + id;
  } catch (e) {
    console.log('(real tracks unavailable: ' + e.message.split('\n')[0] + ' — using mock track)');
  }
}
console.log('Running race tests with ' + label);

const fin = (n) => typeof n === 'number' && Number.isFinite(n);
function checkFinite(race, where) {
  for (const car of race.cars) {
    if (!(fin(car.pos.x) && fin(car.pos.y) && fin(car.pos.z) && fin(car.heading) && fin(car.speed) && fin(car.vel.x) && fin(car.vel.z))) {
      ok(false, 'NaN in car state ' + car.name + ' ' + where); return false;
    }
    const i = race.info(car);
    if (!(fin(i.progress) && fin(i.lapTime) && fin(i.position))) { ok(false, 'NaN in info ' + where); return false; }
  }
  for (const ps of [race.fx, race.smoke]) {
    for (let k = 0; k < ps.count * 3; k++) if (!fin(ps._pos[k])) { ok(false, 'NaN in particles ' + where); return false; }
    for (let k = 0; k < ps.count; k++) if (!fin(ps._siz[k])) { ok(false, 'NaN particle size ' + where); return false; }
  }
  if (!fin(race.time)) { ok(false, 'NaN time'); return false; }
  return true;
}
function checkPerm(race) {
  const n = race.cars.length, seen = new Array(n + 1).fill(0);
  for (const car of race.cars) seen[race.info(car).position]++;
  for (let p = 1; p <= n; p++) if (seen[p] !== 1) return false;
  return true;
}
const noAI = () => ({ update() {}, wantsToFire: false });
function runCountdown(race) { let g = 0; while (race.state === 'countdown' && g++ < 400) race.update(DT, null); }

// ------------------------------------------------------------------ 1. full race
section('full 3-lap race, 7 opponents');
{
  const scene = new THREE.Scene();
  const track = makeTrack();
  scene.add(track.group);
  const race = new RaceCore({ scene, track, playerCarId: deps.CARS[2].id, playerName: 'Tester', laps: 3, opponents: 7, difficulty: 1, mode: 'race' }, deps);
  ok(race.cars.length === 8 && race.player === race.cars[0] && race.player.isPlayer, '8 cars, player first');
  ok(new Set(race.cars.map((c) => c.def.id)).size === 8, 'distinct car models');
  ok(new Set(race.cars.map((c) => c.name)).size === 8, 'distinct driver names');
  ok(race.state === 'countdown' && race.cars.every((c) => c.frozen), 'starts in countdown, frozen');
  ok(race.cars.every((c) => race.info(c).progress <= 0 && race.info(c).progress > -0.2), 'grid progress slightly negative');
  ok(race.cars.every((c) => scene.children.includes(c.mesh)), 'car meshes in scene');

  const ev = [];
  const laps = new Map(), finals = new Map(), finishes = [];
  let pickups = 0, fires = 0, hits = 0, boosts = 0, crashes = 0, raceOver = null, blocks = 0;
  race.on('countdown', (n) => ev.push('c' + n));
  race.on('go', () => ev.push('go'));
  race.on('lap', (car, n, t, best) => {
    const a = laps.get(car) || []; a.push(n); laps.set(car, a);
    ok(fin(t) && t > 0, 'lap time positive'); ok(typeof best === 'boolean', 'isBest bool');
  });
  race.on('finalLap', (car) => finals.set(car, (finals.get(car) || 0) + 1));
  race.on('finish', (car, pos) => finishes.push([car, pos]));
  race.on('pickup', (car, item) => { pickups++; ok(ITEMS.includes(item), 'pickup item valid'); });
  const used = {};
  race.on('fire', (car, item) => { fires++; used[item.id] = (used[item.id] || 0) + 1; ok(ITEMS.includes(item), 'fire item valid'); });
  race.on('hit', (car, id) => { if (id === 'shockcloud' || id === 'zaptow') ok(race.states[race.cars.indexOf(car)].slowTime <= 2.5 + 1e-6, 'slow-down ≤ 2.5 s'); });
  race.on('hit', (car, id) => { hits++; ok(typeof id === 'string', 'hit id'); ok(car.spinTime <= 1.2 + 1e-6, 'spin ≤ 1.2 s (got ' + car.spinTime + ')'); });
  race.on('block', () => blocks++);
  race.on('boost', () => boosts++);
  race.on('crash', (car, s) => { crashes++; ok(fin(s), 'crash strength'); });
  race.on('raceOver', (s) => { raceOver = s; });

  const pilot = new deps.AIDriver(race.player, { skill: 0.95 });
  const pc = { throttle: 0, steer: 0, handbrake: false, fire: false };
  let frames = 0, permOk = true, finiteOk = true, goTime = -1, minActive = 99, sawRespawn = false, wasLow = false;
  let fireTick = 0, wantsCleared = true, maxPart = 0;
  const spots = race.pickups.spots.length; const gone = {};
  ok(spots === track.pickupSpots.length && spots > 0, 'crates created at pickupSpots');
  while (frames < 60 * 600) {
    if (race.state === 'racing') {
      pilot.update(DT, track, race.cars);
      pc.throttle = race.player.controls.throttle; pc.steer = race.player.controls.steer; pc.handbrake = race.player.controls.handbrake;
      fireTick += DT; pc.fire = fireTick % 1 < 0.1; // tap fire every second
    }
    race.update(DT, pc);
    frames++;
    if (race.state !== 'countdown' && goTime < 0) goTime = frames * DT;
    if (permOk && !checkPerm(race)) { permOk = false; }
    if (finiteOk && frames % 7 === 0) finiteOk = checkFinite(race, 'frame ' + frames);
    const act = race.pickups.activeCount;
    if (act < minActive) minActive = act;
    if (act < spots) wasLow = true;
    race.pickups.spots.forEach((sp, k) => { if (sp.timer > 0) { gone[k] = true; ok(sp.timer <= 6, 'respawn ≤ 6 s'); } else if (gone[k]) sawRespawn = true; });
    for (let i = 1; i < race.states.length; i++) if (race.states[i].ai.wantsToFire) wantsCleared = false;
    maxPart = Math.max(maxPart, race.fx.count + race.smoke.count);
    if (race.cars.every((c) => race.info(c).finished)) break;
  }
  for (let i = 0; i < 150; i++) race.update(DT, pc); // let the raceOver delay elapse
  ok(ev.join(',') === 'c3,c2,c1,go', 'countdown order: ' + ev.join(','));
  ok(Math.abs(goTime - 3.2) < 0.06, 'GO at ~3.2 s (got ' + goTime.toFixed(2) + ')');
  ok(permOk, 'positions are a permutation of 1..N every frame');
  ok(finiteOk, 'no NaN');
  ok(race.cars.every((c) => race.info(c).finished), 'all cars finished (frames=' + frames + ')');
  ok(race.state === 'finished', 'state finished');
  for (const car of race.cars) {
    const a = laps.get(car) || [];
    ok(a.length === 3 && a.join() === '1,2,3', 'lap events exactly 1,2,3 for ' + car.name + ' (got ' + a.join() + ')');
    ok(finals.get(car) === 1, 'finalLap once for ' + car.name);
    const i = race.info(car);
    ok(i.lap === 3 && i.laps === 3 && fin(i.bestLap) && fin(i.lastLap) && fin(i.finishTime), 'info after finish');
  }
  ok(finishes.length === 8 && finishes.every(([, p], i) => p === i + 1), 'finish positions 1..8 in order');
  ok(raceOver && raceOver.length === 8, 'raceOver fired with standings');
  if (raceOver) {
    ok(raceOver.every((s, i) => s.position === i + 1 && s.finished && fin(s.finishTime) && s.name && typeof s.carName === 'string'), 'raceOver standings well-formed');
    ok(raceOver.every((s, i) => i === 0 || s.finishTime >= raceOver[i - 1].finishTime), 'raceOver times monotonic');
    ok(raceOver.filter((s) => s.isPlayer).length === 1, 'one player in standings');
    console.log('  raceOver: ' + raceOver.map((s) => `${s.position}.${s.name}${s.estimated ? '~' : ''} ${s.finishTime.toFixed(1)}`).join(' | '));
  }
  const st = race.standings();
  ok(st.length === 8 && st[0].position === 1, 'standings()');
  ok(pickups > 5, 'pickups collected (' + pickups + ')');
  ok(fires > 5, 'items fired (' + fires + ')');
  ok(minActive < spots && sawRespawn, 'crates collected and respawned (min active ' + minActive + '/' + spots + ')');
  ok(wantsCleared, 'ai.wantsToFire cleared every frame');
  console.log('  items used: ' + ITEMS.map((i) => i.id + '=' + (used[i.id] || 0)).join(' '));
  ok(race.cars.every((c) => true) && race.states.every((st) => st.scaleVis >= 0.59 && st.scaleVis <= 1), 'car scale stays within [0.6, 1]');
  console.log(`  time=${race.time.toFixed(1)}s pickups=${pickups} fires=${fires} hits=${hits} blocks=${blocks} boosts=${boosts} crashes=${crashes} maxParticles=${maxPart}`);
  race.dispose();
  ok(scene.children.length === 1 && scene.children[0] === track.group, 'dispose leaves only the track group (' + scene.children.length + ')');
  race.update(DT, pc); // must be harmless after dispose
}

// ------------------------------------------------------------------ 2. lap anti-cheat + wrong way (scripted mock car)
section('lap counting anti-cheat / wrong way');
{
  const scene = new THREE.Scene();
  const track = mocks.makeMockTrack();
  const race = new RaceCore({ scene, track, playerCarId: 'mock0', laps: 2, opponents: 0, mode: 'race' }, mocks.deps);
  let lapEv = 0, finalEv = 0, finishEv = 0;
  let over = null; race.on('raceOver', (s) => (over = s));
  race.on('lap', () => lapEv++); race.on('finalLap', () => finalEv++); race.on('finish', () => finishEv++);
  runCountdown(race);
  const car = race.player;
  const run = (speed, secs, faceBackward = false) => { car.script = { speed, faceBackward }; for (let i = 0; i < secs * 60; i++) race.update(DT, null); };
  run(30, 1); // forward across the line for the first time (start of lap 1)
  ok(lapEv === 0 && race.info(car).progress > 0, 'crossing the line at the start is not a lap');
  ok(!race.info(car).wrongWay, 'not wrong way driving forward');
  run(-30, 0.9, true);
  ok(!race.info(car).wrongWay, 'wrong way not flagged before 1 s');
  run(-30, 2.1, true); // back over the line, heading backwards
  ok(race.info(car).wrongWay, 'wrong way flagged after > 1 s');
  ok(lapEv === 0, 'backwards over the line → no lap');
  ok(race.states[0].progress < 0, 'progress went negative');
  const mono = race.info(car).progress;
  run(30, 4); // forwards over the line again
  ok(!race.info(car).wrongWay, 'wrong way cleared');
  ok(lapEv === 0 && race.info(car).lap === 1, 're-crossing after reversing → still lap 1');
  ok(race.info(car).progress >= mono, 'info.progress monotonic');
  run(-30, track.length / 30 + 2, true); // a whole lap backwards
  ok(lapEv === 0, 'full backwards lap → no lap');
  run(60, (track.length * 2.2) / 60); // undo + one real lap
  ok(lapEv === 1 && finalEv === 1 && race.info(car).lap === 2, 'one genuine lap counted (lap events ' + lapEv + ')');
  // teleport half a track ahead: must not grant a lap quickly
  const before = race.states[0].progress;
  car.script = null; car.frozen = true;
  car.trackT = (car.trackT + 0.45) % 1; car.script = { speed: 0 };
  car.frozen = false;
  for (let i = 0; i < 30; i++) race.update(DT, null);
  ok(Math.abs(race.states[0].progress - before) < 0.01, 'absurd per-frame delta ignored');
  car.trackT = (car.trackT + 0.55) % 1; // back
  run(60, track.length / 60 + 1);
  ok(lapEv === 2 && finishEv === 1 && race.state === 'finished', 'race finishes after 2 genuine laps');
  ok(race.states[0].ai, 'player on autopilot after finish');
  car.script = null;
  for (let i = 0; i < 150; i++) race.update(DT, { throttle: 1, steer: 1, fire: true });
  ok(over && over.length === 1 && over[0].isPlayer && over[0].finished, 'raceOver shortly after player finish');
  race.dispose();
  ok(scene.children.length === 0, 'dispose → empty scene');
}

// ------------------------------------------------------------------ 3. items
section('items');
function duel(gap, opts = {}) {
  // player at t0, opponent `gap` units ahead (negative = behind), optional third car far away
  const track = mocks.makeMockTrack({ pickups: false });
  const t0 = 0.1, L = track.length;
  const slot = (t, lat = 0) => { const s = track.sample(t); return { pos: track.at(t, lat), heading: Math.atan2(s.tangent.x, s.tangent.z) }; };
  track.startGrid = [slot(t0 + gap / L, opts.lat || 0), slot(t0 + 0.3), slot(t0)];
  const scene = new THREE.Scene();
  const race = new RaceCore({ scene, track, playerCarId: 'mock0', laps: 3, opponents: 2, mode: 'race', playerGridSlot: 2 }, mocks.deps);
  for (let i = 1; i < race.states.length; i++) race.states[i].ai = noAI();
  const log = [];
  for (const e of ['fire', 'hit', 'block', 'boost', 'pickup', 'tow', 'land']) race.on(e, (car, x) => log.push([e, car, x && x.id ? x.id : x]));
  runCountdown(race);
  return { race, track, scene, log, player: race.cars[0], target: race.cars[1], far: race.cars[2] };
}
const count = (log, e, car, id) => log.filter((l) => l[0] === e && (!car || l[1] === car) && (!id || l[2] === id)).length;
const sim = (race, secs, pc = null) => { for (let i = 0; i < secs * 60; i++) { race.update(DT, pc); } };

ok(ITEMS.length === 9 && ITEMS.every((i) => i.id && i.name && i.icon && i.description) && new Set(ITEMS.map((i) => i.id)).size === 9, 'ITEMS: 9 well-formed entries');
ok(['zaptow', 'shockcloud', 'pogo'].every((id) => ITEMS.some((i) => i.id === id) && ITEM_TUNING[id]), 'new items present: zaptow, shockcloud, pogo');

{ // rocket + edge-triggered fire
  const d = duel(18);
  ok(d.race.giveItem(d.player, 'rocket') && d.race.info(d.player).item.id === 'rocket', 'giveItem / info.item');
  d.race.update(DT, { fire: true });
  ok(count(d.log, 'fire', d.player, 'rocket') === 1 && d.race.info(d.player).item === null, 'rocket fired on press');
  ok(d.race.weapons.rockets.length === 1, 'rocket entity exists');
  d.race.giveItem(d.player, 'turbo');
  let maxSpin = 0; const launches0 = d.target.launches;
  for (let i = 0; i < 120; i++) { d.race.update(DT, { fire: true }); maxSpin = Math.max(maxSpin, d.target.spinTime); }
  ok(count(d.log, 'fire') === 1 && d.race.info(d.player).item.id === 'turbo', 'holding fire does not auto-fire the next item');
  ok(count(d.log, 'hit', d.target, 'rocket') === 1, 'rocket hit the car ahead');
  ok(maxSpin > 0.5 && maxSpin <= 1.2 && d.target.launches === launches0 + 1 && d.target.impulses > 0, 'rocket: spin ≤1.2 s + launch + impulse');
  ok(count(d.log, 'hit', d.far) === 0 && count(d.log, 'hit', d.player) === 0, 'rocket hit nobody else');
  ok(d.race.weapons.rockets.length === 0, 'rocket removed');
  d.race.update(DT, { fire: false }); d.race.update(DT, { fire: true });
  ok(count(d.log, 'fire', d.player, 'turbo') === 1 && d.player.boostTime > 1.5 && count(d.log, 'boost', d.player) === 1, 'turbo: boostTime set + boost event once');
  sim(d.race, 0.5, { throttle: 1 });
  ok(d.race.fx.count > 0, 'boost flames emitted');
  checkFinite(d.race, 'rocket duel'); d.race.dispose(); ok(d.scene.children.length === 0, 'dispose clean (rocket)');
}
{ // rocket with nobody ahead flies down the road and expires / never hits owner
  const d = duel(-40);
  d.race.giveItem(d.player, 'rocket'); d.race.useItem(d.player);
  sim(d.race, 5);
  ok(d.race.weapons.rockets.length === 0 && count(d.log, 'hit', d.player) === 0, 'untargeted rocket expires harmlessly');
  d.race.dispose();
}
{ // goo
  const d = duel(-14);
  d.race.giveItem(d.player, 'glue'); d.race.useItem(d.player);
  ok(d.race.weapons.puddles.length === 1, 'puddle dropped');
  sim(d.race, 0.3);
  ok(count(d.log, 'hit') === 0, 'owner not hit by own fresh puddle');
  d.target.script = { speed: 25 }; d.target.onGround = true;
  d.target.vel.set(0, 0, 0);
  sim(d.race, 1.2);
  ok(count(d.log, 'hit', d.target, 'glue') === 1 && d.target.impulses > 0, 'goo: car behind drove in and got hit + slowed');
  sim(d.race, 1);
  ok(d.race.weapons.puddles.length === 0, 'puddle consumed');
  // expiry
  d.race.giveItem(d.far, 'glue'); d.race.useItem(d.far);
  sim(d.race, 19);
  ok(d.race.weapons.puddles.length === 0, 'puddle expires');
  d.race.dispose(); ok(d.scene.children.length === 0, 'dispose clean (goo)');
}
{ // pulse
  const d = duel(6);
  d.race.giveItem(d.player, 'pulse'); d.race.useItem(d.player);
  let maxSpin = 0;
  for (let i = 0; i < 60; i++) { d.race.update(DT, null); maxSpin = Math.max(maxSpin, d.target.spinTime); }
  ok(count(d.log, 'hit', d.target, 'pulse') === 1 && maxSpin > 0.4 && maxSpin <= 1.2, 'pulse hits car within radius');
  ok(count(d.log, 'hit', d.far) === 0 && count(d.log, 'hit', d.player) === 0, 'pulse spares far car and owner');
  ok(d.race.weapons.pulses.length === 0, 'pulse ring removed');
  d.race.dispose(); ok(d.scene.children.length === 0, 'dispose clean (pulse)');
}
{ // marble
  const d = duel(25, { lat: 3 });
  d.race.giveItem(d.player, 'marble'); d.race.useItem(d.player);
  ok(d.race.weapons.marbles.length === 1, 'marble entity');
  let maxSpin = 0;
  for (let i = 0; i < 240; i++) { d.race.update(DT, null); maxSpin = Math.max(maxSpin, d.target.spinTime); }
  ok(count(d.log, 'hit', d.target, 'marble') === 1 && maxSpin > 0.4 && maxSpin <= 1.2, 'marble hits car ahead');
  d.race.dispose();
  // marble with no targets rolls along bouncing, stays on the road, expires
  const e = duel(-40);
  let bounces = 0; e.race.on('bounce', () => bounces++);
  e.race.giveItem(e.player, 'marble'); e.race.useItem(e.player);
  const m = e.race.weapons.marbles[0]; let onRoad = true, t0 = m.t, adv = 0, lastT = m.t;
  for (let i = 0; i < 60 * 3; i++) {
    e.race.update(DT, null);
    if (e.race.weapons.marbles.length) {
      const pr = e.track.project(m.pos); if (Math.abs(pr.lateral) > pr.halfWidth + 0.01) onRoad = false;
      let dd = m.t - lastT; if (dd < -0.5) dd += 1; adv += dd; lastT = m.t;
    }
  }
  ok(onRoad && bounces > 0 && adv > 0.1, `marble bounces along the road (bounces=${bounces}, advanced ${(adv * e.track.length).toFixed(0)}u)`);
  sim(e.race, 6);
  ok(e.race.weapons.marbles.length === 0, 'marble expires');
  e.race.dispose(); ok(e.scene.children.length === 0, 'dispose clean (marble)');
}
{ // shield
  const d = duel(18);
  d.race.giveItem(d.target, 'shield'); d.race.useItem(d.target);
  ok(d.race.info(d.target).shield, 'shield active');
  d.race.giveItem(d.player, 'rocket'); d.race.useItem(d.player);
  let maxSpin = 0;
  for (let i = 0; i < 120; i++) { d.race.update(DT, null); maxSpin = Math.max(maxSpin, d.target.spinTime); }
  ok(count(d.log, 'block', d.target, 'rocket') === 1 && count(d.log, 'hit') === 0 && maxSpin === 0, 'shield blocks one hit');
  ok(!d.race.info(d.target).shield, 'shield consumed');
  d.race.giveItem(d.player, 'rocket'); d.race.useItem(d.player);
  sim(d.race, 2);
  ok(count(d.log, 'hit', d.target, 'rocket') === 1, 'second hit lands');
  d.race.giveItem(d.far, 'shield'); d.race.useItem(d.far);
  sim(d.race, 6.5);
  ok(!d.race.info(d.far).shield, 'shield expires after a few seconds');
  d.race.dispose(); ok(d.scene.children.length === 0, 'dispose clean (shield)');
}
{ // tow beam (Magna Tug)
  const Z = ITEM_TUNING.zaptow;
  const d = duel(20);
  const st = d.race.states[0], tst = d.race.states[1], fst = d.race.states[2];
  d.race.giveItem(d.player, 'zaptow'); d.race.useItem(d.player);
  ok(count(d.log, 'fire', d.player, 'zaptow') === 1, 'tow: fire event');
  ok(st.towTarget === tst && st.towTime > 2 && st.towTime <= 2.5, 'tow: latched onto the nearest car ahead for ≤ 2.5 s');
  ok(count(d.log, 'tow', d.player) === 1 && count(d.log, 'hit', d.target, 'zaptow') === 1 && count(d.log, 'hit', d.far) === 0, "tow: 'tow' + 'hit' on the target only");
  ok(tst.slowTime > 2 && Math.abs(tst.slowFactor - Z.slow) < 1e-9 && d.target.spinTime === 0 && tst.shrinkTime === 0, 'tow: target dragged (speed cap), no spin, no shrink');
  ok(st.towMesh && st.towMesh.visible && st.towMesh.parent === d.race.root, 'tow: beam mesh in the scene');
  let pulled = 0, beamOk = true;
  for (let i = 0; i < 60; i++) {
    d.race.update(DT, null);
    pulled = Math.max(pulled, d.player.speed);
    if (!(st.towMesh.visible && Math.abs(st.towMesh.scale.z - d.player.pos.distanceTo(d.target.pos)) < 0.5)) beamOk = false;
  }
  ok(pulled > 0.2, 'tow: the car is pulled toward the target without throttle (speed ' + pulled.toFixed(2) + ')');
  ok(beamOk, 'tow: beam spans the two cars');
  ok(d.race.info(d.player).towing && d.race.info(d.target).slowed, 'tow: info() extras');
  // the dragged car can not exceed its cap while latched
  tst.ai = new mocks.AIDriver(d.target, { skill: 1 });
  let vmax = 0;
  for (let i = 0; i < 80; i++) { d.race.update(DT, null); vmax = Math.max(vmax, Math.hypot(d.target.vel.x, d.target.vel.z)); }
  ok(vmax <= d.target.def.topSpeed * Z.slow + 0.6 && vmax > 5, 'tow: target capped at ' + Z.slow + ' x top speed (' + vmax.toFixed(1) + ')');
  sim(d.race, 1.5);
  ok(st.towTarget === null && !st.towMesh.visible && tst.slowTime <= 0, 'tow: beam and drag expire');
  sim(d.race, 1.5);
  ok(d.target.speed > d.target.def.topSpeed * 0.95, 'tow: target back to normal speed afterwards (' + d.target.speed.toFixed(1) + ')');
  checkFinite(d.race, 'tow'); d.race.dispose(); ok(d.scene.children.length === 0, 'dispose clean (tow)');

  // shield: pops, no latch
  const e = duel(20);
  e.race.giveItem(e.target, 'shield'); e.race.useItem(e.target);
  e.race.giveItem(e.player, 'zaptow'); e.race.useItem(e.player);
  ok(count(e.log, 'block', e.target, 'zaptow') === 1 && e.race.states[0].towTarget === null && e.race.states[1].slowTime <= 0 && !e.race.info(e.target).shield, 'tow: shield blocks the latch and pops');
  e.race.dispose();

  // nobody in reach: fizzles into a small kick; beam snaps when the target gets away
  const f = duel(-40);
  f.race.giveItem(f.player, 'zaptow'); f.race.useItem(f.player);
  ok(f.race.states[0].towTarget === null && f.player.boostTime > 0 && f.player.boostTime <= Z.fizzleBoost + 1e-9 && count(f.log, 'hit') === 0, 'tow: no target → small boost, nobody hit');
  f.race.dispose();
  const g = duel(30);
  g.race.giveItem(g.player, 'zaptow'); g.race.useItem(g.player);
  ok(g.race.states[0].towTarget === g.race.states[1], 'tow: latched at 30 units');
  g.target.pos.copy(g.track.at(0.6)); g.target.trackT = 0.6;
  sim(g.race, 0.2);
  ok(g.race.states[0].towTarget === null, 'tow: beam snaps when the target is out of reach');
  g.race.dispose(); ok(g.scene.children.length === 0, 'dispose clean (tow 2)');
}
{ // storm (Grumble Cloud)
  const Z = ITEM_TUNING.shockcloud;
  const d = duel(18); // standings: far, target, player
  const S = d.race.states;
  S[1].ai = new mocks.AIDriver(d.target, { skill: 1 });
  sim(d.race, 1.2);
  ok(d.race.info(d.player).position === 3 && d.race.info(d.far).position === 1, 'storm: player is last');
  d.race.giveItem(d.far, 'shield'); d.race.useItem(d.far);
  d.race.giveItem(d.player, 'shockcloud'); d.race.useItem(d.player);
  ok(count(d.log, 'hit', d.target, 'shockcloud') === 1 && count(d.log, 'hit', d.player) === 0, 'storm: car ahead zapped, owner spared');
  ok(count(d.log, 'block', d.far, 'shockcloud') === 1 && S[2].slowTime <= 0 && S[2].shrinkTime <= 0 && !d.race.info(d.far).shield, 'storm: shield blocks it and pops');
  ok(S[1].slowTime > 2 && S[1].slowTime <= 2.5 && S[1].slowFactor === Z.slow && S[1].shrinkTime > 2, 'storm: slow ≤ 2.5 s + shrink');
  let vmax = 0, spun = false, minScale = 1, cloud = false;
  for (let i = 0; i < 120; i++) {
    d.race.update(DT, null);
    if (i > 30) vmax = Math.max(vmax, Math.hypot(d.target.vel.x, d.target.vel.z));
    spun = spun || d.target.spinTime > 0;
    minScale = Math.min(minScale, d.target.mesh.scale.x);
    cloud = cloud || !!(S[1].cloudMesh && S[1].cloudMesh.visible && S[1].cloudMesh.parent === d.race.root);
  }
  ok(vmax <= d.target.def.topSpeed * Z.slow + 0.6 && vmax > 5, `storm: top speed cut to ${Z.slow} x (${vmax.toFixed(1)} of ${d.target.def.topSpeed})`);
  ok(!spun && d.target.launches === 0, 'storm: no spin, no launch (driver keeps control)');
  ok(Math.abs(minScale - Z.scale) < 0.02 && d.target.mesh.scale.y === d.target.mesh.scale.x && cloud, 'storm: car mesh shrinks to ' + Z.scale + ' with a cloud above');
  ok(d.far.mesh.scale.x === 1 && d.player.mesh.scale.x === 1, 'storm: others keep their size');
  ok(d.race.info(d.target).shrunk && d.race.info(d.target).slowed, 'storm: info() extras');
  // chain protection: a second storm right away does nothing to the same car
  d.race.giveItem(d.player, 'shockcloud'); d.race.useItem(d.player);
  ok(count(d.log, 'hit', d.target, 'shockcloud') === 1, 'storm: no back-to-back slow-downs');
  sim(d.race, 1.2);
  ok(S[1].slowTime <= 0 && S[1].shrinkTime <= 0 && d.target.mesh.scale.x === 1 && !S[1].cloudMesh.visible, 'storm: expiry restores scale, cloud gone');
  sim(d.race, 1.5);
  ok(d.target.speed > d.target.def.topSpeed * 0.95, 'storm: expiry restores normal speed (' + d.target.speed.toFixed(1) + ')');
  // the leader has nobody to zap
  const n = count(d.log, 'hit');
  d.race.giveItem(d.far, 'shockcloud'); d.race.useItem(d.far);
  ok(count(d.log, 'hit') === n && count(d.log, 'fire', d.far, 'shockcloud') === 1, 'storm: fired by the leader hits nobody');
  checkFinite(d.race, 'storm'); d.race.dispose(); ok(d.scene.children.length === 0, 'dispose clean (storm)');
  ok(d.target.mesh.scale.x === 1, 'dispose leaves car scale at 1');
  // dispose while shrunk
  const e = duel(18);
  e.race.giveItem(e.player, 'shockcloud'); e.race.useItem(e.player); sim(e.race, 0.5);
  ok(e.target.mesh.scale.x < 0.9, 'storm: shrunk mid-effect');
  e.race.dispose(); ok(e.scene.children.length === 0 && e.target.mesh.scale.x === 1, 'dispose clean while shrunk (scale reset)');
}
{ // pogo
  const P = ITEM_TUNING.pogo;
  const d = duel(-40);
  d.race.giveItem(d.player, 'pogo'); d.race.useItem(d.player);
  ok(count(d.log, 'fire', d.player, 'pogo') === 1 && d.player.launches === 1 && d.player.impulses === 1 && d.player.onGround === false, 'pogo: launch + forward kick');
  let maxY = 0, air = 0, ring = false, x0 = d.player.pos.clone();
  for (let i = 0; i < 90; i++) {
    d.race.update(DT, null);
    maxY = Math.max(maxY, d.player.pos.y);
    if (!d.player.onGround) air += DT;
    ring = ring || d.race.weapons.rings.length > 0;
  }
  ok(maxY > 2.5 && air > 0.7 && air < 1.2, `pogo: airborne ~1 s (${air.toFixed(2)} s, peak ${maxY.toFixed(1)})`);
  ok(d.player.pos.distanceTo(x0) > 1.5, 'pogo: carried forward');
  ok(count(d.log, 'land', d.player) === 1 && ring, 'pogo: landing ring + land event');
  ok(count(d.log, 'hit') === 0 && d.player.spinTime === 0, 'pogo: nobody hurt when landing alone');
  sim(d.race, 0.6);
  ok(d.race.weapons.rings.length === 0 && d.race.states[0].pogo === 0, 'pogo: ring removed');
  d.race.dispose(); ok(d.scene.children.length === 0, 'dispose clean (pogo)');

  // landing next to a car shoves it (no spin); a shield blocks the shove
  for (const shielded of [false, true]) {
    const e = duel(5);
    if (shielded) { e.race.giveItem(e.target, 'shield'); e.race.useItem(e.target); }
    e.race.giveItem(e.player, 'pogo'); e.race.useItem(e.player);
    let spin = 0;
    for (let i = 0; i < 90; i++) { e.race.update(DT, null); spin = Math.max(spin, e.target.spinTime); }
    if (!shielded) ok(count(e.log, 'hit', e.target, 'pogo') === 1 && e.target.impulses === 1 && e.target.launches === 1 && spin === 0 && count(e.log, 'hit', e.far) === 0, 'pogo: landing shock nudges the car nearby, no spin');
    else ok(count(e.log, 'block', e.target, 'pogo') === 1 && count(e.log, 'hit') === 0 && e.target.impulses === 0, 'pogo: shield blocks the landing shock');
    if (shielded) { // dispose mid-flight / with a live ring
      e.race.giveItem(e.player, 'pogo'); e.race.useItem(e.player); sim(e.race, 0.3);
    }
    e.race.dispose(); ok(e.scene.children.length === 0, 'dispose clean (pogo nudge)');
  }

  // hop over a goo puddle (control: without the hop the same drive ends in the goo)
  for (const hop of [false, true]) {
    const e = duel(-40);
    const h = e.player.heading, p = e.player.pos;
    const pu = e.race.weapons._spawnPuddle(++e.race._nextId, p.x + Math.sin(h) * 7, 0, p.z + Math.cos(h) * 7);
    pu.owner = e.race.states[2]; pu.age = 5;
    if (hop) { e.race.giveItem(e.player, 'pogo'); e.race.useItem(e.player); }
    sim(e.race, 0.9, { throttle: 1 });
    ok(count(e.log, 'hit', e.player, 'glue') === (hop ? 0 : 1), hop ? 'pogo: flies over a goo puddle' : '(control) driving through the puddle spins the car');
    e.race.dispose();
  }
}
{ // AI uses the new items sensibly
  const stub = (wants) => ({ update() { this.wantsToFire = wants; }, wantsToFire: wants });
  // tow: fires when somebody is in reach ahead
  const d = duel(-20); // target is 20 behind the player; standings: far, player, target
  d.race.states[1].ai = stub(false);
  d.race.giveItem(d.target, 'zaptow');
  sim(d.race, 1.2);
  ok(count(d.log, 'fire', d.target, 'zaptow') === 1 && count(d.log, 'tow', d.target) === 1 && count(d.log, 'hit', d.player, 'zaptow') === 1, 'AI: tow beam used on the car in reach');
  d.race.dispose();
  // tow: held while nobody is in reach
  const d2 = duel(-80);
  d2.race.states[1].ai = stub(true);
  d2.race.giveItem(d2.target, 'zaptow');
  sim(d2.race, 5);
  ok(count(d2.log, 'fire', d2.target) === 0, 'AI: tow beam held while nobody is in reach');
  d2.race.dispose();
  // storm: used from the back, held by the leader
  const e = duel(-20);
  e.race.states[1].ai = stub(true); e.race.states[2].ai = stub(true);
  e.race.giveItem(e.target, 'shockcloud'); e.race.giveItem(e.far, 'shockcloud');
  sim(e.race, 4);
  ok(count(e.log, 'fire', e.target, 'shockcloud') === 1 && count(e.log, 'hit', e.player, 'shockcloud') === 1 && count(e.log, 'hit', e.far, 'shockcloud') === 1, 'AI: storm used by the back marker on everybody ahead');
  ok(count(e.log, 'fire', e.far) === 0, 'AI: the leader keeps the storm in its pocket');
  e.race.dispose();
  // pogo: used while driving straight at speed
  const f = duel(-20);
  f.race.states[1].ai = new mocks.AIDriver(f.target, { skill: 0.2 });
  f.race.states[1].ai.lane = 0;
  f.race.giveItem(f.target, 'pogo');
  let fired = -1, okF = true;
  for (let i = 0; i < 60 * 16 && fired < 0; i++) { f.race.update(DT, null); if (count(f.log, 'fire', f.target, 'pogo')) fired = i * DT; if (i % 9 === 0 && okF) okF = checkFinite(f.race, 'ai pogo'); }
  ok(fired >= 0 && f.target.launches >= 1, 'AI: pogo used (after ' + fired.toFixed(1) + ' s)');
  sim(f.race, 1.5);
  ok(count(f.log, 'land', f.target) === 1 && okF, 'AI: pogo lands, no NaN');
  f.race.dispose(); ok(f.scene.children.length === 0, 'dispose clean (AI items)');
}
{ // car fx: smoke + sparks
  const d = duel(40);
  d.player.script = null;
  for (let i = 0; i < 90; i++) d.race.update(DT, { throttle: 1, steer: 1, handbrake: true });
  ok(d.race.smoke.count > 0, 'tyre smoke while drifting');
  let crash = 0; d.race.on('crash', () => crash++);
  for (let i = 0; i < 400; i++) d.race.update(DT, { throttle: 1, steer: 0 }); // straight into the wall
  ok(crash > 0, 'crash event on wall hit');
  checkFinite(d.race, 'fx'); d.race.dispose();
}
{ // weighting
  let n = 0; const rnd = () => ((n = (n * 1664525 + 1013904223) >>> 0) / 4294967296);
  const tally = (pos) => { const c = {}; for (let i = 0; i < 20000; i++) { const it = pickItemFor(pos, 8, rnd); c[it.id] = (c[it.id] || 0) + 1; } return c; };
  const lead = tally(1), last = tally(8);
  ok(lead.shield > last.shield * 2 && lead.glue > last.glue * 2, 'leaders get more defensive items');
  ok(last.turbo > lead.turbo * 2 && last.rocket > lead.rocket * 2, 'back markers get more turbo / rockets');
  ok(ITEMS.every((i) => lead[i.id] > 0 && last[i.id] > 0), 'every item obtainable everywhere');
  ok(lead.shockcloud < 20000 * 0.015 && last.shockcloud > lead.shockcloud * 8, `storm is rare at the front (${lead.shockcloud} vs ${last.shockcloud} of 20000)`);
  ok(last.zaptow > lead.zaptow * 2 && lead.pogo > 1000 && last.pogo > 800, 'tow beam favours the pack, pogo everywhere');
  const pct = (c) => ITEMS.map((i) => i.id + ' ' + ((c[i.id] / 200) | 0) + '%').join(', ');
  console.log('  odds 1st of 8: ' + pct(lead) + '\n  odds 4th of 8: ' + pct(tally(4)) + '\n  odds 8th of 8: ' + pct(last));
}

// ------------------------------------------------------------------ 3b. new items with the configured cars / track
section('tow / storm / pogo with ' + label);
{
  const scene = new THREE.Scene();
  const track = makeTrack();
  scene.add(track.group);
  const race = new RaceCore({ scene, track, playerCarId: deps.CARS[1].id, laps: 3, opponents: 3, difficulty: 1, mode: 'race' }, deps);
  const S = race.states, pst = S[0];
  if (race.pickups) race.pickups.spots.forEach((sp) => { sp.timer = 1e9; });
  const log = [];
  for (const e of ['fire', 'hit', 'block', 'tow', 'land']) race.on(e, (car, x) => log.push([e, car, x && x.id ? x.id : x]));
  const brains = S.map((st) => st.ai);
  for (let i = 1; i < S.length; i++) S[i].ai = noAI();
  runCountdown(race);
  const hsp = (car) => Math.hypot(car.vel.x, car.vel.z);
  const topOf = (car) => car.def.topSpeed;
  let okF = true;
  const step = (n, pc, each) => { for (let i = 0; i < n; i++) { race.update(DT, pc); if (each) each(i); if (okF && i % 5 === 0) okF = checkFinite(race, 'new items'); } };

  // --- tow from standstill, no throttle: the beam alone gets the car moving
  race.giveItem(race.player, 'zaptow'); race.useItem(race.player);
  const tg = pst.towTarget;
  ok(tg && tg !== pst && count(log, 'tow', race.player) === 1, 'tow: latched onto a car on the grid ahead');
  let vmax = 0;
  step(60, { throttle: 0, steer: 0 }, () => { vmax = Math.max(vmax, race.player.speed); });
  ok(vmax > 0.2, 'tow: pulled forward with zero throttle (peak ' + vmax.toFixed(2) + ' u/s)');
  step(120, { throttle: 0, steer: 0 });
  ok(!pst.towTarget && !(pst.towMesh && pst.towMesh.visible), 'tow: released after 2.5 s');

  // --- pogo on the real physics
  for (const st of S) { st.hitImmune = 0; st.slowImmune = 0; }
  race.giveItem(race.player, 'pogo'); race.useItem(race.player);
  let air = 0, peak = 0; const y0 = race.player.pos.y;
  step(100, { throttle: 1, steer: 0 }, () => { if (race.player.onGround === false) air += DT; peak = Math.max(peak, race.player.pos.y - y0); });
  ok(air > 0.6 && air < 1.4 && peak > 2, `pogo: ${air.toFixed(2)} s in the air, ${peak.toFixed(1)} units up`);
  ok(count(log, 'land', race.player) === 1, 'pogo: landed with a ring');

  // --- everybody drives; the last car calls the storm
  for (let i = 1; i < S.length; i++) S[i].ai = brains[i];
  const pilot = new deps.AIDriver(race.player, { skill: 0.9 });
  const drive = (n, each) => step(n, null, (i) => { /* controls for the next frame */ pilot.update(DT, track, race.cars); if (each) each(i); });
  pst.ai = pilot; // let the race call it like any other AI
  step(60 * 7, null);
  for (const st of S) { st.hitImmune = 0; st.slowImmune = 0; st.item = null; }
  const last = S.find((st) => st.position === S.length);
  const victims = S.filter((st) => st.position < last.position);
  const Z = ITEM_TUNING.shockcloud;
  const hits0 = count(log, 'hit', null, 'shockcloud');
  race.giveItem(last.car, 'shockcloud'); race.useItem(last.car);
  ok(count(log, 'hit', null, 'shockcloud') === hits0 + victims.length && victims.length === S.length - 1, 'storm: every car ahead of the last one is hit (' + victims.length + ')');
  let over = 0, spun = false, minScale = 1;
  step(138, null, (i) => {
    for (const st of victims) {
      if (i > 36 && hsp(st.car) > topOf(st.car) * Z.slow + 0.8) over = Math.max(over, hsp(st.car) / topOf(st.car));
      spun = spun || st.car.spinTime > 0;
      minScale = Math.min(minScale, st.car.mesh.scale.x);
    }
  });
  ok(over === 0, 'storm: shrunk cars stay under ' + Z.slow + ' x top speed' + (over ? ' (saw ' + over.toFixed(2) + ' x)' : ''));
  ok(!spun, 'storm: nobody spins — steering stays with the driver');
  ok(Math.abs(minScale - Z.scale) < 0.02 && last.car.mesh.scale.x === 1, 'storm: victims shrink, the caller does not');
  step(40, null);
  ok(victims.every((st) => st.car.mesh.scale.x === 1 && st.slowTime <= 0 && !(st.cloudMesh && st.cloudMesh.visible)), 'storm: expiry restores scale');
  let fast = 0;
  step(60 * 9, null, () => { for (const st of victims) fast = Math.max(fast, hsp(st.car) / topOf(st.car)); });
  ok(fast > Z.slow * 1.12, 'storm: expiry restores normal speed (' + fast.toFixed(2) + ' x top afterwards)');

  // --- tow at speed: the dragged car is capped, the beam follows
  for (const st of S) { st.hitImmune = 0; st.slowImmune = 0; st.item = null; }
  let shooter = null;
  for (let i = 0; i < 60 * 20 && !shooter; i++) {
    step(1, null);
    shooter = S.find((st) => { const t = race.weapons._towTarget(st); return t && !t.finished && !st.finished && Math.hypot(t.car.pos.x - st.car.pos.x, t.car.pos.z - st.car.pos.z) > 9; }) || null;
  }
  if (ok(!!shooter, 'tow: found two cars within reach of each other')) {
    for (const st of S) { st.hitImmune = 0; st.slowImmune = 0; }
    race.giveItem(shooter.car, 'zaptow'); race.useItem(shooter.car);
    const t2 = shooter.towTarget, ZT = ITEM_TUNING.zaptow;
    ok(!!t2 && t2.slowTime > 2, 'tow: latched at speed');
    let overT = 0, beam = true;
    if (t2) step(60, null, (i) => {
      if (i > 30 && t2.slowTime > 0 && hsp(t2.car) > topOf(t2.car) * ZT.slow + 0.8) overT = hsp(t2.car);
      if (shooter.towTarget && !(shooter.towMesh.visible || shooter.car.pos.distanceTo(t2.car.pos) < 0.3)) beam = false;
    });
    ok(overT === 0 && beam, 'tow: dragged car capped at ' + ZT.slow + ' x top, beam visible' + (overT ? ' (saw ' + overT.toFixed(1) + ')' : ''));
  }
  ok(okF, 'no NaN with the new items');
  race.dispose();
  ok(scene.children.length === 1 && scene.children[0] === track.group, 'dispose leaves only the track group');
}

// ------------------------------------------------------------------ 4. time trial
section('time trial');
{
  const scene = new THREE.Scene();
  const track = makeTrack();
  const race = new RaceCore({ scene, track, playerCarId: deps.CARS[0].id, laps: 1, opponents: 5, mode: 'timetrial' }, deps);
  ok(race.cars.length === 1, 'one car');
  ok(race.pickups === null, 'no pickups');
  let pk = 0, over = null; race.on('pickup', () => pk++); race.on('raceOver', (s) => (over = s));
  const pilot = new deps.AIDriver(race.player, { skill: 0.9 });
  let f = 0, okF = true;
  while (!over && f++ < 60 * 240) {
    if (race.state === 'racing') pilot.update(DT, track, race.cars);
    race.update(DT, { ...race.player.controls, fire: f % 30 === 0 });
    if (f % 11 === 0 && okF) okF = checkFinite(race, 'tt');
  }
  ok(over && over.length === 1 && over[0].position === 1 && fin(over[0].finishTime), 'time trial completes (t=' + (over ? over[0].finishTime.toFixed(2) : '-') + ')');
  ok(pk === 0 && okF, 'no pickups, no NaN');
  ok(race.info(race.player).position === 1 && race.info(race.player).total === 1, 'position 1/1');
  race.dispose();
  ok(scene.children.length === 0, 'dispose → empty scene');
}

console.log(`\n${failures ? 'FAILED' : 'ALL PASSED'} — ${checks - failures}/${checks} checks`);
process.exit(failures ? 1 : 0);
