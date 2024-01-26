import { combineReducers, configureStore } from "@reduxjs/toolkit";
import fieldReducer from "./reducer";



export const store = configureStore({
    reducer:{
        fieldReducer
    }
})