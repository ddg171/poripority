import { Eyecatch } from '~~/types/components'

export function resizeWithTargetWidth (eyecatch:Eyecatch, targetWidth:number, webp:boolean = true):Eyecatch {
  if (!eyecatch) { return eyecatch }
  const origWidth:number = eyecatch.width
  const origHeight:number = eyecatch.height
  const isBigger:boolean = origWidth > targetWidth
  const width:number = Math.floor(isBigger ? targetWidth : origWidth)
  const height:number = Math.floor(isBigger ? origHeight * (targetWidth / origWidth) : origHeight)
  const url = eyecatch.url + `?h=${height}&w=${width}` + (webp ? '&fm=webp' : '')
  return {
    url,
    width,
    height
  }
}

export function cropSquare (eyecatch:Eyecatch, webp:boolean = true, size = 400):Eyecatch {
  if (!eyecatch) { return eyecatch }
  const url = removeURLParams(eyecatch.url) + `?fit=crop&h=${size}&w=${size}&q=70` + (webp ? '&fm=webp' : '')
  return {
    url,
    height: size,
    width: size
  }
}

export function getURLParams (url:string, key:string):string|undefined {
  try {
    const u = new URL(url)
    const query = u.searchParams
    return query.get(key) || undefined
  } catch {
    return undefined
  }
}

export function removeURLParams (url:string):string|undefined {
  try {
    const urlArry = url.split('?')
    return urlArry[0]
  } catch {
    return undefined
  }
}

export function isWebp (filePath:string):boolean {
  return filePath.toLocaleLowerCase().match(/\.webp$/i) !== null
}
