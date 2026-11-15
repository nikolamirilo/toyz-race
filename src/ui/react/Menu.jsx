// Menu screens. State and actions live in the menu model (menuModel.js); each screen builds its focus-list
// descriptors on render and hands them to the shared Nav from a layout effect.

import { useEffect, useLayoutEffect, useState } from 'react';
import { fmtTime, isTouch } from '../util.js';
import { MULTIPLAYER, APP_VERSION } from '../../flags.js';
import { DIFFICULTIES, MODE_LABEL, MAX_SEATS, MAX_LINKS, range, isOffline, recordKey } from './menuModel.js';
import { Item, Hints, Logo, CarSvg, Stars, BackBtn } from './items.jsx';

const CLASS_CHIP = { Rookie: '', Amateur: 'y', Pro: 'p' };
const STAT_ROWS = [
  ['speed', 'Speed'],
  ['accel', 'Accel'],
  ['grip', 'Grip'],
  ['weight', 'Weight'],
];
const cx = (...a) => a.filter(Boolean).join(' ');

/** Hand the current descriptors to the menu's Nav after every render. */
function useItems(m, items) {
  useLayoutEffect(() => {
    m.nav.setItems(items);
  });
}

/** Screen shell: a fresh element per go(), so the CSS intro animation replays like before. */
function Screen({ name, cls, children }) {
  return <div className={cx('tr-screen on', 'tr-' + name, cls)}>{children}</div>;
}

// ================================================================ title
function Title({ m }) {
  useItems(m, []);
  return (
    <div className="tr-screen on tr-title">
      <div className="tr-title-in" onClick={() => { m.sound('ui-select'); m.go('main'); }}>
        <Logo />
        <div className="tr-tagline">Pocket-size racers<i>◆</i>Full-size mayhem</div>
        <div className="tr-press tr-if-keys">Press <i className="tr-key">ENTER</i> to start</div>
        <div className="tr-press tr-if-touch">Tap to start</div>
      </div>
      <div className="tr-foot">Toy-scale arcade racing<span className="tr-ver"> · v{APP_VERSION}</span></div>
    </div>
  );
}

// ================================================================ main
function Main({ m, kit }) {
  const offline = isOffline();
  const items = [
    kit.button('race', 'Single Race', 'Pick a track, beat the pack', () => m.pickMode('race')),
    // Multiplayer needs the relay server: while offline it stays visible but cannot be selected.
    MULTIPLAYER && kit.button('mp', 'Multiplayer', offline ? 'Offline · needs a network connection' : 'Host or join a room · up to 8', m.openMp, null, { off: offline, skip: isOffline }),
    kit.button('kart', 'Karting', 'Narrow tracks · you work the gas · nail the apex', () => m.pickMode('karting')),
    kit.button('champ', 'Championship', m.tracks.length + ' tracks · points 10-8-6-5-4-3-2-1', () => m.pickMode('championship')),
    kit.button('tt', 'Time Trial', 'Just you and the clock', () => m.pickMode('timetrial')),
    kit.button('options', 'Options', 'Sound, graphics, driver', () => m.openOptions('main')),
    kit.button('controls', 'Controls', 'Keys and pickups', () => m.openControls('main')),
  ].filter(Boolean);
  useItems(m, items);
  return (
    <Screen name="main" cls="tr-left">
      <div className="tr-side">
        <Logo />
        <div className="tr-hello">Driver: <b>{m.settings.playerName}</b></div>
        <div className="tr-list">
          {items.map((it, i) => <Item key={it.id} it={it} i={i} nav={m.nav} />)}
        </div>
      </div>
      <Hints list={[[['↑', '↓'], 'Select'], [['ENTER'], 'Confirm'], [['ESC'], 'Back']]} />
    </Screen>
  );
}

