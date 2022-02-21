import {useEffect} from "react"
import {useDispatch, useSelector} from "react-redux";
import {
	getActivities,
	getActivitiesSearch,
} from "../../Redux/reducers/activitiesSlice";
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import {
	sweetAlertInfo, //eslint-disable-line
	sweetAlertError, //eslint-disable-line
} from "../../Services/sweetAlertServices";
import Spinner from "../Spinner/Spinner";

// ! Sacar Mock y hacer logica de Get y agregar logica de Edit, Delete y renderizar en Backoffice

const Activities = () => {
	const dispatch = useDispatch();
	const activities = useSelector((state) => state.activitiesReducer.activities);

	const history = useHistory();

	useEffect(() => {
		dispatch(getActivities());
	}, [dispatch]);

	// Editar redireccion al formulario segun el ID que seleciona de la tabla
	const handleEdit = (id) => {
		history.push(`/backoffice/create-activity/${id}`);
	};

	// Eliminar y actualizar el estado para mostar sin el que esta eliminado
	/* const handleDelete = async (id, name, image) => {
    try {
      const url = `${process.env.REACT_APP_ACTIVITIES_ENDPOINT}/${id}`;
      await Axios.delete(url, {
        id,
        name,
        image,
      });
      const activitiesUpDate = activities.filter(
        (activity) => activity.id !== id
      );
      setActivities(activitiesUpDate);
      sweetAlertInfo("Registro Eliminado con Exito");
    } catch (error) {
      return error;
    }
  }; */

	// Eliminar y actualizar el estado para mostar sin el que esta eliminado
	const handleDelete = async (id, name, image) => {
		// logica desarrolada por david
	};

	const handleActivitiesSearch = (e) => {
		const {value} = e.target;
		if (value.length > 2) {
			dispatch(getActivitiesSearch(value));
		} else {
			dispatch(getActivities());
		}
	};

	return (
		<div className="table">
			<div className="table__container">
				<div className="table__actions">
					<input
						type="search"
						name="search"
						onChange={(e) => handleActivitiesSearch(e)}
					/>
					<Link className="table__link" to="/backoffice/create-activity">
						Crear Actividad
					</Link>
				</div>
				{!activities.length ? (
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
