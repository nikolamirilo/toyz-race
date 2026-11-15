// Track 5 — "Frosty Flurry": the garden after a snow day. Icy road, snowmen, candy canes and falling snow.
import * as THREE from 'three';
import { jitter } from './util.js';
import { bands, rock } from './props.js';

const TAU = Math.PI * 2;

export const snow = {
  id: 'snow',
  name: 'Frosty Flurry',
  description: 'Snow day in the garden. A long downhill sweep, an icy dip through the middle and snowmen judging your line.',
  difficulty: 2,
  defaultLaps: 3,
  seed: 6606,
  halfWidth: 7.5,
  cornerRadius: 22,
  startFrac: 0.45,
  waypoints: [[-120, -50, 0], [20, -70, 0], [120, -40, 2], [125, 40, 4], [40, 60, 2], [10, 10, 0.5], [-50, 70, 3], [-125, 30, 1]],
  humps: [{ at: 0.3, h: 1.6, len: 34 }, { at: 0.78, h: 1.2, len: 26 }],
  road: { style: 'ice', fallback: 0xcfe3f2, roughness: 0.55 },
  kerb: [0x2b7de9, 0xffffff],
  wall: { height: 1.1, palette: [0xf2f7fc, 0xe4eef8, 0xffffff], top: [0xffffff, 0xf4f9ff, 0xffffff], skirt: 0xbfd3e6, block: 3.2 },
  chevronCurvature: 1 / 34,
  chevron: { bg: '#e53a2f', fg: '#ffffff' },
  gantry: { beam: 0xe53a2f, bannerBg: '#1f6f4a', bannerFg: '#ffffff', accent: '#ffd21f' },
  boostAt: [{ t: 0.1 }, { t: 0.5, lat: 2.5 }, { t: 0.86, lat: -2.5 }],
  pickupAt: [0.06, 0.2, 0.36, 0.55, 0.7, 0.92],
  obstaclesAt: [{ t: 0.27, lat: -3.5, r: 1.3, kind: 'snowball' }, { t: 0.63, lat: 3.5, r: 1.2, kind: 'present' }],
  decorate,
};

