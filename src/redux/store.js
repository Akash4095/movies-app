import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './moviesReducer/movieSlice'

export const store = configureStore({
    reducer: {
        movies: moviesReducer
    },
})