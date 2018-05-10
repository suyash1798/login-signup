// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import * as firebase from 'firebase';

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCzSbcsT6lPerxpLFNrJU9kw9vEVgkhM4M',
    authDomain: 'chat-48eb4.firebaseapp.com',
    databaseURL: 'https://chat-48eb4.firebaseio.com',
    projectId: 'chat-48eb4',
    storageBucket: 'chat-48eb4.appspot.com',
    messagingSenderId: '201949142509'
  }
}
