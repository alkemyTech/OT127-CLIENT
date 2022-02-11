import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Progress from "./Components/Progress/Porgress";
const About = lazy(() => import("./Components/About/About"));
const Activities = lazy(() => import("./Components/Activities/Activities"));
const ActivitiesForm = lazy(() =>
  import("./Components/Activities/ActivitiesForm")
);
const ActivityDetail = lazy(() =>
  import("./Components/Activities/ActivityDetail")
);
const BackOffice = lazy(() => import("./Components/Backoffice/BackOffice"));
const CategoriesForm = lazy(() =>
  import("./Components/Categories/CategoriesForm")
);
const CategoriesList = lazy(() =>
  import("./Components/Categories/CategoriesList")
);
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Donacion = lazy(() => import("./Donations/Donacion"));
const Gracias = lazy(() => import("./Donations/Gracias"));
const Home = lazy(() => import("./Pages/Home/Home"));
const HomeForm = lazy(() => import("./Components/Backoffice/HomeForm"));
const LoginForm = lazy(() => import("./Components/Auth/LoginForm"));
const MembersForm = lazy(() => import("./Components/Members/MembersForm"));
const MembersList = lazy(() => import("./Components/Members/MembersList"));
const News = lazy(() => import("./Components/News/News"));
const NewsDetails = lazy(() => import("./Components/News/Detail/NewsDetails"));
const NewsForm = lazy(() => import("./Components/News/NewsForm"));
const NewsList = lazy(() => import("./Components/News/NewsList"));
const OrganizationData = lazy(() =>
  import("./Components/Organization/OrganizationData")
);
const OrganizationForm = lazy(() =>
  import("./Components/Organization/EditOrganizationDataForm")
);
const ProjectsForm = lazy(() => import("./Components/Projects/ProjectsForm"));
const RegisterForm = lazy(() => import("./Components/Auth/RegisterForm"));
const SchoolCampaign = lazy(() => import("./Campaigns/School/SchoolCampaign"));
const SlidesForm = lazy(() => import("./Components/Slides/SlidesForm"));
const SlideList = lazy(() => import("./Pages/Slides/SlideList"));
const TestimonialForm = lazy(() =>
  import("./Components/Testimonials/TestimonialsForm")
);
const ToysCampaign = lazy(() => import("./Campaigns/Toys/ToysCampaign"));
const UserForm = lazy(() => import("./Components/Users/UsersForm"));
const UsersList = lazy(() => import("./Components/Users/UsersList"));

function App() {
  return (
    // Agregar newsletter en footer
    <>
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<Progress />}>
            <Route path="/" exact component={Home} />
            <Route path="/actividades/:id" component={ActivityDetail} />
            <Route path="/actividades" component={Activities} />
            <Route path="/backoffice" component={BackOffice} />
            <Route
              path="/backoffice/create-activity"
              component={ActivitiesForm}
            />
            <Route
              path="/backoffice/activities/:id"
              component={ActivitiesForm}
            />
            <Route
              path="/backoffice/create-category"
              component={CategoriesForm}
            />
            <Route path="/backoffice/create-member" component={MembersForm} />
            <Route path="/backoffice/create-news" component={NewsForm} />
            <Route path="/backoffice/create-project" component={ProjectsForm} />
            <Route
              path="/backoffice/create-testimonials"
              component={TestimonialForm}
            />
            <Route path="/backoffice/create-user/:id" component={UserForm} />
            <Route path="/backoffice/create-user" exact component={UserForm} />
            <Route path="/backoffice/home" component={HomeForm} />
            <Route path="/backoffice/members" component={MembersList} />
            <Route path="/backoffice/news" component={NewsList} />
            <Route
              path="/backoffice/organization"
              component={OrganizationData}
            />
            <Route
              path="/backoffice/organization/edit"
              component={OrganizationForm}
            />
            <Route path="/backoffice/projects/:id" component={ProjectsForm} />
            <Route path="/backoffice/slides" component={SlideList} />
            <Route path="/backoffice/slides/creacion" component={SlidesForm} />
            <Route
              path="/backoffice/slides/edicion/:id"
              component={SlidesForm}
            />
            <Route path="/backoffice/users" component={UsersList} />
            <Route path="/categories" component={CategoriesList} />
            <Route path="/contacto" component={Contact} />
            <Route
              path="/donar"
              component={() => <Donacion message="Quieres donar?" />}
            />
            <Route path="/gracias" component={Gracias} />
            <Route path="/login" component={LoginForm} />
            <Route path="/news/:id" component={NewsForm} />
            <Route
              path="/novedades/:id"
              component={() => (
                <NewsDetails title="Titulo recibido por props" />
              )}
            />
            <Route path="/novedades" exact component={News} />
            <Route
              path="/nosotros"
              component={() => <About text="Sobre Nosotros" />}
            />
            <Route path="/register" component={RegisterForm} />
            <Route path="/school-campaign" component={SchoolCampaign} />
            <Route path="/toys-campaign" component={ToysCampaign} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
