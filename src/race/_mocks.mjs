// Test doubles for the race module: a circular mock track and minimal Car / AIDriver.
import * as THREE from 'three';

const TAU = Math.PI * 2;

export function makeMockTrack({ radius = 80, halfWidth = 7, pickups = true } = {}) {
  const R = radius, length = TAU * R;
  const at = (t, lat = 0) => {
    const a = t * TAU;
    return new THREE.Vector3((R + lat) * Math.sin(a), 0, (R + lat) * Math.cos(a));
  };
  const track = {
    id: 'mock', name: 'Mock Ring',
    group: new THREE.Group(), background: new THREE.Color(0), fog: null,
    length,
    sample(t) {
      const a = t * TAU;
      return {
        pos: new THREE.Vector3(R * Math.sin(a), 0, R * Math.cos(a)),
        tangent: new THREE.Vector3(Math.cos(a), 0, -Math.sin(a)),
        right: new THREE.Vector3(Math.sin(a), 0, Math.cos(a)),
        halfWidth,
      };
    },
    project(pos) {
      let t = Math.atan2(pos.x, pos.z) / TAU;
      if (t < 0) t += 1;
      if (t >= 1) t -= 1;
      return { t, lateral: Math.hypot(pos.x, pos.z) - R, y: 0, halfWidth };
    },
    startGrid: [], pickupSpots: [], obstacles: [], boostPads: [], minimap: [],
    update() {}, dispose() {},
    at,
  };
  for (let i = 0; i < 8; i++) {
    const t = 1 - (3 + i * 3.2) / length;
    const s = track.sample(t);
    track.startGrid.push({ pos: at(t, i % 2 ? 2.6 : -2.6), heading: Math.atan2(s.tangent.x, s.tangent.z) });
  }
  if (pickups) for (const t of [0.15, 0.4, 0.65, 0.88]) for (const l of [-3.5, 0, 3.5]) track.pickupSpots.push(at(t, l));
  track.obstacles.push({ x: at(0.52, 4).x, z: at(0.52, 4).z, radius: 0.9 });
  for (let i = 0; i < 120; i++) { const p = at(i / 120); track.minimap.push([p.x, p.z]); }
  return track;
}

export const CARS = Array.from({ length: 8 }, (_, i) => ({
  id: 'mock' + i, name: 'Mock ' + i, tagline: '', class: 'Rookie', color: '#ff0000',
  stats: { speed: 5, accel: 5, grip: 5, weight: 5 },
  topSpeed: 30 + i, acceleration: 30, gripFactor: 1, mass: 1, turnRate: 2.6,
}));

