import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducer";
import membersReducer from "../reducers/membersSlice";
import newsReducer from "../reducers/newsSlice";
import categoriesReducer from "../reducers/categoriesReducer";
import slidesReducer from "../reducers/slidesSlice";
import usersReducer from "../reducers/usersSlice";
import usReducer from "../reducers/usSlice";
import activityReducer from '../reducers/activitySlice';

export default configureStore({
	reducer: {
		authReducer: authReducer,
		newsReducer: newsReducer,
		membersReducer: membersReducer,
		slidesReducer,
		usersReducer: usersReducer,
		usReducer: usReducer,
		categoriesReducer,
		activityReducer
	},
});
