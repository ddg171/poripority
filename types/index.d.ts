import { MicroCMSQueries } from 'microcms-js-sdk'

export interface LinkParams {
    name:string
    path:string
}

export interface SliderContent {
    pic: {
        souce: string[]
        webp: string
        jpg: string
        alt: string
        title: string

      },
      text: {
        title: string,
        para: string[],
        to?:string
      }
}

export interface Reference{
    url:string
    title?:string
}

export interface Eyecatch{
    url:string
    height:number
    width:number

}

interface Commonschema{
    id:string
    createdAt:Date
    updatedAt:Date
    publishedAt:Date
    revisedAt:Date
}

export interface Category extends Commonschema{
    name:string
}

export interface Article extends Commonschema {
    title:string
    subtitle:string|null
    content:string
    eyecatch:Eyecatch
    category:Category
    references:Reference[]|null
}

export type ArticleList = Omit<Article, |'content'|'references'>

export namespace Api {
    export type IndexResponsePayload ={
        contents:Article[]
        totalCount: number
        offset?: number
        limit?:number
      }
      export interface BlogQuery extends MicroCMSQueries{
        limit?:number
        offset?:number
        orders:string
        fields:'id,title,subtitle,eyecatch,updatedAt,createdAt,category'
      }
}

export interface WindowWithEmbed extends Window {
    twttr?:{
        widgets:{
            load:Function
        }
    }
    instgrm?:{embed:unknown}
}
