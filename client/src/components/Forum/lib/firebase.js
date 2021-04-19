import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA9IUHhDfZiGGdg7ymxrU3UGRL2kEzvF34",
    authDomain: "unity-forum.firebaseapp.com",
    projectId: "unity-forum",
    storageBucket: "unity-forum.appspot.com",
    messagingSenderId: "458591156148",
    appId: "1:458591156148:web:98effcb9ae0ead999024e1",
    measurementId: "G-L647W5JJTV"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const db = initFirebase.firestore();

  export default db;