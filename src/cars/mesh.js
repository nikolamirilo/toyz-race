// Procedural low-poly toy RC car models. No textures, no DOM: safe to import in node.
//
// Layout of the returned group (origin at ground centre, facing +Z, car's left = +X):
//   group
//     ├─ body pivot (group.userData.body)      <- roll / pitch / squash applied here by Car
//     │    ├─ paint mesh (vertex colours)  ├─ glass  ├─ headlights  ├─ taillights  [├─ glow]
//     │    └─ antenna (group.userData.antenna, pivot at its base)
//     ├─ steer pivot FL -> wheel FL            (group.userData.steerPivots = [fl, fr])
//     ├─ steer pivot FR -> wheel FR
//     ├─ wheel RL
//     └─ wheel RR                               (group.userData.wheels = [fl, fr, rl, rr])
import * as THREE from 'three';
import { getCarDef } from './defs.js';

const DARK = '#1c1f25';
const RUBBER = '#15161a';
const CHROME = '#d5dae2';
const GREY = '#6c727d';

const _m = new THREE.Matrix4();
const _q = new THREE.Quaternion();
const _e = new THREE.Euler();
const _p = new THREE.Vector3();
const _s = new THREE.Vector3();
const _c = new THREE.Color();
const _a = new THREE.Vector3();
const _b = new THREE.Vector3();
const UP = new THREE.Vector3(0, 1, 0);

// ---------------------------------------------------------------------------------------------------
// Geometry builder: collects primitives per material bucket and merges each bucket into one geometry.
class Builder {
  constructor() { this.buckets = {}; }

  add(geom, color, bucket = 'paint', flat = false) {
    let g = geom.index ? geom.toNonIndexed() : geom;
    if (flat) g.computeVertexNormals();
    (this.buckets[bucket] || (this.buckets[bucket] = [])).push({ g, color });
    return this;
  }

  // ---- primitives (all return this) ----
  box(w, h, d, x, y, z, color, bucket, rx = 0, ry = 0, rz = 0) {
    const g = new THREE.BoxGeometry(w, h, d);
    place(g, x, y, z, rx, ry, rz);
    return this.add(g, color, bucket);
  }

  /** cylinder; axis: 'x' | 'y' | 'z' */
  cyl(r, len, x, y, z, axis, color, bucket, seg = 10, r2 = r) {
    const g = new THREE.CylinderGeometry(r2, r, len, seg);
    if (axis === 'x') g.rotateZ(-Math.PI / 2);
    else if (axis === 'z') g.rotateX(Math.PI / 2);
    g.translate(x, y, z);
    return this.add(g, color, bucket);
  }

  /** thin tube between two points */
  tube(ax, ay, az, bx, by, bz, r, color, bucket, seg = 6) {
    _a.set(ax, ay, az); _b.set(bx, by, bz);
    const len = _a.distanceTo(_b);
    const g = new THREE.CylinderGeometry(r, r, len, seg);
    _p.copy(_b).sub(_a).normalize();
    _q.setFromUnitVectors(UP, _p);
    _m.compose(_s.copy(_a).add(_b).multiplyScalar(0.5), _q, _p.set(1, 1, 1));
    g.applyMatrix4(_m);
    return this.add(g, color, bucket);
  }

  sphere(r, x, y, z, color, bucket, sx = 1, sy = 1, sz = 1, seg = 10) {
    const g = new THREE.SphereGeometry(r, seg, Math.max(6, seg - 3));
    g.scale(sx, sy, sz);
    g.translate(x, y, z);
    return this.add(g, color, bucket);
  }

  /**
   * Side-profile extrusion: pts = [[z, y], ...] outline seen from the side, extruded across the car (X).
   * taper(z, y) -> x scale lets the plan view narrow toward the nose/tail (gives faceted low-poly normals).
   */
  profile(pts, width, color, bucket, { bevel = 0.03, x = 0, taper = null } = {}) {
    const shape = new THREE.Shape();
    shape.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
    shape.closePath();
    const depth = Math.max(0.001, width - 2 * bevel);
    const g = new THREE.ExtrudeGeometry(shape, {
      depth, steps: 1, bevelEnabled: bevel > 0, bevelThickness: bevel, bevelSize: bevel,
      bevelOffset: -bevel, bevelSegments: 1, curveSegments: 4,
    });
    g.translate(0, 0, -depth / 2);
    g.rotateY(-Math.PI / 2); // shape x -> car z, extrusion -> car x
    if (taper) {
      const pos = g.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        pos.setX(i, pos.getX(i) * taper(pos.getZ(i), pos.getY(i)));
      }
    }
    if (x) g.translate(x, 0, 0);
    return this.add(g, color, bucket, !!taper);
  }

  torus(R, r, x, y, z, color, bucket, rx = 0, ry = 0, seg = 12) {
    const g = new THREE.TorusGeometry(R, r, 6, seg);
    place(g, x, y, z, rx, ry, 0);
    return this.add(g, color, bucket);
  }

  /** half-cylinder fender arching over a wheel (axis along X) */
  fender(r, w, x, y, z, color, bucket) {
    const g = new THREE.CylinderGeometry(r, r, w, 10, 1, false, 0, Math.PI);
    g.rotateZ(Math.PI / 2);
    g.translate(x, y, z);
    return this.add(g, color, bucket);
  }

  /** both sides: calls fn(sign) for +1 and -1 */
  mirror(fn) { fn(1); fn(-1); return this; }

  build(bucket) {
    const parts = this.buckets[bucket];
    if (!parts || !parts.length) return null;
    let count = 0;
    for (const p of parts) count += p.g.attributes.position.count;
    const pos = new Float32Array(count * 3);
    const nor = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    let o = 0;
    for (const p of parts) {
      const n = p.g.attributes.position.count;
      pos.set(p.g.attributes.position.array, o * 3);
      nor.set(p.g.attributes.normal.array, o * 3);
      _c.set(p.color);
      for (let i = 0; i < n; i++) {
        col[(o + i) * 3] = _c.r; col[(o + i) * 3 + 1] = _c.g; col[(o + i) * 3 + 2] = _c.b;
      }
      o += n;
      p.g.dispose();
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    g.setAttribute('color', new THREE.BufferAttribute(col, 3));
    g.computeBoundingSphere();
    g.computeBoundingBox();
    return g;
  }
}

