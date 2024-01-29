/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#081D44",
        backgroundOne: "#97DBF5",
        backgroundTwo: "#c6e2ff",
        backgroundThree: "#b5e2b0",
      },
      backgroundImage: {
        city: "url('./assets/wallpaper.png')",
        responsivecity: "url(./assets/responsiveWallpaper.png)",
      },
    },
    fontFamily: {
      sans: ["Pixelify Sans"],
    },
  },
  plugins: ["flowbite/plugin"],
};
