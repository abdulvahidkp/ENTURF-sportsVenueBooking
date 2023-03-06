import React from "react";
import { RecaptchaVerifier,signInWithPhoneNumber, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
 
  function setUpRecaptcha(number) {
    const recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {},
      auth
    );
    recaptchaVerifier.render();
    return signInWithPhoneNumber(auth,number, recaptchaVerifier);
  }

 export const googleSignin = ()=>{
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth,googleAuthProvider)
  }

export default setUpRecaptcha;