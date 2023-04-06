import React, { useEffect } from "react";
import UserNavbar from "../../components/user/UserNavbar";
import CoverVideoComponent from "../../components/user/CoverVideoComponent";
import UserFooter from "../../components/user/UserFooter";
import { Navigate, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

import axios from "../../api/axios";

function Landing() {

  return <CoverVideoComponent />
}

export default Landing;
