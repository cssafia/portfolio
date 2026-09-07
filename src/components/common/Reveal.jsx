import React from "react";
import { useInView } from "../../hooks/useInView";


export default function Reveal({
  as: Component = "div",
  children,
  delay = 0,
  trigger = "mount",
  className = "",
  style = {},
  ...rest
}) {
  const [ref, isInView] = useInView({ once: true });
  const isScrollTriggered = trigger === "inView";
  const active = isScrollTriggered ? isInView : true;

  const revealClassName = isScrollTriggered
    ? active
      ? "sh-reveal-visible"
      : "sh-reveal-hidden"
    : "sh-reveal-mount";

  return (
    <Component
      ref={isScrollTriggered ? ref : undefined}
      className={`${revealClassName} ${className}`.trim()}
      style={{
        ...style,
        animationDelay: !isScrollTriggered ? `${delay}s` : undefined,
        transitionDelay: isScrollTriggered ? `${delay}s` : undefined,
      }}
      {...rest}
    >
      {children}
    </Component>
  );
}