// Multiplayer: compact car-state encoding + dead reckoning for network-driven cars ("puppets").
//
// Car state array (plain JSON numbers):
//   [0] x  [1] y  [2] z  [3] heading  [4] vx  [5] vy  [6] vz  [7] yawRate  [8] steer
//   [9] flags (bit0 onGround, bit1 drifting, bit2 handbrake, bits 4-7 teleport counter 0..15,
//              bits 8-12 strongest wall hit since the previous packet, 0..31 — for sparks)
//   [10] spinTime  [11] boostTime        (host snapshots append [12] progress)

const TAU = Math.PI * 2;
export const STATE_LEN = 12;
export const MAX_EXTRAP = 0.5;   // s: how long a puppet is extrapolated past its last packet before it freezes
const SNAP_DIST = 12;            // units: beyond this the puppet teleports instead of sliding
const GRAVITY = 30;

export const r1 = (v) => Math.round(v * 10) / 10;
export const r2 = (v) => Math.round(v * 100) / 100;
export const r3 = (v) => Math.round(v * 1000) / 1000;
const fin = (v) => typeof v === 'number' && v === v && v !== Infinity && v !== -Infinity;

export function wrapAngle(a) {
  a = (a + Math.PI) % TAU;
  if (a < 0) a += TAU;
  return a - Math.PI;
}

export function encodeCar(car, tp, wallHit) {
  const c = car.controls || {};
  const wh = wallHit > 0 ? (wallHit > 31 ? 31 : Math.round(wallHit)) : 0;
  const flags = (car.onGround !== false ? 1 : 0) | (car.drifting ? 2 : 0) | (c.handbrake ? 4 : 0) | ((tp & 15) << 4) | (wh << 8);
  const v = car.vel;
  return [
    r2(car.pos.x), r2(car.pos.y), r2(car.pos.z), r3(wrapAngle(car.heading)),
    r2(v.x), r2(v.y || 0), r2(v.z), r3(car.yawRate || 0), r2(c.steer || 0),
    flags, r2(car.spinTime > 0 ? car.spinTime : 0), r2(car.boostTime > 0 ? car.boostTime : 0),
  ];
}

export function validState(a) {
  if (!Array.isArray(a) || a.length < STATE_LEN) return false;
  for (let i = 0; i < STATE_LEN; i++) if (!fin(a[i])) return false;
  return Math.abs(a[0]) < 1e6 && Math.abs(a[1]) < 1e6 && Math.abs(a[2]) < 1e6;
}

export class PuppetTrack {
  constructor() {
    this.a = null;          // previous sample { t, s }
    this.b = null;          // latest sample
    this.lastT = -Infinity;
    this.tp = -1;           // last seen teleport counter
    this.fresh = false;
    this.init = false;
    this.hold = 0;          // s: keep locally applied spin / boost (host-side visual of an effect in flight)
    this.stale = false;     // true while frozen because packets stopped
    this.snapped = false;   // true on a frame where the car was teleported
    this.age = Infinity;    // s: age of the newest sample at the last advance()
    this._wh = 0;
    this.wallHit = 0;       // wall-hit strength reported by the newest packet (consumed by the race for sparks)
  }

  /** stamp: sender clock (same time base as the `now` given to advance), s: validated state array */
  push(stamp, s) {
    if (!(stamp > this.lastT)) return false;
    const o = this.a || { t: 0, s: null };
    this.a = this.b;
    o.t = stamp; o.s = s;
    this.b = o;
    this.lastT = stamp;
    const wh = (s[9] >> 8) & 31;       // several packets can arrive between two frames: keep the strongest
    if (wh > this._wh) this._wh = wh;
    this.fresh = true;
    return true;
  }

