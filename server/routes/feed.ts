import client from '~~/lib/microCMS'
import { Api, Article } from '~~/types/articles'
import { getTextContent } from '~~/utils/contentParser'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const baseURL = config.public.baseURL
  const queries:Api.BlogQuery = {
    orders: '-publishedAt',
    fields: 'id,title,content,publishedAt',
    limit: 100
  }
  const articles = await client.get({ endpoint: 'blogs', queries })

  // RSSフィードのヘッダー部分
  let rssStr = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${config.public.siteName}</title>
    <link>${baseURL}</link>
    <description>${config.public.description}</description>
    <language>ja-JP</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseURL}/feed" rel="self" type="application/rss+xml" />`

  // 記事データをRSS形式に変換
  articles.contents?.forEach((article: Article) => {
    if (!article?.id) { return }
    const pubDate = new Date(article.publishedAt).toUTCString()
    // 本文を100文字に制限
    const truncatedContent = getTextContent(article.content).substring(0, 100) + '...'
    rssStr += `
    <item>
      <title>${article.title}</title>
      <link>${baseURL}/blog/${article.id}</link>
      <guid>${baseURL}/blog/${article.id}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${truncatedContent}]]></description>
    </item>`
  })

  // RSSフィードのフッター部分
  rssStr += `
  </channel>
</rss>`

  // レスポンスヘッダーを設定
  event.node.res.setHeader('content-type', 'application/xml')
  event.node.res.end(rssStr)
})
