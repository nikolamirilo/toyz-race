// Small reusable prop builders. Everything is baked into the context's geometry batches.
import * as THREE from 'three';
import { atlasBox, jitter, col } from './util.js';
import { BRAND_COLORS } from './textures.js';

const TAU = Math.PI * 2;

/** Vertex-colour function: stripes by angle around Y. */
export function gores(colors, n = colors.length) {
  const cs = colors.map(col);
  return (x, y, z, c) => {
    const a = (Math.atan2(z, x) + Math.PI) / TAU;
    return c.copy(cs[Math.min(n - 1, Math.floor(a * n)) % cs.length]);
  };
}
/** Vertex-colour function: horizontal bands by height. */
export function bands(colors, y0, y1) {
  const cs = colors.map(col);
  return (x, y, z, c) => {
    const a = Math.max(0, Math.min(0.9999, (y - y0) / (y1 - y0)));
    return c.copy(cs[Math.floor(a * cs.length)]);
  };
}

export function flower(ctx, x, z, s, petal, centre = 0xffd23a) {
  const b = ctx.batch, r = ctx.rng;
  const h = (7 + r() * 6) * s;
  const ry = r() * TAU, tilt = -0.35 - r() * 0.5;
  b.cyl('matte', 0.2 * s, 0.3 * s, h, x, 0, z, jitter(0x3f9a3a, r, 0.1), 6);
  for (let k = 0; k < 2; k++) {
    const g = new THREE.SphereGeometry(1, 6, 4);
    g.scale(2.2 * s, 0.15 * s, 0.8 * s);
    g.translate(2.2 * s, 0, 0);
    b.add('matte', g, jitter(0x4fb043, r, 0.1), x, h * (0.3 + 0.25 * k), z, ry + k * 2.6, 0, 0.5);
  }
  const n = 7 + r.int(0, 2);
  for (let k = 0; k < n; k++) {
    const g = new THREE.SphereGeometry(1, 6, 4);
    g.scale(0.62 * s, 1.25 * s, 0.2 * s);
    g.translate(0, 1.7 * s, 0);
    g.rotateZ((k / n) * TAU);
    b.add('matte', g, petal, x, h, z, ry, tilt);
  }
  const g = new THREE.SphereGeometry(0.95 * s, 8, 6);
  g.scale(1, 1, 0.55);
  b.add('matte', g, centre, x, h, z, ry, tilt);
}

export function rock(ctx, x, z, r, color = 0x9a9a98, y = 0) {
  const g = new THREE.DodecahedronGeometry(r, 0);
  g.scale(1, 0.62, 0.85);
  ctx.batch.add('matte', g, jitter(color, ctx.rng, 0.12), x, y + r * 0.35, z, ctx.rng() * TAU, ctx.rng() * 0.4);
}

export function mushroom(ctx, x, z, s) {
  const b = ctx.batch, r = ctx.rng;
  b.cyl('matte', 1.0 * s, 1.4 * s, 3.2 * s, x, 0, z, 0xf3ead8, 8);
  const cap = new THREE.SphereGeometry(3.4 * s, 12, 6, 0, TAU, 0, Math.PI / 2);
  cap.scale(1, 0.7, 1);
  b.add('matte', cap, 0xd9382e, x, 3 * s, z);
  b.cyl('matte', 3.4 * s, 3.4 * s, 0.2 * s, x, 2.9 * s, z, 0xf0e2c8, 12);
  for (let k = 0; k < 6; k++) {
    const a = r() * TAU, e = 0.3 + r() * 0.9;
    b.sphere('matte', 0.45 * s, x + Math.cos(a) * Math.sin(e) * 3.3 * s, 3 * s + Math.cos(e) * 2.35 * s, z + Math.sin(a) * Math.sin(e) * 3.3 * s, 0xffffff, 1, 0.5, 1, 6, 4);
  }
}

/** Colourful package box using the 4x4 atlas bucket ('atlas'). y = base. */
export function pkg(ctx, w, h, d, x, y, z, ry = 0, lying = false, cell = -1) {
  const idx = cell >= 0 ? cell : ctx.rng.int(0, 15);
  const g = atlasBox(w, h, d, idx);
  const c = ctx.atlasTex ? 0xffffff : BRAND_COLORS[idx];
  if (lying) ctx.batch.add('atlas', g, c, x, y + d / 2, z, ry, Math.PI / 2);
  else ctx.batch.add('atlas', g, c, x, y + h / 2, z, ry);
}

export function bookStack(ctx, x, z, n, s = 1) {
  const b = ctx.batch, r = ctx.rng;
  const cols = [0xb8322c, 0x2c5fa8, 0x2f8a4e, 0xd99a2b, 0x6b3fa0, 0x1f7f8c, 0xcf5c2e];
  let y = 0;
  for (let i = 0; i < n; i++) {
    const w = (11 + r() * 4) * s, d = (8 + r() * 2.5) * s, h = (1.6 + r() * 1.6) * s, ry = r() * TAU;
    b.box('matte', w, h, d, x, y, z, r.pick(cols), ry);
    b.box('matte', w * 0.94, h * 0.72, d * 1.02, x, y + h * 0.14, z, 0xf4efe2, ry);
    y += h;
  }
  return y;
}

export function mug(ctx, x, z, s, color) {
  const b = ctx.batch;
  b.cyl('gloss', 4 * s, 3.6 * s, 8.5 * s, x, 0, z, color, 16);
  b.cyl('matte', 3.5 * s, 3.5 * s, 0.3, x, 8.3 * s, z, 0x4a2c1a, 16);
  const a = ctx.rng() * TAU;
  b.torus('gloss', 2.6 * s, 0.75 * s, x + Math.cos(a) * 4.2 * s, 4.4 * s, z - Math.sin(a) * 4.2 * s, color, 0, a, 0, TAU, 14, 6);
}

export function trafficCone(ctx, x, y, z, s) {
  const b = ctx.batch;
  b.box('matte', 1.9 * s, 0.22 * s, 1.9 * s, x, y, z, 0xff6a13);
  b.add('matte', new THREE.CylinderGeometry(0.16 * s, 0.8 * s, 2.5 * s, 12), bands([0xff6a13, 0xffffff, 0xff6a13, 0xffffff, 0xff6a13], -1.25 * s, 1.25 * s), x, y + 0.22 * s + 1.25 * s, z);
}
