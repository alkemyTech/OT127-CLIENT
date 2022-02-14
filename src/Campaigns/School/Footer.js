import React from "react";
import logo from "../../images/redes-sociales/somos-mas.png";
import facebook from "../../images/redes-sociales/facebook.png";
import instagram from "../../images/redes-sociales/instagram.png";
import twitter from "../../images/redes-sociales/twitter.png";
import linkedin from "../../images/redes-sociales/linkedin.png";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__container">
				<div className="footer__img">
					<img className="footer__logo" src={logo} alt="logo"></img>
				</div>

				<div className="footer__separador"></div>

				<div className="footer__web">
					<p className="footer__web-titulo">Stios Web</p>
					<p className="footer__web-link">www.somasmas.com</p>
				</div>

				<div className="footer__campanas">
					<p className="footer__campanas-titulo">Otras Campañas</p>
					<p className="footer__campanas-link">www.campana1.com</p>
					<p className="footer__campanas-link">www.campana2.com</p>
					<p className="footer__campanas-link">www.campana3.com</p>
					<p className="footer__campanas-link">www.campana4.com</p>
				</div>

				<div className="footer__redes">
					<div>
						<img
							className="footer__redes-logo"
							src={instagram}
							alt="instagram"
						/>
						<span className="footer__redes-titulo">@somosmas</span>
					</div>
					<div>
						<img className="footer__redes-logo" src={facebook} alt="facebbok" />
						<span className="footer__redes-titulo">@somosmas</span>
					</div>
					<div>
						<img className="footer__redes-logo" src={twitter} alt="twitter" />
						<span className="footer__redes-titulo">@somosmas</span>
					</div>
					<div>
						<img className="footer__redes-logo" src={linkedin} alt="linkedin" />
						<span className="footer__redes-titulo">@somosmas</span>
					</div>
				</div>
			</div>
			<div className="footer__legales">
				<p className="footer__legales-texto">
					© 2022 Somos Más | All Rights Reserved
				</p>
			</div>
		</footer>
	);
};

export default Footer;
