import React from "react";

/**
 * Note manuscrite (police "Caveat" via font-handwritten) + un unique tracé
 * SVG texte→flèche, pour éviter le grand espace vide vu précédemment.
 */
export default function Annotation({ text, align = "left", className = "" }) {
  const alignRight = align === "right";
  return (
    <div className={`relative inline-block font-handwritten text-base sm:text-lg leading-snug ${className}`} style={{ color: "var(--accent)" }}>
      <p className={alignRight ? "text-right" : "text-left"}>{text}</p>
      <svg
        width="72" height="34" viewBox="0 0 72 34"
        className={alignRight ? "ml-auto -mt-1" : "-mt-1"}
        aria-hidden="true"
      >
        <path
          d="M2 8 C 16 2, 30 12, 42 6 C 50 3, 54 8, 50 15 C 46 22, 38 22, 32 28"
          stroke="var(--accent)" strokeWidth="2" fill="none" strokeLinecap="round"
        />
        <path d="M32 28 L 27 22 M32 28 L 39 25" stroke="var(--accent)" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  );
}