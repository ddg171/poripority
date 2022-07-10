
import DOMParser from 'universal-dom-parser'

function convertStrToDocument (contentRaw:string):Document {
  const parser = new DOMParser()
  return parser.parseFromString(contentRaw, 'text/html')
}

function changeImgParams (doc:Document):Document {
  const images = doc.querySelectorAll('img')
  images.forEach((img:HTMLImageElement) => {
    img.src = img.src + '?q=70&fm=webp'
  })
  return doc
}

function formatDocToString (doc:Document):string {
  return doc.body.innerHTML
}

export function convertContent (contentRaw:string):string {
  const doc = convertStrToDocument(contentRaw)
  const resizedDoc = changeImgParams(doc)
  return formatDocToString(resizedDoc)
}
