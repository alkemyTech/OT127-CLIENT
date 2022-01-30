import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./UsersList.scss"
import { Link } from 'react-router-dom';

const UsersList = () => {
    const [users, setUsers] = useState([])

    const getUsersData = async () => {
        const response = await axios.get("http://ongapi.alkemy.org/api/users")
        setUsers(response.data.data)
    }

    useEffect(() => {
        getUsersData()
    }, []);

    const handleEdit = (values) => {
        // TO DO: Logica para editar un usuario
    }

    const handleDelete = (values) => {
        // TO DO: Logica para eliminar un usuario
    }


    return (
        <div className='usersList'>
            <nav className='usersList__nav'>
                <p>Usuarios</p>
                <Link to="/backoffice/users/create">
                    <button>CREAR</button>
                </Link>
            </nav>
            <table className='usersList__table'>
                <thead>
                    <tr className='usersList__tr'>
                        <th className='usersList__th'>Nombre</th>
                        <th className='usersList__th'>Email</th>
                        <th className='usersList__th'>Acción</th>
                    </tr>
                </thead>
                <tbody className='usersList__tbody'>
                    {users.map((user) => (
                        <tr className='usersList__tr' key={user.id}>
                            <td className='usersList__th'>{user.name}</td>
                            <td className='usersList__th'>{user.email}</td>
                            <td className='usersList__th usersList__action' >
                                <button onClick={() => handleEdit(user)}>EDITAR</button>
                                <button onClick={() => handleDelete(user)}>ELIMINAR</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};

export default UsersList;
