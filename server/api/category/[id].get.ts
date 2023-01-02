import client from '~~/components/server/microCMS'
import { Category } from '~~/types'

export default defineEventHandler(async (event):Promise<Category> => {
  const contentId = event.context.params.id
  const res = await client
    .get({
      endpoint: 'categories',
      contentId
    })
  return res
})
