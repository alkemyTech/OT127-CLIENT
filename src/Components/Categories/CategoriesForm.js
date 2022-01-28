import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import Axios from "axios";
import Error from "../Error/Error";

const CategoriesForm = () => {
	const [formValues, setFormValues] = useState({
		name: "",
		description: "",
		message: "",
		image: "",
	});

	const {id} = useParams();
	const urlApiCategories = `http://ongapi.alkemy.org/api/categories`;

	const send_image = (files) => {
		const fileReader = new FileReader();
		fileReader.onload = () => {
			if (fileReader.readyState === 2) {
				setFormValues({...formValues, image: fileReader.result});
			}
		};
		fileReader.readAsDataURL(files);
	};

	const getCategoryData = async () => {
		if (id) {
			try {
				const {data} = await Axios.get(`${urlApiCategories}/${id}`);
				setFormValues({
					...formValues,
					name: data.data.name,
					description: data.data.description,
					image: data.data.image,
				});
			} catch (error) {
				// To do
			}
		}
	};

	useEffect(() => {
		getCategoryData(id);
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validaciones
		if (Object.keys(formValues).length === 0) {
			setFormValues({...formValues, message: true});
			setTimeout(() => {
				setFormValues({...formValues, message: false});
			}, 1500);

			return;
		}

		const {name, description, image} = formValues;

		if (id) {
			Axios.put(`${urlApiCategories}/${id}`, {
				id,
				name,
				description,
				image,
			})
				.then((response) => {
					// To do
				})
				.catch((error) => {
					// to do
				});
		} else {
			Axios.post(urlApiCreateCategories, {
				name,
				description,
				image,
			})
				.then((response) => {
					// To do
				})
				.catch((error) => {
					// to do
				});
		}
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				{formValues.message ? (
					<Error>Todos los campos son obligatorios</Error>
				) : null}
				<div>
					<label htmlFor="name">Nombre:</label>
					<input
						className="input-field"
						type="text"
						placeholder="Nombre de la Categoría"
						id="name"
						name="name"
						value={formValues.name}
						onChange={(e) =>
							setFormValues({...formValues, name: e.target.value})
						}
					/>
				</div>
				<div>
					<label htmlFor="description">Descripción:</label>
					<input
						className="input-field"
						type="text"
						placeholder="Descripción de la Categoría"
						id="description"
						name="description"
						value={formValues.description}
						onChange={(e) =>
							setFormValues({...formValues, description: e.target.value})
						}
					/>
				</div>

				<div>
					<label htmlFor="image">Imagen:</label>
					<input
						type="file"
						id="image"
						name="image"
						accept="image/png,image/jpeg"
						onChange={(e) => {
							send_image(e.target.files[0]);
							setFormValues({
								...formValues,
								image: (window.URL || window.webkitURL).createObjectURL(
									e.target.files[0]
								),
							});
						}}
					/>
				</div>

				<input
					className="submit-btn"
					type="submit"
					value={id ? "Editar" : "Guardar"}
				/>
			</form>
			{id ? (
				<img
					src={formValues.image ? formValues.image : ""}
					alt="imagen_muestra"
				/>
			) : null}
		</div>
	);
};

export default CategoriesForm;