  /** Move `car` to where the owner's car is believed to be at time `now`. Call once per frame before car.update(). */
  advance(car, now, dt) {
    this.snapped = false;
    const b = this.b;
    if (!b) return;
    const s = b.s;
    if (this.hold > 0) this.hold -= dt;
    let e = now - b.t;
    this.age = e;
    let x, y, z, h, vx, vy, vz, yaw;
    const a = this.a;
    if (e < 0 && a && b.t - a.t > 1e-6 && b.t - a.t < 1) {
      // render time is between the two newest samples: interpolate
      let u = (now - a.t) / (b.t - a.t);
      if (u < 0) u = 0;
      const p = a.s;
      x = p[0] + (s[0] - p[0]) * u; y = p[1] + (s[1] - p[1]) * u; z = p[2] + (s[2] - p[2]) * u;
      h = p[3] + wrapAngle(s[3] - p[3]) * u;
      vx = p[4] + (s[4] - p[4]) * u; vy = p[5] + (s[5] - p[5]) * u; vz = p[6] + (s[6] - p[6]) * u;
      yaw = p[7] + (s[7] - p[7]) * u;
      this.stale = false;
    } else {
      // dead reckoning from the newest sample (constant speed + yaw rate), capped, then freeze
      if (e < 0) e = 0;
      this.stale = e > MAX_EXTRAP;
      const ee = this.stale ? MAX_EXTRAP : e;
      yaw = s[7] > 6 ? 6 : s[7] < -6 ? -6 : s[7];
      const air = !(s[9] & 1);
      const th = yaw * ee, hc = Math.cos(th * 0.5), hs = Math.sin(th * 0.5);
      x = s[0] + (s[4] * hc + s[6] * hs) * ee;
      z = s[2] + (s[6] * hc - s[4] * hs) * ee;
      y = s[1] + s[5] * ee - (air ? 0.5 * GRAVITY * ee * ee : 0);
      h = s[3] + th;
      if (this.stale) { vx = vy = vz = yaw = 0; }
      else {
        const c = Math.cos(th), sn = Math.sin(th);
        vx = s[4] * c + s[6] * sn;
        vz = s[6] * c - s[4] * sn;
        vy = s[5] - (air ? GRAVITY * ee : 0);
      }
    }

    const tp = (s[9] >> 4) & 15;
    const pos = car.pos;
    let snap = !this.init || tp !== this.tp;
    this.tp = tp;
    if (!snap) {
      // predict with the owner's velocity, then bleed the remaining error off smoothly
      pos.x += vx * dt; pos.z += vz * dt;
      const ex = x - pos.x, ez = z - pos.z;
      const d = Math.hypot(ex, ez);
      if (d > SNAP_DIST) snap = true;
      else if (d > 1e-5) {
        let step = d * (1 - Math.exp(-12 * dt));
        const sp = Math.hypot(vx, vz);
        const mx = (sp > 6 ? sp : 6) * dt;       // never more than ~2x the car's own motion per frame
        if (step > mx) step = mx;
        pos.x += (ex / d) * step; pos.z += (ez / d) * step;
      }
      pos.y += (y - pos.y) * Math.min(1, 18 * dt);
      car.heading += yaw * dt;
      const dh = wrapAngle(h - car.heading);
      if (dh > 2 || dh < -2) car.heading = h;
      else car.heading += dh * (1 - Math.exp(-14 * dt));
    }
    if (snap) {
      pos.x = x; pos.y = y; pos.z = z;
      car.heading = h;
      this.init = true;
      this.snapped = true;
      if (typeof car.puppetSnap === 'function') car.puppetSnap();
    }
    car.vel.x = vx; car.vel.y = vy; car.vel.z = vz;
    car.yawRate = yaw;
    car.onGround = !!(s[9] & 1);
    car.drifting = !!(s[9] & 2) && !this.stale;
    const c = car.controls;
    if (c) { c.steer = s[8]; c.handbrake = !!(s[9] & 4); c.throttle = 0; }
    if (this.fresh) {
      // timers are applied once per packet and count down locally in between
      this.fresh = false;
      this.wallHit = this._wh;
      this._wh = 0;
      const lag = e > 0 ? e : 0;
      const spin = Math.max(0, s[10] - lag), boost = Math.max(0, s[11] - lag);
      if (this.hold > 0) {
        car.spinTime = Math.max(car.spinTime || 0, spin);
        car.boostTime = Math.max(car.boostTime || 0, boost);
      } else {
        car.spinTime = spin;
        car.boostTime = boost;
      }
    }
  }
}
