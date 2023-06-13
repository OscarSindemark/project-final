/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,css}"
  ],
  theme: {
    extend: {
      colors: {
        black: '#071621',
        dark1: '#032A3F',
        dark2: '#012832',
        primary: '#D0F200',
        white: '#EAEAEA',
      },
    },
  },
  plugins: [],
}