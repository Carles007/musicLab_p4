import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, setDoc, doc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Song } from '../song';
import { Storage, ref, uploadBytes, getDownloadURL} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
 
  

  constructor(private firestore: Firestore,private storage: Storage) { }
 
  addSong(song: Song){
    const songRef = collection(this.firestore,'canciones');
    return addDoc(songRef, song);
  }

  getSongs(): Observable<Song[]>{
    const songRef = collection(this.firestore,'canciones');
    return collectionData(songRef,{idField: 'id'}) as Observable<Song[]>;

  }

  updateSong(song: Song){
    
    const songRef = doc(this.firestore,'canciones',`${song.id}`);
    return setDoc(songRef, {
      name: song.name,
      artist: song.artist,
      album: song.album,
      year: song.year,
      time: song.time,
      
   },
   { merge: true });
  }

  updateImage($event: any, song: Song){

    const songRefUpadated = doc(this.firestore,'canciones',`${song.id}`);
   
    const file = $event.target.files[0];
    console.log(file);

    const songRef= ref(this.storage,`img/${file.name}` );
    
    uploadBytes(songRef, file)
    .then(async response => {

      console.log(response);

      const downloadURL = await getDownloadURL(ref(songRef));

      console.log(downloadURL);

      const songReffirestore = collection(this.firestore,'canciones');
      
      return setDoc(songRefUpadated, {
        name: song.name,
        artist: song.artist,
        album: song.album,
        year: song.year,
        time: song.time,
        imagen: downloadURL
     },
     { merge: true });
    })

    
  }

  uploadSong($event: any, song: Song){

    
    const file = $event.target.files[0];
    console.log(file);

    const songRef= ref(this.storage,`mp3/${file.name}` );
    
    uploadBytes(songRef, file)
    .then(async response => {

      console.log(response);

      const downloadURL = await getDownloadURL(ref(songRef));

      console.log(downloadURL);

      const songReffirestore = collection(this.firestore,'canciones');
      
      return addDoc(songReffirestore, {
        name: song.name,
        artist: song.artist,
        album: song.album,
        year: song.year,
        time: song.time,
        url: downloadURL
     });

      })
    .catch(error => console.log(error));

    

    
  }
}
