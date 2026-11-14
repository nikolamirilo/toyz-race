// node src/cars/_verify.mjs  — headless verification of the cars module against a mock track.
import * as THREE from 'three';
import { CARS, createCarMesh, Car, AIDriver, resolveCarCollisions, maxYawRate } from './index.js';
import { createMockTrack } from './_mockTrack.mjs';

const DT = 1 / 60;
let failures = 0;
const ok = (cond, msg) => { if (!cond) { failures++; console.log('  FAIL: ' + msg); } return cond; };
const fmt = (v, d = 1) => (Number.isFinite(v) ? v.toFixed(d) : String(v));
const quick = process.argv.includes('--quick');

const track = createMockTrack();
console.log(`mock track: length ${fmt(track.length)}  min centreline radius ${fmt(track.minRadius)} at t=${fmt(track.minRadiusAt, 3)}`);

// ---------------------------------------------------------------------------------------------- (a) meshes
console.log('\n(a) import + meshes');
ok(typeof document === 'undefined', 'expected to run without a DOM');
ok(CARS.length === 8, '8 cars');
for (const def of CARS) {
  for (const k of ['id', 'name', 'tagline', 'class', 'color', 'stats', 'topSpeed', 'acceleration', 'gripFactor', 'mass', 'turnRate']) {
    ok(def[k] !== undefined, `${def.id} missing ${k}`);
  }
  ok(['Rookie', 'Amateur', 'Pro'].includes(def.class), `${def.id} class`);
  const g = createCarMesh(def.id, def.id === 'pipsqueak' ? '#00ff88' : undefined);
  let meshes = 0, tris = 0, nan = false, shadow = true;
  g.traverse((o) => {
    if (!o.isMesh) return;
    meshes++;
    const p = o.geometry.attributes.position;
    tris += (o.geometry.index ? o.geometry.index.count : p.count) / 3;
    for (let i = 0; i < p.array.length; i++) if (!Number.isFinite(p.array[i])) nan = true;
    if (!o.castShadow) shadow = false;
    if (!o.material.isMeshStandardMaterial) shadow = false;
  });
  g.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(g);
  const ud = g.userData;
  ok(ud.wheels && ud.wheels.length === 4 && ud.wheels.every((w) => w.isMesh), `${def.id} wheels`);
  ok(ud.wheels[0].parent !== g && ud.wheels[0].parent.parent === g && ud.wheels[1].parent !== g, `${def.id} front steer pivots`);
  ok(ud.body && ud.body.parent === g, `${def.id} body pivot`);
  // fl is on +X (left), front is +Z
  const wp = ud.wheels.map((w) => w.getWorldPosition(new THREE.Vector3()));
  ok(wp[0].x > 0 && wp[0].z > 0 && wp[1].x < 0 && wp[1].z > 0 && wp[2].x > 0 && wp[2].z < 0 && wp[3].x < 0 && wp[3].z < 0, `${def.id} wheel order`);
  ok(ud.wheels.every((w, i) => Math.abs(wp[i].y - w.userData.radius) < 1e-6), `${def.id} wheels touch ground`);
  ok(!nan, `${def.id} NaN in geometry`);
  ok(shadow, `${def.id} castShadow/MeshStandardMaterial on all meshes`);
  ok(meshes <= 15, `${def.id} draw calls ${meshes}`);
  ok(Math.abs(box.min.y) < 0.02, `${def.id} sits on ground (min y ${fmt(box.min.y, 3)})`);
  console.log(`  ${def.id.padEnd(13)} ${def.name.padEnd(14)} drawcalls ${String(meshes).padStart(2)}  tris ${String(Math.round(tris)).padStart(5)}  size x ${fmt(box.max.x - box.min.x, 2)} y ${fmt(box.max.y, 2)} z ${fmt(box.max.z - box.min.z, 2)}`);
}

