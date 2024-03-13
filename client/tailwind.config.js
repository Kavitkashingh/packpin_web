/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px'},
      'lg': { 'max': '1024px' },
      'md-lg': { 'max': '991px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '576px' },
      'xs': { 'max': '480px' },
      '2xs': { 'max': '380px' },
    }
  },
  plugins: [],
}

