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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log("Error creating user", err.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