// --------------------------------------------------------------------------------------------- helpers
function checkCar(car, tag) {
  const bad = !Number.isFinite(car.pos.x) || !Number.isFinite(car.pos.y) || !Number.isFinite(car.pos.z) ||
    !Number.isFinite(car.heading) || !Number.isFinite(car.speed) || !Number.isFinite(car.vel.x) || !Number.isFinite(car.vel.z);
  if (bad) throw new Error(`NaN in ${tag}`);
}

/** progress tracker: accumulates wrapped trackT deltas -> laps */
function makeProgress(car) {
  return { last: car.trackT, laps: 0, lapTimes: [], lastCross: 0,
    step(time) {
      let d = car.trackT - this.last; d -= Math.round(d);
      const before = Math.floor(this.laps + 1e-9);
      this.laps += d; this.last = car.trackT;
      const after = Math.floor(this.laps + 1e-9);
      if (after > before && after >= 1) { this.lapTimes.push(time - this.lastCross); this.lastCross = time; }
    } };
}

function runSolo(def, skill, seconds, trk = track) {
  const car = new Car(def.id, { name: def.name });
  const g = trk.startGrid[0];
  car.placeAt(g.pos, g.heading, trk);
  const ai = new AIDriver(car, { skill });
  const prog = makeProgress(car);
  // start just behind the line: count the first crossing as lap start
  prog.laps = -(1 - car.trackT); prog.lastCross = 0;
  const cars = [car];
  let top = 0, topNB = 0, sinceBoost = 9, maxLat = 0, stuck = 0, maxStuck = 0, wallHits = 0, air = 0, drift = 0, minY = 1e9;
  const steps = Math.round(seconds / DT);
  for (let i = 0; i < steps; i++) {
    ai.update(DT, trk, cars);
    car.update(DT, trk);
    checkCar(car, `${def.id} skill ${skill}`);
    prog.step((i + 1) * DT);
    if (car.speed > top) top = car.speed;
    sinceBoost = car.boostTime > 0 ? 0 : sinceBoost + DT;
    if (sinceBoost > 2.5 && car.speed > topNB) topNB = car.speed;
    maxLat = Math.max(maxLat, Math.abs(car.lateral));
    if (Math.abs(car.speed) < 1) { stuck += DT; maxStuck = Math.max(maxStuck, stuck); } else stuck = 0;
    if (car.wallHit > 0) wallHits++;
    if (!car.onGround) air += DT;
    if (car.drifting) drift += DT;
    minY = Math.min(minY, car.pos.y - trk.project(car.pos, car.trackT).y);
  }
  return { car, laps: prog.laps, lapTimes: prog.lapTimes, top, topNB, maxLat, maxStuck, wallHits, air, drift, minY };
}

// ------------------------------------------------------------------------------------------ (b) solo AI laps
console.log('\n(b) AI solo, 120 s each (lap times exclude the standing-start lap where possible)');
const lapTable = {};
for (const def of CARS) {
  lapTable[def.id] = {};
  for (const skill of [0.3, 0.7, 1.0]) {
    const r = runSolo(def, skill, quick ? 60 : 120);
    const flying = r.lapTimes.slice(1);
    const best = flying.length ? Math.min(...flying) : NaN;
    lapTable[def.id][skill] = best;
    ok(r.laps >= (quick ? 1.5 : 3), `${def.id} skill ${skill}: only ${fmt(r.laps, 2)} laps`);
    ok(r.maxLat <= track.sample(0).halfWidth + 1e-6, `${def.id} skill ${skill}: left the road (${fmt(r.maxLat, 2)})`);
    ok(r.maxStuck < 3, `${def.id} skill ${skill}: stuck for ${fmt(r.maxStuck)} s`);
    ok(r.minY > -1e-6, `${def.id} skill ${skill}: below ground ${r.minY}`);
    console.log(`  ${def.id.padEnd(13)} skill ${fmt(skill)}  laps ${fmt(r.laps, 2)}  best lap ${fmt(best, 2)} s  top ${fmt(r.topNB)} (pad-boosted ${fmt(r.top)}) / ${def.topSpeed}  maxLat ${fmt(r.maxLat, 2)}  wallHits ${r.wallHits}  air ${fmt(r.air, 1)} s  drift ${fmt(r.drift, 1)} s  stuck ${fmt(r.maxStuck, 1)} s`);
  }
}

