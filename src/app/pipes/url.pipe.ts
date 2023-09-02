import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {

  transform(value: string, args?: any): any {
      const mas = value.split('/')
      return mas[mas.length - 1]
  }

}
