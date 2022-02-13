import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Title from '../../Titulosynovedades/Title';
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import Comments from "../Comments";

const NewsDetails = ({ title }) => {
    const [news, setNews] = useState({});
    const { id } = useParams()
    const newsEndpoint = process.env.REACT_APP_ENDPOINTS_NEWS;
    const [showComments, setShowComments] = useState(false);
    useBottomScrollListener(() => setShowComments(true));
    const getNewsData = async () => {
        const response = await axios.get(`${newsEndpoint}/${id}`)
        setNews(response.data.data);
    }
    useEffect(() => {
        getNewsData()
    }, []); //eslint-disable-line


    return (
        <>
        <div>
            <Title title={title} />
            <p>{news.name}</p>
            <img src={news.image} alt={title} />
            <p>{news.content}</p>
        </div>
        {showComments && <Comments />}
        </>
    )
};

export default NewsDetails;