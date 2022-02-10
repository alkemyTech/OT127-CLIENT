import React from "react";

const Header = ({ handleShow }) => {
  return (
    <header className="backofficeheader">
      <button onClick={handleShow} className="backofficeheader__button">
        Menu
      </button>
      <h1 className="backofficeheader__title">Somos más</h1>
    </header>
  );
};

export default Header;
