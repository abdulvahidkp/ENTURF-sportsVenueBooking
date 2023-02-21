import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:'',
    name:'',
    loading: false,
    error:''
}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserDetails:(state,action)=>{
            state.name = action.payload;
            state.id = action.payload;
            console.log(state.name)
        }
    }
})

export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;