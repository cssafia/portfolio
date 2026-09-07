import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectGallery({ images, alt }) {
  const [index, setIndex] = useState(0);
  const hasMultiple = images.length > 1;

  const go = (delta) => setIndex((i) => (i + delta + images.length) % images.length);

  return (
    <div className="relative">
      <div className="aspect-[16/10] rounded-xl overflow-hidden bg-node">
        <img
          src={images[index]}
          alt={`${alt} screenshot ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>

      {hasMultiple && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-surface border border-border hover:border-rose transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-surface border border-border hover:border-rose transition-colors"
          >
            <ChevronRight size={18} />
          </button>

          <div className="flex items-center justify-center gap-1.5 mt-3">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to image ${i + 1}`}
                className="rounded-full transition-all"
                style={{
                  width: i === index ? 16 : 6,
                  height: 6,
                  background: i === index ? "var(--accent)" : "var(--node-border)",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}