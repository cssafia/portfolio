import React from "react";
import Reveal from "./Reveal";

/**
 * Entrance (opacity/translateY, via Reveal) and hover (lift/shadow) live on
 * two separate elements — both animate `transform`, and stacking them on one
 * element would mean one CSS `transition` declaration silently overriding
 * the other.
 */
export default function PillarCard({ pillar, delay }) {
  const { title, description, Icon } = pillar;

  return (
    <Reveal as="div" trigger="inView" delay={delay}>
      <div
        className="group h-full p-6 rounded-2xl border border-border bg-surface
                   transition-all duration-300 hover:-translate-y-1 hover:shadow-lg
                   hover:[border-color:var(--accent)]"
      >
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-4
                     transition-transform duration-300 group-hover:scale-105"
          style={{ background: "var(--node-fill)", border: "1.5px solid var(--node-border)" }}
        >
          <Icon size={20} style={{ color: "var(--node-icon)" }} />
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {description}
        </p>
      </div>
    </Reveal>
  );
}