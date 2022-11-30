import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ListaCancionesComponent } from '../lista-canciones/lista-canciones.component';
import { Song } from '../song';

@Component({
  selector: 'app-music-control',
  templateUrl: './music-control.component.html',
  styleUrls: ['./music-control.component.css'],
})
export class MusicControlComponent implements OnInit {
  audio: HTMLAudioElement = new Audio();
  playing: boolean = false;
  repeat: boolean = false;
  showVolume: boolean = false;
  // volume: number=0.5;
  currentSong: Song | undefined;
  volumenSelected:number =0.1;
  progress = 0;

  @Output() deleteEvent = new EventEmitter<Song>();
  @Output() nextEvent = new EventEmitter();
  @Output() prevEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  @Input() set song(src: Song) {
    this.currentSong = src;
    this.audio.src = src.url;
    this.audio.load();
    //this.audio.volume = 0.5;
    this.playSound();
    this.playing = true;
  }

  playSound() {
    console.log("play sound", this.audio.duration);
    console.log(this.currentSong);

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
    this.stopSound();
    this.prevEvent.emit();
  }
  nextSound() {
    this.stopSound();
    this.nextEvent.emit();
  }
  repeatSound() {
    let audio = new Audio();
    //   var playlist = this.state.sequence; // load the sequence of sounds
    //   audio.src = playlist[0].src; // set the source of the first file in my array
    audio.play();
    // when the song ends, load the new sound
    audio.addEventListener(
      'ended',
      function () {
        // increment playlist[i].src
      },
      true
    );
    audio.loop = false;
  }
  deleteSound() {
    if (confirm('Are you sure you want to delete this song?')) {
      this.stopSound();
      this.deleteEvent.emit(this.currentSong);
    }
  }

  updateProgress() {
    this.audio.volume = this.volumenSelected;
    this.progress = (this.audio.currentTime / this.audio.duration) * 100 || 0;
    
    setTimeout(() => {
      this.updateProgress();
    }, 1000);
    

    if (this.progress == 100) {
      this.stopSound();
      if (this.repeat) {
        this.playSound();
      } else {
        this.nextSound();
      }
    }
  }
  secondsToString(seconds: number): string {
    if (isNaN(seconds)) seconds = 0;

    let hour: string | number = Math.floor(seconds / 3600);
    hour = hour < 10 ? '0' + hour : hour;
    let minute: string | number = Math.floor((seconds / 60) % 60);
    minute = minute < 10 ? '0' + minute : minute;
    let second: string | number = Math.floor(seconds % 60);
    second = second < 10 ? '0' + second : second;

    return `${hour}:${minute}:${second}`;
  }
}
