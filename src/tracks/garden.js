// Track 1 — "Buttercup Backyard": sunny back garden, wide and flowing.
import * as THREE from 'three';
import * as TX from './textures.js';
import { Batch, jitter } from './util.js';
import { flower, rock, mushroom, gores } from './props.js';

const TAU = Math.PI * 2;

export const garden = {
  id: 'garden',
  name: 'Buttercup Backyard',
  description: 'A sunny lap of the lawn. Wide chalk-lined paving, giant daisies and one very sleepy garden gnome.',
  difficulty: 1,
  defaultLaps: 3,
  seed: 1101,
  halfWidth: 9,
  cornerRadius: 30,
  startFrac: 0.45,
  waypoints: [[-110, -60, 0], [110, -60, 0], [130, 20, 1.5], [60, 70, 3.5], [0, 30, 1], [-60, 75, 2.5], [-130, 25, 0.5]],
  humps: [{ at: 0.6, h: 1.3, len: 30 }],
  road: { style: 'paving', fallback: 0x8d8983, roughness: 0.92 },
  kerb: [0xe53a2f, 0xf7f3ea],
  wall: { height: 1.0, palette: [0xb5834a, 0xa87440, 0xc08f55], top: [0xdcae6c, 0xd1a05e, 0xe3b877], skirt: 0x7a5a36, block: 3.4 },
  chevronCurvature: 1 / 40,
  chevron: { bg: '#ffd21f', fg: '#1b1b22' },
  gantry: { beam: 0xe23b2e, bannerBg: '#2e7d32', bannerFg: '#fff59d', accent: '#ffd21f' },
  boostAt: [{ t: 0.12 }, { t: 0.47, lat: -3 }, { t: 0.8, lat: 3 }],
  pickupAt: [0.07, 0.22, 0.37, 0.53, 0.68, 0.9],
  obstaclesAt: [{ t: 0.3, lat: 4, r: 1.3, kind: 'pot' }, { t: 0.74, lat: -4, r: 1.2, kind: 'ball' }],
  decorate,
};

