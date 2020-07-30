import firebase from 'firebase';

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAYfwRNDZ2vv5Gr8oVbpkWNwkmi1xay__w",
  authDomain: "movie-app-f10d3.firebaseapp.com",
  databaseURL: "https://movie-app-f10d3.firebaseio.com",
  projectId: "movie-app-f10d3",
  storageBucket: "movie-app-f10d3.appspot.com",
  messagingSenderId: "589954061479",
  appId: "1:589954061479:web:3601434b48370f1faff782",
  measurementId: "G-HP7XYMHNYL"
});

export const db = firebaseConfig.firestore();
export const auth = firebaseConfig.auth();
