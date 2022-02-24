import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Get } from "../../Services/publicApiService";
import logo from "../../images/redes-sociales/somos-mas.png";
import NewsletterForm from "../Newsletter/NewsletterForm";

const API_URL = process.env.REACT_APP_API_URL;
const ORGANIZATION_ENDPOINT = process.env.REACT_APP_API_ORGANIZATION;

const PublicFooter = () => {
  const [organization, setOrganization] = useState({});

  useEffect(() => {
    Get(API_URL + ORGANIZATION_ENDPOINT).then((res) =>
      setOrganization(res.data.data)
    );
  }, []);

  const { name, facebook_url, linkedin_url, instagram_url, twitter_url } =
    organization;

  return (
    <>
      <div className="publicFooter">
        <div className="publicFooter__logo-container">
          <img src={logo} alt="" className="publicFooter__logo" />
          <p className="publicFooter__logo-text">{name}</p>
        </div>
        <div className="publicFooter__links-container">
          {/*TODO: Controlar rutas*/}
          <Link className="publicFooter__link" to={"/news"}>
            Novedades
          </Link>
          <Link className="publicFooter__link" to={"/activities"}>
            Actividades
          </Link>
          <Link className="publicFooter__link" to={"/contact"}>
            Contacto
          </Link>
          <Link className="publicFooter__link" to={"/about"}>
            Nosotros
          </Link>
        </div>
        <div className="publicFooter__links-container">
          <a
            className="publicFooter__link"
            href={facebook_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="publicFooter__link"
            href={linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            className="publicFooter__link"
            href={instagram_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="publicFooter__link"
            href={twitter_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <NewsletterForm />
        </div>
      </div>
    </>
  );
};

export default PublicFooter;
