// Pause overlay and results screen.

import { el, esc, fmtTime, ordinal } from './util.js';
import { createNav, button } from './nav.js';

export const CHAMPIONSHIP_POINTS = [10, 8, 6, 5, 4, 3, 2, 1];

function hintBar(list) {
  return '<div class="tr-hints">' + list.map(([k, t]) => '<span>' + k.map((x) => '<i class="tr-key">' + x + '</i>').join('') + esc(t) + '</span>').join('') + '</div>';
}

// ------------------------------------------------------------------ pause
export function createPause(root, handlers) {
  const h = handlers || {};
  const sound = (n) => { if (h.onUiSound) h.onUiSound(n); };
  const node = el('div', 'tr-layer tr-pause',
    '<div class="tr-pause-box"><h2 data-r="title">Paused</h2></div>' +
    hintBar([[['↑', '↓'], 'Select'], [['ENTER'], 'Confirm'], [['ESC'], 'Resume']]));
  root.appendChild(node);
  const box = node.querySelector('.tr-pause-box');
  const nav = createNav({ sound });
  const call = (name) => () => { if (h[name]) h[name](); };
  const titleEl = node.querySelector('[data-r="title"]');
  const restartItem = button('Restart race', null, call('onRestart'));
  const quitItem = button('Quit to menu', null, call('onQuit'));
  const items = [button('Resume', null, call('onResume')), restartItem, quitItem];
  items.forEach((it) => box.appendChild(it.el));
  restartItem.skip = () => restartItem.el.style.display === 'none';
  let visible = false;
  let shownAt = 0;

  return {
    node,
    /** opts.multiplayer: the race keeps running for everybody, so no "Paused" and no Restart. */
    show(opts) {
      const multi = !!(opts && opts.multiplayer);
      titleEl.textContent = multi ? 'Menu' : 'Paused';
      restartItem.el.style.display = multi ? 'none' : '';
      quitItem.setLabel(multi ? 'Leave race' : 'Quit to menu');
      visible = true;
      shownAt = performance.now();
      node.classList.add('on');
      nav.set(items, 0);
    },
    hide() {
      visible = false;
      node.classList.remove('on');
    },
    handleKey(e) {
      if (e.key === 'Escape' || e.key === 'p' || e.key === 'P') {
        if (!e.repeat) {
          sound('ui-back');
          if (h.onResume) h.onResume();
        }
        return true;
      }
      return nav.key(e);
    },
    get visible() { return visible; },
    get shownAt() { return shownAt; },
    destroy() { node.remove(); },
  };
}

// ------------------------------------------------------------------ results
function recordLabel(newRecord, mode) {
  if (!newRecord) return '';
  if (typeof newRecord === 'string') return newRecord;
  if (typeof newRecord === 'object') {
    const lap = newRecord.lap || newRecord.bestLap;
    const race = newRecord.race || newRecord.bestRace;
    if (lap && race) return 'New lap + race record!';
    if (lap) return 'New lap record!';
    if (race) return 'New race record!';
  }
  return mode === 'timetrial' ? 'New best lap!' : 'New record!';
}

