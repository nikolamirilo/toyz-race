// Shared track builder: centerline, road ribbon, kerbs, walls, gantry, chevrons, boost pads,
// start grid, pickups, lighting helpers and the scenery placement context.
import * as THREE from 'three';
import { Batch, QuadSoup, makeRng, canvasTex, col, disposeObject } from './util.js';
import * as TX from './textures.js';

const TAU = Math.PI * 2;
export const ROAD_BASE_Y = 0.12;

// ---------------------------------------------------------------------------------------------
// Centerline
// ---------------------------------------------------------------------------------------------

/** Turn a polygon of waypoints into Catmull-Rom control points with filleted (rounded) corners. */
function controlPoints(def) {
  const W = def.waypoints.map((w) => ({
    x: w[0], z: w[1], y: w[2] || 0,
    r: (w[3] && w[3].r) || def.cornerRadius,
    w: (w[3] && w[3].w) || def.halfWidth,
  }));
  const n = W.length;
  const corners = [];
  for (let i = 0; i < n; i++) {
    const A = W[(i + n - 1) % n], P = W[i], B = W[(i + 1) % n];
    let d1x = P.x - A.x, d1z = P.z - A.z, d2x = B.x - P.x, d2z = B.z - P.z;
    const l1 = Math.hypot(d1x, d1z), l2 = Math.hypot(d2x, d2z);
    d1x /= l1; d1z /= l1; d2x /= l2; d2z /= l2;
    const cross = d1x * d2z - d1z * d2x, dot = d1x * d2x + d1z * d2z;
    const theta = Math.atan2(Math.abs(cross), dot);
    const sign = cross >= 0 ? 1 : -1;
    const T = P.r * Math.tan(theta / 2);
    corners.push({
      P, d1x, d1z, d2x, d2z, theta, sign, T,
      sx: P.x - d1x * T, sz: P.z - d1z * T, ex: P.x + d2x * T, ez: P.z + d2z * T,
    });
  }
  const pts = [];
  let startIndex = 0;
  for (let i = 0; i < n; i++) {
    const c = corners[i], P = c.P, r = P.r;
    const cx = c.sx - c.d1z * c.sign * r, cz = c.sz + c.d1x * c.sign * r;
    const a0 = Math.atan2(c.sz - cz, c.sx - cx);
    const steps = Math.max(2, Math.ceil(c.theta / (Math.PI / 14)));
    for (let k = 0; k <= steps; k++) {
      const a = a0 + (c.sign * c.theta * k) / steps;
      pts.push({ x: cx + Math.cos(a) * r, z: cz + Math.sin(a) * r, y: P.y, w: P.w });
    }
    const nx = corners[(i + 1) % n];
    const len = Math.hypot(nx.sx - c.ex, nx.sz - c.ez);
    const along = (nx.sx - c.ex) * c.d2x + (nx.sz - c.ez) * c.d2z;
    if (along < 2) throw new Error(`track ${def.id}: fillets overlap on edge ${i} (free straight ${along.toFixed(1)})`);
    let fr = [];
    if (len > 9) {
      const lead = 3.5 / len;
      fr.push(lead);
      const m = Math.ceil(len / 26);
      for (let j = 1; j < m; j++) fr.push(j / m);
      fr.push(1 - lead);
    } else {
      fr.push(0.5);
    }
    let startF = -1;
    if (i === 0) {
      startF = def.startFrac ?? 0.5;
      fr = fr.filter((f) => Math.abs(f - startF) * len > 5);
      fr.push(startF);
    }
    fr.sort((a, b) => a - b);
    for (const f of fr) {
      if (f === startF) startIndex = pts.length;
      pts.push({
        x: c.ex + (nx.sx - c.ex) * f, z: c.ez + (nx.sz - c.ez) * f,
        y: P.y + (nx.P.y - P.y) * f, w: P.w + (nx.P.w - P.w) * f,
      });
    }
  }
  return pts.slice(startIndex).concat(pts.slice(0, startIndex));
}

function smoothWrap(arr, R, passes) {
  const N = arr.length;
  let a = arr, b = new Float64Array(N);
  for (let p = 0; p < passes; p++) {
    for (let i = 0; i < N; i++) {
      let s = 0;
      for (let k = -R; k <= R; k++) s += a[(i + k + N) % N];
      b[i] = s / (2 * R + 1);
    }
    const t = a; a = b; b = t;
  }
  if (a !== arr) arr.set(a);
}

