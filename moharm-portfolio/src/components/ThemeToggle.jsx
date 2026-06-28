import { motion } from "framer-motion";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";

/**
 * ThemeToggle
 * Animated sun/moon toggle button for dark/light mode.
 * Placed inside the Navbar.
 */
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle color theme"
      className="flex items-center justify-center w-9 h-9 rounded-xl2 glass border border-white/10 hover:border-accent/40 text-text-muted hover:text-accent transition-colors duration-300"
    >
      <motion.span
        key={theme}
        initial={{ rotate: -30, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 30, opacity: 0 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? <HiSun className="text-base" /> : <HiMoon className="text-base" />}
      </motion.span>
    </motion.button>
  );
}
