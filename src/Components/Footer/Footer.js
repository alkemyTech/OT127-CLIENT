import React, { useState, useEffect } from "react";
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

  return <></>;
};

export default Footer;
