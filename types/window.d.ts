/* eslint-disable no-var */

declare global{
var twttr:{widgets:{load:Function}}|undefined
var instgrm:{embed:unknown}|undefined
interface EventTarget{
    id?:string
    parentNode?:HTMLElement|null
}
}

export { twwr, instgrm }
