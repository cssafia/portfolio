import React from "react";
import { ArrowRight, FileText } from "lucide-react";
import Constellation from "../constellation/Constellation";
import Annotation from "../common/Annotation";
import Reveal from "../common/Reveal";
import { TECH_STACK, SOCIAL_LINKS } from "../../data/siteContent";
import { BADGE_POSITIONS } from "../constellation/constellationConfig";
import avatarImg from "../../assets/profile2.png";

const BADGES = TECH_STACK.map((tech) => ({ ...tech, position: BADGE_POSITIONS[tech.id] }));

export default function Hero() {
  return (
    <section className="relative z-10 w-full flex items-center justify-center px-5 sm:px-8 lg:px-16 py-12 sm:py-16 md:py-20 min-h-[90svh] overflow-hidden">
      <div className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        
        {/* Text column */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <Reveal as="div" delay={0.1} className="flex items-center justify-center md:justify-start gap-3 mb-3">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)]">
              HI, I'M
            </span>
            <span className="h-px w-10 bg-[var(--line)]" />
          </Reveal>

          <Reveal
            as="h1"
            delay={0.45}
            className="font-semibold text-4xl sm:text-6xl md:text-7xl mb-4 tracking-tight leading-tight"
          >
            <span className="text-[var(--text)]">Safia </span>
            <span className="text-[var(--accent)]">Lounassi</span>
          </Reveal>

          <Reveal as="p" delay={0.65} className="text-lg sm:text-xl font-medium mb-5 text-[var(--text)]">
            Full-Stack Developer
          </Reveal>

          <Reveal
            as="p"
            delay={0.85}
            className="text-base sm:text-lg mb-8 max-w-md mx-auto md:mx-0 text-[var(--text-muted)]"
          >
            I build digital solutions, from concept to real impact, with clean code and a passion for technology.
          </Reveal>

          <Reveal
            as="div"
            delay={1.1}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-5 mb-8"
          >
            {/* Primary Button - View Projects */}
            <button
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-medium transition-transform hover:scale-105 bg-[var(--accent)] text-[var(--bg)] shadow-sm"
            >
              View My Projects
              <ArrowRight size={18} />
            </button>

            <a
              href="/portfolio/safia_lounassi/safia_lounassi_cv.pdf"
              download
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-medium transition-transform hover:scale-105 bg-[var(--surface)] text-[var(--text)] border border-[var(--border)] shadow-sm hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <FileText size={18} />
              Download CV
            </a>
          </Reveal>

          <Reveal as="div" delay={1.3} className="flex items-center justify-center md:justify-start gap-3">
            {SOCIAL_LINKS.map(({ id, label, Icon, href }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--accent])] transition-colors duration-200 shadow-sm"
              >
                <Icon size={18} />
              </a>
            ))}
          </Reveal>
        </div>

        {/* Constellation / Avatar Column */}
        <div className="order-1 md:order-2 flex justify-center items-center w-full pt-4 md:pt-0">
          
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[400px] aspect-square flex items-center justify-center">
            <Constellation avatarSrc={avatarImg} avatarAlt="Portrait of Safia" badges={BADGES} />

            {/* Mobile & Tablet Annotation */}
            <div className="block lg:hidden absolute z-10 max-w-[130px] sm:max-w-[150px] left-0 bottom-0 pointer-events-none">
              <Annotation text="Turning ideas into real products." />
            </div>

            {/* Desktop Annotation */}
            <div className="hidden lg:block absolute z-10 max-w-[160px] top-[32%] -right-28 pointer-events-none">
              <Annotation text="Turning ideas into real products." />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}