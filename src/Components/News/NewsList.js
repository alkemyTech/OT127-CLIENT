import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {getNews} from "../../Redux/reducers/newsSlice";
import {useSelector, useDispatch} from "react-redux";
import Spinner from "../Spinner/Spinner";

const NewsList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getNews());
	}, []); //eslint-disable-line

	const news = useSelector((state) => state.newsReducer.news.data);

	const handleClickEdit = () => {
		//TODO, acciones editar novedades
	};

	const handleClickDelete = () => {
		//TODO, acciones para borrar novedades
	};

	return (
		<div className="table">
			<div className="table__container">
				<div className="table__actions">
					<input type="search" />
					<Link className="table__link" to="/backoffice/news/create">
						Crear Novedad
					</Link>
				</div>
				{!news.length ? (
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
							{news.length &&
								news.map((element) => (
									<tr key={element.id} className="table__row">
										<td className="table__cell">{element.name}</td>
										<td className="table__cell">
											<img src={element.image} alt="News_image" width="100" />
										</td>
										<td className="table__cell-edit">
											<button className="table__edit" onClick={handleClickEdit}>
												Editar
											</button>
										</td>
										<td className="table__cell-delete">
											<button
												className="table__delete"
												onClick={handleClickDelete}
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

export default NewsList;