function place(g, x, y, z, rx, ry, rz) {
  if (rx || ry || rz) {
    _q.setFromEuler(_e.set(rx, ry, rz, 'YXZ'));
    _m.compose(_p.set(x, y, z), _q, _s.set(1, 1, 1));
    g.applyMatrix4(_m);
  } else {
    g.translate(x, y, z);
  }
}

// ---------------------------------------------------------------------------------------------------
// Shared materials (colour lives in vertex colours, so these are shared by every car).
let MATS = null;
function mats() {
  if (MATS) return MATS;
  MATS = {
    paint: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.42, metalness: 0.12 }),
    wheel: new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.78, metalness: 0.05 }),
    glass: new THREE.MeshStandardMaterial({ color: 0x18283a, roughness: 0.12, metalness: 0.35 }),
    head: new THREE.MeshStandardMaterial({ color: 0xfff6d8, emissive: 0xfff0c0, emissiveIntensity: 1.1, roughness: 0.3 }),
    tail: new THREE.MeshStandardMaterial({ color: 0xff2a2a, emissive: 0xff1a1a, emissiveIntensity: 1.0, roughness: 0.3 }),
    glow: {},
  };
  return MATS;
}
function glowMat(color) {
  const m = mats();
  if (!m.glow[color]) {
    m.glow[color] = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 1.4, roughness: 0.4 });
  }
  return m.glow[color];
}

// ---------------------------------------------------------------------------------------------------
// Wheels: chunky lathe tyre + dished rim + spokes + hub nut, one merged vertex-coloured geometry.
const wheelCache = new Map();
function wheelGeometry(r, w, rimColor, hubColor, knobbly) {
  const key = `${r}|${w}|${rimColor}|${hubColor}|${knobbly}`;
  if (wheelCache.has(key)) return wheelCache.get(key);
  const b = new Builder();
  const hw = w / 2, rr = r * 0.6, sh = Math.min(0.05, w * 0.22);
  // tyre profile (radius, axial) revolved around the axle
  const prof = [
    new THREE.Vector2(rr, -hw), new THREE.Vector2(r - sh, -hw), new THREE.Vector2(r, -hw + sh),
    new THREE.Vector2(r, hw - sh), new THREE.Vector2(r - sh, hw), new THREE.Vector2(rr, hw),
  ];
  const tyre = new THREE.LatheGeometry(prof, 14);
  tyre.rotateZ(-Math.PI / 2);
  b.add(tyre, RUBBER, 'w');
  if (knobbly) { // tread blocks so big off-road tyres read as chunky and visibly spin
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const g = new THREE.BoxGeometry(w * 0.92, r * 0.1, r * 0.2);
      g.translate(0, r * 0.95, 0);
      g.rotateX(a);
      b.add(g, '#24262c', 'w');
    }
  }
  // rim dish
  b.cyl(rr * 1.02, w * 0.8, 0, 0, 0, 'x', rimColor, 'w', 12);
  // spokes (cross) slightly proud of the dish so rotation is visible
  for (let i = 0; i < 5; i++) {
    const g = new THREE.BoxGeometry(w * 0.9, rr * 0.95, rr * 0.22);
    g.translate(0, rr * 0.45, 0);
    g.rotateX((i / 5) * Math.PI * 2);
    b.add(g, hubColor, 'w');
  }
  b.cyl(rr * 0.3, w * 1.0, 0, 0, 0, 'x', hubColor, 'w', 8);
  const g = b.build('w');
  wheelCache.set(key, g);
  return g;
}

