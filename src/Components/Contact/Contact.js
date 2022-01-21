import './contact.css'
export  const Contact = (props) => {
	return(
		<>
			<div className="contact">
				<div className="contact__title">
					{/* <h1>TitleComponent(tarjeta 48)</h1> */}
					<h1>Contacto</h1>
				</div>
				{/* las variables las saque de la api de alkemy/organization porque 
				dice que las props van a venir mas adelante desde una api, supuse
				que era esa */}
				<div className="contact__content">
					<p>Nombre:</p>
					<p>Descripcion:</p>
					<p>Direccion:</p>
					<p>Telefono:</p>
					<p>Celular:</p>
				</div>
				<div className="contact__footer">
					<h3>Redes Sociales</h3>
					<p>
						facebook_url
						linkedin_url
						instagram_url
						twitter_url
					</p>
				</div>
			</div>
  		</>
  )
}

export default Contact
