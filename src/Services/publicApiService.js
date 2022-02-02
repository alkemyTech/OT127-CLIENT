import axios from "axios";

const config = {
  headers: {
    group_id: 127, //Aqui va el ID del equipo!!
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
	
export const Post = async (url, data) => {
	//README:
	//Ingresar la url del endpoint a utilizar
	//Pasar objeto como argum para enviarlo en el body
	const response = await axios
	.post(url, data, config)
	.catch((err) => err.message)

  return response
}
