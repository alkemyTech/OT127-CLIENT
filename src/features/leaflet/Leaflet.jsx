import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from 'leaflet';
import logo from '../../assets/images/logo.jpg'

const Leaflet = () => {
  const position = [4.6685073, -74.0622645];

  const myIcon = new L.Icon({
    iconUrl: logo,
    iconRetinaUrl: logo,
    popupAnchor:  [-0, -0],
    iconSize: [32,45],
});
  
  return (
    <div id="map">
      <MapContainer
        center={position}
        zoom={20}
        style={{ height: "50vh", width:"50%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={myIcon}>
          <Popup><strong>Somos Mas</strong></Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Leaflet;
