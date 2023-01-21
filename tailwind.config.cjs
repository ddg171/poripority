/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

const vh = {
  '1/8h': '12.5vh',
  '1/7h': '14.3vh',
  '1/6h': '16.67vh',
  '1/5h': '20vh',
  '1/4h': '25vh',
  '1/3h': '33vh',
  '1/2h': '50vh',
  '3/4h': '75vh'
}

module.exports = {
  // mode: "jit",
  content: [
    './app.vue',
    './components/**/*.{js,vue,ts}',
    './pages/**/*.vue',
    './layouts/*.vue'
  ],
  darkMode: 'media', // or 'class'
  theme: {
    colors: {
      green: '#016461',
      lightgreen: '#019585',
      darkblue: '#002130',
      gray: '#292929',
      lightgray: '#E6E6E6',
      red: '#C40026',
      white: '#ffffff',
      orange: '#FF7347',
      transparent: 'transparent'
    },
    extend: {
      height: {
        ...vh
      },
      'min-height': {
        ...vh
      },
      margin: {
        ...vh
      },
      maxWidth: {
        'screen-3xl': '1792px',
        'screen-1920p': '1920px'
      },
      maxHeight: {
        '1080p': '1080px',
        '960p': '960px',
        '720p': '720px'
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Arial', 'Yu Gothic', 'Meiryo', 'sans-serif', ...defaultTheme.fontFamily.sans]
      }
    },
    variants: {
      extend: {}
    }
  },
  plugins: []
}
