import Axios from "axios";

const url = `http://ongapi.alkemy.org/api/categories`;

export const getCategory = async (id) => {
	try {
		const {data} = await Axios.get(url + "/" + id);
		return data;
	} catch (error) {
		return error;
	}
};

export const putCategory = (id, name, description, image) => {
	try {
		Axios.put(url + "/" + id, {name, description, image});
	} catch (error) {
		return error;
	}
};

export const postCategory = (name, description, image) => {
	try {
		Axios.post(url, {name, description, image});
	} catch (error) {
		return error;
	}
};
