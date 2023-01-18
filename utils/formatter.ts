import { format } from 'date-fns'
import { isValidDate } from './validator'

const publishedAtFormat:string = 'yyyy/MM/dd HH:mm:ss'

function formatDate (d:unknown, f:string):string {
  if (!isValidDate(d)) {
    return 'n/a'
  }
  return format(d, f)
}

export const articleDate = (d:Date) => formatDate(d, publishedAtFormat)
