import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: 'loading',
    initialState: false,
    reducers: {
        showLoading: state => state = true,
        hideLoading: state => state = false
    }
})

export const { showLoading, hideLoading } = loadingSlice.actions;
export default loadingSlice.reducer;