import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        movies: []
    }
};


export const movizSlice = createSlice({
    name: 'moviz',
    initialState,
    reducers: {
        initialAddOfMovies: (state, action) => {
            state.value.movies = action.payload;
        },
        updateOfMovies: (state, action) => {
            state.value.movies = action.payload;
            console.log("state => ", action.payload);
        }
    }
});

export const { initialAddOfMovies, updateOfMovies } = movizSlice.actions;
export default movizSlice.reducer;