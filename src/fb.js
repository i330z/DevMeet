import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyAob5r7Ci5pIklGIVst4op4QEjjxEYoWlk",
    authDomain: "devmeet-67755.firebaseapp.com",
    databaseURL: "https://devmeet-67755.firebaseio.com",
    projectId: "devmeet-67755",
    storageBucket: "devmeet-67755.appspot.com",
    messagingSenderId: "589998447909"
  };
  firebase.initializeApp(config);

//   const db = firebase.firestore();
  const auth = firebase.auth();

 
  export default auth