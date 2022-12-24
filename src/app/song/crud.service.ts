import { Injectable } from '@angular/core';
import {Song} from '../song'
import { AngularFirestore} from '@angular/fire/compat/firestore';
import {Storage, ref, listAll, getDownloadURL} from '@angular/fire/storage';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  cancionesBDD: Song[] = [];

 // songsRef!: AngularFireList<any[]>;
 //   songRef!: AngularFireObject<any>;
    constructor(private angularFirestore: AngularFirestore, private storage:Storage) {

    }
    // Create Student
   /* AddStudent(song: Song) {
      console.log("hola");

      this.songsRef.push({
      id: song.id,
    name: song.name,
 
    });
    }*/

    getSongs(){

      return this.angularFirestore.collection('canciones').snapshotChanges();
     
    }

    createSong(song: Song){
     

        this.angularFirestore.collection("canciones").add(Object.assign({}, song))
      }

    getImagesStorage(){
        const imagesRef = ref(this.storage, 'img');
        listAll(imagesRef)
        .then(response => {
            console.log(response);
          for(let item of response.items){
             const url = getDownloadURL(item);
            console.log("Imagen devuelta")
            console.log(url);
          }
        })
        .catch(error => console.log(error));
    }
    


}
