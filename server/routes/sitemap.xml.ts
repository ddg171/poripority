import client from '~~/lib/microCMS'
import { Api } from '~~/types/articles'

export default defineEventHandler(async (event) => {
  const baseURL = process.env.BASE_URL
  const queries:Api.BlogQuery = {
    orders: '-publishedAt',
    fields: 'id',
    limit: 100
  }
  const articles = await client.get({ endpoint: 'blogs', queries })
  let sitemapStr = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`

  const pathList = ['', '/works', '/about', '/blog', '/disclaimer']
  articles.contents?.forEach((article:{id:string}) => {
    if (!article?.id) { return }
    pathList.push(`/blog/${article.id}`)
  })
  pathList.forEach((path:string) => {
    const u = `<url><loc>${baseURL}${path}</loc></url>`
    sitemapStr = sitemapStr + u
  })

  sitemapStr = sitemapStr + '</urlset>'
  event.node.res.setHeader('content-type', 'text/xml')
  event.node.res.end(sitemapStr)
})
