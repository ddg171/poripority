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
      { property: 'og:type', content: type }
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
