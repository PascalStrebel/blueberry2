import { Child } from '@/model/model';

export function getCardColor(child: Child): string {
  let asd =
    child.gender === 'M'
      ? '#e4ffde'
      : child.gender === 'W'
      ? '#ffd3fd'
      : '#fffddb';
  console.log(asd);
  return asd;
}
