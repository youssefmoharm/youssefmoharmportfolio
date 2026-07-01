import { useMemo } from "react";
import { motion } from "framer-motion";

// Seeded pseudo-random so it's stable per session but not identical every time
function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/**
 * AnimatedBackground
 * Futuristic grid + glow backdrop used behind the Hero section.
 * Particle positions are randomised each session using a time-based seed.
 */
export default function AnimatedBackground() {
  const particles = useMemo(() => {
    const rand = seededRandom(Date.now() % 9999);
    return Array.from({ length: 14 }, (_, i) => ({
      id: i,
      top: rand() * 100,
      left: rand() * 100,
      duration: 4 + rand() * 5,
      delay: rand() * 3,
      size: rand() > 0.7 ? "w-1.5 h-1.5" : "w-1 h-1",
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base grid */}
      <div
        className="absolute inset-0 bg-grid-pattern opacity-40"
        style={{ backgroundSize: "48px 48px" }}
      />

      {/* Radial fade so grid disappears toward edges */}
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Primary glowing orb */}
      <motion.div
        className="absolute -top-32 left-1/4 w-[420px] h-[420px] rounded-full bg-primary/30 blur-[100px]"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Accent glowing orb */}
      <motion.div
        className="absolute top-1/3 right-1/5 w-[360px] h-[360px] rounded-full bg-accent/20 blur-[110px]"
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating particles — randomly positioned each session */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className={`absolute rounded-full bg-accent/70 ${p.size}`}
          style={{ top: `${p.top}%`, left: `${p.left}%` }}
          animate={{ opacity: [0.2, 0.9, 0.2], y: [0, -20, 0] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {/* Bottom fade into background color for smooth section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-hero-gradient" />
    </div>
  );
}
