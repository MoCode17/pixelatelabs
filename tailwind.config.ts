import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        brand: "#FF6B2C",
        "brand-dark": "#E85A1E",
        "brand-light": "#FF8A56",

        // Backgrounds
        midnight: "#1A1A2E",
        surface: "#222240",
        "dark-lighter": "#2D2D4A",

        // Accents
        solar: "#FFD166",
        coral: "#FF6B6B",
        "orange-100": "#FFF0E8",

        // Neutrals
        snow: "#ffffff",
        gray: "#BCC3CE",
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        "space-mono": ["var(--font-space-mono)", "monospace"],
        avantt: ["var(--font-avantt-trial)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
