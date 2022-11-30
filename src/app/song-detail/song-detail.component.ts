import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../song';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {


  name = new FormControl('');

  @Input() song?: Song;


  constructor() { }

  ngOnInit(): void {
  }

}
