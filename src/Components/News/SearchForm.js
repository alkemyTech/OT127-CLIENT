import React from "react";

const SearchForm = () => {
  const searchNews = () => {};

  return (
    <>
      <input type="text" onChange={(e) => searchNews(e)} />
    </>
  );
};

export default SearchForm;
