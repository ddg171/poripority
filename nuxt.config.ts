
import { defineNuxtConfig } from 'nuxt/config'

const SITE_NAME = 'The hut of Poripority'
const DESCRIPTION = 'Hata_kazeが趣味で作ったWebサイト'
export default defineNuxtConfig({
  app: {
    head: {
      title: SITE_NAME,
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'robots', content: 'all' },
        { name: 'description', content: DESCRIPTION },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: SITE_NAME },
        { property: 'og:image', content: process.env.BASE_URL + '/ogp.jpg' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', id: 'favicon' }
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
    public: {
      siteName: SITE_NAME,
      baseURL: process.env.BASE_URL,
      gaMeasurementId: process.env.GA_MEASUREMENT_ID
    },
    microCMSAPI: process.env.MICROCMS_API,
    microCMSServiceID: process.env.MICROCMS_SERVEICE_ID
  },
  typescript: {
    shim: false
  },
  css: ['~/assets/css/tailwind.scss'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  image: {
    dir: 'assets/images',
    presets: {
      common: {
        'legacy-format': 'jpeg',
        'img-attrs': { class: 'img-inside-picture', height: 400, width: 400, decoding: 'async' }
      }
    }
  },
  nitro: {
    prerender: {
      routes: ['/works', '/about']
    }
  },
  build: {

  }
})
