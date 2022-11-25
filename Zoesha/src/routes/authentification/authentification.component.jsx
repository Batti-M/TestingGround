import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in/sign-in-form.component";
import "./authentification.styles.scss"


const Authentification = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  // const logGoogleRedirectUser = async() => {
  //     const {user}= await signInWithGoogleRedirect();
  //     const userDocRef = await createUserDocumentFromAuth(user)

  // }
  return (
    <div className="authentification-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentification;
