import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { SONGS } from '../mock-songs';

@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.css']
})
export class ListaCancionesComponent implements OnInit {

  


  songList: Song[] = SONGS;
  selectedSong?: Song;
  sortBy: string = "name";

  constructor() { }
 

  ngOnInit(): void {

  }

  get songs() {
    type ObjectKey = keyof typeof this.songList[0];
    const field = this.sortBy as ObjectKey;

    console.log([field, this.songList[0][field]])
    return this.songList.sort((a, b) => a[field] > b[field] ? 1 : -1);
  }

  onSelect(song: Song): void {
    this.selectedSong = song;
  }

}
