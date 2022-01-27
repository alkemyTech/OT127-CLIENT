import React from "react";
import "./App.css";
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
import Home from "./Pages/Home";
import OrganizationData from "./Components/Organization/OrganizationData";
import OrganizationForm from "./Components/Organization/EditOrganizationDataForm";
import BackOffice from "./Components/Backoffice/BackOffice";
import NewsDetails from "./Components/News/Detail/NewsDetails";

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
          <Route path="/novedades/:id" component={() => <NewsDetails title="Titulo recibido por props" />} />
          <Route path="/novedades" component={News} />
          <Route path="/create-news" component={NewsForm} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/backoffice/organization" component={OrganizationData} />
          <Route
            path="/backoffice/organization/edit"
            component={OrganizationForm}
          />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/backoffice/create-user" exact component={UserForm} />
          <Route path="/backoffice/create-user/:id" component={UserForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegisterForm} />
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
