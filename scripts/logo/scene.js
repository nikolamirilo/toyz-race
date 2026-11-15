// Hero render of the blue rally car (Mud Muffin) for the logo / app icons: the real game model, mid-drift,
// on a transparent background. Opened by scripts/generate-icons.mjs; ?size=<px> sets the square canvas size.
import * as THREE from 'three';
import { Car } from '../../src/cars/index.js';

const q = new URLSearchParams(location.search);
const num = (k, d) => (q.has(k) ? +q.get(k) : d);
const size = num('size', 1024);

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.setSize(size, size);
renderer.setClearColor(0x000000, 0);
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.15;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.add(new THREE.HemisphereLight(0xdfeeff, 0x4a3a66, 1.25));
const key = new THREE.DirectionalLight(0xfff2d8, 2.6);
key.position.set(4, 7, 6);
scene.add(key);
const rim = new THREE.DirectionalLight(0xffa640, 1.6); // warm kick from behind, matches the orange disc of the icon
rim.position.set(-6, 3, -5);
scene.add(rim);

const car = new Car(q.get('car') || 'mudmuffin');
car.placeAt(new THREE.Vector3(0, 0, 0), num('h', 0.62), null);
car.steerAngle = num('steer', -0.95);   // opposite lock
car._bodyRoll = num('roll', -0.15);     // leaning out of the slide
car._bodyPitch = num('pitch', 0.03);
car._wheelSpin = 0.7; car._rearSpin = 2.1;
car._antX = 0.35; car._antZ = -0.45;    // antenna whipping back
car._syncMesh();
car.mesh.rotation.z = num('tilt', 0);
scene.add(car.mesh);

const cam = new THREE.PerspectiveCamera(num('fov', 26), 1, 0.1, 100);
cam.position.set(num('cx', 3.1), num('cy', 1.25), num('cz', 4.6));
cam.lookAt(num('lx', 0.05), num('ly', 0.42), 0);
cam.rotation.z += num('dutch', -0.09);
renderer.render(scene, cam);
window.__ready = true;
