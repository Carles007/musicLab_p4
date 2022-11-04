import { Pipe, PipeTransform } from '@angular/core';
import { Song } from '../song';

@Pipe({
  name: 'selector'
})
export class SelectorPipe implements PipeTransform {
  
  transform(value: any, arg: any): any {   
    const resultSongs = value;

    return resultSongs.sort((a: string, b: string) => a[arg] > b[arg] ? 1 : -1);
    
  }

}