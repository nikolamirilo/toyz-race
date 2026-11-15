// Kart circuits — karting mode only. Short, flat, twisty ribbons like a real outdoor kart track: hairpins, esses and
// chicanes packed into a small paddock, tyre walls right at the kerb. The road is about a third as wide as a normal
// track, so the line through a corner is everything.
import * as THREE from 'three';
import * as TX from './textures.js';
import { jitter } from './util.js';
import { trafficCone } from './props.js';

const TAU = Math.PI * 2;

const BASE = {
  kart: true,
  halfWidth: 2.3,
  cornerRadius: 8,
  startFrac: 0.62,
  edge: { kerb: 0.7, wall: 0.5 },
  road: { style: 'asphalt', fallback: 0x4a4d55, roughness: 0.9 },
  kerb: [0xe53a2f, 0xf7f3ea],
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
  name: 'Paddock Twist',
  description: 'A tight club circuit folded into the paddock: one short straight, then nothing but hairpins.',
  difficulty: 2,
  defaultLaps: 4,
  seed: 5101,
  waypoints: [
    [-60, -40], [60, -40], [60, -18], [20, -18], [20, 4], [60, 4], [60, 28],
    [-10, 28], [-10, -16], [-34, -16], [-34, 28], [-60, 28],
  ],
  wall: { height: 0.75, block: 1.5, palette: [0xe53a2f, 0xf4f4f4], top: [0xf2685f, 0xffffff], skirt: 0x2a2a30 },
  gantry: { beam: 0xe53a2f, bannerBg: '#1b1b22', bannerFg: '#ffffff', accent: '#ffd21f' },
  theme: {
    sky: [[0, 0xe6f3ff], [0.12, 0xb9dcff], [0.5, 0x6ab0f0], [1, 0x2f7fd6]], fog: 0xd6ecff,
    hemi: [0xd8ecff, 0x6f9a45, 1.15], sun: { color: 0xfff1d0, intensity: 2.3, dir: [0.4, 0.85, 0.3] },
    groundTint: 0xffffff, tree: 0x3f9440, tyre: [0xe53a2f, 0xf4f4f4, 0x2b7de9], night: false,
  },
};

export const hollow = {
  ...BASE,
  id: 'kart-hollow',
  name: 'Hairpin Hollow',
  description: 'Golden-hour laps: a fast kink into the stadium section, then four switchbacks in a row.',
  difficulty: 3,
  defaultLaps: 4,
  seed: 5202,
  waypoints: [
    [-65, -40], [40, -40], [62, -22, 0, { r: 12 }], [62, 12], [38, 12], [38, -14], [12, -14],
    [12, 30], [-20, 30], [-20, 0], [-44, 0], [-44, 34], [-65, 34],
  ],
  wall: { height: 0.75, block: 1.5, palette: [0x2b7de9, 0xf4f4f4], top: [0x66a3f2, 0xffffff], skirt: 0x2a2a30 },
  kerb: [0x2b7de9, 0xf7f3ea],
  gantry: { beam: 0x2b7de9, bannerBg: '#ff7a1c', bannerFg: '#1b1b22', accent: '#ffffff' },
  theme: {
    sky: [[0, 0xffd9a8], [0.1, 0xffb37a], [0.4, 0xf08a7a], [1, 0x5a5aa8]], fog: 0xffcfa0,
    hemi: [0xffd9b0, 0x7a6a45, 1.0], sun: { color: 0xffb060, intensity: 2.4, dir: [0.75, 0.42, 0.25] },
    groundTint: 0xf0d8a8, tree: 0x4c7f3a, tyre: [0x2b7de9, 0xf4f4f4, 0xffc928], night: false,
  },
};

