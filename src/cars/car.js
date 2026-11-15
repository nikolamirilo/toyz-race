// Toyz Race — arcade car physics ("2.5D": XZ motion, ground height from the track, lateral walls).
import * as THREE from 'three';
import { getCarDef } from './defs.js';
import { createCarMesh } from './mesh.js';

export const GRAVITY = 30;
export const BOOST_TOP = 1.35;      // top speed multiplier while boosting
export const BOOST_ACCEL = 1.8;     // acceleration multiplier while boosting
export const BOOST_PAD_TIME = 1.2;
const MAX_DT = 1 / 30;
const WALL_RESTITUTION = 0.3;
const OBSTACLE_RESTITUTION = 0.4;
const TAKEOFF_KEEP = 0.8;
const TWO_PI = Math.PI * 2;

const clamp = (v, a, b) => (v < a ? a : v > b ? b : v);
export function wrapAngle(a) {
  a = (a + Math.PI) % TWO_PI;
  if (a < 0) a += TWO_PI;
  return a - Math.PI;
}

// ---- handling model helpers (shared with the AI so it knows what the car can do) ---------------------
/** max yaw rate (rad/s) available at forward speed v for a car definition */
export function maxYawRate(def, v, top = def.topSpeed) {
  const av = Math.abs(v);
  const low = av < 4.5 ? av / 4.5 : 1;                 // little authority at standstill
  let x = (av / top - 0.3) / 0.7;                      // reduced authority at high speed
  x = x < 0 ? 0 : x > 1 ? 1 : x;
  const hi = 1 - 0.4 * x * x * (3 - 2 * x);
  return def.turnRate * low * hi;
}
/** max lateral (cornering) acceleration the tyres give before the car starts to slide */
export function maxLateralAccel(def) { return 60 * def.gripFactor; }
/** braking deceleration (units/s^2) */
export function brakeDecel(def) { return 36 + 8 * def.gripFactor; }
/**
 * Karts (def.powerUndersteer): share of the steering authority that is left at forward speed v with the given
 * throttle. Flat out the front washes wide; easing off the gas brings the nose back in.
 */
export function powerSteerFactor(def, v, throttle) {
  const k = def.powerUndersteer;
  if (!k || !(throttle > 0) || !(v > 0)) return 1;
  let x = (v / def.topSpeed - 0.35) / 0.45;
  x = x < 0 ? 0 : x > 1 ? 1 : x;
  return 1 - k * throttle * x;
}

export class Car {
  constructor(carId, opts = {}) {
    this.def = getCarDef(carId);
    this.name = opts.name || this.def.name;
    this.isPlayer = !!opts.isPlayer;
    this.color = opts.color || this.def.color;
    this.mesh = createCarMesh(this.def.id, opts.color);

    this.pos = new THREE.Vector3();
    this.vel = new THREE.Vector3();
    this.heading = 0;
    this.speed = 0;              // signed forward speed
    this.radius = this.def.radius || 1.0;
    this.onGround = true;
    this.trackT = 0;
    this.lateral = 0;
    this.halfWidth = 8;          // (extra) half-width of the road at the car
    this.controls = { throttle: 0, steer: 0, handbrake: false };
    this.boostTime = 0;
    this.spinTime = 0;
    this.frozen = false;
    this.puppet = false;         // (multiplayer) true: update() runs no physics, see _updatePuppet()
    this.wallHit = 0;
    this.drifting = false;
    this.offRoad = 0;            // (wall-less tracks) how far the car centre is beyond the kerb, 0 on the road

    // extras (beyond the contract; handy for audio / camera / particles)
    this.carHit = 0;             // strongest car-vs-car impact since the last update()
    this.landed = 0;             // landing impact strength this frame (0 if none)
    this.boostPadHit = false;    // true on the frame a boost pad was triggered
    this.slip = 0;               // lateral slide speed (units/s, signed, + = sliding to the car's left)
    this.yawRate = 0;
    this.steerAngle = 0;         // smoothed steering -1..1 (what the front wheels show)
    this.airTime = 0;
    this.sideSpeed = 0;

    this._vy = 0;
    this._pitch = 0;             // chassis pitch following slope / flight path
    this._bodyRoll = 0; this._bodyPitch = 0;
    this._squash = 0; this._squashVel = 0;
    this._antX = 0; this._antXv = 0; this._antZ = 0; this._antZv = 0;
    this._wheelSpin = 0; this._rearSpin = 0;
    this._spinVis = 0; this._spinDir = 1;
    this._padIndex = -1;
    this._hasTrack = false;
    this._groundY = 0;
    const ud = this.mesh.userData;
    this._body = ud.body; this._wheels = ud.wheels; this._pivots = ud.steerPivots;
    this._antenna = ud.antenna; this._radii = ud.wheelRadii;
    this._antBaseX = this._antenna ? this._antenna.rotation.x : 0;
    this._rollGain = this.def.type === 'monster' ? 1.7 : this.def.type === 'formula' || this.def.type === 'kart' ? 0.55 : 1;
    this._syncMesh();
  }

