import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { signin } from '../thunk/user'

export const checkIfUserLoggedIn = () => {

    const token = localStorage.getItem('user');
    if (!token) return false;
    const decodedToken = jwtDecode(token);

    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('user');
        return false;
    }
    return true;
};

const initialState = {
    isLoggedIn: checkIfUserLoggedIn(),
    mobile: '',
    name:'',
    signin:{
        isLoading:false,
        isErr:false,
        errMsg:""
    }
}
    
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            //the passing object will comes in action.
            state.name = action.payload.name;
            state.mobile = action.payload.mobile;
            state.isLoggedIn = true;
        },
        userLogin: (state, action) => {
            state.isLoggedIn = true;
        },
        userLogout: (state, action) => {
            state.isLoggedIn = false;
            localStorage.removeItem('user');
        },
    },
    extraReducers: (builder) => {

        builder.addCase(signin.pending, (state) => {
            state.signin.isLoading = true
        });

        builder.addCase(signin.fulfilled, (state, action) => {
           state.signin.isLoading = false;
           state.signin.errMsg = ''
            //data will come here
            console.log('action',action);
            console.log(action.payload);
            localStorage.setItem('user',action.payload.accessToken);
            state.isLoggedIn = true;
        });

        builder.addCase(signin.rejected, (state, action) => {
            state.signin.errMsg = action.payload.message
        }); 

    }
})

export const { setUserDetails, userLogout, userLogin } = userSlice.actions;
export default userSlice.reducer;