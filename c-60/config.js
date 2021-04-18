import firebase from 'firebase';

  const  firebaseConfig = {
    apiKey: "AIzaSyClyD7mUvTZHQcIqTq8flDItiyKoFqOsQ0",
    authDomain: "wirelessbuzzer-5b6f8.firebaseapp.com",
    databaseURL: "https://wirelessbuzzer-5b6f8-default-rtdb.firebaseio.com",
    projectId: "wirelessbuzzer-5b6f8",
    storageBucket: "wirelessbuzzer-5b6f8.appspot.com",
    messagingSenderId: "70886195983",
    appId: "1:70886195983:web:3e33407993989d107af47a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.database();