export function buildCenterline(def) {
  if (def._line) return def._line;
  const ctrl = controlPoints(def);
  const n = ctrl.length;
  const curve = new THREE.CatmullRomCurve3(ctrl.map((p) => new THREE.Vector3(p.x, p.y, p.z)), true, 'centripetal');
  const M = 8000;
  const dx = new Float64Array(M + 1), dy = new Float64Array(M + 1), dz = new Float64Array(M + 1), dw = new Float64Array(M + 1);
  const cum = new Float64Array(M + 1);
  const v = new THREE.Vector3();
  for (let k = 0; k <= M; k++) {
    const t = k / M;
    curve.getPoint(t, v);
    dx[k] = v.x; dy[k] = v.y; dz[k] = v.z;
    const f = t * n, i0 = Math.floor(f) % n;
    let a = f - Math.floor(f);
    a = a * a * (3 - 2 * a);
    dw[k] = ctrl[i0].w + (ctrl[(i0 + 1) % n].w - ctrl[i0].w) * a;
    if (k > 0) cum[k] = cum[k - 1] + Math.hypot(dx[k] - dx[k - 1], dz[k] - dz[k - 1]);
  }
  const L = cum[M];
  const N = Math.max(600, Math.min(1200, Math.round(L / 0.7)));
  const seg = L / N;
  const px = new Float64Array(N), py = new Float64Array(N), pz = new Float64Array(N), hw = new Float64Array(N);
  let k = 0;
  for (let i = 0; i < N; i++) {
    const s = i * seg;
    while (k < M - 1 && cum[k + 1] < s) k++;
    const d = cum[k + 1] - cum[k];
    const a = d > 1e-9 ? (s - cum[k]) / d : 0;
    px[i] = dx[k] + (dx[k + 1] - dx[k]) * a;
    py[i] = dy[k] + (dy[k + 1] - dy[k]) * a;
    pz[i] = dz[k] + (dz[k + 1] - dz[k]) * a;
    hw[i] = dw[k] + (dw[k + 1] - dw[k]) * a;
  }
  // height profile: smooth the waypoint heights, add humps, lift above the ground plane
  const R = Math.max(2, Math.round(7 / seg));
  smoothWrap(py, R, 3);
  smoothWrap(hw, R, 2);
  for (const h of def.humps || []) {
    const c = h.at * L, half = h.len / 2;
    for (let i = 0; i < N; i++) {
      let d = Math.abs(i * seg - c);
      if (d > L / 2) d = L - d;
      if (d < half) py[i] += h.h * 0.5 * (1 + Math.cos((Math.PI * d) / half));
    }
  }
  let minY = Infinity;
  for (let i = 0; i < N; i++) minY = Math.min(minY, py[i]);
  for (let i = 0; i < N; i++) py[i] += ROAD_BASE_Y - Math.min(0, minY);

  const tx = new Float64Array(N), ty = new Float64Array(N), tz = new Float64Array(N);
  const rx = new Float64Array(N), rz = new Float64Array(N), head = new Float64Array(N), curv = new Float64Array(N);
  for (let i = 0; i < N; i++) {
    const a = (i + N - 1) % N, b = (i + 1) % N;
    const ex = px[b] - px[a], ey = py[b] - py[a], ez = pz[b] - pz[a];
    const l = Math.hypot(ex, ey, ez), lh = Math.hypot(ex, ez);
    tx[i] = ex / l; ty[i] = ey / l; tz[i] = ez / l;
    rx[i] = -ez / lh; rz[i] = ex / lh;
    head[i] = Math.atan2(ex, ez);
  }
  let maxHW = 0, cxs = 0, czs = 0;
  for (let i = 0; i < N; i++) {
    let d = head[(i + 2) % N] - head[(i + N - 2) % N];
    while (d > Math.PI) d -= TAU;
    while (d < -Math.PI) d += TAU;
    curv[i] = d / (4 * seg);
    maxHW = Math.max(maxHW, hw[i]);
    cxs += px[i]; czs += pz[i];
  }
  const cx = cxs / N, cz = czs / N;
  let radius = 0;
  for (let i = 0; i < N; i++) radius = Math.max(radius, Math.hypot(px[i] - cx, pz[i] - cz));
  const line = { N, L, seg, px, py, pz, hw, tx, ty, tz, rx, rz, head, curv, maxHW, cx, cz, radius };
  def._line = line;
  return line;
}

function makeSample(line) {
  const { N, px, py, pz, hw, tx, ty, tz, rx, rz } = line;
  return function sample(t, out) {
    t = t - Math.floor(t);
    const f = t * N;
    let i = Math.floor(f);
    if (i >= N) i = N - 1;
    const a = f - i, j = (i + 1) % N, b = 1 - a;
    const o = out || { pos: new THREE.Vector3(), tangent: new THREE.Vector3(), right: new THREE.Vector3(), halfWidth: 0 };
    o.pos.set(px[i] * b + px[j] * a, py[i] * b + py[j] * a, pz[i] * b + pz[j] * a);
    o.tangent.set(tx[i] * b + tx[j] * a, ty[i] * b + ty[j] * a, tz[i] * b + tz[j] * a).normalize();
    o.right.set(rx[i] * b + rx[j] * a, 0, rz[i] * b + rz[j] * a).normalize();
    o.halfWidth = hw[i] * b + hw[j] * a;
    return o;
  };
}

