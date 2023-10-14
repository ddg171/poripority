export interface LinkParams {
    id?:string
    name:string
    path:string
    disabled?:boolean
    isExternal?:boolean
}
export interface PictureBoxProp {
    src: string
    alt: string
    title: string
    fromCMS?:boolean
}
export interface Photo {
  isShow:boolean
  src:string
}

export interface SliderContent {
    pic: PictureBoxProp,
      text: {
        title: string,
        para: string[],
        to?:string,
        isTight?:boolean
      }
}

export interface PageTitleProp {
    title:string,
    topImg:PictureBoxProp|null,
    subtitles:string[]
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
