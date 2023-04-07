import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { checkIfUserLoggedIn } from "../redux/features/userSlice";

const UnAuthenticatedRoute = ({children}) => {

  const {isLoggedIn} = useSelector((state) => state);
  const location = useLocation();

  if (checkIfUserLoggedIn()) {
    return <Navigate to='/' replace/>;
  }
  return children;
};

export default UnAuthenticatedRoute;