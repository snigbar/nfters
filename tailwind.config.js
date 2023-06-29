/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "primary": '#3D00B7',
        "primary-dark": '#360185',
        "primary-light": '#8878ff',
        "secondary": '#2639ED',
        "gray-text": "#565656",
        "gray-dark-text": "#363639",
        "gray": '#C4C4C4',
        "gray-light": '#D9E0EC',
        "sky": '#1E93FF',
        "turquoise": '#14C8B0',
        'dark': '#000000',
        'torch-red': '#FF002E',
        'leaf': '#00AC4F',
      },

      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        integral: ["Integral CF", "sans-serif"],
      },

      content: {
        dotImg: "url('./src/assets/Header/dots.png')",
      },

    },

   
  },
  plugins: [],
}

