import { createClient } from 'microcms-js-sdk'
import config from '@/nuxt.config'

const serviceDomain = config.runtimeConfig.microCMSServiceID
const apiKey = config.runtimeConfig.microCMSAPI

const client = createClient({ serviceDomain, apiKey })

export default client
