import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#FFFFFF",
          muted: "#F8F9FA",
        },
        navy: {
          DEFAULT: "#0A192F",
          light: "#1E3A8A",
        },
        orange: {
          DEFAULT: "#FF6B35",
          dark: "#EA580C",
        },
        gold: {
          DEFAULT: "#D4AF37",
          dark: "#CA8A04",
        },
        muted: "#64748B",
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "fluid-sm": "clamp(0.875rem, 0.8rem + 0.25vw, 1rem)",
        "fluid-base": "clamp(1rem, 0.95rem + 0.3vw, 1.125rem)",
        "fluid-lg": "clamp(1.125rem, 1rem + 0.5vw, 1.35rem)",
        "fluid-xl": "clamp(1.35rem, 1.1rem + 1vw, 1.75rem)",
        "fluid-2xl": "clamp(1.75rem, 1.3rem + 1.5vw, 2.5rem)",
        "fluid-3xl": "clamp(2.25rem, 1.5rem + 2.5vw, 3.5rem)",
        "fluid-4xl": "clamp(2.75rem, 1.8rem + 3.5vw, 4.5rem)",
      },
    },
  },
  plugins: [],
};

export default config;
