// Track 3 — "Midnight Megamart": toy-shop aisles after closing time, neon everywhere.
import * as THREE from 'three';
import * as TX from './textures.js';
import { Batch, jitter } from './util.js';
import { pkg, trafficCone, gores, bands } from './props.js';

const TAU = Math.PI * 2;
const NEON = [0x27f0ff, 0xff3fd0, 0xb6ff3a, 0xffa22e, 0xfff04a, 0x8a6bff];

export const toyshop = {
  id: 'toyshop',
  name: 'Midnight Megamart',
  description: 'After closing time in the toy aisles. Tight right-angle turns between towering shelves, lit only by neon.',
  difficulty: 3,
  defaultLaps: 3,
  seed: 3303,
  halfWidth: 6.5,
  cornerRadius: 12,
  startFrac: 0.45,
  waypoints: [[-100, -70], [100, -70], [100, -30], [10, -30], [10, 10], [100, 10], [100, 70], [-50, 70], [-50, 20], [-100, 20]],
  humps: [{ at: 0.59, h: 2.2, len: 30 }, { at: 0.375, h: 1.2, len: 22 }],
  road: { style: 'neon', fallback: 0x14183a, roughness: 0.32, metalness: 0.25, emissive: 0.85 },
  kerb: [0x1b1f3d, 0xffe14a],
  wall: { height: 1.2, block: 4, palette: [0x232850, 0x1a1e40], top: [0x27f0ff, 0xff3fd0], skirt: 0x151833, glowTop: true },
  chevronCurvature: 1 / 20,
  chevron: { bg: '#12142c', fg: '#27f0ff' },
  gantry: { beam: 0xff3fd0, post: 0x2a2f55, bannerBg: '#0c0e24', bannerFg: '#27f0ff', accent: '#ff3fd0' },
  boostAt: [{ t: 0.04 }, { t: 0.5 }, { t: 0.84 }],
  pickupAt: [0.09, 0.22, 0.33, 0.46, 0.63, 0.92],
  obstaclesAt: [{ t: 0.25, lat: 3, r: 1.0, kind: 'cone' }, { t: 0.705, lat: -3, r: 1.0, kind: 'cone' }, { t: 0.78, lat: 2.5, r: 1.1, kind: 'wetfloor' }],
  decorate,
};

/** Long shelf unit full of boxes. Axis along X when ry = 0. */
function shelf(ctx, cx, cz, len, depth, ry, height, neon, oneSided = 0) {
  const b = ctx.batch, r = ctx.rng;
  const c = Math.cos(ry), s = Math.sin(ry);
  const W = (lx, lz) => [cx + lx * c + lz * s, cz - lx * s + lz * c];
  const steel = 0x2c3257;
  const levels = Math.floor((height - 2) / 12);
  for (let k = 0; k <= levels; k++) {
    b.box('matte', len, 0.8, depth, cx, k * 12 + (k === 0 ? 0.6 : 0), cz, k === levels ? 0x3a4170 : steel, ry);
    if (k > 0) for (const sd of [-1, 1]) {
      if (oneSided && sd !== oneSided) continue;
      const [x, z] = W(0, sd * (depth / 2 + 0.15));
      b.box('glow', len, 0.5, 0.3, x, k * 12 + 0.15, z, neon, ry);
    }
  }
  b.box('matte', len, levels * 12, 0.6, cx, 0.6, cz, 0x1d2142, ry); // back panel
  const nUp = Math.max(2, Math.round(len / 22));
  for (let i = 0; i <= nUp; i++) for (const sd of [-1, 1]) {
    const [x, z] = W(-len / 2 + (i / nUp) * len, sd * (depth / 2 - 0.4));
    b.box('matte', 0.9, levels * 12 + 1.4, 0.9, x, 0, z, 0x444c80, ry);
  }
  const bd = depth / 2 - 1.3;
  for (let k = 0; k < levels; k++) for (const sd of [-1, 1]) {
    if (oneSided && sd !== oneSided) continue;
    let lx = -len / 2 + 1.5;
    while (lx < len / 2 - 6) {
      const w = 4.5 + r() * 4.5, h = 5 + r() * 5.5;
      if (r() < 0.9) {
        const [x, z] = W(lx + w / 2, sd * (bd / 2 + 0.7));
        if (r() < 0.12) b.sphere('gloss', Math.min(w, 9) / 2, x, k * 12 + (k === 0 ? 1.4 : 0.8) + Math.min(w, 9) / 2, z, r.pick(NEON), 1, 1, 1, 10, 8);
        else pkg(ctx, w, h, bd, x, k * 12 + (k === 0 ? 1.4 : 0.8), z, ry + (sd > 0 ? 0 : Math.PI));
      }
      lx += w + 0.5 + r() * 1.2;
    }
  }
  ctx.reserveBox('shelf', cx, cz, len + 1, depth + 1, ry);
}

