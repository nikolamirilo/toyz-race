// Pause overlay and results screen. Their state (visible, options / results data) lives in the overlay models
// created by createOverlays(); the components render it.

import { useLayoutEffect } from 'react';
import { fmtTime, ordinal } from '../util.js';
import { Nav } from './store.js';
import { Item, Hints } from './items.jsx';

export const CHAMPIONSHIP_POINTS = [10, 8, 6, 5, 4, 3, 2, 1];
const cx = (...a) => a.filter(Boolean).join(' ');

/** Models for both overlays. `kit` builds button descriptors. */
export function createOverlays({ handlers, bump }) {
  const h = handlers || {};
  const sound = (n) => { if (h.onUiSound) h.onUiSound(n); };
  const call = (name) => () => { if (h[name]) h[name](); };

  const pause = {
    nav: new Nav({ sound, onChange: bump }),
    visible: false,
    shownAt: 0,
    multi: false,
    /** opts.multiplayer: the race keeps running for everybody, so no "Paused" and no Restart. */
    show(opts) {
      pause.multi = !!(opts && opts.multiplayer);
      pause.visible = true;
      pause.shownAt = performance.now();
      pause.nav.reset(0);
      bump();
    },
    hide() {
      if (!pause.visible) return;
      pause.visible = false;
      bump();
    },
    handleKey(e) {
      if (e.key === 'Escape' || e.key === 'p' || e.key === 'P') {
        if (!e.repeat) {
          sound('ui-back');
          call('onResume')();
        }
        return true;
      }
      return pause.nav.key(e);
    },
    call,
  };

  const results = {
    nav: new Nav({ sound, onChange: bump, horizontal: true }),
    visible: false,
    shownAt: 0,
    data: null,
    seq: 0,
    show(data) {
      results.data = data || {};
      results.visible = true;
      results.shownAt = performance.now();
      results.seq++;
      results.nav.reset(0);
      bump();
    },
    hide() {
      if (!results.visible) return;
      results.visible = false;
      bump();
    },
    handleKey(e) {
      if (e.key === 'Escape') {
        if (!e.repeat) {
          sound('ui-back');
          call(results.data && results.data.multiplayer ? 'onMpLobby' : 'onQuit')();
        }
        return true;
      }
      return results.nav.key(e);
    },
    call,
  };

  return { pause, results };
}