// --------------------------------------------------------------------------------------- (c) 8 cars together
console.log('\n(c) 8 cars racing together, 120 s, mixed skill');
{
  const cars = CARS.map((d, i) => new Car(d.id, { name: d.name, isPlayer: i === 0 }));
  cars.forEach((c, i) => c.placeAt(track.startGrid[i].pos, track.startGrid[i].heading, track));
  const ais = cars.map((c, i) => new AIDriver(c, { skill: 0.35 + 0.65 * (i / 7) }));
  const progs = cars.map((c) => { const p = makeProgress(c); p.laps = -(1 - c.trackT); return p; });
  const stuck = cars.map(() => 0), maxStuck = cars.map(() => 0), maxLat = cars.map(() => 0);
  let maxImpact = 0, fires = 0, minSep = 1e9;
  // countdown: frozen cars must not move
  cars.forEach((c) => { c.frozen = true; });
  for (let i = 0; i < 60; i++) { ais.forEach((a) => a.update(DT, track, cars)); cars.forEach((c) => c.update(DT, track)); resolveCarCollisions(cars); }
  ok(cars.every((c, i) => c.pos.distanceTo(track.startGrid[i].pos) < 0.01 && c.speed === 0), 'frozen cars stay on the grid');
  cars.forEach((c) => { c.frozen = false; });
  const steps = Math.round((quick ? 60 : 120) / DT);
  for (let s = 0; s < steps; s++) {
    for (let i = 0; i < 8; i++) {
      ais[i].playerProgressDelta = progs[i].laps - progs[0].laps;
      ais[i].update(DT, track, cars);
      if (ais[i].wantsToFire) { fires++; ais[i].wantsToFire = false; }
    }
    for (let i = 0; i < 8; i++) cars[i].update(DT, track);
    maxImpact = Math.max(maxImpact, resolveCarCollisions(cars));
    for (let i = 0; i < 8; i++) {
      const c = cars[i];
      checkCar(c, 'pack ' + c.def.id);
      progs[i].step((s + 1) * DT);
      maxLat[i] = Math.max(maxLat[i], Math.abs(track.project(c.pos, c.trackT).lateral));
      if (Math.abs(c.speed) < 1) { stuck[i] += DT; maxStuck[i] = Math.max(maxStuck[i], stuck[i]); } else stuck[i] = 0;
      for (let j = i + 1; j < 8; j++) minSep = Math.min(minSep, Math.hypot(c.pos.x - cars[j].pos.x, c.pos.z - cars[j].pos.z));
    }
  }
  cars.forEach((c, i) => {
    ok(progs[i].laps >= (quick ? 1.4 : 3), `pack: ${c.def.id} only ${fmt(progs[i].laps, 2)} laps`);
    ok(maxLat[i] <= 7.3, `pack: ${c.def.id} pushed off the road (${fmt(maxLat[i], 2)})`);
    ok(maxStuck[i] < 4, `pack: ${c.def.id} stuck ${fmt(maxStuck[i])} s`);
    const fl = progs[i].lapTimes.slice(1);
    console.log(`  ${c.def.id.padEnd(13)} skill ${fmt(ais[i].skill, 2)}  laps ${fmt(progs[i].laps, 2)}  best lap ${fl.length ? fmt(Math.min(...fl), 2) : '-'} s  maxLat ${fmt(maxLat[i], 2)}  longest stop ${fmt(maxStuck[i], 1)} s`);
  });
  console.log(`  max car-car impact ${fmt(maxImpact)}  min centre separation ${fmt(minSep, 2)}  wantsToFire events ${fires}`);
  ok(fires > 5, 'AI never wants to fire');
}

