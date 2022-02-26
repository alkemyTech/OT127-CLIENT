import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import BackofficeHeader from "../Backoffice/BackofficeHeader";

const Sidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const backofficeRoutes = [
    { name: "Home", router: "/backoffice", icon: "settings" },
    { name: "Editar Inicio", router: "/backoffice/home", icon: "home" },
    {
      name: "Actividades",
      router: "/backoffice/activities",
      icon: "volunteer_activism",
    },
    {
      name: "Categorías",
      router: "/backoffice/categories",
      icon: "category",
    },
    {
      name: "Diapositivas",
      router: "/backoffice/slides",
      icon: "auto_awesome_motion",
    },
    { name: "Miembros", router: "/backoffice/members", icon: "face" },
    { name: "Novedades", router: "/backoffice/news", icon: "feed" },
    { name: "Organización", router: "/backoffice/organization", icon: "info" },

    { name: "Usuarios", router: "/backoffice/users", icon: "person" },
    {
      name: "Añadir Actividad",
      router: "/backoffice/activities/create",
      icon: "add_to_photos",
    },
    {
      name: "Añadir Categoría",
      router: "/backoffice/categories/create",
      icon: "add_to_photos",
    },
    {
      name: "Añadir Diapositiva",
      router: "/backoffice/slides/create",
      icon: "add_to_photos",
    },
    {
      name: "Añadir Miembro",
      router: "/backoffice/members/create",
      icon: "add_to_photos",
    },
    {
      name: "Añadir Novedad",
      router: "/backoffice/news/create",
      icon: "add_to_photos",
    },
    {
      name: "Añadir Proyecto",
      router: "/backoffice/projects/create",
      icon: "add_to_photos",
    },

    {
      name: "Añadir Usuario",
      router: "/backoffice/users/create",
      icon: "add_to_photos",
    },
  ];

  return (
    <div>
      <div className="offcanvas__controller"></div>
      <BackofficeHeader handleShow={handleShow}></BackofficeHeader>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title>Panel de administrador</Offcanvas.Title>
          <button
            type="button"
            onClick={handleClose}
            className="btn-close btn-close-white"
            aria-label="Close"
          />
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas__body">
          {backofficeRoutes.map((element) => {
            return (
              <Link
                className="offcanvas__link"
                to={element.router}
                key={element.router}
              >
                <span className="material-icons">{element.icon}</span>
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