  /** current top speed including boost (extra) */
  get topSpeedNow() { return this.def.topSpeed * (this.boostTime > 0 ? BOOST_TOP : 1); }

  placeAt(pos, heading, track) {
    this.pos.copy(pos);
    this.heading = heading;
    this.vel.set(0, 0, 0);
    this.speed = 0; this.sideSpeed = 0; this.slip = 0; this.yawRate = 0; this.steerAngle = 0;
    this._vy = 0; this.onGround = true; this.airTime = 0;
    this.boostTime = 0; this.spinTime = 0; this._spinVis = 0;
    this.wallHit = 0; this.drifting = false; this.carHit = 0; this.landed = 0;
    this._pitch = 0; this._bodyRoll = 0; this._bodyPitch = 0; this._squash = 0; this._squashVel = 0;
    this._padIndex = -1;
    if (track) {
      const p = track.project(this.pos); // global search
      this.trackT = p.t; this.lateral = p.lateral; this.halfWidth = p.halfWidth;
      this.pos.y = p.y;
      this._hasTrack = true;
    }
    this._groundY = this.pos.y;
    this._syncMesh();
  }

  applyImpulse(v) {
    this.vel.x += v.x; this.vel.z += v.z;
    if (v.y > 0.01) this.launch(v.y);
  }

  launch(vy) {
    this.onGround = false;
    this._vy = Math.max(this._vy, 0) + vy;
    this.airTime = 0;
  }

