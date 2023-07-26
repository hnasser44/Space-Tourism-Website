/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      desktop: "1224px",
    },
    extend: {
      colors: {
        Pink: "#D0D6F9",
        Black: "#0B0D17",
        TextBorder: "#383B4B",
      },
      animation: {
        "planet-spin": "planet 15s linear infinite",
        slide: "fadeFromLeft .5s ease-in-out",
      },
      keyframes: {
        planet: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        fadeFromLeft: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
    fontFamily: {
      barlow: ["Barlow Condensed", "sans-serif"],
      bellefair: ["Bellefair", "serif"],
      barlowNormal: ["Barlow", "sans-serif"],
    },
  },
  plugins: [],
};
