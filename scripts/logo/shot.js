// "Photo" of a car on a real track for logo / icon artwork: the game's own models, lights, shadows and post-processing,
// plus depth of field and tyre smoke. Query: track, t, lat, car, slide, steer, roll, hop, cam=side,up,front (car frame),
// look=side,up,front, fov, focus, blur, smoke, size.
import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { BokehPass } from 'three/addons/postprocessing/BokehPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { buildTrack } from '../../src/tracks/index.js';
import { Car } from '../../src/cars/index.js';

const q = new URLSearchParams(location.search);
const num = (k, d) => (q.has(k) ? +q.get(k) : d);
const vec = (k, d) => (q.get(k) || d).split(',').map(Number);
const size = num('size', 1024);

const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.setSize(size, size);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = num('exp', 1.1);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = num('env', 0.45);

const track = buildTrack(q.get('track') || 'garden');
scene.add(track.group);
scene.background = track.background;
scene.fog = track.fog;
track.update(0.016, num('time', 3));

const s = track.sample(num('t', 0.05));
const lat = num('lat', 0);
const pos = s.pos.clone().addScaledVector(s.right, lat);
const car = new Car(q.get('car') || 'mudmuffin');
const heading = Math.atan2(s.tangent.x, s.tangent.z) + num('slide', 0.45);
car.placeAt(pos, heading, null);
car.pos.y = s.pos.y + num('hop', 0);
car.steerAngle = num('steer', -0.9);
car._bodyRoll = num('roll', 0.12);
car._bodyPitch = num('pitch', 0.02);
car._pitch = num('nose', 0);
car._wheelSpin = 0.7; car._rearSpin = 2.1;
car._antX = 0.35; car._antZ = -0.4;
car._syncMesh();
car.mesh.traverse((o) => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
scene.add(car.mesh);
if (track.sun) { track.sun.castShadow = true; track.sun.shadow.mapSize.set(4096, 4096); if (track.followShadow) track.followShadow(pos, 14); }

// car frame: f = forward, r = right of the car
const f = new THREE.Vector3(Math.sin(heading), 0, Math.cos(heading));
const r = new THREE.Vector3(f.z, 0, -f.x);
const at = ([side, up, front]) => car.pos.clone().addScaledVector(r, side).addScaledVector(f, front).add(new THREE.Vector3(0, up, 0));

// tyre smoke: soft billboards trailing behind the rear wheels, opposite to the direction of travel
if (num('smoke', 1) > 0) {
  const cv = document.createElement('canvas'); cv.width = cv.height = 128;
  const g = cv.getContext('2d');
  const gr = g.createRadialGradient(64, 64, 4, 64, 64, 62);
  gr.addColorStop(0, 'rgba(255,255,255,.95)'); gr.addColorStop(0.5, 'rgba(255,255,255,.45)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(cv);
  const tint = new THREE.Color(q.get('smokeColor') ? '#' + q.get('smokeColor') : '#efe9df');
  const travel = new THREE.Vector3(s.tangent.x, 0, s.tangent.z).normalize();
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  const n = Math.round(46 * num('smoke', 1));
  for (let i = 0; i < n; i++) {
    const k = i / n;
    const m = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, color: tint, transparent: true, opacity: 0.5 * (1 - k) + 0.06, depthWrite: false, fog: false }));
    const wheel = at([(i % 2 ? 0.5 : -0.5), 0.12, -0.75]);
    m.position.copy(wheel).addScaledVector(travel, -(0.2 + k * 4.2)).add(new THREE.Vector3((rnd() - 0.5) * (0.3 + k), 0.1 + k * 0.9 * rnd(), (rnd() - 0.5) * (0.3 + k)));
    m.scale.setScalar(0.45 + k * 1.9);
    scene.add(m);
  }
}

const cam = new THREE.PerspectiveCamera(num('fov', 30), 1, 0.1, 1500);
cam.position.copy(at(vec('cam', '2.4,0.75,3.6')));
cam.lookAt(at(vec('look', '0,0.4,0')));
cam.rotation.z += num('dutch', -0.08);
cam.updateMatrixWorld();

const target = new THREE.WebGLRenderTarget(size, size, { type: THREE.HalfFloatType, samples: 4 });
const composer = new EffectComposer(renderer, target);
composer.addPass(new RenderPass(scene, cam));
if (num('blur', 1) > 0) {
  // toy-photography depth of field: the car is sharp, the scenery melts away
  composer.addPass(new BokehPass(scene, cam, { focus: num('focus', cam.position.distanceTo(car.pos)), aperture: num('aperture', 0.0009) * num('blur', 1), maxblur: num('maxblur', 0.012) }));
}
composer.addPass(new UnrealBloomPass(new THREE.Vector2(size / 2, size / 2), num('bloom', 0.3), 0.55, 0.9));
composer.addPass(new OutputPass());
composer.setSize(size, size);
composer.render(0.016);
composer.render(0.016);
window.__ready = true;
