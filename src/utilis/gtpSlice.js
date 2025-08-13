import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
    name: "gtp",
    initialState : {
        showGtpSearch : false,
        gtpMovies : null,
    },
    reducers : {
        toggleGtpstate : (state,action) => {
            state.showGtpSearch = !state.showGtpSearch;
        },
        addGtpMovieResults : (state,action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }

})

export const {toggleGtpstate,addGtpMovieResults} = gtpSlice.actions;

export default gtpSlice.reducer; 