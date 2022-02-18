import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import BackofficeHeader from "../Backoffice/BackofficeHeader"

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const backofficeRoutes = [
    { name: "Home", router: "/backoffice/home", icon: "home" },
    { name: "Backoffice", router: "/backoffice", icon: "settings" },
    { name: "Users", router: "/backoffice/users", icon: "person" },
    { name: "Slides", router: "/backoffice/slides", icon: "auto_awesome_motion" },
    { name: "Members", router: "/backoffice/members", icon: "face" },
    { name: "News", router: "/backoffice/news", icon: "feed" },
    { name: "Organization", router: "/backoffice/organization", icon: "info" },
    { name: "Create Project", router: "/backoffice/create-project", icon: "post_add" },
    { name: "Create Slides", router: "/backoffice/create-slide", icon: "add_to_photos" },
    { name: "Create User", router: "/backoffice/create-user", icon: "person_add" },
  ];



  return (
    <div>
      <div className="offcanvas__controller"></div>
      <h1>Bienvenido!</h1>
      <BackofficeHeader handleShow={handleShow}></BackofficeHeader>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title>Backoffice Routes</Offcanvas.Title>
          <button type="button" onClick={handleClose} className="btn-close btn-close-white" aria-label="Close" />
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas__body">
          {backofficeRoutes.map((element) => {
            return (
              <Link className="offcanvas__link" to={element.router} key={element.router}>
                <span className="material-icons">
                  {element.icon}
                </span>
                {element.name}
              </Link>
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Sidebar;
