import React from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle dark mode"
      className="p-2.5 rounded-full border border-border bg-node text-node-icon
                 hover:border-rose transition-colors duration-200"
    >
      {isDark ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}