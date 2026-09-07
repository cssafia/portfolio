import { useEffect, useRef, useState } from "react";

/**
 * Fires once an element enters the viewport. Used by <Reveal trigger="inView">
 * for scroll-triggered sections (About, Projects, Testimonials...) — Hero
 * doesn't need this since it animates on mount instead.
 */
export function useInView({ threshold = 0.2, rootMargin = "0px", once = true } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, threshold, rootMargin]);

  return [ref, isInView];
}