function addWheels(root, spec) {
  const m = mats();
  const wheels = [], pivots = [], radii = [];
  const defs = [
    { s: spec.front, side: 1, front: true }, { s: spec.front, side: -1, front: true },
    { s: spec.rear, side: 1, front: false }, { s: spec.rear, side: -1, front: false },
  ];
  for (const d of defs) {
    const geo = wheelGeometry(d.s.r, d.s.w, spec.rim || CHROME, spec.hub || GREY, !!spec.knobbly);
    const mesh = new THREE.Mesh(geo, m.wheel);
    mesh.castShadow = true;
    mesh.name = (d.front ? 'wheel-f' : 'wheel-r') + (d.side > 0 ? 'l' : 'r');
    mesh.userData.radius = d.s.r;
    if (d.front) {
      const pivot = new THREE.Group();
      pivot.position.set(d.side * d.s.x, d.s.r, d.s.z);
      pivot.add(mesh);
      root.add(pivot);
      pivots.push(pivot);
    } else {
      mesh.position.set(d.side * d.s.x, d.s.r, d.s.z);
      root.add(mesh);
    }
    wheels.push(mesh);
    radii.push(d.s.r);
  }
  root.userData.wheels = wheels;
  root.userData.steerPivots = pivots;
  root.userData.wheelRadii = radii;
}

// ---------------------------------------------------------------------------------------------------
// Individual car designs. Each receives (b: Builder, C: body colour, A: accent colour) and returns
// { wheels: spec, antenna: [x, y, z], glow?: colour }.

function buildKart(b, C, A) {
  b.box(0.6, 0.05, 1.5, 0, 0.15, 0.02, DARK);
  // nose fairing + number panel
  b.profile([[0.42, 0.13], [0.96, 0.13], [1.0, 0.2], [0.72, 0.36], [0.42, 0.3]], 0.42, C, 'paint',
    { taper: (z) => (z > 0.7 ? 1 - (z - 0.7) * 1.1 : 1) });
  b.box(0.2, 0.012, 0.2, 0, 0.345, 0.6, '#ffffff', 'paint', 0.22);
  // side pods
  b.mirror((s) => {
    b.profile([[-0.38, 0.13], [0.36, 0.13], [0.42, 0.2], [0.3, 0.29], [-0.38, 0.29]], 0.17, C, 'paint', { x: s * 0.36 });
    b.box(0.175, 0.012, 0.5, s * 0.36, 0.296, -0.05, A);
  });
  // seat
  b.profile([[-0.44, 0.17], [-0.04, 0.17], [-0.02, 0.25], [-0.28, 0.27], [-0.36, 0.6], [-0.47, 0.6]], 0.38, A);
  // toy driver: torso, helmet, visor
  b.cyl(0.12, 0.26, 0, 0.4, -0.2, 'y', '#2b4c9b', 'paint', 8, 0.1);
  b.sphere(0.15, 0, 0.66, -0.2, '#ffffff');
  b.box(0.31, 0.03, 0.31, 0, 0.7, -0.2, A);
  b.box(0.2, 0.075, 0.06, 0, 0.665, -0.075, DARK, 'glass');
  // arms + steering column and wheel
  b.mirror((s) => b.tube(s * 0.13, 0.47, -0.16, s * 0.09, 0.45, 0.2, 0.03, '#2b4c9b'));
  b.tube(0, 0.2, 0.55, 0, 0.45, 0.24, 0.02, GREY);
  b.torus(0.1, 0.02, 0, 0.455, 0.235, DARK, 'paint', -0.85);
  // engine + exhaust
  b.box(0.3, 0.2, 0.24, 0.1, 0.28, -0.66, GREY);
  b.cyl(0.07, 0.2, -0.12, 0.3, -0.66, 'y', CHROME, 'paint', 8);
  b.cyl(0.035, 0.34, 0.26, 0.24, -0.8, 'z', CHROME, 'paint', 6);
  // bumpers + axles
  b.cyl(0.035, 0.84, 0, 0.15, 1.02, 'x', CHROME, 'paint', 6);
  b.cyl(0.035, 0.9, 0, 0.22, -0.92, 'x', CHROME, 'paint', 6);
  b.cyl(0.025, 0.86, 0, 0.16, 0.62, 'x', GREY, 'paint', 6);
  b.cyl(0.03, 0.9, 0, 0.2, -0.6, 'x', GREY, 'paint', 6);
  b.mirror((s) => {
    b.box(0.07, 0.05, 0.03, s * 0.12, 0.25, 0.99, '#fff', 'head');
    b.box(0.08, 0.05, 0.03, s * 0.2, 0.22, -0.94, '#f00', 'tail');
  });
  return {
    wheels: { front: { r: 0.16, w: 0.14, x: 0.44, z: 0.62 }, rear: { r: 0.2, w: 0.2, x: 0.46, z: -0.6 }, rim: A, hub: '#ffffff' },
    antenna: [-0.2, 0.36, -0.72],
  };
}

