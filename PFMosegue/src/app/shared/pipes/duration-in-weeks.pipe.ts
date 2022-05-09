import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'durationInWeeks',
})
export class DurationInWeeksPipe implements PipeTransform {
  transform(startDate: Date, endDate: Date): number {
    const diff = moment(endDate).diff(moment(startDate));
    const diffInWeeks = moment.duration(diff).as('weeks');
    return Math.ceil(diffInWeeks);
  }
}
