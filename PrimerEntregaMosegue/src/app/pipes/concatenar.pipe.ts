import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'concatenar',
})
export class ConcatenarPipe implements PipeTransform {
  transform(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
  }
}
