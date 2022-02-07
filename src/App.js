import React from "react";
import "./sass/main.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./Components/About/About";
import Activities from "./Components/Activities/Activities";
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import ActivityDetail from "./Components/Activities/ActivityDetail";
import BackOffice from "./Components/Backoffice/BackOffice";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import CategoriesList from "./Components/Categories/CategoriesList";
import Contact from "./Components/Contact/Contact";
import Donacion from "./Donations/Donacion";
import Gracias from "./Donations/Gracias";
import Home from "./Pages/Home/Home";
import HomeForm from "./Components/Backoffice/HomeForm";
import LoginForm from "./Components/Auth/LoginForm";
import MembersForm from "./Components/Members/MembersForm";
import MembersList from "./Components/Members/MembersList";
import News from "./Components/News/News";
import NewsDetails from "./Components/News/Detail/NewsDetails";
import NewsForm from "./Components/News/NewsForm";
import NewsList from "./Components/News/NewsList";
import OrganizationData from "./Components/Organization/OrganizationData";
import OrganizationForm from "./Components/Organization/EditOrganizationDataForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import RegisterForm from "./Components/Auth/RegisterForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import SlidesForm from "./Components/Slides/SlidesForm";
import SlideList from "./Pages/Slides/SlideList";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import UserForm from "./Components/Users/UsersForm";
import UsersList from "./Components/Users/UsersList";

function App() {
<<<<<<< HEAD
	return (
		// Agregar newsletter en footer
		<>
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/actividades" component={Activities} />
					<Route path="/actividades/:id" component={ActivityDetail} />
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
						path="/backoffice/create-project"
						component={ProjectsForm}
					/>
					<Route
						path="/backoffice/create-slide"
						component={SlidesForm}
					/>
					<Route
						path="/backoffice/create-user"
						exact
						component={UserForm}
					/>
					<Route
						path="/backoffice/create-user/:id"
						component={UserForm}
					/>
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
					<Route
						path="/backoffice/projects/:id"
						component={ProjectsForm}
					/>
					<Route path="/backoffice/slides" component={SlideList} />
					<Route
						path="/backoffice/slides/creacion"
						component={SlidesForm}
					/>
					<Route
						path="/backoffice/slides/edicion/:id"
						component={SlidesForm}
					/>
					<Route path="/backoffice/users" component={UsersList} />
					<Route path="/categories" component={CategoriesList} />
					<Route path="/contacto" component={Contact} />
					<Route path="/create-activity" component={ActivitiesForm} />
					<Route path="/create-category" component={CategoriesForm} />
					<Route path="/create-member" component={MembersForm} />
					<Route path="/create-news" component={NewsForm} />
					<Route path="/create-project" component={ProjectsForm} />
					<Route
						path="/create-testimonials"
						component={TestimonialForm}
					/>
					<Route
						path="/donar"
						component={() => <Donacion message="Quieres donar?" />}
					/>
					<Route path="/gracias" component={Gracias} />
					<Route path="/login" component={LoginForm} />
					<Route path="/news/:id" component={NewsForm} />
					<Route path="/novedades" exact component={News} />
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
					<Route path="/register" component={RegisterForm} />
					<Route path="/school-campaign" component={SchoolCampaign} />
					<Route path="/toys-campaign" component={ToysCampaign} />
				</Switch>
			</BrowserRouter>
		</>
	)
};
export default App;
