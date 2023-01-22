import { createClient } from 'microcms-js-sdk'
import config from '@/nuxt.config'

const serviceDomain = config!.runtimeConfig!.microCMSServiceID as string
const apiKey = config!.runtimeConfig!.microCMSAPI as string

const client = createClient({ serviceDomain, apiKey })

export default client
