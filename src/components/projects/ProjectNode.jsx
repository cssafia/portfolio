import React, { useEffect, useRef, useState } from "react";
import { useInView } from "../../hooks/useInView";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { IMPACT_MS } from "../constellation/constellationConfig";

/**
 * A single dot on the Projects timeline. Needs its own useInView call, so
 * it can't just be inlined in a .map() inside Projects.jsx — hooks can only
 * be called at a component's top level, not inside a loop callback. Reuses
 * the same impact-ripple class as the Hero hub and About portrait.
 */
export default function ProjectNode() {
  const [ref, inView] = useInView({ threshold: 0.5, once: true });
  const reducedMotion = useReducedMotion();
  const [pulse, setPulse] = useState(false);
  const firedRef = useRef(false);

  useEffect(() => {
    if (!inView || firedRef.current || reducedMotion) return;
    firedRef.current = true;
    setPulse(true);
    const timeout = setTimeout(() => setPulse(false), IMPACT_MS);
    return () => clearTimeout(timeout);
  }, [inView, reducedMotion]);

  return (
    <div
      ref={ref}
      className="relative w-3 h-3 rounded-full"
      style={{ background: "var(--accent)", border: "2px solid var(--bg)" }}
    >
      {pulse && <div className="sh-avatar-impact-ring" />}
    </div>
  );
}