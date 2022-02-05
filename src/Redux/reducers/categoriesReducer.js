import {createReducer} from "@reduxjs/toolkit";

//* importar las acciones
import {
	startFetchingCategories,
	successFetchingCategories,
	errorFetchingCategories,
	startEditCategories,
	successEditCategories,
	errorEditCategories,
	startCreateCategories,
	successCreateCategories,
	errorCreateCategories,
} from "../actions/categoriesActions";

//* Declaramos el state inicial(estas nos van a servir como banderas en el componente)
const initialState = {
  isFetchingCategories: false,
  isEditingCategories: false,
  isCreatingCategories: false,
  categories: [],
  error: undefined
}

//* declaramos el reducer y creo todos los casos segun las acciones que tengo
const categoriesReducer = createReducer(initialState, (builder) => {
  builder
  .addCase(startFetchingCategories.toString(), (state, action) => {
    return {
      ...state,
      isFetchingCategories: true,
      error: undefined
    }
  })
  .addCase(successFetchingCategories.toString(), (state, action) => {
    return {
      ...state,
      isFetchingCategories: false,
      categories: action.payload.data
    }
  })
  .addCase(errorFetchingCategories.toString(), (state, action) => {
    return {
      ...state,
      isFetchingCategories: false,
      categorieS: [],
      error: action.payload.error
    }
  })
  .addCase(startEditCategories.toString(), (state, action) => {
    return {
      ...state,
      isEditingCategories: true,
      error: undefined
    }
  })
  .addCase(successEditCategories.toString(), (state, action) => {
    return {
      ...state,
      isEditingCategories: false,
    }
  })
  .addCase(errorEditCategories.toString(), (state, action) => {
    return {
      ...state,
      isEditingCategories: false,
      error: action.payload.error
    }
  })
  .addCase(startCreateCategories.toString(), (state, action) => {
    return {
      ...state,
      isCreatingCategories: true,
      error: undefined
    }
  })
  .addCase(successCreateCategories.toString(), (state, action) => {
    return {
      ...state,
      isCreatingCategories: false
    }
  })
  .addCase(errorCreateCategories.toString(), (state, action) => {
    return {
      ...state,
      isCreatingCategories: false,
      error: action.payload.error
    }
  })
  .addDefaultCase((state, action) => {
    return{
      state
    }
  })
}) 

export default categoriesReducer;