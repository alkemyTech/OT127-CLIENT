import React from "react";
import "./sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Components/About/About";
import Activities from "./Components/Activities/Activities";
import ActivityDetail from "./Components/Activities/ActivityDetail";
import BackOffice from "./Components/Backoffice/BackOffice";
import Contact from "./Components/Contact/Contact";
import Donacion from "./Donations/Donacion";
import Gracias from "./Donations/Gracias";
import Home from "./Pages/Home/Home";
import LoginForm from "./Components/Auth/LoginForm";
import News from "./Components/News/News";
import NewsDetails from "./Components/News/Detail/NewsDetails";
import RegisterForm from "./Components/Auth/RegisterForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* PROBLEMA 
          El componente activities no muestra ningun listado
          */}
          <Route path="/activities" exact component={Activities} />
          <Route path="/activities/:id" component={ActivityDetail} />
          <Route path="/login" component={LoginForm} />
          {/* PROBLEMA
          Problemas para obtener datos de la API, me tira error
          */}
          <Route path="/contact" component={Contact} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/news" exact component={News} />
          <Route
            path="/news/:id"
            exact
            component={() => <NewsDetails title="Titulo recibido por props" />}
          />
          <Route
            path="/donate"
            component={() => <Donacion message="Quieres donar?" />}
          />
          <Route path="/thanks" component={Gracias} />
          <Route
            path="/about"
            component={() => <About text="Sobre Nosotros" />}
          />
          {/* BACKOFFICE */}
          <Route path="/backoffice" component={BackOffice} />

          {/* QUE PASA CON ËSTO?? */}
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
