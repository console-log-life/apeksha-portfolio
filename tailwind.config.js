import colors from "tailwindcss/colors";

const violet = { 50: "#f5f2ff", 100: "#ebe5ff", 200: "#d8cbff", 300: "#c3aeff", 400: "#a58af2", 500: "#866bd5", 600: "#6d55b2", 700: "#58458e", 800: "#46396f", 900: "#382f57", 950: "#221d35" };
const blue = { 50: "#eff7ff", 100: "#dcedff", 200: "#c3e0ff", 300: "#9bcaff", 400: "#70adf4", 500: "#528bdd", 600: "#3f6db8", 700: "#35578f", 800: "#304a73", 900: "#2c405f", 950: "#1c293f" };
const rose = { 50: "#fff2f8", 100: "#ffe3f0", 200: "#ffc6e0", 300: "#f7a3cc", 400: "#e880b2", 500: "#cc6195", 600: "#a94777", 700: "#873b61", 800: "#6e3451", 900: "#5d3047", 950: "#391a2a" };
const mint = { 50: "#effcf7", 100: "#d9f7eb", 200: "#b5efd8", 300: "#86dfbc", 400: "#54c79b", 500: "#31a87e", 600: "#238866", 700: "#206c53", 800: "#1e5644", 900: "#1c473a", 950: "#102922" };
const gold = { 50: "#fff9eb", 100: "#fff0c7", 200: "#ffe28a", 300: "#ffd15a", 400: "#f4b83a", 500: "#dd9620", 600: "#bd7118", 700: "#985116", 800: "#7d4019", 900: "#693519", 950: "#3d1c0c" };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        slate: colors.zinc, gray: colors.zinc, zinc: colors.zinc,
        cyan: violet, sky: blue, blue,
        indigo: violet, violet, purple: violet, fuchsia: rose, pink: rose,
        emerald: mint, teal: mint, green: mint, amber: gold,
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "sans-serif"],
        display: ['"Instrument Serif"', "serif"],
      },
      boxShadow: { glow: "0 20px 80px rgba(139, 115, 230, 0.18)" },
      keyframes: { float: { "0%, 100%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-12px)" } } },
      animation: { float: "float 8s ease-in-out infinite" },
    },
  },
  plugins: [],
};
