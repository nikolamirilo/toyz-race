// Menu state + actions, without any rendering (the React screens in Menu.jsx read it and call into it).
// Flow: title -> main -> car select -> track select (skipped for championship) -> onStart(config)
// plus options and controls, and the multiplayer screens (CONTRACT-NET.md section 3):
// main -> mp (name / host / join) -> car select -> "Connecting…" -> lobby (shown by the integrator).

import { cleanName } from '../storage.js';
import { isTouch } from '../util.js';
import { MULTIPLAYER } from '../../flags.js';
import { Nav } from './store.js';

export const DIFFICULTIES = [
  { value: 0, label: 'Easy' },
  { value: 1, label: 'Normal' },
  { value: 2, label: 'Hard' },
];
export const MODE_LABEL = { race: 'Single Race', championship: 'Championship', timetrial: 'Time Trial' };
export const MAX_SEATS = 8;
export const MAX_LINKS = 3;
const SCREEN_ALIASES = { mode: 'main', menu: 'main', cars: 'car', tracks: 'track', settings: 'options', help: 'controls', multiplayer: 'mp' };
const SCREENS = ['title', 'main', 'car', 'track', 'options', 'controls'].concat(MULTIPLAYER ? ['mp', 'lobby'] : []);

/** Everything but multiplayer runs from the service-worker cache; multiplayer needs the relay server. */
export const MP_OFFLINE_MSG = "You're offline. Multiplayer needs a network connection; Single Race, Championship and Time Trial work offline.";
/** navigator.onLine is false only with no network at all — a LAN without internet still counts as online. */
export const isOffline = () => typeof navigator !== 'undefined' && navigator.onLine === false;

// mp screen item positions: name, host, code, join, back
export const MP_HOST_I = 1;
export const MP_CODE_I = 2;
export const MP_JOIN_I = 3;

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
export const range = (a, b) => {
  const o = [];
  for (let i = a; i <= b; i++) o.push({ value: i, label: String(i) });
  return o;
};

