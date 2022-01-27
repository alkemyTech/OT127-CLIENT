import React, { useEffect } from 'react';
import axios from 'axios';

const UsersList = () => {
    const [users, setUsers] = React.useState([]);
    useEffect(() => {
        const getUsers = async () => {
            // Actualmente la api devuelve 300 usuarios, para trabajar mejor las limite a 5
            const response = await axios.get("http://ongapi.alkemy.org/api/users?limit=5")
            setUsers(response.data.data)
            console.log(response.data.data);
        }
        getUsers()
    }, []);

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
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>solisma@gmail.com</td>
                        <td>Editar Eliminar</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default UsersList;
