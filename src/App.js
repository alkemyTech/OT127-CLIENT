import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import NewsForm from "./Components/News/NewsForm";
import News from "./Components/News/News";
import SlidesForm from "./Components/Slides/SlidesForm";
import TestimonialForm from "./Components/Testimonials/TestimonialForm";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import RegisterForm from "./Components/Auth/RegisterForm";
import LoginForm from "./Components/Auth/LoginForm";
import Donacion from "./Donations/Donacion";
import Gracias from "./Donations/Gracias";
import Contact from "./Components/Contact/Contact";
import Home from "./Pages/Home/Home";
import OrganizationData from "./Components/Organization/OrganizationData";
import OrganizationForm from "./Components/Organization/EditOrganizationDataForm";
import NewsList from "./Components/News/NewsList";
import BackOffice from "./Components/Backoffice/BackOffice";
import MembersList from "./Components/Members/MembersList";
import About from "./Components/About/About";
import SlideList from "./Pages/Slides/SlideList";
import ActivityDetail from "./Components/Activities/ActivityDetail";
import NewsDetails from "./Components/News/Detail/NewsDetails";
import UsersList from "./Components/Users/UsersList";
import CategoriesList from "./Components/Categories/CategoriesList";
import Activities from "./Components/Activities/Activities";
import HomeForm from "./Components/Backoffice/HomeForm";
import 'bootstrap/dist/css/bootstrap.min.css';
=======
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
>>>>>>> f57cbe75023e1d34d332e84389aa84757f93e880

function App() {
  return (
    // Agregar newsletter en footer
    <>
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<Progress height={7} />}>
            <Route path="/" exact component={Home} />
            <Route path="/actividades/:id" component={ActivityDetail} />
            <Route path="/actividades" component={Activities} />
            <Route exact path="/backoffice" component={BackOffice} />
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
            <Route exact path="/backoffice/members" component={MembersList} />
            <Route exact path="/backoffice/news" component={NewsList} />
            <Route
              path="/backoffice/organization"
              component={OrganizationData}
            />
            <Route
              path="/backoffice/organization/edit"
              component={OrganizationForm}
            />
            <Route path="/backoffice/projects/:id" component={ProjectsForm} />
            <Route exact path="/backoffice/slides" component={SlideList} />
            <Route path="/backoffice/slides/creacion" component={SlidesForm} />
            <Route
              path="/backoffice/slides/edicion/:id"
              component={SlidesForm}
            />
            <Route exact path="/backoffice/users" component={UsersList} />
            <Route exact path="/categories" component={CategoriesList} />
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