function decorate(ctx) {
  const b = ctx.batch, r = ctx.rng;
  ctx.background = new THREE.Color(0x070818);
  ctx.fog = new THREE.Fog(0x0a0c24, 140, 560);
  ctx.lights({ hemi: [0x7f8cff, 0x241638, 0.85], ambient: [0x4a4a80, 0.55], sun: { color: 0xb4c8ff, intensity: 1.15, dir: [-0.3, 1, 0.45] } });
  const floorTex = ctx.tex(512, 512, TX.drawTiles('#161c3c', '#1b2248', '#2a3470', ['rgba(140,170,255,0.8)', 'rgba(255,120,230,0.6)', 'rgba(0,0,0,0.5)']));
  ctx.ground(floorTex, 0x181e40, 760, 38, { roughness: 0.22, metalness: 0.35 });

  ctx.atlasTex = ctx.tex(1024, 1024, TX.drawPackages(), { clamp: true });
  const am = new THREE.MeshLambertMaterial({ map: ctx.atlasTex, vertexColors: true });
  if (ctx.atlasTex) { am.emissiveMap = ctx.atlasTex; am.emissive = new THREE.Color(0xffffff); am.emissiveIntensity = 0.42; }
  ctx.bucket('atlas', am, true, true);

  // ---- obstacles ----
  for (const o of ctx.obstacles) {
    if (o.kind === 'cone') trafficCone(ctx, o.x, o.y, o.z, o.radius * 1.05);
    else {
      for (const s of [-1, 1]) b.box('matte', 1.7, 2.6, 0.12, o.x + Math.cos(o.heading) * 0 + s * 0.45 * Math.sin(o.heading), o.y, o.z + s * 0.45 * Math.cos(o.heading), 0xffd21f, o.heading, -s * 0.33);
      b.box('glow', 0.9, 0.9, 0.05, o.x, o.y + 2.75, o.z, 0xffe14a, o.heading);
    }
  }

  // ---- shelves between the aisles ----
  shelf(ctx, 0, -50, 160, 14, 0, 62, NEON[0]);
  shelf(ctx, 58, -10, 60, 14, 0, 62, NEON[1]);
  shelf(ctx, -47.5, -18, 75, 14, 0, 62, NEON[2]);
  shelf(ctx, 27.5, 40, 115, 18, 0, 62, NEON[3]);
  // perimeter shelves (skyline)
  const RX = 162, RZ = 120, H = 100;
  shelf(ctx, 0, -RZ + 9, 300, 14, 0, 74, NEON[5], 1);
  shelf(ctx, 0, RZ - 9, 300, 14, 0, 62, NEON[4], -1);
  shelf(ctx, -RX + 9, 0, 200, 14, Math.PI / 2, 74, NEON[1], 1);
  shelf(ctx, RX - 9, 0, 200, 14, Math.PI / 2, 74, NEON[0], -1);

  // ---- room shell ----
  // single-sided (inward facing) so a fly-over camera above the ceiling can still look into the shop
  b.add('far', new THREE.PlaneGeometry(RX * 2, RZ * 2), 0x0b0d20, 0, H, 0, 0, Math.PI / 2);
  for (const [x, z, w, d, ry] of [[0, -RZ, RX * 2, 2, 0], [0, RZ, RX * 2, 2, Math.PI], [-RX, 0, 2, RZ * 2, Math.PI / 2], [RX, 0, 2, RZ * 2, -Math.PI / 2]]) {
    b.add('far', new THREE.PlaneGeometry(Math.max(w, d), H), 0x12142e, x, H / 2, z, ry);
    ctx.reserveBox('shopwall', x, z, w, d, 0, false);
  }
  ctx.ceilingHeight = H;
  // moonlit windows high on the north wall + ceiling night-lights
  for (let k = -3; k <= 3; k++) b.box('glow', 30, 20, 0.6, k * 42, 70, RZ - 1.4, 0x9cb8ff);
  for (let i = -2; i <= 2; i++) for (let j = -1; j <= 1; j++) {
    b.box('glow', 46, 0.5, 2.2, i * 62, H - 0.6, j * 70, 0x6f86e8);
    b.box('far', 50, 1.6, 5, i * 62, H - 1.4, j * 70, 0x1c2046);
  }

  // ---- neon signs ----
  const signs = [];
  const sign = (text, color, x, y, z, ry, w = 40, h = 13) => {
    const tex = ctx.tex(512, 160, TX.drawNeonText(text, color), { clamp: true });
    const mat = new THREE.MeshBasicMaterial({ map: tex, color: tex ? 0xffffff : color, transparent: !!tex });
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
    m.position.set(x, y, z);
    m.rotation.y = ry;
    m.name = 'neon-sign';
    ctx.add(m);
    b.box('far', w * 0.96, h * 0.9, 0.8, x - Math.sin(ry) * 0.7, y - h * 0.45, z - Math.cos(ry) * 0.7, 0x0c0e22, ry);
    signs.push(mat);
  };
  sign('TOYS', '#27f0ff', -40, 70, -57.2, Math.PI);
  sign('GAMES', '#ff3fd0', 45, 70, -42.8, 0);
  sign('ROBOTS', '#b6ff3a', 58, 70, -17.2, Math.PI);
  sign('PUZZLES', '#ffa22e', 27, 70, 49.2, 0);
  sign('SALE', '#fff04a', -47, 70, -10.8, 0, 30, 13);
  sign('OPEN 24H', '#ff3fd0', 0, 84, -RZ + 17, 0, 90, 24);
  ctx.onUpdate((dt, t) => {
    const f = Math.sin(t * 31) > 0.82 || Math.sin(t * 2.3) > 0.97 ? 0.35 : 1;
    signs[1].color.setScalar(f);
    signs[4].color.setScalar(0.75 + 0.25 * Math.sin(t * 3));
  });

  // coloured light pools
  const pools = [[-60, -60, 0xff3fd0], [70, -22, 0x27f0ff], [60, 58, 0xffa22e], [-78, 30, 0xb6ff3a]];
  for (const [x, z, c] of pools) {
    const p = new THREE.PointLight(c, 520, 150, 1.5);
    p.position.set(x, 26, z);
    ctx.add(p);
  }

  // ---- giant toys ----
  const teddy = ctx.spot('teddy', -112, 72, 16);
  {
    const { x, z } = teddy, f = 0x9a6a3c, l = 0xd9b48a;
    b.sphere('matte', 12, x, 12, z, f, 1, 1.1, 0.95, 16, 12);
    b.sphere('matte', 8.5, x, 30, z, f, 1, 0.95, 0.95, 16, 12);
    for (const s of [-1, 1]) {
      b.sphere('matte', 3.2, x + s * 6.5, 37, z, f);
      b.sphere('matte', 1.8, x + s * 6.5, 37, z - 1.6, l, 1, 1, 0.5);
      b.sphere('matte', 4.4, x + s * 12, 17, z - 3, f, 1, 1.5, 1);
      b.sphere('matte', 5, x + s * 7.5, 3.6, z - 9, f, 1, 0.75, 1.5);
      b.sphere('matte', 1, x + s * 3.2, 32, z - 7.4, 0x111111, 1, 1, 1, 8, 6);
    }
    b.sphere('matte', 4, x, 28, z - 6.5, l, 1, 0.8, 0.9);
    b.sphere('matte', 1.3, x, 29, z - 10, 0x2a1a12, 1, 0.8, 1, 8, 6);
    b.sphere('matte', 6.5, x, 12, z - 8.5, l, 1, 1.1, 0.5);
  }
  const robot = ctx.spot('robot', 132, 44, 13);
  {
    const { x, z } = robot;
    for (const s of [-1, 1]) {
      b.box('gloss', 5, 13, 6, x + s * 4.5, 0, z, 0x8892a6);
      b.box('gloss', 4, 15, 4, x + s * 10.5, 14, z, 0x8892a6);
      b.sphere('glow', 1.6, x + s * 3, 38, z - 4.6, 0xfff04a, 1, 1, 0.4, 8, 6);
    }
    b.box('gloss', 16, 18, 10, x, 13, z, 0x2bb8c9);
    b.box('gloss', 11, 9, 9, x, 33, z, 0xc8d0de);
    b.box('glow', 8, 1.2, 0.5, x, 34.5, z - 4.6, 0xff3fd0);
    b.cyl('gloss', 0.4, 0.4, 6, x, 42, z, 0x8892a6, 6);
    b.sphere('glow', 1.3, x, 48.6, z, 0xff3f5a, 1, 1, 1, 8, 6);
    for (let k = 0; k < 3; k++) b.box('glow', 2.4, 2.4, 0.5, x - 4 + k * 4, 22, z - 5.1, NEON[k]);
  }
  const rocket = ctx.spot('rocket', 132, -42, 11);
  {
    const { x, z } = rocket;
    b.cyl('gloss', 6, 6, 34, x, 8, z, 0xf2f2f5, 16);
    b.cone('gloss', 6, 14, x, 42, z, 0xe53a2f, 16);
    b.cyl('gloss', 4, 6, 4, x, 4, z, 0x444a5c, 16);
    for (let k = 0; k < 3; k++) {
      const a = (k / 3) * TAU;
      b.box('gloss', 1, 14, 8, x + Math.sin(a) * 8.5, 0, z + Math.cos(a) * 8.5, 0xe53a2f, a);
    }
    b.sphere('glow', 2.6, x, 30, z - 5.4, 0x27f0ff, 1, 1, 0.3, 12, 8);
    b.torus('gloss', 2.9, 0.5, x, 30, z - 5.9, 0x8892a6, 0, 0, 0, TAU, 14, 6);
  }
  const rings = ctx.spot('ringstack', -130, -38, 11);
  b.cyl('matte', 1.6, 2.4, 26, rings.x, 0, rings.z, 0xffe14a, 10);
  [0xe53a2f, 0xffa22e, 0xfff04a, 0x35b56a, 0x2b7de9].forEach((c, i) => b.torus('gloss', 9 - i * 1.4, 2.3 - i * 0.12, rings.x, 2.4 + i * 4.4, rings.z, c, Math.PI / 2, 0, 0, TAU, 20, 8));

  const bin = ctx.spot('ballbin', -62, 2, 10);
  for (const [dx, dz] of [[-8, -8], [8, -8], [-8, 8], [8, 8]]) b.box('matte', 0.8, 14, 0.8, bin.x + dx, 0, bin.z + dz, 0x8892a6);
  for (const y of [0.4, 7, 13.6]) {
    b.box('matte', 17, 0.6, 0.6, bin.x, y, bin.z - 8, 0x8892a6); b.box('matte', 17, 0.6, 0.6, bin.x, y, bin.z + 8, 0x8892a6);
    b.box('matte', 0.6, 0.6, 17, bin.x - 8, y, bin.z, 0x8892a6); b.box('matte', 0.6, 0.6, 17, bin.x + 8, y, bin.z, 0x8892a6);
  }
  for (let k = 0; k < 34; k++) {
    b.add('gloss', new THREE.SphereGeometry(2.6, 10, 8), gores([r.pick(NEON), 0xffffff]), bin.x + r.range(-5, 5), 2.8 + r() * 11, bin.z + r.range(-5, 5), r() * 3, r() * 3);
  }

  // balloons (bobbing)
  [[-20, 4], [120, 95], [-128, 98], [60, 96]].forEach(([wx, wz], i) => {
    const p = ctx.spot('balloons', wx, wz, 5);
    b.box('matte', 3, 2, 3, p.x, 0, p.z, 0x3a4170);
    const bb = new Batch();
    for (let k = 0; k < 5; k++) {
      const ox = r.range(-5, 5), oz = r.range(-5, 5), oy = 26 + r() * 10;
      bb.sphere('b', 4, ox, oy, oz, NEON[(i + k) % NEON.length], 1, 1.22, 1, 12, 9);
      const len = Math.hypot(ox, oy - 2, oz);
      const g = new THREE.CylinderGeometry(0.07, 0.07, len, 4);
      g.translate(0, len / 2, 0);
      g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(ox, oy - 2, oz).normalize()));
      bb.add('b', g, 0xdddddd, 0, 2, 0);
    }
    const m = bb.build({ b: ctx.mats.gloss })[0];
    m.matrixAutoUpdate = true;
    m.position.set(p.x, 0, p.z);
    m.name = 'balloons';
    ctx.add(m);
    ctx.onUpdate((dt, t) => {
      m.position.y = Math.sin(t * 1.1 + i * 2) * 0.8;
      m.rotation.y = Math.sin(t * 0.5 + i) * 0.25;
    });
  });

  // loose boxes, blocks and cones in the unused floor space
  ctx.scatter(46, [-150, -108, 150, 108], () => 4 + r() * 3, (x, z, rad) => {
    const k = r();
    if (k < 0.5) pkg(ctx, rad * 1.3, rad * 1.5, rad * 1.1, x, 0, z, r() * TAU);
    else if (k < 0.8) {
      const s = rad * 0.9, c = r.pick(NEON);
      b.box('gloss', s, s, s, x, 0, z, c, r() * TAU);
      if (r() < 0.5) b.box('gloss', s * 0.8, s * 0.8, s * 0.8, x, s, z, r.pick(NEON), r() * TAU);
    } else {
      b.add('gloss', new THREE.SphereGeometry(rad * 0.8, 14, 10), gores([r.pick(NEON), 0xffffff, r.pick(NEON), 0xffffff]), x, rad * 0.8, z, r() * 3, r() * 3);
    }
  }, { name: 'floor-toy', solid: true });
  ctx.scatterBeside(10, 0.8, 4, 1.4, (x, z) => trafficCone(ctx, x, 0, z, 1.3), { name: 'cone', solid: true });
}
