/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-dark': '#4A4A4A',
        'main-color': '#FFB400',
      }
    },
  },
  plugins: [],
}
