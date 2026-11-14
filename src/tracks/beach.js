// Track 4 — "Sandcastle Sunset": boardwalk over the dunes at golden hour. Crests, chicanes, elevation.
import * as THREE from 'three';
import * as TX from './textures.js';
import { Batch, jitter } from './util.js';
import { rock, gores, bands } from './props.js';

const TAU = Math.PI * 2;
const SAND = 0xe6c88c, DAMP = 0xcfa96a;

export const beach = {
  id: 'beach',
  name: 'Sandcastle Sunset',
  description: 'A rattling boardwalk through the sandcastles at golden hour. Blind crests, a chicane and no room for error.',
  difficulty: 4,
  defaultLaps: 3,
  seed: 4404,
  halfWidth: 6.5,
  cornerRadius: 14,
  startFrac: 0.45,
  waypoints: [
    [-110, -60, 0], [40, -60, 0], [70, -30, 1], [110, -30, 2.5], [125, 30, 6], [60, 60, 4],
    [30, 20, 1.5], [-20, 20, 4.5], [-40, 70, 1.5], [-110, 70, 3], [-130, 0, 0.5],
  ],
  humps: [{ at: 0.27, h: 1.8, len: 24 }, { at: 0.67, h: 2.2, len: 26 }, { at: 0.865, h: 1.6, len: 22 }],
  road: { style: 'planks', fallback: 0xb98a55, roughness: 0.82 },
  kerb: [0x2a8fbd, 0xfbf6ea],
  wall: { height: 1.3, block: 2.6, crenellate: true, palette: [0xe8c98a, 0xdcb877, 0xf0d59c], top: [0xf6e2b0, 0xecd29a, 0xfbeac0], skirt: DAMP },
  chevronCurvature: 1 / 22,
  chevron: { bg: '#fbf6ea', fg: '#e5532f' },
  gantry: { beam: 0x2a8fbd, post: 0x8a6a48, bannerBg: '#e5532f', bannerFg: '#fff6d8', accent: '#ffd21f' },
  boostAt: [{ t: 0.03 }, { t: 0.38 }, { t: 0.75 }],
  pickupAt: [0.08, 0.2, 0.34, 0.51, 0.6, 0.93],
  obstaclesAt: [{ t: 0.145, lat: -2.5, r: 1.0, kind: 'shell' }, { t: 0.565, lat: 2.5, r: 1.0, kind: 'pebble' }, { t: 0.8, lat: -2.5, r: 1.0, kind: 'shell' }],
  decorate,
};

function shell(ctx, x, y, z, s, color) {
  const g = new THREE.ConeGeometry(s, s * 2.4, 9, 3);
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) { // spiral ridges
    const yy = pos.getY(i), a = Math.atan2(pos.getZ(i), pos.getX(i));
    const k = 1 + 0.12 * Math.sin(yy * 6 / s + a);
    pos.setX(i, pos.getX(i) * k); pos.setZ(i, pos.getZ(i) * k);
  }
  g.computeVertexNormals();
  ctx.batch.add('matte', g, color, x, y + s * 0.8, z, ctx.rng() * TAU, Math.PI / 2 - 0.25);
}

