export function makeDynamicMeta (title:string, description:string, robots = 'all', type = 'website', image:string|undefined = undefined) {
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
