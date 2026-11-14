// Item crates: one InstancedMesh for the spinning boxes + one for the glowing ground rings.
import * as THREE from 'three';
import { canvasTexture } from './particles.js';

const RESPAWN = 6;
const COLLECT_R = 2.5;
const PREDICT_R = 2.1; // client-side prediction is a little stricter than the host's test

const _m = new THREE.Matrix4();
const _p = new THREE.Vector3();
const _q = new THREE.Quaternion();
const _s = new THREE.Vector3();
const _e = new THREE.Euler();
const _qFlat = new THREE.Quaternion();

export class PickupField {
  constructor(race, spots) {
    this.race = race;
    this.replica = !!race._replica; // multiplayer client: crates follow the host's mask (setMask), no collection here
    const n = spots.length;
    this.spots = [];
    for (let i = 0; i < n; i++) {
      const v = spots[i];
      this.spots.push({ x: v.x, y: v.y || 0, z: v.z, timer: 0, scale: 1, phase: i * 1.7, off: false, pred: 0 });
    }

    const tex = (this.tex = canvasTexture(128, (ctx, S) => {
      const g = ctx.createLinearGradient(0, 0, S, S);
      g.addColorStop(0, '#ffd23f');
      g.addColorStop(0.5, '#ff7a1a');
      g.addColorStop(1, '#ff3d7f');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, S, S);
      ctx.lineWidth = 12;
      ctx.strokeStyle = '#fff6c8';
      ctx.strokeRect(6, 6, S - 12, S - 12);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 92px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.shadowColor = 'rgba(120,30,0,0.8)';
      ctx.shadowBlur = 8;
      ctx.fillText('?', S / 2, S / 2 + 6);
    }));

