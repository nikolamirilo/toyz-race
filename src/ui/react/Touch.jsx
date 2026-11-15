// On-screen touch controls markup. Multi-touch handling and the polled state live in ../touch.js
// (pointer capture, native non-passive listeners); this component renders once (memo, no changing props).

import { memo } from 'react';

const Arrow = ({ flip }) => (
  <svg viewBox="0 0 40 40" aria-hidden="true" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
    <path d="M25 7 L11 20 L25 33" fill="none" stroke="currentColor" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
// gas: stacked chevrons pointing up the pedal; brake: the dashboard brake symbol; drift: a tyre leaving skid marks
const GasIcon = () => (
  <svg viewBox="0 0 40 40" aria-hidden="true">
    <path d="M8 22 L20 10 L32 22 M8 33 L20 21 L32 33" fill="none" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const BrakeIcon = () => (
  <svg viewBox="0 0 40 40" aria-hidden="true">
    <circle cx="20" cy="20" r="10.5" fill="none" stroke="currentColor" strokeWidth="4" />
    <path d="M20 14 V21" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <circle cx="20" cy="26" r="2.2" fill="currentColor" />
    <path d="M6.5 9 A18 18 0 0 0 6.5 31 M33.5 9 A18 18 0 0 1 33.5 31" fill="none" stroke="currentColor" strokeWidth="3.6" strokeLinecap="round" />
  </svg>
);
const DriftIcon = () => (
  <svg viewBox="0 0 40 40" aria-hidden="true">
    <rect x="21" y="5" width="11" height="18" rx="4" fill="currentColor" transform="rotate(28 26.5 14)" />
    <path d="M6 20 C9 30 16 35 26 35 M4 28 C8 35 14 38 20 38" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" />
  </svg>
);
const PauseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="4" width="5" height="16" rx="1.5" fill="currentColor" /><rect x="14" y="4" width="5" height="16" rx="1.5" fill="currentColor" /></svg>
);
const CameraIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 8.5 A2 2 0 0 1 5 6.5 H7.6 L9 4.5 H15 L16.4 6.5 H19 A2 2 0 0 1 21 8.5 V17 A2 2 0 0 1 19 19 H5 A2 2 0 0 1 3 17 Z" fill="currentColor" />
    <circle cx="12" cy="12.6" r="3.6" fill="none" stroke="#0b0f22" strokeWidth="2" />
  </svg>
);
const ResetIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M6.2 8.2 A7.2 7.2 0 1 1 4.8 12.6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    <path d="M3.2 4.2 L6.6 8.8 L11.6 6.4" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Touch = memo(function Touch({ nodeRef }) {
  return (
    <div className="tr-layer tr-tc" ref={nodeRef}>
      <div className="tr-tc-top">
        <div className="tr-tc-sm" data-act="onResetRequest" role="button" aria-label="Reset car to the track"><ResetIcon /></div>
        <div className="tr-tc-sm" data-act="onCameraRequest" role="button" aria-label="Change camera"><CameraIcon /></div>
        <div className="tr-tc-sm" data-act="onPauseRequest" role="button" aria-label="Pause"><PauseIcon /></div>
      </div>
      <div className="tr-tc-btn tr-tc-l" data-tc="left" role="button" aria-label="Steer left"><Arrow /></div>
      <div className="tr-tc-btn tr-tc-r" data-tc="right" role="button" aria-label="Steer right"><Arrow flip /></div>
      <div className="tr-tc-btn tr-tc-drift" data-tc="drift" role="button" aria-label="Handbrake"><DriftIcon /><b>Drift</b></div>
      <div className="tr-tc-btn tr-tc-item empty" data-tc="fire" role="button" aria-label="Use item"><i /><small>Item</small></div>
      <div className="tr-tc-btn tr-tc-brake" data-tc="brake" role="button" aria-label="Brake / reverse"><BrakeIcon /><b>Brake</b></div>
      <div className="tr-tc-btn tr-tc-gas" data-tc="gas" role="button" aria-label="Accelerate"><GasIcon /><b>Gas</b></div>
    </div>
  );
});