function decorate(ctx) {
  const b = ctx.batch, r = ctx.rng;
  const cx = ctx.line.cx, cz = ctx.line.cz, R = ctx.line.radius;
  ctx.background = new THREE.Color(0xdfeaf6);
  ctx.fog = new THREE.Fog(0xdfeaf6, 220, 950);
  ctx.lights({ hemi: [0xe6f0ff, 0xb8c8dc, 1.25], sun: { color: 0xfff4e0, intensity: 2.0, dir: [0.5, 0.7, 0.4] } });
  ctx.skyDome([[0, 0xeef4fb], [0.15, 0xcfe0f2], [0.5, 0x9fc0e6], [1, 0x6d9bd6]]);
  ctx.ground(null, 0xf3f7fc, 1700, 1, { roughness: 0.85 });

  for (const o of ctx.obstacles) {
    if (o.kind === 'present') {
      b.box('gloss', o.radius * 1.5, o.radius * 1.5, o.radius * 1.5, o.x, o.y, o.z, 0xe53a2f, 0.5);
      b.box('gloss', o.radius * 1.56, o.radius * 0.3, o.radius * 1.56, o.x, o.y + o.radius * 0.6, o.z, 0xffd21f, 0.5);
    } else b.sphere('matte', o.radius, o.x, o.y + o.radius * 0.85, o.z, 0xffffff, 1, 0.9, 1, 12, 9);
  }

  const pine = (x, z, s, key = 'matte') => {
    b.cyl(key, 1.1 * s, 1.5 * s, 6 * s, x, 0, z, 0x6b4a32, 6);
    for (let k = 0; k < 3; k++) {
      b.cone(key, (7.5 - k * 1.8) * s, 9 * s, x, (4.5 + k * 5.2) * s, z, jitter(0x2f7a4d, r, 0.1), 8);
      b.cone(key, (4.4 - k * 1.1) * s, 3.6 * s, x, (10.2 + k * 5.2) * s, z, 0xffffff, 8);
    }
  };
  const snowman = (x, z, s) => {
    b.sphere('matte', 5 * s, x, 4.2 * s, z, 0xffffff);
    b.sphere('matte', 3.7 * s, x, 10.6 * s, z, 0xffffff);
    b.sphere('matte', 2.7 * s, x, 15.6 * s, z, 0xffffff);
    b.add('matte', new THREE.ConeGeometry(0.5 * s, 2.6 * s, 6), 0xff8a1e, x, 15.6 * s, z + 3.4 * s, 0, Math.PI / 2);
    for (const e of [-1, 1]) b.sphere('matte', 0.35 * s, x + e * 0.95 * s, 16.5 * s, z + 2.4 * s, 0x1b1b22, 1, 1, 1, 6, 4);
    for (let k = 0; k < 3; k++) b.sphere('matte', 0.4 * s, x, (9.2 + k * 1.5) * s, z + 3.6 * s, 0x1b1b22, 1, 1, 1, 6, 4);
    b.cyl('matte', 3.2 * s, 3.2 * s, 0.4 * s, x, 17.6 * s, z, 0x1b1b22, 12);
    b.cyl('matte', 2 * s, 2 * s, 3 * s, x, 18 * s, z, 0x1b1b22, 12);
    b.cyl('matte', 2.05 * s, 2.05 * s, 0.7 * s, x, 18.2 * s, z, 0xe53a2f, 12);
    b.torus('matte', 2.6 * s, 0.7 * s, x, 13.3 * s, z, 0xe53a2f, Math.PI / 2);
  };

  // ---- snowmen, igloo, frozen pond, sled ----
  for (const [x, z, s] of [[-40, -20, 1], [70, 0, 1.2], [-88, 12, 0.85], [60, 100, 1.1]]) {
    const p = ctx.spot('snowman', x, z, 5.5 * s);
    snowman(p.x, p.z, s);
  }
  const ig = ctx.spot('igloo', 78, 22, 15);
  b.sphere('matte', 14, ig.x, 0, ig.z, 0xf6fbff, 1, 0.8, 1, 14, 9);
  b.cyl('matte', 5, 5, 7, ig.x, 0, ig.z + 12, 0xeaf3fb, 10);
  b.cyl('matte', 3.4, 3.4, 5.6, ig.x, 0, ig.z + 14.2, 0x2a3a52, 10);
  const pond = ctx.spot('icepond', -15, -34, 19);
  b.cyl('gloss', 18, 18, 0.2, pond.x, 0.02, pond.z, 0xa9d6f2, 26);
  b.cyl('matte', 19.6, 20.4, 0.16, pond.x, 0, pond.z, 0xffffff, 26);
  const sl = ctx.spot('sled', -70, 44, 7);
  b.box('matte', 12, 0.6, 5, sl.x, 1.6, sl.z, 0xc0392b, 0.5);
  for (const e of [-1, 1]) b.box('matte', 13, 0.5, 0.5, sl.x + Math.sin(0.5) * e * 2, 0.1, sl.z + Math.cos(0.5) * e * 2, 0x8d99a6, 0.5);

  // ---- candy canes and presents by the road, pines and drifts on the lawn ----
  const cane = bands([0xe53a2f, 0xffffff, 0xe53a2f, 0xffffff, 0xe53a2f, 0xffffff], 0, 9);
  ctx.scatterBeside(30, 1, 5, 1, (x, z) => {
    b.add('gloss', new THREE.CylinderGeometry(0.45, 0.45, 9, 8).translate(0, 4.5, 0), cane, x, 0, z);
    b.torus('gloss', 1.3, 0.45, x + 1.3, 9, z, 0xe53a2f, 0, 0, 0, Math.PI, 10, 6);
  }, { name: 'cane', solid: true });
  const wrap = [0xe53a2f, 0x2b7de9, 0x35b56a, 0xffc928, 0xb57bff];
  ctx.scatterBeside(26, 1.5, 9, 1.8, (x, z, rad, i, h) => {
    const s = 1.6 + r() * 1.6;
    b.box('gloss', s, s, s, x, 0, z, r.pick(wrap), h + r());
    b.box('gloss', s * 1.04, s * 0.2, s * 1.04, x, s * 0.4, z, 0xffffff, h);
  }, { name: 'present' });
  ctx.scatter(46, [-215, -140, 215, 150], 7, (x, z) => pine(x, z, 0.8 + r() * 0.8), { name: 'pine', solid: true });
  ctx.scatter(70, [-215, -140, 215, 150], 4, (x, z, rad) => b.sphere('matte', rad * (1 + r()), x, 0, z, 0xffffff, 1.5, 0.45, 1.2, 10, 6), { name: 'drift', avoidSolids: false });
  ctx.scatterBeside(18, 0.8, 8, () => 1 + r() * 1.4, (x, z, rad) => rock(ctx, x, z, rad, 0xdfe8f2), { name: 'iceblock' });

  // ---- skyline: forest and mountains ----
  for (let k = 0; k < 60; k++) {
    const a = (k / 60) * TAU + r() * 0.08, d = R + 90 + r() * 80;
    pine(cx + Math.cos(a) * d, cz + Math.sin(a) * d, 3 + r() * 2.5, 'far');
  }
  for (let k = 0; k < 11; k++) {
    const a = (k / 11) * TAU + 0.2, d = 470 + r() * 60, h = 190 + r() * 120;
    b.cone('far', 170 + r() * 60, h, cx + Math.cos(a) * d, -10, cz + Math.sin(a) * d, 0x8fa6c4, 7);
    b.cone('far', 70, h * 0.42, cx + Math.cos(a) * d, h * 0.58 - 10, cz + Math.sin(a) * d, 0xffffff, 7);
  }

  // ---- falling snow ----
  const N = 1800, H = 90, pos = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) { pos[i * 3] = cx + r.range(-240, 240); pos[i * 3 + 1] = r() * H; pos[i * 3 + 2] = cz + r.range(-190, 190); }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const flakes = new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 1.1, transparent: true, opacity: 0.9, depthWrite: false }));
  flakes.name = 'snowfall';
  flakes.frustumCulled = false;
  ctx.add(flakes);
  ctx.onUpdate((dt, t) => {
    for (let i = 0; i < N; i++) {
      let y = pos[i * 3 + 1] - dt * (7 + (i % 5));
      if (y < 0) y += H;
      pos[i * 3 + 1] = y;
      pos[i * 3] += Math.sin(t * 0.7 + i) * dt * 1.5;
    }
    g.attributes.position.needsUpdate = true;
  });
}