export const floodlit = {
  ...BASE,
  id: 'kart-floodlit',
  name: 'Floodlight Fury',
  description: 'Night racing under the lamps. A long sweeper feeds the tightest esses in the game.',
  difficulty: 4,
  defaultLaps: 4,
  startFrac: 0.58,
  seed: 5303,
  waypoints: [
    [-66, -36], [30, -36], [60, -10, 0, { r: 14 }], [60, 30], [34, 30], [34, 6], [6, 6],
    [6, 34], [-22, 34], [-22, -10], [-44, -10], [-44, 30], [-66, 30],
  ],
  wall: { height: 0.75, block: 1.5, palette: [0xffc928, 0x1b1b22], top: [0xffdc6b, 0x3a3a44], skirt: 0x15151a },
  kerb: [0xffc928, 0x1b1b22],
  chevron: { bg: '#27f0ff', fg: '#0b0d1e' },
  gantry: { beam: 0x27f0ff, bannerBg: '#0f1228', bannerFg: '#27f0ff', accent: '#ff3fd0' },
  theme: {
    sky: [[0, 0x1a2350], [0.15, 0x121a3e], [0.5, 0x0a0f28], [1, 0x05071a]], fog: 0x121a3e,
    hemi: [0x7f93d8, 0x1c2a22, 0.95], sun: { color: 0xcfe0ff, intensity: 1.9, dir: [0.25, 0.9, 0.35] },
    groundTint: 0x4a6a58, tree: 0x1f4a36, tyre: [0xffc928, 0x27f0ff, 0xff3fd0], night: true,
  },
};

export const KART_DEFS = [paddock, hollow, floodlit];

