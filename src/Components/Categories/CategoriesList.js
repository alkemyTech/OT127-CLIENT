import React from "react";
import {Link} from "react-router-dom";

const CategoriesList = () => {
	const categories = [
		{
			id: 1541,
			name: "edit category",
			created_at: "2022-01-06T14:47:01.000000Z",
		},
		{
			id: 1544,
			name: "cat create",
			created_at: "2022-01-06T20:13:01.000000Z",
		},
		{
			id: 1552,
			name: "probando probando",
			created_at: "2022-01-07T03:31:07.000000Z",
		},
		{
			id: 1595,
			name: "members",
			created_at: "2022-01-27T00:19:53.000000Z",
		},
		{
			id: 1604,
			name: "nuevos123123",
			created_at: "2022-01-27T12:14:26.000000Z",
		},
	];

	const handleDate = (fecha) => {
		const newDate = new Date(fecha);

		const opciones = {
			year: "numeric",
			month: "long",
			day: "2-digit",
		};

		return newDate.toLocaleDateString("es-ES", opciones);
	};

	const handleEdit = () => {
		// Logica para editar
	};

	const handleDelete = () => {
		// Logica para eliminar
	};

	return (
		<>
			<Link to="/create-category">Crear categoría</Link>
			<h1>Categorías</h1>
			<table>
				<thead>
					<tr>
						<th>Nombre</th>
						<th>Fecha de Creación</th>
						<th>Editar</th>
						<th>Eliminar</th>
					</tr>
				</thead>
				<tbody>
					{categories.map((categori) => (
						<tr key={categori.id}>
							<td>{categori.name}</td>
							<td>{handleDate(categori.created_at)}</td>
							<td>
								<button onClick={handleEdit}>Editar</button>
							</td>
							<td>
								<button onClick={handleDelete}>Editar</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default CategoriesList;
