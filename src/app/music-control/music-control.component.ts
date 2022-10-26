import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import{ Howl} from 'howler';

@Component({
  selector: 'app-music-control',
  templateUrl: './music-control.component.html',
  styleUrls: ['./music-control.component.css']
})
export class MusicControlComponent implements OnInit {

  

  constructor() { }

  player: Howl = new Howl({
    src:[]
  });

  progress = 0;  


  ngOnInit(): void {
  }

  start(){
    console.log("playing Song");
    this.player = new Howl({
      src:["./assets/mp3/Kiss.mp3","./assets/mp3/The Trooper.mp3"],
    
    onplay : ()=>{
      this.updateProgress();
    }});
    this.player.play();
  }

  stop(){
    console.log("Stopping Song");
    this.player.stop();
  }

  togglePlayer(){

  }

  next(){

  }

  prev(){
    

  }

  updateProgress(){

    let seek = this.player.seek();
    this.progress = (seek/this.player.duration()*100 || 0) 
    setTimeout(() =>{
      this.updateProgress();
    },1000)
    

    console.log("Progreso:"+this.progress);
  }


}
