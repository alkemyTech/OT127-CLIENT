import {useEffect} from "react";
import {Link} from "react-router-dom";

import {useDispatch} from "react-redux";
import {useSelector, shallowEqual} from "react-redux";
import {
	getCategoriesAction,
	searchCategoriesAction,
} from "../../Redux/actions/categoriesActions";
import {
	isFetchingCategoriesSel,
	categoriesSel,
	messageCategoriesSel,
	errorCategoriesSel,
} from "../../Redux/selector/selectorCategories";
import Spinner from "../Spinner/Spinner";

const CategoriesList = () => {
	const dispatch = useDispatch();
	//eslint-disable-next-line
	const isFetchingCategories = useSelector(
		isFetchingCategoriesSel,
		shallowEqual
	);
	const categories = useSelector(categoriesSel, shallowEqual);
	const messageCategories = useSelector(messageCategoriesSel, shallowEqual); //eslint-disable-line
	const errorCategories = useSelector(errorCategoriesSel, shallowEqual); //eslint-disable-line

	useEffect(() => {
		dispatch(getCategoriesAction());
	}, []); //eslint-disable-line

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

	const handleUserSearch = (e) => {
		const {value} = e.target;
		if (value.length > 2) {
			dispatch(searchCategoriesAction(value));
		} else {
			dispatch(getCategoriesAction());
		}
	};

	return (
		<div className="table">
			<div className="table__container">
				<div className="table__actions">
					<input
						type="search"
						name="search"
						onChange={(e) => handleUserSearch(e)}
					/>
					<Link className="table__link" to="/backoffice/categories/create">
						Crear categoría
					</Link>
				</div>
				{isFetchingCategories ? (
					<Spinner />
				) : (
					<table className="table__data">
						<thead className="table__head">
							<tr className="table__row">
								<th className="table__title">Nombre</th>
								<th className="table__title">Fecha de Creación</th>
								<th className="table__title-edit">Editar</th>
								<th className="table__title-delete">Eliminar</th>
							</tr>
						</thead>
						<tbody className="table__body">
							{categories?.data.map((categori) => (
								<tr key={categori.id} className="table__row">
									<td className="table__cell">{categori.name}</td>
									<td className="table__cell">
										{handleDate(categori.created_at)}
									</td>
									<td className="table__cell-edit">
										<button className="table__edit" onClick={handleEdit}>
											Editar
										</button>
									</td>
									<td className="table__cell-delete">
										<button className="table__delete" onClick={handleDelete}>
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

export default CategoriesList;
