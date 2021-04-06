import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDK5HwtgWoztbDpYDRVNTLP-103zbpt48",
  authDomain: "twitter-clone-f730c.firebaseapp.com",
  projectId: "twitter-clone-f730c",
  storageBucket: "twitter-clone-f730c.appspot.com",
  messagingSenderId: "26593952690",
  appId: "1:26593952690:web:2ced7d115890a75dd75aab",
  measurementId: "G-1PVMMZSQ11",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
