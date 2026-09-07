import React, { useMemo } from "react";
import { nodeDelay, driftDelay, entranceMs } from "./constellationConfig";

function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function generateNetwork({ size, count, seed, maxLinkDist }) {
  const rand = mulberry32(seed);
  const points = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: rand() * size,
    y: rand() * size,
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

export function ConstellationBackground({
  width = 1200,
  height = 800,
  count = 28,
  seed = 7,
  maxLinkDist = 220,
  className = "",
}) {
  const { points, links } = useMemo(
    () => generateNetwork({ size: Math.max(width, height), count, seed, maxLinkDist }),
    [width, height, count, seed, maxLinkDist]
  );

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {/* Network Connecting Lines */}
      {links.map(({ a, b, dist }) => (
        <line
          key={`bg-link-${a.id}-${b.id}`}
          x1={a.x}
          y1={a.y}
          x2={b.x}
          y2={b.y}
          stroke="var(--line)"
          strokeWidth={1.2}
          opacity={Math.max(0.25, 0.75 - dist / maxLinkDist)}
        />
      ))}

      {/* Network Node Dots */}
      {points.map((p) => (
        <g key={`bg-dot-${p.id}`}>
          <circle cx={p.x} cy={p.y} r={4} fill="var(--line)" opacity={0.3} />
          <circle cx={p.x} cy={p.y} r={2} fill="var(--node-border)" opacity={0.85} />
        </g>
      ))}
    </svg>
  );
}

export default function Constellation({
  background = true,
  avatarSrc,
  avatarAlt = "Portrait",
  badges = [],
  backgroundCount = 26,
  backgroundSeed = 11,
  className = "",
}) {
  const { points, links } = useMemo(
    () => generateNetwork({ size: 600, count: backgroundCount, seed: backgroundSeed, maxLinkDist: 220 }),
    [backgroundCount, backgroundSeed]
  );
  const ambientStart = entranceMs(badges.length) / 1000;
  const hasOrbitContent = Boolean(avatarSrc) || badges.length > 0;

  return (
    <div className={`relative w-full h-full flex items-center justify-center ${className}`}>
      {background && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 600 600"
            preserveAspectRatio="xMidYMid slice"
            className="w-full h-full select-none opacity-70"
            aria-hidden="true"
          >
            {links.map(({ a, b, dist }) => (
              <line
                key={`l-${a.id}-${b.id}`}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="var(--line)"
                strokeWidth={1}
                opacity={Math.max(0.12, 1 - dist / 220)}
              />
            ))}
            {points.map((p) => (
              <circle key={`d-${p.id}`} cx={p.x} cy={p.y} r={2.5} fill="var(--line)" />
            ))}
          </svg>
        </div>
      )}

      {hasOrbitContent && (
        /* Reduced container width on desktop: max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] */
        <div className="relative mx-auto aspect-square w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[320px] flex items-center justify-center overflow-visible">
          {avatarSrc && (
            <div
              className="relative rounded-full overflow-hidden z-10"
              style={{
                width: "44%",
                aspectRatio: "1 / 1",
                border: "4px solid #ffffff",
                boxShadow:
                  "0 0 0 2px var(--accent), 0 0 35px 8px color-mix(in srgb, var(--accent) 45%, transparent)",
              }}
            >
              <img src={avatarSrc} alt={avatarAlt} className="w-full h-full object-fill" />
            </div>
          )}

          {badges.map((badge, i) => {
            const { id, label, Icon, color, position } = badge;
            return (
              <div
                key={id}
                className="sh-node-pop absolute flex items-center justify-center rounded-full bg-white shadow-md"
                style={{ width: "20%", aspectRatio: "1 / 1", ...position, animationDelay: `${nodeDelay(i)}s` }}
                title={label}
              >
                <span
                  className="sh-node-drift flex items-center justify-center w-full h-full"
                  style={{ animationDelay: `${driftDelay(i, ambientStart)}s` }}
                >
                  <Icon size={20} color={color} />
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}