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

export const createUserProfileDocument = async(userAuth, additionalData) => {
 if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

return userRef;

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;