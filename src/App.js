import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Progress from "./Components/Progress/Porgress";
const About = lazy(() => import("./Components/About/About"));
const Activities = lazy(() => import("./Components/Activities/Activities"));
const ActivityDetail = lazy(() =>
  import("./Components/Activities/ActivityDetail")
);
const BackOffice = lazy(() => import("./Components/Backoffice/BackOffice"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Donacion = lazy(() => import("./Donations/Donacion"));
const Gracias = lazy(() => import("./Donations/Gracias"));
const Home = lazy(() => import("./Pages/Home/Home"));
const LoginForm = lazy(() => import("./Components/Auth/LoginForm"));
const News = lazy(() => import("./Components/News/News"));
const NewsDetails = lazy(() => import("./Components/News/Detail/NewsDetails"));
const RegisterForm = lazy(() => import("./Components/Auth/RegisterForm"));
const SchoolCampaign = lazy(() => import("./Campaigns/School/SchoolCampaign"));
const TestimonialForm = lazy(() =>
  import("./Components/Testimonials/TestimonialsForm")
);
const ToysCampaign = lazy(() => import("./Campaigns/Toys/ToysCampaign"));

const routes = [
  { path: "/", Component: Home },
  /* PROBLEMA El componente activities no muestra ningun listado */
  { path: "/activities", Component: Activities },
  { path: "/activities/:id", Component: ActivityDetail },
  { path: "/login", Component: LoginForm },
  /* PROBLEMA Problemas para obtener datos de la API, me tira error */
  { path: "/contact", Component: Contact },
  { path: "/register", Component: RegisterForm },
  { path: "/news", Component: News },
  {
    path: "/news/:id",
    Component: NewsDetails,
    title: "Titulo recibido por props",
  },
  { path: "/thanks", Component: Gracias },
  {
    path: "/school-campaign",
    Component: SchoolCampaign,
  },
  { path: "/toys-campaign", Component: ToysCampaign },
  {
    path: "/donate",
    Component: Donacion,
    title: "Quieres donar?",
  },
  { path: "/about", Component: About, title: "Sobre Nosotros" },
];

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Suspense fallback={<Progress height={7} />}>
            <Route path="/" exact component={Home} />
            <Route path="/activities" exact component={Activities} />
            <Route path="/activities/:id" component={ActivityDetail} />
            <Route path="/login" component={LoginForm} />
            <Route path="/contact" component={Contact} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/news" exact component={News} />
            <Route
              path="/news/:id"
              exact
              component={() => (
                <NewsDetails title="Titulo recibido por props" />
              )}
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
            <Route path="/school-campaign" component={SchoolCampaign} />
            <Route path="/toys-campaign" component={ToysCampaign} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
