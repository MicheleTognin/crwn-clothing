import firebase from'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDoy7dcuX71yzNHOd-sApLGLtxEP943wtY",
  authDomain: "crwn-db-b5951.firebaseapp.com",
  databaseURL: "https://crwn-db-b5951.firebaseio.com",
  projectId: "crwn-db-b5951",
  storageBucket: "crwn-db-b5951.appspot.com",
  messagingSenderId: "757188788673",
  appId: "1:757188788673:web:23270a6a8c92aff5cc6f40",
  measurementId: "G-QW2HME5FZ8",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;