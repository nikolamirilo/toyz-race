# Toyz Race — module contract

Original 3D toy RC-car arcade racer for the browser. Vite + three.js + React (ES modules, plain JS / JSX, no
TypeScript; React only in the UI layer, src/ui/ and src/pwa/). Installable PWA that plays fully offline except for
multiplayer (see "PWA" below). Everything is procedural: NO external assets (no image/model/audio files,
no network fetches). Textures come from canvas, sounds from WebAudio synthesis.

All names, cars, tracks and art are ORIGINAL. Do not use names, car names, track names, logos or designs
from any existing commercial game.

## Conventions

- Y is up. Units: 1 unit ≈ 1 "toy metre". A car is ~2.0 long, ~1.1 wide, ~0.7 tall. The world around it is
  giant (furniture, garden plants, shelves are huge) — the cars are toys.
- Heading `h` (radians): forward vector = `(sin h, 0, cos h)`. `h = atan2(tangent.x, tangent.z)`.
- Top speeds are roughly 28–42 units/s. Track half-width 6–9 units. Lap length 450–900 units.
- Racing direction is increasing `t` (track parameter in [0,1), wraps). Start/finish line is at t = 0.
- Physics is "2.5D arcade": cars move in XZ, ground height comes from the track, walls are the track edges
  (lateral clamp), plus circular obstacles. No physics engine.
- Each module owns ONLY its own directory. Never edit files outside it. `src/main.js`, `src/core/*`,
  `index.html`, `package.json` are owned by the integrator.
- Do NOT start a dev server (port 5173 is reserved). Verify your code with `node` scripts where possible
  (three.js math/geometry works in node; guard any `document`/canvas use so modules can be imported in node,
  e.g. `typeof document !== 'undefined'`), and with `npx vite build` only if you stub nothing outside your dir.
- Performance target: 60 fps on a MacBook with 8 cars. Merge/instance static geometry where sensible,
  keep draw calls of a track under ~300, shadows from ONE directional light at most (2048 map).

## src/tracks/  (owner: tracks agent)

`src/tracks/index.js` exports:

```js
export const TRACKS; // [{ id, name, description, difficulty: 1..4, defaultLaps, lengthLabel }]  — 4 tracks
export function buildTrack(id); // -> Track
```

Track object:

```js
{
  id, name,
  group,            // THREE.Group: road, walls/kerbs, scenery AND lights (ambient/hemisphere + one shadow-casting DirectionalLight)
  background,       // THREE.Color or THREE.Texture for scene.background
  fog,              // THREE.Fog | null
  length,           // centerline length in units
  sample(t),        // -> { pos: Vector3 (on road surface), tangent: Vector3 (unit), right: Vector3 (unit, horizontal), halfWidth }
  project(pos, hintT), // -> { t, lateral, y, halfWidth }  nearest centerline point. lateral is signed along `right`.
                       //    y = road surface height there. hintT (optional) = previous t for a fast local search;
                       //    without hintT do a global search. Must be fast (called ~10x per frame) and allocation-free-ish.
  startGrid,        // 8 x { pos: Vector3, heading: number } — 2-wide staggered grid BEHIND the line (t slightly < 1), slot 0 = pole
  pickupSpots,      // Vector3[] (12–24) — rows of 2–3 across the road at several places, y = road surface
  obstacles,        // [{ x, z, radius }] static circular colliders standing ON the drivable area (few; keep it fair)
  boostPads,        // [{ x, z, radius, heading }] (2–4) glowing arrows on the road
  minimap,          // [[x, z], ...] ~120 centerline points for the HUD minimap
  update(dt, time), // animate scenery (optional effects)
  dispose(),
}
```

The road must be visibly bounded (walls, kerbs, giant objects) at `±halfWidth`; cars cannot leave it.
Elevation changes (ramps, hills, small jumps via crests) are welcome: `y` just varies smoothly; keep slopes < 25°.
The centerline must not self-intersect in XZ unless the crossing is separated by > 6 units in height… simpler: no crossings.

## src/cars/  (owner: cars agent)