function buildBuggy(b, C, A) {
  const nose = (z) => (z > 0.5 ? 1 - (z - 0.5) * 0.7 : 1);
  b.profile([[-0.85, 0.3], [0.7, 0.3], [1.02, 0.37], [1.02, 0.43], [0.45, 0.57], [-0.1, 0.61], [-0.85, 0.61]], 0.64, C, 'paint', { taper: nose });
  b.box(0.3, 0.012, 0.4, 0, 0.535, 0.68, A, 'paint', 0.245); // hood stripe
  b.box(0.46, 0.02, 0.56, 0, 0.615, -0.3, DARK); // cockpit opening
  b.mirror((s) => {
    b.box(0.17, 0.26, 0.07, s * 0.12, 0.74, -0.52, A); // seat backs
    // roll cage
    b.tube(s * 0.28, 0.58, 0.22, s * 0.25, 0.93, -0.02, 0.03, DARK);
    b.tube(s * 0.25, 0.93, -0.02, s * 0.25, 0.93, -0.58, 0.03, DARK);
    b.tube(s * 0.25, 0.93, -0.58, s * 0.28, 0.6, -0.86, 0.03, DARK);
    // suspension arms + chrome shocks
    b.tube(s * 0.2, 0.36, 0.68, s * 0.44, 0.26, 0.68, 0.025, GREY);
    b.tube(s * 0.25, 0.36, -0.62, s * 0.44, 0.29, -0.62, 0.03, GREY);
    b.tube(s * 0.3, 0.62, -0.66, s * 0.4, 0.34, -0.62, 0.035, CHROME);
    b.tube(s * 0.2, 0.52, 0.6, s * 0.38, 0.3, 0.68, 0.03, CHROME);
    // roof lights
    b.cyl(0.055, 0.05, s * 0.13, 1.0, 0.0, 'z', '#fff', 'head', 8);
    b.box(0.1, 0.06, 0.03, s * 0.24, 0.5, -0.86, '#f00', 'tail');
    // wing end plates
    b.box(0.025, 0.14, 0.3, s * 0.42, 0.97, -0.84, DARK);
  });
  b.tube(-0.25, 0.93, -0.02, 0.25, 0.93, -0.02, 0.03, DARK);
  b.tube(-0.25, 0.93, -0.58, 0.25, 0.93, -0.58, 0.03, DARK);
  b.box(0.52, 0.03, 0.5, 0, 0.955, -0.3, A); // roof panel
  b.box(0.84, 0.03, 0.26, 0, 1.0, -0.84, A, 'paint', -0.12); // wing
  b.box(0.34, 0.2, 0.22, 0, 0.5, -0.92, GREY); // rear motor
  b.cyl(0.05, 0.14, 0, 0.5, -1.05, 'z', CHROME, 'paint', 8);
  // nudge bar
  b.cyl(0.035, 0.6, 0, 0.36, 1.07, 'x', CHROME, 'paint', 6);
  b.mirror((s) => b.tube(s * 0.2, 0.36, 1.07, s * 0.16, 0.36, 0.9, 0.03, CHROME));
  return {
    wheels: { front: { r: 0.25, w: 0.2, x: 0.47, z: 0.68 }, rear: { r: 0.29, w: 0.26, x: 0.47, z: -0.62 }, rim: '#f2f2f2', hub: A, knobbly: true },
    antenna: [0.22, 0.6, -0.8],
  };
}

function buildVan(b, C, A) {
  b.profile([[-0.98, 0.2], [0.95, 0.2], [1.01, 0.28], [1.01, 0.56], [-0.98, 0.56]], 1.0, C, 'paint', { bevel: 0.04 });
  b.profile([[-0.98, 0.55], [1.01, 0.55], [0.84, 1.0], [0.72, 1.07], [-0.94, 1.07], [-0.98, 1.0]], 0.98, A, 'paint', { bevel: 0.05 });
  b.box(1.012, 0.05, 1.94, 0, 0.56, 0.01, DARK); // belt line
  // V-shaped two-tone nose
  b.profile([[1.0, 0.56], [1.0, 0.3], [1.02, 0.3], [1.02, 0.56]], 0.3, A, 'paint', { bevel: 0 });
  // glass
  b.box(0.82, 0.36, 0.02, 0, 0.79, 0.935, DARK, 'glass', -0.37);
  b.box(0.7, 0.26, 0.02, 0, 0.82, -0.975, DARK, 'glass', 0.04);
  b.mirror((s) => {
    b.box(0.02, 0.27, 0.42, s * 0.487, 0.8, 0.45, DARK, 'glass');
    b.box(0.02, 0.27, 0.5, s * 0.487, 0.8, -0.08, DARK, 'glass');
    b.box(0.02, 0.27, 0.42, s * 0.487, 0.8, -0.6, DARK, 'glass');
    b.cyl(0.08, 0.04, s * 0.34, 0.42, 1.01, 'z', '#fff', 'head', 10);
    b.cyl(0.1, 0.02, s * 0.34, 0.42, 1.0, 'z', CHROME, 'paint', 10);
    b.box(0.1, 0.16, 0.03, s * 0.4, 0.42, -0.985, '#f00', 'tail');
    // roof rack rails
    b.tube(s * 0.36, 1.13, 0.4, s * 0.36, 1.13, -0.8, 0.02, CHROME);
    b.tube(s * 0.36, 1.07, 0.4, s * 0.36, 1.13, 0.4, 0.02, CHROME);
    b.tube(s * 0.36, 1.07, -0.8, s * 0.36, 1.13, -0.8, 0.02, CHROME);
    // door mirrors
    b.box(0.1, 0.07, 0.04, s * 0.55, 0.66, 0.72, C);
  });
  b.box(0.36, 0.1, 0.03, 0, 0.42, 1.012, DARK); // grille
  b.box(1.06, 0.1, 0.1, 0, 0.25, 1.0, CHROME);
  b.box(1.06, 0.1, 0.1, 0, 0.25, -0.97, CHROME);
  // luggage: toy crate + rolled blanket
  b.box(0.44, 0.16, 0.4, -0.04, 1.22, -0.45, '#c98a4b');
  b.box(0.46, 0.03, 0.06, -0.04, 1.24, -0.45, DARK);
  b.cyl(0.07, 0.56, 0, 1.2, 0.05, 'x', C, 'paint', 8);
  return {
    wheels: { front: { r: 0.2, w: 0.16, x: 0.46, z: 0.62 }, rear: { r: 0.2, w: 0.16, x: 0.46, z: -0.62 }, rim: A, hub: CHROME },
    antenna: [0.4, 1.06, 0.55],
  };
}

