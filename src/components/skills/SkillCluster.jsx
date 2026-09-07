// src/components/skills/SkillCluster.jsx
import React from "react";

const NODE_SIZE = { main: { badge: 76, icon: 30 }, small: { badge: 58, icon: 22 } };

function getGeometry(layout, count) {
  if (layout === "solo") return { vb: [90, 90], positions: [{ x: 45, y: 45 }], edges: [] };
  if (layout === "chain")
    return {
      vb: [300, 90],
      positions: [{ x: 40, y: 45 }, { x: 150, y: 45 }, { x: 260, y: 45 }],
      edges: [[0, 1], [1, 2]],
    };
  if (count === 4)
    return {
      vb: [220, 220],
      positions: [{ x: 110, y: 30 }, { x: 30, y: 115 }, { x: 190, y: 115 }, { x: 110, y: 200 }],
      edges: [[0, 1], [0, 2], [1, 3], [2, 3]],
    };
  return {
    vb: [220, 165],
    positions: [{ x: 110, y: 30 }, { x: 30, y: 140 }, { x: 190, y: 140 }],
    edges: [[0, 1], [0, 2], [1, 2]],
  };
}

export default function SkillCluster({ label, layout, nodes }) {
  const { vb, positions, edges } = getGeometry(layout, nodes.length);
  const [vbW, vbH] = vb;

  return (
    <div className="flex flex-col items-center shrink-0">
      <p className="text-xs tracking-[0.18em] uppercase text-[var(--accent)] font-medium mb-4">
        {label}
      </p>

      {/* Fixed pixel box, not %/aspect-ratio: absolute children give it zero
          intrinsic size, so a fluid box collapses and nodes pile on top of each other. */}
      <div className="relative shrink-0" style={{ width: vbW, height: vbH }}>
        <svg width={vbW} height={vbH} className="absolute inset-0 overflow-visible">
          {edges.map(([a, b]) => (
            <line
              key={`${a}-${b}`}
              x1={positions[a].x} y1={positions[a].y}
              x2={positions[b].x} y2={positions[b].y}
              stroke="var(--line)" strokeWidth="1"
            />
          ))}
        </svg>

        {nodes.map((node, i) => {
          const { badge, icon } = NODE_SIZE[node.size];
          const isMain = node.size === "main";
          const Icon = node.Icon;
          return (
            <div
              key={node.id}
              className="absolute flex flex-col items-center gap-2"
              style={{ left: positions[i].x, top: positions[i].y, transform: "translate(-50%, -50%)", width: badge }}
            >
              {isMain && (
                <div
                  className="absolute rounded-full blur-xl opacity-30 -z-10"
                  style={{ width: badge * 1.8, height: badge * 1.8, left: "50%", top: "50%", transform: "translate(-50%, -50%)", background: "var(--accent)" }}
                />
              )}
              <div
                className="rounded-full flex items-center justify-center bg-[var(--node-fill)] border"
                style={{ width: badge, height: badge, borderColor: "var(--node-border)" }}
              >
                <Icon size={icon} color={node.color} />
              </div>
              <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">{node.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}