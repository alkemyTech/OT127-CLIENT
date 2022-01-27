import React, { useEffect } from 'react';
import axios from 'axios';
import "./UsersList.scss"
import { Link } from 'react-router-dom';

const UsersList = () => {
    const [users, setUsers] = React.useState([]);
    useEffect(() => {
        const getUsers = async () => {
            const response = await axios.get("http://ongapi.alkemy.org/api/users")
            setUsers(response.data.data)
        }
        getUsers()
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
            <table>
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Acción</th>
                    </tr>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td className='UsersList__action'>
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