// ------------------------------------------------------------------------------------------- (d) recovery
console.log('\n(d) recovery');
for (const def of CARS) {
  const scenarios = {
    backwards: (car) => { const s = track.sample(0.2); car.placeAt(s.pos, Math.atan2(-s.tangent.x, -s.tangent.z), track); },
    'nose-in-wall': (car) => { const s = track.sample(0.45); car.placeAt(s.pos.clone().addScaledVector(s.right, 6.0), Math.atan2(s.right.x, s.right.z), track); },
    'backwards-on-wall': (car) => { const s = track.sample(0.7); car.placeAt(s.pos.clone().addScaledVector(s.right, -6.0), Math.atan2(-s.tangent.x, -s.tangent.z) + 0.3, track); },
    'against-obstacle': (car) => { const o = track.obstacles[0]; const p = track.project(new THREE.Vector3(o.x, 0, o.z)); const s = track.sample(p.t - 2.4 / track.length);
      car.placeAt(s.pos.clone().addScaledVector(s.right, p.lateral), Math.atan2(s.tangent.x, s.tangent.z), track); },
  };
  const res = [];
  for (const [name, setup] of Object.entries(scenarios)) {
    const car = new Car(def.id);
    setup(car);
    const ai = new AIDriver(car, { skill: 0.7 });
    const prog = makeProgress(car);
    let tRec = -1, maxLat = 0;
    for (let i = 0; i < 20 / DT; i++) {
      ai.update(DT, track, [car]); car.update(DT, track); checkCar(car, 'recovery');
      prog.step(i * DT);
      maxLat = Math.max(maxLat, Math.abs(car.lateral));
      if (tRec < 0 && prog.laps > 40 / track.length) tRec = i * DT; // 40 units of forward progress
    }
    ok(tRec >= 0 && tRec < 9, `${def.id} ${name}: not recovered (t=${tRec}, progress ${fmt(prog.laps * track.length)} u)`);
    ok(maxLat <= 7 + 1e-6, `${def.id} ${name}: left road`);
    res.push(`${name} ${fmt(tRec, 1)}s`);
  }
  console.log(`  ${def.id.padEnd(13)} +40u progress after: ${res.join(', ')}`);
}

