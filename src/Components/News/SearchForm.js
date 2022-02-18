import React from "react";

const SearchForm = ({ searchNews }) => {
  return (
    <>
      <input type="text" onChange={(e) => searchNews(e)} />
    </>
  );
};

export default SearchForm;
