import Axios from "axios";

const url = `http://ongapi.alkemy.org/api/categories`;

export const getCategory = async (formValues, setFormValues, id) => {
	try {
		const {data} = await Axios.get(url + "/" + id);
		const {name, description, image} = data.data;
		setFormValues({
			...formValues,
			name: name,
			description: description,
			image: image,
		});
	} catch (error) {
		return error;
	}
};

export const puttCategory = (id, name, description, image) => {
	try {
		Axios.put(url + "/" + id, {id, name, description, image});
	} catch (error) {
		return error;
	}
};

export const posCategory = (name, description, image) => {
	try {
		Axios.post(url, {name, description, image});
	} catch (error) {
		return error;
	}
};
