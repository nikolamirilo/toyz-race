import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// Subtle vignette + saturation lift, applied in linear space before tone mapping.
const GradeShader = {
  uniforms: { tDiffuse: { value: null }, vignette: { value: 0.32 }, saturation: { value: 1.1 } },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse; uniform float vignette; uniform float saturation;
    varying vec2 vUv;
    void main() {
      vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      c.rgb = mix(vec3(l), c.rgb, saturation);
      float d = distance(vUv, vec2(0.5));
      c.rgb *= 1.0 - vignette * smoothstep(0.38, 0.85, d);
      gl_FragColor = c;
    }`,
};

export function createGraphics(renderer, scene, camera) {
  // Soft image-based lighting so paint, glass and glossy floors pick up reflections.
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new RoomEnvironment();
  scene.environment = pmrem.fromScene(envScene, 0.04).texture;
  scene.environmentIntensity = 0.3;
  pmrem.dispose();

  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  let composer = null;
  let bloom = null;
  let quality = 'medium';
  let width = 1, height = 1;

  function build() {
    if (composer) { composer.dispose(); composer = null; }
    if (quality === 'low') return;
    const target = new THREE.WebGLRenderTarget(width, height, {
      type: THREE.HalfFloatType,
      samples: quality === 'high' ? 4 : 2,
    });
    composer = new EffectComposer(renderer, target);
    composer.addPass(new RenderPass(scene, camera));
    bloom = new UnrealBloomPass(new THREE.Vector2(width / 2, height / 2), 0.32, 0.55, 0.9);
    composer.addPass(bloom);
    composer.addPass(new ShaderPass(GradeShader));
    composer.addPass(new OutputPass());
    composer.setPixelRatio(renderer.getPixelRatio());
    composer.setSize(width, height);
  }

  return {
    setQuality(q) {
      const next = q === 'low' || q === 'high' ? q : 'medium';
      if (next === quality && (composer || next === 'low')) return;
      quality = next;
      build();
    },
    resize(w, h) {
      width = Math.max(1, w); height = Math.max(1, h);
      if (composer) {
        composer.setPixelRatio(renderer.getPixelRatio());
        composer.setSize(width, height);
      } else if (quality !== 'low') build();
    },
    /** Sharper ground textures at grazing angles. */
    prepareTrack(track) {
      const aniso = Math.min(8, maxAniso);
      track.group.traverse((o) => {
        if (!o.material) return;
        for (const m of [].concat(o.material)) {
          for (const key of ['map', 'emissiveMap', 'roughnessMap', 'normalMap']) {
            const tex = m[key];
            if (tex && tex.anisotropy !== aniso) { tex.anisotropy = aniso; tex.needsUpdate = true; }
          }
        }
      });
    },
    render(dt) {
      if (composer) composer.render(dt);
      else renderer.render(scene, camera);
    },
  };
}
