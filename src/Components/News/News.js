import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {getNews} from '../../features/news/newsSlice'

const News = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getNews())
  }, []); //eslint-disable-line

  const news = useSelector(state => state.news.news.data.data)

  const newsList = () => {
    return news ? (
      news.map((element) => (
        <li className="card-info" key={element.id}>
          <h3>{element.name}</h3>
          <p>{element.description}</p>
        </li>
      ))
    ) : (
      <p>No hay novedades</p>
    );
  };

  return (
    <>
      <h1>Novedades</h1>
      <ul className="list-container">{newsList()}</ul>
    </>
  );
};

export default News;
