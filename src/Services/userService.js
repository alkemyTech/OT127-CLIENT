import Axios from "axios";
import { sweetAlertError, sweetAlertSuccess } from "./sweetAlertServices";

const endPointUser = process.env.REACT_APP_ENDPOINT_USERS;
const urlLogin = process.env.REACT_APP_ENDPOINT_LOGIN;
const urlRegister = process.env.REACT_APP_ENDPOINT_REGISTER;
const config = {
  // headers: {
  //   Group: 127,
  // },
};

export const getUserbyID = async (id) => {
  try {
    const response = await Axios.get(`${endPointUser}/${id}`, config);
    return response;
  } catch (error) {
    return error;
  }
};

export const searchUser = async (search) => {
  try {
    const response = await Axios.get(
      `${endPointUser}?search=${search}`,
      config
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const allUsers = async () => {
  try {
    const response = await Axios.get(endPointUser, config);
    return response;
  } catch (error) {
    return error;
  }
};

export const putUser = (id, values) => {
  const { name, email, role, profilePhoto, password } = values;
  try {
    Axios.put(
      `${endPointUser}/${id}`,
      {
        name,
        email,
        password,
        role_id: role,
        profile_image: profilePhoto,
      },
      config
    );
  } catch (error) {
    alert(error.message);
  }
};

export const postUser = (values) => {
  try {
    Axios.post(`${endPointUser}`, values, config);
  } catch (error) {
    return error;
  }
};

export const APIloginUser = async (values) => {
  try {
    let response = await Axios.post(urlLogin, values, config);
    return response;
  } catch (error) {
    return error;
  }
};

export const APIRegisterUser = (values) => {
  try {
    Axios.post(urlRegister, values, config).then(
      sweetAlertSuccess(`${values.name} te haz registrado correctamente`)
    );
  } catch (error) {
    sweetAlertError("Hubo un error al intentar el registro");
  }
};

export const deleteUser = async (id) => {
  if (id) {
    await Axios.delete(`${endPointUser}/${id}`, config)
      .then(() => sweetAlertSuccess("Se eliminó al usuario."))
      .catch(() => sweetAlertError("No se pudo eliminar al usuario."));
  }
};
