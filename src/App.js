import React, { Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Spinner from "./Components/Spinner/Spinner";
import Progress from "./Components/Progress/Porgress";
const ActivitiesForm = lazy(() =>
  import("./Components/Activities/ActivitiesForm")
);
const CategoriesForm = lazy(() =>
  import("./Components/Categories/CategoriesForm")
);
const NewsForm = lazy(() => import("./Components/News/NewsForm"));
const News = lazy(() => import("./Components/News/News"));
const SlidesForm = lazy(() => import("./Components/Slides/SlidesForm"));
const TestimonialForm = lazy(() =>
  import("./Components/Testimonials/TestimonialsForm")
);
const UserForm = lazy(() => import("./Components/Users/UsersForm"));
const SchoolCampaign = lazy(() => import("./Campaigns/School/SchoolCampaign"));
const ToysCampaign = lazy(() => import("./Campaigns/Toys/ToysCampaign"));
const MembersForm = lazy(() => import("./Components/Members/MembersForm"));
const ProjectsForm = lazy(() => import("./Components/Projects/ProjectsForm"));
const RegisterForm = lazy(() => import("./Components/Auth/RegisterForm"));
const LoginForm = lazy(() => import("./Components/Auth/LoginForm"));
const Donacion = lazy(() => import("./Donations/Donacion"));
const Gracias = lazy(() => import("./Donations/Gracias"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Home = lazy(() => import("./Pages/Home/Home"));
const OrganizationData = lazy(() =>
  import("./Components/Organization/OrganizationData")
);
const OrganizationForm = lazy(() =>
  import("./Components/Organization/EditOrganizationDataForm")
);
const NewsList = lazy(() => import("./Components/News/NewsList"));
const BackOffice = lazy(() => import("./Components/Backoffice/BackOffice"));
const MembersList = lazy(() => import("./Components/Members/MembersList"));
const About = lazy(() => import("./Components/About/About"));
const SlideList = lazy(() => import("./Pages/Slides/SlideList"));
const ActivityDetail = lazy(() =>
  import("./Components/Activities/ActivityDetail")
);
const NewsDetails = lazy(() => import("./Components/News/Detail/NewsDetails"));
const UsersList = lazy(() => import("./Components/Users/UsersList"));
const CategoriesList = lazy(() =>
  import("./Components/Categories/CategoriesList")
);
const Activities = lazy(() => import("./Components/Activities/Activities"));
const HomeForm = lazy(() => import("./Components/Backoffice/HomeForm"));

function App() {
  return (
    // Agregar newsletter en footer
    <>
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<Progress />}>
            <Route path="/" exact component={Home} />
            <Route path="/create-activity" component={ActivitiesForm} />
            <Route path="/actividades" component={Activities} />
            <Route path="/create-category" component={CategoriesForm} />
            <Route path="/novedades" exact component={News} />
            <Route path="/contacto" component={Contact} />
            <Route path="/create-news" component={NewsForm} />
            <Route path="/actividades/:id" component={ActivityDetail} />
            <Route path="/backoffice/users" component={UsersList} />
            <Route
              path="/backoffice/create-activity"
              component={ActivitiesForm}
            />
            <Route path="/contacto" component={Contact} />
            <Route
              path="/novedades/:id"
              component={() => (
                <NewsDetails title="Titulo recibido por props" />
              )}
            />
            <Route path="/categories" component={CategoriesList} />
            <Route path="/backoffice/slides" component={SlideList} />
            <Route path="/create-news" component={NewsForm} />
            <Route path="/backoffice/home" component={HomeForm} />
            <Route path="/news/:id" component={NewsForm} />
            <Route path="/backoffice/create-slide" component={SlidesForm} />
            <Route path="/backoffice/slides/creacion" component={SlidesForm} />
            <Route
              path="/backoffice/slides/edicion/:id"
              component={SlidesForm}
            />
            <Route path="/create-testimonials" component={TestimonialForm} />
            <Route path="/backoffice/create-user" exact component={UserForm} />
            <Route path="/backoffice/create-user/:id" component={UserForm} />
            <Route path="/backoffice/members" component={MembersList} />
            <Route path="/create-project" component={ProjectsForm} />
            <Route path="/backoffice/news" component={NewsList} />
            <Route path="/create-member" component={MembersForm} />
            <Route path="/school-campaign" component={SchoolCampaign} />
            <Route path="/toys-campaign" component={ToysCampaign} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/backoffice/slides/create" component={SlidesForm} />
            <Route
              path="/backoffice/slides/edicion/:id"
              component={SlidesForm}
            />
            <Route path="/backoffice/slides" component={SlideList} />
            <Route
              path="/backoffice/organization"
              component={OrganizationData}
            />
            <Route
              path="/backoffice/organization/edit"
              component={OrganizationForm}
            />
            <Route
              path="/backoffice/activities/:id"
              component={ActivitiesForm}
            />
            <Route path="/backoffice/projects/:id" />
            <Route path="/backoffice/create-project" component={ProjectsForm} />
            <Route path="/school-campaign" component={SchoolCampaign} />
            <Route path="/toys-campaign" component={ToysCampaign} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterForm} />
            <Route
              path="/donar"
              component={() => <Donacion message="Quieres donar?" />}
            />
            <Route
              path="/novedades/:id"
              component={() => (
                <NewsDetails title="Titulo recibido por props" />
              )}
            />
            <Route
              path="/nosotros"
              component={() => <About text="Sobre Nosotros" />}
            />
            <Route path="/gracias" component={Gracias} />
            <Route path="/backoffice" component={BackOffice} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
