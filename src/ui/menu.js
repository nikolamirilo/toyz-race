// Menu flow: title -> main -> car select -> track select (skipped for championship) -> onStart(config)
// plus options and controls screens, and the multiplayer screens (CONTRACT-NET.md section 3):
// main -> mp (name / host / join) -> car select -> "Connecting…" -> lobby (shown by the integrator).

import { el, esc, fmtTime, carSvg, logoHtml, starsHtml, isTouch } from './util.js';
import { createNav, button, selector, slider, textInput } from './nav.js';
import { cleanName } from './storage.js';

const DIFFICULTIES = [
  { value: 0, label: 'Easy' },
  { value: 1, label: 'Normal' },
  { value: 2, label: 'Hard' },
];
const MODE_LABEL = { race: 'Single Race', championship: 'Championship', timetrial: 'Time Trial' };
const CLASS_CHIP = { Rookie: '', Amateur: 'y', Pro: 'p' };
const STAT_ROWS = [
  ['speed', 'Speed'],
  ['accel', 'Accel'],
  ['grip', 'Grip'],
  ['weight', 'Weight'],
];
const SCREEN_ALIASES = { mode: 'main', menu: 'main', cars: 'car', tracks: 'track', settings: 'options', help: 'controls', multiplayer: 'mp' };
const MAX_SEATS = 8;
const MAX_LINKS = 3;
/** Head "back" button: only shown on touch devices and in the compact (phone) layout — see styles.js. */
const BACK_BTN = '<i class="tr-backbtn" role="button" aria-label="Back">◀</i>';

