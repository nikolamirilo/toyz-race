import * as THREE from 'three';
import { TRACKS, buildTrack } from './tracks/index.js';
import { CARS, createCarMesh } from './cars/index.js';
import { ITEMS, Race } from './race/index.js';
import { createUI } from './ui/index.js';
import { createAudio } from './audio/index.js';
import { createInput } from './core/input.js';
import { GameCamera } from './core/camera.js';
import { createGraphics } from './core/graphics.js';
import { createNet } from './net/index.js';
import { MULTIPLAYER } from './flags.js';
import { createNameTags } from './core/nametags.js';
import { initStage } from './core/stage.js';
import { initPWA } from './pwa/register.js';

const CHAMP_POINTS = [10, 8, 6, 5, 4, 3, 2, 1];
const MAX_STEP = 1 / 60;

const stage = initStage();
initPWA(); // offline cache + background updates; the notices are part of the UI (src/pwa/PwaLayer.jsx)

// ---------------------------------------------------------------- renderer
const canvas = document.getElementById('game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 1500);
const gameCam = new GameCamera(camera);
const gfx = createGraphics(renderer, scene, camera);
const net = MULTIPLAYER ? createNet() : null;
const nameTags = createNameTags(scene);
const mp = { active: false, settings: { trackId: TRACKS[0].id, laps: 3, difficulty: 1, bots: 7 }, peerIds: [] };

const input = createInput();
const audio = createAudio();
const controls = { throttle: 0, steer: 0, handbrake: false, fire: false };

// ---------------------------------------------------------------- state
const game = {
  state: 'menu', // menu | racing | paused | results
  track: null,
  race: null,
  config: null,
  championship: null, // { round, order: [trackId], points: Map(name -> {points,isPlayer}) }
  preview: { screen: 'title', carId: CARS[0].id, trackId: TRACKS[0].id },
  previewCar: null,
  previewCarId: null,
  flyT: 0,
  muted: false,
  lastResume: 0,
  pendingTrackTimer: 0,
  sunOffset: new THREE.Vector3(),
};

function applyQuality(q) {
  const dpr = window.devicePixelRatio || 1;
  // Phones get a lighter pipeline at the same setting: fewer pixels and no post-processing below "high".
  const cap = stage.isTouch ? (q === 'low' ? 1 : q === 'high' ? 1.75 : 1.35) : (q === 'low' ? 1 : q === 'high' ? 2 : 1.5);
  renderer.setPixelRatio(Math.min(dpr, cap));
  gfx.setQuality(stage.isTouch ? (q === 'high' ? 'medium' : 'low') : q);
  gfx.resize(stage.width, stage.height);
  renderer.shadowMap.enabled = q !== 'low';
  if (game.track && game.track.sun) game.track.sun.castShadow = q !== 'low';
  scene.traverse((o) => { if (o.material) [].concat(o.material).forEach((m) => { m.needsUpdate = true; }); });
}

function applySettings(s) {
  if (!s) return;
  audio.setVolumes({ master: s.masterVolume, music: s.musicVolume, sfx: s.sfxVolume });
  gameCam.shakeEnabled = s.cameraShake !== false;
  if (s.cameraView) gameCam.setMode(s.cameraView);
  if (s.quality !== game.quality) { game.quality = s.quality; applyQuality(s.quality); }
}

function resize() {
  const w = stage.width, h = stage.height;
  renderer.setSize(w, h, false);
  gfx.resize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
stage.onChange(resize);

// ---------------------------------------------------------------- track handling
function loadTrack(id) {
  if (game.track && game.track.id === id) return game.track;
  if (game.track) {
    scene.remove(game.track.group);
    try { game.track.dispose(); } catch (e) { console.warn(e); }
  }
  const track = buildTrack(id);
  game.track = track;
  scene.add(track.group);
  scene.background = track.background || new THREE.Color(0x87b5e0);
  scene.fog = track.fog || null;
  // The visible barrier sits outside ±halfWidth (kerb strip in between) while cars clamp their
  // centre at halfWidth - radius, so widen the physics band until bodywork just touches the wall.
  const pad = 1.3;
  const sample0 = track.sample, project0 = track.project;
  track.sample = (t, out) => { const r = sample0(t, out); r.halfWidth += pad; return r; };
  track.project = (p, hint, out) => { const r = project0(p, hint, out); r.halfWidth += pad; return r; };
  if (track.sun) track.sun.castShadow = game.quality !== 'low';
  gfx.prepareTrack(track);
  gameCam.resetFly();
  gameCam.snap();
  game.flyT = 0;
  return track;
}

const sunFocus = new THREE.Vector3();
function focusSun(pos) {
  if (!game.track || !game.track.followShadow) return;
  // Snap the shadow frustum to a coarse grid so shadow edges do not crawl as the car moves.
  sunFocus.set(Math.round(pos.x / 4) * 4, pos.y, Math.round(pos.z / 4) * 4);
  game.track.followShadow(sunFocus, 64);
}

// ---------------------------------------------------------------- menu preview
function clearPreviewCar() {
  if (game.previewCar) {
    scene.remove(game.previewCar);
    if (game.previewCar.userData.dispose) game.previewCar.userData.dispose();
    game.previewCar = null;
    game.previewCarId = null;
  }
}

function ensurePreviewCar(carId) {
  if (game.previewCarId === carId && game.previewCar) return;
  clearPreviewCar();
  const mesh = createCarMesh(carId);
  const slot = game.track.startGrid[0];
  mesh.position.copy(slot.pos);
  mesh.rotation.y = slot.heading;
  scene.add(mesh);
  game.previewCar = mesh;
  game.previewCarId = carId;
}

function onPreview(p) {
  if (game.state !== 'menu') return;
  Object.assign(game.preview, p || {});
  const wantTrack = isTrackScreen() && game.preview.trackId ? game.preview.trackId : null;
  clearTimeout(game.pendingTrackTimer);
  if (wantTrack && (!game.track || game.track.id !== wantTrack)) {
    game.pendingTrackTimer = setTimeout(() => {
      if (game.state !== 'menu') return;
      clearPreviewCar();
      loadTrack(wantTrack);
    }, 220);
  }
}

function isTrackScreen() {
  return game.preview.screen === 'track' || game.preview.screen === 'lobby';
}

function isCarScreen() {
  const s = String(game.preview.screen || '');
  return /car/i.test(s);
}

// ---------------------------------------------------------------- race flow
function endRace() {
  nameTags.clear();
  if (game.race) {
    try { game.race.dispose(); } catch (e) { console.warn(e); }
    game.race = null;
  }
}

function startRace(config) {
  clearTimeout(game.pendingTrackTimer);
  clearPreviewCar();
  endRace();
  camera.clearViewOffset();
  game.config = config;
  const track = loadTrack(config.trackId);
  const timetrial = config.mode === 'timetrial';
  const race = new Race({
    scene,
    track,
    playerCarId: config.carId,
    playerName: config.playerName || 'You',
    laps: config.laps || track.defaultLaps || 3,
    opponents: timetrial ? 0 : Math.max(0, Math.min(7, config.opponents ?? 7)),
    difficulty: config.difficulty ?? 1,
    mode: timetrial ? 'timetrial' : 'race',
    autopilot: !!config.autopilot, // debug/testing only
    net: config.net || undefined,
  });
  game.race = race;
  wireRace(race);
  nameTags.set((race.states || race.cars.map((car) => ({ car }))).filter((st) => st.car !== race.player)
    .map((st) => ({ car: st.car, name: st.car.name, human: !!config.net && !!st.human })));
  game.state = 'racing';
  input.capture = true;
  input.clear();
  ui.hideMenu();
  ui.hideResults();
  ui.hidePause();
  ui.showHUD();
  gameCam.snap();
  audio.stopMusic();
  audio.startMusic('race');
  // Prime transforms so the first rendered frame is correct.
  race.update(0.0001, controls);
}

function distVolume(car) {
  const p = game.race && game.race.player;
  if (!p || car === p) return 1;
  const d = car.pos.distanceTo(p.pos);
  return Math.max(0, 1 - d / 55);
}

function fmtTime(t) {
  if (t == null || !isFinite(t)) return '--:--.--';
  const m = Math.floor(t / 60);
  const s = t - m * 60;
  return `${m}:${s < 10 ? '0' : ''}${s.toFixed(2)}`;
}

function wireRace(race) {
  const trackId = game.track.id;
  race.on('countdown', (n) => { ui.showCountdown(String(n)); audio.play('count'); });
  race.on('go', () => { ui.showCountdown('GO!'); audio.play('go'); });
  race.on('lap', (car, lapNumber, lapTime, isBest) => {
    if (car !== race.player) return;
    audio.play('lap');
    const prev = ui.records.getBestLap(trackId);
    if (lapTime > 1 && (!prev || lapTime < prev)) {
      ui.records.setBestLap(trackId, lapTime);
      game.newRecord = true;
      ui.flashMessage(`NEW LAP RECORD  ${fmtTime(lapTime)}`, 2200);
    } else if (isBest) {
      ui.flashMessage(`BEST LAP  ${fmtTime(lapTime)}`, 1600);
    } else {
      ui.flashMessage(`LAP  ${fmtTime(lapTime)}`, 1400);
    }
  });
  race.on('finalLap', (car) => {
    if (car !== race.player) return;
    audio.play('final-lap');
    setTimeout(() => ui.flashMessage('FINAL LAP', 1800), 1500);
  });
  race.on('finish', (car, position) => {
    if (car !== race.player) return;
    audio.play(position === 1 ? 'win' : 'finish');
    ui.flashMessage(position === 1 ? 'YOU WIN!' : 'FINISHED!', 2500);
  });
  race.on('pickup', (car) => { if (car === race.player) audio.play('pickup'); });
  race.on('fire', (car) => { const v = distVolume(car); if (v > 0.05) audio.play('fire', { volume: v }); });
  race.on('hit', (car, itemId) => {
    const v = distVolume(car);
    if (v > 0.05) audio.play(/shock|pulse|zap/i.test(String(itemId)) ? 'zap' : /slick|glue|puddle|goo/i.test(String(itemId)) ? 'splat' : 'explosion', { volume: v });
    if (car === race.player) gameCam.addShake(0.8);
  });
  race.on('boost', (car) => { if (car === race.player) audio.play('boost'); });
  race.on('crash', (car, strength) => {
    if (car !== race.player) return;
    const s = Math.min(1, (strength || 0) / 20);
    audio.play(s > 0.45 ? 'crash' : 'bump', { volume: 0.4 + s * 0.6 });
    gameCam.addShake(s * 0.7);
  });
  race.on('raceOver', (standings) => onRaceOver(standings));
  if (MULTIPLAYER && game.config && game.config.net) race.on('net', (msg, toId) => {
    // Client packets without a target are meant for the host only.
    if (!toId && !net.isHost) { const h = net.peers.find((p) => p.isHost); toId = h && h.id; }
    net.send('r', msg, toId || undefined);
  });
  game.newRecord = false;
}

function onRaceOver(standings) {
  if (game.state !== 'racing' && game.state !== 'paused') return;
  const race = game.race;
  standings = standings || race.standings();
  game.state = 'results';
  input.capture = false;
  ui.hidePause();
  ui.hideHUD();
  audio.setEngine({ rpm: 0, throttle: 0, active: false });
  audio.setSkid(0);

  const cfg = game.config;
  const me = standings.find((s) => s.isPlayer);
  let newRecord = !!game.newRecord;
  if (me && me.finished && me.finishTime > 0 && isFinite(me.finishTime) && cfg.mode !== 'championship' && !mp.active) {
    const prev = ui.records.getBestRace(game.track.id, cfg.laps);
    if (!prev || me.finishTime < prev) {
      ui.records.setBestRace(game.track.id, cfg.laps, me.finishTime);
      newRecord = true;
    }
  }

  let championship = null;
  if (game.championship) {
    const ch = game.championship;
    if (!ch.scored) {
      for (const s of standings) {
        const e = ch.points.get(s.name) || { name: s.name, points: 0, isPlayer: !!s.isPlayer };
        e.points += CHAMP_POINTS[s.position - 1] || 0;
        ch.points.set(s.name, e);
      }
      ch.scored = true;
    }
    const table = [...ch.points.values()].sort((a, b) => b.points - a.points);
    championship = { round: ch.round + 1, rounds: ch.order.length, table, final: ch.round >= ch.order.length - 1 };
  }

  closeOverlay();
  ui.showResults({ standings, mode: cfg.mode, trackName: game.track.name, newRecord, championship, multiplayer: MULTIPLAYER && mp.active ? { isHost: net.isHost } : undefined });
}

function startChampionshipRound() {
  const ch = game.championship;
  ch.scored = false;
  const trackId = ch.order[ch.round];
  const meta = TRACKS.find((t) => t.id === trackId);
  startRace({ ...ch.base, mode: 'championship', trackId, laps: meta.defaultLaps || ch.base.laps || 3 });
}

function toMenu(screen = 'title', opts) {
  endRace();
  game.overlay = false;
  game.championship = null;
  game.state = 'menu';
  input.capture = false;
  ui.hideHUD();
  ui.hidePause();
  ui.hideResults();
  audio.setEngine({ rpm: 0, throttle: 0, active: false });
  audio.setSkid(0);
  audio.stopMusic();
  audio.startMusic('menu');
  gameCam.resetFly();
  game.preview.screen = screen;
  ui.showMenu(screen, opts);
}

// ---------------------------------------------------------------- multiplayer
function lobbyPlayers() {
  if (!MULTIPLAYER) return [];
  return net.peers.map((p) => ({ id: p.id, name: p.name, carId: (p.meta && p.meta.carId) || CARS[0].id, isHost: !!p.isHost, isYou: p.id === net.id }));
}

function showLobby() {
  if (!MULTIPLAYER) return;
  endRace();
  game.overlay = false;
  game.state = 'menu';
  input.capture = false;
  ui.hideHUD();
  ui.hidePause();
  ui.hideResults();
  audio.setEngine({ rpm: 0, throttle: 0, active: false });
  audio.setSkid(0);
  audio.stopMusic();
  audio.startMusic('menu');
  gameCam.resetFly();
  const settings = (net.room && net.room.settings) || mp.settings;
  mp.settings = settings;
  ui.showLobby({ code: net.code, joinUrls: mp.joinUrls || [], isHost: net.isHost, players: lobbyPlayers(), settings, status: null });
  onPreview({ screen: 'lobby', trackId: settings.trackId });
  net.joinUrls().then((urls) => { mp.joinUrls = urls; ui.updateLobby({ joinUrls: urls }); }).catch(() => {});
}

function mpEnter(promise) {
  if (!MULTIPLAYER) return;
  audio.unlock();
  promise.then(() => {
    mp.active = true;
    mp.peerIds = net.peers.map((p) => p.id);
    if (net.isHost) net.setRoomState({ settings: mp.settings, locked: false });
    showLobby();
  }).catch((e) => {
    mp.active = false;
    ui.showMpError((e && e.message) || 'Could not connect');
  });
}

function mpLeave() {
  if (!MULTIPLAYER) return;
  if (!mp.active && !net.connected) return;
  mp.active = false;
  try { net.leave(); } catch (e) { /* already closed */ }
}

function mpStart(settings) {
  if (!MULTIPLAYER) return;
  if (!net.isHost) return;
  mp.settings = { ...mp.settings, ...settings };
  const me = net.peers.find((p) => p.id === net.id) || {};
  const remotes = net.peers.filter((p) => p.id !== net.id).slice(0, 7)
    .map((p) => ({ id: p.id, name: p.name, carId: (p.meta && p.meta.carId) || CARS[0].id }));
  const opponents = Math.min(7, remotes.length + Math.max(0, mp.settings.bots | 0));
  const cfg = {
    mode: 'race', trackId: mp.settings.trackId, laps: mp.settings.laps, difficulty: mp.settings.difficulty,
    carId: (me.meta && me.meta.carId) || CARS[0].id, playerName: me.name || 'Host', opponents,
    net: { role: 'host', localId: net.id, remotes },
  };
  net.setRoomState({ settings: mp.settings, locked: true });
  startRace(cfg);
  net.send('start', { trackId: cfg.trackId, laps: cfg.laps, difficulty: cfg.difficulty, roster: game.race.getRoster() });
}

// All multiplayer glue below is dropped from the bundle when the flag is off.
if (MULTIPLAYER) {
  net.on('message', (type, data, fromId) => {
    if (!mp.active) return;
    if (type === 'r') {
      if (game.race && game.race.netReceive) game.race.netReceive(data, fromId);
    } else if (type === 'start' && !net.isHost && data && Array.isArray(data.roster)) {
      const mine = data.roster.find((r) => r.netId === net.id);
      if (!mine) return;
      startRace({
        mode: 'race', trackId: data.trackId, laps: data.laps, difficulty: data.difficulty, carId: mine.carId,
        playerName: mine.name, opponents: data.roster.length - 1,
        net: { role: 'client', localId: net.id, roster: data.roster },
      });
    } else if (type === 'lobby' && !net.isHost) {
      showLobby();
    }
  });
  net.on('peers', () => {
    if (!mp.active) return;
    const ids = net.peers.map((p) => p.id);
    if (net.isHost && game.race && game.race.dropRemote) {
      for (const id of mp.peerIds) if (!ids.includes(id)) game.race.dropRemote(id);
    }
    mp.peerIds = ids;
    ui.updateLobby({ players: lobbyPlayers() });
  });
  net.on('room', (room) => {
    if (!mp.active || !room || !room.settings) return;
    mp.settings = room.settings;
    ui.updateLobby({ settings: room.settings });
    if (game.state === 'menu' && ui.isLobbyVisible()) onPreview({ screen: 'lobby', trackId: room.settings.trackId });
  });
  net.on('ping', (ms) => { if (mp.active) ui.updateLobby({ status: `Connected · ping ${Math.round(ms)} ms` }); });
  net.on('close', (info) => {
    if (!mp.active) return;
    mp.active = false;
    toMenu('mp');
    ui.showMpError(`Disconnected: ${(info && info.reason) || 'connection lost'}`);
  });
}

function closeOverlay() {
  if (!game.overlay) return;
  game.overlay = false;
  ui.hidePause();
}

function pause() {
  if (game.state !== 'racing') return;
  if (performance.now() - game.lastResume < 250) return;
  if (mp.active) {
    // A network race cannot be frozen: show the menu on top while the race keeps running.
    if (game.overlay) return;
    game.overlay = true;
    input.capture = false;
    input.clear();
    setTimeout(() => { if (game.overlay) ui.showPause({ multiplayer: true }); }, 0);
    return;
  }
  game.state = 'paused';
  input.capture = false;
  audio.setEngine({ rpm: 0, throttle: 0, active: false });
  audio.setSkid(0);
  // Deferred so the same key event cannot immediately close the overlay again.
  setTimeout(() => { if (game.state === 'paused') ui.showPause(); }, 0);
}

function resume() {
  if (game.overlay) {
    closeOverlay();
    game.lastResume = performance.now();
    input.capture = true;
    input.clear();
    return;
  }
  if (game.state !== 'paused') return;
  game.state = 'racing';
  game.lastResume = performance.now();
  input.capture = true;
  input.clear();
  ui.hidePause();
}

// ---------------------------------------------------------------- UI
const ui = createUI(document.getElementById('ui-root'), {
  tracks: TRACKS,
  cars: CARS,
  items: ITEMS,
  handlers: {
    onStart(config) {
      audio.unlock();
      if (config.mode === 'championship') {
        game.championship = { round: 0, order: TRACKS.map((t) => t.id), points: new Map(), base: { ...config }, scored: false };
        startChampionshipRound();
      } else {
        game.championship = null;
        startRace({ ...config, trackId: config.trackId || TRACKS[0].id });
      }
    },
    onPreview,
    onResume: resume,
    onRestart() {
      if (!game.config || mp.active) return;
      if (game.championship) startChampionshipRound();
      else startRace(game.config);
    },
    onQuit() { mpLeave(); toMenu('main'); },
    onMpHost({ playerName, carId }) { mpEnter(net.host({ name: playerName || 'Host', meta: { carId } })); },
    onMpJoin({ code, playerName, carId }) { mpEnter(net.join(code, { name: playerName || 'Player', meta: { carId } })); },
    onMpLeave() { mpLeave(); },
    onMpCar({ carId }) { if (MULTIPLAYER && mp.active) net.setMeta({ carId }); },
    onMpSettings(settings) {
      if (!MULTIPLAYER || !mp.active || !net.isHost) return;
      mp.settings = { ...mp.settings, ...settings };
      net.setRoomState({ settings: mp.settings });
      onPreview({ screen: 'lobby', trackId: mp.settings.trackId });
    },
    onMpStart(settings) { mpStart(settings || mp.settings); },
    onMpLobby() {
      if (!MULTIPLAYER || !mp.active) { toMenu('main'); return; }
      if (net.isHost) { net.setRoomState({ locked: false }); net.send('lobby', {}); }
      showLobby();
    },
    onNextRace() {
      const ch = game.championship;
      if (!ch) return;
      if (ch.round >= ch.order.length - 1) { toMenu('main'); return; }
      ch.round += 1;
      startChampionshipRound();
    },
    onSettings: applySettings,
    onPauseRequest() { if (game.state === 'racing' && !game.overlay) pause(); },
    onCameraRequest() { if (game.state === 'racing') cycleCamera(); },
    onResetRequest() { if (game.state === 'racing') resetPlayer(); },
    onUiSound(name) { audio.unlock(); audio.play(name); },
  },
});

input.onPress((code) => {
  audio.unlock();
  if (code === 'KeyM') {
    game.muted = !game.muted;
    audio.setMuted(game.muted);
    if (game.state === 'racing') ui.flashMessage(game.muted ? 'SOUND OFF' : 'SOUND ON', 900);
    return;
  }
  if (game.state === 'racing' && !game.overlay) {
    if (code === 'Escape' || code === 'KeyP') pause();
    else if (code === 'KeyC') cycleCamera();
    else if (code === 'KeyR') resetPlayer();
  }
});
window.addEventListener('pointerdown', () => audio.unlock(), { once: false });
window.addEventListener('blur', () => { if (!mp.active && game.state === 'racing' && game.race && game.race.state !== 'finished') pause(); });

function cycleCamera() {
  const name = gameCam.nextMode();
  ui.setCameraView(gameCam.modeId);
  ui.flashMessage(`CAMERA: ${name.toUpperCase()}`, 900);
}

function resetPlayer() {
  const race = game.race;
  if (!race || race.state !== 'racing') return;
  const car = race.player;
  const s = game.track.sample(car.trackT);
  car.placeAt(s.pos.clone(), Math.atan2(s.tangent.x, s.tangent.z), game.track);
  gameCam.snap();
}

// ---------------------------------------------------------------- frame loop
const hud = { minimap: { points: null, cars: [] } };
let last = performance.now();
let dtSmooth = 1 / 60;
let lastFrameAt = 0;
let time = 0;

function updateHUD() {
  const race = game.race;
  const car = race.player;
  const info = race.info(car);
  hud.speed = Math.abs(car.speed);
  hud.topSpeed = car.def.topSpeed;
  hud.lap = info.lap;
  hud.laps = info.laps;
  hud.position = info.position;
  hud.total = info.total;
  hud.time = race.time;
  hud.lapTime = info.lapTime;
  hud.bestLap = info.bestLap;
  hud.lastLap = info.lastLap;
  hud.item = info.item;
  hud.wrongWay = info.wrongWay;
  hud.boost = car.boostTime > 0;
  hud.minimap.points = game.track.minimap;
  const cars = hud.minimap.cars;
  cars.length = race.cars.length;
  for (let i = 0; i < race.cars.length; i++) {
    const c = race.cars[i];
    const e = cars[i] || (cars[i] = {});
    e.x = c.pos.x; e.z = c.pos.z; e.isPlayer = c === car; e.color = c.color || (c.def && c.def.color) || '#ffffff';
  }
  ui.updateHUD(hud);
}

function frame(now) {
  requestAnimationFrame(frame);
  lastFrameAt = performance.now();
  let dt = (now - last) / 1000;
  last = now;
  if (dt > 0.1) dt = 0.1;
  if (dt <= 0) return;
  // Filter timer jitter so motion is even on high-refresh displays; real hitches pass straight through.
  if (Math.abs(dt - dtSmooth) < dtSmooth * 0.35) { dtSmooth += (dt - dtSmooth) * 0.15; dt = dtSmooth; } else dtSmooth = dt;
  time += dt;
  const track = game.track;
  const w = stage.width, h = stage.height;

  if (game.state === 'racing' || game.state === 'results') {
    const race = game.race;
    input.read(controls);
    const touch = ui.touch;
    if (touch && touch.active) {
      if (touch.throttle) controls.throttle = touch.throttle;
      if (touch.steer) controls.steer = touch.steer;
      if (touch.handbrake) controls.handbrake = true;
      if (touch.fire) controls.fire = true;
    }
    if (game.state === 'results') { controls.throttle = 0; controls.steer = 0; controls.handbrake = false; controls.fire = false; }
    if (game.overlay) { controls.throttle = 0; controls.steer = 0; controls.handbrake = false; controls.fire = false; }
    // Simulate exactly up to "now" every frame (sub-stepping long frames) so there is no 60 Hz judder on 120 Hz screens.
    const steps = Math.max(1, Math.ceil(dt / MAX_STEP - 0.01));
    const h = dt / steps;
    for (let i = 0; i < steps; i++) race.update(h, controls);
    input.consumeFire();
    track.update(dt, time);
    const car = race.player;
    focusSun(car.pos);
    camera.clearViewOffset();
    if (game.state === 'racing') {
      gameCam.follow(car, dt, track);
      updateHUD();
      const top = car.def.topSpeed || 35;
      const active = race.state !== 'countdown' || true;
      audio.setEngine({
        rpm: Math.min(1.2, Math.abs(car.speed) / top),
        throttle: race.state === 'countdown' ? Math.abs(controls.throttle) * 0.6 : Math.abs(controls.throttle),
        active,
      });
      audio.setSkid(car.drifting && car.onGround ? Math.min(1, Math.abs(car.speed) / (top * 0.6)) : 0);
    } else {
      gameCam.orbit(car.pos, dt, { radius: 7.5, height: 2.6, speed: 0.35 });
    }
  } else if (game.state === 'paused') {
    // world frozen, keep rendering
  } else if (track) {
    // menu / attract mode
    track.update(dt, time);
    if (isCarScreen()) {
      ensurePreviewCar(game.preview.carId || CARS[0].id);
      const p = game.previewCar.position;
      focusSun(p);
      gameCam.orbit(p, dt, { radius: 5.6, height: 1.7, speed: 0.6, lookY: 0.45 });
      camera.setViewOffset(w, h, -w * 0.2, -h * 0.04, w, h);
    } else {
      clearPreviewCar();
      const onTrackScreen = isTrackScreen();
      game.flyT += (dt * (onTrackScreen ? 26 : 14)) / track.length;
      const s = track.sample(((game.flyT % 1) + 1) % 1);
      focusSun(s.pos);
      gameCam.flyover(track, game.flyT, dt, onTrackScreen ? { height: 11, back: 16, ahead: 0.04 } : { height: 5, back: 10, ahead: 0.03 });
      if (onTrackScreen) camera.setViewOffset(w, h, -w * 0.16, 0, w, h);
      else camera.clearViewOffset();
    }
  }

  nameTags.update(camera, !!game.race && game.state !== 'menu');
  gfx.render(dt);
}

// A hidden tab gets no animation frames; keep a network race alive so other players are not frozen.
let hiddenLast = 0;
setInterval(() => {
  const now = performance.now();
  const stalled = document.hidden || now - lastFrameAt > 150;
  if (!stalled || !mp.active || !game.race || (game.state !== 'racing' && game.state !== 'results')) { hiddenLast = 0; return; }
  const dt = hiddenLast ? Math.min(1.1, (now - hiddenLast) / 1000) : 0;
  hiddenLast = now;
  if (dt <= 0) return;
  controls.throttle = 0; controls.steer = 0; controls.handbrake = false; controls.fire = false;
  const steps = Math.max(1, Math.ceil(dt / MAX_STEP));
  for (let i = 0; i < steps; i++) game.race.update(dt / steps, controls);
  last = now;
}, 33);

// ---------------------------------------------------------------- boot
resize();
applySettings(ui.getSettings());
if (!game.quality) { game.quality = 'medium'; applyQuality('medium'); }
loadTrack(TRACKS[0].id);
const joinCode = (new URLSearchParams(location.search).get('join') || '').toUpperCase().replace(/[^A-Z]/g, '').slice(0, 4);
if (MULTIPLAYER && joinCode.length === 4) { game.preview.screen = 'mp'; ui.showMenu('mp', { joinCode }); } else ui.showMenu('title');
audio.startMusic('menu');
requestAnimationFrame(frame);

// Debug handle for automated testing.
window.__game = { game, net, mp, gfx, mpEnter, mpStart, ui, audio, renderer, scene, camera, startRace, toMenu, TRACKS, CARS, ITEMS };
