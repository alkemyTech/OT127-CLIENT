import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Get } from "../../Services/publicApiService";

const API_URL = process.env.REACT_APP_API_URL;
const ORGANIZATION_ENDPOINT = process.env.REACT_APP_API_ORGANIZATION;

const Footer = () => {
  const [organization, setOrganization] = useState({});

  useEffect(() => {
    Get(API_URL + ORGANIZATION_ENDPOINT).then((res) =>
      setOrganization(res.data.data)
    );
  }, []);

  const { logo, name, facebook_url, linkedin_url, instagram_url, twitter_url } =
    organization;

  return (
    <>
      <div>
        <img src={logo} alt="" style={{ width: "100%" }} />
        <h2>{name}</h2>
      </div>
      <div>
        {/*TODO: Controlar rutas*/}
        <Link to={"/news"}>Novedades</Link>
        <Link to={"/activities"}>Actividades</Link>
        <Link to={"/contact"}>Contacto</Link>
        <Link to={"/about"}>Nosotros</Link>
      </div>
    </>
  );
};

export default Footer;
