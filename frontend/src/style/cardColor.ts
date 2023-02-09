import { Child } from '@/model/model';

export function getCardColor(child: Child): string {
  return child.gender === 'M'
    ? '#e4ffde'
    : child.gender === 'W'
    ? '#ffd3fd'
    : '#fffddb';
}