  update(dt, track) {
    this.wallHit = 0; this.landed = 0; this.boostPadHit = false;
    if (this.frozen || !(dt > 0)) {
      this.drifting = false; this.carHit = 0;
      this._syncMesh();
      return;
    }
    if (dt > MAX_DT) dt = MAX_DT;
    if (this.puppet) { this._updatePuppet(dt, track); return; }
    this.carHit = 0;
    const def = this.def;
    const c = this.controls;

    // ---- timers -------------------------------------------------------------------------------------
    const spinning = this.spinTime > 0;
    if (spinning) {
      if (this._spinVis === 0) this._spinDir = this.yawRate < 0 ? -1 : 1;
      this.spinTime = Math.max(0, this.spinTime - dt);
      this._spinVis += this._spinDir * 11 * dt;
    } else if (this._spinVis !== 0) {
      // finish the pirouette at the nearest full turn so the car ends up facing where it was going
      const target = Math.round(this._spinVis / TWO_PI + this._spinDir * 0.35) * TWO_PI;
      const step = 11 * dt;
      if (Math.abs(target - this._spinVis) <= step) this._spinVis = 0;
      else this._spinVis += Math.sign(target - this._spinVis) * step;
    }
    const boosting = this.boostTime > 0;
    if (boosting) this.boostTime = Math.max(0, this.boostTime - dt);

    let throttle = spinning ? 0 : clamp(+c.throttle || 0, -1, 1);
    const steerIn = spinning ? 0 : clamp(+c.steer || 0, -1, 1);
    const handbrake = !spinning && !!c.handbrake;
    if (boosting && throttle > -0.1) throttle = 1;

    // ---- car-frame velocity -------------------------------------------------------------------------
    const sh = Math.sin(this.heading), ch = Math.cos(this.heading);
    // forward F = (sh, 0, ch); left L = (ch, 0, -sh)
    let vf = this.vel.x * sh + this.vel.z * ch;
    let vl = this.vel.x * ch - this.vel.z * sh;
    const vfPrev = vf;

    const top = def.topSpeed * (boosting ? BOOST_TOP : 1);
    const acc = def.acceleration * (boosting ? BOOST_ACCEL : 1);
    const grounded = this.onGround || this.airTime < 0.07;

    // ---- steering -----------------------------------------------------------------------------------
    const sRate = (Math.abs(steerIn) > Math.abs(this.steerAngle) || steerIn * this.steerAngle < 0) ? 9 : 12;
    this.steerAngle += clamp(steerIn - this.steerAngle, -sRate * dt, sRate * dt);
    let yawTarget = this.steerAngle * maxYawRate(def, vf, def.topSpeed) * (vf >= 0 ? 1 : -1);
    if (grounded) yawTarget *= powerSteerFactor(def, vf, throttle);
    if (handbrake && grounded) yawTarget *= 1.3;
    if (!grounded) yawTarget *= 0.3;
    else if (this.drifting && yawTarget * this.sideSpeed < 0) {
      // drift assist: stop the nose from over-rotating into a spin once the slide angle is big
      const sp = Math.hypot(vf, vl);
      const ratio = sp > 1 ? Math.abs(vl) / sp : 0;
      const lim = handbrake ? 0.62 : 0.42;
      if (ratio > lim) yawTarget *= clamp(1 - (ratio - lim) / 0.25, 0.1, 1);
    }
    this.yawRate += (yawTarget - this.yawRate) * Math.min(1, 14 * dt);
    const dYaw = this.yawRate * dt;
    this.heading += dYaw;
    // rotating the frame under a fixed world velocity shifts velocity between the car axes
    if (dYaw !== 0) {
      const cs = Math.cos(dYaw), sn = Math.sin(dYaw);
      const f2 = vf * cs + vl * sn;
      vl = vl * cs - vf * sn;
      vf = f2;
    }

    if (grounded) {
      // ---- longitudinal --------------------------------------------------------------------------
      if (throttle > 0) {
        if (vf < -0.5) vf += brakeDecel(def) * throttle * dt;           // braking out of reverse
        else {
          const x = vf / top;
          let f = x < 0.55 ? 1 : (1 - x) / 0.45;                        // falloff toward top speed
          if (f < -1.2) f = -1.2;
          vf += acc * (f > 0 ? throttle * f : f) * dt;
        }
      } else if (throttle < 0) {
        if (vf > 0.8) vf = Math.max(0, vf + brakeDecel(def) * throttle * dt);
        else {
          const rTop = def.topSpeed * 0.42;
          const f = clamp(1 + vf / rTop, 0, 1);
          vf += acc * 0.75 * throttle * f * dt;
        }
      }
      // rolling resistance + drag (only when not on the power, so topSpeed is exact)
      const coast = 1 - Math.abs(throttle);
      let res = (1.5 + 0.22 * Math.abs(vf)) * coast;
      if (vf > top) res += (vf - top) * 1.6;                              // bleed off boost overspeed
      if (handbrake) res += 9;
      // off the road on a wall-less track: the surface drags the car down to a crawl
      if (this.offRoad > 0 && Math.abs(vf) > 7) res += (10 + 7 * this.offRoad) * (Math.abs(vf) / 14);
      if (spinning) res += 7;
      if (res > 0) {
        const dv = res * dt;
        vf = Math.abs(vf) <= dv ? 0 : vf - Math.sign(vf) * dv;
      }

      // ---- lateral grip ---------------------------------------------------------------------------
      const spd = Math.hypot(vf, vl);
      let gripRate = 15 * def.gripFactor;
      let maxLat = maxLateralAccel(def);
      if (handbrake) { gripRate *= 0.16; maxLat *= 0.32; }
      else if (spinning) { gripRate *= 0.12; maxLat *= 0.25; }
      else if (this.drifting) { gripRate *= 0.6; maxLat *= 0.85; }       // a slide, once started, lingers
      let latDec = gripRate * Math.abs(vl);
      if (latDec > maxLat) latDec = maxLat;
      const dvl = latDec * dt;
      const before2 = vf * vf + vl * vl;
      vl = Math.abs(vl) <= dvl ? 0 : vl - Math.sign(vl) * dvl;
      // arcade grip: most of the scrubbed sideways speed is redirected along the car instead of lost
      const retain = handbrake ? 0.3 : spinning ? 0 : 0.7;
      if (retain > 0 && Math.abs(vf) > 1) {
        const after2 = vf * vf + vl * vl;
        const want2 = after2 + (before2 - after2) * retain;
        vf = Math.sign(vf) * Math.sqrt(Math.max(0, want2 - vl * vl));
      }

      const slipRatio = spd > 1 ? Math.abs(vl) / spd : 0;
      if (this.drifting) this.drifting = spd > 5 && (slipRatio > 0.16 || (handbrake && spd > 7));
      else this.drifting = spd > 7 && (slipRatio > 0.3 || (handbrake && Math.abs(vf) > 7) || spinning);
    } else {
      // airborne: tiny air drag, no grip, no drive
      const k = 1 - 0.15 * dt;
      vf *= k; vl *= k;
      this.drifting = false;
    }

    // ---- back to world, integrate XZ --------------------------------------------------------------------
    const sh2 = Math.sin(this.heading), ch2 = Math.cos(this.heading);
    this.vel.x = sh2 * vf + ch2 * vl;
    this.vel.z = ch2 * vf - sh2 * vl;
    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;

    let groundY = this._groundY;
    if (track) {
      // ---- track projection (once per update) ---------------------------------------------------------
      const p = track.project(this.pos, this._hasTrack ? this.trackT : undefined);
      this._hasTrack = true;
      this.trackT = p.t; this.lateral = p.lateral; this.halfWidth = p.halfWidth;
      groundY = this._groundY = p.y;
      this.offRoad = track.runoffBand ? Math.max(0, Math.abs(p.lateral) - (p.halfWidth - track.runoffBand)) : 0;

      // ---- walls --------------------------------------------------------------------------------------
      const lim = Math.max(0.2, p.halfWidth - this.radius);
      if (this.lateral > lim || this.lateral < -lim) {
        const side = this.lateral > 0 ? 1 : -1;
        const s = track.sample(this.trackT);
        const nx = s.right.x * side, nz = s.right.z * side;     // outward wall normal
        const over = Math.abs(this.lateral) - lim;
        this.pos.x -= nx * over; this.pos.z -= nz * over;
        this.lateral = side * lim;
        const vn = this.vel.x * nx + this.vel.z * nz;
        if (vn > 0) {
          // remove outward velocity with a small bounce, keep most of the tangential speed
          const keep = 1 - (0.1 + (def.wallScrub || 0)) * Math.min(1, vn / 8);
          let tx = this.vel.x - nx * vn, tz = this.vel.z - nz * vn;
          tx *= keep; tz *= keep;
          const bounce = vn * WALL_RESTITUTION + Math.min(vn, 1.0);
          this.vel.x = tx - nx * bounce; this.vel.z = tz - nz * bounce;
          if (vn > 1.2) this.wallHit = vn;
          // steer the nose along the wall so the car slides instead of grinding into it
          const fDotN = sh2 * nx + ch2 * nz;
          if (fDotN > 0.05 && vf > 2) {
            const tl = Math.hypot(tx, tz);
            if (tl > 1) {
              const want = Math.atan2(tx, tz);
              const d = wrapAngle(want - this.heading);
              if (Math.abs(d) < 1.6) this.heading += d * Math.min(1, (3 + vn * 0.6) * dt);
            }
          }
        }
      }

      // ---- circular obstacles -------------------------------------------------------------------------
      const obs = track.obstacles;
      if (obs) {
        for (let i = 0; i < obs.length; i++) {
          const o = obs[i];
          const dx = this.pos.x - o.x, dz = this.pos.z - o.z;
          const minD = o.radius + this.radius * 0.8;
          const d2 = dx * dx + dz * dz;
          if (d2 < minD * minD && this.pos.y - groundY < 1.2) {
            let d = Math.sqrt(d2), nx, nz;
            if (d < 1e-4) { nx = -sh2; nz = -ch2; d = 0; } else { nx = dx / d; nz = dz / d; }
            this.pos.x += nx * (minD - d); this.pos.z += nz * (minD - d);
            const vn = this.vel.x * nx + this.vel.z * nz;
            if (vn < 0) {
              const j = -vn * (1 + OBSTACLE_RESTITUTION) + 0.8;
              this.vel.x += nx * j; this.vel.z += nz * j;
              this.vel.x *= 0.94; this.vel.z *= 0.94;
              if (-vn > 1.2 && -vn > this.wallHit) this.wallHit = -vn;
            }
            // Deflect around the obstacle so a head-on hit never pins the car in place.
            const fx = Math.sin(this.heading), fz = Math.cos(this.heading);
            if (fx * nx + fz * nz < -0.2) {
              const side = (fx * nz - fz * nx) >= 0 ? 1 : -1;
              this.vel.x += nz * side * 1.6; this.vel.z += -nx * side * 1.6;
            }
          }
        }
      }

      // ---- boost pads (trigger once on entry) ---------------------------------------------------------
      const pads = track.boostPads;
      if (pads) {
        let inside = -1;
        if (this.pos.y - groundY < 0.6) {
          for (let i = 0; i < pads.length; i++) {
            const o = pads[i];
            const dx = this.pos.x - o.x, dz = this.pos.z - o.z;
            const r = o.radius + 0.4;
            if (dx * dx + dz * dz < r * r) { inside = i; break; }
          }
        }
        if (inside >= 0 && inside !== this._padIndex) {
          if (this.boostTime < BOOST_PAD_TIME) this.boostTime = BOOST_PAD_TIME;
          this.boostPadHit = true;
        }
        this._padIndex = inside;
      }
    }

    // ---- vertical ---------------------------------------------------------------------------------------
    if (this.onGround) {
      const vyG = (groundY - this.pos.y) / dt;                 // vertical speed needed to follow the road
      const freeY = this.pos.y + this._vy * dt - 0.5 * GRAVITY * dt * dt;
      if (freeY > groundY + 0.5 * GRAVITY * dt * dt && this._vy > vyG) {
        // the road drops away faster than the car can fall: take off
        this.onGround = false; this.airTime = 0;
        this._vy *= TAKEOFF_KEEP;                              // toy-sized hops, not moon jumps
        this.pos.y = Math.max(groundY, this.pos.y + this._vy * dt); this._vy -= GRAVITY * dt;
      } else {
        this.pos.y = groundY;
        this._vy = clamp(vyG, -25, 25);
        this.airTime = 0;
      }
    } else {
      this.airTime += dt;
      this._vy -= GRAVITY * dt;
      this.pos.y += this._vy * dt;
      if (this.pos.y <= groundY) {
        this.pos.y = groundY;
        this.onGround = true;
        const impact = -this._vy;
        if (impact > 3 && this.airTime > 0.08) {
          this.landed = impact;
          this._squashVel -= Math.min(impact, 18) * 0.11;
        }
        if (this._vy > 0) this._vy = 0;
      }
    }
    this.vel.y = this.onGround ? 0 : this._vy;

    // ---- derived state ------------------------------------------------------------------------------------
    const sh3 = Math.sin(this.heading), ch3 = Math.cos(this.heading);
    this.speed = this.vel.x * sh3 + this.vel.z * ch3;
    this.sideSpeed = this.vel.x * ch3 - this.vel.z * sh3;
    this.slip = this.sideSpeed;

    this._animate(dt, (vf - vfPrev) / dt, handbrake);
    this._syncMesh();
  }

