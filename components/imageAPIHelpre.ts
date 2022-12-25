import { Eyecatch } from '~~/types'

export function resizeWithTargetWidth (eyecatch:Eyecatch, targetWidth:number, webp:boolean = true):Eyecatch {
  const origWidth:number = eyecatch.width
  const origHeight:number = eyecatch.height
  const isBigger:boolean = origWidth > targetWidth
  const width:number = isBigger ? targetWidth : origWidth
  const height:number = isBigger ? origHeight * (targetWidth / origWidth) : 0
  const url = eyecatch.url + `?h=${height}&w=${width}` + (webp ? '&fm=webp' : '')
  return {
    url,
    width,
    height
  }
}

export function cropSquare (eyecatch:Eyecatch, webp:boolean = true, size = 400):Eyecatch {
  const url = eyecatch.url + `?fit=crop&h=${size}&w=${size}&q=70` + (webp ? '&fm=webp' : '')
  return {
    url,
    height: size,
    width: size
  }
}
