import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div
        className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row
                   items-center justify-between gap-3 text-sm text-muted"
      >
        <p>
          <span className="text-accent">●</span> Built by Safia Lounassi— {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}