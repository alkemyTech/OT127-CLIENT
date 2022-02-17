import React from "react";

const SearchForm = () => {
  const searchNews = () => {};

  return (
    <>
      <input type="text" onClick={(e) => searchNews(e)} />
    </>
  );
};

export default SearchForm;
