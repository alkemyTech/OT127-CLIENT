import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
	getUsers,
	getUserSearch,
	getUserSearchAndRole,
} from "../../Redux/reducers/usersSlice";
import Spinner from "../Spinner/Spinner";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const UsersList = () => {
	const dispatch = useDispatch();
	const users = useSelector((state) => state.usersReducer.users);
	const [role, setRole] = useState(0);
	const [search, setSearch] = useState("");

	useEffect(() => {
		dispatch(getUsers());
	}, []);

	const handleEdit = (values) => {
		// TO DO: Logica para editar un usuario
	};

	const handleDelete = (values) => {
		// TO DO: Logica para eliminar un usuario
	};

	const handleRoleChange = (e) => {
		const selectedRole = e.target.value;
		setRole(selectedRole);
		if (selectedRole !== 0) {
			dispatch(getUserSearchAndRole({search: search, role: selectedRole}));
		} else {
			dispatch(getUserSearch(search));
		}
	};

	const handleUserSearch = (e) => {
		const {value} = e.target;
		setSearch(value);
		if (value.length > 0) {
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
				<FormControl>
					<InputLabel>Rol</InputLabel>
					<Select
						value={role}
						label="Rol"
						onChange={handleRoleChange}
						autoWidth
					>
						<MenuItem value={0}>Todos</MenuItem>
						<MenuItem value={1}>Usuario Administrador</MenuItem>
						<MenuItem value={2}>Usuario Regular</MenuItem>
					</Select>
				</FormControl>
				{!users.length ? (
					<Spinner />
				) : (
					<table className="table__data">
						<thead className="table__head">
							<tr className="table__row">
								<th className="table__title">Nombre</th>
								<th className="table__title">Email</th>
								<th className="table__title">Rol</th>
								<th className="table__title-edit">Editar</th>
								<th className="table__title-delete">Eliminar</th>
							</tr>
						</thead>
						<tbody className="table__body">
							{users.map((user) => (
								<tr key={user.id} className="table__row">
									<td className="table__cell">{user.name}</td>
									<td className="table__cell">{user.email}</td>
									<td className="table__cell">{user.role_id}</td>
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
