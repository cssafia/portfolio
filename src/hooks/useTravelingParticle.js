import { useEffect, useRef, useState } from "react";
import { TRAVEL_MS, CYCLE_MS, IMPACT_MS } from "../components/constellation/constellationConfig";

/**
 * Animates a dot traveling along one segment at a time, cycling through
 * `targets`. Generic over from/to pairs so it works for a radial hub layout
 * (Hero) or a sequential chain layout (future About timeline) alike.
 *
 * Also reports `impactedId` — the id of the target node during the brief
 * window right after the particle arrives, so the node can react (ripple,
 * glow) instead of the particle just silently vanishing.
 *
 * @param {{id:string, from:{x,y}, to:{x,y}}[]} targets
 * @returns {{ particle: {x,y,opacity}|null, impactedId: string|null }}
 */
export function useTravelingParticle({ targets, startDelayMs = 0, disabled = false }) {
  const [particle, setParticle] = useState(null);
  const [impactedId, setImpactedId] = useState(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (disabled || !targets || targets.length === 0) return undefined;

    const timer = setTimeout(() => {
      const start = performance.now();

      const tick = (now) => {
        const elapsed = now - start;
        const total = elapsed % (CYCLE_MS * targets.length);
        const index = Math.floor(total / CYCLE_MS);
        const within = total % CYCLE_MS;
        const segment = targets[index];

        if (within <= TRAVEL_MS && segment) {
          const t = within / TRAVEL_MS;
          const eased = 1 - Math.pow(1 - t, 2);
          const x = segment.from.x + (segment.to.x - segment.from.x) * eased;
          const y = segment.from.y + (segment.to.y - segment.from.y) * eased;
          const opacity = t < 0.08 ? t / 0.08 : t > 0.85 ? (1 - t) / 0.15 : 1;
          setParticle({ x, y, opacity });
          setImpactedId(null);
        } else if (segment && within <= TRAVEL_MS + IMPACT_MS) {
          setParticle(null);
          setImpactedId(segment.id);
        } else {
          setParticle(null);
          setImpactedId(null);
        }
        rafRef.current = requestAnimationFrame(tick);
      };

      rafRef.current = requestAnimationFrame(tick);
    }, startDelayMs);

    return () => {
      clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [targets, startDelayMs, disabled]);

  return { particle, impactedId };
}