`src/cars/index.js` exports:

```js
export const CARS; // 8 x { id, name, tagline, class: 'Rookie'|'Amateur'|'Pro', color: '#hex',
                   //       stats: { speed, accel, grip, weight } each 1..10,   // for UI bars
                   //       topSpeed, acceleration, gripFactor, mass, turnRate } // physics numbers
export function createCarMesh(carId, colorOverride); // -> THREE.Group, origin at ground centre, facing +Z.
                   //    group.userData.wheels = [fl, fr, rl, rr] meshes (spin on X; front ones steer on Y via parent pivot)
export class Car;
export class AIDriver;
```

Car:

```js
const car = new Car(carId, { name, isPlayer, color });
car.def; car.name; car.isPlayer;
car.mesh;                 // THREE.Group (add to scene yourself is NOT done by Car; the Race adds it)
car.pos;                  // Vector3 (ground contact centre)
car.heading;              // radians
car.vel;                  // Vector3 world velocity
car.speed;                // signed forward speed (units/s)
car.radius;               // collision radius (~1.0)
car.onGround;             // bool
car.trackT;               // last projected t in [0,1)
car.lateral;              // last lateral offset
car.controls = { throttle: 0, steer: 0, handbrake: false }; // throttle -1..1 (negative = brake/reverse), steer -1..1 (+ = left… see below)
car.boostTime;            // seconds of turbo remaining (settable); while > 0 topSpeed/accel are raised
car.spinTime;             // seconds of spin-out remaining (settable); while > 0 car ignores controls and spins
car.frozen;               // bool; when true update() only syncs the mesh (used during countdown)
car.placeAt(pos, heading, track);   // teleport + zero velocity
car.applyImpulse(vec3);             // add to velocity (weapons, collisions)
car.launch(vy);                     // pop into the air
car.update(dt, track);              // integrate physics, wall + obstacle + boost-pad handling, sync mesh, wheel spin, body roll/pitch
car.wallHit;              // number: impact strength of a wall/obstacle hit this frame (0 if none) — for audio/sparks
car.drifting;             // bool this frame — for tyre squeal/smoke
```

Steering sign: `steer = +1` turns the car LEFT (heading increases… heading increases counter-clockwise seen from above
with forward = (sin h, 0, cos h), i.e. positive steer increases `heading`). The integrator maps ArrowLeft/A to +1.

Handling goals: snappy toy-car arcade feel — quick acceleration, speed-sensitive steering, satisfying drift on handbrake
or at high steering angle, bouncy wall hits that keep you moving (never dead-stop; slide along walls), small air time
over crests, self-righting. A car that ends up facing backwards must be able to recover easily. Reverse works.

AIDriver:

```js
const ai = new AIDriver(car, { skill /* 0..1 */ });
ai.update(dt, track, allCars);  // writes car.controls. Follows the centerline with a look-ahead, picks a lane offset,
                                 // avoids obstacles and other cars, brakes for corners, recovers when stuck (reverse),
                                 // rubber-bands mildly toward the player.
ai.wantsToFire;                  // bool: set true when it would be a good moment to use a held item (race reads + clears it)
```

Car-vs-car collision is resolved by the Race (it calls `resolveCarCollisions(cars)` exported from `src/cars/index.js`):

```js
export function resolveCarCollisions(cars); // circle-vs-circle push apart + impulse exchange by mass; returns max impact strength
```

## src/race/  (owner: race agent)

`src/race/index.js` exports:

```js
export const ITEMS; // [{ id, name, icon /* emoji or short text */, description }] — 6 original toy weapons/power-ups
export class Race;
```

