// Kart circuits — karting mode only. Nothing like the big scenic tracks: each one is a TOY KART TRACK SET, snap-together
// plastic track pieces laid out on a table top in a giant room, with a block-built grandstand, peg-people spectators,
// plastic trees, cones and tyre stacks. Short, flat and twisty (hairpins, esses), the road barely two karts wide and
// NO WALLS: run wide and you are on the table top, which is slow.
import * as THREE from 'three';
import * as TX from './textures.js';
import { jitter } from './util.js';
import { trafficCone, bookStack, mug } from './props.js';

const TAU = Math.PI * 2;
const BLOCKS = [0xe53a2f, 0x2b7de9, 0xffc928, 0x35b56a, 0xff8a1e, 0xb57bff];

const BASE = {
  kart: true,
  halfWidth: 2.3,
  cornerRadius: 8,
  startFrac: 0.62,
  // no walls: a kerb, then `runoff` units of slow table top before the invisible limit
  edge: { kerb: 0.7, wall: 0 },
  runoff: 4,
  chevronCurvature: 1 / 11,
  chevron: { bg: '#ffd21f', fg: '#1b1b22' },
  boostAt: [],
  pickupAt: [],
  obstaclesAt: [],
  decorate,
};

export const paddock = {
  ...BASE,
  id: 'kart-paddock',
  name: 'Playmat Grand Prix',
  description: 'An orange plastic track set clipped together on the playroom mat. One short straight, then stacked hairpins.',
  difficulty: 2,
  defaultLaps: 4,
  seed: 5101,
  waypoints: [
    [-60, -40], [60, -40], [60, -18], [20, -18], [20, 4], [60, 4], [60, 28],
    [-10, 28], [-10, -16], [-34, -16], [-34, 28], [-60, 28],
  ],
  road: { style: 'toyOrange', fallback: 0xff7a1c, roughness: 0.35, metalness: 0.05 },
  kerb: [0xffffff, 0x2b7de9],
  gantry: { beam: 0x2b7de9, bannerBg: '#e53a2f', bannerFg: '#ffffff', accent: '#ffd21f' },
  theme: {
    kind: 'playmat', room: 0xbfe3f2, roomFloor: 0xd9b98a, table: 0x4fae5a, tableEdge: 0x2f7d3e,
    hemi: [0xffffff, 0xb8a888, 1.2], sun: { color: 0xfff4dc, intensity: 2.2, dir: [0.4, 0.85, 0.3] }, night: false,
  },
};

export const hollow = {
  ...BASE,
  id: 'kart-hollow',
  name: 'Desk Drift',
  description: 'A blue track set built across the homework desk under the lamp. A fast kink, then four switchbacks between the pencils.',
  difficulty: 3,
  defaultLaps: 4,
  seed: 5202,
  waypoints: [
    [-65, -40], [40, -40], [62, -22, 0, { r: 12 }], [62, 12], [38, 12], [38, -14], [12, -14],
    [12, 30], [-20, 30], [-20, 0], [-44, 0], [-44, 34], [-65, 34],
  ],
  road: { style: 'toyBlue', fallback: 0x2f6fed, roughness: 0.35, metalness: 0.05 },
  kerb: [0xffffff, 0xe53a2f],
  gantry: { beam: 0xffc928, bannerBg: '#2b7de9', bannerFg: '#ffffff', accent: '#e53a2f' },
  theme: {
    kind: 'desk', room: 0xe8cfa8, roomFloor: 0x8a6a4a, table: 0xc99560, tableEdge: 0x9a6c3c,
    hemi: [0xffe6c0, 0x8a6a4a, 1.0], sun: { color: 0xffc98a, intensity: 2.5, dir: [0.6, 0.6, 0.3] }, night: false,
  },
};

