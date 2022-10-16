import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { SONGS } from '../mock-songs';

@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.css']
})
export class ListaCancionesComponent implements OnInit {

  songs = SONGS;
  selectedSong?: Song;

  constructor() { }
 

  ngOnInit(): void {

  }
  onSelect(song: Song): void {
    this.selectedSong = song;
  }


}
