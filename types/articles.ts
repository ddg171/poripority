import { MicroCMSQueries } from 'microcms-js-sdk'
import { MicroCMSImage, Reference } from './components'

interface Commonschema{
    id:string
    createdAt:string
    updatedAt:string
    publishedAt:string
    revisedAt:string
}

export interface Category extends Commonschema{
    name:string
}

export interface Ads extends Commonschema{
    name:string
    img:MicroCMSImage
    amazon:string
}

export interface Article extends Commonschema {
    title:string
    subtitle:string|null
    content:string
    eyecatch:MicroCMSImage
    category:Category
    references:Reference[]|null
    imageRefs?:{[T:string]:string}
    index?:{level:number, id:string, text:string}[]
    ads?:Ads[]
}

export type ArticleRef = Omit<Article, 'createdAt'|'updatedAt'|'revisedAt'|'subtitle'|'content'|'eyecatch'|'references'>

export type ArticleList = Omit<Article, |'content'|'references'>

export interface Image {id:string, url:string}
export type ImageList = Image[]

export interface Heading {
    level:number
    title:string|null
    id:string|null
}

export namespace Api {
    export type IndexResponsePayload<T=Article|Category|ArticleRef> ={
        contents:T[]
        totalCount: number
        offset?: number
        limit?:number
      }
      export interface BlogQuery extends MicroCMSQueries{
        limit?:number
        offset?:number
        orders:string
        filters?:string
        fields:'id,title,category' |string
      }

}
