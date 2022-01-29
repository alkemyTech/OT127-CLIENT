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
        <div className='UsersList'>
            <nav className='UsersList__nav'>
                <p>Usuarios</p>
                <Link to="/backoffice/users/create">
                    <button>CREAR</button>
                </Link>
            </nav>
            <table className='UsersList__table'>
                <thead>
                    <tr className='UsersList__tr'>
                        <th className='UsersList__th'>Nombre</th>
                        <th className='UsersList__th'>Email</th>
                        <th className='UsersList__th'>Acción</th>
                    </tr>
                </thead>
                <tbody className='UsersList__tbody'>
                    {users.map((user) => (
                        <tr className='UsersList__tr' key={user.id}>
                            <td className='UsersList__th'>{user.name}</td>
                            <td className='UsersList__th'>{user.email}</td>
                            <td className='UsersList__th UsersList__action' >
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
