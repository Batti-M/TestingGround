import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss"
import Button from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password} = formFields;

  const resetForm = () => setFormFields(defaultFormFields);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await signInAuthUserWithEmailAndPassword(email,password)
      console.log(response)
    } catch (error) {
      switch(error.code){
        case "auth/wrong-password":
          alert("wrong password")  ;
          break;
        case "auth/user-not-found":
          alert("incorrect password or email");
          break;
          default:
            console.log(error)
      }
      
    }
    resetForm();
  };
  const signInWithGoogle = async() => {
    const {user} = await signInWithGooglePopup(
      email,
      password
    );
      await createUserDocumentFromAuth(user)
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span> Sign In!</span>
      <form onSubmit={handleSubmit}>
       

        <FormInput
          label={"Email"}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          value={password}
          name="password"
          onChange={handleChange}
          required
        />

        <div className="buttons-container">
          <Button buttonType="inverted" type="submit">SIGN IN</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign in</Button>
        </div>

      </form>
    </div>
  );
};

export default SignInForm;