function buildRally(b, C, A) {
  const nose = (z) => (z > 0.6 ? 1 - (z - 0.6) * 0.22 : 1);
  b.profile([[-0.95, 0.2], [0.92, 0.2], [1.01, 0.3], [0.99, 0.46], [0.4, 0.57], [-0.9, 0.59], [-0.98, 0.5]], 1.02, C, 'paint', { taper: nose, bevel: 0.04 });
  b.profile([[0.39, 0.56], [0.1, 0.87], [-0.62, 0.87], [-0.89, 0.58]], 0.86, DARK, 'glass', { bevel: 0.02 });
  b.profile([[0.15, 0.85], [0.1, 0.9], [-0.63, 0.9], [-0.69, 0.85]], 0.89, C, 'paint', { bevel: 0.02 });
  b.box(0.885, 0.32, 0.07, 0, 0.72, -0.22, C); // B-pillar hoop
  // roof scoop + spoiler
  b.profile([[0.1, 0.9], [-0.2, 0.9], [-0.2, 0.97], [0.04, 0.97]], 0.26, A, 'paint', { bevel: 0.015 });
  b.box(0.2, 0.04, 0.02, 0, 0.94, 0.085, DARK);
  b.box(0.94, 0.03, 0.2, 0, 0.96, -0.76, A, 'paint', -0.14);
  b.mirror((s) => {
    b.box(0.03, 0.12, 0.22, s * 0.46, 0.93, -0.76, C);
    b.tube(s * 0.3, 0.84, -0.7, s * 0.3, 0.95, -0.76, 0.02, DARK);
    // racing stripe along the side + number roundel
    b.box(0.02, 0.07, 1.5, s * 0.512, 0.37, -0.05, A);
    b.cyl(0.13, 0.02, s * 0.512, 0.46, -0.05, 'x', '#ffffff', 'paint', 12);
    // mud flaps
    b.box(0.2, 0.2, 0.02, s * 0.44, 0.2, 0.36, A);
    b.box(0.2, 0.2, 0.02, s * 0.44, 0.2, -0.88, A);
    // lamp pod lamps
    b.cyl(0.07, 0.05, s * 0.1, 0.62, 0.74, 'z', '#fff', 'head', 8);
    b.cyl(0.07, 0.05, s * 0.28, 0.61, 0.72, 'z', '#fff', 'head', 8);
    b.box(0.16, 0.08, 0.03, s * 0.36, 0.4, 0.985, '#fff', 'head');
    b.box(0.2, 0.07, 0.03, s * 0.34, 0.48, -0.965, '#f00', 'tail');
    b.box(0.1, 0.06, 0.04, s * 0.54, 0.62, 0.38, C); // mirrors
  });
  b.box(0.8, 0.12, 0.08, 0, 0.6, 0.67, DARK); // lamp pod backing
  b.box(0.7, 0.02, 0.5, 0, 0.535, 0.62, A, 'paint', 0.185); // bonnet panel
  b.box(1.0, 0.1, 0.08, 0, 0.25, 1.0, DARK);
  b.box(1.0, 0.1, 0.08, 0, 0.25, -0.96, DARK);
  b.cyl(0.04, 0.16, -0.3, 0.2, -1.0, 'z', CHROME, 'paint', 6);
  return {
    wheels: { front: { r: 0.23, w: 0.19, x: 0.46, z: 0.64 }, rear: { r: 0.23, w: 0.19, x: 0.46, z: -0.6 }, rim: '#ffffff', hub: A },
    antenna: [-0.3, 0.9, -0.5],
  };
}

