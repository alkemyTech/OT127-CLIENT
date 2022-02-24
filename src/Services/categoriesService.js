import Axios from "axios";
const { sweetAlertError, sweetAlertSuccess } = require("./sweetAlertServices");

const endPointCategories = process.env.REACT_APP_ENDPOINT_CATEGORIES;
const config = {
  headers: {
    Accept: "application/json, text/plain, */*",
    Group: 127,
  },
}

export const getAllCategory = async () => {
  try {
    const { data } = await Axios.get(`${endPointCategories}`, config);
    return data;
  } catch (error) {
    return error;
  }
};

export const getCategory = async (id) => {
  try {
    const { data } = await Axios.get(`${endPointCategories}${id}`, config);
    return data;
  } catch (error) {
    return error;
  }
};

export const putCategory = (id, name, description, image) => {
  try {
    Axios.put(`${endPointCategories}${id}`, { name, description, image }, config);
  } catch (error) {
    return error;
  }
};

export const postCategory = (name, description, image) => {
  try {
    Axios.post(`${endPointCategories}`, { name, description, image }, config);
  } catch (error) {
    return error;
  }
};

export const deleteCategory = (id) => {
    Axios.delete(`${endPointCategories}/${id}`, config)
    .then(() => sweetAlertSuccess("Se elimino la categoría."))
    .catch(() => sweetAlertError("No se pudo eliminar la categoría."));
};