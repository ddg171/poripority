import client from '~~/lib/microCMS'
import { Article } from '~~/types/articles'

export default defineEventHandler(async (event):Promise<Article> => {
  const contentId = event.context?.params?.id
  const k = getQuery(event).key
  const draftKey = typeof k === 'string' ? k.toString() : null
  if (!contentId || !draftKey) {
    throw createError({ statusCode: 400, statusMessage: 'err' })
  }
  try {
    const res = await client
      .get({
        endpoint: 'blogs',
        contentId,
        queries: {
          draftKey
        }
      })
    return res
  } catch {
    throw createError({ statusCode: 404, statusMessage: 'err' })
  }
})
