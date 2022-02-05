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

//* creamos el thunk para el get(luego puedo levantar las banderas en cada una de las acciones)
export const fetchCategories = (id) => async(dispatch) => {
  try {
    dispatch(startFetchingCategories())
    const data = await getCategory(id)
    const {name, description, image} = data.data;
    dispatch(startFetchingCategories({name, description, image}))
  } catch (error) {
    dispatch(errorFetchingCategories({error}))
  }
}



//* creamos el thunk para el put


//* creamos el thunk para el post