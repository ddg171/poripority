
import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Hut of Poripority(WIP)',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'robots', content: 'noindex,nofollow' }, { name: 'description', content: 'Nuxt3+Cloudrun+Firebase Hostingで制作中のWebサイト。' }],
      link: [{ rel: 'icon', href: '/favicon.ico', id: 'favicon' }],
      style: [],
      script: [],
      htmlAttrs: {
        lang: 'ja'
      }
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
  nitro: {
    prerender: {
      routes: ['/works']
    }
  },
  build: {

  }
})