function buildMonster(b, C, A) {
  // ladder chassis, axles, links
  b.box(0.46, 0.12, 1.5, 0, 0.52, 0, DARK);
  b.cyl(0.07, 0.9, 0, 0.42, 0.68, 'x', GREY, 'paint', 8);
  b.cyl(0.07, 0.9, 0, 0.42, -0.68, 'x', GREY, 'paint', 8);
  b.sphere(0.13, 0, 0.42, 0.68, GREY); b.sphere(0.13, 0, 0.42, -0.68, GREY);
  b.mirror((s) => {
    for (const z of [0.68, -0.68]) {
      const zi = z > 0 ? 0.22 : -0.22;
      b.tube(s * 0.2, 0.52, zi, s * 0.3, 0.42, z, 0.03, CHROME);
      b.tube(s * 0.22, 0.72, z * 0.82, s * 0.32, 0.44, z, 0.045, A); // big coloured shocks
    }
    // exhaust stacks
    b.cyl(0.045, 0.5, s * 0.44, 1.18, -0.42, 'y', CHROME, 'paint', 8);
    // side flash
    b.box(0.02, 0.09, 1.5, s * 0.502, 0.83, -0.1, A);
    b.box(0.16, 0.1, 0.03, s * 0.36, 0.84, 1.03, '#fff', 'head');
    b.box(0.12, 0.12, 0.03, s * 0.4, 0.84, -1.01, '#f00', 'tail');
    // roll bar
    b.tube(s * 0.36, 0.98, -0.5, s * 0.34, 1.36, -0.5, 0.035, CHROME);
    b.cyl(0.06, 0.05, s * 0.16, 1.43, -0.48, 'z', '#fff', 'head', 8);
    // bull bar uprights
    b.tube(s * 0.24, 0.7, 1.1, s * 0.24, 0.94, 1.1, 0.03, CHROME);
    b.tube(s * 0.24, 0.7, 1.1, s * 0.24, 0.7, 0.98, 0.03, CHROME);
  });
  b.tube(-0.34, 1.36, -0.5, 0.34, 1.36, -0.5, 0.035, CHROME);
  b.tube(-0.3, 0.94, 1.1, 0.3, 0.94, 1.1, 0.03, CHROME);
  b.tube(-0.3, 0.8, 1.1, 0.3, 0.8, 1.1, 0.03, CHROME);
  // pickup body
  b.profile([[-1.0, 0.66], [0.95, 0.66], [1.02, 0.74], [1.02, 0.93], [0.3, 0.99], [-1.0, 0.99]], 1.0, C, 'paint', { bevel: 0.04 });
  b.profile([[0.3, 0.98], [0.1, 1.29], [-0.3, 1.29], [-0.36, 0.98]], 0.86, DARK, 'glass', { bevel: 0.02 });
  b.profile([[0.15, 1.27], [0.1, 1.32], [-0.3, 1.32], [-0.34, 1.27]], 0.9, C, 'paint', { bevel: 0.02 });
  b.box(0.88, 0.31, 0.06, 0, 1.13, -0.33, C);
  b.box(0.8, 0.02, 0.56, 0, 0.995, -0.69, DARK); // bed floor
  b.box(0.5, 0.1, 0.03, 0, 0.84, 1.03, DARK); // grille
  b.box(1.04, 0.1, 0.08, 0, 0.7, -1.0, CHROME);
  b.box(0.5, 0.02, 0.5, 0, 0.972, 0.64, A, 'paint', 0.083); // hood flash
  return {
    wheels: { front: { r: 0.42, w: 0.36, x: 0.52, z: 0.68 }, rear: { r: 0.42, w: 0.36, x: 0.52, z: -0.68 }, rim: A, hub: CHROME, knobbly: true },
    antenna: [-0.4, 0.99, -0.9],
  };
}

function buildMuscle(b, C, A) {
  const tp = (z) => (z > 0.75 ? 1 - (z - 0.75) * 0.25 : z < -0.8 ? 1 + (z + 0.8) * 0.3 : 1);
  b.profile([[-1.0, 0.24], [1.0, 0.24], [1.03, 0.3], [1.02, 0.5], [0.25, 0.56], [-0.55, 0.58], [-1.0, 0.6], [-1.03, 0.5]], 1.06, C, 'paint', { taper: tp, bevel: 0.04 });
  // fastback glasshouse + roof + louvres
  b.profile([[0.22, 0.56], [-0.04, 0.81], [-0.45, 0.81], [-0.9, 0.59]], 0.84, DARK, 'glass', { bevel: 0.02 });
  b.profile([[0.0, 0.79], [-0.05, 0.84], [-0.46, 0.84], [-0.53, 0.79]], 0.87, C, 'paint', { bevel: 0.02 });
  b.box(0.865, 0.26, 0.06, 0, 0.69, -0.3, C);
  for (let i = 0; i < 3; i++) b.box(0.7, 0.02, 0.07, 0, 0.765 - i * 0.055, -0.56 - i * 0.11, DARK, 'paint', 0.3);
  // twin bonnet stripes continuing over the roof and tail
  b.mirror((s) => {
    b.box(0.13, 0.012, 0.76, s * 0.11, 0.538, 0.63, A, 'paint', 0.078);
    b.box(0.13, 0.012, 0.44, s * 0.11, 0.846, -0.26, A);
    b.box(0.13, 0.012, 0.14, s * 0.11, 0.606, -0.95, A);
    // side pipes
    b.cyl(0.04, 0.8, s * 0.55, 0.23, -0.08, 'z', CHROME, 'paint', 8);
    // quad headlights, tail lamps
    b.cyl(0.055, 0.04, s * 0.42, 0.42, 1.01, 'z', '#fff', 'head', 8);
    b.cyl(0.055, 0.04, s * 0.29, 0.42, 1.015, 'z', '#fff', 'head', 8);
    b.box(0.3, 0.07, 0.03, s * 0.3, 0.5, -1.0, '#f00', 'tail');
    b.box(0.1, 0.05, 0.04, s * 0.55, 0.6, 0.2, C); // mirrors
  });
  // supercharger sticking through the bonnet
  b.box(0.26, 0.14, 0.32, 0, 0.61, 0.52, CHROME);
  b.box(0.3, 0.07, 0.36, 0, 0.71, 0.53, DARK);
  b.box(0.26, 0.05, 0.03, 0, 0.71, 0.715, A);
  b.box(0.5, 0.1, 0.03, 0, 0.42, 1.0, DARK); // grille
  b.box(1.04, 0.07, 0.08, 0, 0.29, 1.0, CHROME);
  b.box(1.02, 0.07, 0.08, 0, 0.3, -1.0, CHROME);
  // ducktail
  b.profile([[-1.03, 0.58], [-0.84, 0.6], [-1.05, 0.69]], 1.0, C, 'paint', { bevel: 0.015 });
  return {
    wheels: { front: { r: 0.22, w: 0.18, x: 0.47, z: 0.66 }, rear: { r: 0.26, w: 0.26, x: 0.45, z: -0.6 }, rim: CHROME, hub: DARK },
    antenna: [0.38, 0.59, -0.86],
  };
}

