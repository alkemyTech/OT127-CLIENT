import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Title from '../../Titulosynovedades/Title';


const NewsDetails = ({ title }) => {
    const { id } = useParams()

    return (
        <div>
            <Title title={title} />
            <p>Detalle de novedades ID: {id} </p>
        </div>
    )
};

export default NewsDetails;
