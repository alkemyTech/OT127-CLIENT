import Axios from "axios";
const { sweetAlertError, sweetAlertSuccess } = require("./sweetAlertServices");
const URL_CATEGORIES = process.env.REACT_APP_ENDPOINT_CATEGORIES;

const config = {
  headers: {
    Accept: "application/json, text/plain, */*",
    Group: 127,
  },
};

export const getAllCategory = async () => {
  try {
    const { data } = await Axios.get(URL_CATEGORIES, config);
    return data;
  } catch (error) {
    return error;
  }
};

export const getCategoryByID = async (id) => {
  try {
    const { data } = await Axios.get(`${URL_CATEGORIES}/${id}`, config);
    return data;
  } catch (error) {
    return error;
  }
};

export const putCategory = async (id, data) => {
  try {
    await Axios.put(`${URL_CATEGORIES}/${id}`, data, config);
    sweetAlertSuccess("Se actualizo con exito");
  } catch (error) {
    sweetAlertError("No se pudo actualizar");
  }
};

export const postCategory = async (data) => {
  try {
    await Axios.post(URL_CATEGORIES, data, config);
    sweetAlertSuccess("La categoría se creo con exito");
  } catch (error) {
    sweetAlertError("No se pudo crear la categoría");
  }
};

export const deleteCategory = (id) => {
  Axios.delete(`${URL_CATEGORIES}/${id}`, config)
    .then(() => sweetAlertSuccess("Se elimino la categoría."))
    .catch(() => sweetAlertError("No se pudo eliminar la categoría."));
};
