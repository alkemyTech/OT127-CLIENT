import Axios from "axios";

const endPointUser = "http://ongapi.alkemy.org/api/users";
<<<<<<< HEAD
const urlLogin = "http://ongapi.alkemy.org/api/login";
const urlRegister = "http://ongapi.alkemy.org/api/register";
=======
>>>>>>> 50d8d7522309a5e19336ef2349473405e70d6365

export const getUserbyID = async (id) => {
  try {
    const response = await Axios.get(`${endPointUser}/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};

<<<<<<< HEAD
=======
export const searchUser = async (search) => {
  try {
    const response = await Axios.get(`${endPointUser}?search=${search}`);
    return response;
  } catch (error) {
    return error;
  }
};

>>>>>>> 50d8d7522309a5e19336ef2349473405e70d6365
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
<<<<<<< HEAD
};

export const APIloginUser = async (values) => {
  try {
    let response = await Axios.post(urlLogin, values);
    return response;
  } catch (error) {
    return error;
  }
};

export const APIRegisterUser = (values) => {
  try {
    Axios.post(urlRegister, values);
  } catch (error) {
    return error;
  }
=======
>>>>>>> 50d8d7522309a5e19336ef2349473405e70d6365
};
