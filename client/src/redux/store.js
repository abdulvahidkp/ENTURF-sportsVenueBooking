import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./features/loadingSlice";
import userSlice from "./features/userSlice";

export default configureStore({
    reducer: {
        loading:loadingSlice,
        user:userSlice
    }
})