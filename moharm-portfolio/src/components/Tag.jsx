/**
 * Tag
 * Small glowing pill used for tech-stack chips inside project cards
 * and elsewhere a compact label is needed.
 */
export default function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary-light tracking-wide ${className}`}
    >
      {children}
    </span>
  );
}
