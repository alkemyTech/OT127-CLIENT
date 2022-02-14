import Axios from "axios";

const endPointUser = 'http://ongapi.alkemy.org/api/users/';

export const getUser = async (id) => {
	try {
		const {data} = await Axios.get(`${endPointUser}${id}`);
		return data;
	} catch (error) {
		return error;
	}
};

export const putUser = (id, name, description, image) => {
	try {
		Axios.put(`${endPointUser}${id}`, {name, description, image});
	} catch (error) {
		return error;
	}
};

export const postUser = (name, description, image) => {
	try {
		Axios.post(`${endPointUser}`, {name, description, image});
	} catch (error) {
		return error;
	}
};
