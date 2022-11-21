/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-dark': '#121212',
        'main-color': '#FFB400',
      }
    },
  },
  plugins: [],
}
