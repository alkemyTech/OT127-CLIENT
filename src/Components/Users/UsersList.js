import React, { useEffect } from 'react';
import axios from 'axios';

const UsersList = () => {
    useEffect(() => {
        const getUsers = async () => {
            // Actualmente la api devuelve 300 usuarios, para trabajar mejor las limite a 5
            const response = await axios.get("http://ongapi.alkemy.org/api/users?limit=5")
            console.log(response);
        }
        getUsers()
    }, []);

    return <div>Lista de usuarios</div>;
};

export default UsersList;
