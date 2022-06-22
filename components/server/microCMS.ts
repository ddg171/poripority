import { createClient } from 'microcms-js-sdk'
import config from '@/nuxt.config'

const serviceDomain = config.privateRuntimeConfig.microCMSServiceID
const apiKey = config.privateRuntimeConfig.microCMSAPI

const client = createClient({ serviceDomain, apiKey })

export default client
