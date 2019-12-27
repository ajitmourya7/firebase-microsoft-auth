import { Component } from '@angular/core';
import * as firebase from 'firebase';
import * as graph from '@microsoft/microsoft-graph-client';
import('isomorphic-fetch');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'firebase-microsoft-auth';
  constructor() {
    this.signWithMicrosoft();
  }

  signWithMicrosoft() {
    const self  = this;
    const provider = new firebase.auth.OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      // Force re-consent.
      prompt: 'select_account',
      tenant: 'your microsoft tenant id',
      client_id: 'your microsoft client id',
      response_type: 'code id_token',
      redirect_uri: 'firebase redirecting uri'
    });
    provider.addScope('profile');
    provider.addScope('user.read');
    firebase.auth().signInWithPopup(provider)
      // tslint:disable-next-line:only-arrow-functions
      .then(function(result) {
        console.log(result);
        // User is signed in.
        // IdP data available in result.additionalUserInfo.profile.
        // OAuth access token can also be retrieved:
        // result.credential.accessToken
        // OAuth ID token can also be retrieved:
        // result.credential.idToken
      })
      // tslint:disable-next-line:only-arrow-functions
      .catch(function(error) {
        console.log(error);
        // Handle error.
      });
  }
}
