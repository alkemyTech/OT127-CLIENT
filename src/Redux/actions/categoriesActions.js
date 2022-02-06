import {createAction} from "@reduxjs/toolkit";
import Axios from "axios";

export const startFetchingCategories = createAction(
	"START_FETCHING_CATEGORIES"
);
export const successFetchingCategories = createAction(
	"SUCCESS_FETCHING_CATEGORIES"
);
export const errorFetchingCategories = createAction(
	"ERROR_FETCGING_CATEGORIES"
);

export const getCategoriesAction = () => async (dispatch) => {
	try {
		dispatch(startFetchingCategories());
		const {data} = await Axios.get(
			`http://ongapi.alkemy.org/api/categories`
		);
		dispatch(successFetchingCategories({data}));
	} catch (error) {
		dispatch(errorFetchingCategories({error}));
	}
};

