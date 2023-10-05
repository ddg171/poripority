import client from '~~/lib/microCMS'
import { Category } from '~~/types/articles'

export default defineEventHandler(async (event):Promise<Category> => {
  setHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=3600')
  const contentId = event?.context?.params?.id || ''
  if (!contentId) {
    throw createError({ statusCode: 400, statusMessage: 'err' })
  }
  const res = await client
    .get({
      endpoint: 'categories',
      contentId
    })
  return res
})
