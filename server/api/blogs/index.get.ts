import client from '~~/server/microCMS'
import { isNotEmptyString } from '~~/utils/util'
import { Api, Article } from '~~/types/articles'

export default defineEventHandler(async (event):Promise<Api.IndexResponsePayload<Article>> => {
  const params = getQuery(event)
  const queries:Api.BlogQuery = {
    orders: '-publishedAt',
    fields: 'id,title,subtitle,eyecatch,updatedAt,createdAt,publishedAt,category'
  }
  const limit = Number(params.limit)
  if (!isNaN(limit)) {
    queries.limit = limit
  }
  const offset = Number(params.offset)
  if (!isNaN(offset)) {
    queries.offset = offset
  }
  const category = params.category
  if (isNotEmptyString(category)) {
    queries.filters = `category[equals]${category}`
  }
  const res = await client
    .get({
      endpoint: 'blogs',
      queries

    })
  return res
})
