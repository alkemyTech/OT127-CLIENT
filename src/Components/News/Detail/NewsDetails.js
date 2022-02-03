import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Title from '../../Titulosynovedades/Title';



const NewsDetails = ({ title }) => {
    const [news, setNews] = useState({});
    const { id } = useParams()
    const newsEndpoint = process.env.REACT_APP_ENDPOINTS_NEWS;
    const getNewsData = async () => {
        const response = await axios.get(`${newsEndpoint}/${id}`)
        setNews(response.data.data);
    }
    useEffect(() => {
        getNewsData()
    }, []);


    return (
        <div>
            <Title title={title} />
            <p>{news.name}</p>
            <img src={news.image} alt={title} />
            <p>{news.content}</p>
        </div>
    )
};

export default NewsDetails;
