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
  '2/3h': '66vh',
  '3/4h': '75vh',
  '4/5h': '80vh',
  '9/10h': '90vh'
}
const vw = {
  '1/8w': '12.5vw',
  '1/7w': '14.3vw',
  '1/6w': '16.67vw',
  '1/5w': '20vw',
  '1/4w': '25vw',
  '1/3w': '33vw',
  '1/2w': '50vw',
  '3/4w': '75vw'
}
const px = {
  '1080p': '1080px',
  '960p': '960px',
  '720p': '720px',
  '480p': '480px',
  '360p': '360px',
  '240p': '240px'
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
      black: '#000000',
      orange: '#FF7347',
      transparent: 'transparent',
      twttr: '#1DA1F2',
      discord: '#5865F2',
      qiita: '#55C500',
      reddit: '#FF5700'

    },
    extend: {
      height: {
        ...vh,
        '2/1': '200%'
      },
      minHeight: {
        ...vh,
        ...px
      },
      maxHeight: {
        ...px
      },
      margin: vh,
      width: {
        ...vw
      },
      maxWidth: {
        'screen-3xl': '1792px',
        'screen-1920p': '1920px',
        ...vh
      },
      minWidth: {
        'screen-3xl': '1792px',
        'screen-1920p': '1920px',
        ...vh
      },
      fontFamily: {
        sans: ['Avenir', 'Open Sans', 'Helvetica Neue', 'Helvetica,Arial', 'Verdana,Roboto', '游ゴシック', 'Yu Gothic', '游ゴシック体', 'YuGothic', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro', 'Meiryo UI', 'メイリオ', 'Meiryo', 'ＭＳ Ｐゴシック', 'MS PGothic', 'sans-serif', ...defaultTheme.fontFamily.sans]
      }
    },
    variants: {
      extend: {}
    }
  },
  plugins: []
}
