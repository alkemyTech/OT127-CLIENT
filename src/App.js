import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import Progress from "./Components/Progress/Porgress";
import LayoutPublic from "./Components/Layout/LayoutPublic";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";
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
            {/*Estos links son solo para testear las animaciones*/}
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/contact"}>Contact</Link>
            <Link to={"/news"}>News</Link>
            <Route
              exact
              path={[
                "/",
                "/activities",
                "/activities/:id",
                "/login",
                "/contact",
                "/register",
                "/news",
                "/news/:id",
                "/donate",
                "/thanks",
                "/about",
              ]}
            >
              <LayoutPublic>
                <div className="PageContainer">
                  {routes.map(({ path, Component, title }) => (
                    <Route key={path} exact path={path}>
                      {({ match }) => (
                        <CSSTransition
                          in={match != null}
                          timeout={500}
                          classNames="PageContainer__page"
                          unmountOnExit
                        >
                          <div classNames="PageContainer__page">
                            {title ? (
                              <Component title={title} />
                            ) : (
                              <Component />
                            )}
                          </div>
                        </CSSTransition>
                      )}
                    </Route>
                  ))}
                </div>
              </LayoutPublic>
            </Route>
            <Route path="/school-campaign" exact component={SchoolCampaign} />
            <Route path="/toys-campaign" exact component={ToysCampaign} />
            <Route path="/backoffice" component={BackOffice} />
          </Suspense>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