/** Room codes are 4 letters. Accepts a pasted join link too (…?join=ABCD). */
export function cleanCode(v) {
  const s = String(v == null ? '' : v);
  const m = /[?&#]join=([a-z]{4})(?![a-z])/i.exec(s);
  return (m ? m[1] : s.replace(/[^a-z]/gi, '').slice(0, 4)).toUpperCase();
}
const int = (v, lo, hi, d) => {
  const n = Math.round(Number(v));
  return isFinite(n) && v != null && v !== '' ? Math.min(hi, Math.max(lo, n)) : d;
};

function hints(list) {
  return '<div class="tr-hints">' + list.map(([k, t]) => '<span>' + k.map((x) => '<i class="tr-key">' + x + '</i>').join('') + esc(t) + '</span>').join('') + '</div>';
}

export function createMenu(root, { tracks, cars, items, handlers, store }) {
  const { settings, sel, records } = store;
  const h = handlers || {};
  const sound = (n) => { if (h.onUiSound) h.onUiSound(n); };
  const range = (a, b) => { const o = []; for (let i = a; i <= b; i++) o.push({ value: i, label: String(i) }); return o; };

  // ---- sanitise remembered selections against the data we were given
  if (!MODE_LABEL[sel.mode]) sel.mode = 'race';
  if (!cars.some((c) => c.id === sel.carId)) sel.carId = cars.length ? cars[0].id : null;
  if (!tracks.some((t) => t.id === sel.trackId)) sel.trackId = tracks.length ? tracks[0].id : null;
  if (!(sel.laps >= 2 && sel.laps <= 8)) sel.laps = null;
  if (!(sel.opponents >= 1 && sel.opponents <= 7)) sel.opponents = 7;
  if (![0, 1, 2].includes(sel.difficulty)) sel.difficulty = 1;

  const carIndex = () => Math.max(0, cars.findIndex((c) => c.id === sel.carId));
  const trackIndex = () => Math.max(0, tracks.findIndex((t) => t.id === sel.trackId));
  const curTrack = () => tracks[trackIndex()];
  const curLaps = () => sel.laps || Math.min(8, Math.max(2, (curTrack() && curTrack().defaultLaps) || 3));

  const node = el('div', 'tr-layer tr-menu');
  root.appendChild(node);
  const nav = createNav({ sound });
  const screens = {};
  let current = null;
  let visible = false;
  let shownAt = 0;
  let returnTo = 'main'; // where options/controls go back to

  // ---- multiplayer state
  const mp = {
    purpose: null,   // why the car screen is open: null (normal flow) | 'host' | 'join' | 'lobby' (change car)
    code: '',        // join form
    busy: false,     // "Connecting…" after onMpHost / onMpJoin
    busyText: '',
    lastJoin: false, // last connection attempt was a join (decides what an error screen focuses)
    msg: '',
    msgErr: false,
    active: false,   // a lobby is being shown (also true while its "Change car" screen is open)
    carBefore: null,
    editAt: -1e9,    // last time the host changed a setting locally
    lobby: { code: '', joinUrls: [], isHost: false, players: [], settings: {}, status: null },
  };
  function normSettings(raw, base) {
    const b = base || {};
    const o = Object.assign({}, b, raw || {});
    if (!tracks.some((t) => t.id === o.trackId)) o.trackId = tracks.some((t) => t.id === b.trackId) ? b.trackId : (curTrack() ? curTrack().id : null);
    o.laps = int(o.laps, 2, 8, int(b.laps, 2, 8, curLaps()));
    o.difficulty = int(o.difficulty, 0, 2, int(b.difficulty, 0, 2, sel.difficulty));
    o.bots = int(o.bots, 0, MAX_SEATS - 1, int(b.bots, 0, MAX_SEATS - 1, MAX_SEATS - 1));
    return o;
  }

  function emitPreview() {
    const lobbyTrack = current === 'lobby' && mp.lobby.settings.trackId;
    if (h.onPreview) h.onPreview({ screen: current, carId: sel.carId, trackId: lobbyTrack || sel.trackId });
  }
  function emitSettings() {
    store.saveSettings();
    if (h.onSettings) h.onSettings(store.getSettings());
  }

  function addScreen(name, cls, html) {
    const s = el('div', 'tr-screen ' + cls, html);
    node.appendChild(s);
    s.querySelectorAll('.tr-backbtn').forEach((b) => b.addEventListener('click', (e) => {
      e.stopPropagation();
      if (current === name) back();
    }));
    screens[name] = { name, el: s, items: [], index: 0, back: null, onShow: null };
    return screens[name];
  }

  function go(name, opts = {}) {
    name = SCREEN_ALIASES[name] || name;
    const scr = screens[name] || screens.title;
    const active = document.activeElement;
    if (active && active.classList && active.classList.contains('tr-input')) active.blur();
    if (current && screens[current]) {
      screens[current].index = nav.index;
      screens[current].el.classList.remove('on');
    }
    current = scr.name;
    scr.el.classList.add('on');
    if (scr.onShow) scr.onShow(opts);
    nav.set(scr.items, opts.index != null ? opts.index : scr.index);
    emitPreview();
  }

  function back() {
    const scr = screens[current];
    if (!scr || !scr.back) return false;
    sound('ui-back');
    scr.back();
    return true;
  }

  // ================================================================ title
  {
    const s = addScreen('title', 'tr-title',
      '<div class="tr-title-in">' + logoHtml() +
      '<div class="tr-tagline">Pocket-size racers<i>◆</i>Full-size mayhem</div>' +
      '<div class="tr-press tr-if-keys">Press <i class="tr-key">ENTER</i> to start</div>' +
      '<div class="tr-press tr-if-touch">Tap to start</div>' +
      '</div><div class="tr-foot">Toy-scale arcade racing</div>');
    s.el.querySelector('.tr-title-in').addEventListener('click', () => { sound('ui-select'); go('main'); });
    s.key = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (!e.repeat) { sound('ui-select'); go('main'); }
        return true;
      }
      return false;
    };
  }

  // ================================================================ main
  {
    const s = addScreen('main', 'tr-main tr-left',
      '<div class="tr-side">' + logoHtml() + '<div class="tr-hello"></div><div class="tr-list"></div></div>' +
      hints([[['↑', '↓'], 'Select'], [['ENTER'], 'Confirm'], [['ESC'], 'Back']]));
    const list = s.el.querySelector('.tr-list');
    const hello = s.el.querySelector('.tr-hello');
    const pick = (mode) => () => {
      mp.purpose = null;
      sel.mode = mode;
      store.saveSel();
      go('car', { index: 0 });
    };
    s.items = [
      button('Single Race', 'Pick a track, beat the pack', pick('race')),
      button('Multiplayer', 'Host or join a room · up to 8', () => { mp.msg = ''; go('mp', { index: 1 }); }),
      button('Championship', tracks.length + ' tracks · points 10-8-6-5-4-3-2-1', pick('championship')),
      button('Time Trial', 'Just you and the clock', pick('timetrial')),
      button('Options', 'Sound, graphics, driver', () => { returnTo = 'main'; go('options', { index: 0 }); }),
      button('Controls', 'Keys and pickups', () => { returnTo = 'main'; go('controls', { index: 0 }); }),
    ];
    s.items.forEach((it) => list.appendChild(it.el));
    s.index = Math.min(s.items.length - 1, Math.max(0, sel.mainIndex | 0));
    s.onShow = () => { hello.innerHTML = 'Driver: <b>' + esc(settings.playerName) + '</b>'; };
    s.back = () => {
      sel.mainIndex = nav.index;
      store.saveSel();
      go('title');
    };
  }

  // ================================================================ car select
  {
    const s = addScreen('car', 'tr-carsel tr-left',
      '<div class="tr-side">' +
      '<div class="tr-head">' + BACK_BTN + '<h2>Choose your car</h2><span class="tr-chip o" data-r="mode"></span></div>' +
      '<div class="tr-cargrid"></div>' +
      '<div class="tr-card tr-cardetail">' +
      '<div class="tr-cd-top"><div class="tr-cd-name" data-r="name"></div><span class="tr-chip" data-r="class"></span></div>' +
      '<div class="tr-cd-tag" data-r="tag"></div>' +
      '<div class="tr-stats">' + STAT_ROWS.map(([k, l]) => '<label>' + l + '</label><div class="tr-bar"><i data-bar="' + k + '"></i></div><b data-num="' + k + '"></b>').join('') + '</div>' +
      '</div>' +
      '<div class="tr-bottom"><div class="tr-rows tr-cells" data-r="rows"></div>' +
      '<div data-r="go"></div></div>' +
      '</div>' +
      hints([[['←', '↑', '↓', '→'], 'Choose'], [['ENTER'], 'Confirm'], [['ESC'], 'Back']]));
    const r = (k) => s.el.querySelector('[data-r="' + k + '"]');
    const gridEl = s.el.querySelector('.tr-cargrid');
    const COLS = 4;
    const tiles = cars.map((c, i) => {
      const t = el('div', 'tr-cartile', carSvg(c.color) + '<span>' + esc(c.name) + '</span>');
      t.addEventListener('click', (e) => {
        e.stopPropagation();
        nav.focus(0, true);
        if (i === carIndex()) { sound('ui-select'); confirm(); }
        else { setCar(i); }
      });
      gridEl.appendChild(t);
      return t;
    });

    function renderCar(animate) {
      const i = carIndex();
      const c = cars[i];
      tiles.forEach((t, j) => t.classList.toggle('sel', j === i));
      if (!c) return;
      r('name').innerHTML = '<span class="tr-swatch" style="background:' + esc(c.color) + '"></span>' + esc(c.name);
      const chip = r('class');
      chip.textContent = c.class || '';
      chip.className = 'tr-chip ' + (CLASS_CHIP[c.class] || '');
      r('tag').textContent = c.tagline || '';
      const apply = () => {
        const c = cars[carIndex()]; // re-read: the highlight may have moved since this was scheduled
        STAT_ROWS.forEach(([k]) => {
          const v = Math.min(10, Math.max(0, (c.stats && c.stats[k]) || 0));
          const bar = s.el.querySelector('[data-bar="' + k + '"]');
          bar.style.width = v * 10 + '%';
          bar.style.setProperty('--bw', v > 0 ? 1000 / v + '%' : '100%');
          s.el.querySelector('[data-num="' + k + '"]').textContent = String(v);
        });
      };
      if (animate) apply();
      else {
        // screen just opened: start from empty so the bars sweep in
        STAT_ROWS.forEach(([k]) => { s.el.querySelector('[data-bar="' + k + '"]').style.width = '0%'; });
        void s.el.offsetWidth; // flush the 0% state, then let the transition run (no rAF: works in throttled tabs too)
        setTimeout(apply, 40);
      }
    }
    function setCar(i) {
      const n = cars.length;
      if (!n) return;
      i = ((i % n) + n) % n;
      if (cars[i].id === sel.carId) return;
      sel.carId = cars[i].id;
      store.saveSel();
      renderCar(true);
      sound('ui-move');
      emitPreview();
    }
    function buildConfig(mode) {
      const t = mode === 'championship' ? tracks[0] : curTrack();
      return {
        mode,
        trackId: t ? t.id : null,
        carId: sel.carId,
        laps: mode === 'championship' ? Math.min(8, Math.max(2, (t && t.defaultLaps) || 3)) : curLaps(),
        opponents: mode === 'timetrial' ? 0 : mode === 'championship' ? 7 : sel.opponents,
        difficulty: sel.difficulty,
        playerName: settings.playerName,
      };
    }
    s.buildConfig = buildConfig;
    function confirm() {
      if (mp.purpose === 'lobby') {
        // "Change car" from the lobby
        store.saveSel();
        mp.purpose = null;
        const you = mp.lobby.players.find((p) => p.isYou);
        if (you) you.carId = sel.carId;
        go('lobby', { index: screens.lobby.carIndex() });
        if (h.onMpCar) h.onMpCar({ carId: sel.carId });
      } else if (mp.purpose) {
        store.saveSel();
        screens.mp.connect();
      } else if (sel.mode === 'championship') {
        store.saveSel();
        if (h.onStart) h.onStart(buildConfig('championship'));
      } else {
        go('track', { index: 0 });
      }
    }

    const gridItem = {
      el: gridEl,
      left: () => { setCar(carIndex() - 1); return true; },
      right: () => { setCar(carIndex() + 1); return true; },
      up: () => { const i = carIndex(); if (i - COLS < 0) return false; setCar(i - COLS); return true; },
      down: () => { const i = carIndex(); if (i + COLS >= cars.length) return false; setCar(i + COLS); return true; },
      enter: confirm,
      click: () => {},
    };
    const diffItem = selector('Difficulty', {
      options: () => DIFFICULTIES,
      get: () => sel.difficulty,
      set: (v) => { sel.difficulty = v; store.saveSel(); },
      sound,
    });
    r('rows').appendChild(diffItem.el);
    const goItem = button('Next: track', null, confirm, 'tr-go');
    r('go').appendChild(goItem.el);
    s.items = [gridItem, diffItem, goItem];
    s.onShow = () => {
      const p = mp.purpose;
      const champ = !p && sel.mode === 'championship';
      r('mode').textContent = p ? 'Multiplayer' : MODE_LABEL[sel.mode];
      diffItem.setHidden(!champ);
      r('rows').classList.toggle('tr-empty', !champ);
      diffItem.render();
      goItem.setLabel(p === 'host' ? 'Host game' : p === 'join' ? 'Join room ' + mp.code : p === 'lobby' ? 'Confirm car' : champ ? 'Start championship' : 'Next: choose track');
      renderCar(false);
    };
    s.back = () => {
      if (mp.purpose === 'lobby') {
        // cancelled: put the previous car back
        mp.purpose = null;
        if (mp.carBefore && cars.some((c) => c.id === mp.carBefore)) sel.carId = mp.carBefore;
        store.saveSel();
        go('lobby', { index: screens.lobby.carIndex() });
      } else if (mp.purpose) {
        const join = mp.purpose === 'join';
        mp.purpose = null;
        go('mp', { index: join ? 3 : 1 });
      } else go('main');
    };
  }

  // ================================================================ track select
  {
    const s = addScreen('track', 'tr-tracksel tr-left',
      '<div class="tr-side">' +
      '<div class="tr-head">' + BACK_BTN + '<h2>Choose a track</h2><span class="tr-chip o" data-r="mode"></span></div>' +
      '<div class="tr-trkgrid"></div>' +
      '<div class="tr-card tr-trkdetail">' +
      '<div class="tr-td-desc" data-r="desc"></div>' +
      '<div class="tr-td-meta">' +
      '<div class="tr-meta"><small>Difficulty</small><b data-r="stars"></b></div>' +
      '<div class="tr-meta"><small>Length</small><b data-r="len"></b></div>' +
      '<div class="tr-meta"><small>Best lap</small><b class="rec" data-r="best"></b></div>' +
      '<div class="tr-meta"><small data-r="racel">Best race</small><b class="rec" data-r="race"></b></div>' +
      '</div></div>' +
      '<div class="tr-bottom"><div class="tr-rows tr-cells" data-r="rows"></div>' +
      '<div data-r="go"></div></div>' +
      '</div>' +
      hints([[['←', '↑', '↓', '→'], 'Choose / adjust'], [['ENTER'], 'Start'], [['ESC'], 'Back']]));
    const r = (k) => s.el.querySelector('[data-r="' + k + '"]');
    const gridEl = s.el.querySelector('.tr-trkgrid');
    const COLS = 2;
    const tiles = tracks.map((t, i) => {
      const n = el('div', 'tr-trktile', '<span class="tr-trknum">' + (i + 1) + '</span><span><span class="tr-trkname">' + esc(t.name) + '</span><br>' + starsHtml(t.difficulty || 1) + '</span>');
      n.addEventListener('click', (e) => {
        e.stopPropagation();
        nav.focus(0, true);
        if (i === trackIndex()) { sound('ui-select'); start(); }
        else setTrack(i);
      });
      gridEl.appendChild(n);
      return n;
    });

    function renderTrack() {
      const i = trackIndex();
      const t = tracks[i];
      tiles.forEach((n, j) => n.classList.toggle('sel', j === i));
      if (!t) return;
      r('desc').textContent = t.description || '';
      r('stars').innerHTML = starsHtml(t.difficulty || 1);
      r('len').textContent = t.lengthLabel || '—';
      const bl = records.getBestLap(t.id);
      r('best').textContent = bl != null ? fmtTime(bl) : '-:--.--';
      const laps = curLaps();
      const br = records.getBestRace(t.id, laps);
      r('racel').textContent = 'Best race (' + laps + ' laps)';
      r('race').textContent = br != null ? fmtTime(br) : '-:--.--';
      lapsItem.render();
    }
    function setTrack(i) {
      const n = tracks.length;
      if (!n) return;
      i = ((i % n) + n) % n;
      if (tracks[i].id === sel.trackId) return;
      sel.trackId = tracks[i].id;
      store.saveSel();
      renderTrack();
      sound('ui-move');
      emitPreview();
    }
    function start() {
      store.saveSel();
      if (h.onStart) h.onStart(screens.car.buildConfig(sel.mode === 'timetrial' ? 'timetrial' : 'race'));
    }

    const gridItem = {
      el: gridEl,
      left: () => { setTrack(trackIndex() - 1); return true; },
      right: () => { setTrack(trackIndex() + 1); return true; },
      up: () => { const i = trackIndex(); if (i - COLS < 0) return false; setTrack(i - COLS); return true; },
      down: () => { const i = trackIndex(); if (i + COLS >= tracks.length) return false; setTrack(i + COLS); return true; },
      enter: start,
      click: () => {},
    };
    const lapsItem = selector('Laps', {
      options: () => range(2, 8),
      get: curLaps,
      set: (v) => { sel.laps = v; store.saveSel(); renderTrack(); },
      sound,
    });
    const oppItem = selector('Opponents', {
      options: () => range(1, 7),
      get: () => sel.opponents,
      set: (v) => { sel.opponents = v; store.saveSel(); },
      sound,
    });
    const diffItem = selector('Difficulty', {
      options: () => DIFFICULTIES,
      get: () => sel.difficulty,
      set: (v) => { sel.difficulty = v; store.saveSel(); },
      sound,
    });
    [lapsItem, oppItem, diffItem].forEach((it) => r('rows').appendChild(it.el));
    const goItem = button('Start race', null, start, 'tr-go');
    r('go').appendChild(goItem.el);
    s.items = [gridItem, lapsItem, oppItem, diffItem, goItem];
    s.onShow = () => {
      const tt = sel.mode === 'timetrial';
      r('mode').textContent = MODE_LABEL[tt ? 'timetrial' : 'race'];
      oppItem.setHidden(tt);
      diffItem.setHidden(tt);
      oppItem.render();
      diffItem.render();
      goItem.setLabel(tt ? 'Start time trial' : 'Start race');
      renderTrack();
    };
    s.back = () => go('car');
  }

  // ================================================================ options
  {
    const s = addScreen('options', 'tr-options tr-center',
      '<div class="tr-mid"><div class="tr-head">' + BACK_BTN + '<h2>Options</h2></div>' +
      '<div class="tr-card"><div class="tr-rows" data-r="rows"></div></div>' +
      '<div class="tr-foot-row" data-r="foot"></div></div>' +
      hints([[['↑', '↓'], 'Select'], [['←', '→'], 'Adjust'], [['ESC'], 'Back']]));
    const rows = s.el.querySelector('[data-r="rows"]');
    const vol = (label, key) => slider(label, {
      get: () => settings[key],
      set: (v) => { settings[key] = v; emitSettings(); },
      sound,
    });
    const nameItem = textInput('Driver name', {
      get: () => settings.playerName,
      set: (v) => {
        const n = cleanName(v);
        if (n !== settings.playerName) { settings.playerName = n; emitSettings(); }
      },
    });
    s.items = [
      vol('Master volume', 'masterVolume'),
      vol('Music volume', 'musicVolume'),
      vol('Effects volume', 'sfxVolume'),
      selector('Graphics quality', {
        options: () => [{ value: 'low', label: 'Low' }, { value: 'medium', label: 'Medium' }, { value: 'high', label: 'High' }],
        get: () => settings.quality,
        set: (v) => { settings.quality = v; emitSettings(); },
        sound,
      }),
      selector('Camera shake', {
        options: () => [{ value: false, label: 'Off' }, { value: true, label: 'On' }],
        get: () => settings.cameraShake,
        set: (v) => { settings.cameraShake = v; emitSettings(); },
        sound,
      }),
      nameItem,
    ];
    // touch controls only: gas is applied automatically, the player steers, brakes, drifts and fires
    const autoItem = selector('Auto accelerate', {
      options: () => [{ value: false, label: 'Off' }, { value: true, label: 'On' }],
      get: () => store.getSettings().autoGas,
      set: (v) => { settings.autoGas = !!v; emitSettings(); },
      sound,
    });
    autoItem.el.classList.add('tr-if-touch');
    autoItem.skip = () => !isTouch();
    s.items.splice(5, 0, autoItem);
    s.items.forEach((it) => rows.appendChild(it.el));
    const backItem = button('Back', null, () => { sound('ui-back'); s.back(); }, 'tr-small');
    backItem.enter = () => s.back();
    s.el.querySelector('[data-r="foot"]').appendChild(backItem.el);
    s.items.push(backItem);
    s.nameItem = nameItem;
    s.onShow = () => s.items.forEach((it) => it.render && it.render());
    s.back = () => go(returnTo);
  }

  // ================================================================ controls
  {
    const K = (...keys) => '<span class="k">' + keys.map((k) => (k === '/' ? '<em>or</em>' : '<i class="tr-key">' + k + '</i>')).join('') + '</span>';
    const keyRows = [
      [K('↑', '←', '↓', '→', '/', 'W', 'A', 'S', 'D'), 'Drive: accelerate, steer, brake / reverse'],
      [K('SHIFT', '/', 'B'), 'Handbrake — kick the tail out and drift'],
      [K('SPACE', '/', 'X'), 'Use the item you are holding'],
      [K('C'), 'Change camera'],
      [K('R'), 'Reset car to the track'],
      [K('ESC', '/', 'P'), 'Pause'],
      [K('M'), 'Mute sound'],
    ];
    const touchRows = [
      [K('◀', '▶'), 'Steer — slide your left thumb between the two'],
      [K('GAS', 'BRAKE'), 'Accelerate, brake / reverse'],
      [K('DRIFT'), 'Handbrake — kick the tail out and drift'],
      [K('ITEM'), 'Use the item you are holding (or tap the item slot)'],
      [K('❚❚', '/', '◉', '/', '↺'), 'Pause, change camera, reset car to the track'],
      ['<span class="k"><em>Tip</em></span>', '“Auto accelerate” in Options drives for you: just steer, brake and drift'],
    ];
    const itemsHtml = (items || []).map((it) =>
      '<div class="tr-item"><span class="tr-item-ic">' + esc(it.icon || '?') + '</span><span><b>' + esc(it.name) + '</b><small>' + esc(it.description || '') + '</small></span></div>').join('');
    const s = addScreen('controls', 'tr-controls tr-center',
      '<div class="tr-mid"><div class="tr-head">' + BACK_BTN + '<h2>Controls</h2></div>' +
      '<div class="tr-cols">' +
      '<div class="tr-card"><h3>Driving</h3>' +
      '<div class="tr-keys tr-if-keys">' + keyRows.map(([k, t]) => k + '<span>' + esc(t) + '</span>').join('') + '</div>' +
      '<div class="tr-keys tr-if-touch">' + touchRows.map(([k, t]) => k + '<span>' + esc(t) + '</span>').join('') + '</div></div>' +
      '<div class="tr-card"><h3>Pickups</h3><div class="tr-items">' + (itemsHtml || '<small>Smash a crate to grab a random item.</small>') + '</div></div>' +
      '</div><div class="tr-note"><b>Multiplayer:</b> host a room and share the code or link; empty seats are bots.</div>' +
      '<div class="tr-foot-row" data-r="foot"></div></div>' +
      hints([[['ENTER'], 'Back'], [['ESC'], 'Back']]));
    const backItem = button('Got it', null, () => s.back(), 'tr-small');
    s.el.querySelector('[data-r="foot"]').appendChild(backItem.el);
    s.items = [backItem];
    s.back = () => go(returnTo);
  }

  // ================================================================ multiplayer: name / host / join
  {
    const s = addScreen('mp', 'tr-mp tr-left',
      '<div class="tr-side">' +
      '<div class="tr-head">' + BACK_BTN + '<h2>Multiplayer</h2><span class="tr-chip o">Up to 8</span></div>' +
      '<div class="tr-mp-form">' +
      '<div class="tr-rows" data-r="name"></div>' +
      '<div data-r="host"></div>' +
      '<div class="tr-mp-or"><span>or join a friend</span></div>' +
      '<div class="tr-rows" data-r="code"></div>' +
      '<div data-r="join"></div>' +
      '<div class="tr-mp-msg" data-r="msg" role="status"></div>' +
      '<div class="tr-mp-foot" data-r="foot"></div>' +
      '</div>' +
      '<div class="tr-card tr-mp-busy"><div class="tr-spinner"></div><div class="tr-mp-busyt"><b>Connecting…</b><small data-r="busyt"></small></div><div data-r="cancel"></div></div>' +
      '</div>' +
      hints([[['↑', '↓'], 'Select'], [['ENTER'], 'Confirm'], [['ESC'], 'Back']]));
    const r = (k) => s.el.querySelector('[data-r="' + k + '"]');
    const CODE_I = 2;
    const JOIN_I = 3;

    function renderMsg() {
      const m = r('msg');
      m.textContent = mp.msg ? (mp.msgErr ? '⚠ ' : '') + mp.msg : '';
      m.classList.toggle('err', !!mp.msg && mp.msgErr);
    }
    function setMsg(text, err) {
      mp.msg = text || '';
      mp.msgErr = !!err;
      renderMsg();
    }
    function toCar(purpose) {
      setMsg('');
      mp.purpose = purpose;
      go('car', { index: 0 });
    }
    function submitJoin() {
      mp.code = cleanCode(codeItem.input.value);
      if (mp.code.length !== 4) {
        setMsg(mp.code ? 'Room codes have 4 letters — ' + (4 - mp.code.length) + ' more to go.' : 'Type the 4-letter room code from the host first.', true);
        nav.focus(CODE_I, true);
        codeItem.input.focus();
        return;
      }
      toCar('join');
    }

    const nameItem = textInput('Driver name', {
      get: () => settings.playerName,
      set: (v) => {
        const n = cleanName(v);
        if (n !== settings.playerName) { settings.playerName = n; emitSettings(); }
      },
    });
    const hostItem = button('Host a game', 'Open a room, share the code', () => toCar('host'));
    const codeItem = textInput('Room code', {
      get: () => mp.code,
      set: (v) => {
        const c = cleanCode(v);
        if (c !== mp.code && mp.msg) setMsg('');
        mp.code = c;
      },
      maxLength: 80, // room for a pasted join link; cleanCode() cuts it down to the 4 letters
      live: true,
      onSubmit: submitJoin,
      cls: 'tr-code',
      placeholder: '····',
      capitalize: 'characters',
      enterHint: 'go',
    });
    const joinItem = button('Join a game', 'Enter the code, pick a car', submitJoin);
    const backItem = button('Back', null, () => s.back(), 'tr-small');
    r('name').appendChild(nameItem.el);
    r('host').appendChild(hostItem.el);
    r('code').appendChild(codeItem.el);
    r('join').appendChild(joinItem.el);
    r('foot').appendChild(backItem.el);
    const formItems = [nameItem, hostItem, codeItem, joinItem, backItem];

    function cancel() {
      if (!mp.busy) return;
      mp.busy = false;
      setMsg('');
      go('mp', { index: 1 });
      if (h.onMpLeave) h.onMpLeave();
    }
    const cancelItem = button('Cancel', null, cancel, 'tr-small');
    r('cancel').appendChild(cancelItem.el);

    /** Called by the car screen once a car is confirmed for hosting / joining. */
    s.connect = () => {
      const host = mp.purpose === 'host';
      mp.purpose = null;
      mp.lastJoin = !host;
      const fn = host ? h.onMpHost : h.onMpJoin;
      if (!fn) {
        setMsg('Multiplayer is not available here.', true);
        go('mp', { index: host ? 1 : JOIN_I });
        return;
      }
      mp.busy = true;
      mp.busyText = host ? 'Opening a new room' : 'Joining room ' + mp.code;
      setMsg('');
      go('mp');
      // After go(): the integrator may answer synchronously with showLobby() / showMpError().
      if (host) fn({ playerName: settings.playerName, carId: sel.carId });
      else fn({ code: mp.code, playerName: settings.playerName, carId: sel.carId });
    };
    s.setMsg = setMsg;
    s.joinIndex = JOIN_I;

    s.onShow = () => {
      s.el.classList.toggle('busy', mp.busy);
      s.items = mp.busy ? [cancelItem] : formItems;
      r('busyt').textContent = mp.busyText;
      nameItem.render();
      codeItem.render();
      renderMsg();
    };
    s.key = (e) => {
      if (mp.busy) {
        if (e.key === 'Escape') {
          if (!e.repeat) { sound('ui-back'); cancel(); }
          return true;
        }
        return e.key === 'Backspace';
      }
      // Typing letters with the code row / join button highlighted goes straight into the code field.
      const it = nav.current();
      if ((it === codeItem || it === joinItem) && /^[a-zA-Z]$/.test(e.key)) {
        nav.focus(CODE_I, true);
        codeItem.input.focus();
        codeItem.input.select(); // a full code is replaced, not appended to
        return 'pass';
      }
      return false;
    };
    s.back = () => { setMsg(''); go('main'); };
  }

  // ================================================================ multiplayer: lobby
  {
    const s = addScreen('lobby', 'tr-lobby tr-left',
      '<div class="tr-side">' +
      '<div class="tr-head"><h2>Lobby</h2><span class="tr-chip" data-r="role"></span><span class="tr-lb-status" data-r="status"></span></div>' +
      '<div class="tr-lb-a">' +
      '<div class="tr-card tr-lb-code">' +
      '<div class="tr-lb-codebox"><small>Room code</small><b data-r="code"></b></div>' +
      '<div class="tr-lb-linkwrap"><small data-r="linkl">Join link — click to copy</small><div class="tr-lb-links" data-r="links"></div></div>' +
      '</div>' +
      '<div class="tr-card tr-lb-players"><h3><span>Starting grid</span><span data-r="count"></span></h3><div class="tr-lb-grid" data-r="players"></div></div>' +
      '</div><div class="tr-lb-b">' +
      '<div class="tr-rows tr-cells" data-r="rows"></div>' +
      '<div class="tr-card tr-lb-guest" data-r="guest">' +
      '<div class="tr-td-meta">' +
      '<div class="tr-meta"><small>Track</small><b data-r="g-track"></b></div>' +
      '<div class="tr-meta"><small>Laps</small><b data-r="g-laps"></b></div>' +
      '<div class="tr-meta"><small>Difficulty</small><b data-r="g-diff"></b></div>' +
      '<div class="tr-meta"><small>Bots</small><b data-r="g-bots"></b></div>' +
      '</div><div class="tr-lb-wait">Waiting for host<i>.</i><i>.</i><i>.</i></div></div>' +
      '<div data-r="go"></div>' +
      '<div class="tr-lb-foot" data-r="foot"></div>' +
      '</div></div>' +
      hints([[['↑', '↓'], 'Select'], [['←', '→'], 'Adjust'], [['ENTER'], 'Confirm'], [['ESC'], 'Leave']]));
    const r = (k) => s.el.querySelector('[data-r="' + k + '"]');
    const L = () => mp.lobby;
    const cache = {};
    const setHtml = (key, html) => {
      if (cache[key] === html) return;
      cache[key] = html;
      r(key).innerHTML = html;
    };

    // ---- settings (host)
    function change(key, v) {
      const st = L().settings;
      if (st[key] === v) return;
      st[key] = v;
      mp.editAt = performance.now();
      renderLobby();
      if (key === 'trackId') emitPreview();
      if (h.onMpSettings) h.onMpSettings(Object.assign({}, st));
    }
    const trackItem = selector('Track', {
      options: () => tracks.map((t) => ({ value: t.id, label: t.name })),
      get: () => L().settings.trackId,
      set: (v) => change('trackId', v),
      sound,
    });
    const lapsItem = selector('Laps', { options: () => range(2, 8), get: () => L().settings.laps, set: (v) => change('laps', v), sound });
    const diffItem = selector('Difficulty', { options: () => DIFFICULTIES, get: () => L().settings.difficulty, set: (v) => change('difficulty', v), sound });
    const botsItem = selector('Bots', {
      options: () => range(0, MAX_SEATS - 1).map((o) => ({ value: o.value, label: o.value ? 'Up to ' + o.value : 'None' })),
      get: () => L().settings.bots,
      set: (v) => change('bots', v),
      sound,
    });
    const hostRows = [trackItem, lapsItem, diffItem, botsItem];
    hostRows.forEach((it) => r('rows').appendChild(it.el));

    // ---- join links (click / Enter copies)
    const linksEl = r('links');
    let copyTimer = 0;
    function copyLink(i) {
      const url = L().joinUrls[i];
      const row = linksEl.children[i];
      if (!url || !row) return;
      const textEl = row.querySelector('span');
      const tag = row.querySelector('em');
      const done = (ok) => {
        clearTimeout(copyTimer);
        Array.from(linksEl.children).forEach((n) => { n.classList.remove('copied'); n.querySelector('em').textContent = 'Copy'; });
        if (!row.isConnected) return;
        row.classList.add('copied');
        tag.textContent = ok ? 'Copied!' : isTouch() ? 'Selected' : 'Selected — press Ctrl/⌘+C';
        copyTimer = setTimeout(() => { row.classList.remove('copied'); tag.textContent = 'Copy'; }, ok ? 1500 : 4000);
      };
      const fallback = () => {
        // no async clipboard (plain-http LAN page, old browser): select the text so the user can copy it
        let ok = false;
        try {
          const range = document.createRange();
          range.selectNodeContents(textEl);
          const selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
          ok = !!(document.execCommand && document.execCommand('copy'));
          if (ok) selection.removeAllRanges();
        } catch (err) { ok = false; }
        done(ok);
      };
      try {
        if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(url).then(() => done(true), fallback);
        } else fallback();
      } catch (err) { fallback(); }
    }
    const linkItem = {
      el: linksEl,
      enter: () => copyLink(0),
      click: (e) => {
        const row = e && e.target && e.target.closest ? e.target.closest('.tr-lb-link') : null;
        const i = row ? Array.prototype.indexOf.call(linksEl.children, row) : 0;
        sound('ui-select');
        copyLink(Math.max(0, i));
      },
      skip: () => !L().joinUrls.length,
    };

    // ---- buttons
    const startItem = button('Start race', null, () => { if (h.onMpStart) h.onMpStart(Object.assign({}, L().settings)); }, 'tr-go');
    r('go').appendChild(startItem.el);
    const carItem = button('Change car', null, () => {
      mp.carBefore = sel.carId;
      const you = L().players.find((p) => p.isYou);
      if (you && cars.some((c) => c.id === you.carId)) sel.carId = you.carId;
      mp.purpose = 'lobby';
      go('car', { index: 0 });
    }, 'tr-small');
    const leaveItem = button('Leave', null, () => leave(), 'tr-small');
    r('foot').appendChild(carItem.el);
    r('foot').appendChild(leaveItem.el);
    // the two small buttons sit side by side
    carItem.right = () => { nav.focus(nav.items.indexOf(leaveItem)); return true; };
    leaveItem.left = () => { nav.focus(nav.items.indexOf(carItem)); return true; };

    function leave() {
      mp.active = false;
      mp.purpose = null;
      go('main');
      if (h.onMpLeave) h.onMpLeave();
    }

    const itemsFor = (host) => (host ? [linkItem].concat(hostRows, [startItem, carItem, leaveItem]) : [linkItem, carItem, leaveItem]);
    let itemsHost = null;
    function syncItems() {
      const host = !!L().isHost;
      if (itemsHost === host) return;
      itemsHost = host;
      const cur = current === 'lobby' ? nav.current() : null;
      s.items = itemsFor(host);
      if (current === 'lobby') {
        const i = s.items.indexOf(cur);
        nav.set(s.items, i >= 0 ? i : s.defaultIndex());
      }
    }
    s.defaultIndex = () => s.items.indexOf(L().isHost ? startItem : carItem);
    s.carIndex = () => s.items.indexOf(carItem);

    function renderLobby() {
      const lb = L();
      const st = lb.settings;
      const host = !!lb.isHost;
      s.el.classList.toggle('host', host);
      const role = r('role');
      role.textContent = host ? 'Host' : 'Guest';
      role.className = 'tr-chip ' + (host ? 'y' : '');
      const stEl = r('status');
      const status = lb.status == null ? '' : String(lb.status);
      if (stEl.textContent !== status) stEl.textContent = status;
      stEl.style.display = status ? '' : 'none';
      if (r('code').textContent !== lb.code) r('code').textContent = lb.code || '----';

      // links
      const urls = lb.joinUrls.slice(0, MAX_LINKS);
      setHtml('links', urls.map((u) => '<div class="tr-lb-link" role="button" title="Copy the join link"><span>' + esc(u.replace(/^https?:\/\//i, '')) + '</span><em>Copy</em></div>').join(''));
      const shown = isTouch() ? Math.min(urls.length, 1) : urls.length;
      r('linkl').textContent = urls.length ? 'Join link' + (shown > 1 ? 's' : '') + (isTouch() ? ' — tap to copy' : ' — click to copy') : 'Share the code with your friends';

      // players: humans, then bots up to the bots setting, then open seats
      const humans = lb.players.slice(0, MAX_SEATS);
      const bots = Math.max(0, Math.min(st.bots | 0, MAX_SEATS - humans.length));
      let html = '';
      humans.forEach((p) => {
        const c = cars.find((x) => x.id === p.carId);
        html += '<div class="tr-lb-p' + (p.isYou ? ' you' : '') + '">' + carSvg(c ? c.color : '#8892b8') +
          '<span class="tr-lb-pn"><b>' + (p.isHost ? '<i class="tr-lb-crown" title="Host">♛</i>' : '') + '<span>' + esc(p.name || 'Player') + '</span></b><small>' + esc(c ? c.name : '—') + '</small></span>' +
          (p.isYou ? '<span class="tr-lb-tag">You</span>' : '') + '</div>';
      });
      for (let i = 0; i < bots; i++) html += '<div class="tr-lb-p bot"><span class="tr-lb-ic">⚙</span><span class="tr-lb-pn"><b><span>Bot</span></b><small>' + esc((DIFFICULTIES[st.difficulty] || DIFFICULTIES[1]).label) + ' AI</small></span></div>';
      for (let i = humans.length + bots; i < MAX_SEATS; i++) html += '<div class="tr-lb-p open"><span class="tr-lb-pn"><b><span>Open seat</span></b></span></div>';
      setHtml('players', html);
      const total = humans.length + bots;
      r('count').textContent = humans.length + (humans.length === 1 ? ' player' : ' players') + (bots ? ' + ' + bots + (bots === 1 ? ' bot' : ' bots') : '') + ' · ' + total + (total === 1 ? ' car' : ' cars');

      // settings
      hostRows.forEach((it) => it.render());
      const t = tracks.find((x) => x.id === st.trackId);
      r('g-track').textContent = t ? t.name : '—';
      r('g-laps').textContent = String(st.laps);
      r('g-diff').textContent = (DIFFICULTIES[st.difficulty] || DIFFICULTIES[1]).label;
      r('g-bots').textContent = st.bots ? 'Up to ' + st.bots : 'None';
      syncItems();
    }
    s.render = renderLobby;
    s.onShow = () => {
      itemsHost = null; // go() installs s.items itself
      s.items = itemsFor(!!L().isHost);
      itemsHost = !!L().isHost;
      renderLobby();
    };
    s.escOnly = true; // Backspace must not throw you out of the room
    s.back = leave;
  }

  // ---- lobby API (called by the integrator through ui.*)
  function applyLobby(p, full) {
    const lb = mp.lobby;
    const d = p || {};
    const prevTrack = lb.settings.trackId;
    if ('code' in d) lb.code = String(d.code == null ? '' : d.code).toUpperCase();
    if (Array.isArray(d.joinUrls)) lb.joinUrls = d.joinUrls.filter((u) => typeof u === 'string' && u);
    if ('isHost' in d) lb.isHost = !!d.isHost;
    if (Array.isArray(d.players)) lb.players = d.players.filter(Boolean).map((x) => Object.assign({}, x));
    // The host owns the settings: ignore echoes that race with what was just picked locally.
    if (d.settings && (full || !lb.isHost || performance.now() - mp.editAt > 1500)) lb.settings = normSettings(d.settings, lb.settings);
    if ('status' in d) lb.status = d.status;
    screens.lobby.render();
    if (current === 'lobby' && lb.settings.trackId !== prevTrack) emitPreview();
  }

  function showLobby(data) {
    const changingCar = visible && mp.active && current === 'car' && mp.purpose === 'lobby';
    mp.busy = false;
    mp.msg = '';
    if (!mp.active) {
      mp.lobby = { code: '', joinUrls: [], isHost: false, players: [], settings: normSettings(null, { trackId: sel.trackId, laps: curLaps(), difficulty: sel.difficulty, bots: MAX_SEATS - 1 }), status: null };
      mp.editAt = -1e9;
    }
    mp.active = true;
    if (!changingCar) mp.purpose = null;
    if (!visible) {
      visible = true;
      shownAt = performance.now();
      node.classList.add('on');
    }
    if (changingCar || current === 'lobby') {
      applyLobby(data, true); // already there (or picking a car): refresh in place, keep the focus where it is
      return;
    }
    // apply before go() so the first onPreview carries the lobby track
    const lb = mp.lobby;
    const d = data || {};
    if ('isHost' in d) lb.isHost = !!d.isHost;
    if (d.settings) lb.settings = normSettings(d.settings, lb.settings);
    go('lobby');
    applyLobby(data, true);
    nav.focus(screens.lobby.defaultIndex(), true);
  }

  function updateLobby(partial) {
    if (!visible || !mp.active || !partial) return;
    applyLobby(partial, false);
  }

  function showMpError(message) {
    mp.busy = false;
    mp.active = false;
    mp.purpose = null;
    if (!visible) {
      visible = true;
      shownAt = performance.now();
      node.classList.add('on');
    }
    mp.msg = String(message == null || message === '' ? 'Could not connect.' : message);
    mp.msgErr = true;
    go('mp', { index: mp.lastJoin ? screens.mp.joinIndex : 1 });
  }

  // ================================================================ keyboard
  /** Returns true (handled), 'pass' (let the browser use it but keep it away from the game) or false. */
  function handleKey(e) {
    const scr = screens[current];
    if (!scr) return false;
    const active = document.activeElement;
    if (active && active.classList && active.classList.contains('tr-input')) {
      if (e.key === 'Enter' && active._ttSubmit) {
        if (!e.repeat) { sound('ui-select'); active._ttSubmit(); }
        return true;
      }
      if (e.key === 'Enter' || e.key === 'Escape') {
        active.blur();
        sound('ui-select');
        return true;
      }
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        active.blur();
        return nav.key(e);
      }
      return 'pass';
    }
    const own = scr.key ? scr.key(e) : false;
    if (own) return own;
    if (e.key === 'Escape' || (e.key === 'Backspace' && !scr.escOnly)) {
      if (e.repeat) return true;
      if (scr.back) back();
      return true;
    }
    if (current === 'title') return false;
    return nav.key(e);
  }

  return {
    node,
    handleKey,
    show(screen = 'title', opts) {
      visible = true;
      shownAt = performance.now();
      node.classList.add('on');
      mp.purpose = null;
      mp.busy = false;
      mp.active = false;
      let name = SCREEN_ALIASES[screen] || screen || 'title';
      if (name === 'lobby') name = 'mp'; // the lobby itself only opens through showLobby(data)
      if (name === 'mp') {
        mp.msg = '';
        const jc = opts && opts.joinCode != null ? cleanCode(opts.joinCode) : '';
        if (jc) mp.code = jc;
        go('mp', { index: jc ? 3 : 1 });
      } else go(name);
    },
    showLobby,
    updateLobby,
    showMpError,
    get lobbyVisible() { return visible && current === 'lobby'; },
    hide() {
      mp.busy = false;
      mp.active = false;
      mp.purpose = null;
      if (!visible) return;
      const active = document.activeElement;
      if (active && active.classList && active.classList.contains('tr-input')) active.blur();
      if (current && screens[current]) screens[current].index = nav.index;
      visible = false;
      node.classList.remove('on');
    },
    get visible() { return visible; },
    get shownAt() { return shownAt; },
    get screen() { return current; },
    getSelection() { return { mode: sel.mode, carId: sel.carId, trackId: sel.trackId, laps: curLaps(), opponents: sel.opponents, difficulty: sel.difficulty }; },
    destroy() { node.remove(); },
  };
}
