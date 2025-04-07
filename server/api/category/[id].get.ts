import client from '~~/lib/microCMS'
import { Category } from '~~/types/articles'

export default defineEventHandler(async (event):Promise<Category> => {
  const contentId = event?.context?.params?.id
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
