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
    vmDetails:{},
    status:'',
    reason:''
}

const vmSlice = createSlice({
    name:'vm',
    initialState,
    reducers:{
        setVmDetails:(state,action)=>{
            state.isLoggedIn = true,
            state.vmDetails = {name:action.payload.name, mobile:action.payload.mobile, document:action.payload.image}
            state.status = action.payload.status
            state.reason = action.payload.reason
        },
        removeVmDetails:(state,action)=>{
            state.isLoggedIn = false,
            state.mobile = ''
            state.name = ''
            state.status = ''
            localStorage.removeItem('vm')
        }
    }
})

export const {setVmDetails, removeVmDetails} = vmSlice.actions
export default vmSlice.reducer