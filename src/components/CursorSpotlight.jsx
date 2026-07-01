import { useEffect, useRef } from "react";

/**
 * CursorSpotlight
 * A subtle radial glow that follows the mouse cursor.
 * Uses a single div updated via requestAnimationFrame for smooth 60fps tracking.
 */
export default function CursorSpotlight() {
  const spotRef = useRef(null);

  useEffect(() => {
    let rafId;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Ease toward cursor position
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (spotRef.current) {
        spotRef.current.style.transform = `translate(${currentX - 300}px, ${currentY - 300}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      aria-hidden="true"
    >
      <div
        ref={spotRef}
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.07) 0%, rgba(34,211,238,0.04) 40%, transparent 70%)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
