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
	token ? {Authorization: "Bearer " + token} : {error: "No token found"};
};

export const Put = () => {
	axios
		.put(url, data, config)
		.then((res) => {
			return
		})
		.catch((err) => {
			return
		});
}

export default Get;
