import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpipe'
})
export class CpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
