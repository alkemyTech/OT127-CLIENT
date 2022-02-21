import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getUserSearch, getUserSearchAndRole } from "../../Redux/reducers/usersSlice";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);
  const [role, setRole] = useState(0)
  const [search, setSearch] = useState({})



  useEffect(() => {
    dispatch(getUsers());
  }, []); //eslint-disable-line



  const handleEdit = (values) => {
    // TO DO: Logica para editar un usuario
  };

  const handleDelete = (values) => {
    // TO DO: Logica para eliminar un usuario
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

  return (
    <div className="usersList">
      <nav className="usersList__nav">
        <p>Usuarios</p>
        <Link to="/backoffice/users/create">
          <button>CREAR</button>
        </Link>
      </nav>
      <input
        type="search"
        name="search"
        onChange={(e) => handleUserSearch(e)}
      />

      <FormControl>
        <InputLabel>Rol</InputLabel>
        <Select
          value={role}
          label="Rol"
          onChange={handleRoleChange}
          autoWidth
        >
          <MenuItem value={0}>Todos</MenuItem>
          <MenuItem value={1}>Usuario Regular</MenuItem>
          <MenuItem value={2}>Usuario Administrador</MenuItem>
        </Select>
      </FormControl>

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
                <button onClick={() => handleEdit(user)}>EDITAR</button>
                <button onClick={() => handleDelete(user)}>ELIMINAR</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
