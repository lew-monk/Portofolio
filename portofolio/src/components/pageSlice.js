import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: "Projects",
  anime: false,
};

const pageSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    currentPage: (state, action) => {
      state = { page: action.payload, anime: true };
      return state;
    },
    resetAnime: (state) => {
      state.anime = false;
      console.log(state.anime);
      return state.anime;
    },
  },
});

export const { currentPage, resetAnime } = pageSlice.actions;

export const pageSelector = (state) => {
  return state.PageReducer.page;
};

export const animeSelector = (state) => {
  return state.PageReducer.anime;
};

export default pageSlice.reducer;
