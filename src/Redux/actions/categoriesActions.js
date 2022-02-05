import {createAction} from "@reduxjs/toolkit";

//* importar el servicio de llamadas a la API
import {
	getCategory,
	putCategory,
	postCategory,
} from "../../Services/categoriesService";

//* creo las 3 acciones para el get
export const startFetchingCategories = createAction(
	"START_FETCHING_CATEGORIES"
);
export const successFetchingCategories = createAction(
	"SUCCESS_FETCHING_CATEGORIES"
);
export const errorFetchingCategories = createAction(
	"ERROR_FETCGING_CATEGORIES"
);

//* creo las 3 acciones para el put
export const startEditCategories = createAction("STAR_EDIT_CATEGORIES");
export const successEditCategories = createAction("SUCCESS_EDIT_CATEGORIES");
export const errorEditCategories = createAction("ERROR_EDIT_CATEGORIES");

//* creo las 3 acciones para el post
export const startCreateCategories = createAction("START_CREATE_CATEGORIES");
export const successCreateCategories = createAction(
	"SUCCESS_CREATE_CATEGORIES"
);
export const errorCreateCategories = createAction("ERROR_CREATE_CATEGORIES");

//* creamos el thunk para el get(luego puedo levantar las banderas en cada una de las acciones)
export const getCategoriesAction = (id) => async (dispatch) => {
	try {
		dispatch(startFetchingCategories());
		const data = await getCategory(id);
		// const {name, description, image} = data.data;
		dispatch(startFetchingCategories({data}));
	} catch (error) {
		dispatch(errorFetchingCategories({error}));
	}
};

//* creamos el thunk para el put
export const putCategoriesAction =
	(id, name, description, image) => async (dispatch) => {
		try {
			dispatch(startEditCategories());
			putCategory(id, name, description, image);
			dispatch(successEditCategories());
		} catch (error) {
			dispatch(errorEditCategories({error}));
		}
	};

//* creamos el thunk para el post
export const postCategoriesAction =
	(name, description, image) => async (dispatch) => {
		try {
			dispatch(startCreateCategories());
			postCategory(name, description, image);
			dispatch(successCreateCategories());
		} catch (error) {
			dispatch(errorCreateCategories({error}));
		}
	};
