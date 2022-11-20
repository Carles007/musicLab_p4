import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Song } from '../song';
import { SONGS } from '../mock-songs';
import { FilterPipe } from '../pipes/filter.pipe';


@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.css']
})
export class ListaCancionesComponent implements OnInit {

  songList: Song[] = SONGS;
  selectedSong?: Song;
  sortBy: string = "name";
  filterSong = '';
  filterSong1 = '';
  filterSong2 = '';


 


  @Output() songEvent = new EventEmitter<Song>();
 
 
  constructor() { }

  

  ngOnInit(): void { }

  // get songs() {
  //   type ObjectKey = keyof typeof this.songList[0];
  //   const field = this.sortBy as ObjectKey;
        
  //   return this.songList.sort((a, b) => a[field] > b[field] ? 1 : -1);
  // }

  onSelect(song: Song): void {    
    this.selectedSong = song;
    this.songEvent.emit(this.selectedSong);

  }

  deleteSong(song: Song): void {
    this.nextSong();
    if (this.selectedSong == song) this.previousSong();
    if (this.selectedSong == song) this.selectedSong = undefined;

    this.songList = this.songList.filter (s => s != song);
  }

  nextSong(): void {   
    const currentIndex = this.songList.findIndex(s => s == this.selectedSong);
    const nextIndex = Math.min(currentIndex + 1, this.songList.length);
    this.onSelect(this.songList[nextIndex]);
  }

  previousSong(): void {
    const currentIndex = this.songList.findIndex(s => s == this.selectedSong);
    const prevIndex = Math.max(currentIndex - 1, 0);
    this.onSelect(this.songList[prevIndex]);
  }
}
