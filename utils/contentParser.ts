
import DOMParser from 'universal-dom-parser'

function convertStrToDocument (contentRaw:string):Document {
  const parser = new DOMParser()
  return parser.parseFromString(contentRaw, 'text/html')
}

function changeImgParams (doc:Document):Document {
  const images = doc.querySelectorAll('img')
  images.forEach((img:HTMLImageElement) => {
    const height = Number(getURLParams(img.src, 'h'))
    const width = Number(getURLParams(img.src, 'w'))
    if (isNaN(height) || isNaN(width)) {
      img.src = img.src + '?q=40&fm=webp'
      img.setAttribute('data-src-url', img.src)
      return
    }
    const originalImg = {
      url: img.src,
      height,
      width
    }
    const resizedImg = resizeWithTargetWidth(originalImg, 500)
    img.setAttribute('data-src-url', img.src)
    img.src = resizedImg.url
  })
  return doc
}

function formatDocToString (doc:Document):string {
  return doc.body.innerHTML
}

export function convertContent (contentRaw:string|null|undefined):string {
  if (!contentRaw || typeof contentRaw !== 'string') { return '' }
  const doc = convertStrToDocument(contentRaw)
  const resizedDoc = changeImgParams(doc)
  return formatDocToString(resizedDoc)
}
