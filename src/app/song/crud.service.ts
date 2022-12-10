import { Injectable } from '@angular/core';
import {Song} from '../song'
import { AngularFirestore} from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  cancionesBDD: Song[] = [];

    constructor(private angularFirestore: AngularFirestore) {}

    getSongs(){

        this.angularFirestore.collection('canciones')
        .valueChanges()
        .subscribe(docs => {

          docs.forEach(doc => (console.log(doc)
          )); 
          return this.cancionesBDD=docs as Song[]
        });
    }

    createSong(song: Song){
     

        this.angularFirestore.collection("canciones").add(Object.assign({}, song))
      }
    


}
