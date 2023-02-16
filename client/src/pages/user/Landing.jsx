import React, { useEffect } from "react";
import UserNavbar from "../../components/user/UserNavbar";
import CoverVideoComponent from "../../components/user/CoverVideoComponent";
import UserFooter from "../../components/user/UserFooter";
import { Navigate, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import axios from "../../api/axios";
let GET_USER = "/getUser";

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log('its verifying');
    const verify = async () => {
      const token = localStorage.getItem("user");
      if (token) {
        const user = jwtDecode(token);
        if (!user) {
          localStorage.removeItem("user");
          navigate("/signin");
        } else {
          try {
            const req = await axios.get(GET_USER, {
              headers: { "x-access-token": token },
            });
            console.log(req.data);
          } catch (error) {
            navigate("/signin");
            console.log(error.message);
          }
        }
      } else {
        console.log("it's navigate");
        navigate("/signin");
      }
    }
    verify();
  }, []);

  return (
    <div>
      <UserNavbar />
      <CoverVideoComponent />
      <UserFooter />
    </div>
  );
}

export default Landing;