function makeProject(line) {
  const { N, px, py, pz, hw, rx, rz } = line;
  const WIN = Math.max(24, Math.round(N * 0.04));
  const farSq = (line.maxHW * 2 + 15) ** 2;
  return function project(pos, hintT, out) {
    const x = pos.x, z = pos.z;
    let best = -1, bd = Infinity;
    if (hintT !== undefined && hintT !== null && hintT === hintT) {
      const c = Math.floor((hintT - Math.floor(hintT)) * N);
      for (let k = -WIN; k <= WIN; k++) {
        let i = c + k;
        if (i < 0) i += N; else if (i >= N) i -= N;
        const ex = x - px[i], ez = z - pz[i], d = ex * ex + ez * ez;
        if (d < bd) { bd = d; best = i; }
      }
      if (bd > farSq) best = -1; // lost (teleport / respawn): fall back to a global search
    }
    if (best < 0) {
      bd = Infinity;
      for (let i = 0; i < N; i++) {
        const ex = x - px[i], ez = z - pz[i], d = ex * ex + ez * ez;
        if (d < bd) { bd = d; best = i; }
      }
    }
    // refine on the two segments touching the nearest sample
    const i0 = best === 0 ? N - 1 : best - 1, i2 = best === N - 1 ? 0 : best + 1;
    let ax = px[i0], az = pz[i0], sx = px[best] - ax, sz = pz[best] - az;
    let uA = ((x - ax) * sx + (z - az) * sz) / (sx * sx + sz * sz);
    uA = uA < 0 ? 0 : uA > 1 ? 1 : uA;
    let qx = ax + sx * uA - x, qz = az + sz * uA - z;
    const dA = qx * qx + qz * qz;
    ax = px[best]; az = pz[best]; sx = px[i2] - ax; sz = pz[i2] - az;
    let uB = ((x - ax) * sx + (z - az) * sz) / (sx * sx + sz * sz);
    uB = uB < 0 ? 0 : uB > 1 ? 1 : uB;
    qx = ax + sx * uB - x; qz = az + sz * uB - z;
    const dB = qx * qx + qz * qz;
    let j, k, u;
    if (dA < dB) { j = i0; k = best; u = uA; } else { j = best; k = i2; u = uB; }
    const w = 1 - u;
    const cx = px[j] * w + px[k] * u, cz = pz[j] * w + pz[k] * u;
    let Rx = rx[j] * w + rx[k] * u, Rz = rz[j] * w + rz[k] * u;
    const rl = Math.hypot(Rx, Rz) || 1;
    Rx /= rl; Rz /= rl;
    let t = (j + u) / N;
    if (t >= 1) t -= 1;
    const o = out || {};
    o.t = t;
    o.lateral = (x - cx) * Rx + (z - cz) * Rz;
    o.y = py[j] * w + py[k] * u;
    o.halfWidth = hw[j] * w + hw[k] * u;
    return o;
  };
}

// ---------------------------------------------------------------------------------------------
// Geometry helpers along the centerline
// ---------------------------------------------------------------------------------------------

