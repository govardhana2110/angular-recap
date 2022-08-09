import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrusd'
})
export class InrusdPipe implements PipeTransform {

  transform(value: number): any {
    return value*80;
  }

}
