import {useState, useEffect} from "react";
import axios from "axios";
import Title from "../Titulosynovedades/Title";
import {sweetAlertError} from "../../Services/sweetAlertServices";
import Leaflet from "../../features/leaflet/Leaflet";

const Contact = () => {
	// Estados para guardar los datos y las banderas
	const [error, setError] = useState(false);
	const [contacts, setContacts] = useState([]);

	const isAuthenticated = JSON.parse(localStorage.getItem("authenticatedUser"));

	const endPointContacts = process.env.REACT_APP_ENDPOINT_CONTACTS;

	// Peticion a la API
	const getContact = async () => {
		try {
			const {data} = await axios.get(endPointContacts);
			const contactsAPI = data.data;
			// Utilice un filter para no guardar tantos datos en el estado local ya que hay como 700 contactos
			const filterData = contactsAPI.filter((contact) => contact.id < 25);
			setContacts(filterData);
			setError(false);
		} catch (error) {
			setError(true);
			return error;
		}
	};

  const redirect = () => {
    window.location.href = "/backoffice/home"
  }

	useEffect(() => {
		getContact();
	}, []); // eslint-disable-line

	return (
		<>
			{isAuthenticated && isAuthenticated.role_id !== 1 ? (
				<>
					{error ? sweetAlertError() : null}
					{contacts.map((contact) => (
						<div className="contact" key={contact.id}>
							<div className="contact__title-text">
								<Title title="Contacto" />
							</div>
							<div className="contact__content">
								<p>Nombre:{contact.name}</p>
								<p>Direccion:{contact.email}</p>
								<p>Telefono:{contact.phone}</p>
							</div>
							<div className="contact__footer">
								<h3>Redes Sociales</h3>
								<p>
									<a href="https://www.facebook.com/">
										<img
											src="/images/assets/facebook-icon.svg"
											alt="facebookLogo"
										/>
									</a>
									<a href="https://www.facebook.com/">
										<img
											src="/images/assets/instagram-icon.svg"
											alt="instagramLogo"
										/>
									</a>
									<a href="https://www.facebook.com/">
										<img
											src="/images/assets/linkedin-icon.svg"
											alt="linkedinLogo"
										/>
									</a>
									<a href="https://www.facebook.com/">
										<img
											src="/images/assets/twitter-icon.svg"
											alt="twitterLogo"
										/>
									</a>
								</p>
							</div>
						</div>
					))}
					<Leaflet />
				</>
			) : redirect()}
		</>
	);
};

export default Contact;