function buildFormula(b, C, A) {
  const nose = (z) => (z > 0.25 ? Math.max(0.3, 1 - (z - 0.25) * 0.82) : 1);
  b.box(0.86, 0.03, 1.3, 0, 0.09, -0.15, DARK); // floor plank
  b.profile([[-0.9, 0.11], [1.06, 0.11], [1.16, 0.15], [1.16, 0.2], [0.3, 0.36], [0.05, 0.4], [-0.2, 0.4], [-0.9, 0.3]], 0.4, C, 'paint', { taper: nose });
  b.mirror((s) => {
    // side pods with dark intakes
    b.profile([[-0.78, 0.11], [0.3, 0.11], [0.36, 0.3], [-0.3, 0.33], [-0.78, 0.22]], 0.25, C, 'paint', { x: s * 0.31 });
    b.box(0.19, 0.13, 0.03, s * 0.31, 0.22, 0.345, DARK, 'paint', -0.3);
    b.box(0.255, 0.04, 0.6, s * 0.31, 0.2, -0.2, A);
    // wings end plates
    b.box(0.025, 0.14, 0.3, s * 0.56, 0.14, 1.06, A);
    b.box(0.03, 0.36, 0.34, s * 0.4, 0.5, -0.94, A);
    // wishbones
    b.tube(s * 0.1, 0.27, 0.8, s * 0.42, 0.25, 0.72, 0.016, DARK, 'paint', 5);
    b.tube(s * 0.14, 0.24, 0.5, s * 0.42, 0.2, 0.72, 0.016, DARK, 'paint', 5);
    b.tube(s * 0.1, 0.18, 0.82, s * 0.42, 0.18, 0.72, 0.016, DARK, 'paint', 5);
    b.tube(s * 0.18, 0.28, -0.62, s * 0.4, 0.26, -0.66, 0.02, DARK, 'paint', 5);
    b.tube(s * 0.18, 0.2, -0.86, s * 0.4, 0.22, -0.66, 0.02, DARK, 'paint', 5);
    b.box(0.06, 0.03, 0.02, s * 0.07, 0.19, 1.165, '#fff', 'head');
  });
  // engine cover / airbox fin
  b.profile([[-0.14, 0.4], [-0.28, 0.6], [-0.4, 0.6], [-0.96, 0.3], [-0.2, 0.3]], 0.2, A, 'paint', { taper: (z) => (z < -0.4 ? Math.max(0.35, 1 + (z + 0.4) * 1.2) : 1) });
  b.box(0.14, 0.09, 0.02, 0, 0.53, -0.2, DARK, 'paint', -0.6);
  // cockpit + driver helmet
  b.box(0.24, 0.02, 0.3, 0, 0.405, -0.02, DARK);
  b.sphere(0.1, 0, 0.47, -0.04, A);
  b.box(0.15, 0.05, 0.05, 0, 0.475, 0.04, DARK, 'glass');
  // front wing (two elements) + rear wing
  b.box(1.1, 0.025, 0.24, 0, 0.09, 1.08, A);
  b.box(1.08, 0.02, 0.12, 0, 0.16, 1.0, C, 'paint', -0.25);
  b.box(0.8, 0.03, 0.24, 0, 0.66, -0.95, C, 'paint', -0.18);
  b.box(0.8, 0.025, 0.16, 0, 0.36, -0.98, DARK);
  b.tube(0, 0.3, -0.86, 0, 0.64, -0.94, 0.03, DARK, 'paint', 5);
  b.box(0.1, 0.06, 0.03, 0, 0.26, -1.0, '#f00', 'tail');
  return {
    wheels: { front: { r: 0.22, w: 0.2, x: 0.5, z: 0.72 }, rear: { r: 0.25, w: 0.3, x: 0.47, z: -0.66 }, rim: DARK, hub: A },
    antenna: [0.0, 0.58, -0.36],
  };
}

