import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concat',
})
export class ConcatPipe implements PipeTransform {
  transform(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  }
}
