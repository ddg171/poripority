import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  env: {
    NODE_ENV: process.env.NODE_ENV
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [],
      link: [{ rel: 'icon', href: '/favicon.ico', id: 'favicon' }],
      style: [],
      script: []
    }
  },
  server: {
    port: Number(process.env.PORT) || 3000,
    host: process.env.HOST || '0.0.0.0',
    timing: false
  },
  privateRuntimeConfig: {
    private: process.env.PRIVATE_KEY,
    microCMSAPI: process.env.MICROCMS_API,
    microCMSServiceID: process.env.MICROCMS_SERVEICE_ID
  },
  autoImports: {
    dirs: ['/types']
  },
  typescript: {
    shim: false
  }

})
