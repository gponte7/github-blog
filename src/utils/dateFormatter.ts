import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('pt-br')
dayjs.extend(relativeTime)

export function dateFormatter(date: string) {
  return (
    dayjs(date).fromNow().charAt(0).toUpperCase() +
    dayjs(date).fromNow().slice(1)
  )
}
