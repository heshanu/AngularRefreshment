import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usd2lkrs'
})
export class Usd2lkrsPipe implements PipeTransform {

  transform(value:number,v:string,...args: unknown[]): unknown {
    if (v.toLocaleLowerCase()=== 'usd') {
      return value;
    } else if (v.toLocaleLowerCase() === 'lkr') {
      return value * 360;
    }
    return null;
  }

}
