// Track 6 — "Bedtime Bash": the bedroom floor after lights-out. Night-light glow, toy blocks, books and a giant bed.
import * as THREE from 'three';
import * as TX from './textures.js';
import { jitter } from './util.js';
import { gores, bookStack } from './props.js';

const TAU = Math.PI * 2;

export const bedroom = {
  id: 'bedroom',
  name: 'Bedtime Bash',
  description: 'Lights out, engines on. Around the bed legs, over the storybook ramp and past a very large teddy.',
  difficulty: 3,
  defaultLaps: 3,
  seed: 7707,
  halfWidth: 7,
  cornerRadius: 18,
  startFrac: 0.45,
  waypoints: [[-100, -60], [90, -60], [115, 0, 2], [70, 50, 3.5], [15, 25, 1.5], [-30, 70], [-110, 50], [-80, -5]],
  humps: [{ at: 0.42, h: 2.6, len: 36 }, { at: 0.7, h: 1.4, len: 24 }],
  road: { style: 'mat', fallback: 0x3a3e4b, roughness: 0.95 },
  kerb: [0xffc928, 0x6a4bd6],
  wall: {
    height: 1.25, block: 3.0,
    palette: [0x6a4bd6, 0xff6fa8, 0x27c4d9, 0xffc928, 0x35b56a],
    top: [0x9379ea, 0xff9cc4, 0x6adcec, 0xffdc6b, 0x6fd096],
    skirt: 0x2c2350,
  },
  chevronCurvature: 1 / 26,
  chevron: { bg: '#ffc928', fg: '#2c2350' },
  gantry: { beam: 0x6a4bd6, bannerBg: '#2c2350', bannerFg: '#ffe9a8', accent: '#ff6fa8' },
  boostAt: [{ t: 0.06 }, { t: 0.36, lat: -2 }, { t: 0.82, lat: 2 }],
  pickupAt: [0.1, 0.22, 0.4, 0.55, 0.68, 0.9],
  obstaclesAt: [{ t: 0.28, lat: 3, r: 1.2, kind: 'block' }, { t: 0.6, lat: -3, r: 1.2, kind: 'ball' }, { t: 0.86, lat: 3, r: 1.1, kind: 'block' }],
  decorate,
};