  // ---- multiplayer puppet ---------------------------------------------------------------------------------
  /**
   * Externally driven car (`car.puppet = true`): the race writes pos / heading / vel / yawRate / onGround /
   * drifting / controls.steer / controls.handbrake / spinTime / boostTime from network state before calling
   * update(). No physics here: only timers, track projection, derived values and the visuals (wheel spin,
   * steering, spin-out pirouette, body roll, chassis pitch). Setting `puppet = false` hands the car back to
   * the normal physics seamlessly.
   */
  _updatePuppet(dt, track) {
    this.carHit = 0;
    if (this.spinTime > 0) {
      if (this._spinVis === 0) this._spinDir = this.yawRate < 0 ? -1 : 1;
      this.spinTime = Math.max(0, this.spinTime - dt);
      this._spinVis += this._spinDir * 11 * dt;
    } else if (this._spinVis !== 0) {
      const target = Math.round(this._spinVis / TWO_PI + this._spinDir * 0.35) * TWO_PI;
      const step = 11 * dt;
      if (Math.abs(target - this._spinVis) <= step) this._spinVis = 0;
      else this._spinVis += Math.sign(target - this._spinVis) * step;
    }
    if (this.boostTime > 0) this.boostTime = Math.max(0, this.boostTime - dt);
    const c = this.controls;
    const steerIn = this.spinTime > 0 ? 0 : clamp(+c.steer || 0, -1, 1);
    this.steerAngle += clamp(steerIn - this.steerAngle, -12 * dt, 12 * dt);

    if (track) {
      const p = track.project(this.pos, this._hasTrack ? this.trackT : undefined);
      this._hasTrack = true;
      this.trackT = p.t; this.lateral = p.lateral; this.halfWidth = p.halfWidth;
      this._groundY = p.y;
      if (this.onGround || this.pos.y < p.y) this.pos.y = p.y;   // stay glued to the local road surface
    }
    const y = this.pos.y;
    const vy = this._pupY === undefined ? 0 : clamp((y - this._pupY) / dt, -25, 25);
    this._pupY = y;
    if (this.onGround) { this._vy += (vy - this._vy) * Math.min(1, 12 * dt); this.airTime = 0; }
    else { this._vy = Number.isFinite(this.vel.y) ? this.vel.y : vy; this.airTime += dt; }

    const sh = Math.sin(this.heading), ch = Math.cos(this.heading);
    const prev = this.speed;
    this.speed = this.vel.x * sh + this.vel.z * ch;
    this.sideSpeed = this.vel.x * ch - this.vel.z * sh;
    this.slip = this.sideSpeed;
    this._animate(dt, clamp((this.speed - prev) / dt, -80, 80), !!c.handbrake);
    this._syncMesh();
  }

