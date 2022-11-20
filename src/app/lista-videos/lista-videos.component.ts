import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Video } from '../video';
import { VIDEOS } from '../mock-videos';
import { FilterPipe } from '../pipes/filter.pipe';


@Component({
  selector: 'app-lista-videos',
  templateUrl: './lista-videos.component.html',
  styleUrls: ['./lista-videos.component.css']
})
export class ListaVideosComponent implements OnInit {

  videoList: Video[] = VIDEOS;
  selectedVideo?: Video;
  sortBy: string = "name";
  filterVideo = '';
  filterVideo1 = '';
  filterVideo2 = '';


 


  @Output() videoEvent= new EventEmitter<Video>();
 
 
  constructor() { }

  

  ngOnInit(): void { }

  // get songs() {
  //   type ObjectKey = keyof typeof this.videoList[0];
  //   const field = this.sortBy as ObjectKey;
        
  //   return this.videoList.sort((a, b) => a[field] > b[field] ? 1 : -1);
  // }

  onSelect(video: Video): void {    
    this.selectedVideo = video;
    this.videoEvent.emit(this.selectedVideo);

  }

  nextVideo(currentVideo: Video): Video {   
    let nextVideo = this.videoList[0];
    
    for(let i of this.videoList){
      if(i == currentVideo){
        let index = this.videoList.indexOf(i);
        console.log('NextVideo');
        nextVideo = this.videoList[index+1]
      }
    }
    this.videoEvent.emit(nextVideo);
    this.onSelect(nextVideo);
    return nextVideo;

    
    
  }
}
