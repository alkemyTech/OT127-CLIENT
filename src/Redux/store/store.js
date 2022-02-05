import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from "../reducers/authReducer";
import newsReducer from "../reducers/newsSlice"

export default configureStore({
  reducer: {
    authReducer: authReducer,
    newsReducer: newsReducer
  },
});