function decorate(ctx) {
  const b = ctx.batch, r = ctx.rng, th = ctx.def.theme;
  const L = ctx.line, cx = L.cx, cz = L.cz, R = L.radius;
  ctx.background = new THREE.Color(th.sky[0][1]);
  ctx.fog = new THREE.Fog(th.fog, 200, 900);
  ctx.lights({ hemi: th.hemi, sun: th.sun });
  ctx.skyDome(th.sky);
  ctx.ground(ctx.tex(512, 512, TX.drawGrass()), 0x5fae3c, 1300, 75, { color: th.groundTint });

  // ---- main grandstand behind the start straight, pit building across from it ----
  const s0 = ctx.sample(0);
  const hd = Math.atan2(s0.tangent.x, s0.tangent.z);
  // +1 = the side of the start straight that faces away from the circuit
  const out = (s0.pos.x - cx) * s0.right.x + (s0.pos.z - cz) * s0.right.z >= 0 ? 1 : -1;
  const off = (side, d, along = 0) => ({ x: s0.pos.x + s0.right.x * side * d + s0.tangent.x * along, z: s0.pos.z + s0.right.z * side * d + s0.tangent.z * along });
  const gs = off(out, 9, 6);
  const stand = ctx.spot('grandstand', gs.x, gs.z, 9);
  for (let k = 0; k < 5; k++) {
    const p = { x: stand.x + s0.right.x * out * k * 2.2, z: stand.z + s0.right.z * out * k * 2.2 };
    b.box('matte', 2.3, 1.4 + k * 1.3, 46, p.x, 0, p.z, k % 2 ? 0xd9dde4 : 0xbfc5cf, hd);
    // the crowd: rows of bright dots
    for (let j = -10; j <= 10; j++) {
      if (r() < 0.2) continue;
      b.sphere('matte', 0.55, p.x + s0.tangent.x * j * 2.1, 2.2 + k * 1.3, p.z + s0.tangent.z * j * 2.1, r.pick([0xe53a2f, 0x2b7de9, 0xffc928, 0x35b56a, 0xffffff, 0xff8ad1]), 1, 1.2, 1, 6, 5);
    }
  }
  ctx.reserveBox('grandstand', stand.x + s0.right.x * out * 4.4, stand.z + s0.right.z * out * 4.4, 14, 46, hd);
  const roof = { x: stand.x + s0.right.x * out * 5, z: stand.z + s0.right.z * out * 5 };
  b.box('matte', 15, 0.5, 48, roof.x, 11, roof.z, ctx.def.wall.palette[0], hd);
  for (const j of [-22, 22]) b.cyl('matte', 0.35, 0.35, 11, roof.x + s0.right.x * out * 6 + s0.tangent.x * j, 0, roof.z + s0.right.z * out * 6 + s0.tangent.z * j, 0x8d99a6, 6);

  // flags along the straight
  const flagMat = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide });
  ctx.bucket('flag', flagMat, false, false);
  for (let k = -3; k <= 3; k++) {
    const p = off(-out, 6.5, k * 9 + 4);
    if (!ctx.free(p.x, p.z, 0.4, false)) continue;
    ctx.reserve('flagpole', p.x, p.z, 0.3, false);
    b.cyl('matte', 0.12, 0.14, 8, p.x, 0, p.z, 0xd0d4da, 5);
    b.add('flag', new THREE.PlaneGeometry(2.6, 1.5), th.tyre[(k + 9) % 3], p.x + s0.tangent.x * 1.3, 7.1, p.z + s0.tangent.z * 1.3, hd - Math.PI / 2);
  }

  // ---- tyre stacks hugging the barrier, cones, hay bales ----
  const tyre = (x, z) => {
    const n = 2 + (r() < 0.5 ? 1 : 0);
    for (let k = 0; k < n; k++) b.cyl('matte', 0.8, 0.8, 0.55, x, k * 0.58, z, k === n - 1 ? r.pick(th.tyre) : 0x17171c, 10);
  };
  ctx.scatterBeside(90, 0.15, 0.6, 0.8, tyre, { name: 'tyres' });
  ctx.scatterBeside(34, 0.3, 2.5, 0.4, (x, z) => trafficCone(ctx, x, 0, z, 0.9), { name: 'cone', avoidSolids: false });
  ctx.scatterBeside(26, 1.2, 5, 1.3, (x, z, rad, i, h) => {
    b.box('matte', 2.2, 1.1, 1.2, x, 0, z, jitter(0xe0b84a, r, 0.1), h + r.range(-0.5, 0.5));
  }, { name: 'hay' });

  // ---- floodlight masts around the paddock ----
  for (let k = 0; k < 8; k++) {
    const a = (k / 8) * TAU + 0.3;
    const p = ctx.spot('mast', cx + Math.cos(a) * (R + 16), cz + Math.sin(a) * (R + 16), 1.2);
    b.cyl('far', 0.5, 0.8, 38, p.x, 0, p.z, 0x8d99a6, 6);
    b.box('far', 7, 3, 1.2, p.x, 37, p.z, 0x3a3f4a, -a + Math.PI / 2);
    b.box(th.night ? 'glowNoFog' : 'far', 6.2, 2.3, 0.6, p.x - Math.cos(a) * 0.7, 37.3, p.z - Math.sin(a) * 0.7, th.night ? 0xfff6d0 : 0xe8ecf2, -a + Math.PI / 2);
  }
  if (th.night) {
    // strings of bulbs over the infield
    for (let k = 0; k < 5; k++) {
      const a = k * 1.26, x0 = cx + Math.cos(a) * R * 0.9, z0 = cz + Math.sin(a) * R * 0.9, x1 = cx - Math.cos(a + 0.5) * R * 0.9, z1 = cz - Math.sin(a + 0.5) * R * 0.9;
      for (let j = 0; j <= 26; j++) {
        const f = j / 26, sag = 16 - Math.sin(f * Math.PI) * 5;
        b.sphere('glowNoFog', 0.32, x0 + (x1 - x0) * f, sag, z0 + (z1 - z0) * f, [0xfff0a0, 0x27f0ff, 0xff3fd0][j % 3], 1, 1, 1, 6, 4);
      }
    }
  }

  // ---- infield: painted logo pads, marshal huts ----
  for (let k = 0; k < 5; k++) {
    const p = ctx.spot('hut', cx + r.range(-R * 0.7, R * 0.7), cz + r.range(-R * 0.5, R * 0.5), 2.6);
    b.box('matte', 3.4, 2.6, 3.4, p.x, 0, p.z, 0xf4f4f4, k);
    b.box('matte', 4.2, 0.4, 4.2, p.x, 2.6, p.z, th.tyre[k % 3], k);
  }

  // ---- skyline: trees and low hills ----
  for (let k = 0; k < 46; k++) {
    const a = (k / 46) * TAU + r() * 0.1, d = R + 50 + r() * 70, s = 0.8 + r() * 0.7;
    const x = cx + Math.cos(a) * d, z = cz + Math.sin(a) * d;
    b.cyl('far', 2.4 * s, 3.4 * s, 26 * s, x, 0, z, 0x7a5636, 6);
    b.sphere('far', 17 * s, x, 32 * s, z, jitter(th.tree, r, 0.14), 1, 1.15, 1, 8, 6);
  }
  for (let k = 0; k < 9; k++) {
    const a = (k / 9) * TAU + 0.4, d = R + 230;
    b.sphere('far', 120, cx + Math.cos(a) * d, -40, cz + Math.sin(a) * d, jitter(th.tree, r, 0.08), 1.6, 0.7, 1.2, 10, 6);
  }
}
