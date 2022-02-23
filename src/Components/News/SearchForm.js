import React from "react";
import SearchIcon from "@material-ui/icons/Search";

const SearchForm = ({ searchNews }) => {
  return (
    <div className="searchform">
      <SearchIcon />
      <input
        type="text"
        onChange={(e) => searchNews(e)}
        className="searchform__input"
        placeholder="Buscar novedades"
      />
    </div>
  );
};

export default SearchForm;
