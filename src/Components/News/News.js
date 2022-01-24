import React, { useEffect, useState } from "react";
import NewsList from "./NewsList";

const News = () => {
  const [News, setNews] = useState();

  return (
    <>
      <h1>Novedades</h1>
      <NewsList news={News}></NewsList>
    </>
  );
};

export default News;
