import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/seo',
    '@nuxt/icon',
    '@nuxtjs/google-adsense',
  ],
});
