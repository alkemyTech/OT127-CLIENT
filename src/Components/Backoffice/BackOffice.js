import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, Switch, Route } from "react-router-dom";
import SlideList from "../../Pages/Slides/SlideList";
import ActivitiesForm from "../Activities/ActivitiesForm";
import ActivitiesList from "../Activities/ActivitiesList";
import CategoriesForm from "../Categories/CategoriesForm";
import CategoriesList from "../Categories/CategoriesList";
import MembersForm from "../Members/MembersForm";
import MembersList from "../Members/MembersList";
import SlidesForm from "../Slides/SlidesForm";
import HomeForm from "./HomeForm";
import UsersList from "../Users/UsersList";
import UserForm from "../Users/UsersForm";
import NewsForm from "../News/NewsForm";
import NewsList from "../News/NewsList";
import OrganizationData from "../Organization/OrganizationData";
import OrganizationDataForm from "../Organization/EditOrganizationDataForm";
import ProjectsForm from "../Projects/ProjectsForm";

const BackOffice = () => {
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
      <div className="offcanvas__controller" onMouseOver={handleShow}></div>
      <h1>Bienvenido!</h1>

      {/* TODO MODULARIZAR ESTO */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Backoffice Routes</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="offcanvas__body">
          {backofficeRoutes.map((element) => {
            return <Link to={element.router}>{element.name}</Link>;
          })}
        </Offcanvas.Body>
      </Offcanvas>

      <Switch>
        <Route path="/backoffice/home" component={HomeForm} />
        <Route path="/backoffice/create-activity" component={ActivitiesForm} />
        <Route
          path="/backoffice/create-activity/:id"
          component={ActivitiesForm}
        />
        <Route path="/backoffice/activities" component={ActivitiesList} />
        <Route path="/backoffice/categories" component={CategoriesList} />
        <Route
          path="/backoffice/categories/create"
          component={CategoriesForm}
        />
        <Route path="/backoffice/categories" component={CategoriesList} />
        <Route path="/backoffice/members" component={MembersList} />
        <Route path="/backoffice/members/create" component={MembersForm} />
        <Route path="/backoffice/members/edit/:id" component={MembersForm} />
        <Route path="/backoffice/slides" component={SlideList} />
        <Route path="/backoffice/slides/create" component={SlidesForm} />
        <Route path="/backoffice/slides/edit/:id" component={SlidesForm} />
        <Route path="/backoffice/users" component={UsersList} />
        <Route path="/backoffice/users/create" component={UserForm} />
        <Route path="/backoffice/users/edit/:id" component={UserForm} />
        <Route path="/backoffice/news" component={NewsList} />
        <Route path="/backoffice/news/create" component={NewsForm} />
        <Route path="/backoffice/news/edit/:id" component={NewsForm} />
        <Route path="/backoffice/organization" component={OrganizationData} />
        <Route
          path="/backoffice/organization/edit"
          component={OrganizationDataForm}
        />
        <Route path="/backoffice/projects/create" component={ProjectsForm} />
        <Route path="/backoffice/projects/edit/:id" component={ProjectsForm} />
      </Switch>
    </div>
  );
};

export default BackOffice;
