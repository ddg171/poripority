
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Hut of Poripority',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'robots', content: 'all' },
        { name: 'description', content: 'Hata_kazeが趣味で作ったWebサイト' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', id: 'favicon' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap', rel: 'stylesheet' },
        { href: 'https://cdn.jsdelivr.net/npm/yakuhanjp@3.2.0/dist/css/yakuhanjp.min.css', rel: 'stylesheet' }
      ],
      style: [],
      script: [],
      htmlAttrs: {
        lang: 'ja',
        prefix: 'og: https://ogp.me/ns#'
      }
    }
  },
  runtimeConfig: {
    microCMSAPI: process.env.MICROCMS_API,
    microCMSServiceID: process.env.MICROCMS_SERVEICE_ID,
    baseURL: process.env.BASE_URL
  },
  typescript: {
    shim: false
  },
  css: ['~/assets/css/tailwind.scss', '~/assets/css/fonts.css'],
  modules: ['@nuxtjs/tailwindcss'],
  nitro: {
    prerender: {
      routes: ['/works']
    }
  },
  build: {

  }
})
