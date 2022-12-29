/** @type {import('tailwindcss').Config} */
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
        '1/5h': '20vh',
        '1/4h': '25vh',
        '1/3h': '33vh',
        '1/2h': '50vh',
        '3/4h': '75vh'
      },
      'min-height': {
        '1/5h': '20vh',
        '1/4h': '25vh',
        '1/3h': '33vh',
        '1/2h': '50vh',
        '3/4h': '75vh'
      },
      maxWidth: {
        'screen-3xl': '1792px',
        'screen-1920p': '1920px'
      }
    },
    variants: {
      extend: {}
    }
  },
  plugins: []
}
