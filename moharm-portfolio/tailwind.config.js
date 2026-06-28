/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F1A",
        surface: "#101522",
        primary: "#7C3AED",
        "primary-light": "#A78BFA",
        accent: "#22D3EE",
        "text-primary": "#E5E7EB",
        "text-muted": "#9CA3AF",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      borderRadius: {
        xl2: "16px",
        xl3: "20px",
      },
      boxShadow: {
        "glow-primary": "0 0 20px rgba(124, 58, 237, 0.45)",
        "glow-primary-lg": "0 0 40px rgba(124, 58, 237, 0.55)",
        "glow-accent": "0 0 20px rgba(34, 211, 238, 0.45)",
        "glow-accent-lg": "0 0 40px rgba(34, 211, 238, 0.55)",
        "glass-inset": "inset 0 1px 0 0 rgba(255,255,255,0.04)",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.08) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(124,58,237,0.25), transparent 60%)",
        "hero-gradient":
          "linear-gradient(180deg, rgba(11,15,26,0) 0%, #0B0F1A 90%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 18s linear infinite",
        "gradient-x": "gradientX 8s ease infinite",
        blink: "blink 1.1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.5, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.05)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
