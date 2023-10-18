import DOMParser from 'universal-dom-parser'
import { Heading, ImageList } from '~~/types/articles'

export function convertStrToDocument (contentRaw:string):Document {
  const parser = new DOMParser()
  return parser.parseFromString(contentRaw, 'text/html')
}

function changeImgParams (doc:Document):Document {
  const images = doc.querySelectorAll('img')
  images.forEach((img:HTMLImageElement, i:number) => {
    img.src = removeURLParams(img.src) + '?w=700&q=70'
    img.setAttribute('data-src-url', img.src)
    img.setAttribute('width', '700')
    img.setAttribute('height', '700')
    img.setAttribute('decording', 'async')
    // ２枚め以降の画像はlazyloadを有効にする
    if (i > 1) {
      img.setAttribute('loading', 'lazy')
    }
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
    img?.parentNode?.insertBefore(d, img)
    img?.parentNode?.removeChild(img)
  })
  return doc
}

function replaceImgToPicture (doc:Document):Document {
  const imgs = doc.querySelectorAll('img')
  imgs.forEach((img, i) => {
    const clonedImg = img.cloneNode(true)
    const p = doc.createElement('picture')
    p.setAttribute('id', `image-${i}`)
    const s = doc.createElement('source')
    s.setAttribute('type', 'image/webp')
    s.setAttribute('srcset', img.src + '&fm=webp')
    p.appendChild(s)
    p.appendChild(clonedImg)
    img?.parentNode?.insertBefore(p, img)
    img?.parentNode?.removeChild(img)
  })
  return doc
}

export function convertContent (contentRaw:string|null|undefined):string {
  if (!contentRaw || typeof contentRaw !== 'string') { return '' }
  const doc = convertStrToDocument(contentRaw)
  const resizedDoc = replaceImgToPicture(wrapImgs(changeImgParams(doc)))
  return formatDocToString(resizedDoc)
}

export function getImgList (doc:Document):ImageList {
  const imgs = doc.querySelectorAll('img')
  const result:ImageList = []
  imgs.forEach((i) => {
    const id = i.parentElement?.getAttribute('id')
    const url = removeURLParams(i.src)
    if (!id || !url) { return }
    result.push({
      id,
      url
    })
  })
  return result
}

export function getHeadingList (doc:Document):Heading[] {
  const headings = doc.querySelectorAll('h1,h2,h3,h4')
  const result:Heading[] = []
  headings.forEach((h) => {
    const level = Number(h.tagName.replace('h', '').replace('H', ''))
    const title = h.textContent
    const id = h.id
    const i:Heading = {
      level,
      title,
      id
    }
    result.push(i)
  })
  return result
}
