import { isDate, isValid } from 'date-fns'

export function isNotEmptyString (str:unknown): str is string {
  return !!(str && typeof str === 'string')
}

export function isValidDate (d:unknown):d is Date {
  if (!d) { return false }
  return isDate(d) && isValid(d)
}
