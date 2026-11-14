// Item behaviour + visuals: rockets, marbles, goo puddles, zap rings, bubble shields, turbo,
// tow beams, shrink storms, pogo hops.
import * as THREE from 'three';
import { ITEM_TUNING as T } from './items.js';
import { canvasTexture } from './particles.js';

const TAU = Math.PI * 2;
const _v = new THREE.Vector3();
const _axis = new THREE.Vector3();

function wrapAngle(a) {
  while (a > Math.PI) a -= TAU;
  while (a < -Math.PI) a += TAU;
  return a;
}

export class Weapons {
  constructor(race) {
    this.race = race;
    this.replica = !!race._replica; // multiplayer client: visuals only, driven by host snapshots (see sync())
    this.rockets = [];
    this.marbles = [];
    this.puddles = [];
    this.pulses = [];
    this.rings = [];  // pogo landing shock rings (visual)
    this._res = []; // shared disposables

    const keep = (x) => {
      if (x) this._res.push(x);
      return x;
    };

    // --- rocket (points +Z) ---
    const body = new THREE.CylinderGeometry(0.17, 0.17, 0.9, 10);
    body.rotateX(Math.PI / 2);
    const nose = new THREE.ConeGeometry(0.2, 0.42, 10);
    nose.rotateX(Math.PI / 2);
    nose.translate(0, 0, 0.66);
    const stick = new THREE.CylinderGeometry(0.035, 0.035, 1.5, 5);
    stick.rotateX(Math.PI / 2);
    stick.translate(0.16, -0.05, -0.9);
    const fin = new THREE.BoxGeometry(0.5, 0.04, 0.26);
    fin.translate(0, 0, -0.4);
    this.rocketGeo = { body: keep(body), nose: keep(nose), stick: keep(stick), fin: keep(fin) };
    this.rocketMat = {
      body: keep(new THREE.MeshStandardMaterial({ color: 0xf2f2f2, roughness: 0.4, emissive: 0x333333 })),
      nose: keep(new THREE.MeshStandardMaterial({ color: 0xff3344, roughness: 0.35, emissive: 0x661018 })),
      stick: keep(new THREE.MeshStandardMaterial({ color: 0xc9a26b, roughness: 0.8 })),
    };
    this.glowTex = keep(
      canvasTexture(64, (ctx, S) => {
        const g = ctx.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2);
        g.addColorStop(0, 'rgba(255,255,255,1)');
        g.addColorStop(0.3, 'rgba(255,220,140,0.7)');
        g.addColorStop(1, 'rgba(255,120,20,0)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, S, S);
      })
    );
    this.glowMat = keep(
      new THREE.SpriteMaterial({
        map: this.glowTex,
        color: 0xffc070,
        transparent: true,
        opacity: this.glowTex ? 0.9 : 0.0,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );

    // --- marble ---
    this.marbleGeo = keep(new THREE.SphereGeometry(T.marble.radius, 20, 14));
    this.marbleTex = keep(
      canvasTexture(128, (ctx, S) => {
        ctx.fillStyle = '#bfe9ff';
        ctx.fillRect(0, 0, S, S);
        const cols = ['#2f6bff', '#ff4fa3', '#ffe14a', '#ffffff'];
        for (let i = 0; i < 4; i++) {
          ctx.strokeStyle = cols[i];
          ctx.lineWidth = 12;
          ctx.beginPath();
          for (let x = 0; x <= S; x += 4) {
            const y = S * (0.2 + i * 0.2) + Math.sin((x / S) * TAU * 2 + i) * 14;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      })
    );
    this.marbleMat = keep(
      new THREE.MeshStandardMaterial({
        color: this.marbleTex ? 0xffffff : 0x7fd0ff,
        map: this.marbleTex,
        emissive: 0x2244cc,
        emissiveIntensity: 0.45,
        roughness: 0.12,
        metalness: 0.25,
      })
    );

    // --- goo puddle (unit radius, flat, wobbly edge) ---
    const goo = new THREE.CircleGeometry(1, 22);
    const gp = goo.attributes.position;
    for (let i = 1; i < gp.count; i++) {
      const a = Math.atan2(gp.getY(i), gp.getX(i));
      const k = 1 + 0.16 * Math.sin(a * 3 + 0.6) + 0.1 * Math.sin(a * 7 + 2.0);
      gp.setXY(i, gp.getX(i) * k, gp.getY(i) * k);
    }
    goo.rotateX(-Math.PI / 2);
    this.gooGeo = keep(goo);
    this.gooMat = keep(
      new THREE.MeshStandardMaterial({
        color: 0x86f03c,
        emissive: 0x2c7a00,
        emissiveIntensity: 0.6,
        roughness: 0.15,
        metalness: 0.0,
        transparent: true,
        opacity: 0.92,
        polygonOffset: true,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
      })
    );

    // --- zap ring (unit radius) ---
    const ring = new THREE.RingGeometry(0.8, 1, 48);
    ring.rotateX(-Math.PI / 2);
    this.ringGeo = keep(ring);

    // --- shield bubble ---
    this.shieldGeo = keep(new THREE.SphereGeometry(1.55, 18, 12));
    this.shieldMat = keep(
      new THREE.MeshBasicMaterial({
        color: 0x7fe9ff,
        transparent: true,
        opacity: 0.28,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
    );

    // --- tow beam (unit length along +Z, from the origin)
    const beam = new THREE.CylinderGeometry(0.09, 0.09, 1, 6, 1, true);
    beam.rotateX(Math.PI / 2);
    beam.translate(0, 0, 0.5);
    this.beamGeo = keep(beam);
    this.beamMat = keep(
      new THREE.MeshBasicMaterial({
        color: 0xff6ad5,
        transparent: true,
        opacity: 0.85,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        side: THREE.DoubleSide,
      })
    );

    // --- storm cloud (three puffs sharing one sphere)
    this.cloudGeo = keep(new THREE.SphereGeometry(0.5, 10, 7));
    this.cloudMat = keep(new THREE.MeshStandardMaterial({ color: 0x5b6075, emissive: 0x23263a, roughness: 0.95 }));
  }

  // ------------------------------------------------------------------ use
  use(st, id) {
    switch (id) {
      case 'rocket': this._fireRocket(st); break;
      case 'turbo': this._turbo(st); break;
      case 'glue': this._dropGoo(st); break;
      case 'pulse': this._pulse(st); break;
      case 'marble': this._rollMarble(st); break;
      case 'shield': this._shield(st); break;
      case 'zaptow': this._tow(st); break;
      case 'shockcloud': this._storm(st); break;
      case 'pogo': this._pogo(st); break;
    }
  }

  _turbo(st, time = T.turbo.boost) {
    const car = st.car;
    car.boostTime = Math.max(car.boostTime || 0, time);
    st.wasBoosting = true;
    // remote human: the owner simulates the car, so the boost itself travels as an effect message
    if (st.pup && this.race._net) this.race._net.effect(st, 'turbo', 0, 0, 0, 0, 0, time);
    this.race._boostBurst(st);
    this.race._emit('boost', car);
  }

  _shield(st, time = T.shield.time, quiet = false) {
    st.shieldTime = time;
    if (!st.shieldMesh) {
      st.shieldMesh = new THREE.Mesh(this.shieldGeo, this.shieldMat);
      st.shieldMesh.renderOrder = 8;
      this.race.root.add(st.shieldMesh);
    }
    st.shieldMesh.visible = true;
    if (quiet) return;
    const p = st.car.pos;
    this.race.fx.burst(p.x, p.y + 0.6, p.z, 16, 5, 0.45, 0.5, 0.1, 0.5, 0.9, 1.0, 0.9, 0, 2, 0.5, this.race.random);
  }

  _fireRocket(st) {
    const race = this.race, car = st.car;
    const h = car.heading, dx = Math.sin(h), dz = Math.cos(h);
    const r = this._spawnRocket(++race._nextId, car.pos.x + dx * 1.9, car.pos.y + 0.75, car.pos.z + dz * 1.9, h,
      Math.max(52, Math.max(0, car.speed || 0) + 30));
    r.owner = st;
    r.target = race._targetAhead(st, 0.35);
    r.t = car.trackT;
  }

  _spawnRocket(id, x, y, z, ang, speed) {
    const g = new THREE.Group();
    g.add(
      new THREE.Mesh(this.rocketGeo.body, this.rocketMat.body),
      new THREE.Mesh(this.rocketGeo.nose, this.rocketMat.nose),
      new THREE.Mesh(this.rocketGeo.stick, this.rocketMat.stick),
      new THREE.Mesh(this.rocketGeo.fin, this.rocketMat.nose)
    );
    const glow = new THREE.Sprite(this.glowMat);
    glow.scale.set(1.6, 1.6, 1);
    glow.position.z = -0.6;
    g.add(glow);
    const r = {
      id, owner: null, target: null, mesh: g,
      pos: new THREE.Vector3(x, y, z),
      ang, speed,
      life: T.rocket.life,
      t: undefined,
      age: 0,
      net: null, // replica: last host sample [id, x, y, z, ang, speed]
      nt: 0,     //          and its host time stamp
    };
    g.position.copy(r.pos);
    g.rotation.y = ang;
    this.race.root.add(g);
    this.rockets.push(r);
    return r;
  }

  _rollMarble(st) {
    const race = this.race, car = st.car;
    const h = car.heading, dx = Math.sin(h), dz = Math.cos(h);
    const m = this._spawnMarble(++race._nextId, car.pos.x + dx * 2.2, car.pos.y + T.marble.radius, car.pos.z + dz * 2.2,
      dx, dz, Math.max(T.marble.speed, Math.max(0, car.speed || 0) + 16));
    m.owner = st;
    m.t = car.trackT;
  }

  _spawnMarble(id, x, y, z, dx, dz, speed) {
    const mesh = new THREE.Mesh(this.marbleGeo, this.marbleMat);
    mesh.castShadow = true;
    const m = {
      id, owner: null, mesh,
      pos: new THREE.Vector3(x, y, z),
      dx, dz, speed,
      life: T.marble.life,
      t: undefined,
      age: 0,
      net: null, nt: 0,
    };
    mesh.position.copy(m.pos);
    this.race.root.add(mesh);
    this.marbles.push(m);
    return m;
  }

  _dropGoo(st) {
    const race = this.race, car = st.car;
    const h = car.heading;
    const x = car.pos.x - Math.sin(h) * 2.6, z = car.pos.z - Math.cos(h) * 2.6;
    _v.set(x, car.pos.y, z);
    const pr = race.track.project(_v, car.trackT);
    const y = pr && Number.isFinite(pr.y) ? pr.y : car.pos.y;
    this._spawnPuddle(++race._nextId, x, y, z).owner = st;
  }

  _spawnPuddle(id, x, y, z) {
    const race = this.race;
    const mesh = new THREE.Mesh(this.gooGeo, this.gooMat);
    mesh.position.set(x, y + 0.07, z);
    mesh.rotation.y = race.random() * TAU;
    mesh.scale.setScalar(0.01);
    mesh.renderOrder = 2;
    race.root.add(mesh);
    const p = { id, owner: null, mesh, x, y, z, life: this.replica ? Infinity : T.glue.life, age: 0, radius: T.glue.radius, dying: 0 };
    this.puddles.push(p);
    race.fx.burst(x, y + 0.3, z, 10, 4, 0.4, 0.5, 0.15, 0.5, 1.0, 0.25, 0.9, 12, 1, 0.6, race.random);
    return p;
  }

  _pulse(st) {
    const race = this.race;
    const mat = new THREE.MeshBasicMaterial({
      color: 0x9fd8ff,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(this.ringGeo, mat);
    mesh.renderOrder = 9;
    mesh.scale.setScalar(0.1);
    race.root.add(mesh);
    this.pulses.push({ owner: st, mesh, mat, age: 0, hit: new Uint8Array(race.states.length) });
    const p = st.car.pos;
    race.fx.burst(p.x, p.y + 0.5, p.z, 40, 22, 0.4, 0.55, 0.1, 0.6, 0.85, 1.0, 1, 0, 3, 0.15, race.random);
  }

  // ------------------------------------------------------------ tow beam
  /** nearest car ahead on the road within the beam's range (lapped cars count), or null */
  _towTarget(st) {
    const race = this.race, S = race.states, Z = T.zaptow;
    const len = race.track.length || 500;
    const p = st.car.pos, far = Z.range + 10;
    let best = null, bd = Z.range / len;
    for (let i = 0; i < S.length; i++) {
      const o = S[i];
      if (o === st || o.finished) continue;
      let d = (o.progress - st.progress) % 1;
      if (d < 0) d += 1;
      if (d >= bd) continue;
      const dx = o.car.pos.x - p.x, dz = o.car.pos.z - p.z;
      if (dx * dx + dz * dz > far * far) continue;
      bd = d; best = o;
    }
    return best;
  }

  _tow(st) {
    const race = this.race, Z = T.zaptow, p = st.car.pos;
    const tg = this._towTarget(st);
    if (!tg) {
      // nobody in reach: the magnet fizzles into a small kick so the item is not a dud
      race.fx.burst(p.x, p.y + 0.6, p.z, 14, 6, 0.4, 0.4, 0.08, 1.0, 0.45, 0.85, 0.9, 0, 2, 0.5, race.random);
      this._turbo(st, Z.fizzleBoost);
      return;
    }
    if (race._slowHit(tg, 'zaptow', Z.time, Z.slow, false) === 2) return; // popped a shield instead
    this._latch(st, tg, Z.time);
    race._emit('tow', st.car, tg.car, Z.time);
  }

  /** beam from `st` to `tg` for `time` seconds (also called on clients from the host's tow event) */
  _latch(st, tg, time) {
    if (!tg || tg === st || !(time > 0)) return;
    st.towTarget = tg;
    st.towTime = Math.min(T.zaptow.time, time);
    if (!st.towMesh) {
      st.towMesh = new THREE.Mesh(this.beamGeo, this.beamMat);
      st.towMesh.renderOrder = 9;
      st.towMesh.frustumCulled = false;
      this.race.root.add(st.towMesh);
    }
    this._beam(st, 0);
    const a = st.car.pos, b = tg.car.pos, fx = this.race.fx, rnd = this.race.random;
    fx.burst(a.x, a.y + 0.6, a.z, 10, 5, 0.35, 0.4, 0.08, 1.0, 0.45, 0.85, 1, 0, 2, 0.5, rnd);
    fx.burst(b.x, b.y + 0.6, b.z, 10, 5, 0.35, 0.4, 0.08, 0.5, 0.75, 1.0, 1, 0, 2, 0.5, rnd);
  }

  _unlatch(st) {
    st.towTarget = null;
    st.towTime = 0;
    if (st.towMesh) st.towMesh.visible = false;
  }

  _beam(st, time) {
    const m = st.towMesh, a = st.car.pos, b = st.towTarget.car.pos;
    const dx = b.x - a.x, dy = b.y - a.y, dz = b.z - a.z;
    const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (!(d > 0.2)) { m.visible = false; return d; }
    m.visible = true;
    m.position.set(a.x, a.y + 0.55, a.z);
    m.lookAt(b.x, b.y + 0.55, b.z);
    const w = 1 + 0.35 * Math.sin(time * 43 + st.index);
    m.scale.set(w, w, d);
    return d;
  }

  // -------------------------------------------------------------- storm
  _storm(st) {
    const race = this.race, S = race.states, Z = T.shockcloud;
    this._stormFx(st);
    for (let i = 0; i < S.length; i++) {
      const o = S[i];
      if (o === st || o.finished || o.position >= st.position) continue; // only the cars in front
      race._slowHit(o, 'shockcloud', Z.time, Z.slow, true);
    }
  }

  _stormFx(st) {
    const p = st.car.pos, race = this.race;
    race.smoke.burst(p.x, p.y + 1.2, p.z, 10, 3, 0.9, 0.8, 2.4, 0.4, 0.42, 0.55, 0.5, -3, 1.5, 0.9, race.random);
    race.fx.burst(p.x, p.y + 1.4, p.z, 18, 9, 0.4, 0.4, 0.06, 1.0, 0.95, 0.4, 1, 0, 2, 0.9, race.random);
  }

  /** shrink visual (mesh scale + cloud) for `time` seconds; the speed cap is st.slowTime / st.slowFactor */
  _shrink(st, time) {
    st.shrinkTime = Math.min(T.shockcloud.time, time);
    if (!st.cloudMesh) {
      const g = new THREE.Group();
      const a = new THREE.Mesh(this.cloudGeo, this.cloudMat);
      const b = new THREE.Mesh(this.cloudGeo, this.cloudMat);
      const c = new THREE.Mesh(this.cloudGeo, this.cloudMat);
      a.scale.set(1.5, 0.8, 1.1);
      b.position.set(0.55, 0.12, 0.1); b.scale.set(1.0, 0.75, 0.9);
      c.position.set(-0.55, 0.08, -0.1); c.scale.set(1.1, 0.7, 0.9);
      g.add(a, b, c);
      st.cloudMesh = g;
      this.race.root.add(g);
    }
    st.cloudMesh.visible = true;
  }

  // --------------------------------------------------------------- pogo
  _pogo(st) {
    const race = this.race, car = st.car, P = T.pogo;
    if (st.pup && race._net) race._net.effect(st, 'pogo', 0, P.launch, 0, 0, 0, 0, 0, 0, P.kick); // the owner hops
    else {
      car.launch(P.launch);
      car.applyImpulse(_v.set(Math.sin(car.heading) * P.kick, 0, Math.cos(car.heading) * P.kick));
    }
    this._pogoArm(st);
  }

  /** take-off puff + watch this car for its landing (host and clients) */
  _pogoArm(st) {
    const p = st.car.pos, race = this.race;
    st.pogo = 1;
    st.pogoT = 0;
    race.fx.burst(p.x, p.y + 0.2, p.z, 16, 7, 0.35, 0.45, 0.08, 1.0, 0.8, 0.3, 1, 14, 1, 0.2, race.random);
    race.smoke.burst(p.x, p.y + 0.2, p.z, 6, 3, 0.6, 0.6, 1.8, 0.85, 0.85, 0.85, 0.35, 0, 1.5, 0.2, race.random);
  }

  _pogoLand(st) {
    const race = this.race, S = race.states, P = T.pogo, p = st.car.pos;
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffd76a,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(this.ringGeo, mat);
    mesh.renderOrder = 9;
    mesh.position.set(p.x, p.y + 0.2, p.z);
    mesh.scale.setScalar(0.1);
    race.root.add(mesh);
    this.rings.push({ mesh, mat, age: 0 });
    race.smoke.burst(p.x, p.y + 0.2, p.z, 10, 5, 0.7, 0.6, 2.0, 0.8, 0.8, 0.8, 0.4, 0, 2, 0.15, race.random);
    race._emit('land', st.car, 'pogo');
    if (this.replica) return; // hits are decided by the host
    for (let i = 0; i < S.length; i++) {
      const o = S[i];
      if (o === st) continue;
      const cp = o.car.pos, cx = cp.x - p.x, cz = cp.z - p.z;
      const d = Math.hypot(cx, cz);
      if (d < P.radius + (o.car.radius || 1) && Math.abs(cp.y - p.y) < 2) {
        const inv = d > 1e-3 ? 1 / d : 0;
        race._hit(o, 'pogo', 0, P.hop, cx * inv * P.nudge, cz * inv * P.nudge); // a shove, no spin
      }
    }
  }

  /** per-car status: slow / shrink timers + scale + cloud, tow beam, pogo landing watch */
  _updateStatus(dt, time) {
    const race = this.race, S = race.states, fx = race.fx, rnd = race.random;
    const Z = T.zaptow, small = T.shockcloud.scale;
    for (let j = 0; j < S.length; j++) {
      const st = S[j], car = st.car, p = car.pos;
      if (st.slowTime > 0) st.slowTime -= dt;
      if (st.slowImmune > 0) st.slowImmune -= dt;

      // --- shrink: mesh scale + cloud
      let want = 1;
      if (st.shrinkTime > 0) {
        st.shrinkTime -= dt;
        if (st.shrinkTime > 0) want = small;
      }
      if (st.scaleVis !== want) {
        st.scaleVis += (want - st.scaleVis) * Math.min(1, 12 * dt);
        if (Math.abs(want - st.scaleVis) < 0.004) st.scaleVis = want;
        if (car.mesh) car.mesh.scale.setScalar(st.scaleVis);
      }
      const cl = st.cloudMesh;
      if (cl) {
        if (st.shrinkTime > 0) {
          cl.visible = true;
          cl.position.set(p.x, p.y + 1.55 + 0.08 * Math.sin(time * 6 + j), p.z);
          cl.rotation.y = time * 0.8 + j;
          st.cloudAcc += dt * 16;
          while (st.cloudAcc >= 1) { // little lightning sparks raining on the car
            st.cloudAcc -= 1;
            fx.emit(p.x + (rnd() - 0.5) * 1.2, p.y + 1.4, p.z + (rnd() - 0.5) * 1.2, (rnd() - 0.5) * 2, -3 - rnd() * 4, (rnd() - 0.5) * 2,
              0.22, 0.3, 0.05, 1.0, 0.95, 0.35, 1, 0, 0);
          }
        } else if (cl.visible) cl.visible = false;
      }

      // --- tow beam
      const tg = st.towTarget;
      if (tg) {
        st.towTime -= dt;
        let d = 0;
        if (st.towTime > 0) d = this._beam(st, time);
        // the host decides when the beam snaps (too far / somebody finished); clients follow its state
        if (!(st.towTime > 0) || (!this.replica && (d > Z.snap || tg.finished || st.finished))) this._unlatch(st);
        else if (rnd() < 0.5) {
          const u = rnd(), q = tg.car.pos;
          fx.emit(p.x + (q.x - p.x) * u, p.y + 0.55 + (q.y - p.y) * u, p.z + (q.z - p.z) * u, (rnd() - 0.5) * 3, rnd() * 2, (rnd() - 0.5) * 3,
            0.2, 0.3, 0.05, u < 0.5 ? 1.0 : 0.5, u < 0.5 ? 0.45 : 0.75, u < 0.5 ? 0.85 : 1.0, 1, 0, 0);
        }
      }

      // --- pogo: wait for take-off, then for the landing
      if (st.pogo) {
        st.pogoT += dt;
        if (st.pogo === 1) { if (car.onGround === false) st.pogo = 2; }
        else if (car.onGround !== false && st.pogoT > 0.15) { st.pogo = 0; this._pogoLand(st); }
        if (st.pogoT > 3) st.pogo = 0;
      }
    }

    // --- landing rings
    const P = T.pogo;
    for (let i = this.rings.length - 1; i >= 0; i--) {
      const r = this.rings[i];
      r.age += dt;
      const k = Math.min(1, r.age / P.ring);
      const rad = P.radius * (1 - (1 - k) * (1 - k));
      r.mesh.scale.set(rad, 1, rad);
      r.mat.opacity = 0.9 * (1 - k * k);
      if (k >= 1) {
        race.root.remove(r.mesh);
        r.mat.dispose();
        this.rings.splice(i, 1);
      }
    }
  }

  // --------------------------------------------------------------- update
  update(dt, time) {
    if (this.replica) this._updateReplica(dt);
    else {
      this._updateRockets(dt);
      this._updateMarbles(dt);
    }
    this._updatePuddles(dt, time);
    this._updatePulses(dt);
    this._updateShields(dt, time);
    this._updateStatus(dt, time);
  }

  // ------------------------------------------------------- replica (multiplayer client)
  /**
   * Feed the projectile lists of a host snapshot (each may be undefined = none):
   *   rockets [[id, x, y, z, ang, speed]], marbles [[id, x, y, z, dx, dz, speed]], puddles [[id, x, y, z]].
   * Ids are stable, so meshes are created / updated / removed to match. `stamp` = host time of the snapshot.
   */
  sync(rockets, marbles, puddles, stamp) {
    if (!this.replica) return;
    this._syncList(this.rockets, rockets, 6, stamp, 0);
    this._syncList(this.marbles, marbles, 7, stamp, 1);
    this._syncList(this.puddles, puddles, 4, stamp, 2);
  }

  _syncList(list, data, len, stamp, kind) {
    const fx = this.race.fx, rnd = this.race.random;
    if (!Array.isArray(data)) data = [];
    for (let i = 0; i < list.length; i++) list[i]._seen = false;
    for (let k = 0; k < data.length && k < 64; k++) {
      const a = data[k];
      if (!Array.isArray(a) || a.length < len) continue;
      let good = true;
      for (let j = 0; j < len; j++) if (typeof a[j] !== 'number' || !Number.isFinite(a[j])) { good = false; break; }
      if (!good) continue;
      let o = null;
      for (let i = 0; i < list.length; i++) if (list[i].id === a[0]) { o = list[i]; break; }
      if (!o) {
        if (kind === 0) o = this._spawnRocket(a[0], a[1], a[2], a[3], a[4], a[5]);
        else if (kind === 1) o = this._spawnMarble(a[0], a[1], a[2], a[3], a[4], a[5], a[6]);
        else o = this._spawnPuddle(a[0], a[1], a[2], a[3]);
      }
      o._seen = true;
      o.net = a;
      o.nt = stamp;
    }
    for (let i = list.length - 1; i >= 0; i--) {
      const o = list[i];
      if (o._seen) continue;
      if (kind === 2) { if (!o.dying) o.dying = 0.0001; continue; } // shrinks away in _updatePuddles
      if (kind === 0) this._explode(o.pos.x, o.pos.y, o.pos.z, true);
      else fx.burst(o.pos.x, o.pos.y, o.pos.z, 30, 12, 0.5, 0.6, 0.1, 0.6, 0.85, 1.0, 1, 12, 1, 0.6, rnd);
      this.race.root.remove(o.mesh);
      list.splice(i, 1);
    }
  }

  /** client-side motion of replicated projectiles: fly on locally, ease toward the extrapolated host state */
  _updateReplica(dt) {
    const race = this.race;
    const now = race._net ? race._net.wallNow : 0;
    const k = 1 - Math.exp(-10 * dt);
    for (let i = 0; i < this.rockets.length; i++) {
      const r = this.rockets[i], n = r.net;
      r.age += dt;
      if (n) {
        let e = now - r.nt;
        e = e < 0 ? 0 : e > 0.5 ? 0.5 : e;
        r.ang += wrapAngle(n[4] - r.ang) * k;
        r.speed = n[5];
        const dx = Math.sin(r.ang), dz = Math.cos(r.ang);
        r.pos.x += dx * r.speed * dt;
        r.pos.z += dz * r.speed * dt;
        r.pos.x += (n[1] + Math.sin(n[4]) * n[5] * e - r.pos.x) * k;
        r.pos.z += (n[3] + Math.cos(n[4]) * n[5] * e - r.pos.z) * k;
        r.pos.y += (n[2] - r.pos.y) * k;
      }
      r.mesh.position.copy(r.pos);
      r.mesh.rotation.y = r.ang;
      r.mesh.rotation.z += dt * 9;
      this._rocketTrail(r, Math.sin(r.ang), Math.cos(r.ang));
    }
    const R = T.marble.radius;
    for (let i = 0; i < this.marbles.length; i++) {
      const m = this.marbles[i], n = m.net;
      m.age += dt;
      if (n) {
        let e = now - m.nt;
        e = e < 0 ? 0 : e > 0.5 ? 0.5 : e;
        m.dx = n[4]; m.dz = n[5]; m.speed = n[6];
        m.pos.x += m.dx * m.speed * dt;
        m.pos.z += m.dz * m.speed * dt;
        m.pos.x += (n[1] + n[4] * n[6] * e - m.pos.x) * k;
        m.pos.z += (n[3] + n[5] * n[6] * e - m.pos.z) * k;
        m.pos.y += (n[2] - m.pos.y) * k;
      }
      m.mesh.position.copy(m.pos);
      _axis.set(m.dz, 0, -m.dx);
      if (_axis.lengthSq() > 1e-6) m.mesh.rotateOnWorldAxis(_axis.normalize(), (m.speed * dt) / R);
      this._marbleTrail(m);
    }
  }

  _rocketTrail(r, dx, dz) {
    const race = this.race, fx = race.fx, rnd = race.random;
    fx.emit(r.pos.x - dx * 0.7, r.pos.y, r.pos.z - dz * 0.7,
      -dx * 6 + (rnd() - 0.5) * 2, (rnd() - 0.5) * 2, -dz * 6 + (rnd() - 0.5) * 2,
      0.28, 0.6, 0.1, 1.0, 0.7 + rnd() * 0.3, 0.25, 1, 0, 0);
    if (rnd() < 0.5)
      race.smoke.emit(r.pos.x - dx, r.pos.y, r.pos.z - dz, 0, 0.8, 0, 0.6, 0.4, 1.4, 0.8, 0.8, 0.8, 0.3, 0, 1);
  }

  _marbleTrail(m) {
    const fx = this.race.fx, rnd = this.race.random, R = T.marble.radius;
    if (rnd() < 0.5)
      fx.emit(m.pos.x, m.pos.y - R * 0.6, m.pos.z, (rnd() - 0.5) * 3, 1 + rnd() * 2, (rnd() - 0.5) * 3,
        0.35, 0.35, 0.05, 0.6, 0.85, 1.0, 0.9, 6, 0);
  }

  _explode(x, y, z, big) {
    const fx = this.race.fx, sm = this.race.smoke, rnd = this.race.random;
    fx.burst(x, y, z, big ? 46 : 24, big ? 17 : 11, 0.55, 0.9, 0.15, 1.0, 0.62, 0.18, 1, 14, 1.2, 0.55, rnd);
    fx.burst(x, y, z, big ? 12 : 6, 5, 0.3, 2.6, 0.6, 1.0, 0.9, 0.6, 0.9, 0, 3, 0.5, rnd);
    sm.burst(x, y + 0.3, z, big ? 12 : 6, 4, 0.9, 1.0, 3.0, 0.55, 0.55, 0.55, 0.5, -1.5, 1.5, 0.7, rnd);
  }

  _updateRockets(dt) {
    const race = this.race, track = race.track, S = race.states, fx = race.fx, rnd = race.random;
    const len = track.length || 500;
    for (let i = this.rockets.length - 1; i >= 0; i--) {
      const r = this.rockets[i];
      r.life -= dt;
      r.age += dt;
      let dead = r.life <= 0;
      let pr = track.project(r.pos, r.t);
      if (pr && Number.isFinite(pr.t)) r.t = pr.t;
      else pr = null;

      // aim: target when close, otherwise follow the road
      let ax = NaN, az = NaN;
      const tg = r.target;
      if (tg) {
        const tp = tg.car.pos;
        const ddx = tp.x - r.pos.x, ddz = tp.z - r.pos.z;
        if (ddx * ddx + ddz * ddz < 34 * 34) { ax = tp.x; az = tp.z; }
      }
      if (ax !== ax) {
        let lt = (r.t + 16 / len) % 1;
        if (lt < 0) lt += 1;
        const sp = track.sample(lt);
        if (sp && sp.pos) { ax = sp.pos.x; az = sp.pos.z; }
      }
      if (ax === ax) {
        const want = Math.atan2(ax - r.pos.x, az - r.pos.z);
        const d = wrapAngle(want - r.ang);
        const mx = T.rocket.turn * dt;
        r.ang += d > mx ? mx : d < -mx ? -mx : d;
      }
      const dx = Math.sin(r.ang), dz = Math.cos(r.ang);
      r.pos.x += dx * r.speed * dt;
      r.pos.z += dz * r.speed * dt;
      if (pr && Number.isFinite(pr.y)) r.pos.y += (pr.y + 0.75 - r.pos.y) * Math.min(1, dt * 10);
      r.mesh.position.copy(r.pos);
      r.mesh.rotation.y = r.ang;
      r.mesh.rotation.z += dt * 9;

      this._rocketTrail(r, dx, dz);

      // walls / obstacles
      if (pr && Math.abs(pr.lateral) > pr.halfWidth + 0.4) dead = true;
      const obs = track.obstacles;
      if (obs && !dead) {
        for (let k = 0; k < obs.length; k++) {
          const o = obs[k], ox = o.x - r.pos.x, oz = o.z - r.pos.z, rr = o.radius + 0.3;
          if (ox * ox + oz * oz < rr * rr) { dead = true; break; }
        }
      }
      // cars
      let hitCar = false;
      if (!dead) {
        for (let k = 0; k < S.length; k++) {
          const st = S[k];
          if (st === r.owner) continue;
          const cp = st.car.pos, cx = cp.x - r.pos.x, cz = cp.z - r.pos.z;
          const rr = (st.car.radius || 1) + 0.75;
          if (cx * cx + cz * cz < rr * rr && Math.abs(cp.y + 0.5 - r.pos.y) < 2.6) {
            race._hit(st, 'rocket', T.rocket.spin, T.rocket.launch, dx * T.rocket.impulse, dz * T.rocket.impulse);
            dead = hitCar = true;
            break;
          }
        }
      }
      if (dead) {
        this._explode(r.pos.x, r.pos.y, r.pos.z, true);
        if (!hitCar) race._emit('explode', r.pos, 'rocket');
        race.root.remove(r.mesh);
        this.rockets.splice(i, 1);
      }
    }
  }

  _updateMarbles(dt) {
    const race = this.race, track = race.track, S = race.states, fx = race.fx, rnd = race.random;
    const R = T.marble.radius;
    for (let i = this.marbles.length - 1; i >= 0; i--) {
      const m = this.marbles[i];
      m.life -= dt;
      m.age += dt;
      let dead = m.life <= 0;

      m.pos.x += m.dx * m.speed * dt;
      m.pos.z += m.dz * m.speed * dt;
      const pr = track.project(m.pos, m.t);
      if (pr && Number.isFinite(pr.t)) {
        m.t = pr.t;
        const sp = track.sample(m.t);
        if (sp && sp.right && sp.tangent) {
          const rx = sp.right.x, rz = sp.right.z;
          const lim = Math.max(0.5, pr.halfWidth - R);
          if (Math.abs(pr.lateral) > lim) {
            const sgn = pr.lateral > 0 ? 1 : -1;
            const vn = m.dx * rx + m.dz * rz;
            if (vn * sgn > 0) {
              m.dx -= 2 * vn * rx;
              m.dz -= 2 * vn * rz;
              fx.burst(m.pos.x, m.pos.y, m.pos.z, 8, 7, 0.3, 0.4, 0.05, 0.7, 0.9, 1.0, 1, 10, 1, 0.5, rnd);
              race._emit('bounce', m.pos, 'marble');
            }
            const over = Math.abs(pr.lateral) - lim;
            m.pos.x -= rx * sgn * over;
            m.pos.z -= rz * sgn * over;
          }
          // gentle bias down the road so it never rolls back
          const k = 1.6 * dt;
          m.dx += sp.tangent.x * k;
          m.dz += sp.tangent.z * k;
          const l = Math.hypot(m.dx, m.dz) || 1;
          m.dx /= l;
          m.dz /= l;
        }
        if (Number.isFinite(pr.y)) m.pos.y += (pr.y + R - m.pos.y) * Math.min(1, dt * 14);
      }
      const obs = track.obstacles;
      if (obs) {
        for (let k = 0; k < obs.length; k++) {
          const o = obs[k];
          let nx = m.pos.x - o.x, nz = m.pos.z - o.z;
          const d = Math.hypot(nx, nz), rr = o.radius + R;
          if (d < rr && d > 1e-4) {
            nx /= d; nz /= d;
            const vn = m.dx * nx + m.dz * nz;
            if (vn < 0) { m.dx -= 2 * vn * nx; m.dz -= 2 * vn * nz; }
            m.pos.x = o.x + nx * rr;
            m.pos.z = o.z + nz * rr;
          }
        }
      }
      m.mesh.position.copy(m.pos);
      _axis.set(m.dz, 0, -m.dx);
      m.mesh.rotateOnWorldAxis(_axis, (m.speed * dt) / R);
      this._marbleTrail(m);

      if (!dead) {
        for (let k = 0; k < S.length; k++) {
          const st = S[k];
          if (st === m.owner && m.age < 1.0) continue;
          const cp = st.car.pos, cx = cp.x - m.pos.x, cz = cp.z - m.pos.z;
          const rr = (st.car.radius || 1) + R;
          if (cx * cx + cz * cz < rr * rr && Math.abs(cp.y - (m.pos.y - R)) < 2.2) {
            const res = race._hit(st, 'marble', T.marble.spin, T.marble.launch, m.dx * T.marble.impulse, m.dz * T.marble.impulse);
            if (res) { dead = true; break; }
          }
        }
      }
      if (dead) {
        fx.burst(m.pos.x, m.pos.y, m.pos.z, 30, 12, 0.5, 0.6, 0.1, 0.6, 0.85, 1.0, 1, 12, 1, 0.6, rnd);
        race.root.remove(m.mesh);
        this.marbles.splice(i, 1);
      }
    }
  }

  _updatePuddles(dt, time) {
    const race = this.race, S = race.states;
    for (let i = this.puddles.length - 1; i >= 0; i--) {
      const p = this.puddles[i];
      p.age += dt;
      p.life -= dt;
      if (p.life <= 0 && !p.dying) p.dying = 0.0001;
      if (p.dying) {
        p.dying += dt;
        const k = Math.max(0, 1 - p.dying / 0.35);
        p.mesh.scale.setScalar(Math.max(0.001, p.radius * k));
        if (k <= 0) {
          race.root.remove(p.mesh);
          this.puddles.splice(i, 1);
        }
        continue;
      }
      const grow = Math.min(1, p.age / 0.25);
      const wob = 1 + 0.04 * Math.sin(time * 4 + i);
      p.mesh.scale.set(p.radius * grow * wob, 1, p.radius * grow * (2 - wob));
      if (this.replica) continue; // hits are decided by the host
      for (let k = 0; k < S.length; k++) {
        const st = S[k];
        if (st === p.owner && p.age < T.glue.arm) continue;
        const car = st.car;
        if (car.onGround === false) continue;
        const cx = car.pos.x - p.x, cz = car.pos.z - p.z;
        const rr = p.radius + 0.35;
        if (cx * cx + cz * cz < rr * rr && Math.abs(car.pos.y - p.y) < 1.5) {
          const res = race._hit(st, 'glue', T.glue.spin, 0, -car.vel.x * T.glue.slow, -car.vel.z * T.glue.slow, T.glue.slow);
          if (res) {
            race.fx.burst(p.x, p.y + 0.3, p.z, 18, 7, 0.5, 0.6, 0.15, 0.5, 1.0, 0.25, 1, 14, 1, 0.7, race.random);
            p.dying = 0.0001;
            break;
          }
        }
      }
    }
  }

  _updatePulses(dt) {
    const race = this.race, S = race.states;
    const P = T.pulse;
    for (let i = this.pulses.length - 1; i >= 0; i--) {
      const p = this.pulses[i];
      p.age += dt;
      const k = Math.min(1, p.age / P.duration);
      const rad = P.radius * (1 - (1 - k) * (1 - k));
      const op = p.owner.car.pos;
      p.mesh.position.set(op.x, op.y + 0.45, op.z);
      p.mesh.scale.set(rad, 1, rad);
      p.mat.opacity = 0.95 * (1 - k * k);
      for (let j = 0; j < S.length && !this.replica; j++) {
        const st = S[j];
        if (st === p.owner || p.hit[j]) continue;
        const cp = st.car.pos;
        const cx = cp.x - op.x, cz = cp.z - op.z;
        const d = Math.hypot(cx, cz);
        if (d < rad + (st.car.radius || 1) && Math.abs(cp.y - op.y) < 4) {
          p.hit[j] = 1;
          const inv = d > 1e-3 ? 1 / d : 0;
          race._hit(st, 'pulse', P.spin, P.launch, cx * inv * P.impulse, cz * inv * P.impulse);
        }
      }
      if (k >= 1) {
        race.root.remove(p.mesh);
        p.mat.dispose();
        this.pulses.splice(i, 1);
      }
    }
  }

  _updateShields(dt, time) {
    const S = this.race.states;
    for (let j = 0; j < S.length; j++) {
      const st = S[j];
      if (st.shieldTime > 0) st.shieldTime -= dt;
      const m = st.shieldMesh;
      if (!m) continue;
      if (st.shieldTime > 0) {
        m.visible = st.shieldTime > 1.2 || Math.sin(time * 28) > -0.2; // flicker before expiring
        const p = st.car.pos;
        m.position.set(p.x, p.y + 0.55, p.z);
        const s = 1 + 0.05 * Math.sin(time * 7 + j);
        m.scale.set(s, 0.82 * (2 - s), s);
        m.rotation.y = time * 1.5;
      } else {
        m.visible = false;
      }
    }
  }

  dispose() {
    const root = this.race.root;
    for (const r of this.rockets) root.remove(r.mesh);
    for (const m of this.marbles) root.remove(m.mesh);
    for (const p of this.puddles) root.remove(p.mesh);
    for (const p of this.pulses) { root.remove(p.mesh); p.mat.dispose(); }
    for (const r of this.rings) { root.remove(r.mesh); r.mat.dispose(); }
    for (const st of this.race.states) {
      if (st.shieldMesh) { root.remove(st.shieldMesh); st.shieldMesh = null; }
      if (st.towMesh) { root.remove(st.towMesh); st.towMesh = null; }
      if (st.cloudMesh) { root.remove(st.cloudMesh); st.cloudMesh = null; }
      st.towTarget = null;
      if (st.scaleVis !== 1 && st.car.mesh) { st.scaleVis = 1; st.car.mesh.scale.setScalar(1); }
    }
    this.rockets.length = this.marbles.length = this.puddles.length = this.pulses.length = this.rings.length = 0;
    for (const x of this._res) x.dispose();
    this._res.length = 0;
  }
}
