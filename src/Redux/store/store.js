import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../reducers/authReducer";
import membersReducer from "../reducers/membersSlice";
import newsReducer from "../reducers/newsSlice";
import categoriesReducer from "../reducers/categoriesReducer";
import slidesReducer from "../reducers/slidesSlice";
import usersReducer from "../reducers/usersSlice";

export default configureStore({
  reducer: {
    authReducer: authReducer,
    newsReducer: newsReducer,
    membersReducer: membersReducer,
    slidesReducer,
    usersReducer: usersReducer,
  },
});
