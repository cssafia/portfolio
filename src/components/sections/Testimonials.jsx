// src/components/sections/Testimonials.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { testimonials } from "../../data/testimonials";
import TestimonialCard from "../common/TestimonialCard";
import Reveal from "../common/Reveal";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useInView } from "../../hooks/useInView";
import { useTravelingParticle } from "../../hooks/useTravelingParticle";

const OFFSETS = [0, -10, 6, -6, 8, -4];
const WIDE_EVERY = 3;
const BASE_SPEED = 28;
const DRAG_THRESHOLD = 6;

export default function Testimonials() {
  const prefersReducedMotion = useReducedMotion();
  const [sectionRef, sectionInView] = useInView({ threshold: 0.3 });
  const [hasRippled, setHasRippled] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const thresholdCrossed = useRef(false);
  const trackRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (sectionInView && !hasRippled) setHasRippled(true);
  }, [sectionInView, hasRippled]);

  const loopItems = [...testimonials, ...testimonials];

  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth / 2);
    }
  }, []);

  const paused = prefersReducedMotion || isDragging || isHovering;

  useAnimationFrame((_, delta) => {
    if (paused || !trackWidth) return;
    let next = x.get() - (BASE_SPEED * delta) / 1000;
    if (next <= -trackWidth) next += trackWidth;
    x.set(next);
  });

  const handleDragStart = () => {
    thresholdCrossed.current = false;
    setIsDragging(false);
  };

  const handleDrag = (_, info) => {
    if (!thresholdCrossed.current) {
      const { x, y } = info.offset;
      if (Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD) {
        thresholdCrossed.current = true;
        setIsDragging(true);
      }
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    thresholdCrossed.current = false;
  };

  const NODE_XS = [0, 64, 128, 192];
  const nodeTargets = [
    { id: "n0", from: { x: NODE_XS[0], y: 8 }, to: { x: NODE_XS[1], y: 8 } },
    { id: "n1", from: { x: NODE_XS[1], y: 8 }, to: { x: NODE_XS[2], y: 8 } },
    { id: "n2", from: { x: NODE_XS[2], y: 8 }, to: { x: NODE_XS[3], y: 8 } },
  ];
  const { particle, impactedId } = useTravelingParticle({
    targets: nodeTargets,
    startDelayMs: 600,
    disabled: prefersReducedMotion || !sectionInView,
  });

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative z-10 py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-6 text-center mb-14">
        {/* Standardized Eyebrow */}
        <Reveal trigger="inView">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--text-muted)] mb-3">
            PEOPLE &bull; PROJECTS &bull; IMPACT
          </p>
        </Reveal>

        {/* Standardized Header */}
        <Reveal trigger="inView">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[var(--text)]">
            Client <span className="text-[var(--accent)]">Testimonials</span>
          </h2>
        </Reveal>

        {/* Node animation bar */}
        <Reveal trigger="inView">
          <div className="relative mx-auto mt-8 w-[192px] h-4">
            <svg width="192" height="16" className="absolute inset-0 overflow-visible">
              <line x1="0" y1="8" x2="192" y2="8" stroke="var(--line)" strokeWidth="1" />
              {NODE_XS.map((cx, i) => {
                const nodeId = `n${i}`;
                const isImpacted = impactedId === nodeId;
                return (
                  <circle
                    key={isImpacted ? `${nodeId}-impact` : nodeId}
                    cx={cx}
                    cy="8"
                    r="4"
                    fill="var(--node-fill)"
                    stroke="var(--node-border)"
                    strokeWidth="1"
                    className={isImpacted ? "sh-node-impact-ring" : ""}
                  />
                );
              })}
              {!prefersReducedMotion && particle && (
                <circle
                  cx={particle.x}
                  cy={particle.y}
                  r="2.5"
                  fill="var(--accent-rose)"
                  opacity={particle.opacity}
                />
              )}
            </svg>
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-[var(--bg)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-[var(--bg)] to-transparent" />

        <motion.div
          ref={trackRef}
          className="flex gap-6 md:gap-8 px-6 cursor-grab active:cursor-grabbing"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -Infinity, right: Infinity }}
          dragElastic={0.05}
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {loopItems.map((testimonial, i) => (
            <TestimonialCard
              key={`${testimonial.id}-${i}`}
              testimonial={testimonial}
              offset={OFFSETS[i % OFFSETS.length]}
              wide={i % WIDE_EVERY === 0}
              isFirst={i === 0}
              showRipple={hasRippled}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}