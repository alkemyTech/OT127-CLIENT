import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import logo from "../../assets/images/logo.jpg";
import axios from "axios";

const Leaflet = () => {
  const [orgData, setOrgData] = useState({});
  const position = [4.6685073, -74.0622645];
  const myIcon = new L.Icon({
    iconUrl: logo,
    iconRetinaUrl: logo,
    popupAnchor: [-0, -0],
    iconSize: [32, 45],
  });

  const getOrganizationData = () => {
    let organizationApi = process.env.REACT_APP_ENDPOINT_ORGANIZATION;
    axios
      .get(`${organizationApi}`)
      .then((response) => setOrgData(response.data))
      .catch((error) => error);
  };

  useEffect(() => {
    getOrganizationData();
  }, []);

  return (
    <div id="map">
      <MapContainer
        center={position}
        zoom={20}
        style={{ height: "50vh", width: "50%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={myIcon}>
          <Popup>
            {orgData.data ? (
              <>
                <strong>Somos Mas</strong>
                <br />
                {orgData.data.address}
              </>
            ) : (
              <>No se encontró la ubicación.</>
            )}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Leaflet;
