import axios from "axios";

const config = {
  headers: {
    Group: 01, //Aqui va el ID del equipo!!
  },
};

const Get = () => {
  axios
    .get("https://jsonplaceholder.typicode.com/users", config)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

const getSecureHeader = () => {
  const token = localStorage.getItem("token");
  token? {Authorization: "Bearer " + token} : {error:'No token found'}
};

export default Get;

/* Criterios de aceptacion: Generar un metodo en el servicio de peticiones HTTP privadas, que verifique la existencia del token en el localStorage y que devuelva un objeto Header Authorization con el valor "Bearer " + el token obtenido. */
