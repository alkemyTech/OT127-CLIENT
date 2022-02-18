import React, { useState, lazy, Suspense } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, Switch, Route } from "react-router-dom";
import Progress from "../Progress/Porgress";

const SlideList = lazy(() => import("../../Pages/Slides/SlideList"));
const SlidesForm = lazy(() => import("../Slides/SlidesForm"));
const ActivitiesForm = lazy(() => import("../Activities/ActivitiesForm"));
const ActivitiesList = lazy(() => import("../Activities/ActivitiesList"));
const CategoriesForm = lazy(() => import("../Categories/CategoriesForm"));
const CategoriesList = lazy(() => import("../Categories/CategoriesList"));
const MembersForm = lazy(() => import("../Members/MembersForm"));
const MembersList = lazy(() => import("../Members/MembersList"));
const HomeForm = lazy(() => import("./HomeForm"));
const UserForm = lazy(() => import("../Users/UsersForm"));
const UsersList = lazy(() => import("../Users/UsersList"));
const NewsForm = lazy(() => import("../News/NewsForm"));
const NewsList = lazy(() => import("../News/NewsList"));
const OrganizationData = lazy(() => import("../Organization/OrganizationData"));
const OrganizationDataForm = lazy(() =>
  import("../Organization/OrganizationDataForm")
);
const ProjectsForm = lazy(() => import("../Projects/ProjectsForm"));
const BackofficeHeader = lazy(() => import("./BackofficeHeader"));
const BackOffice = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(!show);

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
      <BackofficeHeader handleShow={handleShow}></BackofficeHeader>
      <h1>Bienvenido!</h1>

      <Offcanvas show={show} onHide={handleShow}>
        <Offcanvas.Header >
          <Offcanvas.Title>Backoffice Routes</Offcanvas.Title>
          <button type="button" onClick={handleShow} className="btn-close btn-close-white" aria-label="Close" />
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

      <Switch>
        <Suspense fallback={<Progress height={7} />}>
          <Route path="/backoffice/home" component={HomeForm} />
          <Route
            path="/backoffice/create-activity"
            exact
            component={ActivitiesForm}
          />
          <Route
            path="/backoffice/create-activity/:id"
            component={ActivitiesForm}
          />
          <Route path="/backoffice/activities" component={ActivitiesList} />
          <Route
            path="/backoffice/categories"
            exact
            component={CategoriesList}
          />
          <Route
            path="/backoffice/categories/create"
            component={CategoriesForm}
          />
          {/* PROBLEMA members no carga los miembros */}
          <Route path="/backoffice/members" exact component={MembersList} />
          <Route
            path="/backoffice/members/create"
            exact
            component={MembersForm}
          />
          {/* PROBLEMA MembersForm no detecta si le pasamos un id en la url */}
          <Route path="/backoffice/members/edit/:id" component={MembersForm} />
          <Route path="/backoffice/slides" exact component={SlideList} />
          {/* PROBLEMA Res.data is undefined en create y edit slides */}
          <Route
            path="/backoffice/slides/create"
            exact
            component={SlidesForm}
          />
          <Route path="/backoffice/slides/edit/:id" component={SlidesForm} />
          <Route path="/backoffice/users" exact component={UsersList} />
          <Route path="/backoffice/users/create" exact component={UserForm} />
          <Route path="/backoffice/users/edit/:id" component={UserForm} />
          <Route path="/backoffice/news" exact component={NewsList} />
          <Route path="/backoffice/news/create" exact component={NewsForm} />
          <Route path="/backoffice/news/edit/:id" component={NewsForm} />
          {/* PROBLEMA Parsed is undefined (?) */}
          <Route
            path="/backoffice/organization"
            exact
            component={OrganizationData}
          />
          {/* PROBLEMA se rompe todo el layout*/}
          <Route
            path="/backoffice/organization/edit"
            component={OrganizationDataForm}
          />
          <Route path="/backoffice/projects/create" component={ProjectsForm} />
          <Route
            path="/backoffice/projects/edit/:id"
            component={ProjectsForm}
          />
        </Suspense>
      </Switch>
    </div>
  );
};

export default BackOffice;