// ================================================================ car select
function CarSelect({ m, kit }) {
  const { cars, sel, mp } = m;
  const COLS = 4;
  const ci = m.carIndex();
  const car = cars[ci];
  const p = mp.purpose;
  const champ = !p && sel.mode === 'championship';
  // stat bars sweep in from empty when the screen opens, then follow the highlight
  const [barsOn, setBarsOn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setBarsOn(true), 40);
    return () => clearTimeout(t);
  }, []);

  const grid = {
    id: 'grid',
    left: () => { m.setCar(ci - 1); return true; },
    right: () => { m.setCar(ci + 1); return true; },
    up: () => { if (ci - COLS < 0) return false; m.setCar(ci - COLS); return true; },
    down: () => { if (ci + COLS >= cars.length) return false; m.setCar(ci + COLS); return true; },
    enter: m.confirmCar,
    click: () => {},
  };
  const diff = kit.selector('diff', 'Difficulty', {
    options: () => DIFFICULTIES,
    get: () => sel.difficulty,
    set: (v) => { sel.difficulty = v; m.store.saveSel(); },
    hidden: !champ,
  });
  const goLabel = p === 'host' ? 'Host game' : p === 'join' ? 'Join room ' + mp.code : p === 'lobby' ? 'Confirm car' : champ ? 'Start championship' : 'Next: choose track';
  const go = kit.button('go', goLabel, null, m.confirmCar, 'tr-go');
  const items = [grid, diff, go];
  useItems(m, items);
  const gb = m.nav.bind(grid, 0);

  return (
    <Screen name="carsel" cls="tr-left">
      <div className="tr-side">
        <div className="tr-head">
          <BackBtn onBack={m.back} />
          <h2>Choose your car</h2>
          <span className="tr-chip o">{p ? 'Multiplayer' : MODE_LABEL[sel.mode]}</span>
        </div>
        <div className={cx('tr-cargrid', gb.focused && 'tr-focus')} onMouseEnter={gb.onMouseEnter} onClick={gb.onClick}>
          {cars.map((c, i) => (
            <div
              key={c.id}
              className={cx('tr-cartile', i === ci && 'sel')}
              onClick={(e) => {
                e.stopPropagation();
                m.nav.focus(0, true);
                if (i === m.carIndex()) { m.sound('ui-select'); m.confirmCar(); } else m.setCar(i);
              }}
            >
              <CarSvg color={c.color} />
              <span>{c.name}</span>
            </div>
          ))}
        </div>
        {car ? (
          <div className="tr-card tr-cardetail">
            <div className="tr-cd-top">
              <div className="tr-cd-name"><span className="tr-swatch" style={{ background: car.color }} />{car.name}</div>
              <span className={'tr-chip ' + (CLASS_CHIP[car.class] || '')}>{car.class || ''}</span>
            </div>
            <div className="tr-cd-tag">{car.tagline || ''}</div>
            <div className="tr-stats">
              {STAT_ROWS.map(([k, l]) => {
                const v = Math.min(10, Math.max(0, (car.stats && car.stats[k]) || 0));
                return [
                  <label key={k + 'l'}>{l}</label>,
                  <div className="tr-bar" key={k + 'b'}><i style={{ width: (barsOn ? v * 10 : 0) + '%', '--bw': v > 0 ? 1000 / v + '%' : '100%' }} /></div>,
                  <b key={k + 'n'}>{v}</b>,
                ];
              })}
            </div>
          </div>
        ) : null}
        <div className="tr-bottom">
          <div className={cx('tr-rows tr-cells', !champ && 'tr-empty')}><Item it={diff} i={1} nav={m.nav} /></div>
          <div><Item it={go} i={2} nav={m.nav} /></div>
        </div>
      </div>
      <Hints list={[[['←', '↑', '↓', '→'], 'Choose'], [['ENTER'], 'Confirm'], [['ESC'], 'Back']]} />
    </Screen>
  );
}

