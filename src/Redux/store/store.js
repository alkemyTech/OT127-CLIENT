import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import membersReducer from "../reducers/membersSlice";
import newsReducer from "../reducers/newsSlice";
import categoriesReducer from "../reducers/categoriesReducer";
import slidesReducer from "../reducers/slidesSlice";
import usersReducer from "../reducers/usersSlice";
import usReducer from "../reducers/usSlice";
import activitiesReducer from "../reducers/activitiesSlice";

export default configureStore({
	reducer: {
		authReducer,
		newsReducer,
		membersReducer,
		slidesReducer,
		usersReducer,
		usReducer,
		categoriesReducer,
		activitiesReducer
	},
});
