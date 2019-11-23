import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAExJ1Qy4pBMYLyG6iiBqaYasogFbbUitw",
  authDomain: "crwn-db-e9cfd.firebaseapp.com",
  databaseURL: "https://crwn-db-e9cfd.firebaseio.com",
  projectId: "crwn-db-e9cfd",
  storageBucket: "crwn-db-e9cfd.appspot.com",
  messagingSenderId: "327714429101",
  appId: "1:327714429101:web:fb1d911550f95110d08e24"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account '});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;