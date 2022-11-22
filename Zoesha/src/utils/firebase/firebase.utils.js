import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDS0MEiB5dXPahCBJes3wOyAcsDOg65iIU",
  authDomain: "zoesha-72ce2.firebaseapp.com",
  projectId: "zoesha-72ce2",
  storageBucket: "zoesha-72ce2.appspot.com",
  messagingSenderId: "620715567698",
  appId: "1:620715567698:web:a0727f844724720ecc8d8b",
  measurementId: "G-SWGSBLX6XS",
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const database = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(database, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch {
      console.log("error creating user", error.message);
    }
  }
  //check if userdata exists, if it does just return userDocRef
  //if it doesnt exist, create/set the document with data from userAuth

  return userDocRef;
};
