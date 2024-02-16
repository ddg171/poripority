import { MicroCMSImage } from '~~/types/components'

export function resizeWithTargetWidth (eyecatch:MicroCMSImage, targetWidth:number, webp = true):MicroCMSImage {
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

export function cropSquare (eyecatch?:MicroCMSImage, webp = true, size = 400):MicroCMSImage|null {
  if (!eyecatch) { return null }
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

export function getImageExt (filePath:string):string|undefined {
  try {
    const urlArry = filePath.split('.')
    return urlArry[urlArry.length - 1]
  } catch {
    return undefined
  }
}

type ImageFormat ='webp'|'jpg'|'png'

export function checkImageFormat (filePath:string):ImageFormat|undefined {
  if (!filePath) { return undefined }
  const ext = getImageExt(filePath)
  if (!ext) { return undefined }
  const extLower = ext.toLocaleLowerCase()
  if (['jpg', 'jpeg'].includes(extLower)) { return 'jpg' }
  if (['png'].includes(extLower)) { return 'png' }
  if (['webp'].includes(extLower)) { return 'webp' }
  return undefined
}
