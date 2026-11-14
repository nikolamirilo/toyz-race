import * as THREE from 'three';

const MODES = [
  { name: 'Chase', dist: 6.2, height: 2.7, look: 3.0, lookY: 0.9, stiff: 5.5 },
  { name: 'Far chase', dist: 9.5, height: 4.4, look: 4.0, lookY: 0.8, stiff: 4.5 },
  { name: 'Bumper', dist: -0.9, height: 0.75, look: 8.0, lookY: 0.6, stiff: 30 },
  { name: 'Overhead', dist: 3.5, height: 24, look: 2.0, lookY: 0, stiff: 4 },
];

function angleLerp(a, b, k) {
  let d = (b - a) % (Math.PI * 2);
  if (d > Math.PI) d -= Math.PI * 2;
  if (d < -Math.PI) d += Math.PI * 2;
  return a + d * k;
}

export class GameCamera {
  constructor(camera) {
    this.camera = camera;
    this.mode = 0;
    this.yaw = 0;
    this.shake = 0;
    this.shakeEnabled = true;
    this.baseFov = 62;
    this._pos = new THREE.Vector3();
    this._look = new THREE.Vector3();
    this._lookSm = new THREE.Vector3();
    this._init = false;
    this._orbit = 0;
  }

  get modeName() { return MODES[this.mode].name; }
  nextMode() { this.mode = (this.mode + 1) % MODES.length; this._init = false; return this.modeName; }
  snap() { this._init = false; }
  addShake(amount) { if (this.shakeEnabled) this.shake = Math.min(1, this.shake + amount); }

  /** Follow a car during the race. */
  follow(car, dt, track) {
    const m = MODES[this.mode];
    const cam = this.camera;
    // Aim along a blend of heading and travel direction so drifts look good.
    let targetYaw = car.heading;
    const sp = Math.hypot(car.vel.x, car.vel.z);
    if (sp > 6 && car.speed > 0) {
      const velYaw = Math.atan2(car.vel.x, car.vel.z);
      targetYaw = angleLerp(car.heading, velYaw, 0.35);
    }
    if (!this._init) this.yaw = targetYaw;
    const spinning = car.spinTime > 0;
    this.yaw = angleLerp(this.yaw, targetYaw, 1 - Math.exp(-(spinning ? 1.2 : m.stiff) * dt));

    const sx = Math.sin(this.yaw), cz = Math.cos(this.yaw);
    this._pos.set(car.pos.x - sx * m.dist, car.pos.y + m.height, car.pos.z - cz * m.dist);
    // Keep the camera above the road surface behind the car.
    if (track && m.dist > 0) {
      const p = track.project(this._pos, car.trackT);
      if (this._pos.y < p.y + 1.2) this._pos.y = p.y + 1.2;
    }
    this._look.set(car.pos.x + sx * m.look, car.pos.y + m.lookY, car.pos.z + cz * m.look);

    if (!this._init) {
      cam.position.copy(this._pos);
      this._lookSm.copy(this._look);
      this._init = true;
    } else {
      const k = 1 - Math.exp(-m.stiff * 1.6 * dt);
      cam.position.lerp(this._pos, k);
      this._lookSm.lerp(this._look, 1 - Math.exp(-14 * dt));
    }

    if (this.shake > 0.001) {
      const s = this.shake * 0.35;
      cam.position.x += (Math.random() - 0.5) * s;
      cam.position.y += (Math.random() - 0.5) * s;
      cam.position.z += (Math.random() - 0.5) * s;
      this.shake *= Math.exp(-6 * dt);
    }
    cam.lookAt(this._lookSm);

    const top = car.def && car.def.topSpeed ? car.def.topSpeed : 35;
    const ratio = Math.min(1.4, Math.abs(car.speed) / top);
    const targetFov = this.baseFov + ratio * 14 + (car.boostTime > 0 ? 8 : 0);
    cam.fov += (targetFov - cam.fov) * (1 - Math.exp(-4 * dt));
    cam.updateProjectionMatrix();
  }

  /** Slow orbit around a point (turntable, results). */
  orbit(center, dt, { radius = 6, height = 2.2, speed = 0.5, lookY = 0.5 } = {}) {
    this._orbit += dt * speed;
    const cam = this.camera;
    cam.position.set(center.x + Math.sin(this._orbit) * radius, center.y + height, center.z + Math.cos(this._orbit) * radius);
    this._look.set(center.x, center.y + lookY, center.z);
    cam.lookAt(this._look);
    cam.fov += (45 - cam.fov) * (1 - Math.exp(-4 * dt));
    cam.updateProjectionMatrix();
    this._init = false;
  }

  /** Fly along the track centreline (attract mode / track preview). */
  flyover(track, t, dt, { height = 7, back = 12, ahead = 0.03 } = {}) {
    const cam = this.camera;
    const a = track.sample(((t % 1) + 1) % 1);
    this._pos.set(a.pos.x - a.tangent.x * back, a.pos.y + height, a.pos.z - a.tangent.z * back);
    const b = track.sample((((t + ahead) % 1) + 1) % 1);
    this._look.copy(b.pos);
    if (!this._fly) { cam.position.copy(this._pos); this._lookSm.copy(this._look); this._fly = true; }
    cam.position.lerp(this._pos, 1 - Math.exp(-2.5 * dt));
    this._lookSm.lerp(this._look, 1 - Math.exp(-2.5 * dt));
    cam.lookAt(this._lookSm);
    cam.fov += (58 - cam.fov) * (1 - Math.exp(-4 * dt));
    cam.updateProjectionMatrix();
    this._init = false;
  }

  resetFly() { this._fly = false; }
}
