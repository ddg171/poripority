import { useRuntimeConfig } from '#app'
export type Robots ='all'|'index'|'noindex'|'follow'|'nofollow'
export type PageType = 'website'|'article'|'profile'|'video'|'music'|'book'|'product'

export function makeDynamicMeta (title:string, description:string, robots:Robots = 'all', type:PageType = 'website', image:string|undefined = undefined) {
  const head = {
    title,
    description,
    meta: [
      { name: 'robots', content: robots },
      { property: 'og:site_name', content: title },
      { name: 'description', content: description },
      { property: 'og:type', content: type },
      { name: 'twitter:card', content: 'summary' }
    ]
  }
  if (image) {
    head.meta.push(
      {
        property: 'og:image', content: image
      }
    )
  }
  return head
}

export function makeSeoMetaInput (title:string, description:string, robots:Robots = 'all', ogType:PageType = 'website', image:string|undefined = undefined) {
  const config = useRuntimeConfig()
  const head :{[T:string]:string|undefined} = {
    title,
    ogTitle: title,
    ogSiteName: config.public.siteName,
    description,
    ogDescription: description,
    robots,
    ogType,
    twitterCard: 'summary_large_image'
  }
  if (image) {
    head.ogImage = image
  }
  return head
}
