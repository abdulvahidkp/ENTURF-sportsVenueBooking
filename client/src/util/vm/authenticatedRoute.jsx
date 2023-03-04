import { Navigate } from 'react-router-dom';
import { checkIfVmLoggedIn } from '../../redux/features/vmSlice';
// import { loginRoute } from '../constants/routes';


const AuthenticatedRoute = ({ children }) => {
  if (!checkIfVmLoggedIn()) {
    return <Navigate to='/vm/signin' replace />;
  }

  return children;
};

export default AuthenticatedRoute;