export const floodlit = {
  ...BASE,
  id: 'kart-floodlit',
  name: 'Glow Track',
  description: 'Lights off: the glow-in-the-dark set under a string of fairy lights. A long sweeper into the tightest esses of all.',
  difficulty: 4,
  defaultLaps: 4,
  startFrac: 0.58,
  seed: 5303,
  waypoints: [
    [-66, -36], [30, -36], [60, -10, 0, { r: 14 }], [60, 30], [34, 30], [34, 6], [6, 6],
    [6, 34], [-22, 34], [-22, -10], [-44, -10], [-44, 30], [-66, 30],
  ],
  road: { style: 'toyGlow', fallback: 0x0f2a22, roughness: 0.4, metalness: 0.1, emissive: 0.9 },
  kerb: [0x7dff9a, 0x12332a],
  chevron: { bg: '#27f0ff', fg: '#0b0d1e' },
  gantry: { beam: 0x27f0ff, bannerBg: '#0f1228', bannerFg: '#7dff9a', accent: '#ff3fd0' },
  theme: {
    kind: 'glow', room: 0x0d1030, roomFloor: 0x14122a, table: 0x1c1f3e, tableEdge: 0x11132a,
    hemi: [0x8f9be8, 0x241c3a, 0.9], sun: { color: 0xc8d4ff, intensity: 1.7, dir: [0.25, 0.9, 0.35] }, night: true,
  },
};

export const KART_DEFS = [paddock, hollow, floodlit];

// ---- toy parts ------------------------------------------------------------------------------------------

/** A building block with studs on top (base at y). */
function brick(b, x, y, z, w, h, d, color, ry = 0, key = 'gloss') {
  b.box(key, w, h, d, x, y, z, color, ry);
  const nx = Math.max(1, Math.round(w / 1.6)), nz = Math.max(1, Math.round(d / 1.6));
  const c = Math.cos(ry), s = Math.sin(ry);
  for (let i = 0; i < nx; i++) for (let j = 0; j < nz; j++) {
    const lx = ((i + 0.5) / nx - 0.5) * w, lz = ((j + 0.5) / nz - 0.5) * d;
    b.cyl(key, 0.42, 0.42, 0.28, x + lx * c + lz * s, y + h, z - lx * s + lz * c, color, 8);
  }
}
/** Peg person: a painted wooden skittle. */
function peg(b, x, y, z, color, s = 1) {
  b.cyl('gloss', 0.42 * s, 0.6 * s, 1.5 * s, x, y, z, color, 8);
  b.sphere('gloss', 0.5 * s, x, y + 1.9 * s, z, 0xf2c6a0, 1, 1, 1, 8, 6);
}
/** Plastic tree on a round base. */
function toyTree(b, r, x, z, s) {
  b.cyl('gloss', 1.5 * s, 1.7 * s, 0.3 * s, x, 0, z, 0x2f7d3e, 10);
  b.cyl('gloss', 0.35 * s, 0.45 * s, 2.2 * s, x, 0.3 * s, z, 0x8a5a3a, 6);
  const c = jitter(0x35b56a, r, 0.1);
  b.cone('gloss', 1.9 * s, 2.6 * s, x, 2.2 * s, z, c, 8);
  b.cone('gloss', 1.4 * s, 2.2 * s, x, 3.9 * s, z, c, 8);
}

