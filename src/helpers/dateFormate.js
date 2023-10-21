import { formatDistanceToNow } from 'date-fns';

export function dateFormate(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
