import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';

// Use your own configs!
const app = firebase.initializeApp({
  apiKey: "AIzaSyCDwt7tjJVKl8qbzFK9gmfbza-Kw9_3mj4",
  authDomain: "auction-site-2a7f4.firebaseapp.com",
  projectId: "auction-site-2a7f4",
  storageBucket: "auction-site-2a7f4.appspot.com",
  messagingSenderId: "688575223108",
  appId: "1:688575223108:web:6f7a4128447f1fb28cf311",
  measurementId: "G-HR4EX3TM4D"
});

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export const firestoreApp = app.firestore();
export const storageApp = app.storage();
export const authApp = app.auth();
