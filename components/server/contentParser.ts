
import { JSDOM } from 'jsdom'

function convertStrToDocument (contentRaw:string):Document {
  const dom = new JSDOM(contentRaw)
  return dom.window.document
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