```js
const race = new Race({ scene, track, playerCarId, playerName, laps, opponents /* 0..7 */, difficulty /* 0 easy,1 normal,2 hard */, mode /* 'race' | 'timetrial' */ });
race.cars;           // Car[] (player first)
race.player;         // Car
race.state;          // 'countdown' | 'racing' | 'finished'
race.time;           // race clock (s), starts at GO
race.update(dt, playerControls /* {throttle, steer, handbrake, fire} */);
race.info(car);      // -> { lap (1-based, clamped to laps), laps, position (1-based), total, lapTime, bestLap, lastLap, item (ITEMS entry|null),
                     //      wrongWay, finished, finishTime, progress /* laps + t, monotonic */ }
race.standings();    // -> [{ car, name, carName, position, finished, finishTime, bestLap, isPlayer }] sorted by position
race.on(event, cb);  // events:
                     //  'countdown' (n: 3|2|1), 'go', 'lap' (car, lapNumber, lapTime, isBest), 'finalLap' (car),
                     //  'finish' (car, position), 'raceOver' (standings) — when player finished (AI get estimated times),
                     //  'pickup' (car, item), 'fire' (car, item), 'hit' (car, itemId), 'boost' (car),
                     //  'crash' (car, strength) — wall or car impact above a threshold
race.dispose();      // removes everything it added to the scene
```

The Race owns: creating Car + AIDriver instances (imports from `../cars/index.js`), grid placement from `track.startGrid`,
3-2-1-GO countdown (~3.2 s, cars frozen), lap counting with anti-cheat (must pass checkpoints / monotonic progress, handle
t wrap correctly, driving backwards over the line must not count), positions, wrong-way detection, finish handling
(player car goes on AI autopilot after finishing), pickups (spinning crates at `track.pickupSpots` that respawn after ~6 s,
give a random item, weighted by position), all item behaviour + their visuals/particles (projectiles, slicks, shock rings,
boost flames etc. — added to/removed from `scene` by the Race), boost pads feedback, car-vs-car collisions,
and lightweight particle effects (tyre smoke when `car.drifting`, sparks on `car.wallHit`).
Items must be fun but short (≤ 1.5 s loss of control). In 'timetrial' mode: no opponents, no pickups.

## src/ui/ and src/audio/  (owner: ui agent)

`src/ui/index.js` exports:

```js
export function createUI(root /* #ui-root element */, { tracks /* TRACKS */, cars /* CARS */, items /* ITEMS */, handlers });
// handlers: { onStart(config), onPreview({ screen, carId, trackId }), onResume(), onRestart(), onQuit(), onSettings(settings), onNextRace()?, onUiSound(name) }
// config: { mode: 'race'|'karting'|'timetrial'|'championship', trackId, carId, laps, opponents, difficulty, playerName }
```

returned `ui`:

```js
ui.showMenu(screen = 'title');     // full menu flow: title -> mode -> car select -> track select -> options; calls handlers.onStart(config)
ui.hideMenu();
ui.showHUD(); ui.hideHUD();
ui.updateHUD({ speed /* units/s */, topSpeed, lap, laps, position, total, time, lapTime, bestLap, lastLap, item /* ITEMS entry|null */,
               wrongWay, boost /* bool */, minimap: { points /* track.minimap */, cars: [{ x, z, isPlayer, color }] } });
ui.showCountdown(text /* '3','2','1','GO!' */);
ui.flashMessage(text, ms);         // centre banner e.g. 'FINAL LAP', 'NEW BEST LAP 0:42.31'
ui.showPause(); ui.hidePause();    // pause overlay with Resume / Restart / Quit to menu
ui.showResults({ standings, mode, trackName, newRecord, championship /* {round, rounds, table:[{name, points, isPlayer}], final} | null */ });
                                   // buttons: Next race (championship) / Race again / Menu  -> onNextRace / onRestart / onQuit
ui.hideResults();
ui.getSettings();                  // { masterVolume 0..1, musicVolume 0..1, sfxVolume 0..1, quality: 'low'|'medium'|'high', playerName, cameraShake: bool }
ui.records;                        // helper: { getBestLap(trackId), setBestLap(trackId, t), getBestRace(trackId, laps), setBestRace(...) } via localStorage
```