function castle(ctx, x, z, s) {
  const b = ctx.batch, r = ctx.rng;
  const frustum = (rt, rb, h, px, py, pz, c = SAND) => b.cyl('matte', rt * s, rb * s, h * s, px, py * s, pz, jitter(c, r, 0.05), 14);
  b.cyl('matte', 30 * s, 35 * s, 4 * s, x, 0, z, DAMP, 22);
  const half = 18;
  for (let k = 0; k < 4; k++) {
    const a = (k / 4) * TAU, c = Math.cos(a), sn = Math.sin(a);
    // wall + crenels
    b.box('matte', half * 2 * s, 10 * s, 4 * s, x + sn * half * s, 4 * s, z + c * half * s, jitter(SAND, r, 0.05), a);
    for (let j = -3; j <= 3; j++) {
      b.box('matte', 2.6 * s, 2.4 * s, 4 * s, x + sn * half * s + c * j * 5 * s, 14 * s, z + c * half * s - sn * j * 5 * s, SAND, a);
    }
    // corner tower
    const tx = x + (c + sn) * half * s, tz = z + (c - sn) * half * s;
    frustum(5.4, 6.4, 18, tx, 4, tz);
    frustum(6.3, 6.3, 1.2, tx, 22, tz, 0xf0d59c);
    for (let j = 0; j < 8; j++) {
      const ja = (j / 8) * TAU;
      b.box('matte', 2 * s, 2.2 * s, 2 * s, tx + Math.cos(ja) * 5.2 * s, 23.2 * s, tz + Math.sin(ja) * 5.2 * s, SAND, -ja);
    }
    b.box('matte', 1.6 * s, 3.4 * s, 0.6 * s, tx + sn * 5.7 * s + c * 0, 14 * s, tz + c * 5.7 * s, 0x6b4f33, a);
  }
  // gate
  b.box('matte', 7 * s, 8 * s, 4.6 * s, x, 4 * s, z + half * s, 0x5a4028);
  b.cyl('matte', 3.5 * s, 3.5 * s, 4.6 * s, x, 12 * s - 2.3 * s, z + half * s, 0x5a4028, 12, 0, Math.PI / 2);
  // keep
  frustum(9.5, 11.5, 22, x, 4, z);
  frustum(10.6, 10.6, 1.4, x, 26, z, 0xf0d59c);
  frustum(6, 7, 10, x, 27.4, z);
  for (let j = 0; j < 10; j++) {
    const ja = (j / 10) * TAU;
    b.box('matte', 2.4 * s, 2.6 * s, 2.4 * s, x + Math.cos(ja) * 9.4 * s, 27.4 * s, z + Math.sin(ja) * 9.4 * s, SAND, -ja);
  }
  b.cone('matte', 7 * s, 9 * s, x, 37.4 * s, z, 0xf0d59c, 14);
  b.cyl('matte', 0.3 * s, 0.3 * s, 12 * s, x, 46 * s, z, 0x6b4f33, 6);
  return { x, y: 56 * s, z, s };
}