function decorate(ctx) {
  const b = ctx.batch, r = ctx.rng, th = ctx.def.theme, L = ctx.line;
  // ---- the table the set stands on, in a room far too big for it ----
  let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
  for (let i = 0; i < L.N; i++) { x0 = Math.min(x0, L.px[i]); x1 = Math.max(x1, L.px[i]); z0 = Math.min(z0, L.pz[i]); z1 = Math.max(z1, L.pz[i]); }
  const M = 34;
  x0 -= M; x1 += M; z0 -= M; z1 += M;
  const tw = x1 - x0, td = z1 - z0, tx = (x0 + x1) / 2, tz = (z0 + z1) / 2;
  ctx.background = new THREE.Color(th.room);
  ctx.fog = new THREE.Fog(th.room, 500, 1600);
  ctx.lights({ hemi: th.hemi, sun: th.sun });

  const topTex = th.kind === 'desk' ? ctx.tex(512, 512, TX.drawWood('#c99560'), { repeat: [5, 4] }) : null;
  const top = new THREE.Mesh(new THREE.PlaneGeometry(tw, td), new THREE.MeshStandardMaterial({ map: topTex, color: topTex ? 0xffffff : th.table, roughness: th.kind === 'desk' ? 0.5 : 0.95 }));
  top.rotation.x = -Math.PI / 2;
  top.position.set(tx, 0, tz);
  top.receiveShadow = true;
  top.name = 'ground';
  ctx.add(top);
  // rim + apron of the table, the room floor far below, walls far away
  for (const [bx, bz, w, d] of [[tx, z0 - 1.5, tw + 6, 3], [tx, z1 + 1.5, tw + 6, 3], [x0 - 1.5, tz, 3, td], [x1 + 1.5, tz, 3, td]]) {
    b.box('matte', w, 9, d, bx, -8, bz, th.tableEdge);
    ctx.reserveBox('tablerim', bx, bz, w, d, 0, false);
  }
  const FLOOR = -150, RW = 700;
  b.add('far', new THREE.PlaneGeometry(RW * 2, RW * 2), th.roomFloor, tx, FLOOR, tz, 0, -Math.PI / 2);
  for (const [dx, dz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) b.box('far', 9, -FLOOR - 8, 9, tx + dx * (tw / 2 - 12), FLOOR, tz + dz * (td / 2 - 12), th.tableEdge);
  const paper = ctx.tex(256, 256, th.night ? TX.drawWallpaper('#141840', '#1a1f52', '#3a4190') : th.kind === 'desk' ? TX.drawWallpaper('#f2dfbd', '#ecd5ab', '#d99a5c') : TX.drawWallpaper('#cdeaf6', '#bfe1f0', '#ffffff'), { repeat: [10, 4] });
  const wallMat = new THREE.MeshLambertMaterial({ map: paper, color: paper ? 0xffffff : th.room, fog: false });
  for (const [dx, dz, ry] of [[0, -1, 0], [0, 1, Math.PI], [-1, 0, Math.PI / 2], [1, 0, -Math.PI / 2]]) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(RW * 2, 620), wallMat);
    m.position.set(tx + dx * RW, FLOOR + 310, tz + dz * RW);
    m.rotation.y = ry;
    m.name = 'wall';
    ctx.add(m);
  }
  // a window (day) or the moon in it (night) on the far wall
  b.box('glowNoFog', 240, 190, 1, tx + 120, 130, tz + RW - 2, th.night ? 0x27357a : 0xe9f6ff);
  b.box('far', 256, 8, 4, tx + 120, 122, tz + RW - 4, 0xffffff);
  b.box('far', 8, 190, 3, tx + 120, 130, tz + RW - 4, 0xffffff);
  if (th.night) b.sphere('glowNoFog', 26, tx + 60, 260, tz + RW - 6, 0xfff6d0, 1, 1, 0.1, 16, 10);

  // play mat print: painted "grass" islands and parking bays on the table top
  if (th.kind !== 'desk') {
    for (let k = 0; k < 16; k++) {
      const p = ctx.spot('print', r.range(x0 + 12, x1 - 12), r.range(z0 + 12, z1 - 12), 7.6, false, false);
      b.cyl(th.night ? 'glow' : 'matte', 4 + r() * 3, 4 + r() * 3, 0.04, p.x, 0.02, p.z, th.night ? r.pick([0x27f0ff, 0x7dff9a, 0xff3fd0]) : r.pick([0x6fcf7a, 0x3f9a4c, 0xffd95a]), 14);
    }
  }

  // ---- grandstand of building blocks with a peg-people crowd, behind the start straight ----
  const s0 = ctx.sample(0);
  const hd = Math.atan2(s0.tangent.x, s0.tangent.z);
  const out = (s0.pos.x - L.cx) * s0.right.x + (s0.pos.z - L.cz) * s0.right.z >= 0 ? 1 : -1;
  const off = (side, d, along = 0) => ({ x: s0.pos.x + s0.right.x * side * d + s0.tangent.x * along, z: s0.pos.z + s0.right.z * side * d + s0.tangent.z * along });
  for (let k = 0; k < 4; k++) {
    for (let j = -4; j <= 4; j++) {
      const p = off(out, 9 + k * 2.4, 4 + j * 4.8);
      brick(b, p.x, 0, p.z, 2.4, 1.2 + k * 1.2, 4.8, BLOCKS[(j + k + 8) % BLOCKS.length], hd);
      if (r() < 0.8) peg(b, p.x, 1.2 + k * 1.2 + 0.28, p.z, r.pick(BLOCKS));
    }
  }
  const gc = off(out, 12.6, 4);
  ctx.reserveBox('grandstand', gc.x, gc.z, 10, 44, hd);

  // pit garage on the infield side: three block bays with a flat roof
  for (let j = -1; j <= 1; j++) {
    const p = off(-out, 11, -14 + j * 7);
    if (!ctx.free(p.x, p.z, 3.4, false)) continue;
    ctx.reserve('pit', p.x, p.z, 3.4, true);
    for (const e of [-1, 1]) brick(b, p.x + s0.tangent.x * e * 3, 0, p.z + s0.tangent.z * e * 3, 5, 3.4, 0.9, 0xf4f4f4, hd);
    brick(b, p.x, 3.4, p.z, 5.4, 0.8, 7, BLOCKS[j + 1], hd);
  }
  // bunting on toothpick poles
  ctx.bucket('flag', new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide }), false, false);
  for (let k = -4; k <= 4; k++) {
    const p = off(-out, 8, k * 7 + 4);
    if (!ctx.free(p.x, p.z, 0.3, false)) continue;
    ctx.reserve('pole', p.x, p.z, 0.25, false);
    b.cyl('matte', 0.09, 0.09, 6, p.x, 0, p.z, 0xe8d2a6, 5);
    b.add('flag', new THREE.PlaneGeometry(2, 1.3), BLOCKS[(k + 8) % BLOCKS.length], p.x + s0.tangent.x, 5.3, p.z + s0.tangent.z, hd - Math.PI / 2);
  }

  // ---- trackside toys: tyre stacks, cones, plastic trees, loose bricks, peg marshals ----
  const RO = ctx.def.runoff + 0.4; // everything stands beyond the runoff strip
  ctx.scatterBeside(70, RO, RO + 0.8, 0.7, (x, z) => {
    const n = 2 + (r() < 0.5 ? 1 : 0);
    for (let k = 0; k < n; k++) b.cyl('gloss', 0.7, 0.7, 0.5, x, k * 0.52, z, k === n - 1 ? r.pick(BLOCKS) : 0x17171c, 10);
  }, { name: 'tyres' });
  ctx.scatterBeside(30, RO, RO + 2, 0.4, (x, z) => trafficCone(ctx, x, 0, z, 0.8), { name: 'cone', avoidSolids: false });
  ctx.scatterBeside(44, RO + 0.6, RO + 6, 1.8, (x, z) => toyTree(b, r, x, z, 0.9 + r() * 0.7), { name: 'tree', solid: true });
  ctx.scatterBeside(40, RO + 0.4, RO + 7, 1.8, (x, z, rad, i, h) => {
    const w = 1.6 * (1 + Math.floor(r() * 3));
    brick(b, x, 0, z, w, 1.2 * (1 + Math.floor(r() * 2)), 1.6, r.pick(BLOCKS), h + r() * TAU);
  }, { name: 'brick', solid: true });
  ctx.scatterBeside(26, RO, RO + 2, 0.6, (x, z) => peg(b, x, 0, z, r.pick(BLOCKS)), { name: 'marshal' });

  // ---- what else is on the table ----
  const inTable = (x, z, rad) => ({ x: Math.min(x1 - rad - 4, Math.max(x0 + rad + 4, x)), z: Math.min(z1 - rad - 4, Math.max(z0 + rad + 4, z)) });
  const place = (name, fx, fz, rad) => { const q = inTable(x0 + tw * fx, z0 + td * fz, rad); const p = ctx.spot(name, q.x, q.z, rad); return inTable(p.x, p.z, rad); };
  if (th.kind === 'playmat') {
    // block tower, dice, a ball, the box the set came in
    const t = place('tower', 0.08, 0.9, 6);
    for (let k = 0; k < 6; k++) brick(b, t.x, k * 3.2, t.z, 6.4, 3.2, 6.4, BLOCKS[k], k * 0.3);
    for (const [fx, fz] of [[0.93, 0.1], [0.9, 0.92], [0.5, 0.52]]) {
      const d = place('dice', fx, fz, 4);
      b.box('gloss', 5, 5, 5, d.x, 0, d.z, 0xffffff, r() * TAU);
      for (const [px, pz] of [[-1.2, -1.2], [1.2, 1.2], [0, 0]]) b.cyl('matte', 0.5, 0.5, 0.06, d.x + px, 5, d.z + pz, 0x1b1b22, 8);
    }
    const bx = place('setbox', 0.5, 0.04, 12);
    b.box('matte', 30, 7, 14, bx.x, 0, bx.z, 0xe53a2f, 0.12);
    b.box('matte', 26, 0.2, 10, bx.x, 7, bx.z, 0xffd21f, 0.12);
  } else if (th.kind === 'desk') {
    // pencils, an eraser, a ruler, a mug, schoolbooks and the desk lamp
    for (let k = 0; k < 14; k++) {
      const p = ctx.spot('pencil', r.range(x0 + 12, x1 - 12), r.range(z0 + 12, z1 - 12), 5, false);
      const c = r.pick(BLOCKS), ry = r() * TAU;
      b.add('gloss', new THREE.CylinderGeometry(0.45, 0.45, 9, 6), c, p.x, 0.45, p.z, ry, 0, Math.PI / 2);
      b.add('matte', new THREE.ConeGeometry(0.45, 1.3, 6), 0xe8c9a0, p.x + Math.cos(ry) * 5.1, 0.45, p.z - Math.sin(ry) * 5.1, ry, 0, -Math.PI / 2);
    }
    const er = place('eraser', 0.5, 0.5, 4);
    b.box('matte', 6, 2, 3, er.x, 0, er.z, 0xff8ad1, 0.4);
    b.box('matte', 3.2, 2.06, 3.06, er.x + 1.3, 0, er.z - 0.55, 0x2b7de9, 0.4);
    const ru = place('ruler', 0.5, 0.96, 4);
    b.box('gloss', 70, 0.3, 5, ru.x, 0, ru.z, 0xffe066);
    for (let k = -17; k <= 17; k++) b.box('matte', 0.2, 0.32, k % 5 ? 1.4 : 2.6, ru.x + k * 2, 0, ru.z - 1.4, 0x1b1b22);
    ctx.reserveBox('ruler', ru.x, ru.z, 70, 5, 0, false);
    const mg = place('mug', 0.94, 0.9, 6);
    mug(ctx, mg.x, mg.z, 1.3, 0x2b7de9);
    const bk = place('books', 0.06, 0.08, 11);
    bookStack(ctx, bk.x, bk.z, 4, 1.1);
    const lp = place('lamp', 0.95, 0.08, 8);
    b.cyl('gloss', 7, 7.6, 1.6, lp.x, 0, lp.z, 0x2a2a30, 16);
    b.cyl('gloss', 0.8, 0.8, 46, lp.x, 1.6, lp.z, 0x2a2a30, 8);
    b.add('gloss', new THREE.ConeGeometry(12, 13, 16, 1, true), 0xe53a2f, lp.x - 9, 50, lp.z + 6, 0, 0.5, 0.5);
    b.sphere('glowNoFog', 4.5, lp.x - 9, 47, lp.z + 6, 0xfff0c0);
  } else {
    // fairy lights over the table, glow sticks, glowing stars stuck on the table top
    for (let k = 0; k < 5; k++) {
      const a = k * 1.26, xa = tx + Math.cos(a) * tw * 0.46, za = tz + Math.sin(a) * td * 0.46, xb = tx - Math.cos(a + 0.5) * tw * 0.46, zb = tz - Math.sin(a + 0.5) * td * 0.46;
      for (let j = 0; j <= 28; j++) {
        const f = j / 28;
        b.sphere('glowNoFog', 0.3, xa + (xb - xa) * f, 15 - Math.sin(f * Math.PI) * 5, za + (zb - za) * f, [0xfff0a0, 0x27f0ff, 0xff3fd0, 0x7dff9a][j % 4], 1, 1, 1, 6, 4);
      }
    }
    for (let k = 0; k < 12; k++) {
      const p = ctx.spot('glowstick', r.range(x0 + 12, x1 - 12), r.range(z0 + 12, z1 - 12), 4, false);
      b.add('glow', new THREE.CylinderGeometry(0.4, 0.4, 8, 8), r.pick([0x27f0ff, 0x7dff9a, 0xff3fd0, 0xfff36b]), p.x, 0.4, p.z, r() * TAU, 0, Math.PI / 2);
    }
  }
}
