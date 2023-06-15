/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html,css}"
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },
    extend: {
      colors: {
        black: '#071621',
        dark1: '#032A3F',
        dark2: '#012832',
        primary: '#D0F200',
        white: '#EAEAEA',
        transparent: 'transparent'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}