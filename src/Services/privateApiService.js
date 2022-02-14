import axios from "axios"

const config = {
	headers: {
		Group: "127"
	}
}

export const getSecureHeader = () => {
	const token = localStorage.getItem("token")
	return token
		? { Authorization: "Bearer " + token }
		: { error: "No token found" }
}

export const privateServicePatch = (route, id, data) => {
	let url = id ? `${route}/${id}` : route
	let token = getSecureHeader()
	const { Authorization, error } = token

	if (Authorization) {
		axios.patch(url, data, {
			header: {
				...config.headers,
				Authorization
			}
		}) // TODO: Controlar errores
	}
}

export const getPrivate = async (route, id = null) => {
	try {
		let url =id ? (url = route + "/" + id) : (url = route)
		let token = getSecureHeader()
		if (token.Authorization) {
			config = {
				headers: {
					...config.headers,
					Authorization: token.Authorization
				}
			}
		} else {
			return token.error
		}
		let response = await axios.get(url, config)
		return response
	} catch (error) {
		return error
	}
}

export const privateDelete = (route, id) => {
	const url = `${route}/${id}`
	let token = getSecureHeader()
	const { Authorization, error } = token

	if (Authorization) {
		axios.delete(url, {
			header: {
				...config.headers,
				Authorization
			}
		})
	} else {
		return error
	}
}

export const Put = async (route, id, data) => {
	//README:
	//Ingresar la url completa  del tipo
	//'http://ongapi.alkemy.org/api/activities'
	//Pasar objeto como argum para enviarlo en el body
	let url = id ? (url = route + "/" + id) : (url = route)
	await axios
		.put(`${url}`, data, {
			headers: getSecureHeader()
		})
		.then((res) => res)
		.catch((err) => alert(err))
}

export const Delete = async (route, id) => {
	//README:
	//Ingresar la url completa  del tipo
	//'http://ongapi.alkemy.org/api/activities' y el ID a eliminar
	let url = id ? (url = route + "/" + id) : (url = route)
	await axios
		.delete(`${url}`, {
			headers: getSecureHeader()
		})
		.then((res) => res)
		.catch((err) => alert(err))
}

export const Post = async (url, body) => {
	//README:
	//Ingresar la url completa  del tipo
	//'http://ongapi.alkemy.org/api/activities'
	//Pasar objeto como argum para enviarlo en el body
	await axios
		.post(url, body, {
			headers: getSecureHeader()
		})
		.then((res) => res)
		.catch((err) => alert(err))
}

export const privatePost = (route, data) => {
	let url = route;
	let token = getSecureHeader();
	const { Authorization, error } = token;

	if (Authorization) {
		axios
			.post(url, data)
			.then((res) => res)
			.catch((err) => err);
	}
};