// ------------------------------------------------------------------------------ (e) scripted player inputs
console.log('\n(e) scripted inputs (flat open plane, no track)');
function freeCar(def) { const c = new Car(def.id); c.placeAt(new THREE.Vector3(0, 0, 0), 0, null); return c; }
function run(car, seconds, controls, each) {
  const n = Math.round(seconds / DT);
  for (let i = 0; i < n; i++) { Object.assign(car.controls, controls); car.update(DT, null); checkCar(car, 'scripted'); if (each) each(i * DT); }
}
/** steady-state turn radius holding `frac` of top speed with full steer (throttle modulated to hold speed) */
function turnRadius(def, frac) {
  const car = freeCar(def);
  const target = def.topSpeed * frac;
  const hold = () => { car.controls.throttle = Math.hypot(car.vel.x, car.vel.z) < target ? 1 : 0; };
  for (let i = 0; i < 8 / DT; i++) { hold(); car.controls.steer = 0; car.update(DT, null); }
  for (let i = 0; i < 2.5 / DT; i++) { hold(); car.controls.steer = 1; car.update(DT, null); }
  // measure: path curvature = d(velocity direction)/ds over 1.5 s
  let ang = 0, dist = 0, prev = Math.atan2(car.vel.x, car.vel.z), drift = 0, spd = 0, n = 0;
  for (let i = 0; i < 1.5 / DT; i++) {
    hold(); car.controls.steer = 1; car.update(DT, null);
    const a = Math.atan2(car.vel.x, car.vel.z);
    let d = a - prev; d = Math.atan2(Math.sin(d), Math.cos(d)); ang += d; prev = a;
    const v = Math.hypot(car.vel.x, car.vel.z); dist += v * DT; spd += v; n++;
    if (car.drifting) drift++;
  }
  return { radius: dist / Math.abs(ang), speed: spd / n, left: ang > 0, drift: drift / n };
}
console.log('  car            0-90%   top    brake dist  R@50%   R@60%(v)       R@100%(v, drift%)   handbrake slip   reverse');
for (const def of CARS) {
  // acceleration / top speed
  let car = freeCar(def);
  let t90 = -1;
  run(car, 10, { throttle: 1, steer: 0, handbrake: false }, (t) => { if (t90 < 0 && car.speed >= 0.9 * def.topSpeed) t90 = t; });
  const top = car.speed;
  ok(Math.abs(top - def.topSpeed) < 0.02 * def.topSpeed, `${def.id} top speed ${fmt(top, 2)} vs ${def.topSpeed}`);
  ok(Math.abs(car.pos.x) < 1e-6 && car.pos.z > 100, `${def.id} drives along +Z at heading 0`);
  // braking distance
  const z0 = car.pos.z; let tb = 0;
  for (let i = 0; i < 300 && car.speed > 0.05; i++) { car.controls.throttle = -1; car.update(DT, null); tb += DT; }
  const brakeDist = car.pos.z - z0;
  ok(brakeDist > 6 && brakeDist < 30, `${def.id} brake distance ${fmt(brakeDist)}`);
  // reverse
  run(car, 2.5, { throttle: -1, steer: 0, handbrake: false });
  const rev = car.speed;
  ok(rev < -6, `${def.id} reverse speed ${fmt(rev)}`);
  // boost
  car = freeCar(def); run(car, 6, { throttle: 1, steer: 0 }); car.boostTime = 1.2; run(car, 1.1, { throttle: 1 });
  const boosted = car.speed; ok(boosted > def.topSpeed * 1.2, `${def.id} boost speed ${fmt(boosted)}`);
  run(car, 4, { throttle: 1 }); ok(Math.abs(car.speed - def.topSpeed) < 0.03 * def.topSpeed, `${def.id} settles after boost (${fmt(car.speed)})`);
  // turn radii
  const r50 = turnRadius(def, 0.5), r60 = turnRadius(def, 0.6), r100 = turnRadius(def, 1.0);
  ok(r50.left && r100.left, `${def.id} steer +1 must turn left (heading increases)`);
  ok(r60.radius <= 12 && r60.speed > 0.55 * def.topSpeed, `${def.id} cannot take R12 at 60% (R ${fmt(r60.radius)} at ${fmt(r60.speed)})`);
  ok(r100.radius < 40, `${def.id} top speed radius ${fmt(r100.radius)}`);
  // steer sign check on heading directly
  car = freeCar(def); run(car, 1.5, { throttle: 1, steer: 0 }); const h0 = car.heading; run(car, 0.5, { throttle: 1, steer: 1 });
  ok(car.heading > h0 + 0.2, `${def.id} +steer increases heading`);
  // standstill: no spinning on the spot
  car = freeCar(def); run(car, 1, { throttle: 0, steer: 1 }); ok(Math.abs(car.heading) < 1e-6, `${def.id} no yaw at standstill`);
  // handbrake drift
  car = freeCar(def); run(car, 5, { throttle: 1, steer: 0, handbrake: false });
  let maxSlip = 0, driftT = 0;
  run(car, 1.0, { throttle: 1, steer: 1, handbrake: true }, () => { maxSlip = Math.max(maxSlip, Math.abs(car.slip)); if (car.drifting) driftT += DT; });
  const spdAfter = Math.hypot(car.vel.x, car.vel.z);
  ok(driftT > 0.5 && maxSlip > 6, `${def.id} handbrake drift (slip ${fmt(maxSlip)}, drift ${fmt(driftT)} s)`);
  run(car, 1.5, { throttle: 1, steer: 0, handbrake: false });
  ok(!car.drifting && Math.abs(car.slip) < 1, `${def.id} recovers from drift (slip ${fmt(car.slip)})`);
  console.log(`  ${def.id.padEnd(13)} ${fmt(t90, 2)} s  ${fmt(top, 1)}  ${fmt(brakeDist, 1).padStart(5)} u    ${fmt(r50.radius, 1).padStart(5)}   ${fmt(r60.radius, 1).padStart(5)} (${fmt(r60.speed, 1)})   ${fmt(r100.radius, 1).padStart(5)} (${fmt(r100.speed, 1)}, ${fmt(r100.drift * 100, 0)}%)     ${fmt(maxSlip, 1)} u/s, exit ${fmt(spdAfter, 1)}   ${fmt(rev, 1)}`);
}

