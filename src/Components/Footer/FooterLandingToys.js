import React, { useState, useEffect } from 'react'
import { Get } from '../../Services/publicApiService'
import { Link } from "react-router-dom"
import logo from "../../images/redes-sociales/somos-mas.png"
import fblogo from "../../images/redes-sociales/facebook.png"
import lnlogo from "../../images/redes-sociales/linkedin.png"
import iglogo from "../../images/redes-sociales/instagram.png"
import twlogo from "../../images/redes-sociales/twitter.png"

const FooterLandingToys = () => {
    const [ dataOrganization, setDataOrganization ] = useState({})

    const getData = () => {
        Get(`${process.env.REACT_APP_API_ORGANIZATION2}`)
            .then(res => {
                setDataOrganization(res.data.data)
            })
    }
    const { welcome_text, facebook_url, linkedin_url, instagram_url, twitter_url } =
        dataOrganization;
    useEffect(() => {
        getData()
    }, [])
    return (

        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__left">
                    <img className="footer__container__left-logo" src={logo} alt={welcome_text} />
                    <p className="footer__container__left-name">{welcome_text}</p>
                    <div className="footer__container__left__links">
                        <Link to="/school-campaign">School Campaign</Link>
                        <Link to="/toys-campaign">Toys Campaign</Link>
                    </div>
                </div>
                <div className="footer__container__right">
                    <a
                        href={`http://www.${facebook_url}`}
                        className="footer__container__right__footerlink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={fblogo} alt="fblogo" className="footer__container__right__logo" />
                        <p>Facebook</p>
                    </a>
                    <a
                        href={`http://www.${linkedin_url}`}
                        className="footer__container__right__footerlink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={lnlogo} alt="lnlogo" className="footer__container__right__logo" />
                        <p>Linkedin</p>
                    </a>
                    <a
                        href={`http://www.${instagram_url}`}
                        className="footer__container__right__footerlink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={iglogo} alt="iglogo" className="footer__container__right__logo" />
                        <p>Instagram</p>
                    </a>
                    <a
                        href={`http://www.${twitter_url}`}
                        className="footer__container__right__footerlink"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={twlogo} alt="twlogo" className="footer__container__right__logo" />
                        <p>Twitter</p>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default FooterLandingToys