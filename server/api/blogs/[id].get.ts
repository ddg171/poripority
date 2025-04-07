import client from '~~/lib/microCMS'
import { Article } from '~~/types/articles'

export default defineEventHandler(async (event):Promise<Article> => {
  const contentId = event?.context?.params?.id
  if (!contentId) {
    throw createError({ statusCode: 400, statusMessage: 'err' })
  }
  try {
    const res = await client
      .get({
        endpoint: 'blogs',
        contentId
      })
    return res
  } catch {
    throw createError({ statusCode: 404, statusMessage: 'err' })
  }
})
