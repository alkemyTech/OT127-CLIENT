import { configureStore } from "@reduxjs/toolkit";
<<<<<<< HEAD
import {authReducer} from "../reducers/authReducer";
import newsReducer from "../reducers/newsSlice"
import categoriesReducer from "../reducers/categoriesReducer";
=======
import { authReducer } from "../reducers/authReducer";
import newsReducer from "../reducers/newsSlice";
import slidesReducer from "../reducers/slidesSlice";
>>>>>>> 94eb00cf11d934f448bb4d190526353188895958

export default configureStore({
  reducer: {
    authReducer: authReducer,
    newsReducer: newsReducer,
<<<<<<< HEAD
    categoriesReducer: categoriesReducer,
=======
    slidesReducer,
>>>>>>> 94eb00cf11d934f448bb4d190526353188895958
  },
});
