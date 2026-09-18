/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF8F1",
          100: "#F6EFE0",
          200: "#EFE3C9",
          300: "#E4D2A8",
        },
        navy: {
          50: "#EAF0F7",
          100: "#C7D8EA",
          300: "#8FAFD1",
          400: "#3D5D85",
          500: "#22405F",
          600: "#1A324A",
          700: "#122437",
        },
        stone: {
          100: "#E9E9E9",
          300: "#BFBFBF",
          500: "#8A8A8A",
          600: "#707070",
          700: "#4D4D4D",
          800: "#333333",
          900: "#1E1E1E",
        },
        sage: {
          400: "#7C9070",
          500: "#5B7553",
        },
        // Dark mode surface palette — a clean charcoal black.
        night: {
          600: "#4D4D4D",
          700: "#3A3A3A",
          800: "#2B2B2B",
          900: "#1A1A1A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 6px 24px -8px rgba(58, 38, 24, 0.35)",
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 1px 1px, rgba(60,60,60,0.07) 1px, transparent 0)",
      },
      keyframes: {
        steam: {
          "0%, 100%": { transform: "translateY(0) scaleY(1)", opacity: "0.5" },
          "50%": { transform: "translateY(-10px) scaleY(1.1)", opacity: "0.9" },
        },
      },
      animation: {
        steam: "steam 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
