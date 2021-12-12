import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capital'
})
export class CapitalPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    return value.replace(/(?:^|\s)\S/g, function(a:string) { return a.toUpperCase(); });
  }

}
