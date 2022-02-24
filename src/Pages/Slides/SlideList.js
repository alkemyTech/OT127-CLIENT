import { useEffect } from "react";
import { getSlides, getSlidesSearch } from "../../Redux/reducers/slidesSlice";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../Components/Spinner/Spinner";
import { sweetAlertConfirm } from "../../Services/sweetAlertServices";
import { deleteSlide } from "../../Services/slidesApiService";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

const SlideList = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSlides());
	}, []); //eslint-disable-line

	const slides = useSelector((state) => state.slidesReducer.slides.data);

	const rows = slides;

	const handleClickDelete = (id) => {
		sweetAlertConfirm(
			"Eliminar slide",
			"Seguro quieres eliminar el slide?"
		).then((res) => {
			res && deleteSlide(id);
			setTimeout(() => {
				dispatch(getSlides());
			}, 2000);
		});
	};

	const handleSearchChange = (e) => {
		let { value } = e.target;
		if (value.length > 0) {
			dispatch(getSlidesSearch(value));
		} else {
			dispatch(getSlides());
		}
	};
	return (
		<div className="table">
			<div className="table__container">
				<div className="table__actions">
					<TextField
						type="search"
						name="Buscar Usuario"
						size="small"
						label="Buscar Usuario"
						placeholder="Buscar Slide"
						onChange={(e) => {
							handleSearchChange(e);
						}}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<span className="material-icons">
										search
									</span>
								</InputAdornment>
							),
						}}
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
							{rows.map(({ id, name, image, order }) => (
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
										<Link to={`/backoffice/slides/edit/${id}`}>Editar</Link>
									</td>
									<td className="table__cell-delete">
										<button
											className="table__delete"
											onClick={() => handleClickDelete(id)}
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
