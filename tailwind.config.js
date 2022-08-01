/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{jsx,tsx}', './src/components/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#E67221',
        text: '#565656',
      },
      fontFamily: {
        archivo: ['Archivo', 'sans-serif'],
        gotu: ['Gotu', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
