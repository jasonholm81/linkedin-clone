import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAj8kzNrfcCAtmE-Qqii85T90rF97kkks0",
  authDomain: "linkedin-clone-a8e38.firebaseapp.com",
  projectId: "linkedin-clone-a8e38",
  storageBucket: "linkedin-clone-a8e38.appspot.com",
  messagingSenderId: "46252553895",
  appId: "1:46252553895:web:36be2992b2e1a0e4774d82",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
