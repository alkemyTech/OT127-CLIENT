import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import logo from "../../images/logo.jpg";
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
    let organizationApi = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_ORGANIZATION}`;
    axios
      .get(`${organizationApi}`, {
        headers: {
          Group: 127,
        },
      })
      .then((response) => setOrgData(response.data.data))
      .catch((error) => error);
  };

  useEffect(() => {
    getOrganizationData();
  }, []);

  return (
    <div id="map" className="map">
      <MapContainer className="map__container" center={position} zoom={20}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={myIcon}>
          <Popup>
            {orgData.address ? (
              <>
                <strong>Somos Mas</strong>
                <br />
                {orgData.address}
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