export class Car {
  constructor(carId, { name, isPlayer, color } = {}) {
    this.def = CARS.find((c) => c.id === carId);
    if (!this.def) throw new Error('unknown car ' + carId);
    this.name = name; this.isPlayer = !!isPlayer; this.color = color;
    this.mesh = new THREE.Group();
    this.pos = new THREE.Vector3(); this.vel = new THREE.Vector3();
    this.heading = 0; this.speed = 0; this.radius = 1; this.onGround = true;
    this.trackT = 0; this.lateral = 0;
    this.controls = { throttle: 0, steer: 0, handbrake: false };
    this.boostTime = 0; this.spinTime = 0; this.frozen = false;
    this.wallHit = 0; this.drifting = false;
    this._ext = new THREE.Vector3(); this._vy = 0;
    this.script = null; // { speed } → slide along the centreline at a signed speed (tests)
    this.launches = 0; this.impulses = 0;
  }
  placeAt(pos, heading, track) {
    this.pos.copy(pos); this.heading = heading; this.vel.set(0, 0, 0); this.speed = 0; this._ext.set(0, 0, 0);
    const pr = track.project(this.pos); this.trackT = pr.t; this.lateral = pr.lateral;
  }
  applyImpulse(v) { this._ext.add(v); this.impulses++; }
  launch(vy) { this._vy = vy; this.onGround = false; this.launches++; }
  update(dt, track) {
    this.wallHit = 0; this.drifting = false;
    if (this.frozen) { this.mesh.position.copy(this.pos); return; }
    if (this.script) {
      const t = (((this.trackT + (this.script.speed * dt) / track.length) % 1) + 1) % 1;
      const s = track.sample(t);
      this.pos.copy(s.pos);
      const dir = this.script.faceBackward ? -1 : 1;
      this.heading = Math.atan2(s.tangent.x * dir, s.tangent.z * dir);
      this.speed = this.script.speed * dir;
      this.vel.copy(s.tangent).multiplyScalar(this.script.speed);
      this.trackT = t; this.lateral = 0;
      return;
    }
    const top = this.def.topSpeed * (this.boostTime > 0 ? 1.4 : 1);
    if (this.boostTime > 0) this.boostTime = Math.max(0, this.boostTime - dt);
    if (this.spinTime > 0) {
      this.spinTime = Math.max(0, this.spinTime - dt);
      this.heading += 9 * dt; this.speed *= Math.max(0, 1 - 2 * dt);
    } else {
      const want = this.controls.throttle * top;
      this.speed += Math.sign(want - this.speed) * Math.min(Math.abs(want - this.speed), this.def.acceleration * dt);
      this.heading += this.controls.steer * this.def.turnRate * dt * Math.min(1, Math.abs(this.speed) / 6) * Math.sign(this.speed || 1);
      this.drifting = this.controls.handbrake || Math.abs(this.controls.steer) > 0.9;
    }
    this.vel.set(Math.sin(this.heading) * this.speed, 0, Math.cos(this.heading) * this.speed).add(this._ext);
    this._ext.multiplyScalar(Math.max(0, 1 - 3 * dt));
    this.pos.x += this.vel.x * dt; this.pos.z += this.vel.z * dt;
    if (!this.onGround) {
      this._vy -= 30 * dt; this.pos.y += this._vy * dt;
      if (this.pos.y <= 0) { this.pos.y = 0; this.onGround = true; this._vy = 0; }
    }
    const pr = track.project(this.pos, this.trackT);
    const lim = pr.halfWidth - this.radius;
    if (Math.abs(pr.lateral) > lim) {
      const s = track.sample(pr.t), over = Math.abs(pr.lateral) - lim, sg = Math.sign(pr.lateral);
      this.pos.x -= s.right.x * sg * over; this.pos.z -= s.right.z * sg * over;
      this.wallHit = Math.abs(this.speed) * 0.3; this.speed *= 0.97;
      pr.lateral = sg * lim;
    }
    for (const o of track.obstacles) {
      const dx = this.pos.x - o.x, dz = this.pos.z - o.z, d = Math.hypot(dx, dz), rr = o.radius + this.radius;
      if (d < rr && d > 1e-6) { this.pos.x = o.x + (dx / d) * rr; this.pos.z = o.z + (dz / d) * rr; this.wallHit = Math.max(this.wallHit, 5); }
    }
    this.trackT = pr.t; this.lateral = pr.lateral;
    this.mesh.position.copy(this.pos); this.mesh.rotation.y = this.heading;
  }
}

export class AIDriver {
  constructor(car, { skill = 0.5 } = {}) {
    this.car = car; this.skill = skill; this.wantsToFire = false; this.playerProgressDelta = 0;
    this.lane = (Math.random() - 0.5) * 6; this._t = 0;
  }
  update(dt, track) {
    const car = this.car;
    const s = track.sample((car.trackT + 10 / track.length) % 1);
    const tx = s.pos.x + s.right.x * this.lane, tz = s.pos.z + s.right.z * this.lane;
    let d = Math.atan2(tx - car.pos.x, tz - car.pos.z) - car.heading;
    while (d > Math.PI) d -= TAU; while (d < -Math.PI) d += TAU;
    car.controls.steer = Math.max(-1, Math.min(1, d * 2.5));
    car.controls.throttle = 0.6 + 0.4 * this.skill;
    car.controls.handbrake = false;
    this._t += dt;
    if (this._t > 2.5) { this._t = 0; this.wantsToFire = true; }
  }
}

export function resolveCarCollisions(cars) {
  let max = 0;
  for (let i = 0; i < cars.length; i++) for (let j = i + 1; j < cars.length; j++) {
    const a = cars[i], b = cars[j];
    const dx = b.pos.x - a.pos.x, dz = b.pos.z - a.pos.z, d = Math.hypot(dx, dz), rr = a.radius + b.radius;
    if (d < rr && d > 1e-6) {
      const push = (rr - d) / 2, nx = dx / d, nz = dz / d;
      a.pos.x -= nx * push; a.pos.z -= nz * push; b.pos.x += nx * push; b.pos.z += nz * push;
      max = Math.max(max, Math.abs(a.speed - b.speed) + 1);
    }
  }
  return max;
}

export const deps = { Car, AIDriver, CARS, resolveCarCollisions };
