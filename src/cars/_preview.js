// Dev-only visual check of the car meshes (not imported by the game). Bundled to an IIFE for a static page.
import * as THREE from 'three';
import { CARS, Car } from './index.js';

const q = new URLSearchParams(location.search);
const only = q.get('car');
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.style.margin = '0';
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color('#9fc4e8');
scene.add(new THREE.HemisphereLight(0xffffff, 0x8a7a60, 1.1));
const sun = new THREE.DirectionalLight(0xffffff, 2.2);
sun.position.set(6, 12, 8); sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -9, right: 9, top: 9, bottom: -9 });
scene.add(sun);
const ground = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ color: '#d9c9a8' }));
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);

const list = only ? CARS.filter((c) => c.id === only) : CARS;
const cars = list.map((d, i) => {
  const car = new Car(d.id);
  const x = only ? 0 : ((i % 4) - 1.5) * 3.2, z = only ? 0 : (i < 4 ? 1.9 : -1.9);
  car.placeAt(new THREE.Vector3(x, 0, z), +(q.get('h') || 0.6), null);
  car.steerAngle = +(q.get('steer') || 0.6);
  car.update(0, null);
  scene.add(car.mesh);
  return car;
});
const cam = new THREE.PerspectiveCamera(only ? 30 : 34, innerWidth / innerHeight, 0.1, 100);
const view = q.get('view') || 'front';
if (only) cam.position.set(view === 'rear' ? -3.4 : 3.4, 2.2, view === 'rear' ? -4 : 4.2), cam.lookAt(0, 0.45, 0);
else if (view === 'top') cam.position.set(0, 17, 0.01), cam.lookAt(0, 0, 0);
else cam.position.set(view === 'rear' ? -5 : 5, 7.5, view === 'rear' ? -11.5 : 11.5), cam.lookAt(0, 0.2, 0);
renderer.render(scene, cam);
window.__info = { calls: renderer.info.render.calls, tris: renderer.info.render.triangles };
document.title = 'calls ' + renderer.info.render.calls;