export function createMenuModel({ tracks, cars, items, handlers, store, bump }) {
  const { settings, sel, records } = store;
  const h = handlers || {};
  const sound = (n) => { if (h.onUiSound) h.onUiSound(n); };

  // ---- sanitise remembered selections against the data we were given
  if (!MODE_LABEL[sel.mode]) sel.mode = 'race';
  if (!cars.some((c) => c.id === sel.carId)) sel.carId = cars.length ? cars[0].id : null;
  if (!tracks.some((t) => t.id === sel.trackId)) sel.trackId = tracks.length ? tracks[0].id : null;
  if (!(sel.laps >= 2 && sel.laps <= 8)) sel.laps = null;
  if (!(sel.opponents >= 1 && sel.opponents <= 7)) sel.opponents = 7;
  if (![0, 1, 2].includes(sel.difficulty)) sel.difficulty = 1;

  const m = {
    tracks, cars, items, settings, sel, records, store, sound, handlers: h,
    nav: new Nav({ sound, onChange: bump }),
    visible: false,
    shownAt: 0,
    current: null,
    seq: 0, // bumps on every go(): screens remount, so their intro animations replay
    returnTo: 'main', // where options / controls go back to
    index: {}, // remembered focus per screen
    refs: { codeInput: null },
    mp: {
      purpose: null, // why the car screen is open: null (normal flow) | 'host' | 'join' | 'lobby' (change car)
      code: '', // join form
      busy: false, // "Connecting…" after onMpHost / onMpJoin
      busyText: '',
      lastJoin: false, // last connection attempt was a join (decides what an error screen focuses)
      msg: '',
      msgErr: false,
      active: false, // a lobby is being shown (also true while its "Change car" screen is open)
      carBefore: null,
      editAt: -1e9, // last time the host changed a setting locally
      lobby: { code: '', joinUrls: [], isHost: false, players: [], settings: {}, status: null },
    },
    bump,
  };
  const mp = m.mp;
  if (Number.isFinite(sel.mainIndex)) m.index.main = sel.mainIndex | 0;

  // ---- selection helpers
  m.carIndex = () => Math.max(0, cars.findIndex((c) => c.id === sel.carId));
  m.trackIndex = () => Math.max(0, tracks.findIndex((t) => t.id === sel.trackId));
  m.curTrack = () => tracks[m.trackIndex()];
  m.curLaps = () => sel.laps || Math.min(8, Math.max(2, (m.curTrack() && m.curTrack().defaultLaps) || 3));

  m.normSettings = (raw, base) => {
    const b = base || {};
    const o = Object.assign({}, b, raw || {});
    if (!tracks.some((t) => t.id === o.trackId)) o.trackId = tracks.some((t) => t.id === b.trackId) ? b.trackId : (m.curTrack() ? m.curTrack().id : null);
    o.laps = int(o.laps, 2, 8, int(b.laps, 2, 8, m.curLaps()));
    o.difficulty = int(o.difficulty, 0, 2, int(b.difficulty, 0, 2, sel.difficulty));
    o.bots = int(o.bots, 0, MAX_SEATS - 1, int(b.bots, 0, MAX_SEATS - 1, MAX_SEATS - 1));
    return o;
  };

  m.emitPreview = () => {
    const lobbyTrack = m.current === 'lobby' && mp.lobby.settings.trackId;
    if (h.onPreview) h.onPreview({ screen: m.current, carId: sel.carId, trackId: lobbyTrack || sel.trackId });
  };
  m.emitSettings = () => {
    store.saveSettings();
    if (h.onSettings) h.onSettings(store.getSettings());
  };
  m.setPlayerName = (v) => {
    const n = cleanName(v);
    if (n !== settings.playerName) {
      settings.playerName = n;
      m.emitSettings();
    }
  };

  const blurInput = () => {
    const a = typeof document !== 'undefined' ? document.activeElement : null;
    if (a && a.classList && a.classList.contains('tr-input')) a.blur();
  };

  // ---- navigation
  m.go = (name, opts = {}) => {
    name = SCREEN_ALIASES[name] || name;
    if (!SCREENS.includes(name)) name = 'title';
    blurInput();
    if (m.current) m.index[m.current] = m.nav.index;
    m.current = name;
    m.seq++;
    if (name === 'mp') {
      // the offline notice comes and goes with the network
      if (!mp.busy && isOffline()) {
        mp.msg = MP_OFFLINE_MSG;
        mp.msgErr = true;
      } else if (mp.msg === MP_OFFLINE_MSG) mp.msg = '';
    }
    let index = opts.index != null ? opts.index : m.index[name] || 0;
    if (name === 'lobby' && opts.index == null) index = m.lobbyDefaultIndex();
    m.nav.reset(index);
    m.emitPreview();
    bump();
  };

  m.back = () => {
    const fn = m.backs[m.current];
    if (!fn) return false;
    sound('ui-back');
    fn();
    return true;
  };

  // ---- main / single-player flow
  m.pickMode = (mode) => {
    mp.purpose = null;
    sel.mode = mode;
    store.saveSel();
    m.go('car', { index: 0 });
  };
  m.openMp = () => {
    mp.msg = '';
    m.go('mp', { index: MP_HOST_I });
  };
  m.openOptions = (from) => { m.returnTo = from || 'main'; m.go('options', { index: 0 }); };
  m.openControls = (from) => { m.returnTo = from || 'main'; m.go('controls', { index: 0 }); };

  m.setCar = (i) => {
    const n = cars.length;
    if (!n) return;
    i = ((i % n) + n) % n;
    if (cars[i].id === sel.carId) return;
    sel.carId = cars[i].id;
    store.saveSel();
    sound('ui-move');
    m.emitPreview();
    bump();
  };
  m.setTrack = (i) => {
    const n = tracks.length;
    if (!n) return;
    i = ((i % n) + n) % n;
    if (tracks[i].id === sel.trackId) return;
    sel.trackId = tracks[i].id;
    store.saveSel();
    sound('ui-move');
    m.emitPreview();
    bump();
  };

  m.buildConfig = (mode) => {
    const t = mode === 'championship' ? tracks[0] : m.curTrack();
    return {
      mode,
      trackId: t ? t.id : null,
      carId: sel.carId,
      laps: mode === 'championship' ? Math.min(8, Math.max(2, (t && t.defaultLaps) || 3)) : m.curLaps(),
      opponents: mode === 'timetrial' ? 0 : mode === 'championship' ? 7 : sel.opponents,
      difficulty: sel.difficulty,
      playerName: settings.playerName,
    };
  };

  m.confirmCar = () => {
    if (mp.purpose === 'lobby') {
      // "Change car" from the lobby
      store.saveSel();
      mp.purpose = null;
      const you = mp.lobby.players.find((p) => p.isYou);
      if (you) you.carId = sel.carId;
      m.go('lobby', { index: m.lobbyCarIndex() });
      if (h.onMpCar) h.onMpCar({ carId: sel.carId });
    } else if (mp.purpose) {
      store.saveSel();
      m.mpConnect();
    } else if (sel.mode === 'championship') {
      store.saveSel();
      if (h.onStart) h.onStart(m.buildConfig('championship'));
    } else {
      m.go('track', { index: 0 });
    }
  };

  m.startRace = () => {
    store.saveSel();
    if (h.onStart) h.onStart(m.buildConfig(sel.mode === 'timetrial' ? 'timetrial' : 'race'));
  };

  // ---- multiplayer: name / host / join
  m.setMsg = (text, err) => {
    mp.msg = text || '';
    mp.msgErr = !!err;
    bump();
  };
  /** True (and says so) when there is no network to host or join on. */
  const blockOffline = () => {
    if (!isOffline()) return false;
    m.setMsg(MP_OFFLINE_MSG, true);
    return true;
  };
  m.mpToCar = (purpose) => {
    if (blockOffline()) return;
    mp.msg = '';
    mp.purpose = purpose;
    m.go('car', { index: 0 });
  };
  m.mpSubmitJoin = () => {
    if (blockOffline()) return;
    const input = m.refs.codeInput;
    if (input) mp.code = cleanCode(input.value);
    if (mp.code.length !== 4) {
      m.setMsg(mp.code ? 'Room codes have 4 letters — ' + (4 - mp.code.length) + ' more to go.' : 'Type the 4-letter room code from the host first.', true);
      m.nav.focus(MP_CODE_I, true);
      if (input) input.focus();
      return;
    }
    m.mpToCar('join');
  };
  m.setCode = (v) => {
    const c = cleanCode(v);
    if (c !== mp.code && mp.msg) { mp.msg = ''; bump(); }
    mp.code = c;
  };
  m.mpCancel = () => {
    if (!mp.busy) return;
    mp.busy = false;
    mp.msg = '';
    m.go('mp', { index: MP_HOST_I });
    if (h.onMpLeave) h.onMpLeave();
  };
  /** Called by the car screen once a car is confirmed for hosting / joining. */
  m.mpConnect = () => {
    const host = mp.purpose === 'host';
    mp.purpose = null;
    mp.lastJoin = !host;
    const fn = host ? h.onMpHost : h.onMpJoin;
    if (isOffline()) {
      m.go('mp', { index: host ? MP_HOST_I : MP_JOIN_I });
      m.setMsg(MP_OFFLINE_MSG, true);
      return;
    }
    if (!fn) {
      mp.msg = 'Multiplayer is not available here.';
      mp.msgErr = true;
      m.go('mp', { index: host ? MP_HOST_I : MP_JOIN_I });
      return;
    }
    mp.busy = true;
    mp.busyText = host ? 'Opening a new room' : 'Joining room ' + mp.code;
    mp.msg = '';
    m.go('mp');
    // After go(): the integrator may answer synchronously with showLobby() / showMpError().
    if (host) fn({ playerName: settings.playerName, carId: sel.carId });
    else fn({ code: mp.code, playerName: settings.playerName, carId: sel.carId });
  };
  /** The network came or went: refresh the offline notice. */
  m.onNetworkChange = () => {
    if (m.current === 'mp' && !mp.busy) {
      if (isOffline()) { mp.msg = MP_OFFLINE_MSG; mp.msgErr = true; }
      else if (mp.msg === MP_OFFLINE_MSG) mp.msg = '';
    }
    bump();
  };

  // ---- multiplayer: lobby
  // host: link, track, laps, difficulty, bots, start, car, leave    guest: link, car, leave
  m.lobbyDefaultIndex = () => (mp.lobby.isHost ? 5 : 1);
  m.lobbyCarIndex = () => (mp.lobby.isHost ? 6 : 1);
  m.lobbyChange = (key, v) => {
    const st = mp.lobby.settings;
    if (st[key] === v) return;
    st[key] = v;
    mp.editAt = performance.now();
    bump();
    if (key === 'trackId') m.emitPreview();
    if (h.onMpSettings) h.onMpSettings(Object.assign({}, st));
  };
  m.lobbyStart = () => { if (h.onMpStart) h.onMpStart(Object.assign({}, mp.lobby.settings)); };
  m.lobbyChangeCar = () => {
    mp.carBefore = sel.carId;
    const you = mp.lobby.players.find((p) => p.isYou);
    if (you && cars.some((c) => c.id === you.carId)) sel.carId = you.carId;
    mp.purpose = 'lobby';
    m.go('car', { index: 0 });
  };
  m.lobbyLeave = () => {
    mp.active = false;
    mp.purpose = null;
    m.go('main');
    if (h.onMpLeave) h.onMpLeave();
  };

  const applyLobby = (p, full) => {
    const lb = mp.lobby;
    const d = p || {};
    const prevTrack = lb.settings.trackId;
    if ('code' in d) lb.code = String(d.code == null ? '' : d.code).toUpperCase();
    if (Array.isArray(d.joinUrls)) lb.joinUrls = d.joinUrls.filter((u) => typeof u === 'string' && u);
    if ('isHost' in d) lb.isHost = !!d.isHost;
    if (Array.isArray(d.players)) lb.players = d.players.filter(Boolean).map((x) => Object.assign({}, x));
    // The host owns the settings: ignore echoes that race with what was just picked locally.
    if (d.settings && (full || !lb.isHost || performance.now() - mp.editAt > 1500)) lb.settings = m.normSettings(d.settings, lb.settings);
    if ('status' in d) lb.status = d.status;
    bump();
    if (m.current === 'lobby' && lb.settings.trackId !== prevTrack) m.emitPreview();
  };

  const open = () => {
    if (m.visible) return;
    m.visible = true;
    m.shownAt = performance.now();
  };

  m.showLobby = (data) => {
    if (!MULTIPLAYER) return;
    const changingCar = m.visible && mp.active && m.current === 'car' && mp.purpose === 'lobby';
    mp.busy = false;
    mp.msg = '';
    if (!mp.active) {
      mp.lobby = { code: '', joinUrls: [], isHost: false, players: [], settings: m.normSettings(null, { trackId: sel.trackId, laps: m.curLaps(), difficulty: sel.difficulty, bots: MAX_SEATS - 1 }), status: null };
      mp.editAt = -1e9;
    }
    mp.active = true;
    if (!changingCar) mp.purpose = null;
    open();
    if (changingCar || m.current === 'lobby') {
      applyLobby(data, true); // already there (or picking a car): refresh in place, keep the focus where it is
      return;
    }
    // apply before go() so the first onPreview carries the lobby track
    const lb = mp.lobby;
    const d = data || {};
    if ('isHost' in d) lb.isHost = !!d.isHost;
    if (d.settings) lb.settings = m.normSettings(d.settings, lb.settings);
    m.go('lobby');
    applyLobby(data, true);
  };

  m.updateLobby = (partial) => {
    if (!MULTIPLAYER) return;
    if (!m.visible || !mp.active || !partial) return;
    applyLobby(partial, false);
  };

  m.showMpError = (message) => {
    if (!MULTIPLAYER) return;
    mp.busy = false;
    mp.active = false;
    mp.purpose = null;
    open();
    mp.msg = String(message == null || message === '' ? 'Could not connect.' : message);
    mp.msgErr = true;
    m.go('mp', { index: mp.lastJoin ? MP_JOIN_I : MP_HOST_I });
  };

  // ---- back actions per screen
  m.backs = {
    main: () => {
      sel.mainIndex = m.nav.index;
      store.saveSel();
      m.go('title');
    },
    car: () => {
      if (mp.purpose === 'lobby') {
        // cancelled: put the previous car back
        mp.purpose = null;
        if (mp.carBefore && cars.some((c) => c.id === mp.carBefore)) sel.carId = mp.carBefore;
        store.saveSel();
        m.go('lobby', { index: m.lobbyCarIndex() });
      } else if (mp.purpose) {
        const join = mp.purpose === 'join';
        mp.purpose = null;
        m.go('mp', { index: join ? MP_JOIN_I : MP_HOST_I });
      } else m.go('main');
    },
    track: () => m.go('car'),
    options: () => m.go(m.returnTo),
    controls: () => m.go(m.returnTo),
    mp: () => { mp.msg = ''; m.go('main'); },
    lobby: () => m.lobbyLeave(),
  };

  // ---- keyboard
  /** Screen-specific keys, before the generic focus-list handling. */
  const screenKey = (e) => {
    if (m.current === 'title') {
      if (e.key === 'Enter' || e.key === ' ') {
        if (!e.repeat) { sound('ui-select'); m.go('main'); }
        return true;
      }
      return false;
    }
    if (m.current === 'mp') {
      if (mp.busy) {
        if (e.key === 'Escape') {
          if (!e.repeat) { sound('ui-back'); m.mpCancel(); }
          return true;
        }
        return e.key === 'Backspace';
      }
      // Typing letters with the code row / join button highlighted goes straight into the code field.
      const it = m.nav.current();
      if (it && (it.id === 'code' || it.id === 'join') && /^[a-zA-Z]$/.test(e.key) && m.refs.codeInput) {
        m.nav.focus(MP_CODE_I, true);
        m.refs.codeInput.focus();
        m.refs.codeInput.select(); // a full code is replaced, not appended to
        return 'pass';
      }
    }
    return false;
  };

  /** Returns true (handled), 'pass' (let the browser use it but keep it away from the game) or false. */
  m.handleKey = (e) => {
    if (!m.current) return false;
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
        return m.nav.key(e);
      }
      return 'pass';
    }
    const own = screenKey(e);
    if (own) return own;
    // Backspace must not throw you out of the lobby room
    if (e.key === 'Escape' || (e.key === 'Backspace' && m.current !== 'lobby')) {
      if (e.repeat) return true;
      if (m.backs[m.current]) m.back();
      return true;
    }
    if (m.current === 'title') return false;
    return m.nav.key(e);
  };

  // ---- show / hide (ui.showMenu / ui.hideMenu)
  m.show = (screen = 'title', opts) => {
    m.visible = true;
    m.shownAt = performance.now();
    mp.purpose = null;
    mp.busy = false;
    mp.active = false;
    let name = SCREEN_ALIASES[screen] || screen || 'title';
    if (name === 'lobby') name = 'mp'; // the lobby itself only opens through showLobby(data)
    if (name === 'mp' && !MULTIPLAYER) name = 'main';
    if (name === 'mp') {
      mp.msg = '';
      const jc = opts && opts.joinCode != null ? cleanCode(opts.joinCode) : '';
      if (jc) mp.code = jc;
      m.go('mp', { index: jc ? MP_JOIN_I : MP_HOST_I });
    } else m.go(name);
  };
  m.hide = () => {
    mp.busy = false;
    mp.active = false;
    mp.purpose = null;
    if (!m.visible) return;
    blurInput();
    if (m.current) m.index[m.current] = m.nav.index;
    m.visible = false;
    bump();
  };
  m.getSelection = () => ({ mode: sel.mode, carId: sel.carId, trackId: sel.trackId, laps: m.curLaps(), opponents: sel.opponents, difficulty: sel.difficulty });
  m.isTouch = isTouch;

  return m;
}
