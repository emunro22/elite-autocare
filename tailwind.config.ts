import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050b16",
          900: "#0a1628",
          800: "#0f2038",
          700: "#152c4a",
          600: "#1d3a5f",
        },
        gold: {
          300: "#f0daa8",
          400: "#e3c584",
          500: "#cda15a",
          600: "#a97f3d",
          700: "#7d5c2a",
        },
        ice: {
          300: "#b8e4f5",
          400: "#8fd3ee",
          500: "#63b8db",
        },
        mist: {
          100: "#f5f7fa",
          300: "#c7d1e0",
          500: "#8ea0bc",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "navy-radial":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(205,161,90,0.14), transparent), radial-gradient(ellipse 60% 50% at 90% 10%, rgba(99,184,219,0.10), transparent)",
        "gold-sheen":
          "linear-gradient(115deg, transparent 20%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,0.55) 55%, transparent 80%)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(205,161,90,0.35), 0 8px 30px -8px rgba(205,161,90,0.35)",
        panel: "0 1px 0 0 rgba(205,161,90,0.15), 0 20px 50px -20px rgba(0,0,0,0.6)",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};
export default config;
