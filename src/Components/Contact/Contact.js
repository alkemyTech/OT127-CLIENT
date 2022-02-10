import Title from '../Titulosynovedades/Title'
import "../../sass/pages/_contact.scss";
import Leaflet from '../../features/leaflet/Leaflet';
const Contact = ({ name, short_description, address, phone, cellphone }) => {
	return (
		<>
			<div className="contact">
				<div className="contact__title-text">
					<Title title="Contacto" />
				</div>
				{/* las variables las saque de la api de alkemy/organization porque 
				dice que las props van a venir mas adelante desde una api, supuse
				que era de   esa */}
				<div className="contact__content">
					<p>Nombre:{name}</p>
					<p>Descripcion:{short_description}</p>
					<p>Direccion:{address}</p>
					<p>Telefono:{phone}</p>
					<p>Celular:{cellphone}</p>
				</div>
				<div className="contact__footer">
					<h3>Redes Sociales</h3>
					<p>
						<a href="https://www.facebook.com/">
							<img src="/images/assets/facebook-icon.svg" alt="facebookLogo" />
						</a>
						<a href="https://www.facebook.com/">
							<img
								src="/images/assets/instagram-icon.svg"
								alt="instagramLogo"
							/>
						</a>
						<a href="https://www.facebook.com/">
							<img src="/images/assets/linkedin-icon.svg" alt="linkedinLogo" />
						</a>
						<a href="https://www.facebook.com/">
							<img src="/images/assets/twitter-icon.svg" alt="twitterLogo" />
						</a>
					</p>
				</div>
			</div>
			<Leaflet/>
		</>
	)
}

export default Contact
