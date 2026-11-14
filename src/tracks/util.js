// Shared low-level helpers for the tracks module: RNG, canvas textures, geometry batching.
import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

export const HAS_DOM = typeof document !== 'undefined';

export function makeRng(seed) {
  let a = seed >>> 0;
  const r = () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  r.range = (lo, hi) => lo + (hi - lo) * r();
  r.int = (lo, hi) => Math.floor(lo + (hi - lo + 1) * r());
  r.pick = (arr) => arr[Math.floor(r() * arr.length)];
  r.sign = () => (r() < 0.5 ? -1 : 1);
  return r;
}

const _c = new THREE.Color();
export function col(c) {
  return c && c.isColor ? c : new THREE.Color(c);
}
/** Colour with random brightness jitter. */
export function jitter(c, rnd, amt = 0.08) {
  const k = 1 + (rnd() - 0.5) * 2 * amt;
  const o = new THREE.Color(c);
  o.r *= k; o.g *= k; o.b *= k;
  return o;
}

/** Canvas texture (null in node). */
export function canvasTex(w, h, draw, opts = {}) {
  if (!HAS_DOM) return null;
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  const g = cv.getContext('2d');
  draw(g, w, h);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = opts.clamp ? THREE.ClampToEdgeWrapping : THREE.RepeatWrapping;
  t.anisotropy = opts.aniso ?? 8;
  if (opts.repeat) t.repeat.set(opts.repeat[0], opts.repeat[1]);
  t.needsUpdate = true;
  return t;
}

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3(1, 1, 1);
const _v = new THREE.Vector3();

function normalise(geo, color) {
  if (geo.index) {
    const g = geo.toNonIndexed();
    geo.dispose();
    geo = g;
  }
  const n = geo.attributes.position.count;
  if (!geo.attributes.normal) geo.computeVertexNormals();
  if (!geo.attributes.uv) geo.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(n * 2), 2));
  if (color !== null && color !== undefined) {
    const arr = new Float32Array(n * 3);
    if (typeof color === 'function') {
      const pos = geo.attributes.position;
      for (let i = 0; i < n; i++) {
        _v.fromBufferAttribute(pos, i);
        const c = color(_v.x, _v.y, _v.z, _c);
        arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b;
      }
    } else {
      const c = col(color);
      for (let i = 0; i < n; i++) { arr[i * 3] = c.r; arr[i * 3 + 1] = c.g; arr[i * 3 + 2] = c.b; }
    }
    geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  } else if (!geo.attributes.color) {
    const arr = new Float32Array(n * 3).fill(1);
    geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
  }
  for (const k of Object.keys(geo.attributes)) {
    if (k !== 'position' && k !== 'normal' && k !== 'uv' && k !== 'color') geo.deleteAttribute(k);
  }
  geo.morphAttributes = {};
  return geo;
}

/**
 * Collects many small geometries into a handful of merged meshes (one per material key).
 * Colour is baked into vertex colours.
 */
export class Batch {
  constructor() {
    this.buckets = {};
  }
  /** color: hex | THREE.Color | (x,y,z,tmpColor)=>Color (evaluated in local space) | null (keep/white). y is the object CENTRE here. */
  add(key, geo, color, x = 0, y = 0, z = 0, ry = 0, rx = 0, rz = 0) {
    geo = normalise(geo, color);
    _e.set(rx, ry, rz, 'YXZ');
    _q.setFromEuler(_e);
    _p.set(x, y, z);
    _m.compose(_p, _q, _s);
    geo.applyMatrix4(_m);
    (this.buckets[key] || (this.buckets[key] = [])).push(geo);
    return this;
  }
  /** Box standing on y (base). */
  box(key, w, h, d, x, y, z, color, ry = 0, rx = 0, rz = 0) {
    return this.add(key, new THREE.BoxGeometry(w, h, d), color, x, y + h / 2, z, ry, rx, rz);
  }
  /** Cylinder standing on y (base). */
  cyl(key, rTop, rBot, h, x, y, z, color, seg = 12, ry = 0, rx = 0, rz = 0) {
    return this.add(key, new THREE.CylinderGeometry(rTop, rBot, h, seg), color, x, y + h / 2, z, ry, rx, rz);
  }
  cone(key, r, h, x, y, z, color, seg = 12, ry = 0) {
    return this.add(key, new THREE.ConeGeometry(r, h, seg), color, x, y + h / 2, z, ry);
  }
  /** Sphere centred at (x,y,z), optional non-uniform scale. */
  sphere(key, r, x, y, z, color, sx = 1, sy = 1, sz = 1, ws = 12, hs = 9) {
    const g = new THREE.SphereGeometry(r, ws, hs);
    if (sx !== 1 || sy !== 1 || sz !== 1) g.scale(sx, sy, sz);
    return this.add(key, g, color, x, y, z);
  }
  torus(key, R, r, x, y, z, color, rx = 0, ry = 0, rz = 0, arc = Math.PI * 2, ts = 16, rs = 6) {
    return this.add(key, new THREE.TorusGeometry(R, r, rs, ts, arc), color, x, y, z, ry, rx, rz);
  }
  count(key) {
    return this.buckets[key] ? this.buckets[key].length : 0;
  }
  /** Build one mesh per bucket. mats: {key: Material}, flags: {key: {cast, receive}} */
  build(mats, flags = {}) {
    const out = [];
    for (const key of Object.keys(this.buckets)) {
      const list = this.buckets[key];
      if (!list.length) continue;
      const merged = list.length === 1 ? list[0] : mergeGeometries(list, false);
      if (list.length > 1) for (const g of list) g.dispose();
      if (!merged) throw new Error('merge failed for bucket ' + key);
      const mat = mats[key];
      if (!mat) throw new Error('no material for bucket ' + key);
      const mesh = new THREE.Mesh(merged, mat);
      const f = flags[key] || {};
      mesh.castShadow = !!f.cast;
      mesh.receiveShadow = !!f.receive;
      mesh.name = 'batch:' + key;
      mesh.matrixAutoUpdate = false;
      out.push(mesh);
    }
    this.buckets = {};
    return out;
  }
}

