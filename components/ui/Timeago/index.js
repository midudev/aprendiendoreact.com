import { spanishLocale } from './locale'
import timeago from 'timeago.js'

timeago.register('es', spanishLocale)
const timeagoInstance = timeago()

export function Timeago ({ date }) {
  return timeagoInstance.format(date, 'es')
}