function decorate(ctx) {
  const b = ctx.batch, r = ctx.rng, L = ctx.line;
  ctx.background = new THREE.Color(0xffb886);
  ctx.fog = new THREE.Fog(0xffb98a, 240, 1050);
  const sunDir = [0.22, 0.4, 0.89];
  ctx.lights({ hemi: [0xffcfa8, 0xd9a878, 1.0], sun: { color: 0xffb070, intensity: 2.5, dir: sunDir } });
  ctx.skyDome([[0, 0xffd696], [0.07, 0xffa565], [0.25, 0xe06f86], [0.55, 0x74509e], [1, 0x2c2c6a]]);
  ctx.ground(ctx.tex(512, 512, TX.drawSand()), 0xecd29a, 1700, 60);

  // ---- sun disc + halo ----
  const sd = ctx.sunDir;
  const sunPos = new THREE.Vector3(L.cx, 0, L.cz).addScaledVector(sd, 560);
  const disc = new THREE.Mesh(new THREE.CircleGeometry(52, 40), new THREE.MeshBasicMaterial({ color: 0xfff2b8, fog: false, depthWrite: false }));
  disc.position.copy(sunPos);
  disc.lookAt(L.cx, 0, L.cz);
  disc.renderOrder = -8;
  disc.name = 'sun-disc';
  ctx.add(disc);
  const glowTex = ctx.tex(128, 128, TX.drawGlow(), { clamp: true });
  const halo = new THREE.Mesh(new THREE.CircleGeometry(190, 32), new THREE.MeshBasicMaterial({
    map: glowTex, color: 0xffc27a, transparent: true, opacity: glowTex ? 0.9 : 0.15, fog: false, depthWrite: false, blending: THREE.AdditiveBlending,
  }));
  halo.position.copy(sunPos).addScaledVector(sd, -4);
  halo.lookAt(L.cx, 0, L.cz);
  halo.renderOrder = -9;
  halo.name = 'sun-halo';
  ctx.add(halo);

  // ---- obstacles ----
  for (const o of ctx.obstacles) {
    if (o.kind === 'shell') shell(ctx, o.x, o.y, o.z, o.radius * 0.95, 0xffc9b0);
    else rock(ctx, o.x, o.z, o.radius * 1.25, 0x8f8a84, o.y);
  }

  // ---- sea (north), wet sand and foam ----
  const SEA = 168;
  const waterTex = ctx.tex(256, 256, TX.drawWater(), { repeat: [26, 12] });
  const waterMat = new THREE.MeshStandardMaterial({ map: waterTex, color: waterTex ? 0xffffff : 0x3a88a2, roughness: 0.18, metalness: 0.45, emissive: 0x7a3a22, emissiveIntensity: 0.35 });
  const sea = new THREE.Mesh(new THREE.PlaneGeometry(1800, 700), waterMat);
  sea.rotation.x = -Math.PI / 2;
  sea.position.set(L.cx, 0.35, SEA + 350);
  sea.name = 'sea';
  ctx.add(sea);
  for (let x = -320; x <= 320; x += 16) ctx.reserve('sea', L.cx + x, SEA + 12, 12, false);
  const wet = new THREE.Mesh(new THREE.PlaneGeometry(1800, 46), new THREE.MeshStandardMaterial({ color: 0xb8925c, roughness: 0.35, metalness: 0.1, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }));
  wet.rotation.x = -Math.PI / 2;
  wet.position.set(L.cx, 0.04, SEA - 20);
  wet.receiveShadow = true;
  wet.name = 'wet-sand';
  ctx.add(wet);
  const foam = new THREE.Mesh(new THREE.PlaneGeometry(1800, 7), new THREE.MeshBasicMaterial({ color: 0xfff6ea, transparent: true, opacity: 0.85 }));
  foam.rotation.x = -Math.PI / 2;
  foam.position.set(L.cx, 0.42, SEA);
  foam.name = 'foam';
  ctx.add(foam);
  ctx.onUpdate((dt, t) => {
    if (waterTex) waterTex.offset.set(Math.sin(t * 0.2) * 0.05, t * 0.05);
    const w = Math.sin(t * 0.7);
    foam.position.z = SEA - 4 + w * 5;
    sea.position.z = SEA + 346 + w * 5;
    foam.material.opacity = 0.55 + 0.3 * (0.5 + 0.5 * Math.cos(t * 0.7));
  });

  // ---- sandcastles ----
  const flags = [];
  const c1 = ctx.spot('castle', -72, 2, 31);
  flags.push(castle(ctx, c1.x, c1.z, 0.86));
  const c2 = ctx.spot('castle', 38, -14, 17);
  flags.push(castle(ctx, c2.x, c2.z, 0.46));
  const c3 = ctx.spot('castle', 178, -46, 24);
  flags.push(castle(ctx, c3.x, c3.z, 0.66));
  const flagGeo = new THREE.BufferGeometry();
  flagGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0, 9, -2.2, 0, 0, -4.4, 0]), 3));
  flagGeo.computeVertexNormals();
  flags.forEach((f, i) => {
    const m = new THREE.Mesh(flagGeo, new THREE.MeshBasicMaterial({ color: [0xe5532f, 0x2a8fbd, 0xffd21f][i], side: THREE.DoubleSide }));
    m.position.set(f.x, f.y + 1.6 * f.s, f.z);
    m.scale.setScalar(f.s);
    m.name = 'flag';
    ctx.add(m);
    ctx.onUpdate((dt, t) => { m.rotation.y = 0.6 + Math.sin(t * 3 + i) * 0.35 + Math.sin(t * 7.3 + i * 2) * 0.1; });
  });

  // ---- bucket, spade, sand pies ----
  const bk = ctx.spot('bucket', -8, -24, 13);
  b.add('gloss', new THREE.CylinderGeometry(11, 8, 17, 20, 1, true), 0xe5532f, bk.x, 8.5, bk.z);
  b.cyl('gloss', 8, 8, 0.6, bk.x, 0, bk.z, 0xc9431f, 20);
  b.cyl('matte', 10.4, 10.4, 0.4, bk.x, 15.4, bk.z, SAND, 20);
  b.torus('gloss', 11.3, 0.7, bk.x, 16.8, bk.z, 0xffffff, Math.PI / 2, 0, 0, TAU, 24, 6);
  b.torus('gloss', 11.5, 0.5, bk.x, 17, bk.z, 0xfbf6ea, 0, 0.5, 0, Math.PI, 18, 6);
  const pie = ctx.spot('sandpie', bk.x + 24, bk.z + 8, 10);
  b.cyl('matte', 6.4, 8.8, 13, pie.x, 0, pie.z, SAND, 18);
  b.cyl('matte', 6.6, 6.6, 0.8, pie.x, 13, pie.z, 0xf0d59c, 18);
  const sp = ctx.spot('spade', 96, 16, 12);
  b.add('gloss', new THREE.CylinderGeometry(0.9, 0.9, 22, 8), 0xffd21f, sp.x, 1.2, sp.z, 0.7, Math.PI / 2);
  b.box('gloss', 9, 1, 11, sp.x + Math.sin(0.7) * 15, 0.4, sp.z + Math.cos(0.7) * 15, 0x2a8fbd, 0.7);
  b.torus('gloss', 2.6, 0.8, sp.x - Math.sin(0.7) * 12.5, 1.2, sp.z - Math.cos(0.7) * 12.5, 0xffd21f, Math.PI / 2, 0, 0, TAU, 12, 6);

  // ---- beach ball ----
  const ball = ctx.spot('beachball', 160, 66, 12);
  b.add('gloss', new THREE.SphereGeometry(11, 28, 18), gores([0xe5532f, 0xffffff, 0x2a8fbd, 0xffd21f, 0xffffff, 0x35b56a]), ball.x, 11, ball.z, 0.3, 0.6, 0.2);

  // ---- parasol + towel + flip-flops ----
  const par = ctx.spot('parasol', -176, -92, 4);
  b.cyl('matte', 1.3, 1.5, 92, par.x, 0, par.z, 0xf4efe2, 8);
  b.add('matte', new THREE.ConeGeometry(66, 17, 16, 1, true), gores([0xe5532f, 0xfbf6ea], 16), par.x, 92, par.z);
  b.add('matte', new THREE.ConeGeometry(65.5, 16.6, 16, 1, true).scale(1, 1, -1), gores([0xc9431f, 0xe6dfd0], 16), par.x, 91.6, par.z); // underside
  b.sphere('matte', 2, par.x, 101, par.z, 0xffd21f);
  const towel = new THREE.Mesh(new THREE.PlaneGeometry(84, 44, 12, 1), new THREE.MeshLambertMaterial({ vertexColors: true, polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -1 }));
  {
    const pos = towel.geometry.attributes.position, arr = new Float32Array(pos.count * 3), c = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      c.set(Math.floor((pos.getX(i) + 42) / 7.01) % 2 ? 0x2a8fbd : 0xfbf6ea);
      arr.set([c.r, c.g, c.b], i * 3);
    }
    towel.geometry = towel.geometry.toNonIndexed();
    const p2 = towel.geometry.attributes.position, a2 = new Float32Array(p2.count * 3);
    for (let i = 0; i < p2.count; i += 3) {
      const mx = (p2.getX(i) + p2.getX(i + 1) + p2.getX(i + 2)) / 3;
      c.set(Math.floor((mx + 42) / 7) % 2 ? 0x2a8fbd : 0xfbf6ea);
      for (let k = 0; k < 3; k++) a2.set([c.r, c.g, c.b], (i + k) * 3);
    }
    towel.geometry.setAttribute('color', new THREE.BufferAttribute(a2, 3));
  }
  towel.rotation.x = -Math.PI / 2;
  towel.rotation.z = 0.25;
  towel.position.set(-196, 0.06, -112);
  towel.receiveShadow = true;
  towel.name = 'towel';
  ctx.add(towel);
  ctx.reserveBox('towel', -196, -112, 84, 44, 0.25, true);
  for (const s of [-1, 1]) {
    const ff = ctx.spot('flipflop', -150 + s * 7, -128, 6, false);
    b.sphere('matte', 5, ff.x, 0.6, ff.z, 0xffd21f, 1, 0.14, 2.3, 12, 6);
    b.torus('matte', 3, 0.4, ff.x, 1.6, ff.z + 5, 0xe5532f, 0, Math.PI / 2, 0, Math.PI, 10, 5);
  }

  // ---- palms ----
  for (const [px0, pz0, lean] of [[186, -112, 0.9], [214, 40, -0.5], [-214, 96, 2.2]]) {
    const p = ctx.spot('palm', px0, pz0, 6);
    let x = p.x, y = 0, z = p.z, tilt = 0.05;
    for (let k = 0; k < 9; k++) {
      const h = 13;
      b.add('matte', new THREE.CylinderGeometry(3.6 - k * 0.16, 4 - k * 0.16, h, 9), k % 2 ? 0x8a6a48 : 0x7a5c3e, x + Math.sin(lean) * Math.sin(tilt) * h / 2, y + Math.cos(tilt) * h / 2, z + Math.cos(lean) * Math.sin(tilt) * h / 2, lean, tilt);
      x += Math.sin(lean) * Math.sin(tilt) * h; z += Math.cos(lean) * Math.sin(tilt) * h; y += Math.cos(tilt) * h;
      tilt += 0.045;
    }
    for (let k = 0; k < 9; k++) {
      const a = (k / 9) * TAU + r() * 0.3;
      const g = new THREE.SphereGeometry(1, 8, 5);
      g.scale(26, 1.2, 6.5);
      g.translate(24, 0, 0);
      b.add('matte', g, jitter(0x3f9a4a, r, 0.12), x, y, z, a, 0, -0.45 - r() * 0.25);
    }
    for (let k = 0; k < 3; k++) b.sphere('matte', 3, x + Math.cos(k * 2.1) * 3.5, y - 3, z + Math.sin(k * 2.1) * 3.5, 0x5a3d24);
  }

  // ---- beach huts (south skyline) ----
  const hutC = [0x2a8fbd, 0xe5532f, 0xffd21f, 0xfbf6ea, 0x35b56a, 0xff7fb0, 0x2a8fbd, 0xe5532f];
  for (let i = 0; i < 8; i++) {
    const x = -224 + i * 64, z = -178;
    b.box('far', 46, 52, 40, x, 6, z, hutC[i]);
    for (let k = -2; k <= 2; k++) b.box('far', 4.6, 52, 0.6, x + k * 9.2, 6, z + 20.3, 0xfbf6ea);
    b.add('far', new THREE.CylinderGeometry(0.1, 36, 22, 4, 1), 0xfbf6ea, x, 69, z, Math.PI / 4);
    b.box('far', 14, 30, 0.8, x, 6, z + 20.7, 0x6b4f33);
    for (const [dx, dz] of [[-20, -17], [20, -17], [-20, 17], [20, 17]]) b.box('far', 3, 6, 3, x + dx, 0, z + dz, 0x6b4f33);
    ctx.reserveBox('hut', x, z, 46, 40, 0, false);
  }
  // ---- dunes ----
  for (let i = 0; i < 9; i++) {
    const x = -480 + i * 120 + r.range(-20, 20);
    b.sphere('far', 130 + r() * 40, x, -8, -330 + r.range(-20, 20), jitter(0xe0bd80, r, 0.06), 1.2, 0.34 + r() * 0.1, 1, 14, 8);
  }
  for (const sx of [-1, 1]) for (let i = 0; i < 5; i++) {
    b.sphere('far', 110 + r() * 40, sx * (400 + r() * 30), -8, -250 + i * 95, jitter(0xe0bd80, r, 0.06), 1, 0.3 + r() * 0.12, 1.25, 14, 8);
  }
  // dune grass
  for (let i = 0; i < 90; i++) {
    const side = r() < 0.5, x = side ? r.sign() * (300 + r() * 60) : r.range(-420, 420), z = side ? r.range(-250, 120) : -250 - r() * 40;
    const x2 = side ? r.sign() * (285 + r() * 50) : r.range(-420, 420), z2 = side ? z : -222 - r() * 30;
    for (let k = 0; k < 4; k++) b.add('far', new THREE.ConeGeometry(1.6, 18 + r() * 12, 4), jitter(0x8fa85a, r, 0.15), x2 + r.range(-4, 4), 8, z2 + r.range(-4, 4), r() * TAU, (r() - 0.5) * 0.5);
  }

  // ---- lighthouse on a rock out in the bay ----
  const LX = -330, LZ = 300;
  b.sphere('far', 60, LX, 0, LZ, 0x6d6a72, 1.2, 0.45, 1, 10, 7);
  b.add('far', new THREE.CylinderGeometry(11, 17, 150, 16), bands([0xfbf6ea, 0xe5532f, 0xfbf6ea, 0xe5532f, 0xfbf6ea], -75, 75), LX, 98, LZ);
  b.cyl('far', 15, 15, 3, LX, 173, LZ, 0x3a3f4d, 16);
  b.cyl('glowNoFog', 8, 8, 14, LX, 176, LZ, 0xfff2b8, 12);
  b.cone('far', 12, 12, LX, 190, LZ, 0xe5532f, 16);
  const beamGeo = new THREE.CylinderGeometry(3, 36, 420, 12, 1, true);
  beamGeo.translate(0, -210, 0);
  beamGeo.rotateZ(Math.PI / 2 - 0.06);
  const beam = new THREE.Mesh(beamGeo, new THREE.MeshBasicMaterial({ color: 0xfff2c0, transparent: true, opacity: 0.16, depthWrite: false, fog: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending }));
  beam.position.set(LX, 183, LZ);
  beam.name = 'lighthouse-beam';
  ctx.add(beam);
  ctx.onUpdate((dt) => { beam.rotation.y += dt * 0.5; });

  // sailboat
  b.box('far', 46, 7, 13, 210, 0, 420, 0xfbf6ea, 0.3);
  b.cyl('far', 0.7, 0.7, 60, 210, 6, 420, 0x6b4f33, 6);
  {
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0, 26, 0, 0, 0, 52, 0, 0, 0, 0, 0, 52, 0, 26, 0, 0]), 3));
    b.add('far', sg, 0xfff2d8, 211, 12, 420, 0.3);
  }

  // ---- seagulls circling over the bay ----
  const gb = new Batch();
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * TAU + r(), d = 70 + r() * 50, y = r() * 40;
    for (const s of [-1, 1]) {
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0, s * 7, 2.4, -1, s * 6, 2, 2.4, 0, 0, 0, s * 6, 2, 2.4, s * 7, 2.4, -1]), 3));
      gb.add('g', g, 0xfbf6ea, Math.cos(a) * d, y, Math.sin(a) * d, -a);
    }
  }
  const gulls = gb.build({ g: new THREE.MeshBasicMaterial({ vertexColors: true, fog: false }) })[0];
  gulls.matrixAutoUpdate = true;
  gulls.position.set(60, 110, 330);
  gulls.name = 'gulls';
  ctx.add(gulls);
  ctx.onUpdate((dt, t) => { gulls.rotation.y += dt * 0.16; gulls.position.y = 110 + Math.sin(t * 0.4) * 8; });

  // ---- a crab scuttling sideways ----
  const cr = ctx.spot('crab', 84, 112, 16);
  const kb = new Batch();
  kb.sphere('k', 3.4, 0, 2.6, 0, 0xe5532f, 1.3, 0.6, 1);
  for (const s of [-1, 1]) {
    kb.sphere('k', 0.55, s * 1.2, 5.2, 2.2, 0x111111, 1, 1, 1, 6, 5);
    kb.cyl('k', 0.2, 0.2, 2, s * 1.2, 3.4, 2.2, 0xe5532f, 5);
    kb.sphere('k', 1.6, s * 5.6, 3, 2.6, 0xf0683f, 1.2, 0.8, 0.8, 8, 6);
    for (let j = 0; j < 3; j++) kb.add('k', new THREE.CylinderGeometry(0.3, 0.2, 4.2, 5), 0xc9431f, s * (4 + j * 0.4), 1.6, -1.6 + j * 1.5, 0, 0, s * -0.9);
  }
  const crab = kb.build({ k: ctx.mats.matte }, { k: { cast: true } })[0];
  crab.matrixAutoUpdate = true;
  crab.name = 'crab';
  ctx.add(crab);
  ctx.onUpdate((dt, t) => {
    crab.position.set(cr.x + Math.sin(t * 0.6) * 11, Math.abs(Math.sin(t * 9)) * 0.3, cr.z);
    crab.rotation.y = Math.PI + Math.sin(t * 0.3) * 0.15;
  });

  // ---- shells, starfish, pebbles, driftwood ----
  const shellC = [0xffd9c4, 0xfbeedd, 0xf7b9a0, 0xe8d0f0, 0xfff3e0];
  ctx.scatterBeside(30, 0.8, 11, () => 1.6 + r() * 1.8, (x, z, rad) => shell(ctx, x, 0, z, rad, r.pick(shellC)), { name: 'shell', solid: true });
  const star = new THREE.Shape();
  for (let k = 0; k < 10; k++) {
    const a = (k / 10) * TAU, rad = k % 2 ? 1.5 : 4;
    if (k === 0) star.moveTo(Math.cos(a) * rad, Math.sin(a) * rad); else star.lineTo(Math.cos(a) * rad, Math.sin(a) * rad);
  }
  star.closePath();
  ctx.scatterBeside(12, 1, 10, 4.2, (x, z) => {
    const g = new THREE.ExtrudeGeometry(star, { depth: 0.8, bevelEnabled: true, bevelSize: 0.4, bevelThickness: 0.4, bevelSegments: 1, curveSegments: 1 });
    b.add('matte', g, r.pick([0xff8a3c, 0xf0683f, 0xff9fb0]), x, 0.5, z, r() * TAU, -Math.PI / 2);
  }, { name: 'starfish', solid: true });
  ctx.scatterBeside(80, 0.3, 10, () => 0.5 + r() * 1.3, (x, z, rad) => rock(ctx, x, z, rad, r.pick([0x9a948c, 0xb8a890, 0x7f7a76, 0xd0c0a8])), { name: 'pebble' });
  ctx.scatterBeside(7, 1.5, 12, 11, (x, z) => {
    const ry = r() * TAU;
    b.add('matte', new THREE.CylinderGeometry(1.5, 1.9, 21, 8), jitter(0x9a7a58, r, 0.1), x, 1.6, z, ry, Math.PI / 2);
    b.add('matte', new THREE.CylinderGeometry(0.6, 0.9, 6, 6), 0x8a6a48, x, 3.4, z, ry + 1, 1.0);
  }, { name: 'driftwood', solid: true });
  // small sand mounds and far shells
  ctx.scatter(34, [-250, -150, 250, 140], () => 5 + r() * 6, (x, z, rad) => {
    if (r() < 0.6) b.sphere('matte', rad, x, -rad * 0.55, z, jitter(SAND, r, 0.05), 1, 0.8, 1, 12, 8);
    else shell(ctx, x, 0, z, rad * 0.5, r.pick(shellC));
  }, { name: 'mound', solid: true });
}
