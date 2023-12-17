import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./features/Countslice";


export const store=configureStore({
    reducer:{
        counter: countReducer,
    }
})
