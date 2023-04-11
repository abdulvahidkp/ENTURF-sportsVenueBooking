import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk'

import loadingReducer from "./features/loadingSlice";
import userReducer from "./features/userSlice";
import adminReducer from "./features/adminSlice";
import bookingReducer from './features/bookingSlice'
import offlineBookingReducer from './features/vm/offlineBookingSlice'

//vm
import vmReducer from './features/vmSlice'
import vmTurfsReducer from './features/vm/turfsSlice'


const persistConfig = {
    key: 'root',
    storage
}
const reducer = combineReducers({
    loading: loadingReducer,
    user: userReducer,
    admin: adminReducer,
    vm: vmReducer,
    vmTurfs: vmTurfsReducer,
    booking: bookingReducer,
    offlineBooking:offlineBookingReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)



export const store = configureStore({
    reducer: persistedReducer,
    middleware:[thunk]
})

export const persistor = persistStore(store)