/** Indexed ribbon following samples [iFrom, iFrom+count]. latL/latR: (sampleIndex) => lateral offset. */
function ribbonGeo(line, iFrom, count, latL, latR, yOff, uRep, vRep) {
  const { N, px, py, pz, rx, rz } = line;
  const pos = new Float32Array((count + 1) * 6), uv = new Float32Array((count + 1) * 4);
  const idx = [];
  for (let r = 0; r <= count; r++) {
    const i = (((iFrom + r) % N) + N) % N;
    const a = latL(i), b = latR(i);
    pos.set([px[i] + rx[i] * a, py[i] + yOff, pz[i] + rz[i] * a, px[i] + rx[i] * b, py[i] + yOff, pz[i] + rz[i] * b], r * 6);
    const v = (r / count) * vRep;
    uv.set([0, v, uRep, v], r * 4);
    if (r < count) {
      const o = r * 2;
      idx.push(o, o + 1, o + 2, o + 1, o + 3, o + 2);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
}

// ---------------------------------------------------------------------------------------------
// Build context
// ---------------------------------------------------------------------------------------------

export class TrackContext {
  constructor(def) {
    this.def = def;
    this.line = buildCenterline(def);
    this.group = new THREE.Group();
    this.group.name = 'track:' + def.id;
    this.batch = new Batch();
    this.rng = makeRng(def.seed || 1234);
    this.footprints = []; // every decorative object: {name,x,z,r}
    this.solids = []; // big footprints, used to keep scattered props apart
    this.anims = []; // (dt, time) => void
    this.edge = { kerb: 0.9, wall: 0.6, ...(def.edge || {}) };
    this.edgeTotal = this.edge.kerb + this.edge.wall;
    this.sample = makeSample(this.line);
    this.project = makeProject(this.line);
    this.mats = {
      matte: new THREE.MeshLambertMaterial({ vertexColors: true }),
      gloss: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.28, metalness: 0.15 }),
      far: new THREE.MeshLambertMaterial({ vertexColors: true }),
      glow: new THREE.MeshBasicMaterial({ vertexColors: true }),
      glowNoFog: new THREE.MeshBasicMaterial({ vertexColors: true, fog: false }),
    };
    this.flags = {
      matte: { cast: true, receive: true },
      gloss: { cast: true, receive: true },
      far: { cast: false, receive: false },
      glow: { cast: false, receive: false },
      glowNoFog: { cast: false, receive: false },
    };
    this.background = new THREE.Color(0x88bbee);
    this.fog = null;
    this.sun = null;
    this.sunDir = new THREE.Vector3(0.4, 1, 0.3).normalize();
    this._shadowRange = -1;
  }

  tex(w, h, draw, opts) {
    return canvasTex(w, h, draw, opts);
  }
  /** Register an extra batch bucket with its own material. */
  bucket(key, material, cast = true, receive = true) {
    this.mats[key] = material;
    this.flags[key] = { cast, receive };
  }
  add(obj) {
    this.group.add(obj);
    return obj;
  }
  onUpdate(fn) {
    this.anims.push(fn);
  }

  // ---- placement -------------------------------------------------------------------------
  /** Distance from (x,z) to the outer face of the track barrier (negative = inside the track band). */
  clearance(x, z) {
    const { N, px, pz, hw } = this.line;
    let bd = Infinity, best = 0;
    for (let i = 0; i < N; i++) {
      const ex = x - px[i], ez = z - pz[i], d = ex * ex + ez * ez;
      if (d < bd) { bd = d; best = i; }
    }
    return Math.sqrt(bd) - hw[best] - this.edgeTotal;
  }
  /** Record a decorative footprint (checked by the verifier). Returns true when it is clear of the road. */
  reserve(name, x, z, r = 0, solid = r >= 2.5) {
    const f = { name, x, z, r };
    this.footprints.push(f);
    if (solid) this.solids.push(f);
    return true;
  }
  /** Record a rotated rectangle footprint as a grid of points. */
  reserveBox(name, cx, cz, w, d, ry = 0, solid = true) {
    const c = Math.cos(ry), s = Math.sin(ry);
    const nx = Math.max(1, Math.ceil(w / 3)), nz = Math.max(1, Math.ceil(d / 3));
    for (let i = 0; i <= nx; i++) for (let j = 0; j <= nz; j++) {
      const lx = (i / nx - 0.5) * w, lz = (j / nz - 0.5) * d;
      const f = { name, x: cx + lx * c + lz * s, z: cz - lx * s + lz * c, r: 0.2 };
      this.footprints.push(f);
    }
    if (solid) {
      // cover the rectangle with circles along its long axis
      const long = Math.max(w, d), short = Math.min(w, d), rr = short * 0.72;
      const k = Math.max(1, Math.ceil(long / short));
      for (let i = 0; i < k; i++) {
        const o = k === 1 ? 0 : (i / (k - 1) - 0.5) * (long - short);
        const lx = w >= d ? o : 0, lz = w >= d ? 0 : o;
        this.solids.push({ name, x: cx + lx * c + lz * s, z: cz - lx * s + lz * c, r: rr });
      }
    }
  }
  /** Is a disc free of the track band (and optionally of other solid props)? */
  free(x, z, r, avoidSolids = true, margin = 0.4) {
    if (this.clearance(x, z) < r + margin) return false;
    if (avoidSolids) {
      for (const s of this.solids) {
        const d = r + s.r;
        const ex = x - s.x, ez = z - s.z;
        if (ex * ex + ez * ez < d * d) return false;
      }
    }
    return true;
  }
  /** Hand-placed prop: returns the free spot nearest to the wanted position (spiral search) and reserves it. */
  spot(name, x, z, r, solid = true, avoidSolids = true) {
    let fx = x, fz = z;
    if (!this.free(x, z, r, avoidSolids, 1)) {
      search: for (let rad = 2; rad <= 120; rad += 2) {
        for (let k = 0; k < 20; k++) {
          const a = (k / 20) * TAU + rad;
          const qx = x + Math.cos(a) * rad, qz = z + Math.sin(a) * rad;
          if (this.free(qx, qz, r, avoidSolids, 1)) { fx = qx; fz = qz; break search; }
        }
      }
    }
    this.reserve(name, fx, fz, r, solid);
    return { x: fx, z: fz };
  }
  /** World position at track parameter t with a lateral offset. */
  at(t, lat = 0) {
    const s = this.sample(t);
    return {
      x: s.pos.x + s.right.x * lat, y: s.pos.y, z: s.pos.z + s.right.z * lat,
      heading: Math.atan2(s.tangent.x, s.tangent.z), halfWidth: s.halfWidth,
      rx: s.right.x, rz: s.right.z, tx: s.tangent.x, tz: s.tangent.z,
    };
  }
  /** Position beside the track: `gap` units of air between the barrier and a prop of radius r. side = ±1. */
  beside(t, side, gap, r = 0) {
    const s = this.sample(t);
    const lat = side * (s.halfWidth + this.edgeTotal + gap + r);
    return { x: s.pos.x + s.right.x * lat, y: 0, z: s.pos.z + s.right.z * lat, heading: Math.atan2(s.tangent.x, s.tangent.z), roadY: s.pos.y };
  }
  /** Rejection-sample `count` free discs inside a rectangle; cb(x, z, r, index). */
  scatter(count, box, radius, cb, { avoidSolids = true, tries = 30, name = 'scatter', solid = false } = {}) {
    const rnd = this.rng;
    let placed = 0;
    for (let i = 0; i < count; i++) {
      for (let k = 0; k < tries; k++) {
        const r = typeof radius === 'function' ? radius() : radius;
        const x = rnd.range(box[0], box[2]), z = rnd.range(box[1], box[3]);
        if (!this.free(x, z, r, avoidSolids)) continue;
        this.reserve(name, x, z, r, solid);
        cb(x, z, r, placed++);
        break;
      }
    }
    return placed;
  }
  /** Scatter beside the track within [gap0, gap1] of the barrier; cb(x, z, r, index, heading). */
  scatterBeside(count, gap0, gap1, radius, cb, { avoidSolids = true, name = 'trackside', solid = false, tRange = [0, 1] } = {}) {
    const rnd = this.rng;
    let placed = 0;
    for (let i = 0; i < count; i++) {
      for (let k = 0; k < 12; k++) {
        const r = typeof radius === 'function' ? radius() : radius;
        const p = this.beside(rnd.range(tRange[0], tRange[1]), rnd.sign(), rnd.range(gap0, gap1), r);
        if (!this.free(p.x, p.z, r, avoidSolids)) continue;
        this.reserve(name, p.x, p.z, r, solid);
        cb(p.x, p.z, r, placed++, p.heading);
        break;
      }
    }
    return placed;
  }

  // ---- lighting / atmosphere ---------------------------------------------------------------
  lights({ hemi, sun, ambient }) {
    if (hemi) this.add(new THREE.HemisphereLight(hemi[0], hemi[1], hemi[2]));
    if (ambient) this.add(new THREE.AmbientLight(ambient[0], ambient[1]));
    const L = this.line;
    const light = new THREE.DirectionalLight(sun.color, sun.intensity);
    this.sunDir.set(sun.dir[0], sun.dir[1], sun.dir[2]).normalize();
    light.castShadow = true;
    light.shadow.mapSize.set(2048, 2048);
    light.shadow.bias = -0.0005;
    this.add(light);
    this.add(light.target);
    this.sun = light;
    this.center = new THREE.Vector3(L.cx, 0, L.cz);
    this.followShadow(this.center, L.radius + 30);
  }
  /** Centre the shadow frustum on `target` covering ±range units. */
  followShadow(target, range = 70) {
    const sun = this.sun;
    if (!sun) return;
    sun.target.position.set(target.x, 0, target.z);
    sun.position.set(target.x, 0, target.z).addScaledVector(this.sunDir, 320);
    sun.target.updateMatrixWorld();
    if (range !== this._shadowRange) {
      this._shadowRange = range;
      const cam = sun.shadow.camera;
      cam.left = -range; cam.right = range; cam.top = range; cam.bottom = -range;
      cam.near = 10; cam.far = 320 + range * 2.2 + 120;
      cam.updateProjectionMatrix();
      sun.shadow.normalBias = Math.min(0.3, ((range * 2) / 2048) * 1.6);
    }
  }
  /** Gradient sky dome (world aligned). stops: [[height 0..1, hex], ...] from horizon (0) to zenith (1). */
  skyDome(stops, radius = 600) {
    const cols = stops.map(([p, c]) => [p, col(c)]);
    const tmp = new THREE.Color();
    const g = new THREE.SphereGeometry(radius, 32, 20);
    const pos = g.attributes.position;
    const arr = new Float32Array(pos.count * 3);
    for (let i = 0; i < pos.count; i++) {
      const h = Math.max(0, Math.min(1, pos.getY(i) / radius));
      let k = 0;
      while (k < cols.length - 2 && h > cols[k + 1][0]) k++;
      const a = Math.max(0, Math.min(1, (h - cols[k][0]) / (cols[k + 1][0] - cols[k][0])));
      tmp.copy(cols[k][1]).lerp(cols[k + 1][1], a);
      arr.set([tmp.r, tmp.g, tmp.b], i * 3);
    }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false }));
    m.renderOrder = -10;
    m.name = 'sky';
    m.position.set(this.line.cx, -20, this.line.cz);
    return this.add(m);
  }
  /** Big textured ground plane at y = 0. */
  ground(texture, fallback, size, repeat, matOpts = {}) {
    if (texture) texture.repeat.set(repeat, repeat);
    const mat = new THREE.MeshStandardMaterial({ map: texture, color: texture ? 0xffffff : fallback, roughness: 0.95, metalness: 0, ...matOpts });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
    m.rotation.x = -Math.PI / 2;
    m.position.set(this.line.cx, 0, this.line.cz);
    m.receiveShadow = true;
    m.name = 'ground';
    return this.add(m);
  }
}

