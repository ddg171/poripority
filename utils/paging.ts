import { LinkParams } from '~~/types'

export function prev (offset:number = 0, articleNum:number = 0, totalCount:number = 0, limit:number = 0, category:string = ''):LinkParams|null {
  const currentPosition = offset + articleNum
  if (totalCount - currentPosition <= 0) { return null }
  let p = currentPosition >= totalCount ? '' : `/blog?offset=${currentPosition}`
  if (category) {
    p = p + `&category=${category}`
  }
  return { path: p, name: `次の${limit}件` }
}

export function next (offset:number = 0, articleNum:number = 0, limit:number = 0, category:string = ''):LinkParams|null {
  const currentPosition = offset + articleNum
  if (offset <= 0) { return null }

  let p = currentPosition <= limit ? '' : `/blog?offset=${offset - limit}`
  if (category) {
    p = p + `&category=${category}`
  }
  return { path: p, name: `前の${limit}件` }
}
