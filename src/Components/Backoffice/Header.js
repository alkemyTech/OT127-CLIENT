import React from "react";
import MenuIcon from "@material-ui/icons/Menu";

const Header = ({ handleShow }) => {
  return (
    <header className="backofficeheader">
      <h1 className="backofficeheader__title">Somos más</h1>
      <button onClick={handleShow} className="backofficeheader__button">
        <MenuIcon />
      </button>
    </header>
  );
};

export default Header;
