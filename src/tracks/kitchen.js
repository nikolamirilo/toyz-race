// Track 2 — "Breakfast Blitz": kitchen floor under the table, warm indoor light.
import * as THREE from 'three';
import * as TX from './textures.js';
import { Batch, jitter } from './util.js';
import { pkg, bookStack, mug } from './props.js';

const TAU = Math.PI * 2;

export const kitchen = {
  id: 'kitchen',
  name: 'Breakfast Blitz',
  description: 'Under the kitchen table and over the book ramp. Toy-block walls, spilled cereal and towering chair legs.',
  difficulty: 2,
  defaultLaps: 3,
  seed: 2202,
  halfWidth: 7.5,
  cornerRadius: 18,
  startFrac: 0.45,
  waypoints: [[-110, -70], [100, -70], [120, -10], [60, 20], [70, 75], [-20, 80], [-40, 20], [-110, 40]],
  humps: [{ at: 0.475, h: 3.4, len: 40 }, { at: 0.8, h: 1.6, len: 24 }],
  road: { style: 'mat', fallback: 0x3a3e4b, roughness: 0.95 },
  kerb: [0x2b7de9, 0xf7f3ea],
  wall: {
    height: 1.25, block: 3.0,
    palette: [0xe53a2f, 0xffc928, 0x2b7de9, 0x35b56a, 0xff8a1e],
    top: [0xf2685f, 0xffdc6b, 0x66a3f2, 0x6fd096, 0xffab5c],
    skirt: 0x8a3b3b,
  },
  chevronCurvature: 1 / 26,
  chevron: { bg: '#ffffff', fg: '#e53a2f' },
  gantry: { beam: 0x2b7de9, bannerBg: '#b3261e', bannerFg: '#fff8e1', accent: '#ffc928' },
  boostAt: [{ t: 0.05 }, { t: 0.42 }, { t: 0.72, lat: 2 }],
  pickupAt: [0.1, 0.24, 0.36, 0.56, 0.67, 0.92],
  obstaclesAt: [{ t: 0.3, lat: -3.5, r: 1.2, kind: 'salt' }, { t: 0.62, lat: 3.5, r: 1.2, kind: 'sugar' }, { t: 0.86, lat: -3, r: 1.2, kind: 'salt' }],
  decorate,
};

function wallPlane(w, h, uRep, vRep) {
  const g = new THREE.PlaneGeometry(w, h);
  const uv = g.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * uRep, uv.getY(i) * vRep);
  return g;
}

