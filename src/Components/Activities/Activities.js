import {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import Axios from "axios";
import {
	sweetAlertInfo,
	sweetAlertError,
} from "../../Services/sweetAlertServices";
import Spinner from "../Spinner/Spinner";

// ! Sacar Mock y hacer logica de Get y agregar logica de Edit, Delete y renderizar en Backoffice

const Activities = () => {
	const [activities, setActivities] = useState([]);
	const [loading, setLoading] = useState(true);

	const history = useHistory();

	// logica para traerme los datos y agregue el spinner
	const getActivities = async () => {
		try {
			setLoading(true);
			const url = process.env.REACT_APP_ACTIVITIES_ENDPOINT;
			const {data} = await Axios.get(url);
			const activitiesData = data.data;
			setActivities(activitiesData);
			setLoading(false);
		} catch (error) {
			sweetAlertError();
			return error;
		}
	};

	useEffect(() => {
		getActivities();
	}, []);

	// Editar redireccion al formulario segun el ID que seleciona de la tabla
	const handleEdit = (id) => {
		history.push(`/backoffice/create-activity/${id}`);
	};

	// Eliminar y actualizar el estado para mostar sin el que esta eliminado
	const handleDelete = async (id, name, image) => {
		try {
			const url = `${process.env.REACT_APP_ACTIVITIES_ENDPOINT}/${id}`;
			const respuesta = await Axios.delete(url, {
				id,
				name,
				image,
			});
			const activitiesUpDate = activities.filter(
				(activity) => activity.id !== id
			);
			setActivities(activitiesUpDate);
			sweetAlertInfo("Registro Eliminado con Exito");
			return respuesta;
		} catch (error) {
			return error;
		}
	};

	return (
		<div className="table">
			<div className="table__container">
				<div className="table__actions">
					<input type="search" />
					<Link className="table__link" to="/backoffice/create-activity">
						Crear Actividad
					</Link>
				</div>
				{loading ? (
					<Spinner />
				) : (
					<table className="table__data">
						<thead className="table__head">
							<tr className="table__row">
								<th className="table__title">Nombre</th>
								<th className="table__title">Imagen</th>
								<th className="table__title-edit">Editar</th>
								<th className="table__title-delete">Eliminar</th>
							</tr>
						</thead>
						<tbody className="table__body">
							{activities.map((activity) => (
								<tr key={activity.id} className="table__row">
									<td className="table__cell">{activity.name}</td>
									<td className="table__cell">
										<img
											src={activity.image}
											alt={activity.name}
											width="50px"
										/>
									</td>
									<td className="table__cell-edit">
										<button
											className="table__edit"
											onClick={() => handleEdit(activity?.id)}
										>
											Editar
										</button>
									</td>
									<td className="table__cell-delete">
										<button
											className="table__delete"
											onClick={() =>
												handleDelete(
													activity?.id,
													activity.name,
													activity.image
												)
											}
										>
											Eliminar
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</div>
	);
};

export default Activities;
