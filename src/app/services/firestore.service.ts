import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, QueryFn} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private db: AngularFirestore) { }

  getDoc(path: string): any {
    try {
      return this.db.doc(path).valueChanges({idField: 'id'})
    } catch (e) {
      return e
    }
  }

  createDoc(path: string, data: any) {
    try {
      this.db.doc(path).set(data).then(r => {
        console.log("result: ", r)
      })
    } catch (e) {
      console.log(e)
    }
  }

  updateDoc(path: string, data: any) {
    try {
      this.db.doc(path).update(data).then(r => {
        console.log("result: ", r)
      })
    } catch (e) {
      console.log(e)
    }
  }

  getCollection(path: string, param?: QueryFn): any {
    try {
      return this.db.collection(path, param).valueChanges({idField: 'id'})
    } catch (e) {
      console.log(e)
      return e
    }
  }



}
