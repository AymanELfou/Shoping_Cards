import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
}


export const CountSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        //actions:
        incremant: (state,action) =>{
            state.value += action.payload;
        },
        decremant: (state,action) =>{
            state.value -= action.payload;
        },
    }
});

export const {incremant,decremant} = CountSlice.actions;

export default CountSlice.reducer;