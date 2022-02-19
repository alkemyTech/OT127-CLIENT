import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import BackofficeHeader from "../Backoffice/BackofficeHeader"

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <h1>Bienvenido!</h1>
      <BackofficeHeader handleShow={handleShow}></BackofficeHeader>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Backoffice Routes</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas__body">
          {backofficeRoutes.map((element) => {
            return <Link to={element.router} key={element.router}>{element.name}</Link>;
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
