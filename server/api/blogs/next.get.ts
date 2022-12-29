import client from '~~/components/server/microCMS'
import { Api, ArticleRef } from '~~/types'

export default defineEventHandler(async (event):Promise<Api.IndexResponsePayload<ArticleRef>> => {
  const params = getQuery(event)
  const publishedAt = params.publishedAt
  const limit = 1
  const filters:string = `publishedAt[greater_than]${publishedAt}`
  const queries:Api.BlogQuery = {
    orders: '-publishedAt',
    fields: 'id,title,publishedAt,category',
    filters,
    limit
  }
  const res = await client
    .get({
      endpoint: 'blogs',
      queries
    })
  return res
})