function decorate(ctx) {
  const b = ctx.batch, r = ctx.rng;
  ctx.background = new THREE.Color(0xd6ecff);
  ctx.fog = new THREE.Fog(0xd6ecff, 280, 1150);
  ctx.lights({ hemi: [0xd4ecff, 0x6f9a45, 1.15], sun: { color: 0xfff1d0, intensity: 2.3, dir: [0.45, 0.8, 0.35] } });
  ctx.skyDome([[0, 0xe4f3ff], [0.1, 0xb4dcff], [0.45, 0x62aef2], [1, 0x2f7fd6]]);
  ctx.ground(ctx.tex(512, 512, TX.drawGrass()), 0x5fae3c, 1700, 95);

  // ---- obstacles on the road ----
  for (const o of ctx.obstacles) {
    if (o.kind === 'pot') {
      b.cyl('matte', o.radius, o.radius * 0.72, 1.9, o.x, o.y, o.z, 0xc8663a, 14);
      b.cyl('matte', o.radius * 1.08, o.radius * 1.08, 0.3, o.x, o.y + 1.75, o.z, 0xd97a4a, 14);
      b.cyl('matte', o.radius * 0.9, o.radius * 0.9, 0.1, o.x, o.y + 1.98, o.z, 0x4a3324, 12);
      b.sphere('matte', 0.55, o.x, o.y + 2.6, o.z, 0x58b848, 1, 1.3, 1, 8, 6);
      b.sphere('matte', 0.4, o.x + 0.4, o.y + 3.2, o.z, 0xff6fa8, 1, 1, 1, 8, 6);
    } else {
      b.add('gloss', new THREE.SphereGeometry(o.radius, 16, 12), gores([0xff4b3a, 0xffffff, 0x2b7de9, 0xffd21f, 0xffffff, 0x35b56a]), o.x, o.y + o.radius, o.z, 0.6, 0.3);
    }
  }

  // ---- house wall (south side) ----
  const HZ = -142;
  const siding = ctx.tex(256, 256, TX.drawSiding(), { repeat: [10, 14] });
  const house = new THREE.Mesh(new THREE.PlaneGeometry(470, 260), new THREE.MeshLambertMaterial({ map: siding, color: siding ? 0xffffff : 0xf2e9d8 }));
  house.position.set(0, 130, HZ);
  house.name = 'house';
  ctx.add(house);
  ctx.reserveBox('house', 0, HZ - 4, 470, 8);
  b.box('far', 470, 12, 5, 0, 0, HZ + 2, 0xa4553f);
  b.box('far', 480, 14, 30, 0, 252, HZ + 10, 0x6b4a3a); // eave
  const winTex = ctx.tex(256, 256, TX.drawWindow('#9fd4ff', '#e8f6ff', '#ffffff'), { clamp: true });
  const winMat = new THREE.MeshBasicMaterial({ map: winTex, color: winTex ? 0xffffff : 0xbfe2ff });
  for (const wx of [-120, 20]) {
    const w = new THREE.Mesh(new THREE.PlaneGeometry(84, 84), winMat);
    w.position.set(wx, 120, HZ + 0.6);
    ctx.add(w);
    b.box('far', 96, 5, 9, wx, 72, HZ + 3, 0xffffff);
    b.box('far', 92, 12, 12, wx, 60, HZ + 6, 0x8a5a3a); // flower box
    for (let k = 0; k < 7; k++) b.sphere('far', 6, wx - 39 + k * 13, 76, HZ + 7, [0xff5e8a, 0xffd23a, 0xff7a3a][k % 3], 1, 0.9, 1, 8, 6);
    for (const s of [-1, 1]) b.box('far', 16, 88, 2, wx + s * 52, 76, HZ + 1.5, 0x3d7a5c); // shutters
  }
  // door + step
  b.box('far', 70, 150, 4, 150, 10, HZ + 1.5, 0xc0392b);
  b.box('far', 80, 158, 2, 150, 8, HZ + 0.6, 0xffffff);
  for (const [dx, dy] of [[-16, 30], [16, 30], [-16, 95], [16, 95]]) b.box('far', 24, 50, 1.5, 150 + dx, dy, HZ + 3.6, 0xa93226);
  b.sphere('gloss', 3.5, 176, 82, HZ + 6, 0xe8c15a);
  b.box('far', 96, 10, 30, 150, 0, HZ + 15, 0xb9b3a8);
  ctx.reserveBox('doorstep', 150, HZ + 15, 96, 30);
  b.cyl('far', 3.5, 3.5, 250, -205, 0, HZ + 5, 0x7d8894, 8); // drainpipe

  // ---- picket fence on the other three sides ----
  const X0 = -225, X1 = 225, Z1 = 160;
  const picket = (x, z, ry) => {
    b.box('far', 5.2, 30, 1.2, x, 0, z, 0xfbfbf6, ry);
    b.add('far', new THREE.ConeGeometry(3.7, 5.5, 4, 1), 0xfbfbf6, x, 32.6, z, ry + Math.PI / 4);
  };
  for (let x = X0; x <= X1; x += 7.5) picket(x, Z1, 0);
  for (let z = HZ; z <= Z1; z += 7.5) { picket(X0, z, Math.PI / 2); picket(X1, z, Math.PI / 2); }
  for (const y of [8, 22]) {
    b.box('far', X1 - X0, 2.4, 1, 0, y, Z1 + 1, 0xeeeee6);
    b.box('far', 1, 2.4, Z1 - HZ, X0 - 1, y, (Z1 + HZ) / 2, 0xeeeee6);
    b.box('far', 1, 2.4, Z1 - HZ, X1 + 1, y, (Z1 + HZ) / 2, 0xeeeee6);
  }
  ctx.reserveBox('fence', 0, Z1, X1 - X0, 3);
  ctx.reserveBox('fence', X0, (Z1 + HZ) / 2, 3, Z1 - HZ);
  ctx.reserveBox('fence', X1, (Z1 + HZ) / 2, 3, Z1 - HZ);

  // ---- hedges + trees beyond the fence (skyline) ----
  for (let x = -260; x <= 260; x += 52) b.sphere('far', 42, x + r.range(-8, 8), 22, Z1 + 45, jitter(0x3c8a3a, r, 0.12), 1.35, 1 + r() * 0.3, 1, 10, 7);
  for (let z = HZ; z <= Z1 + 40; z += 52) {
    b.sphere('far', 42, X0 - 45, 22, z + r.range(-8, 8), jitter(0x3c8a3a, r, 0.12), 1, 1 + r() * 0.3, 1.35, 10, 7);
    b.sphere('far', 42, X1 + 45, 22, z + r.range(-8, 8), jitter(0x3c8a3a, r, 0.12), 1, 1 + r() * 0.3, 1.35, 10, 7);
  }
  for (const [tx, tz, s] of [[-330, 120, 1], [330, 60, 1.15], [-120, 300, 1.2], [160, 310, 1], [360, -90, 0.9], [-360, -60, 1.05], [20, 330, 0.9]]) {
    b.cyl('far', 12 * s, 17 * s, 170 * s, tx, 0, tz, 0x7a5636, 10);
    for (let k = 0; k < 5; k++) {
      b.sphere('far', (60 + r() * 30) * s, tx + r.range(-50, 50) * s, (190 + r() * 70) * s, tz + r.range(-50, 50) * s, jitter(0x3f9440, r, 0.14), 1, 0.85, 1, 10, 8);
    }
  }

  // ---- clouds (slowly drifting) ----
  const cb = new Batch();
  for (let i = 0; i < 11; i++) {
    const a = (i / 11) * TAU + r() * 0.4, d = 360 + r() * 140, y = 190 + r() * 110;
    for (let k = 0; k < 4; k++) {
      cb.sphere('c', 30 + r() * 26, Math.cos(a) * d + (k - 1.5) * 34, y + r() * 12, Math.sin(a) * d + r.range(-14, 14), 0xffffff, 1.3, 0.55, 1, 10, 7);
    }
  }
  const clouds = cb.build({ c: new THREE.MeshBasicMaterial({ vertexColors: true, fog: false }) })[0];
  clouds.matrixAutoUpdate = true;
  clouds.position.set(ctx.line.cx, 0, ctx.line.cz);
  clouds.name = 'clouds';
  ctx.add(clouds);
  ctx.onUpdate((dt) => { clouds.rotation.y += dt * 0.006; });

  // ---- pond with a bobbing duck ----
  const pond = ctx.spot('pond', 15, -14, 23);
  b.cyl('gloss', 21, 21, 0.25, pond.x, 0, pond.z, 0x3aa0d8, 28);
  b.cyl('matte', 23, 23.5, 0.18, pond.x, 0, pond.z, 0x6a5a48, 28);
  for (let k = 0; k < 22; k++) {
    const a = (k / 22) * TAU;
    rock(ctx, pond.x + Math.cos(a) * 22.3, pond.z + Math.sin(a) * 22.3, 2 + r() * 1.6, 0xa5a29c);
  }
  for (let k = 0; k < 7; k++) {
    const a = r() * TAU, d = 4 + r() * 13;
    b.cyl('matte', 2.6, 2.6, 0.12, pond.x + Math.cos(a) * d, 0.28, pond.z + Math.sin(a) * d, jitter(0x3f9d4a, r, 0.1), 10);
    if (k % 3 === 0) b.sphere('matte', 1, pond.x + Math.cos(a) * d, 0.9, pond.z + Math.sin(a) * d, 0xff8fc0, 1, 0.7, 1, 8, 5);
  }
  const db = new Batch();
  db.sphere('d', 2.6, 0, 1.6, 0, 0xffd21f, 1.25, 0.9, 1);
  db.sphere('d', 1.7, 2.2, 3.8, 0, 0xffd21f);
  db.sphere('d', 0.7, 3.9, 3.6, 0, 0xff8a1e, 1.3, 0.5, 1, 8, 5);
  db.sphere('d', 0.24, 3.2, 4.4, 0.8, 0x111111, 1, 1, 1, 6, 4);
  db.sphere('d', 0.24, 3.2, 4.4, -0.8, 0x111111, 1, 1, 1, 6, 4);
  db.cone('d', 1.1, 1.8, -2.9, 1.6, 0, 0xffd21f, 6);
  const duck = db.build({ d: ctx.mats.gloss }, { d: { cast: true } })[0];
  duck.matrixAutoUpdate = true;
  duck.name = 'duck';
  ctx.add(duck);
  ctx.onUpdate((dt, t) => {
    duck.position.set(pond.x + Math.cos(t * 0.25) * 9, 0.2 + Math.sin(t * 2.1) * 0.25, pond.z + Math.sin(t * 0.25) * 9);
    duck.rotation.set(Math.sin(t * 1.7) * 0.06, -t * 0.25 - Math.PI / 2, Math.sin(t * 2.3) * 0.06);
  });

  // ---- toys on the lawn ----
  const ball = ctx.spot('beachball', -48, -12, 9.5);
  b.add('gloss', new THREE.SphereGeometry(9, 24, 16), gores([0xff4b3a, 0xffffff, 0x2b7de9, 0xffd21f, 0xffffff, 0x35b56a]), ball.x, 9, ball.z, 0.4, 0.5);

  const bl = ctx.spot('blocks', 66, -22, 11);
  const bc = [0xe53a2f, 0x2b7de9, 0xffd21f, 0x35b56a, 0xff8a1e];
  [[-4, 0, -3, 0.2], [4, 0, 3, -0.3], [0.5, 7, 0, 0.5], [-6, 0, 6, 0.9]].forEach(([dx, y, dz, ry], i) => {
    b.box('matte', 7, 7, 7, bl.x + dx, y, bl.z + dz, bc[i % bc.length], ry);
    b.box('matte', 5.4, 5.4, 7.2, bl.x + dx, y + 0.8, bl.z + dz, 0xfff6dc, ry);
  });

  const gn = ctx.spot('gnome', -82, -30, 6);
  b.cyl('matte', 3.6, 4.6, 9, gn.x, 0, gn.z, 0x2b62c4, 12);
  b.cyl('matte', 3.8, 3.8, 1, gn.x, 4, gn.z, 0x2a2a2a, 12);
  b.sphere('matte', 3.5, gn.x, 11.5, gn.z, 0xf2c6a0);
  b.add('matte', new THREE.ConeGeometry(3.2, 6, 10), 0xffffff, gn.x, 8.6, gn.z + 2.2, 0, Math.PI);
  b.cone('matte', 3.9, 10, gn.x, 13, gn.z, 0xd9302a, 12);
  b.sphere('matte', 0.9, gn.x, 11.3, gn.z + 3.5, 0xe8a58a, 1, 1, 1, 8, 6);
  for (const s of [-1, 1]) b.sphere('matte', 1.9, gn.x + s * 2.2, 0.9, gn.z + 2.6, 0x3a2a20, 1, 0.6, 1.5, 8, 6);

  const wc = ctx.spot('wateringcan', 96, 12, 11);
  b.cyl('gloss', 7.5, 7.5, 14, wc.x, 0, wc.z, 0x1fa39a, 18);
  b.cyl('gloss', 7.9, 7.9, 0.8, wc.x, 13.6, wc.z, 0x188a82, 18);
  b.add('gloss', new THREE.CylinderGeometry(1.1, 1.6, 15, 8), 0x1fa39a, wc.x + 11, 10.5, wc.z, 0, 0, -0.9);
  b.add('gloss', new THREE.CylinderGeometry(3, 1.2, 2.4, 10), 0xe8c15a, wc.x + 17.6, 15.6, wc.z, 0, 0, -0.9);
  b.torus('gloss', 6, 0.9, wc.x - 7.5, 9, wc.z, 0x188a82, 0, 0, 0, Math.PI, 14, 6);

  const bb = ctx.spot('birdbath', -98, 12, 9);
  b.cyl('matte', 5, 6, 1.5, bb.x, 0, bb.z, 0xb9b6ae, 12);
  b.cyl('matte', 2, 2.8, 15, bb.x, 1.5, bb.z, 0xc9c6be, 10);
  b.cyl('matte', 9, 5, 3, bb.x, 16.5, bb.z, 0xc9c6be, 16);
  b.cyl('gloss', 8, 8, 0.2, bb.x, 19.4, bb.z, 0x58b4e6, 16);

  for (const [mx, mz, s] of [[-20, -38, 1], [-14, -41, 0.6], [88, -34, 0.8], [-70, 22, 1.1], [44, 14, 0.7], [118, 56, 1]]) {
    const p = ctx.spot('mushroom', mx, mz, 3.6 * s);
    mushroom(ctx, p.x, p.z, s);
  }

  // ---- flower bed in the northern dent ----
  const bed = ctx.spot('flowerbed', 0, 86, 25, false);
  b.cyl('matte', 24, 25, 0.5, bed.x, 0, bed.z, 0x5a3d28, 24);
  const petals = [0xffffff, 0xff6fa8, 0xffd23a, 0xb57bff, 0xff5a3c, 0xfff0a0, 0x7fc4ff];
  for (let k = 0; k < 16; k++) {
    const a = r() * TAU, d = 3 + r() * 18;
    flower(ctx, bed.x + Math.cos(a) * d, bed.z + Math.sin(a) * d, 0.9 + r() * 0.6, r.pick(petals));
  }
  ctx.solids.push({ x: bed.x, z: bed.z, r: 25 });

  // ---- garden hose from the house tap ----
  const hosePts = [[170, 8, HZ + 3], [168, 1.2, -126], [140, 1.2, -98], [70, 1.2, -88], [10, 1.2, -95], [-60, 1.2, -86], [-125, 1.2, -94], [-165, 1.2, -84], [-172, 1.2, -62]];
  const hoseCurve = new THREE.CatmullRomCurve3(hosePts.map((p) => new THREE.Vector3(p[0], p[1], p[2])));
  b.add('gloss', new THREE.TubeGeometry(hoseCurve, 160, 1.25, 8, false), 0x3fae4a);
  for (let k = 0; k <= 120; k++) { const p = hoseCurve.getPoint(k / 120); ctx.reserve('hose', p.x, p.z, 1.4, false); }
  b.add('gloss', new THREE.CylinderGeometry(0.9, 1.7, 6, 10), 0xe8c15a, -172, 1.3, -58, 0, Math.PI / 2);
  b.box('far', 6, 6, 6, 170, 6, HZ + 3, 0x8d99a6);
  b.cyl('gloss', 12, 12, 0.12, -172, 0.02, -44, 0x6cc0ee, 18);
  ctx.reserve('puddle', -172, -44, 12, false);

  // ---- trackside flowers, rocks, grass ----
  ctx.scatterBeside(58, 1.2, 12, 2.2, (x, z) => flower(ctx, x, z, 0.8 + r() * 0.7, r.pick(petals)), { name: 'flower', solid: true });
  ctx.scatterBeside(26, 0.6, 14, () => 1 + r() * 1.6, (x, z, rad) => rock(ctx, x, z, rad), { name: 'rock' });
  ctx.scatter(40, [-215, -130, 215, 150], 2.4, (x, z) => flower(ctx, x, z, 1 + r() * 0.9, r.pick(petals)), { name: 'flower', solid: true });

  const blade = new THREE.ConeGeometry(0.34, 1, 3, 1);
  blade.translate(0, 0.5, 0);
  blade.scale(1, 1, 0.35);
  const COUNT = 7000;
  const grass = new THREE.InstancedMesh(blade, new THREE.MeshLambertMaterial({ color: 0xffffff }), COUNT);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new THREE.Vector3(), ps = new THREE.Vector3(), cc = new THREE.Color();
  const greens = [0x4f9f34, 0x6cc04a, 0x86d05a, 0x3f8a2c, 0x9bd866];
  let gi = 0;
  const put = (x, z) => {
    if (gi >= COUNT) return;
    const h = 1.6 + r() * 3.2;
    e.set((r() - 0.5) * 0.5, r() * TAU, (r() - 0.5) * 0.5);
    q.setFromEuler(e);
    m4.compose(ps.set(x, 0, z), q, sc.set(1 + r(), h, 1 + r()));
    grass.setMatrixAt(gi, m4);
    grass.setColorAt(gi, jitterInto(cc, r.pick(greens), r));
    gi++;
  };
  ctx.scatterBeside(4300, 0.15, 9, 0.35, put, { avoidSolids: false, name: 'grass' });
  ctx.scatter(2700, [-220, -135, 220, 155], 0.35, put, { avoidSolids: false, name: 'grass', tries: 6 });
  grass.count = gi;
  grass.instanceMatrix.needsUpdate = true;
  if (grass.instanceColor) grass.instanceColor.needsUpdate = true;
  grass.name = 'grass';
  grass.frustumCulled = false;
  ctx.add(grass);

  // ---- butterflies ----
  const wing = new THREE.BufferGeometry();
  wing.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, -0.9, 1.9, 0, -1.3, 1.6, 0, 1.1, 0, 0, -0.9, 1.6, 0, 1.1, 0, 0, 0.8]), 3));
  wing.computeVertexNormals();
  const homes = [[pond.x, pond.z, 12], [bed.x, bed.z, 14], [bl.x, bl.z, 6], [gn.x, gn.z, 4], [bb.x, bb.z, 5]];
  homes.forEach(([hx, hz, rad], i) => {
    const mat = new THREE.MeshBasicMaterial({ color: [0xffa726, 0xffffff, 0x8ec5ff, 0xfff176, 0xff80ab][i], side: THREE.DoubleSide });
    const g = new THREE.Group();
    const w1 = new THREE.Mesh(wing, mat), w2 = new THREE.Mesh(wing, mat);
    w2.scale.x = -1;
    g.add(w1, w2);
    g.name = 'butterfly';
    ctx.add(g);
    const ph = i * 1.7;
    ctx.onUpdate((dt, t) => {
      const a = t * (0.5 + i * 0.07) + ph;
      g.position.set(hx + Math.cos(a) * rad * 0.8, 9 + i * 1.5 + Math.sin(t * 1.3 + ph) * 2, hz + Math.sin(a * 1.3) * rad * 0.8);
      g.rotation.y = -a;
      const f = Math.sin(t * 16 + ph) * 0.9;
      w1.rotation.z = f; w2.rotation.z = -f;
    });
  });
}

function jitterInto(c, hex, rnd) {
  c.set(hex);
  const k = 0.85 + rnd() * 0.3;
  c.r *= k; c.g *= k; c.b *= k;
  return c;
}
