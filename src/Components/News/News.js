import React, {useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import {getNews} from '../../Redux/reducers/newsSlice'

const News = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getNews())
  }, []); //eslint-disable-line

  const news = useSelector(state => state.newsReducer.news.data)
  
  const newsList = () => {
    return news.length ? (
      news.map((element) => (
        <li className="card-info" key={element.id}>
          <h3>{element.name}</h3>
          <p>{element.description}</p>
        </li>
      ))
    ) : (
      <div>
      <p>No hay novedades</p>
      </div>
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
