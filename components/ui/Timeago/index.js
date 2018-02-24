import { spanishLocale } from './locale'
import timeago from 'timeago.js'

console.log(spanishLocale)
timeago.register('es', spanishLocale)
console.log(timeago)
const timeagoInstance = timeago()
console.log(timeagoInstance)

export function Timeago ({ date }) {
  return timeagoInstance.format(date, 'es')
}
