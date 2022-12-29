import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../song';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Storage, ref, uploadBytes} from '@angular/fire/storage';
import { debounceTime } from 'rxjs/operators';
import { SongsService } from '../services/songs.service';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  formulario: FormGroup;
  file1?: File | null ; // Variable to store file
  file2?: File | null ; // Variable to store file

  @Input() song?: Song;

  /* nameCtrl = null;
  artistCtrl = new FormControl('',[Validators.required]);
  albumCtrl = new FormControl('',[Validators.required]);
  yearCtrl = new FormControl('',[Validators.required]);
  timeCtrl = new FormControl('',[Validators.required]);  */

  constructor(private songsService: SongsService, private storage: Storage) {


    this.formulario = new FormGroup({
      name : new FormControl('',[Validators.required]),
      artist : new FormControl('',[Validators.required]),
      album : new FormControl('',[Validators.required]),
      year : new FormControl('',[Validators.required]),
      time : new FormControl('',[Validators.required]),
      id: new FormControl('',[Validators.required]),
      })
/*    this.nameCtrl.valueChanges
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
    }) */


   }
   async onSubmitSave(){
    console.log(this.formulario.value.id);
    const response = await this.songsService.updateSong(this.formulario.value);
    console.log(response);




  }

  async onSubmit(){
    /* console.log(this.formulario.value.id);
    const response = await this.songsService.updateSong(this.formulario.value);
    console.log(response); */

    this.songsService.uploadSong(this.file1, this.file2, this.formulario.value );


  }
  ngOnInit(): void {
    this.songsService.getSongs().subscribe(songs => {console.log(songs)})

  }
    // On file Select
  onChange1($event: any) {
      this.file1= $event;
  }

  onChange2($event: any) {
    this.file2= $event;
}
 /*  upload(file: File){
    this.songsService.uploadSong(file, this.formulario.value );
  } */



  //Para furura implementacion del boton guardar.

/*
  getName(event: Event){
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
