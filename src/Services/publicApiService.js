import axios from "axios";

const config = {
  headers: {
    Group: 127, //Aqui va el ID del equipo!!
  },
};

const Get = async (url, id) => {
  if (id) {
    const response = await axios
      .get(`${url}/${id}`, config)
      .catch((err) => err.message);

    return response;
  } else {
    const response = await axios.get(url, config).catch((err) => err.message);

    return response;
  }
};

export { Get };
