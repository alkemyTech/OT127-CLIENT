import React, { lazy, Suspense } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Progress from "../Progress/Porgress";
import LayoutBackOffice from "./LayoutBackOffice";

const SlideList = lazy(() => import("../../Pages/Slides/SlideList"));
const SlidesForm = lazy(() => import("../Slides/SlidesForm"));
const ActivitiesForm = lazy(() => import("../Activities/ActivitiesForm"));
const Activities = lazy(() => import("../Activities/Activities"));
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
const BackOffice = () => {
  const isAuthenticated = localStorage.getItem("TOKEN");
  return (
    <>
      {isAuthenticated? (
        <div>
          <LayoutBackOffice>
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
                <Route path="/backoffice/activities" component={Activities} />
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
                <Route
                  path="/backoffice/members"
                  exact
                  component={MembersList}
                />
                <Route
                  path="/backoffice/members/create"
                  exact
                  component={MembersForm}
                />
                {/* PROBLEMA MembersForm no detecta si le pasamos un id en la url */}
                <Route
                  path="/backoffice/members/edit/:id"
                  component={MembersForm}
                />
                <Route path="/backoffice/slides" exact component={SlideList} />
                {/* PROBLEMA Res.data is undefined en create y edit slides */}
                <Route
                  path="/backoffice/slides/create"
                  exact
                  component={SlidesForm}
                />
                <Route
                  path="/backoffice/slides/edit/:id"
                  component={SlidesForm}
                />
                <Route path="/backoffice/users" exact component={UsersList} />
                <Route
                  path="/backoffice/users/create"
                  exact
                  component={UserForm}
                />
                <Route path="/backoffice/users/edit/:id" component={UserForm} />
                <Route path="/backoffice/news" exact component={NewsList} />
                <Route
                  path="/backoffice/news/create"
                  exact
                  component={NewsForm}
                />
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
                <Route
                  path="/backoffice/projects/create"
                  component={ProjectsForm}
                />
                <Route
                  path="/backoffice/projects/edit/:id"
                  component={ProjectsForm}
                />
              </Suspense>
            </Switch>
          </LayoutBackOffice>
        </div>
      ) : (
        <Link to="/login">Iniciá sesión</Link>
      )}
    </>
  );
};

export default BackOffice;
