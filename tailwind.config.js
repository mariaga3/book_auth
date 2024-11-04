const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f3f4e7',
        primarydark: '#ccb59f',
      },
      fontFamily: {
        'serif': ['Merriweather', ...defaultTheme.fontFamily.serif],
        'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },

  },
  utilities: {
    '.swiper-pagination-bullet': {
      '@apply bg-white opacity-50 w-3 h-3': {},
    },
    '.swiper-pagination-bullet-active': {
      '@apply opacity-100 bg-blue-500': {},
    },
    '.swiper-button-prev, .swiper-button-next': {
      '@apply text-blue-500': {},
    },
  },
  plugins: [],
}