/** Non-indexed quad soup with flat normals and vertex colours. */
export class QuadSoup {
  constructor() {
    this.pos = []; this.nor = []; this.colr = []; this.uv = [];
  }
  /** a,b,c,d: [x,y,z] corners in ring order. (hx,hy,hz): desired facing; winding is flipped to match. */
  quad(a, b, c, d, hx, hy, hz, color, uvs) {
    const ux = b[0] - a[0], uy = b[1] - a[1], uz = b[2] - a[2];
    const vx = d[0] - a[0], vy = d[1] - a[1], vz = d[2] - a[2];
    let nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
    const l = Math.hypot(nx, ny, nz) || 1;
    nx /= l; ny /= l; nz /= l;
    let A = a, B = b, C = c, D = d, UA = 0, UB = 1, UC = 2, UD = 3;
    if (nx * hx + ny * hy + nz * hz < 0) {
      B = d; D = b; UB = 3; UD = 1;
      nx = -nx; ny = -ny; nz = -nz;
    }
    const P = this.pos, N = this.nor, K = this.colr, U = this.uv;
    const tri = [A, B, C, A, C, D];
    const ui = [UA, UB, UC, UA, UC, UD];
    for (let i = 0; i < 6; i++) {
      const p = tri[i];
      P.push(p[0], p[1], p[2]);
      N.push(nx, ny, nz);
      K.push(color.r, color.g, color.b);
      if (uvs) U.push(uvs[ui[i]][0], uvs[ui[i]][1]); else U.push(0, 0);
    }
  }
  get empty() { return this.pos.length === 0; }
  toGeometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(this.pos), 3));
    g.setAttribute('normal', new THREE.BufferAttribute(new Float32Array(this.nor), 3));
    g.setAttribute('uv', new THREE.BufferAttribute(new Float32Array(this.uv), 2));
    g.setAttribute('color', new THREE.BufferAttribute(new Float32Array(this.colr), 3));
    return g;
  }
}

/** BoxGeometry whose side faces show one cell of a cols x rows atlas (top/bottom use a plain corner of the cell). */
export function atlasBox(w, h, d, cellIndex, cols = 4, rows = 4) {
  const g = new THREE.BoxGeometry(w, h, d);
  const cx = cellIndex % cols, cy = Math.floor(cellIndex / cols) % rows;
  const u0 = cx / cols, v0 = 1 - (cy + 1) / rows, du = 1 / cols, dv = 1 / rows;
  const uv = g.attributes.uv;
  for (let i = 0; i < uv.count; i++) {
    const face = Math.floor(i / 4); // +x,-x,+y,-y,+z,-z
    let u = uv.getX(i), v = uv.getY(i);
    if (face === 2 || face === 3) { u = 0.03 + u * 0.05; v = 0.03 + v * 0.05; }
    else { u = 0.01 + u * 0.98; v = 0.01 + v * 0.98; }
    uv.setXY(i, u0 + u * du, v0 + v * dv);
  }
  return g;
}

export function disposeObject(root) {
  const seen = new Set();
  root.traverse((o) => {
    if (o.geometry && !seen.has(o.geometry)) { seen.add(o.geometry); o.geometry.dispose(); }
    const mats = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
    for (const m of mats) {
      if (seen.has(m)) continue;
      seen.add(m);
      for (const k of ['map', 'emissiveMap', 'alphaMap', 'normalMap', 'roughnessMap']) {
        if (m[k] && !seen.has(m[k])) { seen.add(m[k]); m[k].dispose(); }
      }
      m.dispose();
    }
    if (o.isLight && o.shadow && o.shadow.map) o.shadow.map.dispose();
    if (o.dispose && o.isInstancedMesh) o.dispose();
  });
}
