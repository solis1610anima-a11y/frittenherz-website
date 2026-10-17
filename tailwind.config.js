/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dtr: {
          pink: "#FBDDE7",
          pinkSoft: "#FACFD7",
          pinkMuted: "#FCD7E6",
          darkBg: "#121316",
          surface: "#18191E",
          card: "#1F2027",
          cardHover: "#262832",
          border: "rgba(251, 221, 231, 0.14)",
          borderStrong: "rgba(251, 221, 231, 0.32)",
        },
      },
      fontFamily: {
        display: ["'Faculty Glyphic'", "serif"],
        editorial: ["'Libre Caslon Text'", "serif"],
        mono: ["'Fragment Mono'", "monospace"],
        sans: ["var(--font-inter)", "'Inter'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        '2xl': '24px',
        '3xl': '32px',
      },
    },
  },
  plugins: [],
};
