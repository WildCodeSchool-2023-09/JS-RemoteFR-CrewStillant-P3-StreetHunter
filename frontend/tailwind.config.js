/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#684411",
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
  plugins: [],
};
