import React from "react";
import { Link } from "react-router-dom";

const BackofficeHeader = ({ handleShow }) => {
  return (
    <header className="backofficeHeader">
      <button onClick={handleShow} className="backofficeHeader__button">
        <i className="fa fa-bars backofficeHeader__menu" />
      </button>
      <Link className="backofficeHeader__title" to={"/"}>
        Somos más
      </Link>
    </header>
  );
};

export default BackofficeHeader;
