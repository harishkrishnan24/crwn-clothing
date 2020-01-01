import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBeGmbaJ6s6wGCPYY1qr-I074WXCBWfehs",
  authDomain: "crwn-clothing-ce4aa.firebaseapp.com",
  databaseURL: "https://crwn-clothing-ce4aa.firebaseio.com",
  projectId: "crwn-clothing-ce4aa",
  storageBucket: "crwn-clothing-ce4aa.appspot.com",
  messagingSenderId: "290466891347",
  appId: "1:290466891347:web:9970213ffa72e08b5728a6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;