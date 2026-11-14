// Keyboard + gamepad input. Driving keys are only swallowed while `input.capture` is true.
const DRIVE_CODES = new Set([
  'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space',
  'KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyX', 'KeyB', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight',
]);

export function createInput() {
  const down = new Set();
  const pressHandlers = [];
  const FIRE_CODES = new Set(['Space', 'KeyX', 'ControlLeft', 'ControlRight']);
  let fireLatch = false; // a quick tap must survive until a simulation step has seen it
  const input = {
    capture: false,
    onPress(cb) { pressHandlers.push(cb); },
    isDown: (code) => down.has(code),
    clear() { down.clear(); fireLatch = false; },
    consumeFire() { fireLatch = false; },
    read(out) {
      let throttle = 0, steer = 0, handbrake = false, fire = false;
      if (down.has('ArrowUp') || down.has('KeyW')) throttle += 1;
      if (down.has('ArrowDown') || down.has('KeyS')) throttle -= 1;
      if (down.has('ArrowLeft') || down.has('KeyA')) steer += 1;
      if (down.has('ArrowRight') || down.has('KeyD')) steer -= 1;
      if (down.has('ShiftLeft') || down.has('ShiftRight') || down.has('KeyB')) handbrake = true;
      if (down.has('Space') || down.has('KeyX') || down.has('ControlLeft') || down.has('ControlRight')) fire = true;

      const pads = typeof navigator !== 'undefined' && navigator.getGamepads ? navigator.getGamepads() : [];
      for (const pad of pads) {
        if (!pad || !pad.connected) continue;
        const ax = pad.axes[0] || 0;
        if (Math.abs(ax) > 0.15) steer -= ax;
        const b = (i) => (pad.buttons[i] ? pad.buttons[i].value : 0);
        throttle += b(7) - b(6);
        if (b(14) > 0.5) steer += 1;
        if (b(15) > 0.5) steer -= 1;
        if (b(0) > 0.5 || b(1) > 0.5) handbrake = true;
        if (b(2) > 0.5 || b(5) > 0.5) fire = true;
        break;
      }
      out.throttle = Math.max(-1, Math.min(1, throttle));
      out.steer = Math.max(-1, Math.min(1, steer));
      out.handbrake = handbrake;
      out.fire = fire || fireLatch;
      return out;
    },
  };

  window.addEventListener('keydown', (e) => {
    if (input.capture && DRIVE_CODES.has(e.code)) e.preventDefault();
    if (e.repeat) return;
    down.add(e.code);
    if (FIRE_CODES.has(e.code)) fireLatch = true;
    for (const cb of pressHandlers) cb(e.code, e);
  });
  window.addEventListener('keyup', (e) => down.delete(e.code));
  window.addEventListener('blur', () => down.clear());
  return input;
}
