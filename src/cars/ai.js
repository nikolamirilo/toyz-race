// Toyz Race — AI driver: pure-pursuit steering on the centreline (with lane offset), corner speed from a
// precomputed curvature profile, obstacle / traffic avoidance, stuck + wrong-way recovery, mild rubber band.
import { Vector3 } from 'three';
import { maxYawRate, maxLateralAccel, brakeDecel, powerSteerFactor, wrapAngle } from './car.js';

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);

// ---- per-track cached analysis ---------------------------------------------------------------------------
const trackCache = new WeakMap();

function analyseTrack(track) {
  let info = trackCache.get(track);
  if (info) return info;
  const length = track.length || 600;
  const n = Math.max(64, Math.min(1024, Math.round(length / 2)));
  const ds = length / n;
  const head = new Float32Array(n);
  const curv = new Float32Array(n);
  const hw = new Float32Array(n);
  let rightSign = 0;
  for (let i = 0; i < n; i++) {
    const s = track.sample(i / n);
    head[i] = Math.atan2(s.tangent.x, s.tangent.z);
    hw[i] = s.halfWidth;
    // is the track's `right` really the right-hand side? (tangent x up)
    rightSign += s.right.x * -s.tangent.z + s.right.z * s.tangent.x;
  }
  rightSign = rightSign >= 0 ? 1 : -1;
  const raw = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    raw[i] = wrapAngle(head[(i + 1) % n] - head[(i + n - 1) % n]) / (2 * ds); // + = turning left
  }
  for (let i = 0; i < n; i++) { // light smoothing
    curv[i] = 0.25 * raw[(i + n - 1) % n] + 0.5 * raw[i] + 0.25 * raw[(i + 1) % n];
  }
  // obstacles / pads in track coordinates
  const obstacles = (track.obstacles || []).map((o) => {
    const p = track.project(new Vector3(o.x, 0, o.z));
    return { t: p.t, lateral: p.lateral, radius: o.radius };
  });
  const pads = (track.boostPads || []).map((o) => {
    const p = track.project(new Vector3(o.x, 0, o.z));
    return { t: p.t, lateral: p.lateral, radius: o.radius };
  });
  info = { length, n, ds, curv, hw, rightSign, obstacles, pads };
  trackCache.set(track, info);
  return info;
}

/** signed distance along the track from t0 to t1 in units, wrapped to (-L/2, L/2] */
function along(t0, t1, length) {
  let d = t1 - t0;
  d -= Math.round(d);
  return d * length;
}

let aiSeed = 1;

export class AIDriver {
  constructor(car, opts = {}) {
    this.car = car;
    this.skill = clamp(opts.skill === undefined ? 0.7 : +opts.skill, 0, 1);
    this.wantsToFire = false;
    /** set by the race: AI progress minus player progress in track lengths (+ = AI ahead) */
    this.playerProgressDelta = 0;

    const seed = aiSeed++;
    this._phase = seed * 1.913;
    this._lanePref = (((seed * 0.61803) % 1) - 0.5) * 1.4;  // -0.7..0.7 of usable half width
    this._lane = 0;
    this._time = 0;
    this._stuckTime = 0;
    this._reverseTime = 0;
    this._reverseSteer = 0;
    this._wrongTime = 0;
    this._fireCooldown = 1.5 + (seed % 5) * 0.6;
    this._laneInit = false;
    /** (extra) debug: current target speed */
    this.targetSpeed = 0;
  }

