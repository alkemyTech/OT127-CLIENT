import Axios from "axios";

const endPointUser = "http://ongapi.alkemy.org/api/users";
const urlLogin = "http://ongapi.alkemy.org/api/login";

export const getUserbyID = async (id) => {
  try {
    const response = await Axios.get(`${endPointUser}/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const allUsers = async () => {
  try {
    const response = await Axios.get(endPointUser);
    return response;
  } catch (error) {
    return error;
  }
};

export const putUser = (id, values) => {
  try {
    Axios.put(`${endPointUser}/${id}`, values);
  } catch (error) {
    return error;
  }
};

export const postUser = (values) => {
  try {
    Axios.post(`${endPointUser}`, values);
  } catch (error) {
    return error;
  }
};

export const APIloginUser = (values) => {
  try {
    Axios.post(urlLogin, values);
  } catch (error) {
    return error;
  }
};