function decorate(ctx) {
  const b = ctx.batch, r = ctx.rng;
  const cx = ctx.line.cx, cz = ctx.line.cz;
  ctx.background = new THREE.Color(0x231c44);
  ctx.fog = new THREE.Fog(0x231c44, 260, 1000);
  // moonlight through the window plus the warm night-light
  ctx.lights({ hemi: [0xb9b2ff, 0x5a4636, 1.0], sun: { color: 0xffd9a0, intensity: 2.1, dir: [-0.45, 0.8, 0.4] } });
  ctx.ground(ctx.tex(512, 512, TX.drawWood('#a8743f')), 0xa8743f, 900, 26, { roughness: 0.6 });

  const blockCols = [0xe53a2f, 0x2b7de9, 0xffc928, 0x35b56a, 0xff8a1e, 0xb57bff];
  for (const o of ctx.obstacles) {
    if (o.kind === 'block') {
      b.box('matte', o.radius * 1.5, o.radius * 1.5, o.radius * 1.5, o.x, o.y, o.z, r.pick(blockCols), 0.4);
    } else b.add('gloss', new THREE.SphereGeometry(o.radius, 14, 10), gores([0xff4b3a, 0xffffff, 0x2b7de9, 0xffd21f]), o.x, o.y + o.radius, o.z, 0.6, 0.3);
  }

  // ---- room shell: wallpaper walls, skirting, window with the moon ----
  const RX = 230, RZ = 190, H = 170;
  const paper = ctx.tex(256, 256, TX.drawWallpaper('#3b3170', '#463a86', '#ffe9a8'), { repeat: [14, 6] });
  const wallMat = new THREE.MeshLambertMaterial({ map: paper, color: paper ? 0xffffff : 0x3b3170 });
  for (const [x, z, w, ry] of [[0, -RZ, RX * 2, 0], [0, RZ, RX * 2, Math.PI], [-RX, 0, RZ * 2, Math.PI / 2], [RX, 0, RZ * 2, -Math.PI / 2]]) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(w, H), wallMat);
    m.position.set(cx + x, H / 2, cz + z);
    m.rotation.y = ry;
    m.name = 'wall';
    ctx.add(m);
    b.box('far', ry % Math.PI === 0 ? w : 3, 9, ry % Math.PI === 0 ? 3 : w, cx + x, 0, cz + z, 0xf2e6d0);
    ctx.reserveBox('wall', cx + x, cz + z, ry % Math.PI === 0 ? w : 3, ry % Math.PI === 0 ? 3 : w, 0, false);
  }
  b.add('far', new THREE.PlaneGeometry(RX * 2, RZ * 2), 0x1a1536, cx, H, cz, 0, Math.PI / 2);
  ctx.ceilingHeight = H;
  b.box('glowNoFog', 90, 70, 0.8, cx - 60, 70, cz + RZ - 1.5, 0x4a66c8);
  b.box('far', 98, 4, 3, cx - 60, 66, cz + RZ - 2, 0xf2e6d0);
  b.box('far', 3, 70, 2, cx - 60, 70, cz + RZ - 2.2, 0xf2e6d0);
  b.sphere('glowNoFog', 11, cx - 82, 118, cz + RZ - 3, 0xfff6d0, 1, 1, 0.1, 16, 10);
  // glow-in-the-dark stars on the ceiling
  for (let k = 0; k < 70; k++) b.box('glowNoFog', 2.2, 0.2, 2.2, cx + r.range(-RX + 20, RX - 20), H - 0.6, cz + r.range(-RZ + 20, RZ - 20), r.pick([0xd8ff8a, 0xfff6a0, 0xa8fff0]), r() * TAU);

  // ---- the bed along the south wall ----
  const bz = cz - RZ + 46;
  b.box('far', 250, 10, 84, cx + 20, 34, bz, 0x8a5a3a);
  b.box('far', 254, 16, 88, cx + 20, 44, bz, 0xf4f1ea);
  b.box('far', 180, 6, 90, cx + 55, 58, bz, 0x4a66c8);
  b.box('far', 52, 12, 64, cx - 78, 60, bz, 0xffffff);
  b.box('far', 8, 110, 90, cx - 108, 0, bz, 0x7a4d30);
  for (const [dx, dz] of [[-100, -36], [-100, 36], [140, -36], [140, 36]]) {
    b.cyl('matte', 5, 5, 34, cx + 20 + dx, 0, bz + dz, 0x7a4d30, 10);
    ctx.reserve('bedleg', cx + 20 + dx, bz + dz, 5.5, true);
  }

  // ---- night-light ----
  const nl = ctx.spot('nightlight', cx - 30, cz - 5, 9);
  b.cyl('matte', 7, 8, 3, nl.x, 0, nl.z, 0xf2e6d0, 14);
  b.sphere('glowNoFog', 8, nl.x, 11, nl.z, 0xffd98a, 1, 1.05, 1, 16, 10);
  const lamp = new THREE.PointLight(0xffc070, 900, 160, 1.6);
  lamp.position.set(nl.x, 16, nl.z);
  ctx.add(lamp);
  ctx.onUpdate((dt, t) => { lamp.intensity = 900 + Math.sin(t * 1.3) * 60; });

  // ---- teddy, ball, book stacks, toy train ----
  const td = ctx.spot('teddy', cx + 60, cz + 5, 13);
  const fur = 0xb9793f;
  b.sphere('matte', 11, td.x, 11, td.z, fur, 1, 1.1, 0.95);
  b.sphere('matte', 7.5, td.x, 27, td.z, fur);
  b.sphere('matte', 6, td.x, 10, td.z + 7.5, 0xe2b98a, 1, 1.1, 0.5);
  b.sphere('matte', 3.4, td.x, 25.5, td.z + 6, 0xe2b98a, 1, 0.8, 0.8);
  b.sphere('matte', 1, td.x, 26.4, td.z + 8.6, 0x2a1c14, 1, 1, 1, 8, 6);
  for (const e of [-1, 1]) {
    b.sphere('matte', 3, td.x + e * 6, 33, td.z, fur, 1, 1, 0.6);
    b.sphere('matte', 0.8, td.x + e * 2.8, 29.5, td.z + 6.6, 0x2a1c14, 1, 1, 1, 8, 6);
    b.sphere('matte', 4.4, td.x + e * 11, 15, td.z + 3, fur, 0.9, 1.5, 0.9);
    b.sphere('matte', 5, td.x + e * 7, 3.6, td.z + 9, fur, 1, 0.8, 1.5);
  }
  const ball = ctx.spot('ball', cx - 55, cz + 20, 8);
  b.add('gloss', new THREE.SphereGeometry(7.5, 22, 14), gores([0xff6fa8, 0xffffff, 0x27c4d9, 0xffc928, 0xffffff, 0x6a4bd6]), ball.x, 7.5, ball.z, 0.4, 0.5);
  for (const [x, z, n, s] of [[40, -25, 5, 1.2], [-70, -25, 3, 1.4], [100, 35, 4, 1], [-5, 55, 6, 1.1], [130, -40, 4, 1.3]]) {
    const p = ctx.spot('books', cx + x, cz + z, 9 * s);
    bookStack(ctx, p.x, p.z, n, s);
  }
  const tr = ctx.spot('train', cx + 5, cz - 28, 13);
  for (let k = 0; k < 3; k++) {
    const x = tr.x - 9 + k * 9;
    b.box('gloss', 7.6, 5, 5, x, 1.6, tr.z, [0xe53a2f, 0x2b7de9, 0x35b56a][k]);
    for (const e of [-1, 1]) for (const f of [-1, 1]) b.cyl('matte', 1.6, 1.6, 0.8, x + f * 2.3, 0, tr.z + e * 2.9, 0x1b1b22, 10, 0, Math.PI / 2);
  }
  b.cyl('gloss', 1.1, 1.4, 4, tr.x - 11, 6.6, tr.z, 0x1b1b22, 8);

  // ---- loose blocks, crayons and marbles along the road ----
  ctx.scatterBeside(46, 1, 9, 2.4, (x, z, rad, i, h) => {
    const s = 2.4 + r() * 1.8;
    b.box('matte', s, s, s, x, 0, z, jitter(r.pick(blockCols), r, 0.06), h + r() * TAU);
    b.box('matte', s * 0.76, s * 0.76, s * 1.02, x, s * 0.12, z, 0xfff6dc, h);
  }, { name: 'block', solid: true });
  ctx.scatterBeside(34, 0.6, 7, 2.2, (x, z) => {
    const c = r.pick(blockCols), ry = r() * TAU;
    b.add('matte', new THREE.CylinderGeometry(0.5, 0.5, 6, 8), c, x, 0.5, z, ry, 0, Math.PI / 2);
    b.add('matte', new THREE.ConeGeometry(0.5, 1.2, 8), c, x + Math.cos(ry) * 3.6, 0.5, z - Math.sin(ry) * 3.6, ry, 0, -Math.PI / 2);
  }, { name: 'crayon' });
  ctx.scatterBeside(40, 0.4, 6, 0.7, (x, z) => b.sphere('gloss', 0.7, x, 0.7, z, r.pick([0x27c4d9, 0xff6fa8, 0xffc928, 0x9bff8a]), 1, 1, 1, 10, 7), { name: 'marble' });
}
