import { createAction } from "@reduxjs/toolkit";
import Axios from "axios";

export const startFetchingCategories = createAction(
  "START_FETCHING_CATEGORIES"
);
export const successFetchingCategories = createAction(
  "SUCCESS_FETCHING_CATEGORIES"
);
export const errorFetchingCategories = createAction(
  "ERROR_FETCHING_CATEGORIES"
);

export const getCategoriesAction = () => async (dispatch) => {
  try {
    dispatch(startFetchingCategories());
    const { data } = await Axios.get(
      `http://ongapi.alkemy.org/api/categories`,
      {
        headers: {
          Accept: "application/json, text/plain, */*",
          Group: 127,
        },
      }
    );
    dispatch(successFetchingCategories({ data }));
  } catch (error) {
    dispatch(errorFetchingCategories({ error }));
  }
};

export const searchCategoriesAction = (category) => async (dispatch) => {
  const CATEGORIES_ENDPOINT = process.env.REACT_APP_ENDPOINT_CATEGORIES;
  try {
    dispatch(startFetchingCategories());
    const { data } = await Axios.get(
      `${CATEGORIES_ENDPOINT}?search=${category}`,
	  {
        headers: {
          Accept: "application/json, text/plain, */*",
          Group: 127,
        },
      }
    );
    dispatch(successFetchingCategories({ data }));
  } catch (error) {
    dispatch(errorFetchingCategories({ error }));
  }
};
