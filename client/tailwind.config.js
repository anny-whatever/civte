// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EC0729",
        "primary-hover": "#D10622",
        secondary: "#FEE900",
        "secondary-hover": "#ECD900",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      },
      borderWidth: {
        3: "3px",
      },
      animation: {
        "bounce-slow": "bounce 3s linear infinite",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      zIndex: {
        60: "60",
        70: "70",
      },
      transitionDuration: {
        2000: "2000ms",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
