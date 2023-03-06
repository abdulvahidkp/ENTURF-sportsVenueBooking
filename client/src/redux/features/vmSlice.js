import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

export const checkIfVmLoggedIn = () => {
    const token = localStorage.getItem('vm');
    if (!token) return false;
    const decodedToken = jwtDecode(token);

    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('vm');
        return false;
    }
    return true;
};

const initialState = {
    isLoggedIn: checkIfVmLoggedIn(),
    name:'',
    mobile:'',
    approved:false
}

const vmSlice = createSlice({
    name:'vm',
    initialState,
    reducers:{
        setVmDetails:(state,action)=>{
            state.isLoggedIn = true,
            state.name = action.payload.name
            state.mobile = action.payload.mobile
            state.approved = action.payload.approved
        },
        removeVmDetails:(state,action)=>{
            state.isLoggedIn = false,
            state.mobile = ''
            state.name = ''
            state.approved = false
            localStorage.removeItem('vm')
        }
    }
})

export const {setVmDetails, removeVmDetails} = vmSlice.actions
export default vmSlice.reducer