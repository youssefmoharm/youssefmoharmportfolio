import { useEffect, useState } from "react";

/**
 * useScrollPosition
 * Tracks whether the page has been scrolled past a given threshold.
 * Used to toggle the sticky navbar's glass/blur background.
 */
export default function useScrollPosition(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
