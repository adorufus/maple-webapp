import {Injectable} from '@angular/core';
import {GoogleAuthProvider} from 'firebase/auth'
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AuthProvider} from 'firebase/auth'
import {Router} from "@angular/router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public fAuth: AngularFireAuth, private router: Router) {

  }

  GoogleLogin() {
    return this.AuthLogin(new GoogleAuthProvider())
  }

  AuthLogin(provider: AuthProvider) {
    this.fAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    return this.fAuth.signInWithPopup(provider).then((result) => {
      console.log(result)
      this.router.navigate(['/home']).then(r => {
        console.log("navigate to home")
      })
    }).catch(e => {
      console.log(e);
    })
  }
}