  update(dt, track, allCars) {
    const car = this.car;
    const c = car.controls;
    if (car.frozen) {
      c.throttle = 0; c.steer = 0; c.handbrake = false;
      this._stuckTime = 0; this._reverseTime = 0;
      return;
    }
    if (dt > 0.05) dt = 0.05;
    this._time += dt;
    const info = analyseTrack(track);
    const def = car.def;
    const skill = this.skill;
    const L = info.length;
    const speed = car.speed;
    const aspeed = Math.abs(speed);
    const hwHere = car.halfWidth || 8;
    if (!this._laneInit) { this._lane = car.lateral; this._laneInit = true; }

    // ---- rubber band ---------------------------------------------------------------------------------
    const rb = 1 - clamp((this.playerProgressDelta || 0) * 0.3, -0.06, 0.08);

    // ---- skill dependent limits -------------------------------------------------------------------------
    const top = car.topSpeedNow * clamp((0.8 + 0.2 * skill) * rb, 0.5, 1.02);
    const aLat = maxLateralAccel(def) * (0.55 + 0.33 * skill) * rb;
    const aBrake = brakeDecel(def) * (0.5 + 0.35 * skill);

    // ---- corner speed: scan the curvature profile ahead ---------------------------------------------------
    const n = info.n, ds = info.ds;
    const fi = car.trackT * n;
    const i0 = Math.floor(fi);
    const margin = 3 + aspeed * (0.2 - 0.1 * skill);
    const horizon = (aspeed * aspeed) / (2 * aBrake) + margin + 12;
    const steps = Math.min(n, Math.ceil(horizon / ds));
    let vTarget = top;
    let cornerSign = 0, cornerDist = 1e9;
    for (let k = 0; k <= steps; k++) {
      const idx = (i0 + k) % n;
      const kap = info.curv[idx];
      const ak = Math.abs(kap);
      if (ak < 0.004) continue;
      let v = Math.sqrt(aLat / ak);
      if (v < top) {
        // also respect the steering authority at that speed
        // (karts: assume about half throttle through the corner)
        for (let it = 0; it < 6 && ak * v > 0.85 * maxYawRate(def, v) * powerSteerFactor(def, v, 0.5); it++) v *= 0.93;
        const d = Math.max(0, k * ds - margin);
        const vNow = Math.sqrt(v * v + 2 * aBrake * d);
        if (vNow < vTarget) vTarget = vNow;
      }
      if (ak > 0.03 && cornerDist > 1e8 && k * ds < 45) { cornerDist = k * ds; cornerSign = kap > 0 ? 1 : -1; }
    }

    // ---- lane choice ------------------------------------------------------------------------------------
    const usable = Math.max(0.5, hwHere - car.radius - 0.9);
    let laneT;
    if (cornerSign !== 0) {
      // inside of the upcoming corner; "left turn" (kap>0) inside = left = -right
      laneT = -cornerSign * info.rightSign * usable * (0.3 + 0.25 * skill);
    } else {
      laneT = this._lanePref * usable + Math.sin(this._time * 0.35 + this._phase) * (1 - skill) * 1.2;
    }

    // boost pads: line up for one if it is close to the plan
    if (skill > 0.25) {
      for (let i = 0; i < info.pads.length; i++) {
        const p = info.pads[i];
        const d = along(car.trackT, p.t, L);
        if (d > 2 && d < 45 && Math.abs(p.lateral - car.lateral) < 5) { laneT = p.lateral; break; }
      }
    }

    // other cars: overtake / don't rear-end
    let blockSpeed = -1;
    let fireTarget = false, tailgater = false;
    if (allCars) {
      const lookD = 5 + aspeed * 0.55;
      for (let i = 0; i < allCars.length; i++) {
        const o = allCars[i];
        if (o === car) continue;
        const d = along(car.trackT, o.trackT, L);
        const dl = o.lateral - car.lateral;
        if (d > 0.5 && d < lookD && o.speed < speed + 2) {
          if (Math.abs(o.lateral - laneT) < 2.4) {
            // pass on the side with more room (prefer the side we are already on)
            let side = dl > 0 ? -1 : 1;
            let cand = o.lateral + side * 2.7;
            if (Math.abs(cand) > usable) { side = -side; cand = o.lateral + side * 2.7; }
            if (Math.abs(cand) > usable) cand = clamp(cand, -usable, usable);
            laneT = cand;
          }
          if (d < 4.5 && Math.abs(dl) < 1.7) blockSpeed = blockSpeed < 0 ? o.speed : Math.min(blockSpeed, o.speed);
        } else if (Math.abs(d) <= 2.4 && Math.abs(dl) < 2.6) {
          laneT += dl > 0 ? -1.0 : 1.0; // side by side: give room
        }
        if (d > 5 && d < 34 && Math.abs(dl) < 2.2) fireTarget = true;
        if (d < -1.5 && d > -9 && Math.abs(dl) < 2.5) tailgater = true;
      }
    }

    // static obstacles (highest priority)
    {
      const lookD = 12 + aspeed * 0.95;
      for (let i = 0; i < info.obstacles.length; i++) {
        const o = info.obstacles[i];
        const d = along(car.trackT, o.t, L);
        if (d < -2.5 || d > lookD) continue;
        const clear = o.radius + car.radius + 0.9;
        if (Math.abs(o.lateral - laneT) < clear) {
          const left = o.lateral - clear, right = o.lateral + clear;
          const okL = left > -usable - 0.3, okR = right < usable + 0.3;
          if (okL && okR) laneT = Math.abs(left - car.lateral) < Math.abs(right - car.lateral) ? left : right;
          else if (okL) laneT = left;
          else if (okR) laneT = right;
          else laneT = o.lateral > 0 ? -usable : usable;
        }
      }
    }
    laneT = clamp(laneT, -usable, usable);
    const laneRate = 5 + 4 * skill;
    this._lane += clamp(laneT - this._lane, -laneRate * dt, laneRate * dt);

    // ---- look-ahead target + pure pursuit ---------------------------------------------------------------
    const Ld = clamp(4.5 + aspeed * 0.32, 5, 17);
    let tl = car.trackT + Ld / L;
    tl -= Math.floor(tl);
    const s = track.sample(tl);
    const lane = clamp(this._lane, -(s.halfWidth - car.radius - 0.6), s.halfWidth - car.radius - 0.6);
    const dx = s.pos.x + s.right.x * lane - car.pos.x;
    const dz = s.pos.z + s.right.z * lane - car.pos.z;
    const err = wrapAngle(Math.atan2(dx, dz) - car.heading);
    const aerr = Math.abs(err);
    const dist = Math.hypot(dx, dz) || 1;

    let steer;
    if (aerr > 1.35) steer = err > 0 ? 1 : -1;
    else {
      const vv = Math.max(aspeed, 4);
      const yawWanted = (2 * vv * Math.sin(err)) / dist;
      steer = clamp((yawWanted / Math.max(0.3, maxYawRate(def, vv) * powerSteerFactor(def, vv, Math.max(0, car.controls.throttle)))) * 1.25, -1, 1);
    }
    steer += (1 - skill) * 0.14 * Math.sin(this._time * 2.3 + this._phase) * Math.min(1, aspeed / 10);

    // ---- speed control ----------------------------------------------------------------------------------
    if (aerr > 0.7) vTarget = Math.min(vTarget, 13 - 5 * Math.min(1, (aerr - 0.7) / 1.2));
    if (blockSpeed >= 0) vTarget = Math.min(vTarget, Math.max(6, blockSpeed + 1));
    this.targetSpeed = vTarget;
    const dv = vTarget - speed;
    let throttle = clamp(0.45 + dv * 0.5, -1, 1);
    if (throttle < 0 && speed < 5) throttle = 0;
    let handbrake = false;

    // ---- wrong-way + stuck recovery -----------------------------------------------------------------------
    if (car.spinTime > 0) { this._stuckTime = 0; this._wrongTime = 0; }
    else {
      if (aerr > 1.9) this._wrongTime += dt; else this._wrongTime = 0;
      if (aspeed < 1.3 && this._reverseTime <= 0) this._stuckTime += dt;
      else if (aspeed > 2.5) this._stuckTime = 0;

      if (this._reverseTime <= 0 && (this._stuckTime > 1.0 || (this._wrongTime > 0.35 && aspeed < 6))) {
        // back up, steering so the nose swings toward where we want to go
        this._reverseTime = this._wrongTime > 0.35 ? 1.5 : 1.1;
        if (aerr > 0.15) this._reverseSteer = err > 0 ? -1 : 1;
        else this._reverseSteer = car.lateral * info.rightSign > 0 ? -1 : 1;
        this._stuckTime = 0; this._wrongTime = 0;
      }
    }
    if (this._reverseTime > 0) {
      this._reverseTime -= dt;
      throttle = -1;
      steer = this._reverseSteer;
      if (this._reverseTime > 0.3 && aerr < 0.5 && speed < -3) this._reverseTime = 0; // pointing the right way again
    }

    c.throttle = throttle;
    c.steer = clamp(steer, -1, 1);
    c.handbrake = handbrake;

    // ---- item usage heuristic ---------------------------------------------------------------------------
    this._fireCooldown -= dt;
    if (this._fireCooldown <= 0 && this._reverseTime <= 0 && car.spinTime <= 0) {
      const straightish = aerr < 0.25;
      if ((fireTarget && straightish) || tailgater || (straightish && vTarget >= top * 0.98 && speed > top * 0.6)) {
        this.wantsToFire = true;
        this._fireCooldown = 1.2 + (1 - skill) * 3 + ((this._time * 7.3 + this._phase) % 1) * 1.5;
      } else {
        this._fireCooldown = 0.25;
      }
    }
  }
}
