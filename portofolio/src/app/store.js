import { configureStore } from "@reduxjs/toolkit";
import PageReducer from "../components/pageSlice";

const store = configureStore({
  reducer: {
    PageReducer,
  },
});

export default store;
