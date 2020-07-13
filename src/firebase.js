import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAN9z_cnqT925IlsV9XU_nYsF_KX2hZTFQ",
  authDomain: "fb-msg-clone-16368.firebaseapp.com",
  databaseURL: "https://fb-msg-clone-16368.firebaseio.com",
  projectId: "fb-msg-clone-16368",
  storageBucket: "fb-msg-clone-16368.appspot.com",
  messagingSenderId: "545059677405",
  appId: "1:545059677405:web:d1eb3f9217118d4cfee734",
  measurementId: "G-GMQL8JRVD6",
});

const db = firebaseApp.firestore();
export default db;
