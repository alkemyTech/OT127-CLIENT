import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const OrganizationData = () => {
  const [organizationData, setOrganizationData] = useState({});

  const getOrgData = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_ORGANIZATION}`,
        {
          headers: {
            Group: 127,
          },
        }
      )
      .then((response) => {
        setOrganizationData(response.data.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    getOrgData();
  }, []);

  return (
    <div className="organization__container">
      {organizationData && (
        <div className="organization">
          <p className="organization__title">Información general</p>
          <div className="organization__text-container">
            <p className="organization__subtitle">Nombre:</p>
            <p className="organization__text">{organizationData.name}</p>
          </div>
          <p className="organization__subtitle">Logo:</p>
          <img src={organizationData.logo} alt="organization_logo" />
          <div className="organization__text-container">
            <p className="organization__subtitle">Descripción corta:</p>
            <p>{organizationData.short_description}</p>
          </div>
          <div className="organization__text-container">
            <p className="organization__subtitle">Descripción larga:</p>
            <p>{organizationData.long_description}</p>
          </div>
          <Link to="/backoffice/organization/edit" className="organization__button" >
            <button className="button">
              Editar
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default OrganizationData;
