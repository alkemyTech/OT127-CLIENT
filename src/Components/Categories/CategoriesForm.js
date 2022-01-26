import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Error from "../Error/Error";

const CategoriesForm = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [message, setMessage] = useState(false);
	const [image, set_image] = useState();

	const send_image = (files) => {
		const fileReader = new FileReader();
		fileReader.onload = () => {
			if (fileReader.readyState === 2) {
				set_image(fileReader.result);
			}
		};
		fileReader.readAsDataURL(files);
	};

	const {id} = useParams();

	useEffect(() => {
		const ApiData = async (id) => {
			if (id) {
				try {
					const {data} = await axios.get(
						`http://ongapi.alkemy.org/api/categories/${id}`
					);
					console.log(data.data);
					setName(data.data.name);
					setDescription(data.data.description);
					set_image(data.data.image);

					// setDescription(data.data.image)
				} catch (error) {
					console.log(error);
				}
			} else {
				setName("");
				setDescription("");
			}
		};

		ApiData(id);
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validaciones

		if(id){
			axios
		.put(	`http://ongapi.alkemy.org/api/categories/${id}`, {
			id,
			name,
			description,
			image
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
		}else{
			axios
			.post("http://ongapi.alkemy.org/api/categories", {
				name,
				description,
				image
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		}
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Nombre:</label>
					<input
						className="input-field"
						type="text"
						placeholder="Nombre de la Categoría"
						id="name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					{/* {errors.name && touched.name ? <Error>{errors.name}</Error> : null} */}
				</div>

				<div>
					<label htmlFor="description">Descripción:</label>
					<input
						className="input-field"
						type="text"
						placeholder="Descripción de la Categoría"
						id="description"
						name="description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					{/* {errors.description && touched.description ? (
						<Error>{errors.description}</Error>
					) : null} */}
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
							set_image(
								(window.URL || window.webkitURL).createObjectURL(
									e.target.files[0]
								)
							);
						}}
					/>
				</div>

				<input
					className="submit-btn"
					type="submit"
					value={id ? "Editar" : "Guardar"}
				/>
			</form>
		</div>
	);
};

export default CategoriesForm;
