import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX6_KC4qxwQt6alC9g6jGCxbL9RQNVUwY",
  authDomain: "cole-store-db.firebaseapp.com",
  projectId: "cole-store-db",
  storageBucket: "cole-store-db.appspot.com",
  messagingSenderId: "900162834806",
  appId: "1:900162834806:web:684cd7664c225a361b6a57",
  measurementId: "G-C3Q2VQENTW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth}