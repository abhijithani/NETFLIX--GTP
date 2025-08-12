import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
    name: "gtp",
    initialState : {
        showGtpSearch : false,
    },
    reducers : {
        toggleGtpstate : (state,action) => {
            state.showGtpSearch = !state.showGtpSearch
        }
    }

})

export const {toggleGtpstate} = gtpSlice.actions;

export default gtpSlice.reducer; 