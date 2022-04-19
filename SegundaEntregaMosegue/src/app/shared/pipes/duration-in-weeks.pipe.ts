import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'durationInWeeks',
})
export class DurationInWeeksPipe implements PipeTransform {
  transform(startDate: Date, endDate: Date): number {
    return moment(startDate).diff(moment(endDate));
  }
}