export function createResults(root, handlers) {
  const h = handlers || {};
  const sound = (n) => { if (h.onUiSound) h.onUiSound(n); };
  const node = el('div', 'tr-layer tr-results',
    '<div class="tr-res-box">' +
    '<div class="tr-res-head"><h2 data-r="title"></h2><div class="tr-res-sub" data-r="sub"></div></div>' +
    '<div data-r="podium"></div>' +
    '<div class="tr-res-body"><div class="tr-card tr-res-main" data-r="main"></div><div class="tr-card tr-res-champ" data-r="champ"></div></div>' +
    '<div class="tr-res-btns" data-r="btns"></div>' +
    '</div>' +
    hintBar([[['←', '→'], 'Select'], [['ENTER'], 'Confirm']]));
  root.appendChild(node);
  const r = (k) => node.querySelector('[data-r="' + k + '"]');
  const nav = createNav({ sound, horizontal: true });
  let visible = false;
  let shownAt = 0;
  let escAction = null;

  function show(data) {
    const d = data || {};
    const standings = d.standings || [];
    const mode = d.mode || 'race';
    const champ = d.championship || null;
    const multi = d.multiplayer || null; // { isHost }
    const tt = mode === 'timetrial' && !multi;
    const me = standings.find((s) => s.isPlayer);

    // ---- header
    let title;
    if (champ && champ.final) {
      const tbl = (champ.table || []).slice().sort((a, b) => b.points - a.points);
      const rank = tbl.findIndex((x) => x.isPlayer) + 1;
      title = rank === 1 ? '<em>Champion!</em>' : rank > 0 ? 'Championship: <em>' + ordinal(rank) + '</em>' : 'Championship over';
    } else if (tt) {
      title = 'Time trial <em>done</em>';
    } else if (me) {
      title = me.position === 1 ? '<em>You win!</em>' : 'You finished <em>' + ordinal(me.position) + '</em>';
    } else {
      title = 'Race results';
    }
    r('title').innerHTML = title;
    const rec = recordLabel(d.newRecord, mode);
    r('sub').innerHTML =
      (rec ? '<span class="tr-badge">★ ' + esc(rec) + '</span>' : '') +
      '<span class="t">' + esc(d.trackName || '') + '</span>' +
      (multi ? '<span class="tr-chip p">Multiplayer</span>' : champ ? '<span class="tr-chip y">Round ' + esc(champ.round) + ' / ' + esc(champ.rounds) + '</span>' : '<span class="tr-chip ' + (tt ? '' : 'o') + '">' + (tt ? 'Time Trial' : 'Single Race') + '</span>');

    // ---- standings table
    const leader = standings.find((s) => s.finished && s.finishTime != null);
    const leadT = leader ? leader.finishTime : null;
    let html = '<table class="tr-table"><thead><tr><th>Pos</th><th>Driver</th><th class="c">Car</th><th class="r">' + (tt ? 'Total' : 'Time / gap') + '</th><th class="r">Best lap</th>' + (champ ? '<th class="r">Pts</th>' : '') + '</tr></thead><tbody>';
    standings.forEach((s, i) => {
      const pos = s.position || i + 1;
      let time;
      if (!s.finished || s.finishTime == null) time = 'DNF';
      else if (pos === 1 || leadT == null || s === leader) time = fmtTime(s.finishTime);
      else time = '+' + fmtTime(Math.max(0, s.finishTime - leadT));
      html += '<tr class="' + (s.isPlayer ? 'me' : '') + '" style="animation-delay:' + (i * 0.05).toFixed(2) + 's">' +
        '<td>' + ordinal(pos) + '</td>' +
        '<td class="n">' + esc(s.name) + (multi && (s.isHuman || s.isPlayer) ? '<i class="tr-hum" title="Human driver">' + (s.isPlayer ? 'You' : 'Human') + '</i>' : '') + '</td>' +
        '<td class="c">' + esc(s.carName || (s.car && s.car.def && s.car.def.name) || '') + '</td>' +
        '<td class="r">' + time + '</td>' +
        '<td class="r">' + fmtTime(s.bestLap) + '</td>' +
        (champ ? '<td class="r pts">+' + (CHAMPIONSHIP_POINTS[pos - 1] || 0) + '</td>' : '') +
        '</tr>';
    });
    r('main').innerHTML = html + '</tbody></table>';

    // ---- championship table / podium
    const champEl = r('champ');
    const podEl = r('podium');
    podEl.innerHTML = '';
    node.querySelector('.tr-res-box').classList.toggle('champ', !!(champ && champ.table));
    if (champ && champ.table) {
      const tbl = champ.table.slice().sort((a, b) => b.points - a.points);
      champEl.style.display = '';
      champEl.innerHTML = '<h3>' + (champ.final ? 'Final standings' : 'Championship') + '<span>Pts</span></h3><table class="tr-table"><tbody>' +
        tbl.map((x, i) => '<tr class="' + (x.isPlayer ? 'me' : '') + '" style="animation-delay:' + (0.15 + i * 0.05).toFixed(2) + 's"><td>' + ordinal(i + 1) + '</td><td class="n">' + esc(x.name) + '</td><td class="r pts">' + esc(x.points) + '</td></tr>').join('') +
        '</tbody></table>';
      if (champ.final) {
        const pod = (i) => (tbl[i] ? '<div class="tr-pod p' + (i + 1) + (tbl[i].isPlayer ? ' me' : '') + '"><b>' + esc(tbl[i].name) + '</b><small>' + esc(tbl[i].points) + ' pts</small><div>' + (i + 1) + '</div></div>' : '');
        podEl.innerHTML = '<div class="tr-podium">' + pod(1) + pod(0) + pod(2) + '</div>';
      }
    } else {
      champEl.style.display = 'none';
      champEl.innerHTML = '';
    }

    // ---- buttons
    const btns = r('btns');
    btns.innerHTML = '';
    const call = (name) => () => { if (h[name]) h[name](); };
    const items = [];
    if (multi) {
      // one way out: back to the room (the integrator answers with showLobby)
      items.push(button('Back to lobby', null, call('onMpLobby'), 'tr-go'));
    } else {
      if (champ && !champ.final) items.push(button('Next race', null, call('onNextRace'), 'tr-go'));
      if (!champ) items.push(button(tt ? 'Try again' : 'Race again', null, call('onRestart'), 'tr-go'));
      items.push(button(champ && champ.final ? 'Back to menu' : 'Menu', null, call('onQuit'), champ && champ.final ? 'tr-go' : ''));
    }
    items.forEach((it) => btns.appendChild(it.el));
    escAction = call(multi ? 'onMpLobby' : 'onQuit');

    visible = true;
    shownAt = performance.now();
    node.classList.add('on');
    nav.set(items, 0);
  }

  return {
    node,
    show,
    hide() {
      visible = false;
      node.classList.remove('on');
    },
    handleKey(e) {
      if (e.key === 'Escape') {
        if (!e.repeat && escAction) {
          sound('ui-back');
          escAction();
        }
        return true;
      }
      return nav.key(e);
    },
    get visible() { return visible; },
    get shownAt() { return shownAt; },
    destroy() { node.remove(); },
  };
}
