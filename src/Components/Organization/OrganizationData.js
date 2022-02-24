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
    <>
      {organizationData && (
        <div>
          <h1>{organizationData.name}</h1>
          <img src={organizationData.logo} alt="organization_logo" />
          <p>{organizationData.short_description}</p>
          <Link to="/backoffice/organization/edit">Editar</Link>
        </div>
      )}
    </>
  );
};

export default OrganizationData;
