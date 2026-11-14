// Pooled particle system: ONE THREE.Points per instance, fixed-size typed arrays,
// swap-remove compaction, zero per-frame allocation.
import * as THREE from 'three';

const VERT = /* glsl */ `
attribute vec4 aColor;
attribute float aSize;
uniform float uPx;
varying vec4 vColor;
void main() {
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uPx * projectionMatrix[1][1] / max(0.1, -mv.z);
}`;

const FRAG = /* glsl */ `
varying vec4 vColor;
void main() {
  vec2 d = gl_PointCoord - 0.5;
  float r = length(d) * 2.0;
  float a = smoothstep(1.0, 0.15, r) * vColor.a;
  if (a < 0.004) discard;
  gl_FragColor = vec4(vColor.rgb, a);
}`;

const _size = new THREE.Vector2();

export class Particles {
  constructor(capacity = 1024, additive = true) {
    this.capacity = capacity;
    this.count = 0;
    this._pos = new Float32Array(capacity * 3);
    this._col = new Float32Array(capacity * 4);
    this._siz = new Float32Array(capacity);
    // cpu-only: vx vy vz life maxLife s0 s1 a0 gravity drag
    this._sim = new Float32Array(capacity * 10);

    const g = (this.geometry = new THREE.BufferGeometry());
    this._aPos = new THREE.BufferAttribute(this._pos, 3);
    this._aCol = new THREE.BufferAttribute(this._col, 4);
    this._aSiz = new THREE.BufferAttribute(this._siz, 1);
    this._aPos.setUsage(THREE.DynamicDrawUsage);
    this._aCol.setUsage(THREE.DynamicDrawUsage);
    this._aSiz.setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this._aPos);
    g.setAttribute('aColor', this._aCol);
    g.setAttribute('aSize', this._aSiz);
    g.setDrawRange(0, 0);

    this.material = new THREE.ShaderMaterial({
      uniforms: { uPx: { value: 360 } },
      vertexShader: VERT,
      fragmentShader: FRAG,
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    this.points = new THREE.Points(g, this.material);
    this.points.frustumCulled = false;
    this.points.renderOrder = additive ? 11 : 10;
    const uPx = this.material.uniforms.uPx;
    this.points.onBeforeRender = (renderer) => {
      renderer.getDrawingBufferSize(_size);
      uPx.value = _size.y * 0.5;
    };
  }

  /** life in s, sizes in world units (start → end), a0 = start alpha, gravity (units/s² downward), drag (1/s). */
  emit(x, y, z, vx, vy, vz, life, s0, s1, r, g, b, a0, gravity, drag) {
    if (this.count >= this.capacity) return;
    const i = this.count++;
    const p = i * 3, c = i * 4, s = i * 10;
    this._pos[p] = x; this._pos[p + 1] = y; this._pos[p + 2] = z;
    this._col[c] = r; this._col[c + 1] = g; this._col[c + 2] = b; this._col[c + 3] = a0;
    this._siz[i] = s0;
    const m = this._sim;
    m[s] = vx; m[s + 1] = vy; m[s + 2] = vz;
    m[s + 3] = life; m[s + 4] = life;
    m[s + 5] = s0; m[s + 6] = s1; m[s + 7] = a0;
    m[s + 8] = gravity || 0; m[s + 9] = drag || 0;
  }

  /** Radial burst helper. */
  burst(x, y, z, n, speed, life, s0, s1, r, g, b, a0, gravity, drag, up = 0.5, rnd = Math.random) {
    for (let k = 0; k < n; k++) {
      const a = rnd() * Math.PI * 2;
      const e = (rnd() - 0.5 + up) * 1.6;
      const sp = speed * (0.35 + rnd() * 0.65);
      const ce = Math.cos(Math.atan(e));
      this.emit(
        x, y, z,
        Math.sin(a) * sp * ce, Math.sin(Math.atan(e)) * sp, Math.cos(a) * sp * ce,
        life * (0.6 + rnd() * 0.4), s0, s1, r, g, b, a0, gravity, drag
      );
    }
  }

  update(dt) {
    const pos = this._pos, col = this._col, siz = this._siz, m = this._sim;
    let n = this.count;
    for (let i = 0; i < n; ) {
      const s = i * 10;
      const life = m[s + 3] - dt;
      if (life <= 0) {
        // swap-remove with last
        n--;
        if (i !== n) {
          const p = i * 3, c = i * 4, lp = n * 3, lc = n * 4, ls = n * 10;
          pos[p] = pos[lp]; pos[p + 1] = pos[lp + 1]; pos[p + 2] = pos[lp + 2];
          col[c] = col[lc]; col[c + 1] = col[lc + 1]; col[c + 2] = col[lc + 2]; col[c + 3] = col[lc + 3];
          siz[i] = siz[n];
          for (let k = 0; k < 10; k++) m[s + k] = m[ls + k];
        }
        continue;
      }
      m[s + 3] = life;
      const p = i * 3;
      const drag = m[s + 9];
      if (drag > 0) {
        const f = Math.max(0, 1 - drag * dt);
        m[s] *= f; m[s + 1] *= f; m[s + 2] *= f;
      }
      m[s + 1] -= m[s + 8] * dt;
      pos[p] += m[s] * dt; pos[p + 1] += m[s + 1] * dt; pos[p + 2] += m[s + 2] * dt;
      const k = life / m[s + 4]; // 1 → 0
      siz[i] = m[s + 6] + (m[s + 5] - m[s + 6]) * k;
      col[i * 4 + 3] = m[s + 7] * (k < 0.6 ? k / 0.6 : 1);
      i++;
    }
    this.count = n;
    this.geometry.setDrawRange(0, n);
    this._aPos.needsUpdate = true;
    this._aCol.needsUpdate = true;
    this._aSiz.needsUpdate = true;
  }

  dispose() {
    this.geometry.dispose();
    this.material.dispose();
    this.points.onBeforeRender = () => {};
  }
}

/** Canvas texture helper; returns null when there is no DOM (node tests). */
export function canvasTexture(size, draw) {
  if (typeof document === 'undefined') return null;
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const ctx = c.getContext('2d');
  if (!ctx) return null;
  draw(ctx, size);
  const tex = new THREE.CanvasTexture(c);
  if ('colorSpace' in tex) tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  return tex;
}