function buildFuture(b, C, A) {
  const tp = (z) => (z > 0.3 ? Math.max(0.45, 1 - (z - 0.3) * 0.62) : z < -0.6 ? 1 + (z + 0.6) * 0.4 : 1);
  b.profile([[-1.0, 0.2], [0.6, 0.16], [1.09, 0.22], [1.09, 0.27], [0.4, 0.44], [-0.5, 0.53], [-1.0, 0.47]], 0.68, C, 'paint', { taper: tp, bevel: 0.04 });
  // bubble canopy
  b.sphere(0.3, 0, 0.47, -0.08, DARK, 'glass', 0.86, 0.72, 1.75, 12);
  b.mirror((s) => {
    // wheel pods joined by pontoons
    b.fender(0.31, 0.27, s * 0.455, 0.22, 0.64, C);
    b.fender(0.31, 0.27, s * 0.455, 0.22, -0.64, C);
    b.profile([[-0.5, 0.16], [0.5, 0.16], [0.5, 0.36], [-0.5, 0.4]], 0.24, C, 'paint', { x: s * 0.455, bevel: 0.03 });
    // glow strips + pod accents
    b.box(0.02, 0.035, 1.0, s * 0.58, 0.28, 0, A, 'glow');
    b.box(0.2, 0.02, 0.05, s * 0.455, 0.535, 0.64, A, 'glow');
    b.box(0.2, 0.02, 0.05, s * 0.455, 0.535, -0.64, A, 'glow');
    // tail fins
    b.profile([[-0.55, 0.5], [-1.0, 0.86], [-1.07, 0.86], [-1.0, 0.44]], 0.04, C, 'paint', { x: s * 0.27, bevel: 0.01 });
    b.box(0.045, 0.03, 0.08, s * 0.27, 0.87, -1.03, '#f00', 'tail');
    b.box(0.13, 0.025, 0.02, s * 0.14, 0.25, 1.085, '#fff', 'head');
    // intakes
    b.box(0.12, 0.07, 0.03, s * 0.2, 0.4, 0.42, DARK, 'paint', -0.4);
  });
  // spine + thruster
  b.box(0.05, 0.02, 0.9, 0, 0.5, -0.2, A, 'glow', -0.085);
  b.cyl(0.15, 0.14, 0, 0.34, -1.0, 'z', DARK, 'paint', 12);
  b.torus(0.13, 0.03, 0, 0.34, -1.07, A, 'glow');
  b.cyl(0.09, 0.02, 0, 0.34, -1.075, 'z', A, 'glow', 10);
  return {
    wheels: { front: { r: 0.23, w: 0.2, x: 0.455, z: 0.64 }, rear: { r: 0.23, w: 0.2, x: 0.455, z: -0.64 }, rim: DARK, hub: A },
    antenna: [-0.2, 0.5, -0.7],
    glow: A,
  };
}

const BUILDERS = {
  kart: buildKart, buggy: buildBuggy, van: buildVan, rally: buildRally,
  monster: buildMonster, muscle: buildMuscle, formula: buildFormula, future: buildFuture,
};

// ---------------------------------------------------------------------------------------------------
export function createCarMesh(carId, colorOverride) {
  const def = getCarDef(carId);
  const M = mats();
  const C = colorOverride || def.color;
  const A = def.accent;
  const b = new Builder();
  const info = (BUILDERS[def.type] || buildRally)(b, C, A);

  const group = new THREE.Group();
  group.name = 'car-' + def.id;
  const body = new THREE.Group();
  body.name = 'body';
  group.add(body);

  const addMesh = (bucket, material) => {
    const g = b.build(bucket);
    if (!g) return;
    const mesh = new THREE.Mesh(g, material);
    mesh.castShadow = true;
    mesh.name = bucket;
    body.add(mesh);
  };
  addMesh('paint', M.paint);
  addMesh('glass', M.glass);
  addMesh('head', M.head);
  addMesh('tail', M.tail);
  if (info.glow) addMesh('glow', glowMat(info.glow));

  // RC antenna with a little ball, pivoting at its base so it can whip around
  const ab = new Builder();
  ab.cyl(0.012, 0.56, 0, 0.28, 0, 'y', DARK, 'paint', 5);
  ab.cyl(0.03, 0.04, 0, 0.02, 0, 'y', GREY, 'paint', 6);
  ab.sphere(0.05, 0, 0.58, 0, A === '#ffffff' || A === '#fff3d6' ? '#ff5a36' : A, 'paint', 1, 1, 1, 8);
  const antenna = new THREE.Mesh(ab.build('paint'), M.paint);
  antenna.castShadow = true;
  antenna.name = 'antenna';
  antenna.position.set(info.antenna[0], info.antenna[1], info.antenna[2]);
  antenna.rotation.x = -0.12;
  body.add(antenna);

  addWheels(group, info.wheels);

  group.userData.carId = def.id;
  group.userData.body = body;
  group.userData.antenna = antenna;
  group.userData.color = C;
  /** frees the per-car geometry (wheel geometry + materials are shared and kept) */
  group.userData.dispose = () => {
    body.traverse((o) => { if (o.isMesh) o.geometry.dispose(); });
  };
  return group;
}
