import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../song';
import { FormControl, Validators } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {


  nameCtrl = new FormControl('',[Validators.required]);
  artistCtrl = new FormControl('',[Validators.required]);
  albumCtrl = new FormControl('',[Validators.required]);
  yearCtrl = new FormControl('',[Validators.required]);
  timeCtrl = new FormControl('',[Validators.required]);

  @Input() song?: Song;


  constructor() {

    this.nameCtrl.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value =>{
      console.log(value)
    })

    this.artistCtrl.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value =>{
      console.log(value)
    })

    this.albumCtrl.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value =>{
      console.log(value)
    })

    this.yearCtrl.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value =>{
      console.log(value)
    })

    this.timeCtrl.valueChanges
    .pipe(
      debounceTime(500)
    )
    .subscribe(value =>{
      console.log(value)
    })

   }

  ngOnInit(): void {
  }


  //Para furura implementacion del boton guardar.


/*   getName(event: Event){
    event.preventDefault();
    console.log(this.nameCtrl.value);
  }
  getArtist(event: Event){
    event.preventDefault();
    console.log(this.artistCtrl.value);
  }
  getAlbum(event: Event){
    event.preventDefault();
    console.log(this.albumCtrl.value);
  }
  getYear(event: Event){
    event.preventDefault();
    console.log(this.yearCtrl.value);
  }
  getTime(event: Event){
    event.preventDefault();
    console.log(this.timeCtrl.value);
  }
 */

}
