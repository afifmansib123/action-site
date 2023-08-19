import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: 'AIzaSyCbDHjASrAGq_qQh9WNbWESnTUTHK6jZes',
  authDomain: 'auction-site-89bd1.firebaseapp.com',
  projectId: 'auction-site-89bd1',
  storageBucket: 'auction-site-89bd1.appspot.com',
  messagingSenderId: '731721532151',
  appId: '1:731721532151:web:96b37ffdcc443018e449f2',
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
