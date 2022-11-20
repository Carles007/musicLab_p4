import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultSongs = [];
    for(const song of value){
        if(song.artist.toLowerCase().indexOf(arg.toLowerCase()) > -1){
          resultSongs.push(song);
        }
    }
    return resultSongs;
  }
}
