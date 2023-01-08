
import DOMParser from 'universal-dom-parser'

function convertStrToDocument (contentRaw:string):Document {
  const parser = new DOMParser()
  return parser.parseFromString(contentRaw, 'text/html')
}

function changeImgParams (doc:Document):Document {
  const images = doc.querySelectorAll('img')
  images.forEach((img:HTMLImageElement) => {
    img.setAttribute('data-src-url', img.src)
    img.src = img.src + '?q=50&fm=webp'
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