UI is React (src/ui/react/) over small external stores, so the `ui.*` API above stays imperative and synchronous;
styling is the injected `<style>` from src/ui/styles.js. The HUD and the touch controls render their markup with React
but write per-frame values straight to the DOM (src/ui/hud.js, src/ui/touch.js). `pointer-events: auto` only on
interactive panels. Full keyboard navigation in menus
(arrows / Enter / Esc) plus mouse. Menus are translucent so the 3D attract scene shows through (on car select the
integrator shows the selected car on a turntable on the right half of the screen; on track select a fly-over of the
selected track — the UI must leave that half reasonably clear and call `onPreview` whenever the highlighted car/track or
screen changes). Include a controls help screen (Arrows/WASD drive, Space handbrake, Shift/Ctrl/X fire item, C camera,
R reset to track, Esc/P pause, M mute). Look: bold, playful toy-box / RC hobby style, own logo wordmark "TOYZ RACE"
built in CSS. Must look good from 1100x650 up to 2560x1440.

`src/audio/index.js` exports:

```js
export function createAudio(); // ->
audio.unlock();                           // call on first user gesture (creates/resumes AudioContext)
audio.setVolumes({ master, music, sfx });
audio.setEngine({ rpm /* 0..1 */, throttle /* 0..1 */, active /* bool */ }); // continuous player engine whine (electric RC motor)
audio.setSkid(amount /* 0..1 */);         // continuous tyre squeal
audio.play(name, { volume } = {});        // one-shots: 'ui-move','ui-select','ui-back','count','go','pickup','boost','fire','explosion','zap',
                                          // 'splat','crash','bump','lap','final-lap','finish','win'
audio.startMusic(kind /* 'menu' | 'race' */); audio.stopMusic(); // simple generative chiptune/synth loop, different per kind
audio.setMuted(bool);
```

## src/main.js + src/core/* (owner: integrator)

Renderer, scene lifecycle, game state machine (menu / racing / paused / results), chase + alternative cameras,
keyboard input, attract mode, championship flow, wiring events to UI + audio.

## PWA (src/pwa/)

- `vite-plugin-pwa` (workbox `generateSW`) precaches every game file on the FIRST visit, before the app is even
  installed: from then on everything except multiplayer runs with no network. Multiplayer needs the relay server, so
  while `navigator.onLine` is false the menu greys it out and refuses to host / join.
- Updates (`registerType: 'prompt'`, src/pwa/register.js): while online the app checks for a new version at launch,
  every 30 min, when the connection returns and when the app comes back to the foreground. A new version downloads in
  the background and waits. It is switched to (one reload) only when that cannot interrupt a race: at launch before
  the player touches anything, while the app is in the background on the title / main menu, or when the player taps
  "Restart" on the update notice.
- Notices (src/pwa/PwaLayer.jsx, title / main menu only): Install button (Chromium prompt, iOS instructions),
  "Ready to play offline" once, "New version ready".
- `public/manifest.webmanifest`: fullscreen, landscape, icons incl. maskable, screenshots for the install dialog.
  The title screen shows the build version (`APP_VERSION` from src/flags.js).

## Karting mode

`config.mode === 'karting'` (main menu -> Karting -> track select; there is no car select). A race like Single Race, but
about driving the line rather than fighting the pack:

- **Narrow layout**: `buildTrack(id, { widthScale: 0.55, bare: true })` — same centreline and scenery, road at 55% width,
  no boost pads, obstacles or pickup crates (`KART_LAYOUT` in `src/main.js`). The track select flies over this layout.
- **One make**: everybody drives `KART` (`src/cars/defs.js`, not listed in `CARS`), told apart by paint:
  `new Race({ ..., playerCarId: KART.id, oneMake: KART.id, items: false })`.
- **The gas matters**: `KART.powerUndersteer` takes steering authority away at speed while the throttle is down
  (`powerSteerFactor()` in `src/cars/car.js`, the AI plans its corner speed with it), so a flat-out kart runs wide; easing
  off turns it in. `KART.wallScrub` makes a wall hit cost real speed.
- **Touch**: `ui.setManualGas(true)` — the auto accelerate option is ignored, the GAS pedal is always the player's.
- **Records** are stored apart from the normal layout, under `<trackId>@kart`.
