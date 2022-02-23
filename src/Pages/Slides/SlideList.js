import {useEffect} from "react";
import {getSlides, getSlidesSearch} from "../../Redux/reducers/slidesSlice";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";

const SlideList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSlides());
	}, []);

	const slides = useSelector((state) => state.slidesReducer.slides.data);

	const rows = slides;

  const handleClickEdit = () => {
		//TODO, acciones editar novedades
	};

	const handleClickDelete = () => {
		//TODO, acciones para borrar novedades
	};


	const handleSearchChange = (e) => {
		let {value} = e.target;
		if (value.length > 2) {
			dispatch(getSlidesSearch(value));
		} else {
			dispatch(getSlides());
		}
	};
	return (
		<div className="table">
			<div className="table__container">
				<div className="table__actions">
					<input
						type="search"
						name="search"
						onChange={(e) => {
							handleSearchChange(e);
						}}
						placeholder="Buscar Slide"
					/>
					<Link className="table__link" to="/backoffice/slides/create">
						Crear Slide
					</Link>
				</div>
				{!rows.length ? (
					<Spinner />
				) : (
					<table className="table__data">
						<thead className="table__head">
							<tr className="table__row">
								<th className="table__title">Título</th>
								<th className="table__title">Imagen</th>
								<th className="table__title">Orden</th>
								<th className="table__title-edit">Editar</th>
								<th className="table__title-delete">Eliminar</th>
							</tr>
						</thead>
						<tbody className="table__body">
							{rows.map(({id, name, image, order}) => (
								<tr key={id} className="table__row">
									<td className="table__cell">{name}</td>
									<td className="table__cell">
										<img
											src={image}
											alt=""
											className="imageTable"
											width="100"
										/>
									</td>
                  <td className="table__cell">{order}</td>
									<td className="table__cell-edit">
										<button
											className="table__edit"
											onClick={handleClickEdit}
										>
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

export default SlideList;
