import { Navigate } from "react-router-dom";
import { checkIfAdminLoggedIn } from "../../redux/features/adminSlice";

function authenticatedRoute({ children }) {
  if (!checkIfAdminLoggedIn()) {
    return <Navigate to="/admin/signin" replace />;
  }
  return children;
}

export default authenticatedRoute;
