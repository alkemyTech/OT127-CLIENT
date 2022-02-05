import {createAction} from "@reduxjs/toolkit";

//* importar el servicio de llamadas a la API
import {getCategory} from "../../Services/categoriesService"

//* creo las 3 acciones
export const startFetchingCategories = createAction(
	"START_FETCHING_CATEGORIES"
);
export const successFetchingCategories = createAction(
	"SUCCESS_FETCHING_CATEGORIES"
);
export const errorFetchingCategories = createAction(
	"ERROR_FETCGING_CATEGORIES"
);

 