import React, { useEffect } from 'react';
import axios from 'axios';
import "./UsersList.scss"

const UsersList = () => {
    const [users, setUsers] = React.useState([]);
    useEffect(() => {
        const getUsers = async () => {
            // Actualmente la api devuelve 300 usuarios, para trabajar mejor las limite a 5
            const response = await axios.get("http://ongapi.alkemy.org/api/users?limit=5")
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
            <p>Usuarios</p>
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
