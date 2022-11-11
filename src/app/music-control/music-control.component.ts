import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {ListaCancionesComponent} from '../lista-canciones/lista-canciones.component';
import { Song } from '../song';


@Component({
  selector: 'app-music-control',
  templateUrl: './music-control.component.html',
  styleUrls: ['./music-control.component.css']
})
export class MusicControlComponent implements OnInit {

  audio: HTMLAudioElement = new Audio();
  playing: boolean = false;
  showVolume: boolean = false;
 // volume: number=0.5;
 currentSong: Song;

  constructor() { }
  progress = 0;


  ngOnInit(): void {
    
    
  }

  @Input() set song(src: Song) {
    this.currentSong = src;
    this.audio.src = src.url;
    this.audio.load();
    this.audio.volume = 0.5;
    this.audio.play();
  }



  playSound() {

    this.audio.play();
    this.updateProgress();
    this.playing = true;
    

  }

  pauseSound() {

    this.audio.pause();
    this.playing = false;

  }
  stopSound() {

    this.audio.pause();
    this.audio.currentTime = 0;
    this.playing = false;

  }
  previousSound() {
    this.audio.play();
    this.audio.load();

    //this.audio.previous(); 
    this.audio.currentTime = 0;
  }
  nextSound() {
    let ListaCanciones= new ListaCancionesComponent();
    let nextCancion = ListaCanciones.nextSong(this.currentSong)
    //this.audio.currentTime = 0;
    this.audio.src = nextCancion.url;
    this.audio.pause();
    this.audio.load();
    this.audio.volume = 0.5;
    this.audio.play();
    this.currentSong=nextCancion;


    }

  updateProgress() {

    this.progress = (this.audio.currentTime / this.audio.duration * 100 || 0)
    setTimeout(() => {
      this.updateProgress();
    }, 1000)


    //console.log("Progreso:" + this.progress);
    //console.log("Progreso:" + this.audio.currentTime);
  }
  secondsToString(seconds: number): string {
    if (isNaN(seconds)) seconds = 0;

    let hour: string | number = Math.floor(seconds / 3600);
    hour = (hour < 10) ? '0' + hour : hour;
    let minute: string | number = Math.floor((seconds / 60) % 60);
    minute = (minute < 10) ? '0' + minute : minute;
    let second: string | number = Math.floor(seconds % 60);
    second = (second < 10) ? '0' + second : second;

    return `${hour}:${minute}:${second}`;
  }
}
