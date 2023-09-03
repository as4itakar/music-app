import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: number): string{
    let time: string
    let min: string = '0'
    let sec: string = Math.trunc(value).toString()
    if (value >= 60){
      min = Math.trunc(value / 60).toString()
      sec = Math.trunc(value % 60).toString()
    }
    if (min.length === 1){
      min = '0' + min
    }
    if (sec.length === 1){
      sec = '0' + sec
    }
    return min + ':' + sec;
  }

}
