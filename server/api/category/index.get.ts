import client from '~~/lib/microCMS'
import { Api, Category } from '~~/types/articles'

export default defineEventHandler(async (event):Promise<Api.IndexResponsePayload<Category>> => {
  setHeader(event, 'Cache-Control', 'public, max-age=6000, s-maxage=6000')
  const res = await client
    .get({
      endpoint: 'categories',
      queries: {
        limit: 100
      }
    })
  return res
})
