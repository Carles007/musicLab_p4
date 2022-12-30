import { Injectable } from '@angular/core';
import { Firestore, addDoc, collectionData, setDoc, doc, deleteDoc } from '@angular/fire/firestore';
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
    const songRef = collection(this.firestore,'songs');
    return addDoc(songRef, song);
  }

  getSongs(): Observable<Song[]>{
    const songRef = collection(this.firestore,'songs');
    return collectionData(songRef,{idField: 'id'}) as Observable<Song[]>;

  }

  deleteSong(song: Song) {
    if (!confirm('Are you sure you want to delete this song?')) return;
    const songRef = doc(this.firestore,'songs',`${song.id}`);
    return deleteDoc(songRef);
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

  uploadSong($event1:any, $event2:any, song: Song){


    const mp3 = $event1.target.files[0];
    const img = $event2.target.files[0];
    console.log(mp3);

    const songRef= ref(this.storage,`mp3/${mp3.name}` );
    const imgRef = ref(this.storage, `img/${img.name}`);

    uploadBytes(songRef, mp3)
    .then(async response => {

      console.log(response);

      const downloadURLmp3 = await getDownloadURL(ref(songRef));

      console.log(downloadURLmp3);

      uploadBytes(imgRef, img)
      .then(async response => {

        const downloadURLimg = await getDownloadURL(ref(imgRef));

      const songReffirestore = collection(this.firestore,'songs');

      return addDoc(songReffirestore, {
        name: song.name,
        artist: song.artist,
        album: song.album,
        year: song.year,
        time: song.time,
        url: downloadURLmp3,
        imagen: downloadURLimg

     });
    }).catch(error => console.log(error));
    })
    .catch(error => console.log(error));




  }
}