function decorate(ctx) {
  const b = ctx.batch, r = ctx.rng;
  ctx.background = new THREE.Color(0xf3dcc0);
  ctx.fog = new THREE.Fog(0xf3dcc0, 320, 1300);
  ctx.lights({ hemi: [0xfff1dc, 0xb08a66, 1.05], sun: { color: 0xffe0ad, intensity: 2.0, dir: [0.3, 0.9, 0.5] } });
  const floorTex = ctx.tex(512, 512, TX.drawTiles('#f3e8d2', '#d89f76', '#b9a58c'));
  ctx.ground(floorTex, 0xe6c9a4, 900, 50, { roughness: 0.55 });

  ctx.atlasTex = ctx.tex(1024, 1024, TX.drawPackages(), { clamp: true });
  ctx.bucket('atlas', new THREE.MeshLambertMaterial({ map: ctx.atlasTex, vertexColors: true }));

  // ---- obstacles ----
  for (const o of ctx.obstacles) {
    if (o.kind === 'salt') {
      b.cyl('gloss', o.radius * 0.8, o.radius, 2.4, o.x, o.y, o.z, 0xf6f6f2, 12);
      b.sphere('gloss', o.radius * 0.82, o.x, o.y + 2.4, o.z, 0xb9c0c8, 1, 0.7, 1, 12, 8);
    } else {
      b.box('matte', o.radius * 1.5, o.radius * 1.5, o.radius * 1.5, o.x, o.y, o.z, 0xffffff, 0.6);
    }
  }

  // ---- room shell ----
  const RX = 210, RZ0 = -170, RZ1 = 175, H = 230;
  const paper = ctx.tex(256, 256, TX.drawWallpaper('#f6e3b4', '#f0d49a', '#e2a05a'));
  ctx.bucket('wall', new THREE.MeshLambertMaterial({ map: paper, color: paper ? 0xffffff : 0xf6e3b4, vertexColors: true }), false, false);
  const zc = (RZ0 + RZ1) / 2, zl = RZ1 - RZ0;
  b.add('wall', wallPlane(RX * 2, H, 14, 6), 0xffffff, 0, H / 2, RZ0, 0);
  b.add('wall', wallPlane(RX * 2, H, 14, 6), 0xffffff, 0, H / 2, RZ1, Math.PI);
  b.add('wall', wallPlane(zl, H, 12, 6), 0xffffff, -RX, H / 2, zc, Math.PI / 2);
  b.add('wall', wallPlane(zl, H, 12, 6), 0xffffff, RX, H / 2, zc, -Math.PI / 2);
  b.add('far', new THREE.PlaneGeometry(RX * 2, zl), 0xfbf5e9, 0, H, zc, 0, Math.PI / 2); // ceiling (visible from below only)
  ctx.ceilingHeight = H;
  for (const [x, z, w, d] of [[0, RZ0 + 1, RX * 2, 2], [0, RZ1 - 1, RX * 2, 2], [-RX + 1, zc, 2, zl], [RX - 1, zc, 2, zl]]) {
    b.box('far', w, 10, d, x, 0, z, 0xfffaf0);
    ctx.reserveBox('roomwall', x, z, w, d, 0, false);
  }
  // window on the north wall (where the light comes from)
  const winTex = ctx.tex(256, 256, TX.drawWindow('#ffe7b8', '#fff7e0', '#ffffff'), { clamp: true });
  const win = new THREE.Mesh(new THREE.PlaneGeometry(150, 110), new THREE.MeshBasicMaterial({ map: winTex, color: winTex ? 0xffffff : 0xfff2cc }));
  win.position.set(40, 125, RZ1 - 0.6);
  win.rotation.y = Math.PI;
  win.name = 'window';
  ctx.add(win);
  b.box('far', 166, 6, 10, 40, 64, RZ1 - 5, 0xffffff);
  for (const s of [-1, 1]) b.box('far', 26, 132, 4, 40 + s * 90, 62, RZ1 - 3, 0xd9463a);
  b.box('far', 220, 5, 5, 40, 192, RZ1 - 4, 0x8a5a3a);
  // door on the west wall
  b.box('far', 3, 170, 78, -RX + 2, 0, 90, 0xa8763f);
  b.box('far', 1.5, 60, 50, -RX + 4, 20, 90, 0x94652f);
  b.box('far', 1.5, 60, 50, -RX + 4, 95, 90, 0x94652f);
  b.sphere('gloss', 4, -RX + 7, 82, 62, 0xe8c15a);

  // ---- cabinets, oven, fridge along the south wall ----
  const CD = 44, CH = 66;
  for (let i = 0; i < 5; i++) {
    const x = -RX + 32 + i * 62;
    b.box('matte', 60, CH, CD, x, 4, RZ0 + CD / 2, 0x6fa3a0);
    b.box('matte', 60, 4, CD - 6, x, 0, RZ0 + CD / 2 - 3, 0x2f3a3d);
    if (i === 2) {
      b.box('gloss', 48, 40, 1.5, x, 14, RZ0 + CD + 0.4, 0x15171c);
      b.box('glow', 40, 10, 0.6, x, 18, RZ0 + CD + 1.3, 0xff8a2e);
      b.box('gloss', 50, 3, 3, x, 58, RZ0 + CD + 2, 0xcfd4da);
    } else {
      for (const s of [-1, 1]) {
        b.box('matte', 26, 54, 1.5, x + s * 14.5, 10, RZ0 + CD + 0.4, 0x8cc0bb);
        b.sphere('gloss', 1.8, x + s * 4, 50, RZ0 + CD + 2.4, 0xf1e6c8);
      }
    }
  }
  b.box('matte', 318, 5, CD + 6, -RX + 157, CH + 4, RZ0 + CD / 2 + 3, 0x3b3f46); // worktop
  ctx.reserveBox('cabinets', -RX + 157, RZ0 + CD / 2 + 3, 318, CD + 8, 0, false);
  for (let i = 0; i < 4; i++) {
    const x = -RX + 40 + i * 66;
    b.box('far', 62, 70, 26, x, 128, RZ0 + 13, 0x6fa3a0);
    b.box('far', 54, 60, 1.5, x, 133, RZ0 + 26.5, 0x8cc0bb);
  }
  // worktop clutter (seen from far below)
  b.cyl('gloss', 9, 10, 20, -150, CH + 9, RZ0 + 24, 0xd9463a, 14); // kettle
  b.box('gloss', 30, 18, 16, -80, CH + 9, RZ0 + 22, 0xcfd4da); // toaster
  b.cyl('matte', 14, 9, 8, 0, CH + 9, RZ0 + 24, 0xf2ead8, 16); // fruit bowl
  for (let k = 0; k < 5; k++) b.sphere('matte', 5, -6 + k * 4, CH + 19 + (k % 2) * 3, RZ0 + 22 + (k % 3) * 3, [0xff8a1e, 0xe53a2f, 0xffd21f][k % 3]);
  // fridge
  b.box('gloss', 70, 200, 56, 160, 2, RZ0 + 28, 0xdfe5ea);
  b.box('gloss', 3, 70, 3, 132, 100, RZ0 + 58, 0x9aa3ad);
  b.box('gloss', 3, 40, 3, 132, 30, RZ0 + 58, 0x9aa3ad);
  b.box('matte', 71, 1.5, 57, 160, 84, RZ0 + 28, 0xa9b2bb);
  for (let k = 0; k < 7; k++) b.box('matte', 5, 5, 0.8, 140 + r() * 45, 95 + r() * 60, RZ0 + 56.4, r.pick([0xe53a2f, 0xffc928, 0x2b7de9, 0x35b56a, 0xff5fa2]), 0, 0, r() * 0.6);
  ctx.reserveBox('fridge', 160, RZ0 + 28, 70, 56, 0, false);

  // ---- rug ----
  const rugTex = ctx.tex(512, 320, TX.drawRug(), { clamp: true });
  const rug = new THREE.Mesh(new THREE.PlaneGeometry(190, 112), new THREE.MeshLambertMaterial({
    map: rugTex, color: rugTex ? 0xffffff : 0x2f5d7c, polygonOffset: true, polygonOffsetFactor: -0.5, polygonOffsetUnits: -0.5,
  }));
  rug.rotation.x = -Math.PI / 2;
  rug.position.set(2, 0.04, -22);
  rug.receiveShadow = true;
  rug.name = 'rug';
  ctx.add(rug);

  // ---- table (legs are solid, the top is far overhead) ----
  const TY = 52, wood = 0xb9814a;
  const legs = [[-56, -48], [56, -48], [-56, 2], [56, 2]].map(([x, z]) => ctx.spot('table-leg', x, z, 3.6));
  for (const p of legs) {
    b.box('matte', 5.2, TY, 5.2, p.x, 0, p.z, wood);
    b.box('matte', 6.2, 1.2, 6.2, p.x, 0, p.z, 0x6b4a2a);
  }
  b.box('matte', 128, 4, 66, 0, TY, -23, 0xc9905a);
  b.box('matte', 118, 5, 56, 0, TY - 5, -23, 0x9c6b3c);
  // chairs
  const chair = (cx, cz, ry, color) => {
    const c = Math.cos(ry), s = Math.sin(ry);
    for (const [lx, lz] of [[-9, -9], [9, -9], [-9, 9], [9, 9]]) {
      const x = cx + lx * c + lz * s, z = cz - lx * s + lz * c;
      const p = ctx.spot('chair-leg', x, z, 2.2);
      b.box('matte', 3, lz > 0 ? 62 : 30, 3, p.x, 0, p.z, color);
    }
    b.box('matte', 23, 3, 23, cx, 30, cz, color, ry);
    b.box('matte', 21, 2, 21, cx, 33, cz, 0xd9463a, ry);
    b.box('matte', 23, 16, 2.4, cx + 9.5 * s, 46, cz + 9.5 * c, color, ry);
  };
  chair(14, 46, 0.3, 0xa87440);
  chair(-78, 78, 2.4, 0xa87440);
  chair(150, 40, -1.3, 0xa87440);

  // pendant lamp over the table + warm fill light
  b.cyl('far', 0.6, 0.6, H - 150, 0, 150, -23, 0x333333, 6);
  b.add('matte', new THREE.ConeGeometry(26, 20, 20), 0xd9463a, 0, 140, -23);
  b.sphere('glow', 6, 0, 131, -23, 0xfff0b8);
  const lamp = new THREE.PointLight(0xffc98a, 900, 420, 1.6);
  lamp.position.set(0, 125, -23);
  ctx.add(lamp);

  // ceiling fan
  const fb = new Batch();
  for (let k = 0; k < 4; k++) fb.box('f', 64, 1.2, 11, Math.cos((k * TAU) / 4) * 36, 0, -Math.sin((k * TAU) / 4) * 36, 0x8a5a3a, (k * TAU) / 4);
  fb.cyl('f', 7, 7, 5, 0, -1, 0, 0xe8e2d4, 12);
  const fan = fb.build({ f: ctx.mats.far })[0];
  fan.matrixAutoUpdate = true;
  fan.position.set(110, H - 16, 80);
  fan.name = 'fan';
  ctx.add(fan);
  b.cyl('far', 1.5, 1.5, 16, 110, H - 16, 80, 0xe8e2d4, 8);
  ctx.onUpdate((dt) => { fan.rotation.y += dt * 1.4; });

  // ---- big floor props ----
  const bowl = ctx.spot('petbowl', 155, 105, 14);
  b.cyl('gloss', 12, 14, 6, bowl.x, 0, bowl.z, 0x2b7de9, 18);
  b.cyl('matte', 10.5, 10.5, 0.4, bowl.x, 5.8, bowl.z, 0x7a4a2a, 16);
  for (let k = 0; k < 14; k++) b.sphere('matte', 1.5, bowl.x + r.range(-8, 8), 6.6, bowl.z + r.range(-8, 8), 0x9a6234, 1, 0.8, 1, 6, 5);

  const sl = ctx.spot('slippers', -160, -95, 18);
  for (const s of [-1, 1]) {
    b.sphere('matte', 7, sl.x + s * 8, 2.5, sl.z, 0xff7fb0, 1, 0.45, 2.1, 10, 6);
    b.sphere('matte', 7.2, sl.x + s * 8, 4.5, sl.z + 6, 0xff5c9a, 1, 0.6, 1.2, 10, 6);
  }

  const milk = ctx.spot('milk', -150, 20, 15, false);
  b.cyl('gloss', 13, 13, 0.12, milk.x, 0.01, milk.z, 0xfdfdf8, 20);
  b.cyl('gloss', 7, 7, 0.12, milk.x + 11, 0.01, milk.z + 7, 0xfdfdf8, 14);

  // ---- trackside clutter ----
  ctx.scatterBeside(18, 1, 10, 8, (x, z) => {
    const ry = r() * TAU;
    if (r() < 0.25) pkg(ctx, 13, 19, 4.6, x, 0, z, ry, true);
    else pkg(ctx, 13, 19, 4.6, x, 0, z, ry);
  }, { name: 'cereal-box', solid: true });
  ctx.scatterBeside(13, 1, 12, 8.5, (x, z) => bookStack(ctx, x, z, r.int(2, 5)), { name: 'books', solid: true });
  ctx.scatterBeside(9, 1.5, 10, 6.5, (x, z) => mug(ctx, x, z, 1, r.pick([0xffffff, 0xe53a2f, 0x2b7de9, 0xffc928, 0x35b56a])), { name: 'mug', solid: true });
  ctx.scatterBeside(8, 1, 9, 4.2, (x, z) => {
    const orange = r() < 0.5;
    b.sphere('matte', 4, x, 4 * (orange ? 1 : 0.92), z, orange ? 0xff8a1e : 0xd9302a, 1, orange ? 1 : 0.92, 1, 14, 10);
    b.cyl('matte', 0.25, 0.25, 1.2, x, 7.4, z, 0x4a3324, 5);
  }, { name: 'fruit', solid: true });
  // toy bricks
  ctx.scatterBeside(22, 0.6, 9, 2.6, (x, z) => {
    const c = r.pick([0xe53a2f, 0xffc928, 0x2b7de9, 0x35b56a, 0xffffff]), ry = r() * TAU;
    b.box('gloss', 4, 2.4, 2, x, 0, z, c, ry);
    for (const s of [-1, 1]) b.cyl('gloss', 0.6, 0.6, 0.5, x + Math.cos(ry) * s, 2.4, z - Math.sin(ry) * s, c, 8);
  }, { name: 'brick', solid: true });
  // pencils
  ctx.scatterBeside(8, 1, 8, 7.5, (x, z) => {
    const ry = r() * TAU, c = Math.sin(ry), s = Math.cos(ry);
    b.add('matte', new THREE.CylinderGeometry(0.55, 0.55, 13, 6), 0xffc928, x, 0.55, z, ry, Math.PI / 2);
    b.add('matte', new THREE.ConeGeometry(0.55, 1.6, 6), 0xe9c9a0, x + c * 7.3, 0.55, z + s * 7.3, ry, Math.PI / 2);
    b.add('matte', new THREE.CylinderGeometry(0.58, 0.58, 1.2, 6), 0xff7fb0, x - c * 7.1, 0.55, z - s * 7.1, ry, Math.PI / 2);
  }, { name: 'pencil', solid: true });
  // marbles
  ctx.scatterBeside(26, 0.4, 8, 1.3, (x, z) => b.sphere('gloss', 1.2, x, 1.2, z, r.pick([0x2bd4e9, 0xe53a8f, 0x7be03a, 0xffc928, 0x9a5cff]), 1, 1, 1, 10, 8), { name: 'marble' });

  // spilled cereal loops (instanced)
  const loopGeo = new THREE.TorusGeometry(0.62, 0.26, 6, 12);
  const COUNT = 520;
  const loops = new THREE.InstancedMesh(loopGeo, new THREE.MeshLambertMaterial({ color: 0xffffff }), COUNT);
  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), sc = new THREE.Vector3(1, 1, 1), ps = new THREE.Vector3(), cc = new THREE.Color();
  const lc = [0xf2b24a, 0xe8843a, 0xf06a8a, 0x9bd45a, 0xb48aff, 0xf7d36a];
  let n = 0;
  const put = (x, z) => {
    if (n >= COUNT) return;
    e.set(Math.PI / 2 + (r() - 0.5) * 0.5, r() * TAU, (r() - 0.5) * 0.5);
    q.setFromEuler(e);
    m4.compose(ps.set(x, 0.3, z), q, sc);
    loops.setMatrixAt(n, m4);
    loops.setColorAt(n, cc.set(r.pick(lc)));
    n++;
  };
  ctx.scatterBeside(400, 0.2, 7, 0.9, put, { name: 'cereal' });
  ctx.scatter(120, [-190, -120, 190, 160], 0.9, put, { name: 'cereal', tries: 8 });
  loops.count = n;
  loops.instanceMatrix.needsUpdate = true;
  loops.castShadow = true;
  loops.frustumCulled = false;
  loops.name = 'cereal';
  ctx.add(loops);

  // far corners: tall cereal boxes + stacks so the room never looks empty
  ctx.scatter(16, [-195, -118, 195, 160], 11, (x, z) => {
    if (r() < 0.5) pkg(ctx, 20, 30, 7, x, 0, z, r() * TAU);
    else bookStack(ctx, x, z, r.int(3, 7), 1.4);
  }, { name: 'far-prop', solid: true });
}
