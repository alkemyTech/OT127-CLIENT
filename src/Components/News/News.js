import React, { useState } from "react";
import NewsList from "./NewsList";

const News = () => {
  const [News, setNews] = useState(); //News va a ser sacado de la API en un futuro

  return (
    <>
      <h1>Novedades</h1>
      <NewsList news={News}></NewsList>
    </>
  );
};

export default News;
