import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
// import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  register(email:string, password:string) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  loginWitGoogle(){
    return new Promise((resolve, reject) => {
      let provider = new firebase.auth.GoogleAuthProvider();
      this.auth.auth.signInWithPopup(provider)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })

    })
  }

  loginWithEmailAndPassword(email:string, password:string){
    return new Promise((resolve, reject) => {
      this.auth.auth.signInWithEmailAndPassword(email, password)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  logout(){
    return this.auth.auth.signOut()
  }

  getAuth(){
    return this.auth.authState
  }
}
