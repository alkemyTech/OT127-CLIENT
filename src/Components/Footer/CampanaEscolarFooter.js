import React from "react";
import logo from "../../images/redes-sociales/somos-mas.png";
import facebook from "../../images/redes-sociales/facebook.png";
import instagram from "../../images/redes-sociales/instagram.png";
import twitter from "../../images/redes-sociales/twitter.png";
import linkedin from "../../images/redes-sociales/linkedin.png";

function CampanaEscolarFooter() {
	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__img">
					<img className="footer__img__logo" src={logo}></img>
				</div>

				<div className="footer__separador"></div>

				<div className="footer__web">
					<p className="footer__web__titulo">Stios Web</p>
					<p className="footer__web__link">www.somasmas.com</p>
				</div>

				<div className="footer__campanas">
					<p className="footer__campanas_titulo">Otras Campañas</p>
					<p className="footer__campanas_link">www.campana1.com</p>
					<p className="footer__campanas_link">www.campana2.com</p>
					<p className="footer__campanas_link">www.campana3.com</p>
					<p className="footer__campanas_link">www.campana4.com</p>
				</div>

				<div className="footer__redes">
					<div>
						<img className="footer__redes__logo" src={instagram} />
						<span className="footer__redes__titulo">@somosmas</span>
					</div>
					<div>
						<img className="footer__redes__logo" src={facebook} />
						<span className="footer__redes__titulo">@somosmas</span>
					</div>
					<div>
						<img className="footer__redes__logo" src={twitter} />
						<span className="footer__redes__titulo">@somosmas</span>
					</div>
					<div>
						<img className="footer__redes__logo" src={linkedin} />
						<span className="footer__redes__titulo">@somosmas</span>
					</div>
				</div>
			</div>
			<div className="footer__legales">
				<p className="footer__legales__texto">
					© 2022 Somos Más | All Rights Reserved
				</p>
			</div>
		</footer>
	);
}

export default CampanaEscolarFooter;
