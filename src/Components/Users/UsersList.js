<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getUserSearch, getUserSearchAndRole } from "../../Redux/reducers/usersSlice";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { sweetAlertConfirm } from "../../Services/sweetAlertServices";
import { deleteUser } from "../../Services/userService"
=======
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
>>>>>>> 2c30922d50d7f75c245229a0e5ed7c780abdddf9

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);
  const [role, setRole] = useState(0)
  const [search, setSearch] = useState({})

	useEffect(() => {
		dispatch(getUsers());
	}, []); // eslint-disable-line

	const handleEdit = (values) => {
		// TO DO: Logica para editar un usuario
	};

<<<<<<< HEAD
  useEffect(() => {
    dispatch(getUsers());
  }, []); //eslint-disable-line

  const handleDelete = (id) => {
    sweetAlertConfirm(
      "Eliminar usuario",
      "Seguro quieres eliminar al usuario?"
    ).then((res) => {
      res && deleteUser(id);
      setTimeout(() => {
        dispatch(getUsers());
      }, 2000);
    });
  };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value
    setRole(selectedRole)
    if (selectedRole !== 0) {
      dispatch(getUserSearchAndRole({ search: search, role: selectedRole }))
    } else {
      dispatch(getUserSearch(search));
    }
  }

  const handleUserSearch = (e) => {
    const { value } = e.target;
    setSearch(value)
    if (value.length > 0) {
      dispatch(getUserSearch(value));
    } else {
      dispatch(getUsers());
    }
  };
=======
	const handleDelete = (values) => {
		// TO DO: Logica para eliminar un usuario
	};
>>>>>>> 2c30922d50d7f75c245229a0e5ed7c780abdddf9

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

<<<<<<< HEAD
      <table className="usersList__table">
        <thead>
          <tr className="usersList__tr">
            <th className="usersList__th">Nombre</th>
            <th className="usersList__th">Email</th>
            <th className="usersList__th">Acción</th>
          </tr>
        </thead>
        <tbody className="usersList__tbody">
          {users.map((user) => (
            <tr className="usersList__tr" key={user.id}>
              <td className="usersList__th">{user.name}</td>
              <td className="usersList__th">{user.email}</td>
              <td className="usersList__th usersList__action">
                <Link to={`/backoffice/users/edit/${user.id}`}>Editar</Link>
                <button onClick={() => handleDelete(user.id)}>ELIMINAR</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
=======
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
>>>>>>> 2c30922d50d7f75c245229a0e5ed7c780abdddf9
};

export default UsersList;
