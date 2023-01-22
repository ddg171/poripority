import VueGtag, { trackRouter } from 'vue-gtag-next'
import { useRuntimeConfig, useCookie, useRouter } from '#app'
export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  const optin = useCookie('optin')
  const router = useRouter()

  const isEnabled = optin.value === 'ACCEPT'

  nuxtApp.vueApp.use(VueGtag, {
    isEnabled,
    property: {
      id: config.public.gaMeasurementId
    }
  })

  trackRouter(router)
})
