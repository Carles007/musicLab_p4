import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Song } from '../song';
import { Songs } from '../mock-songs';
import { FilterPipe } from '../pipes/filter.pipe';
import {PageEvent} from '@angular/material/paginator';
import { SongsService } from '../services/songs.service';

@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.css']
})
export class ListaCancionesComponent implements OnInit {

  selectedSong?: Song;

  songList: Song[] = [];

  sortBy: string = "name";
  filterSong = '';
  filterSong1 = '';
  filterSong2 = '';

  pageEvent: PageEvent = new PageEvent;
  length: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;
 

  @Input() song?: Song;
  @Output() songEvent = new EventEmitter<Song>();

 
  constructor(private songsService: SongsService) { }

  ngOnInit(): void {
   /*  this.songList = this.songService.getSongs(this.pageSize, this.pageIndex*this.pageSize);
    this.length = this.songService.getLength(); */
    this.songsService.getSongs().subscribe(songs => {
      this.songList = songs;
    })
  }

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
  
  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    /* this.songList = this.songService.getSongs(this.pageSize, this.pageIndex*this.pageSize); */
  }
}
