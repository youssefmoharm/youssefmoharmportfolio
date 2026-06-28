import { motion } from "framer-motion";

const VARIANTS = {
  primary:
    "bg-gradient-to-r from-primary to-accent text-white shadow-glow-primary hover:shadow-glow-primary-lg",
  secondary:
    "glass text-text-primary border-white/10 hover:border-accent/50 hover:shadow-glow-accent",
  ghost: "text-text-muted hover:text-text-primary",
};

/**
 * Button
 * Shared CTA / action button used across Hero, Projects, and Contact.
 * Supports rendering as <a> (when href is passed) or <button>.
 */
export default function Button({
  children,
  variant = "primary",
  icon: Icon,
  href,
  onClick,
  type = "button",
  className = "",
  ...props
}) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-xl2 px-6 py-3 font-medium text-sm md:text-base transition-shadow duration-300 select-none ${VARIANTS[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.04 },
    whileTap: { scale: 0.96 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...motionProps}
        {...props}
      >
        {Icon && <Icon className="text-base" />}
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseClasses}
      {...motionProps}
      {...props}
    >
      {Icon && <Icon className="text-base" />}
      {children}
    </motion.button>
  );
}