// ---------------------------------------------------------------------------------------------
// Common track furniture
// ---------------------------------------------------------------------------------------------

function buildRoad(ctx) {
  const { def, line } = ctx;
  const style = def.road.style;
  const tiles = Math.max(1, Math.round(line.L / 20));
  const tex = ctx.tex(512, 1024, TX.drawRoad(style));
  const geo = ribbonGeo(line, 0, line.N, (i) => -line.hw[i], (i) => line.hw[i], 0, 1, tiles);
  const mat = new THREE.MeshStandardMaterial({
    map: tex, color: tex ? 0xffffff : def.road.fallback, roughness: def.road.roughness ?? 0.9, metalness: def.road.metalness ?? 0,
    polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1,
  });
  if (def.road.emissive && tex) {
    mat.emissiveMap = tex;
    mat.emissive = new THREE.Color(0xffffff);
    mat.emissiveIntensity = def.road.emissive;
  }
  const mesh = new THREE.Mesh(geo, mat);
  mesh.receiveShadow = true;
  mesh.name = 'road';
  ctx.add(mesh);

  // start / finish checker
  const ck = ctx.tex(64, 64, TX.drawChecker(), { aniso: 4 });
  const hw0 = line.hw[0];
  const sGeo = ribbonGeo(line, -2, 4, (i) => -line.hw[i], (i) => line.hw[i], 0.035, Math.round((hw0 * 2) / (line.seg * 4)), 1);
  const sMat = new THREE.MeshLambertMaterial({ map: ck, color: ck ? 0xffffff : 0xdddddd, polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -3 });
  const sMesh = new THREE.Mesh(sGeo, sMat);
  sMesh.receiveShadow = true;
  sMesh.name = 'startline';
  ctx.add(sMesh);
}

