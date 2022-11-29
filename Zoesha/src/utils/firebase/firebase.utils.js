import { Password } from "@mui/icons-material";
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  
} from "firebase/auth";
import { getFirestore,collection,writeBatch,query,getDocs, doc, getDoc, setDoc } from "firebase/firestore";

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
const provider = new GoogleAuthProvider(); //googleauthprovider is a class

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(); //auth to keep track if user is properly authenticated
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => {
  signInWithRedirect(auth, provider);
};

export const database = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  if (!userAuth) return;

  const userDocRef = doc(database, "users", userAuth.uid);
  

  const userSnapshot = await getDoc(userDocRef);
  

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch(error) {
      console.log("error creating user", error.message);
    }
  }
  //check if userdata exists, if it does just return userDocRef
  //if it doesnt exist, create/set the document with data from userAuth

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async() => signOut(auth)

export const onAuthStateChangedListener = (callback) => 
{

  onAuthStateChanged(auth,callback )
}

//GET A REF TO A COLLECTION

export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) => {
  const collectionRef = collection(database, collectionKey);
  const batch = writeBatch(database)

  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef,object)
  })
  await batch.commit()
  console.log("done")
}

export const getCategoriesAndDocuments = async() =>{
  const collectionRef = collection(database, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())

}
 
