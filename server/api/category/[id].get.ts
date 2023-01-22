import client from '~~/server/microCMS'
import { Category } from '~~/types/articles'

export default defineEventHandler(async (event):Promise<Category> => {
  const contentId = event.context.params.id
  const res = await client
    .get({
      endpoint: 'categories',
      contentId
    })
  return res
})
