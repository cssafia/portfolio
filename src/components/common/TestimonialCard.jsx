import React from "react";


export default function TestimonialCard({ testimonial, offset = 0, wide = false, isFirst = false, showRipple = false }) {
  const { name, job, company, photo, text } = testimonial;

  return (
    <div
      className={`shrink-0 select-none ${wide ? "w-[340px] md:w-[380px]" : "w-[300px] md:w-[330px]"}`}
      style={{ transform: `translateY(${offset}px)` }}
    >
      <div
        className="h-full rounded-3xl border px-6 py-7 md:px-7 md:py-8 flex flex-col gap-5 bg-[var(--surface)] border-[var(--node-border)] shadow-sm"
      >
        <div className="flex items-center gap-3">
          <div
            className={`relative w-12 h-12 rounded-full flex items-center justify-center bg-[var(--node-fill)] border border-[var(--node-border)] overflow-hidden ${
              isFirst && showRipple ? "sh-node-impact-ring" : ""
            }`}
          >
            <img
              src={photo}
              alt={name}
              draggable={false}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="min-w-0">
            <p className="font-medium text-[var(--text)] truncate">{name}</p>
            <p className="text-sm text-[var(--muted)] truncate">
              {job} · {company}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="block w-8 h-px bg-[var(--line)]" aria-hidden="true" />
          <p className="text-[15px] leading-relaxed text-[var(--text)]/90">{text}</p>
        </div>
      </div>
    </div>
  );
}