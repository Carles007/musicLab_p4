import { Time } from "@angular/common";

export class Song {

  constructor(
    public idSong: number,
    public name: string,
    public artist: string,
    public album: string,
    public year: number,
    public time: string,
    public imagen: string,
    public url: string,
  ){}
}
