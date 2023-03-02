import React, { useState, useEffect } from "react";
import UserSignup from "../../components/user/UserSignup";
import UserFooter from "../../components/user/UserFooter";

function Signup() {
  console.log(import.meta.env.VITE_apiKey);
  return (
    <>
      <UserSignup />
    </>
  );
}

export default Signup;
