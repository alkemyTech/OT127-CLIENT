import React, { useState, lazy, Suspense } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
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
    { name: "Home", router: "/backoffice/home" },
    { name: "Backoffice", router: "/backoffice" },
    { name: "Activities", router: "/backoffice/activities" },
    { name: "Members", router: "/backoffice/members" },
    { name: "News", router: "/backoffice/news" },
    { name: "Slides", router: "/backoffice/slides" },
    { name: "Users", router: "/backoffice/users" },
    { name: "Organization", router: "/backoffice/organization" },
    { name: "Create Activity", router: "/backoffice/activity/create" },
    { name: "Create Project", router: "/backoffice/projects/create" },
    { name: "Create Slide", router: "/backoffice/slides/create" },
    { name: "Create User", router: "/backoffice/users/create" },
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

      <Switch>
        <Suspense fallback={<Progress height={7} />}>
          <Route path="/backoffice/home" component={HomeForm} />
          <Route
            path="/backoffice/activity/create"
            exact
            component={ActivitiesForm}
          />
          <Route
            path="/backoffice/activity/edit/:id"
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
          <Route path="/backoffice/members" exact component={MembersList} />
          <Route
            path="/backoffice/members/create"
            exact
            component={MembersForm}
          />
          {/* PROBLEMA MembersForm no detecta si le pasamos un id en la url */}
          <Route path="/backoffice/members/edit/:id" component={MembersForm} />
          <Route path="/backoffice/slides" exact component={SlideList} />
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
