import axios from "axios";

const config = {
  headers: {
    Group: 127, //Aqui va el ID del equipo!!
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
  return token
    ? { Authorization: "Bearer " + token }
    : { error: "No token found" };
};

export const privateServiceDelete = (route, id) => {
  if (!route) return (console.error("Error: debe proporcionar una ruta"))
  if (!id) return (console.error("Error: debe proporcionar un id"))
}

export default Get;