// ================================================================ track select
function TrackSelect({ m, kit }) {
  const { tracks, sel, records } = m;
  const COLS = 2;
  const ti = m.trackIndex();
  const t = tracks[ti];
  const tt = sel.mode === 'timetrial';
  const kart = sel.mode === 'karting';
  const laps = m.curLaps();

  const grid = {
    id: 'grid',
    left: () => { m.setTrack(ti - 1); return true; },
    right: () => { m.setTrack(ti + 1); return true; },
    up: () => { if (ti - COLS < 0) return false; m.setTrack(ti - COLS); return true; },
    down: () => { if (ti + COLS >= tracks.length) return false; m.setTrack(ti + COLS); return true; },
    enter: m.startRace,
    click: () => {},
  };
  const rows = [
    kit.selector('laps', 'Laps', { options: () => range(2, 8), get: m.curLaps, set: (v) => { sel.laps = v; m.store.saveSel(); } }),
    kit.selector('opp', 'Opponents', { options: () => range(1, 7), get: () => sel.opponents, set: (v) => { sel.opponents = v; m.store.saveSel(); }, hidden: tt }),
    kit.selector('diff', 'Difficulty', { options: () => DIFFICULTIES, get: () => sel.difficulty, set: (v) => { sel.difficulty = v; m.store.saveSel(); }, hidden: tt }),
  ];
  const go = kit.button('go', tt ? 'Start time trial' : kart ? 'Start karting' : 'Start race', null, m.startRace, 'tr-go');
  const items = [grid, ...rows, go];
  useItems(m, items);
  const gb = m.nav.bind(grid, 0);
  const rk = t ? recordKey(t.id, sel.mode) : null;
  const bl = t ? records.getBestLap(rk) : null;
  const br = t ? records.getBestRace(rk, laps) : null;

  return (
    <Screen name="tracksel" cls="tr-left">
      <div className="tr-side">
        <div className="tr-head">
          <BackBtn onBack={m.back} />
          <h2>Choose a track</h2>
          <span className="tr-chip o">{MODE_LABEL[tt ? 'timetrial' : kart ? 'karting' : 'race']}</span>
        </div>
        <div className={cx('tr-trkgrid', gb.focused && 'tr-focus')} onMouseEnter={gb.onMouseEnter} onClick={gb.onClick}>
          {tracks.map((tr, i) => (
            <div
              key={tr.id}
              className={cx('tr-trktile', i === ti && 'sel')}
              onClick={(e) => {
                e.stopPropagation();
                m.nav.focus(0, true);
                if (i === m.trackIndex()) { m.sound('ui-select'); m.startRace(); } else m.setTrack(i);
              }}
            >
              <span className="tr-trknum">{i + 1}</span>
              <span><span className="tr-trkname">{tr.name}</span><br /><Stars n={tr.difficulty} /></span>
            </div>
          ))}
        </div>
        {t ? (
          <div className="tr-card tr-trkdetail">
            <div className="tr-td-desc">{t.description || ''}</div>
            {kart ? <div className="tr-td-kart"><b>Karting</b> Narrow road, equal go-karts, no pickups. Flat out the kart runs wide: ease off the gas to turn in and clip the apex.</div> : null}
            <div className="tr-td-meta">
              <div className="tr-meta"><small>Difficulty</small><b><Stars n={t.difficulty} /></b></div>
              <div className="tr-meta"><small>Length</small><b>{t.lengthLabel || '—'}</b></div>
              <div className="tr-meta"><small>Best lap</small><b className="rec">{bl != null ? fmtTime(bl) : '-:--.--'}</b></div>
              <div className="tr-meta"><small>{'Best race (' + laps + ' laps)'}</small><b className="rec">{br != null ? fmtTime(br) : '-:--.--'}</b></div>
            </div>
          </div>
        ) : null}
        <div className="tr-bottom">
          <div className="tr-rows tr-cells">{rows.map((it, k) => <Item key={it.id} it={it} i={k + 1} nav={m.nav} />)}</div>
          <div><Item it={go} i={4} nav={m.nav} /></div>
        </div>
      </div>
      <Hints list={[[['←', '↑', '↓', '→'], 'Choose / adjust'], [['ENTER'], 'Start'], [['ESC'], 'Back']]} />
    </Screen>
  );
}