  /** (multiplayer) call after teleporting a puppet so the next update does a global track search */
  puppetSnap() { this._hasTrack = false; this._pupY = undefined; }

  // ---- visuals ------------------------------------------------------------------------------------------
  _animate(dt, ax, handbrake) {
    const vf = this.speed;
    // chassis pitch: follow the slope on the ground, the flight path in the air
    let pitchT = this._pitch;
    if (this.onGround) {
      if (Math.abs(vf) > 2) pitchT = Math.atan2(this._vy, Math.abs(vf)) * (vf > 0 ? 1 : -1);
    } else {
      pitchT = clamp(Math.atan2(this._vy, Math.max(6, Math.abs(vf))) * 0.55, -0.45, 0.45);
    }
    pitchT = clamp(pitchT, -0.5, 0.5);
    this._pitch += (pitchT - this._pitch) * Math.min(1, (this.onGround ? 10 : 5) * dt);

    // body roll (lean out of the corner) and pitch (squat / dive)
    const latAcc = this.onGround ? this.yawRate * vf - this.slip * 2.0 : 0;
    const rollT = clamp(latAcc * 0.0035 * this._rollGain, -0.2, 0.2);
    const pitchB = clamp(-ax * 0.0025 * this._rollGain, -0.1, 0.12);
    const k = Math.min(1, 9 * dt);
    this._bodyRoll += (rollT - this._bodyRoll) * k;
    this._bodyPitch += (pitchB - this._bodyPitch) * k;

    // landing squash spring
    this._squashVel += (-260 * this._squash - 16 * this._squashVel) * dt;
    this._squash = clamp(this._squash + this._squashVel * dt, -0.14, 0.07);

    // whippy antenna
    const axc = clamp(ax, -60, 60);
    this._antXv += (-140 * this._antX - 7 * this._antXv - axc * 0.9) * dt;
    this._antX = clamp(this._antX + this._antXv * dt, -0.7, 0.7);
    this._antZv += (-140 * this._antZ - 7 * this._antZv + clamp(latAcc, -70, 70) * 0.6) * dt;
    this._antZ = clamp(this._antZ + this._antZv * dt, -0.7, 0.7);

    // wheels
    this._wheelSpin += vf * dt;
    if (!(handbrake && this.onGround)) this._rearSpin += vf * dt;
  }

  _syncMesh() {
    const m = this.mesh;
    m.position.copy(this.pos);
    m.rotation.set(-this._pitch, this.heading + this._spinVis, 0, 'YXZ');
    const body = this._body;
    if (body) {
      body.rotation.set(this._bodyPitch, 0, this._bodyRoll);
      body.position.y = this._squash;
    }
    const w = this._wheels;
    if (w) {
      const r = this._radii;
      w[0].rotation.x = this._wheelSpin / r[0];
      w[1].rotation.x = this._wheelSpin / r[1];
      w[2].rotation.x = this._rearSpin / r[2];
      w[3].rotation.x = this._rearSpin / r[3];
      const sa = this.steerAngle * 0.5;
      this._pivots[0].rotation.y = sa;
      this._pivots[1].rotation.y = sa;
    }
    if (this._antenna) {
      this._antenna.rotation.x = this._antBaseX + this._antX;
      this._antenna.rotation.z = this._antZ;
    }
  }
}
