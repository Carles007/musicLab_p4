import { Injectable } from '@angular/core';
import { Songs } from '../mock-songs';
import { Song } from '../song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  songs: Array<Song> = [];

  constructor() {
    this.songs = new Songs().SONGS;
  }

  getSongs (limit?: number, start?: number): Song[] {
    let end = this.songs.length;

    if (limit !== undefined) {
      end = limit + (start ?? 0);
    }

    return this.songs.slice(start, end);
  }

  getLength (): number {
    return this.songs.length;
  }

 
}
