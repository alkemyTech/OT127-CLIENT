import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import BackofficeHeader from "./BackofficeHeader";

const BackOffice = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

  const backofficeRoutes = [
    { name: "Home", router: "/backoffice/home" },
    { name: "Backoffice", router: "/backoffice" },
    { name: "Users", router: "/backoffice/users" },
    { name: "Slides", router: "/backoffice/slides" },
    { name: "Members", router: "/backoffice/members" },
    { name: "News", router: "/backoffice/news" },
    { name: "Organization", router: "/backoffice/organization" },
    { name: "Create Project", router: "/backoffice/create-project" },
    { name: "Create Slides", router: "/backoffice/create-slide" },
    { name: "Create User", router: "/backoffice/create-user" },
  ];

  return (
    <div>
      <div className="offcanvas__controller"></div>
      <BackofficeHeader handleShow={handleShow}></BackofficeHeader>
      <h1>Bienvenido!</h1>

      <Offcanvas show={show} onHide={handleShow}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Backoffice Routes</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas__body">
          {backofficeRoutes.map((element) => {
            return (
              <Link to={element.router} key={element.router}>
                {element.name}
              </Link>
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default BackOffice;
