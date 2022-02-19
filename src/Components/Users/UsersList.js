import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getUsers, getUserSearch} from "../../Redux/reducers/usersSlice";
import Spinner from "../Spinner/Spinner";

const UsersList = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.usersReducer.users);

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	const handleEdit = (values) => {
		// TO DO: Logica para editar un usuario
	};

	const handleDelete = (values) => {
		// TO DO: Logica para eliminar un usuario
	};

	const handleUserSearch = (e) => {
		const {value} = e.target;
		if (value.length > 1) {
			dispatch(getUserSearch(value));
		} else {
			dispatch(getUsers());
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
					<Link className="table__link" to="/backoffice/users/create">
						Crear Usuario
					</Link>
				</div>
				{!users.length ? (
					<Spinner />
				) : (
					<table className="table__data">
						<thead className="table__head">
							<tr className="table__row">
								<th className="table__title">Nombre</th>
								<th className="table__title">Email</th>
								<th className="table__title-edit">Editar</th>
								<th className="table__title-delete">Eliminar</th>
							</tr>
						</thead>
						<tbody className="table__body">
							{users.map((user) => (
								<tr key={user.id} className="table__row">
									<td className="table__cell">{user.name}</td>
									<td className="table__cell">{user.email}</td>
									<td className="table__cell-edit">
										<button
											className="table__edit"
											onClick={() => handleEdit(user)}
										>
											Editar
										</button>
									</td>
									<td className="table__cell-delete">
										<button
											className="table__delete"
											onClick={() => handleDelete(user)}
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

export default UsersList;