function buildEdges(ctx) {
  const { def, line, edge } = ctx;
  const { N, L, px, py, pz, rx, rz, hw } = line;
  const W = def.wall;
  const soup = new QuadSoup(), glow = new QuadSoup();
  const palette = W.palette.map(col), topCols = (W.top || W.palette).map(col), skirt = col(W.skirt ?? W.palette[0]);
  const kerbCols = def.kerb.map(col);
  let nb = Math.max(2, Math.round(L / (W.block || 3.2)));
  if (nb % palette.length) nb += palette.length - (nb % palette.length);
  let nk = Math.max(2, Math.round(L / 2.4));
  if (nk % 2) nk++;
  const P = (i, lat, y) => [px[i] + rx[i] * lat, y, pz[i] + rz[i] * lat];
  const blockOf = (i) => Math.floor((i * nb) / N);
  const hOf = (b) => W.height * (W.crenellate && b % 2 ? 0.62 : 1);
  for (const side of [-1, 1]) {
    for (let i = 0; i < N; i++) {
      const j = (i + 1) % N;
      const b = blockOf(i), h = hOf(b);
      const c = palette[(b + (side > 0 ? 1 : 0)) % palette.length], ct = topCols[(b + (side > 0 ? 1 : 0)) % topCols.length];
      const li = side * hw[i], lj = side * hw[j];
      const ki = side * (hw[i] + edge.kerb), kj = side * (hw[j] + edge.kerb);
      const oi = side * (hw[i] + edge.kerb + edge.wall), oj = side * (hw[j] + edge.kerb + edge.wall);
      const nxr = rx[i] * side, nzr = rz[i] * side;
      // kerb
      const kc = kerbCols[Math.floor((i * nk) / N) % kerbCols.length];
      soup.quad(P(i, li, py[i] + 0.012), P(j, lj, py[j] + 0.012), P(j, kj, py[j] + 0.09), P(i, ki, py[i] + 0.09), 0, 1, 0, kc);
      // wall: inner face, top, outer face
      soup.quad(P(i, ki, py[i] - 0.05), P(j, kj, py[j] - 0.05), P(j, kj, py[j] + h), P(i, ki, py[i] + h), -nxr, 0, -nzr, c);
      (W.glowTop ? glow : soup).quad(P(i, ki, py[i] + h), P(j, kj, py[j] + h), P(j, oj, py[j] + h), P(i, oi, py[i] + h), 0, 1, 0, ct);
      const lowI = py[i] > 0.35 ? py[i] - 0.05 : -0.1, lowJ = py[j] > 0.35 ? py[j] - 0.05 : -0.1;
      soup.quad(P(i, oi, py[i] + h), P(j, oj, py[j] + h), P(j, oj, lowJ), P(i, oi, lowI), nxr, 0, nzr, c);
      if (py[i] > 0.35 || py[j] > 0.35) {
        soup.quad(P(i, oi, lowI), P(j, oj, lowJ), P(j, oj, -0.3), P(i, oi, -0.3), nxr, 0, nzr, skirt);
      }
      // end caps where block heights differ
      if (W.crenellate) {
        const bp = blockOf((i + N - 1) % N);
        if (bp !== b) {
          const hm = Math.max(h, hOf(bp));
          const a0 = P(i, ki, py[i]), a1 = P(i, oi, py[i]), a2 = P(i, oi, py[i] + hm), a3 = P(i, ki, py[i] + hm);
          soup.quad(a0, a1, a2, a3, line.tx[i], 0, line.tz[i], c);
          soup.quad(a0, a1, a2, a3, -line.tx[i], 0, -line.tz[i], c);
        }
      }
    }
  }
  ctx.batch.add('matte', soup.toGeometry(), null);
  if (!glow.empty) ctx.batch.add('glow', glow.toGeometry(), null);
}

