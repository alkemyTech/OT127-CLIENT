import React from "react";

const BackofficeHeader = ({ handleShow }) => {
  return (
    <header className="backofficeHeader">
      <button onClick={handleShow} className="backofficeHeader__button">
        <i className="fa fa-bars backofficeHeader__menu" />
      </button>
      <p className="backofficeHeader__title">Somos más</p>
    </header>
  );
};

export default BackofficeHeader;
