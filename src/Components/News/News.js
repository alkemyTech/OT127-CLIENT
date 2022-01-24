import React, { useState } from "react";

const News = () => {
  const [news, setNews] = useState([]); //News va a ser sacado de la API en un futuro

  const newsMap = news.map((element) => {
    return (
      <li className="card-info" key={element.id}>
        <h3>{element.name}</h3>
        <p>{element.description}</p>
      </li>
    );
  });

  return (
    <>
      <h1>Novedades</h1>
      <ul className="list-container">
        {news.length > 0 ? newsMap : <p>No hay novedades</p>}
      </ul>
    </>
  );
};

export default News;
