/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const useTheme = require('./src/composables/useTheme.js');

console.log(useTheme);
module.exports = {

  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
    theme: {
    container:{
      center:true,
      padding:{
        DEFAULT: '1.5rem',
      }
    },
    extend: {
      fontFamily:{
        'sans': ["Fira Sans", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