function buildGantry(ctx) {
  const { def, line, edge, batch } = ctx;
  const G = def.gantry || {};
  const h0 = line.head[0], y0 = line.py[0], hw0 = line.hw[0];
  const lat = hw0 + edge.kerb + edge.wall + 0.9;
  const postC = G.post ?? 0x30343f, beamC = G.beam ?? 0xe23b2e;
  for (const s of [-1, 1]) {
    const x = line.px[0] + line.rx[0] * lat * s, z = line.pz[0] + line.rz[0] * lat * s;
    batch.cyl('matte', 0.45, 0.55, y0 + 8.2, x, 0, z, postC, 10);
    batch.box('matte', 1.6, 0.5, 1.6, x, 0, z, beamC, h0);
    ctx.reserve('gantry-post', x, z, 0.8, false);
  }
  batch.box('matte', lat * 2 + 1.4, 0.8, 0.9, line.px[0], y0 + 7.4, line.pz[0], beamC, h0);
  for (let k = -2; k <= 2; k++) {
    const x = line.px[0] + line.rx[0] * k * 1.6, z = line.pz[0] + line.rz[0] * k * 1.6;
    batch.sphere('glow', 0.38, x, y0 + 7.15, z, k % 2 ? 0xffe14a : 0x4dff7a);
  }
  const tex = ctx.tex(1024, 256, TX.drawBanner(def.name.toUpperCase(), G.bannerBg ?? '#1c2140', G.bannerFg ?? '#ffe14a', G.accent ?? '#ff4b3a'), { clamp: true });
  const mat = new THREE.MeshBasicMaterial({ map: tex, color: tex ? 0xffffff : 0x1c2140 });
  const geo = new THREE.PlaneGeometry(hw0 * 2 + 1.5, (hw0 * 2 + 1.5) / 4.6);
  const bh = (hw0 * 2 + 1.5) / 4.6;
  for (const flip of [0, 1]) {
    const m = new THREE.Mesh(geo, mat);
    const off = flip ? 0.47 : -0.47;
    m.position.set(line.px[0] + line.tx[0] * off, y0 + 8.2 + bh / 2 - 0.1, line.pz[0] + line.tz[0] * off);
    m.rotation.y = h0 + (flip ? 0 : Math.PI);
    m.name = 'banner';
    ctx.add(m);
  }
  batch.box('matte', hw0 * 2 + 1.9, bh + 0.3, 0.8, line.px[0], y0 + 8.05, line.pz[0], postC, h0);
}

function buildChevrons(ctx) {
  const { def, line, edge, batch } = ctx;
  const { N, seg, px, py, pz, rx, rz, tx, tz, hw, curv } = line;
  const thr = def.chevronCurvature ?? 1 / 30;
  const C = def.chevron || {};
  const pos = [], uv = [], nor = [], idx = [];
  const step = Math.max(1, Math.round(6.5 / seg));
  let count = 0;
  for (let i = 0; i < N; i += step) {
    // look slightly ahead so boards start before the turn-in point
    const k = curv[(i + Math.round(3 / seg)) % N];
    if (Math.abs(k) < thr || count >= 90) continue;
    const side = k > 0 ? 1 : -1;
    const lat = side * (hw[i] + edge.kerb + edge.wall + 0.55);
    const cx = px[i] + rx[i] * lat, cz = pz[i] + rz[i] * lat;
    const yb = py[i] + def.wall.height + 0.35, hh = 1.7, hl = 1.75;
    const fl = Math.hypot(tx[i], tz[i]), fx = tx[i] / fl, fz = tz[i] / fl;
    const o = pos.length / 3;
    pos.push(cx - fx * hl, yb, cz - fz * hl, cx + fx * hl, yb, cz + fz * hl, cx + fx * hl, yb + hh, cz + fz * hl, cx - fx * hl, yb + hh, cz - fz * hl);
    uv.push(0, 0, 1, 0, 1, 1, 0, 1);
    for (let q = 0; q < 4; q++) nor.push(-rx[i] * side, 0, -rz[i] * side);
    idx.push(o, o + 1, o + 2, o, o + 2, o + 3);
    batch.box('matte', 0.25, yb - 0.1, 0.25, cx + rx[i] * side * 0.14, 0, cz + rz[i] * side * 0.14, 0x3a3f4d);
    ctx.reserve('chevron', cx, cz, 0.3, false);
    count++;
  }
  if (!count) return;
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(nor), 3));
  g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(uv), 2));
  g.setIndex(idx);
  const tex = ctx.tex(256, 128, TX.drawChevron(C.bg ?? '#ffd21f', C.fg ?? '#1b1b22'), { clamp: true, aniso: 4 });
  const m = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: tex, color: tex ? 0xffffff : 0xffd21f, side: THREE.DoubleSide }));
  m.name = 'chevrons';
  ctx.add(m);
}

function buildBoostPads(ctx) {
  const { def, line } = ctx;
  const pads = [], geos = [];
  const half = Math.max(2, Math.round(3 / line.seg));
  for (const b of def.boostAt || []) {
    const i = Math.round(b.t * line.N) % line.N, lat = b.lat || 0;
    geos.push(ribbonGeo(line, i - half, half * 2, () => lat - 2.3, () => lat + 2.3, 0.05, 1, 2));
    pads.push({
      x: line.px[i] + line.rx[i] * lat, z: line.pz[i] + line.rz[i] * lat, radius: 2.7,
      heading: line.head[i], y: line.py[i], t: i / line.N,
    });
  }
  if (geos.length) {
    // merge the small indexed ribbons by hand (same layout)
    const tex = ctx.tex(128, 256, TX.drawBoost(), { aniso: 4 });
    const mat = new THREE.MeshBasicMaterial({
      map: tex, color: tex ? 0xffffff : 0xffb020, transparent: true, depthWrite: false,
      polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4,
    });
    for (const g of geos) {
      const m = new THREE.Mesh(g, mat);
      m.name = 'boostpad';
      m.renderOrder = 2;
      ctx.add(m);
    }
    ctx.onUpdate((dt, time) => {
      if (tex) tex.offset.y = -(time * 1.6) % 1;
      const p = 0.75 + 0.25 * Math.sin(time * 9);
      mat.color.setRGB(p, p, p);
    });
  }
  return pads;
}

