import React from "react";
import { RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";
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


export default setUpRecaptcha;