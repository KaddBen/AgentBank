import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice"
import authReducer from "../features/auth/authSlice"
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

const persistConfig = {
    timeout: 1, 
    key: "root",
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore ({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: persistedReducer
    },
    middleware: getDefaultMiddleware => 
       getDefaultMiddleware({
        serializableCheck: false
       }).concat(apiSlice.middleware),
       devTools: true  
})