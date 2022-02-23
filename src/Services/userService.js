import Axios from "axios";
import { sweetAlertError, sweetAlertSuccess } from "./sweetAlertServices";

const endPointUser = process.env.REACT_APP_ENDPOINT_USERS
const urlLogin = "http://ongapi.alkemy.org/api/login";
const urlRegister = "http://ongapi.alkemy.org/api/register";

export const getUserbyID = async (id) => {
  try {
    const response = await Axios.get(`${endPointUser}/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const searchUser = async (search) => {
  try {
    const response = await Axios.get(`${endPointUser}?search=${search}`);
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
  const {name, email, role, profilePhoto, password } = values
  try {
    Axios.put(`${endPointUser}/${id}`, {
      name,
      email,
      password,
      role_id:role,
      profile_image: profilePhoto
    });
  } catch (error) {
    alert(error.message);
  }
};

export const postUser = (values) => {
  try {
    Axios.post(`${endPointUser}`, values);
  } catch (error) {
    return error;
  }
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
    Axios.post(urlRegister, values).then(
      sweetAlertSuccess(`${values.name} te haz registrado correctamente`)
    );
  } catch (error) {
    sweetAlertError("Hubo un error al intentar el registro");
  }
};

export const deleteUser = async (id) => {
  if (id) {
    await Axios
      .delete(`${endPointUser}/${id}`)
      .then(() => sweetAlertSuccess("Se eliminó al usuario."))
      .catch(() => sweetAlertError("No se pudo eliminar al usuario."));
  }
} 