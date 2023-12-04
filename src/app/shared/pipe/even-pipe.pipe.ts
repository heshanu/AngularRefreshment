import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenPipe'
})
export class EvenPipePipe implements PipeTransform {

  constructor() {}

  transform(value: number, ...args: unknown[]): unknown {
    if (value % 2 === 0) {
      return value;
    }
    return null;
  }

}
