import { Injectable } from '@angular/core';
import {Song} from '../song'
import { AngularFirestore} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  cancionesBDD: Song[] = [];

 // songsRef!: AngularFireList<any[]>;
 //   songRef!: AngularFireObject<any>;
    constructor(private angularFirestore: AngularFirestore) {}
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
    


}
