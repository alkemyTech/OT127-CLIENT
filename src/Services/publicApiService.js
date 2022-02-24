import axios from "axios";
import { sweetAlertError } from "./sweetAlertServices";

const config = {
  headers: {
    Accept: "application/json, text/plain, */*",
    Group: 127, //Aqui va el ID del equipo!!
  },
};

const Get = async (url, id) => {
  if (id) {
    const response = await axios
      .get(`${url}/${id}`, config)
      .catch(sweetAlertError("No se pudo cargar todo el contenido"));

    return response;
  } else {
    const response = await axios.get(url, config).catch((error) => {
      sweetAlertError("No se pudo cargar todo el contenido");
    });

    return response;
  }
};

export { Get };

export const Post = async (url, data) => {
  //README:
  //Ingresar la url del endpoint a utilizar
  //Pasar objeto como argum para enviarlo en el body
  await axios
    .post(url, data, config)
    .then((res) => res)
    .catch((err) => err.message);
};