// ================================================================ options
function Options({ m, kit, bump }) {
  const { settings, store } = m;
  const set = (key) => (v) => { settings[key] = v; m.emitSettings(); };
  const onOff = () => [{ value: false, label: 'Off' }, { value: true, label: 'On' }];
  const auto = kit.selector('auto', 'Auto accelerate', { options: onOff, get: () => store.getSettings().autoGas, set: (v) => set('autoGas')(!!v), cls: 'tr-if-touch' });
  auto.skip = () => !isTouch(); // touch controls only: gas is applied automatically
  const items = [
    kit.slider('master', 'Master volume', { get: () => settings.masterVolume, set: set('masterVolume') }),
    kit.slider('music', 'Music volume', { get: () => settings.musicVolume, set: set('musicVolume') }),
    kit.slider('sfx', 'Effects volume', { get: () => settings.sfxVolume, set: set('sfxVolume') }),
    kit.selector('quality', 'Graphics quality', {
      options: () => [{ value: 'low', label: 'Low' }, { value: 'medium', label: 'Medium' }, { value: 'high', label: 'High' }],
      get: () => settings.quality,
      set: set('quality'),
    }),
    kit.selector('view', 'Camera view', {
      options: () => [{ value: 'close', label: 'Close' }, { value: 'medium', label: 'Medium' }, { value: 'far', label: 'Far' }],
      get: () => store.getSettings().cameraView,
      set: set('cameraView'),
    }),
    kit.selector('shake', 'Camera shake', { options: onOff, get: () => settings.cameraShake, set: set('cameraShake') }),
    auto,
    kit.text('name', 'Driver name', { get: () => settings.playerName, set: m.setPlayerName }),
  ];
  const back = kit.button('back', 'Back', null, () => m.backs.options(), 'tr-small');
  back.click = () => { m.sound('ui-back'); m.backs.options(); };
  useItems(m, [...items, back]);
  return (
    <Screen name="options" cls="tr-center">
      <div className="tr-mid">
        <div className="tr-head"><BackBtn onBack={m.back} /><h2>Options</h2></div>
        <div className="tr-card"><div className="tr-rows">
          {items.map((it, i) => <Item key={it.id} it={it} i={i} nav={m.nav} sound={m.sound} bump={bump} />)}
        </div></div>
        <div className="tr-foot-row"><Item it={back} i={items.length} nav={m.nav} /></div>
      </div>
      <Hints list={[[['↑', '↓'], 'Select'], [['←', '→'], 'Adjust'], [['ESC'], 'Back']]} />
    </Screen>
  );
}

// ================================================================ controls
const K = ({ keys }) => (
  <span className="k">{keys.map((k, i) => (k === '/' ? <em key={i}>or</em> : <i className="tr-key" key={i}>{k}</i>))}</span>
);
const KEY_ROWS = [
  [['↑', '←', '↓', '→', '/', 'W', 'A', 'S', 'D'], 'Drive: accelerate, steer, brake / reverse'],
  [['SHIFT', '/', 'B'], 'Handbrake — kick the tail out and drift'],
  [['SPACE', '/', 'X'], 'Use the item you are holding'],
  [['C'], 'Change camera'],
  [['R'], 'Reset car to the track'],
  [['ESC', '/', 'P'], 'Pause'],
  [['M'], 'Mute sound'],
  [null, 'Karting: flat out the kart runs wide — ease off the gas to turn in'],
];
const TOUCH_ROWS = [
  [['◀', '▶'], 'Steer — slide your left thumb between the two'],
  [['GAS', 'BRAKE'], 'Accelerate, brake / reverse'],
  [['DRIFT'], 'Handbrake — kick the tail out and drift'],
  [['ITEM'], 'Use the item you are holding (or tap the item slot)'],
  [['❚❚', '/', '◉', '/', '↺'], 'Pause, change camera, reset car to the track'],
  [null, '“Auto accelerate” in Options drives for you: just steer, brake and drift'],
  [null, 'Karting: the gas is always yours — ease off it to turn in'],
];

