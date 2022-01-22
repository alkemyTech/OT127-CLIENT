import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const OrganizationData = () => {

    const [organizationData, setOrganizationData] = useState({})

    const getOrgData = () => {
        axios.get(' http://ongapi.alkemy.org/api/organization')
        .then(response => {
            setOrganizationData(response.data)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    useEffect(() => {
        getOrgData();
    }, []);
    
    return (
        <>
        {organizationData.data &&
        <div>
            <h1>{organizationData.data.name}</h1>
            <img src={organizationData.data.logo} alt='organization_logo'/>
            <p>{organizationData.data.short_description}</p> 
            <Link to='/backoffice/organization/edit'>Editar</Link>
        </div>
        }
        </>
    )
}

export default OrganizationData;