import Axios from "axios";

const endPointCategories = process.env.REACT_APP_ENDPOINT_CATEGORIES;

export const getAllCategory = async () => {
  try {
    const { data } = await Axios.get(`${endPointCategories}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const getCategory = async (id) => {
  try {
    const { data } = await Axios.get(`${endPointCategories}${id}`);
    return data;
  } catch (error) {
    return error;
  }
};

export const putCategory = (id, name, description, image) => {
  try {
    Axios.put(`${endPointCategories}${id}`, { name, description, image });
  } catch (error) {
    return error;
  }
};

export const postCategory = (name, description, image) => {
  try {
    Axios.post(`${endPointCategories}`, { name, description, image });
  } catch (error) {
    return error;
  }
};
