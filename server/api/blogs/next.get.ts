import client from '~~/components/server/microCMS'
import { isNotEmptyString } from '~~/utils/util'

import { Api, ArticleRef } from '~~/types'

export default defineEventHandler(async (event):Promise<Api.IndexResponsePayload<ArticleRef>> => {
  const params = getQuery(event)
  const publishedAt = params.publishedAt
  const category = params.category
  const limit = 1
  let filters:string = `publishedAt[greater_than]${publishedAt}`
  if (isNotEmptyString(category)) {
    filters = filters + `[and]category[equals]${category}`
  }
  const queries:Api.BlogQuery = {
    orders: 'publishedAt',
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
