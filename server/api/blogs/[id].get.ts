import client from '~~/server/microCMS'
import { Article } from '~~/types'

export default defineEventHandler(async (event):Promise<Article> => {
  const contentId = event.context.params.id
  const res = await client
    .get({
      endpoint: 'blogs',
      contentId
    })
  return res
})
