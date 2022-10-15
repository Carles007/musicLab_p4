import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { SONGS } from '../mock-songs';


@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {

  songs = SONGS;
  selectedSong?: Song;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(song: Song): void {
    this.selectedSong = song;
  }

}
