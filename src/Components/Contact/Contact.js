import { useState, useEffect } from "react";
import axios from "axios";
import ContactForm from "./ContactForm";
import { sweetAlertError } from "../../Services/sweetAlertServices";
import Leaflet from "../../features/leaflet/Leaflet";

const Contact = () => {
  // Estados para guardar los datos y las banderas
  const [organizationData, setOrganizationData] = useState([]);

  const endPointOrganization =
    process.env.REACT_APP_API_URL + process.env.REACT_APP_API_ORGANIZATION;

  // Peticion a la API
  const getOrganizationData = () => {
    axios
      .get(endPointOrganization, {
        headers: {
          Group: 127,
        },
      })
      .then((res) => {
        console.log(res.data);
        setOrganizationData(res.data.data);
      })
      .catch((error) => {
        return error;
      });
  };

  useEffect(() => {
    getOrganizationData();
  }, []); //eslint-disable-line

  return (
    <>
      <div className="contact">
        <h1 className="contact__title">Contacto</h1>
        <div className="contact__content">
          <p>{organizationData.name}</p>
          <p>{organizationData.address}</p>
          <p>{organizationData.cellphone}</p>
        </div>
        <div className="contact__footer">
          <h3>Redes Sociales</h3>
          <p>
            <a href={organizationData.facebook_url}>
              <img src="/images/assets/facebook-icon.svg" alt="facebookLogo" />
            </a>
            <a href={organizationData.instagram_url}>
              <img
                src="/images/assets/instagram-icon.svg"
                alt="instagramLogo"
              />
            </a>
            <a href={organizationData.linkedin_url}>
              <img src="/images/assets/linkedin-icon.svg" alt="linkedinLogo" />
            </a>
            <a href={organizationData.twitter_url}>
              <img src="/images/assets/twitter-icon.svg" alt="twitterLogo" />
            </a>
          </p>
        </div>
      </div>
      <Leaflet />
      <ContactForm />
    </>
  );
};

export default Contact;
