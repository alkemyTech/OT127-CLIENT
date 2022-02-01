import React from "react";
import "./sass/main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import NewsForm from "./Components/News/NewsForm";
import News from "./Components/News/News";
import SlidesForm from "./Components/Slides/SlidesForm";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import RegisterForm from "./Components/Auth/RegisterForm";
import LoginForm from "./Components/Auth/LoginForm";
import Donacion from "./Donations/Donacion";
import Gracias from "./Donations/Gracias";
import ContactForm from "./Components/Contact/ContactForm";
import Home from "./Pages/Home/Home";
import OrganizationData from "./Components/Organization/OrganizationData";
import OrganizationForm from "./Components/Organization/EditOrganizationDataForm";
import NewsList from "./Components/News/NewsList";
import BackOffice from "./Components/Backoffice/BackOffice";
import MembersList from "./Components/Members/MembersList";
import About from "./Components/About/About";
import ActivityDetail from "./Components/Activities/ActivityDetail";
import NewsDetails from "./Components/News/Detail/NewsDetails";
import UsersList from "./Components/Users/UsersList";

function App() {
  return (
    // Agregar newsletter en footer
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route
            path="/backoffice/create-activity"
            component={ActivitiesForm}
          />

          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/contact" component={ContactForm} />
          <Route
            path="/novedades/:id"
            component={() => <NewsDetails title="Titulo recibido por props" />}
          />
          <Route path="/novedades" component={News} />
          <Route path="/actividades/:id" component={ActivityDetail} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice/slides/creacion" component={SlidesForm} />
          <Route path="/backoffice/users" component={UsersList} />
          <Route path="/backoffice/slides/edicion/:id" component={SlidesForm} />
          {/* <Route path="/backoffice/organization" component={OrganizationData} /> */}
          <Route
            path="/backoffice/organization/edit"
            component={OrganizationForm}
          />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/backoffice/create-user" exact component={UserForm} />
          <Route path="/backoffice/create-user/:id" component={UserForm} />
          <Route path="/backoffice/members" exact component={MembersList} />
          <Route path="/backoffice/news" component={NewsList} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/backoffice/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/backoffice/activities/:id" component={ActivitiesForm} />
          <Route path="/backoffice/projects/:id" component={ProjectsForm} />
          <Route
            path="/nosotros"
            component={() => <About text="Sobre Nosotros" />}
          />
          <Route
            path="/donar"
            component={() => <Donacion message="Quieres donar?" />}
          />
          <Route path="/gracias" component={Gracias} />
          <Route path="/backoffice" component={BackOffice} />
        </Switch>
      </BrowserRouter>

      <div className="App"></div>
    </>
  );
}

export default App;
