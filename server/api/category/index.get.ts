import client from '~~/lib/microCMS'
import { Api, Category } from '~~/types/articles'

export default defineEventHandler(async ():Promise<Api.IndexResponsePayload<Category>> => {
  const res = await client
    .get({
      endpoint: 'categories',
      query: {
        limit:100
      }
    })
  return res
})
