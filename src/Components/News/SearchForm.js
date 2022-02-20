import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const SearchForm = ({ searchNews }) => {
  return (
    <>
      <SearchIcon />
      <input type="text" onChange={(e) => searchNews(e)} className="input" />
    </>
  );
};

export default SearchForm;