function Controls({ m, kit }) {
  const back = kit.button('back', 'Got it', null, () => m.backs.controls(), 'tr-small');
  useItems(m, [back]);
  const keyRows = (rows) => rows.map(([k, t]) => [
    k ? <K key={t + 'k'} keys={k} /> : <span className="k" key={t + 'k'}><em>Tip</em></span>,
    <span key={t}>{t}</span>,
  ]);
  return (
    <Screen name="controls" cls="tr-center">
      <div className="tr-mid">
        <div className="tr-head"><BackBtn onBack={m.back} /><h2>Controls</h2></div>
        <div className="tr-cols">
          <div className="tr-card"><h3>Driving</h3>
            <div className="tr-keys tr-if-keys">{keyRows(KEY_ROWS)}</div>
            <div className="tr-keys tr-if-touch">{keyRows(TOUCH_ROWS)}</div>
          </div>
          <div className="tr-card"><h3>Pickups</h3><div className="tr-items">
            {(m.items || []).length ? m.items.map((it) => (
              <div className="tr-item" key={it.id || it.name}>
                <span className="tr-item-ic">{it.icon || '?'}</span>
                <span><b>{it.name}</b><small>{it.description || ''}</small></span>
              </div>
            )) : <small>Smash a crate to grab a random item.</small>}
          </div></div>
        </div>
        {MULTIPLAYER ? <div className="tr-note"><b>Multiplayer:</b> host a room and share the code or link; empty seats are bots.</div> : null}
        <div className="tr-foot-row"><Item it={back} i={0} nav={m.nav} /></div>
      </div>
      <Hints list={[[['ENTER'], 'Back'], [['ESC'], 'Back']]} />
    </Screen>
  );
}

// ================================================================ multiplayer: name / host / join
function Multiplayer({ m, kit }) {
  const { mp } = m;
  const name = kit.text('name', 'Driver name', { get: () => m.settings.playerName, set: m.setPlayerName });
  const host = kit.button('host', 'Host a game', 'Open a room, share the code', () => m.mpToCar('host'));
  const code = kit.text('code', 'Room code', {
    get: () => mp.code,
    set: m.setCode,
    maxLength: 80, // room for a pasted join link; cleanCode() cuts it down to the 4 letters
    live: true,
    onSubmit: m.mpSubmitJoin,
    cls: 'tr-code',
    placeholder: '····',
    capitalize: 'characters',
    enterHint: 'go',
  });
  const join = kit.button('join', 'Join a game', 'Enter the code, pick a car', m.mpSubmitJoin);
  const back = kit.button('back', 'Back', null, () => m.backs.mp(), 'tr-small');
  const cancel = kit.button('cancel', 'Cancel', null, m.mpCancel, 'tr-small');
  useItems(m, mp.busy ? [cancel] : [name, host, code, join, back]);
  useLayoutEffect(() => {
    m.refs.codeInput = code.input.current;
    return () => { m.refs.codeInput = null; };
  });
  const msg = mp.msg ? (mp.msgErr ? '⚠ ' : '') + mp.msg : '';
  const mpNav = mp.busy ? { bind: () => ({ focused: false }) } : m.nav;
  return (
    <Screen name="mp" cls={cx('tr-left', mp.busy && 'busy')}>
      <div className="tr-side">
        <div className="tr-head"><BackBtn onBack={m.back} /><h2>Multiplayer</h2><span className="tr-chip o">Up to 8</span></div>
        <div className="tr-mp-form">
          <div className="tr-rows"><Item it={name} i={0} nav={mpNav} /></div>
          <div><Item it={host} i={1} nav={mpNav} /></div>
          <div className="tr-mp-or"><span>or join a friend</span></div>
          <div className="tr-rows"><Item it={code} i={2} nav={mpNav} /></div>
          <div><Item it={join} i={3} nav={mpNav} /></div>
          <div className={cx('tr-mp-msg', mp.msg && mp.msgErr && 'err')} role="status">{msg}</div>
          <div className="tr-mp-foot"><Item it={back} i={4} nav={mpNav} /></div>
        </div>
        <div className="tr-card tr-mp-busy">
          <div className="tr-spinner" />
          <div className="tr-mp-busyt"><b>Connecting…</b><small>{mp.busyText}</small></div>
          <div><Item it={cancel} i={0} nav={mp.busy ? m.nav : { bind: () => ({ focused: false }) }} /></div>
        </div>
      </div>
      <Hints list={[[['↑', '↓'], 'Select'], [['ENTER'], 'Confirm'], [['ESC'], 'Back']]} />
    </Screen>
  );
}

// ================================================================ multiplayer: lobby
function copyText(url, node, done) {
  const fallback = () => {
    // no async clipboard (plain-http LAN page, old browser): select the text so the user can copy it
    let ok = false;
    try {
      const r = document.createRange();
      r.selectNodeContents(node);
      const s = window.getSelection();
      s.removeAllRanges();
      s.addRange(r);
      ok = !!(document.execCommand && document.execCommand('copy'));
      if (ok) s.removeAllRanges();
    } catch { ok = false; }
    done(ok);
  };
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(url).then(() => done(true), fallback);
    else fallback();
  } catch { fallback(); }
}

