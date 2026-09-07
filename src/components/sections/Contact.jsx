import React, { useState, useMemo } from "react";
import { Mail } from "lucide-react";
import { contactLinks } from "../../data/siteContent";
import Reveal from "../common/Reveal";

// --- Constellation Background Helper ---
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateNetwork({ width, height, count, seed, maxLinkDist }) {
  const rand = mulberry32(seed);
  const points = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: rand() * width,
    y: rand() * height,
  }));
  const links = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const dist = Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y);
      if (dist < maxLinkDist) links.push({ a: points[i], b: points[j], dist });
    }
  }
  return { points, links };
}

function ConstellationBackground({
  width = 1200,
  height = 800,
  count = 26,
  seed = 7,
  maxLinkDist = 200,
  className = "",
}) {
  const { points, links } = useMemo(
    () => generateNetwork({ width, height, count, seed, maxLinkDist }),
    [width, height, count, seed, maxLinkDist]
  );

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {links.map(({ a, b, dist }) => (
        <line
          key={`bg-link-${a.id}-${b.id}`}
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          stroke="var(--line)"
          strokeWidth={1}
          opacity={Math.max(0.12, 0.5 - dist / maxLinkDist)}
        />
      ))}
      {points.map((p) => (
        <circle
          key={`bg-dot-${p.id}`}
          cx={p.x}
          cy={p.y}
          r={2}
          fill="var(--node-border)"
          opacity={0.4}
        />
      ))}
    </svg>
  );
}

// --- Orbit Dimensions ---
const VB = 400;
const CENTER = VB / 2; // 200
const RADIUS = 135;

export default function Contact() {
  const [hoveredId, setHoveredId] = useState(null);
  const count = contactLinks.length;

  const positions = contactLinks.map((_, i) => {
    const angle = -90 + (360 / count) * i;
    const rad = (angle * Math.PI) / 180;
    return {
      x: CENTER + RADIUS * Math.cos(rad),
      y: CENTER + RADIUS * Math.sin(rad),
    };
  });

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden bg-[var(--bg)] transition-colors duration-300">
      <ConstellationBackground className="absolute inset-0 w-full h-full opacity-50" />

      <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
        
        {/* Text column */}
        <div className="md:flex-1 text-center md:text-left z-10">
          <Reveal trigger="inView">
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[var(--text-muted)] mb-3">
              CONTACT &bull;
            </p>
          </Reveal>
          
          <Reveal trigger="inView">
            <h2 className="text-4xl sm:text-5xl font-semibold text-[var(--text)] inline-flex items-center gap-3">
              Let's <span className="text-[var(--accent)]">Connect</span>
            </h2>
          </Reveal>
          
          <Reveal trigger="inView">
            <p className="mt-4 text-[var(--text-muted)] max-w-md mx-auto md:mx-0 leading-relaxed text-base">
              Have a project in mind, a question or just want to say hi? I'd love to hear from you.
            </p>
          </Reveal>
          
          <Reveal trigger="inView">
            <div className="w-12 h-1 rounded-full bg-[var(--accent)] mt-6 mx-auto md:mx-0" />
          </Reveal>
        </div>

        {/* Orbit Column (Strictly Centered on Mobile/Tablet, Identical on Desktop) */}
        <Reveal trigger="inView" className="z-10 w-full md:w-auto flex justify-center items-center">
          <div className="relative w-[400px] h-[400px] shrink-0 select-none scale-[0.75] min-[400px]:scale-[0.88] sm:scale-100 origin-center transition-transform -my-10 sm:my-0">
            
            <svg width={VB} height={VB} className="absolute inset-0 overflow-visible pointer-events-none">
              <circle
                cx={CENTER}
                cy={CENTER}
                r={RADIUS}
                stroke="var(--line)"
                strokeWidth="1"
                strokeDasharray="4 4"
                opacity="0.3"
                fill="none"
              />

              <circle
                cx={CENTER}
                cy={CENTER}
                r={58}
                stroke="var(--line)"
                strokeWidth="1"
                opacity="0.25"
                fill="none"
              />
              {positions.map((pos, i) => {
                const active = hoveredId === contactLinks[i].id;
                const mid = { x: (CENTER + pos.x) / 2, y: (CENTER + pos.y) / 2 };
                return (
                  <g key={contactLinks[i].id || i}>
                    <line
                      x1={CENTER}
                      y1={CENTER}
                      x2={pos.x}
                      y2={pos.y}
                      stroke={active ? "var(--accent-rose)" : "var(--line)"}
                      strokeWidth={active ? 2 : 1}
                      opacity={active ? 1 : 0.6}
                      className="transition-all duration-300"
                    />
                    <circle
                      cx={mid.x}
                      cy={mid.y}
                      r={active ? 4 : 3}
                      fill={active ? "var(--accent-rose)" : "var(--node-border)"}
                      opacity={active ? 1 : 0.7}
                      className="transition-all duration-300"
                    />
                  </g>
                );
              })}
            </svg>

            {/* Glowing background circle */}
            <div
              className="absolute flex flex-col items-center justify-center pointer-events-none"
              style={{ left: CENTER, top: CENTER, transform: "translate(-50%, -50%)" }}
            >
              <div
                className="rounded-full transition-all duration-500"
                style={{
                  width: 200,
                  height: 200,
                  background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
                  opacity: 0.2,
                  filter: "blur(18px)",
                }}
              />
            </div>

            {/* Central "Say hi" node */}
            <div
              className="absolute flex flex-col items-center justify-center"
              style={{ left: CENTER, top: CENTER, transform: "translate(-50%, -50%)" }}
            >
              <div className="relative rounded-full flex flex-col items-center justify-center bg-[var(--surface)] border border-[var(--border)] shadow-md w-[96px] h-[96px] transition-colors duration-300">
                <Mail size={28} className="text-[var(--accent)]" />
                <span className="text-xs font-medium text-[var(--text)] mt-1">
                  Say hi
                </span>
              </div>
            </div>

            {/* Orbiting contact nodes */}
            {contactLinks.map((link, i) => {
              const isHovered = hoveredId === link.id;
              const Icon = link.Icon;
              return (
                <a
                  key={link.id || i}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => setHoveredId(link.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="absolute flex flex-col items-center group cursor-pointer"
                  style={{
                    left: positions[i].x,
                    top: positions[i].y,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className={`rounded-full flex items-center justify-center bg-[var(--surface)] border shadow-md transition-all duration-300 group-hover:scale-110 ${
                      isHovered
                        ? "border-[var(--accent)] ring-4 ring-[var(--accent)]/15"
                        : "border-[var(--border)]"
                    }`}
                    style={{ width: 72, height: 72 }}
                  >
                    {Icon && <Icon size={30} color={link.color || "var(--accent)"} />}
                  </div>

                  <span className="mt-2 text-xs font-medium text-[var(--text)] transition-colors group-hover:text-[var(--accent)] whitespace-nowrap">
                    {link.label}
                  </span>
                </a>
              );
            })}

          </div>
        </Reveal>

      </div>
    </section>
  );
}