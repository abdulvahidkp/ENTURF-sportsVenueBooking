import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:'',
    mobile:''
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserDetails:(state,action)=>{
            //the passing object will comes in action.
            state.name = action.payload.name;
            state.mobile = action.payload.mobile;
        },
    }
})

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;