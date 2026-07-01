import { motion } from "framer-motion";

/**
 * Card
 * Base glassmorphism card used by Skills and Projects.
 * Accepts a `hoverGlow` prop to pick the neon accent on hover.
 */
export default function Card({
  children,
  className = "",
  hoverGlow = "primary",
  as = "div",
  ...props
}) {
  const glowClass =
    hoverGlow === "accent"
      ? "hover:shadow-glow-accent hover:border-accent/40"
      : "hover:shadow-glow-primary hover:border-primary/40";

  const Component = motion[as] || motion.div;

  return (
    <Component
      className={`glass rounded-xl3 border border-white/[0.06] shadow-glass-inset transition-all duration-300 ${glowClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
