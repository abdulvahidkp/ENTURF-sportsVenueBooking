import React from "react";
import Login from "../../assets/Login.png";

function SignImageSection() {
  return (
    <div className="hidden sm:block">
      <img src={Login} alt="" />
    </div>
  );
}

export default SignImageSection;