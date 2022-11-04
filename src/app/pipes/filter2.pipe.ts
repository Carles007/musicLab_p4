import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter2'
})
export class Filter2Pipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultSongs = [];
    
    for(const song of value){
        if(song.album.indexOf(arg) > -1){
          resultSongs.push(song);
        }
    }
    return resultSongs;
  }
}


