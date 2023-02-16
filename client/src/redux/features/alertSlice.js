import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
    name: 'alerts',
    initialState: false,
    reducers: {
        showLoading: (state) => state = true,
        hideLoading: (state) => {
            console.log('alertcurentState' + state);
            state = false;
        }
    }
})

export const { showLoading, hideLoading } = alertSlice.actions;
export default alertSlice.reducer;