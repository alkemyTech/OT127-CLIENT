import React from "react";

const BackofficeHeader = ({ handleShow }) => {
  return (
    <header className="backofficeheader">
      <button onClick={handleShow} className="backofficeheader__button">
        <i className="fa fa-bars backofficeheader__menu" />
      </button>
      <p className="backofficeheader__title">Somos más</p>
    </header>
  );
};

export default BackofficeHeader;
