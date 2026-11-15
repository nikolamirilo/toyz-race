// In-race HUD markup. The values are written every frame by the controller in ../hud.js, straight to the
// DOM: this component renders once and never again (memo, no props).

import { memo } from 'react';

const ARC = 'M16.7 85 A50 50 0 1 1 103.3 85';

export const Hud = memo(function Hud({ nodeRef, fxRef }) {
  return (
    <>
      <div className="tr-layer tr-hud" ref={nodeRef}>
        <div className="tr-h-pos">
          <span className="tr-h-posn"><span data-r="posn">1</span><sup data-r="poss">st</sup></span>
          <span className="tr-h-post tr-st" data-r="post">/ 8</span>
        </div>
        <div className="tr-h-lap"><small>LAP</small><b data-r="lap">1 / 3</b></div>
        <div className="tr-h-item">
          <span className="tr-h-itemic" data-r="itemic" />
          <span className="tr-h-itemt"><b data-r="itemn">NO ITEM</b><small className="tr-if-keys"><span className="tr-key">SPACE</span>to use</small></span>
        </div>
        <div className="tr-h-times">
          <small>TIME</small><b className="big" data-r="time">0:00.00</b>
          <small>LAP</small><b data-r="lapt">0:00.00</b>
          <small>BEST</small><b className="best" data-r="best">-:--.--</b>
          <small className="dim">LAST</small><b className="dim" data-r="last">-:--.--</b>
        </div>
        <div className="tr-h-map"><canvas /></div>
        <div className="tr-h-speed">
          <svg viewBox="0 0 120 104">
            <defs>
              <linearGradient id="tr-speedgrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#19d3c5" /><stop offset=".6" stopColor="#ffd02e" /><stop offset="1" stopColor="#ff6b1a" />
              </linearGradient>
            </defs>
            <path className="tr-h-arcbg" d={ARC} />
            <path className="tr-h-arcbg2" d={ARC} />
            <path className="tr-h-arc" pathLength="100" d={ARC} />
          </svg>
          <div className="tr-h-kmh"><b data-r="kmh">0</b><small>KM/H</small></div>
          <div className="tr-h-boost">BOOST</div>
        </div>
        <div className="tr-h-wrong">↺ WRONG WAY</div>
      </div>
      {/* countdown + banner live on their own always-on layer so they work even while the HUD is hidden */}
      <div className="tr-layer tr-hud tr-fx on" ref={fxRef}>
        <div className="tr-h-count" />
        <div className="tr-h-flash" />
      </div>
    </>
  );
});
