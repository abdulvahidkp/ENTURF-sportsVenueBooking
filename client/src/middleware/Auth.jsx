import { Navigate, Outlet } from "react-router-dom";

export const AuthrizeUser = ({children}) => {
    const token = localStorage.getItem('user');
    if(!token){
        return <Navigate to='/login' replace={true}></Navigate>
    }
    return children;
}