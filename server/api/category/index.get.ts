import client from '~~/server/microCMS'
import { Api, Category } from '~~/types/articles'

export default defineEventHandler(async ():Promise<Api.IndexResponsePayload<Category>> => {
  const res = await client
    .get({
      endpoint: 'categories'
    })
  return res
})