function buildGrid(ctx) {
  const { line, sample } = ctx;
  const grid = [];
  for (let i = 0; i < 8; i++) {
    const back = 4.5 + i * 3.3;
    const s = sample(1 - back / line.L);
    // (kart circuits: the road is barely two karts wide, keep the pairs from overlapping)
    const lat = (i % 2 === 0 ? -1 : 1) * Math.max(s.halfWidth * 0.38, 1.05);
    grid.push({
      pos: new THREE.Vector3(s.pos.x + s.right.x * lat, s.pos.y, s.pos.z + s.right.z * lat),
      heading: Math.atan2(s.tangent.x, s.tangent.z),
    });
  }
  return grid;
}

function buildPickups(ctx) {
  const out = [];
  for (const t of ctx.def.pickupAt || []) {
    const s = ctx.sample(t);
    for (const k of [-1, 0, 1]) {
      const lat = k * s.halfWidth * 0.52;
      out.push(new THREE.Vector3(s.pos.x + s.right.x * lat, s.pos.y, s.pos.z + s.right.z * lat));
    }
  }
  return out;
}

function buildObstacles(ctx) {
  const out = [];
  for (const o of ctx.def.obstaclesAt || []) {
    const p = ctx.at(o.t, o.lat);
    out.push({ x: p.x, z: p.z, radius: o.r, y: p.y, kind: o.kind, heading: p.heading });
  }
  return out;
}

// ---------------------------------------------------------------------------------------------
// Entry point
// ---------------------------------------------------------------------------------------------

export function createTrack(def) {
  const ctx = new TrackContext(def);
  const { line } = ctx;
  buildRoad(ctx);
  buildEdges(ctx);
  buildGantry(ctx);
  buildChevrons(ctx);
  const boostPads = buildBoostPads(ctx);
  const startGrid = buildGrid(ctx);
  const pickupSpots = buildPickups(ctx);
  const obstacles = buildObstacles(ctx);
  ctx.obstacles = obstacles;

  def.decorate(ctx); // theme: lights, sky, ground, scenery, obstacle visuals

  for (const m of ctx.batch.build(ctx.mats, ctx.flags)) ctx.group.add(m);
  ctx.group.updateMatrixWorld(true);

  const minimap = [];
  for (let k = 0; k < 120; k++) {
    const i = Math.floor((k / 120) * line.N);
    minimap.push([line.px[i], line.pz[i]]);
  }
  let meshCount = 0, lightCount = 0, triangles = 0;
  ctx.group.traverse((o) => {
    if (o.isMesh) {
      meshCount++;
      const g = o.geometry;
      const n = g.index ? g.index.count / 3 : g.attributes.position.count / 3;
      triangles += n * (o.isInstancedMesh ? o.count : 1);
    }
    if (o.isLight) lightCount++;
  });

  let disposed = false;
  const track = {
    id: def.id,
    name: def.name,
    group: ctx.group,
    background: ctx.background,
    fog: ctx.fog,
    length: line.L,
    sample: ctx.sample,
    project: ctx.project,
    startGrid,
    pickupSpots,
    obstacles: obstacles.map((o) => ({ x: o.x, z: o.z, radius: o.radius })),
    boostPads: boostPads.map((p) => ({ x: p.x, z: p.z, radius: p.radius, heading: p.heading })),
    minimap,
    update(dt, time) {
      for (const f of ctx.anims) f(dt, time);
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      if (ctx.group.parent) ctx.group.parent.remove(ctx.group);
      disposeObject(ctx.group);
      if (ctx.background && ctx.background.isTexture) ctx.background.dispose();
      ctx.anims.length = 0;
    },
    // ---- extras beyond the contract ----
    sun: ctx.sun, // the shadow-casting DirectionalLight (its target is also inside group)
    sunDirection: ctx.sunDir.clone(), // unit vector from the scene towards the sun
    followShadow: (target, range) => ctx.followShadow(target, range), // re-centre shadow frustum on a Vector3
    center: new THREE.Vector3(line.cx, 0, line.cz),
    radius: line.radius, // bounding radius of the centerline around `center`
    samples: line.N,
    ceilingHeight: ctx.ceilingHeight ?? null, // indoor tracks: keep cameras below this (ceiling/walls are see-through from outside)
    wallOffset: ctx.edgeTotal, // visual barrier sits this far outside ±halfWidth (kerb strip in between)
    debug: { footprints: ctx.footprints, meshCount, lightCount, triangles: Math.round(triangles), line },
  };
  return track;
}
