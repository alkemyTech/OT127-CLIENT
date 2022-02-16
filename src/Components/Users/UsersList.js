import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../Redux/reducers/usersSlice';


const UsersList = () => {
    const dispatch = useDispatch()
    const users = useSelector(state => state.usersReducer.users)

    useEffect(() => {
        dispatch(getUsers())
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
