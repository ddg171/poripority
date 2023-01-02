export const publishedAtFormat:string = 'yyyy/MM/dd HH:mm:ss'

export function isNotEmptyString (str:unknown): str is string {
  return !!(str && typeof str === 'string')
}
