import { formatDistanceToNow, format } from 'date-fns';


export function dateFormate(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formateDate(date) {
  return format(new Date(date), 'Pp')
}
