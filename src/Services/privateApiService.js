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
	token ? {Authorization: "Bearer " + token} : {error: "No token found"};
};

export function Put() {
	axios
		.put(url, data, config)
		.then((res) => {
			//to do
		})
		.catch((err) => {
			//to do
		});
}

export default Get;
