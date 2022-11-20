import { Time } from "@angular/common";

export interface Video {
  id: number;
  name: string;
  artist: string;
  album: string;
  year: number;
  time: string;
  imagen: string;
  url: string;
}