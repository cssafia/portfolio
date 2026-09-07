// src/components/sections/Skills.jsx
import React from "react";
import { skillClusters } from "../../data/skills";
import SkillCluster from "../skills/SkillCluster";
import Reveal from "../common/Reveal";
import {useReducedMotion} from "../../hooks/useReducedMotion";

// Faint decorative dot-and-line clusters, purely ambient — not tied to real data.
function AmbientDots({ className, points }) {
  return (
    <svg className={`absolute pointer-events-none opacity-30 ${className}`} width="160" height="140" viewBox="0 0 160 140">
      {points.map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--line)" strokeWidth="1" />
      ))}
      {points.flatMap((p, i) => [
        <circle key={`a${i}`} cx={p[0]} cy={p[1]} r="2.5" fill="var(--node-border)" />,
        <circle key={`b${i}`} cx={p[2]} cy={p[3]} r="2.5" fill="var(--node-border)" />,
      ])}
    </svg>
  );
}

export default function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <AmbientDots className="hidden md:block top-10 left-4" points={[[10, 90, 60, 40], [60, 40, 40, 10]]} />
      <AmbientDots className="hidden md:block bottom-6 right-4" points={[[100, 20, 140, 70], [140, 70, 110, 120]]} />

      <div className="max-w-2xl mx-auto px-6 text-center mb-16 relative">
        <Reveal trigger="inView">
          <p className="text-sm tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3">
            skills &bull; toolkit
          </p>
        </Reveal>
        <Reveal trigger="inView">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)]">
            My <span className="text-[var(--accent)]">Toolkit</span>
          </h2>
        </Reveal>
        <Reveal trigger="inView">
          <p className="mt-4 text-[var(--text-muted)]">
            Technologies I use to turn ideas into real products.
          </p>
        </Reveal>
      </div>

      <div className="relative flex flex-wrap justify-center gap-x-12 gap-y-14 px-6 max-w-5xl mx-auto">
        {skillClusters.map((cluster, i) => (
          <Reveal key={cluster.id} trigger="inView" delay={prefersReducedMotion ? 0 : i * 0.12}>
            <SkillCluster label={cluster.label} layout={cluster.layout} nodes={cluster.nodes} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}