import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Get } from "../../Services/publicApiService";
import logo from "../../images/LOGO-SOMOS_MAS.png"

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
        <div>
          <img src={logo} alt="" className="publicFooter__logo" />
          <h2>{name}</h2>
        </div>
        <div>
          {/*TODO: Controlar rutas*/}
          <Link to={"/news"}>Novedades</Link>
          <Link to={"/activities"}>Actividades</Link>
          <Link to={"/contact"}>Contacto</Link>
          <Link to={"/about"}>Nosotros</Link>
        </div>
        <div>
          <a href={facebook_url} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href={linkedin_url} target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
          <a href={instagram_url} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={twitter_url} target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </>
  );
};

export default PublicFooter;
