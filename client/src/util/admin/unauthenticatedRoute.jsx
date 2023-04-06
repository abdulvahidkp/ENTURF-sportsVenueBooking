import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { checkIfAdminLoggedIn } from "../../redux/features/adminSlice";

const UnAuthenticatedRoute = ({children}) => {
  if (checkIfAdminLoggedIn()) {
    return <Navigate to='/admin' replace/>;
  }
  return children;
};
export default UnAuthenticatedRoute;