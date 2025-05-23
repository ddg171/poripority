import { defineNuxtConfig } from 'nuxt/config'

import { blankImages } from './utils/prerenderImages'

const SITE_NAME = 'The hut of Poripority'
const DESCRIPTION = 'Hata_kazeが趣味で作ったWebサイト'
export default defineNuxtConfig({
  app: {
    head: {
      title: SITE_NAME,
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'og:title', content: SITE_NAME },
        { name: 'robots', content: 'all' },
        { name: 'description', content: DESCRIPTION },
        { name: 'og:description', content: DESCRIPTION },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: SITE_NAME },
        { property: 'og:image', content: process.env.BASE_URL + '/ogp.jpg' },
        { property: 'twitter:card', content: 'summary_large_image' }
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
    },
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  runtimeConfig: {
    public: {
      siteName: SITE_NAME,
      baseURL: process.env.BASE_URL,
      gaMeasurementId: process.env.GA_MEASUREMENT_ID,
      description: DESCRIPTION
    },
    microCMSAPI: process.env.MICROCMS_API,
    microCMSServiceID: process.env.MICROCMS_SERVEICE_ID
  },
  typescript: {
    shim: false
  },
  css: ['~/assets/css/tailwind.scss'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-icon',
    ['@nuxtjs/robots', { Disallow: '/blog/preview/*', Sitemap: process.env.BASE_URL + '/sitemap.xml' }]
  ],
  image: {
    imgix: {
      baseURL: ''
    }
  },
  nitro: {
    compressPublicAssets: true,
    prerender: {
      routes: [
        '/',
        '/works',
        '/about',
        '/disclaimer',
        ...blankImages
      ]
    }
  },
  build: {

  }
})
