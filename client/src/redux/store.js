import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import loadingSlice from "./features/loadingSlice";
import userSlice from "./features/userSlice";
import adminSlice from "./features/adminSlice";

//vm
import vmSlice from './features/vmSlice'
import vmTurfsSlice from './features/vm/turfsSlice'


export default configureStore({
    reducer: {
        loading:loadingSlice,
        user:userSlice,
        admin:adminSlice,
        vm:vmSlice,
        vmTurfs:vmTurfsSlice
    }
})