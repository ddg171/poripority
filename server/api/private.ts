import config from '@/nuxt.config'
export default defineEventHandler(() => {
  return {
    api: config.privateRuntimeConfig.private
  }
})
