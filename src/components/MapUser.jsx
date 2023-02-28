import React from "react";
import "leaflet/dist/leaflet.css";
import "./Styles/MapUserStyle.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapUser = ({ user }) => {
  const lat = Number(user?.location.coordinates.latitude);
  const lng = Number(user?.location.coordinates.longitude);
  const location = { lat: lat, lng: lng };
  return (
    <div>
      <MapContainer center={location} zoom={10}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapUser;
