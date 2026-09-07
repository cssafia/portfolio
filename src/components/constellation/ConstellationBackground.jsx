function ConstellationBackground({
  width = 1200,
  height = 800,
  count = 28,
  seed = 7,
  maxLinkDist = 220,
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
          /* Raised minimum opacity to 0.25 and peak opacity to 0.75 for clear light purple lines */
          opacity={Math.max(0.25, 0.75 - dist / maxLinkDist)}
        />
      ))}

      {/* Network Node Dots */}
      {points.map((p) => (
        <g key={`bg-dot-${p.id}`}>
          {/* Subtle Outer Glow for Dots */}
          <circle
            cx={p.x}
            cy={p.y}
            r={4}
            fill="var(--line)"
            opacity={0.3}
          />
          {/* Solid Core Dot */}
          <circle
            cx={p.x}
            cy={p.y}
            r={2}
            fill="var(--node-border)"
            opacity={0.85}
          />
        </g>
      ))}
    </svg>
  );
}