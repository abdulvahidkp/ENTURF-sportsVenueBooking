import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

export const checkIfAdminLoggedIn = () => {
    const token = localStorage.getItem('admin');
    if (!token) return false;
    const decodedToken = jwtDecode(token);
    console.log('from adminSlice',decodedToken);
    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('admin');
        return false;
    }
    return true;
};


const adminSlice = createSlice({
    name:'admin',
    initialState: {
        isLoggedIn:checkIfAdminLoggedIn(),
    }
    reducers:{
        setAdminLoggedIn: (state) => {
            state.isLoggedIn = false;
        },
        setAdminLoggedOut: (state) => {
            state.isLoggedIn = false;
            localStorage.removeItem('admin');
        }
    }
})


export const {setAdminLoggedIn,setAdminLoggedOut} = adminSlice.actions;
export default adminSlice.reducer;