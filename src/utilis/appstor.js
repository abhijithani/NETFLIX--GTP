import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import moviesReducer from "./movieSlice";
import gtpReducer from "./gtpSlice";
import configReducer from "./configSlice"

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesReducer,
        gtp: gtpReducer,
        config:configReducer,
    },
})

export default appStore;