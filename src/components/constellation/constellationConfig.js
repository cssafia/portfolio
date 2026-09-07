export const ENTRANCE_START = 0.3;
export const ENTRANCE_STAGGER = 0.12;

export function nodeDelay(i) {
  return ENTRANCE_START + i * ENTRANCE_STAGGER;
}
export function entranceMs(count) {
  return (ENTRANCE_START + count * ENTRANCE_STAGGER + 0.3) * 1000;
}

export function driftDelay(i, ambientStartSec) {
  return ambientStartSec + i * 0.4;
}

export const TRAVEL_MS = 1100;
export const PAUSE_MS = 450;
export const CYCLE_MS = TRAVEL_MS + PAUSE_MS;
export const IMPACT_MS = 380;

// débordement réduit (-3% au lieu de -6%) pour éviter que les badges du
// bord ne se fassent couper par l'overflow-hidden sur mobile
export const BADGE_POSITIONS = {
  react:      { top: "3%",   left: "8%" },
  nodejs:     { top: "2%",   right: "8%" },
  flutter:    { top: "42%",  right: "-3%" },
  git:        { bottom: "6%", right: "10%" },
  javascript: { bottom: "-2%", left: "40%" },
  mongodb:    { top: "44%",  left: "-3%" },
};