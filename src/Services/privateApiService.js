import axios from "axios";

const config = {
  headers: {
    Group: "01", //Aqui va el ID del equipo!!
  },
};

const GetPrivate = async (route, id = null) => {
  try {
    let url;
    id ? (url = route + "/" + id) : (url = route);
    let response = await axios.get(url); //TODO Agregar headers, ver que onda
    return response;
  } catch (error) {
    return error;
  }
};

export default GetPrivate;
