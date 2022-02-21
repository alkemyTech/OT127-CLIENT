import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {
  getNews,
} from "../../Redux/reducers/newsSlice";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategory } from "../../Services/categoriesService";
import Spinner from "../Spinner/Spinner";
import SearchForm from "./SearchForm";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const NewsList = () => {

	const [value, setValue] = useState("");
	const [select, setSelect] = useState(0);
	const [categories, setCategories] = useState([]);

	const dispatch = useDispatch();

	const news = useSelector((state) => state.newsReducer.news.data);

  useEffect(() => {
    dispatch(getNews())
  },[])

	const handleClickEdit = () => {
		//TODO, acciones editar novedadesss
	};

	const handleClickDelete = (id) => {};

	const handleChange = (e) => {
		setSelect(e.target.value);
	};

	const handleSearch = (e) => {
		setValue(e.target.value);
	};

	return (
		<div className="table">
			<div className="table__container">
				<div className="table__actions">
					<Link className="table__link" to="/backoffice/news/create">
						Crear Novedad
					</Link>
					<div>
						<SearchForm searchNews={handleSearch} />
						<FormControl>
							<InputLabel>Categorías</InputLabel>
							<Select
								label="Categorías"
								autoWidth
								onChange={handleChange}
								value={select}
							>
								<MenuItem value={0}>Todos</MenuItem>
								{categories.map(({id, name}) => (
									<MenuItem value={id}>{name}</MenuItem>
								))}
							</Select>
						</FormControl>
					</div>
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
