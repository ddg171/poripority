import client from '~~/lib/microCMS'
import { isNotEmptyString } from '~~/utils/validator'
import { Api, ArticleRef } from '~~/types/articles'

export default defineEventHandler(async (event):Promise<Api.IndexResponsePayload<ArticleRef>> => {
  const params = getQuery(event)
  setHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=3600')
  const publishedAt = params.publishedAt
  const category = params.category
  const limit = 1
  let filters:string = `publishedAt[less_than]${publishedAt}`
  if (isNotEmptyString(category)) {
    filters = filters + `[and]category[equals]${category}`
  }
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
