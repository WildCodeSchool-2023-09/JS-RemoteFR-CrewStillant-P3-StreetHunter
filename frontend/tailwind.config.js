/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#684411",
        backgroundOne: "#97DBF5",
        backgroundTwo: "#c6e2ff",
        backgroundThree: "#b5e2b0",
      },
      backgroundImage: {
        "hero-pattern": "url('./src/assets/p3_bg.jpg')",
      },
    },
    fontFamily: {
      sans: ["Pixelify Sans"],
    },
  },
  plugins: [],
};
