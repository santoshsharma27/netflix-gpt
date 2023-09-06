import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showGptSearch: false,
  movieNames: null,
  movieResults: null,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearGptMovieResult: (state) => {
      state.movieNames = [];
      state.movieResults = [];
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult, clearGptMovieResult } =
  gptSlice.actions;

export default gptSlice.reducer;