    this.boxGeo = new THREE.BoxGeometry(1.3, 1.3, 1.3);
    this.boxMat = new THREE.MeshStandardMaterial({
      color: tex ? 0xffffff : 0xffa41c,
      map: tex,
      emissive: tex ? 0xffffff : 0xff7a1a,
      emissiveMap: tex,
      emissiveIntensity: 0.65,
      roughness: 0.35,
      metalness: 0.1,
    });
    this.boxes = new THREE.InstancedMesh(this.boxGeo, this.boxMat, Math.max(1, n));
    this.boxes.count = n;
    this.boxes.frustumCulled = false;
    this.boxes.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    this.ringGeo = new THREE.RingGeometry(0.75, 1.25, 28);
    this.ringMat = new THREE.MeshBasicMaterial({
      color: 0xffc74a,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    this.rings = new THREE.InstancedMesh(this.ringGeo, this.ringMat, Math.max(1, n));
    this.rings.count = n;
    this.rings.frustumCulled = false;
    this.rings.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.rings.renderOrder = 5;
    _qFlat.setFromAxisAngle(new THREE.Vector3(1, 0, 0), -Math.PI / 2);

    race.root.add(this.boxes, this.rings);
    this._sparkAcc = 0;
    this.update(0, 0);
  }

  get activeCount() {
    let c = 0;
    for (const s of this.spots) if (s.timer <= 0) c++;
    return c;
  }

  /** host: taken crates as an array of 30-bit masks (bit set = crate currently gone) */
  mask() {
    const out = [0];
    for (let i = 0; i < this.spots.length; i++) {
      const w = (i / 30) | 0;
      while (out.length <= w) out.push(0);
      if (this.spots[i].timer > 0) out[w] |= 1 << (i % 30);
    }
    return out;
  }

  /** client: apply the host's mask() */
  setMask(m) {
    if (!Array.isArray(m)) return;
    for (let i = 0; i < this.spots.length; i++) {
      const w = m[(i / 30) | 0];
      this.spots[i].off = typeof w === 'number' ? !!(w & (1 << (i % 30))) : false;
    }
  }

  _updateReplica(dt) {
    const race = this.race, fx = race.fx, rnd = race.random;
    const spots = this.spots;
    // prediction: the local player's own crate vanishes immediately, the host confirms (or not) shortly after
    const st = race._pst;
    const canTake = st && !st.pup && !st.item && !st.finished && race.state !== 'countdown';
    const cp = st ? st.car.pos : null;
    for (let i = 0; i < spots.length; i++) {
      const s = spots[i];
      if (s.pred > 0) s.pred -= dt;
      if (canTake && !s.off && s.timer <= 0) {
        const dx = cp.x - s.x, dz = cp.z - s.z;
        if (dx * dx + dz * dz < PREDICT_R * PREDICT_R && Math.abs(cp.y - s.y) < 3) s.pred = 0.6;
      }
      const gone = s.off || s.pred > 0;
      if (gone && s.timer <= 0) {
        s.timer = 1;
        fx.burst(s.x, s.y + 1.1, s.z, 22, 9, 0.5, 0.7, 0.1, 1.0, 0.75, 0.25, 1, 6, 1.5, 0.5, rnd);
      } else if (!gone && s.timer > 0) {
        s.timer = 0;
        fx.burst(s.x, s.y + 1.1, s.z, 10, 4, 0.4, 0.5, 0.1, 1.0, 0.9, 0.5, 0.9, 0, 2, 0.5, rnd);
      }
    }
  }

  update(dt, time) {
    const race = this.race, fx = race.fx, rnd = race.random;
    const spots = this.spots;
    // collection
    if (this.replica) this._updateReplica(dt);
    else if (race.state !== 'countdown') {
      const S = race.states;
      for (let j = 0; j < S.length; j++) {
        const st = S[j];
        if (st.item || st.finished) continue;
        const cp = st.car.pos;
        for (let i = 0; i < spots.length; i++) {
          const s = spots[i];
          if (s.timer > 0) continue;
          const dx = cp.x - s.x, dz = cp.z - s.z;
          if (dx * dx + dz * dz < COLLECT_R * COLLECT_R && Math.abs(cp.y - s.y) < 3) {
            s.timer = RESPAWN;
            fx.burst(s.x, s.y + 1.1, s.z, 22, 9, 0.5, 0.7, 0.1, 1.0, 0.75, 0.25, 1, 6, 1.5, 0.5, rnd);
            race._givePickup(st);
            break;
          }
        }
      }
    }
    // animation
    this._sparkAcc += dt * 0.9 * spots.length;
    for (let i = 0; i < spots.length; i++) {
      const s = spots[i];
      if (s.timer > 0 && !this.replica) {
        s.timer -= dt;
        if (s.timer <= 0) {
          s.timer = 0;
          fx.burst(s.x, s.y + 1.1, s.z, 10, 4, 0.4, 0.5, 0.1, 1.0, 0.9, 0.5, 0.9, 0, 2, 0.5, rnd);
        }
      }
      const target = s.timer > 0 ? 0 : 1;
      s.scale += (target - s.scale) * Math.min(1, dt * 10);
      const sc = s.scale < 0.01 ? 0 : s.scale;
      const bob = Math.sin(time * 2.4 + s.phase) * 0.18;
      _p.set(s.x, s.y + 1.15 + bob, s.z);
      _e.set(0.5, time * 1.9 + s.phase, 0.35);
      _q.setFromEuler(_e);
      _s.set(sc, sc, sc);
      _m.compose(_p, _q, _s);
      this.boxes.setMatrixAt(i, _m);
      const rs = sc * (1 + 0.12 * Math.sin(time * 5 + s.phase));
      _p.set(s.x, s.y + 0.06, s.z);
      _s.set(rs, rs, rs);
      _m.compose(_p, _qFlat, _s);
      this.rings.setMatrixAt(i, _m);
    }
    while (this._sparkAcc >= 1 && spots.length) {
      this._sparkAcc -= 1;
      const s = spots[(rnd() * spots.length) | 0];
      if (s.timer > 0) continue;
      fx.emit(
        s.x + (rnd() - 0.5) * 1.4, s.y + 0.5 + rnd() * 1.2, s.z + (rnd() - 0.5) * 1.4,
        0, 1.2 + rnd(), 0, 0.7, 0.35, 0.05, 1.0, 0.85, 0.4, 0.9, 0, 0
      );
    }
    this.boxes.instanceMatrix.needsUpdate = true;
    this.rings.instanceMatrix.needsUpdate = true;
  }

  dispose() {
    this.race.root.remove(this.boxes, this.rings);
    this.boxes.dispose();
    this.rings.dispose();
    this.boxGeo.dispose();
    this.boxMat.dispose();
    this.ringGeo.dispose();
    this.ringMat.dispose();
    if (this.tex) this.tex.dispose();
  }
}
