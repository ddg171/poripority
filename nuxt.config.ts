
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      // lang: 'ja',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'robots', content: 'noindex,nofollow' }],
      link: [{ rel: 'icon', href: '/favicon.ico', id: 'favicon' }],
      style: [],
      script: []
    }
  },
  runtimeConfig: {
    microCMSAPI: process.env.MICROCMS_API,
    microCMSServiceID: process.env.MICROCMS_SERVEICE_ID
  },
  typescript: {
    shim: false
  },
  css: ['~/assets/css/tailwind.scss'],
  modules: ['@nuxtjs/tailwindcss'],
  build: {

  }
})
