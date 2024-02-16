import { LinkParams } from '~~/types/components'

export function prev (offset = 0, articleNum = 0, totalCount = 0, limit = 0, category = ''):LinkParams|null {
  const currentPosition = offset + articleNum
  if (totalCount - currentPosition <= 0) { return null }
  let p = currentPosition >= totalCount ? '' : `/blog?offset=${currentPosition}`
  if (category) {
    p = p + `&category=${category}`
  }
  return { path: p, name: `次の${limit}件` }
}

export function next (offset = 0, articleNum = 0, limit = 0, category = ''):LinkParams|null {
  const currentPosition = offset + articleNum
  if (offset <= 0) { return null }

  let p = currentPosition <= limit ? '' : `/blog?offset=${offset - limit}`
  if (category) {
    p = p + `&category=${category}`
  }
  return { path: p, name: `前の${limit}件` }
}
