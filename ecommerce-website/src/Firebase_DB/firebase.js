import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx-qrmYJ3afQgYOx9IDjpWd4TCGYCNA08",
  authDomain: "ecommerce-project-561b9.firebaseapp.com",
  projectId: "ecommerce-project-561b9",
  storageBucket: "ecommerce-project-561b9.appspot.com",
  messagingSenderId: "721269610501",
  appId: "1:721269610501:web:b33653e6ee23dfffdd646c",
  measurementId: "G-FCBFEVZ9Y6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth}