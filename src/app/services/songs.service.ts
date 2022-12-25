import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, setDoc, doc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Song } from '../song';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private firestore: Firestore) { }

  addSong(song: Song){
    const songRef = collection(this.firestore,'songs');
    return addDoc(songRef, song);
  }

  getSongs(): Observable<Song[]>{
    const songRef = collection(this.firestore,'songs');
    return collectionData(songRef,{idField: 'id'}) as Observable<Song[]>;

  }

  updateSong(song: Song){
    
    const songRef = doc(this.firestore,'songs',`${song.id}`);
    return setDoc(songRef, {
      name: song.name,
      artist: song.artist,
      album: song.album,
      year: song.year,
      time: song.time
   },
   { merge: true });
  }
}
