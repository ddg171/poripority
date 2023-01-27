
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
      img.src = removeURLParams(img.src) + '?q=30'
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

function wrapImgs (doc:Document):Document {
  const imgs = doc.querySelectorAll('img')
  imgs.forEach((img) => {
    const clonedImg = img.cloneNode(true)
    const d = doc.createElement('div')
    d.setAttribute('class', 'img-wrapper')
    d.appendChild(clonedImg)
    img.parentNode?.insertBefore(d, img)
    img.parentNode?.removeChild(img)
  })
  return doc
}

export function convertContent (contentRaw:string|null|undefined):string {
  if (!contentRaw || typeof contentRaw !== 'string') { return '' }
  const doc = convertStrToDocument(contentRaw)
  const resizedDoc = wrapImgs(changeImgParams(doc))
  return formatDocToString(resizedDoc)
}
