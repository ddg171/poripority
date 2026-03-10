import { createClient } from 'microcms-js-sdk'
import { useRuntimeConfig } from '#imports'

const config = useRuntimeConfig()
const serviceDomain = config.microCMSServiceID as string
const apiKey = config.microCMSAPI as string

const client = createClient({ serviceDomain, apiKey })

export default client
