import * as firebase from 'firebase';

import { FirebaseConfig } from './keys';

firebase.initializeApp(FirebaseConfig);

const databaseRef = firebase.database().ref();
firebase.database().ref('list').set({
  name: '1212',
  email: 'asdas',
});
 export const listRef = databaseRef.child('list');
