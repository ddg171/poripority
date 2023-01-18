
export function isNotEmptyString (str:unknown): str is string {
  return !!(str && typeof str === 'string')
}
