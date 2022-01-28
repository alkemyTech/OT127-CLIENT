import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Title from '../../Titulosynovedades/Title';



const NewsDetails = ({ title }) => {
    const [news, setNews] = React.useState({});
    const { id } = useParams()
    useEffect(() => {
        const getNews = async () => {
            const response = await axios.get(`http://ongapi.alkemy.org/api/news/${id}`)
            setNews(response.data.data);
        }
        getNews()
    }, []);


    return (
        <div>
            <Title title={title} />
            <p>{news.name}</p>
            <img src={news.image} />
            <p>{news.content}</p>
        </div>
    )
};

export default NewsDetails;