function Lobby({ m, kit }) {
  const { mp, cars, tracks } = m;
  const lb = mp.lobby;
  const st = lb.settings;
  const isHost = !!lb.isHost;
  const touch = isTouch();
  const [copied, setCopied] = useState(null); // { i, ok }
  useEffect(() => {
    if (!copied) return undefined;
    const t = setTimeout(() => setCopied(null), copied.ok ? 1500 : 4000);
    return () => clearTimeout(t);
  }, [copied]);
  const urls = lb.joinUrls.slice(0, MAX_LINKS);
  const copyLink = (i) => {
    const row = document.querySelectorAll('.tr-lb-link span')[i];
    if (!urls[i] || !row) return;
    copyText(urls[i], row, (ok) => setCopied({ i, ok }));
  };

  const link = {
    id: 'link',
    enter: () => copyLink(0),
    click: (e) => {
      const row = e && e.target && e.target.closest ? e.target.closest('.tr-lb-link') : null;
      const i = row ? Array.prototype.indexOf.call(row.parentNode.children, row) : 0;
      m.sound('ui-select');
      copyLink(Math.max(0, i));
    },
    skip: () => !mp.lobby.joinUrls.length,
  };
  const hostRows = [
    kit.selector('track', 'Track', { options: () => tracks.map((t) => ({ value: t.id, label: t.name })), get: () => st.trackId, set: (v) => m.lobbyChange('trackId', v) }),
    kit.selector('laps', 'Laps', { options: () => range(2, 8), get: () => st.laps, set: (v) => m.lobbyChange('laps', v) }),
    kit.selector('diff', 'Difficulty', { options: () => DIFFICULTIES, get: () => st.difficulty, set: (v) => m.lobbyChange('difficulty', v) }),
    kit.selector('bots', 'Bots', {
      options: () => range(0, MAX_SEATS - 1).map((o) => ({ value: o.value, label: o.value ? 'Up to ' + o.value : 'None' })),
      get: () => st.bots,
      set: (v) => m.lobbyChange('bots', v),
    }),
  ];
  const start = kit.button('start', 'Start race', null, m.lobbyStart, 'tr-go');
  const car = kit.button('car', 'Change car', null, m.lobbyChangeCar, 'tr-small');
  const leave = kit.button('leave', 'Leave', null, m.lobbyLeave, 'tr-small');
  // the two small buttons sit side by side
  car.right = () => { m.nav.focus(m.nav.indexOf('leave')); return true; };
  leave.left = () => { m.nav.focus(m.nav.indexOf('car')); return true; };
  const items = isHost ? [link, ...hostRows, start, car, leave] : [link, car, leave];
  useItems(m, items);
  const at = (id) => items.findIndex((x) => x.id === id);
  const off = { bind: () => ({ focused: false }) };
  const lbind = m.nav.bind(link, 0);

  // players: humans, then bots up to the bots setting, then open seats
  const humans = lb.players.slice(0, MAX_SEATS);
  const bots = Math.max(0, Math.min(st.bots | 0, MAX_SEATS - humans.length));
  const total = humans.length + bots;
  const diffLabel = (DIFFICULTIES[st.difficulty] || DIFFICULTIES[1]).label;
  const shown = touch ? Math.min(urls.length, 1) : urls.length;
  const status = lb.status == null ? '' : String(lb.status);
  const trackName = (tracks.find((x) => x.id === st.trackId) || {}).name || '—';
  const seats = [];
  humans.forEach((p, i) => {
    const c = cars.find((x) => x.id === p.carId);
    seats.push(
      <div className={cx('tr-lb-p', p.isYou && 'you')} key={'h' + (p.id || i)}>
        <CarSvg color={c ? c.color : '#8892b8'} />
        <span className="tr-lb-pn"><b>{p.isHost ? <i className="tr-lb-crown" title="Host">♛</i> : null}<span>{p.name || 'Player'}</span></b><small>{c ? c.name : '—'}</small></span>
        {p.isYou ? <span className="tr-lb-tag">You</span> : null}
      </div>,
    );
  });
  for (let i = 0; i < bots; i++) seats.push(<div className="tr-lb-p bot" key={'b' + i}><span className="tr-lb-ic">⚙</span><span className="tr-lb-pn"><b><span>Bot</span></b><small>{diffLabel} AI</small></span></div>);
  for (let i = total; i < MAX_SEATS; i++) seats.push(<div className="tr-lb-p open" key={'o' + i}><span className="tr-lb-pn"><b><span>Open seat</span></b></span></div>);

  return (
    <Screen name="lobby" cls={cx('tr-left', isHost && 'host')}>
      <div className="tr-side">
        <div className="tr-head">
          <h2>Lobby</h2>
          <span className={'tr-chip ' + (isHost ? 'y' : '')}>{isHost ? 'Host' : 'Guest'}</span>
          <span className="tr-lb-status" style={status ? undefined : { display: 'none' }}>{status}</span>
        </div>
        <div className="tr-lb-a">
          <div className="tr-card tr-lb-code">
            <div className="tr-lb-codebox"><small>Room code</small><b>{lb.code || '----'}</b></div>
            <div className="tr-lb-linkwrap">
              <small>{urls.length ? 'Join link' + (shown > 1 ? 's' : '') + (touch ? ' — tap to copy' : ' — click to copy') : 'Share the code with your friends'}</small>
              <div className={cx('tr-lb-links', lbind.focused && 'tr-focus')} onMouseEnter={lbind.onMouseEnter} onClick={lbind.onClick}>
                {urls.map((u, i) => {
                  const c = copied && copied.i === i;
                  return (
                    <div className={cx('tr-lb-link', c && 'copied')} role="button" title="Copy the join link" key={u}>
                      <span>{u.replace(/^https?:\/\//i, '')}</span>
                      <em>{c ? (copied.ok ? 'Copied!' : touch ? 'Selected' : 'Selected — press Ctrl/⌘+C') : 'Copy'}</em>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="tr-card tr-lb-players">
            <h3><span>Starting grid</span><span>{humans.length + (humans.length === 1 ? ' player' : ' players') + (bots ? ' + ' + bots + (bots === 1 ? ' bot' : ' bots') : '') + ' · ' + total + (total === 1 ? ' car' : ' cars')}</span></h3>
            <div className="tr-lb-grid">{seats}</div>
          </div>
        </div>
        <div className="tr-lb-b">
          <div className="tr-rows tr-cells">{hostRows.map((it) => <Item key={it.id} it={it} i={at(it.id)} nav={isHost ? m.nav : off} />)}</div>
          <div className="tr-card tr-lb-guest">
            <div className="tr-td-meta">
              <div className="tr-meta"><small>Track</small><b>{trackName}</b></div>
              <div className="tr-meta"><small>Laps</small><b>{String(st.laps)}</b></div>
              <div className="tr-meta"><small>Difficulty</small><b>{diffLabel}</b></div>
              <div className="tr-meta"><small>Bots</small><b>{st.bots ? 'Up to ' + st.bots : 'None'}</b></div>
            </div>
            <div className="tr-lb-wait">Waiting for host<i>.</i><i>.</i><i>.</i></div>
          </div>
          <div><Item it={start} i={at('start')} nav={isHost ? m.nav : off} /></div>
          <div className="tr-lb-foot">
            <Item it={car} i={at('car')} nav={m.nav} />
            <Item it={leave} i={at('leave')} nav={m.nav} />
          </div>
        </div>
      </div>
      <Hints list={[[['↑', '↓'], 'Select'], [['←', '→'], 'Adjust'], [['ENTER'], 'Confirm'], [['ESC'], 'Leave']]} />
    </Screen>
  );
}

// ================================================================ layer
const SCREENS = { title: Title, main: Main, car: CarSelect, track: TrackSelect, options: Options, controls: Controls, mp: Multiplayer, lobby: Lobby };

export function Menu({ m, kit, bump }) {
  const S = m.visible ? SCREENS[m.current] : null;
  return (
    <div className={cx('tr-layer tr-menu', m.visible && 'on')}>
      {S ? <S key={m.current + ':' + m.seq} m={m} kit={kit} bump={bump} /> : null}
    </div>
  );
}

