import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    searchResults: null,
    searchKey: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addSearchResults: (state, action) => {
      const { searchResults, searchKey } = action.payload;
      state.searchResults = searchResults;
      state.searchKey = searchKey;
    },
  },
});

export const { toggleGptSearchView, addSearchResults } = gptSlice.actions;

export default gptSlice.reducer;