// ------------------------------------------------------------------ pause
export function Pause({ pause, kit }) {
  const multi = pause.multi;
  const items = [
    kit.button('resume', 'Resume', null, pause.call('onResume')),
    kit.button('restart', 'Restart race', null, pause.call('onRestart'), null, { hidden: multi }),
    kit.button('quit', multi ? 'Leave race' : 'Quit to menu', null, pause.call('onQuit')),
  ];
  useLayoutEffect(() => {
    if (pause.visible) pause.nav.setItems(items);
  });
  return (
    <div className={cx('tr-layer tr-pause', pause.visible && 'on')}>
      {pause.visible ? (
        <div className="tr-pause-box">
          <h2>{multi ? 'Menu' : 'Paused'}</h2>
          {items.map((it, i) => (it.hidden ? null : <Item key={it.id} it={it} i={i} nav={pause.nav} />))}
        </div>
      ) : null}
      <Hints list={[[['↑', '↓'], 'Select'], [['ENTER'], 'Confirm'], [['ESC'], 'Resume']]} />
    </div>
  );
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

const delay = (s) => ({ animationDelay: s.toFixed(2) + 's' });

export function Results({ results, kit }) {
  const d = results.data || {};
  const standings = d.standings || [];
  const mode = d.mode || 'race';
  const champ = d.championship || null;
  const multi = d.multiplayer || null; // { isHost }
  const tt = mode === 'timetrial' && !multi;
  const me = standings.find((s) => s.isPlayer);
  const tbl = champ && champ.table ? champ.table.slice().sort((a, b) => b.points - a.points) : null;

  // ---- buttons
  const call = results.call;
  const items = [];
  if (multi) {
    // one way out: back to the room (the integrator answers with showLobby)
    items.push(kit.button('lobby', 'Back to lobby', null, call('onMpLobby'), 'tr-go'));
  } else {
    if (champ && !champ.final) items.push(kit.button('next', 'Next race', null, call('onNextRace'), 'tr-go'));
    if (!champ) items.push(kit.button('again', tt ? 'Try again' : 'Race again', null, call('onRestart'), 'tr-go'));
    items.push(kit.button('menu', champ && champ.final ? 'Back to menu' : 'Menu', null, call('onQuit'), champ && champ.final ? 'tr-go' : ''));
  }
  useLayoutEffect(() => {
    if (results.visible) results.nav.setItems(items);
  });

  // ---- header
  let title;
  if (champ && champ.final) {
    const rank = (tbl || []).findIndex((x) => x.isPlayer) + 1;
    title = rank === 1 ? <em>Champion!</em> : rank > 0 ? <>Championship: <em>{ordinal(rank)}</em></> : 'Championship over';
  } else if (tt) {
    title = <>Time trial <em>done</em></>;
  } else if (me) {
    title = me.position === 1 ? <em>You win!</em> : <>You finished <em>{ordinal(me.position)}</em></>;
  } else {
    title = 'Race results';
  }
  const rec = recordLabel(d.newRecord, mode);

  // ---- standings
  const leader = standings.find((s) => s.finished && s.finishTime != null);
  const leadT = leader ? leader.finishTime : null;
  const pod = (i) => (tbl && tbl[i] ? (
    <div className={cx('tr-pod p' + (i + 1), tbl[i].isPlayer && 'me')}>
      <b>{tbl[i].name}</b><small>{tbl[i].points} pts</small><div>{i + 1}</div>
    </div>
  ) : null);

  return (
    <div className={cx('tr-layer tr-results', results.visible && 'on')}>
      {results.visible ? (
        <div className={cx('tr-res-box', tbl && 'champ')} key={results.seq}>
          <div className="tr-res-head">
            <h2>{title}</h2>
            <div className="tr-res-sub">
              {rec ? <span className="tr-badge">★ {rec}</span> : null}
              <span className="t">{d.trackName || ''}</span>
              {multi ? <span className="tr-chip p">Multiplayer</span>
                : champ ? <span className="tr-chip y">Round {champ.round} / {champ.rounds}</span>
                  : <span className={'tr-chip ' + (tt ? '' : 'o')}>{tt ? 'Time Trial' : 'Single Race'}</span>}
            </div>
          </div>
          <div>{champ && champ.final && tbl ? <div className="tr-podium">{pod(1)}{pod(0)}{pod(2)}</div> : null}</div>
          <div className="tr-res-body">
            <div className="tr-card tr-res-main">
              <table className="tr-table">
                <thead><tr>
                  <th>Pos</th><th>Driver</th><th className="c">Car</th><th className="r">{tt ? 'Total' : 'Time / gap'}</th><th className="r">Best lap</th>
                  {champ ? <th className="r">Pts</th> : null}
                </tr></thead>
                <tbody>
                  {standings.map((s, i) => {
                    const pos = s.position || i + 1;
                    let time;
                    if (!s.finished || s.finishTime == null) time = 'DNF';
                    else if (pos === 1 || leadT == null || s === leader) time = fmtTime(s.finishTime);
                    else time = '+' + fmtTime(Math.max(0, s.finishTime - leadT));
                    return (
                      <tr className={s.isPlayer ? 'me' : ''} style={delay(i * 0.05)} key={(s.id != null ? s.id : '') + ':' + i}>
                        <td>{ordinal(pos)}</td>
                        <td className="n">{s.name}{multi && (s.isHuman || s.isPlayer) ? <i className="tr-hum" title="Human driver">{s.isPlayer ? 'You' : 'Human'}</i> : null}</td>
                        <td className="c">{s.carName || (s.car && s.car.def && s.car.def.name) || ''}</td>
                        <td className="r">{time}</td>
                        <td className="r">{fmtTime(s.bestLap)}</td>
                        {champ ? <td className="r pts">+{CHAMPIONSHIP_POINTS[pos - 1] || 0}</td> : null}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="tr-card tr-res-champ" style={tbl ? undefined : { display: 'none' }}>
              {tbl ? (
                <>
                  <h3>{champ.final ? 'Final standings' : 'Championship'}<span>Pts</span></h3>
                  <table className="tr-table"><tbody>
                    {tbl.map((x, i) => (
                      <tr className={x.isPlayer ? 'me' : ''} style={delay(0.15 + i * 0.05)} key={x.name + i}>
                        <td>{ordinal(i + 1)}</td><td className="n">{x.name}</td><td className="r pts">{x.points}</td>
                      </tr>
                    ))}
                  </tbody></table>
                </>
              ) : null}
            </div>
          </div>
          <div className="tr-res-btns">{items.map((it, i) => <Item key={it.id} it={it} i={i} nav={results.nav} />)}</div>
        </div>
      ) : null}
      <Hints list={[[['←', '→'], 'Select'], [['ENTER'], 'Confirm']]} />
    </div>
  );
}
