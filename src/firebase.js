import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7qYsMPif7zKt2x4hxR6d-txJ7mMylvzE",
  authDomain: "slack2-0-e2cfb.firebaseapp.com",
  projectId: "slack2-0-e2cfb",
  storageBucket: "slack2-0-e2cfb.appspot.com",
  messagingSenderId: "772831086591",
  appId: "1:772831086591:web:1d579f03caedb40ab309ca",
  measurementId: "G-LQQP6MXCL1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db, firebase };
