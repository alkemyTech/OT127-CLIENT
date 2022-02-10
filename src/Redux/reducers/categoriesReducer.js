import {createReducer} from "@reduxjs/toolkit";

import {
	startFetchingCategories,
	successFetchingCategories,
	errorFetchingCategories,
} from "../actions/categoriesActions";

const initialState = {
	isFetchingCategories: false,
	categories:[],
	message:"",
	error: undefined,
};

const categoriesReducer = createReducer(initialState, (builder) => {
	builder
		.addCase(startFetchingCategories.toString(), (state, action) => {
			return {
				...state,
				isFetchingCategories: true,
				error: undefined,
			};
		})
		.addCase(successFetchingCategories.toString(), (state, action) => {
			return {
				...state,
				isFetchingCategories: false,
				categories: action.payload.data,
				message:action.payload.data.message

			};
		})
		.addCase(errorFetchingCategories.toString(), (state, action) => {
			return {
				...state,
				isFetchingCategories: false,
				categories: [],
				error: action.payload.error,
			};
		})
		.addDefaultCase((state, action) => {
			return {
				state,
			};
		});
});

export default categoriesReducer;
