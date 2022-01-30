import React, { useState, useEffect } from "react";
import getNews from "../../Services/newsService";

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews(setNews);
  }, []);

  const newsList = () => {
    return news.length ? (
      news.map((element) => (
        <ul className="list-container">
          <li className="card-info" key={element.id}>
            <h3>{element.name}</h3>
            <p>{element.description}</p>
          </li>
        </ul>
      ))
    ) : (
      <p>No hay novedades</p>
    );
  };

  return (
    <>
      <h1>Novedades</h1>
      {newsList()}
    </>
  );
};

export default News;
