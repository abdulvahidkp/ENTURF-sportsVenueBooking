import { Navigate } from "react-router-dom";
import { checkIfVmLoggedIn } from "../../redux/features/vmSlice";

const UnAuthenticatedRoute = ({children}) => {
  
  if (checkIfVmLoggedIn()) {
    return <Navigate to='/vm' replace/>;
  }
  return children;
};

export default UnAuthenticatedRoute;
