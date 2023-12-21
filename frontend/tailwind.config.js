/* eslint-disable prettier/prettier */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // eslint-disable-next-line prettier/prettier
        "primary": "#684411",
        // eslint-disable-next-line prettier/prettier
        "backgroundOne" : "#97DBF5",
        "backgroundTwo" : "#c6e2ff",
        "backgroundThree" : "#b5e2b0"
      },
      backgroundImage: {
        'city': "url('/assets/wallpaper.png')",
      },
    },
    fontFamily: {
      sans: ["Pixelify Sans"],
    },
  },
  plugins: [],
};
