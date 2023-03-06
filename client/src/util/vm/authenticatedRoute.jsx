import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { checkIfVmLoggedIn } from '../../redux/features/vmSlice';
// import { loginRoute } from '../constants/routes';


const AuthenticatedRoute = ({ children }) => {

  let location = useLocation();


  const vm = useSelector(slice => slice.vm)

  if (!checkIfVmLoggedIn()) {
    return <Navigate to='/vm/signin' replace />;
  } else if (!vm.approved && location.pathname !== '/vm/pending') {
    return <Navigate to='/vm/pending' replace />;
  }
  return children;
};

export default AuthenticatedRoute;