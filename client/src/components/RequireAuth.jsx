import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();

    return(
        auth?.mobile
            ? <Outlet />
            : <Navigate to='/signin' state={{from : location}}  />
    );
}

export default RequireAuth;