// ------------------------------------------------------------------------------- misc behaviour checks
console.log('\n(f) misc: walls, jump, spin, boost pad, large dt, collisions');
{
  const def = CARS[3];
  // wall glance at 30 degrees, full speed: must keep moving and stay inside
  let car = new Car(def.id); let s = track.sample(0.02);
  const h = Math.atan2(s.tangent.x, s.tangent.z);
  car.placeAt(s.pos, h + 0.5, track);
  car.vel.set(Math.sin(h + 0.5) * 30, 0, Math.cos(h + 0.5) * 30);
  let hit = 0, minSpeed = 99, maxLat = 0;
  for (let i = 0; i < 90; i++) { car.controls.throttle = 1; car.controls.steer = 0; car.update(DT, track); hit = Math.max(hit, car.wallHit); if (i > 2) minSpeed = Math.min(minSpeed, Math.hypot(car.vel.x, car.vel.z)); maxLat = Math.max(maxLat, Math.abs(car.lateral)); }
  ok(hit > 5, `wallHit reported (${fmt(hit)})`); ok(minSpeed > 18, `wall glance keeps speed (min ${fmt(minSpeed)})`); ok(maxLat <= 7, 'stays inside');
  console.log(`  wall glance 29deg @30: wallHit ${fmt(hit)}  min speed after ${fmt(minSpeed)}  maxLat ${fmt(maxLat, 2)}`);
  // head-on
  car = new Car(def.id); s = track.sample(0.02);
  car.placeAt(s.pos, Math.atan2(s.right.x, s.right.z), track); car.vel.set(s.right.x * 30, 0, s.right.z * 30);
  hit = 0; for (let i = 0; i < 60; i++) { car.controls.throttle = 0; car.update(DT, track); hit = Math.max(hit, car.wallHit); }
  ok(hit > 20 && Math.abs(car.lateral) <= 7, 'head-on wall hit'); console.log(`  head-on @30: wallHit ${fmt(hit)}, lateral after ${fmt(car.lateral, 2)}`);
  // crest jump at full speed
  car = new Car(def.id); const g = track.startGrid[0]; car.placeAt(g.pos, g.heading, track);
  let air = 0, landed = 0, maxH = 0;
  for (let i = 0; i < 6 / DT; i++) { car.controls.throttle = 1; car.controls.steer = clampSteer(car, track); car.update(DT, track); if (!car.onGround) { air += DT; maxH = Math.max(maxH, car.pos.y - track.project(car.pos, car.trackT).y); } landed = Math.max(landed, car.landed); }
  ok(air > 0.15 && air < 2.5 && landed > 0, `crest jump air time ${fmt(air, 2)}`);
  console.log(`  crest at full throttle: air time ${fmt(air, 2)} s, max height ${fmt(maxH, 2)}, landing impact ${fmt(landed)}`);
  // launch()
  car = freeCarAt(def); car.launch(8); let t = 0; while (!car.onGround && t < 3) { car.update(DT, null); t += DT; }
  ok(Math.abs(t - 16 / 30) < 0.06, `launch(8) air time ${fmt(t, 2)}`);
  // spin: controls ignored, heading unchanged at the end, finite
  car = freeCarAt(def); for (let i = 0; i < 120; i++) { car.controls.throttle = 1; car.update(DT, null); }
  const hBefore = car.heading; car.spinTime = 1.0;
  for (let i = 0; i < 60; i++) { car.controls.throttle = 1; car.controls.steer = 1; car.update(DT, null); }
  ok(Math.abs(car.heading - hBefore) < 1e-6 && car.spinTime === 0, 'spin ignores steering'); ok(car.speed < 30, 'spin slows the car');
  for (let i = 0; i < 60; i++) { car.controls.steer = 0; car.update(DT, null); }
  ok(Math.abs(car.mesh.rotation.y - car.heading) < 1e-6, 'spin visual settles');
  // boost pad triggers once
  car = new Car(def.id); const pad = track.boostPads[0]; const pp = track.project(new THREE.Vector3(pad.x, 0, pad.z));
  s = track.sample(pp.t - 8 / track.length); car.placeAt(s.pos.clone().addScaledVector(s.right, pp.lateral), Math.atan2(s.tangent.x, s.tangent.z), track);
  let trig = 0; for (let i = 0; i < 120; i++) { car.controls.throttle = 1; car.update(DT, track); if (car.boostPadHit) trig++; }
  ok(trig === 1, `boost pad triggered ${trig}x`);
  // big dt is clamped, tiny dt fine
  car = new Car(def.id); car.placeAt(g.pos, g.heading, track); const ai = new AIDriver(car, { skill: 0.8 });
  const prog = makeProgress(car);
  for (let i = 0; i < 1800; i++) { const d = i % 7 === 0 ? 0.25 : 1 / 30; ai.update(d, track, [car]); car.update(d, track); checkCar(car, 'dt'); prog.step(0); }
  ok(prog.laps > 1 && Math.abs(car.lateral) <= 7, `variable dt 30 fps laps ${fmt(prog.laps, 2)}`);
  // collisions: heavy vs light head-on
  const a = new Car('gruffstomper'), b = new Car('pipsqueak');
  a.placeAt(new THREE.Vector3(0, 0, 0), 0, null); b.placeAt(new THREE.Vector3(0, 0, 1.2), Math.PI, null);
  a.vel.set(0, 0, 10); b.vel.set(0, 0, -10);
  const imp = resolveCarCollisions([a, b]);
  ok(imp > 19 && b.vel.z > 0 && a.vel.z > -5 && Math.hypot(a.pos.x - b.pos.x, a.pos.z - b.pos.z) >= (a.radius + b.radius) * 0.82 - 1e-6, 'collision impulse');
  console.log(`  head-on 10 vs 10: impact ${fmt(imp)}, monster vz ${fmt(a.vel.z)}, kart vz ${fmt(b.vel.z)}`);
  // reversed `right` convention on the track still works for the AI
  const t2 = createMockTrack({ reverseRight: true });
  const r = runSolo(CARS[5], 0.8, 60, t2);
  ok(r.laps > 1.5 && r.maxLat <= 7, `reversed-right track laps ${fmt(r.laps, 2)}`);
  console.log(`  track with mirrored 'right' vector: ${fmt(r.laps, 2)} laps in 60 s, wallHits ${r.wallHits}`);
}
function freeCarAt(def) { const c = new Car(def.id); c.placeAt(new THREE.Vector3(0, 0, 0), 0, null); return c; }
function clampSteer(car, trk) { // tiny centring controller for the straight
  const s = trk.sample(car.trackT + 8 / trk.length);
  let e = Math.atan2(s.pos.x - car.pos.x, s.pos.z - car.pos.z) - car.heading; e = Math.atan2(Math.sin(e), Math.cos(e));
  return Math.max(-1, Math.min(1, e * 3));
}

console.log(failures ? `\n${failures} FAILURE(S)` : '\nALL CHECKS PASSED');
process.exit(failures ? 1 : 0);
