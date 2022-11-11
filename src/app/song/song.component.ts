import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { Songs } from '../mock-songs';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  songlist = new Songs();
  songs = this.songlist.SONGS
  selectedSong?: Song;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(song: Song): void {
    this.selectedSong = song;
  }

}
