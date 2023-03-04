import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./features/loadingSlice";
import userSlice from "./features/userSlice";
import adminSlice from "./features/adminSlice";
import vmSlice from './features/vmSlice'

export default configureStore({
    reducer: {
        loading:loadingSlice,
        user:userSlice,
        admin:adminSlice,
        vm:vmSlice
    }
})