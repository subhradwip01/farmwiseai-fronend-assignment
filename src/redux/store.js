import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {fieldReducer} from "./reducers";

export const store = configureStore({
    reducer:{
        fieldReducer
    }
})