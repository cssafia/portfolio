import React from "react";
import Reveal from "../common/Reveal";
import PillarCard from "../common/PillarCard";
import Annotation from "../common/Annotation";
import { PILLARS } from "../../data/siteContent";

export default function About() {
  return (
    <section id="about" className="relative z-10 w-full px-5 sm:px-6 py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="relative max-w-6xl mx-auto">
        
        {/* Standardized Eyebrow */}
        <Reveal trigger="inView">
          <p className="text-left text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3">
            ABOUT ME
          </p>
        </Reveal>

        {/* Standardized Title */}
        <Reveal trigger="inView" delay={0.1}>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-12 text-left text-[var(--text)]">
            A little bit about <span className="text-[var(--accent)]">me</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start mb-16">
          <div className="text-left">
            <Reveal as="p" trigger="inView" delay={0.15} className="text-base sm:text-lg mb-4 text-[var(--text-muted)]">
              I'm a Computer Science student at ESI SBA (Higher School of Computer Science), currently in my 4th year specializing in Cybersecurity.
            </Reveal>
            <Reveal as="p" trigger="inView" delay={0.25} className="text-base sm:text-lg text-[var(--text-muted)]">
              I'm a Full-Stack Developer passionate about building digital products, solving real problems, and turning ideas into functional experiences.
            </Reveal>
          </div>

          <Annotation
            text="Always learning, always building."
            align="right"
            className="hidden md:flex md:flex-col md:items-end"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} delay={0.15 * i} />
          ))}
        </div>

      </div>
    </section>
  );
}