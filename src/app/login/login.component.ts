import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AngularFireAuth) { }

  ngOnInit() {
  }

  LoginWithFb(){
    this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider);
  }

  LoginWithGoogle(){
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);
  }

  Login(){

  }
}
