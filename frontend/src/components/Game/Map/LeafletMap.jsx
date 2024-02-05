import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import { useState } from "react";
import PropTypes from "prop-types";
import markerlogo from "../../../assets/marker.png";
import LocationMarker from "./MapLocate";
import RecenterPosition from "./RecenterPosition";
import "leaflet/dist/leaflet.css";
import "./leaflet.css";

export default function LeafletMap({ dbartworks }) {
  const artworks = dbartworks;
  const PinIcon = new Icon({
    iconUrl: markerlogo,
    iconSize: [40, 90],
  });
  const [currentLatitude, setCurrentLatitude] = useState();
  const [currentLongitude, setCurrentLongitude] = useState();
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLatitude(position.coords.latitude);
        setCurrentLongitude(position.coords.longitude);
      });
    }
  };

  return (
    <div className=" flex justify-center">
      <MapContainer
        center={[46.8566, 2.3522]}
        watch
        zoom={5}
        scrollWheelZoom
        whenReady={() => getLocation()}
        style={{
          width: "95%",
          height: "65vh",
          boxShadow: "1px 2px 15px 5px rgba(0,0,0,0.46)",
          borderRadius: "12px",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
        />
        {artworks &&
          artworks.map((a) => (
            <Marker
              position={[a.longitude, a.latitude]}
              icon={PinIcon}
              key={a.id}
            >
              <Popup className="request-popup">
                <img
                  src={a.path_pic}
                  className=" m-auto center rounded-md shadow-lg shadow-slate-600 min-h-44 max-h-44"
                  alt="photto"
                />{" "}
                <p className="font-semibold text-2xl text-center rounded-md text-sky-900 bg-slate-100">
                  {a.title}
                </p>
              </Popup>
            </Marker>
          ))}
        {currentLatitude && currentLongitude ? (
          <RecenterPosition long={currentLongitude} lat={currentLatitude} />
        ) : null}
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

LeafletMap.propTypes = {
  dbartworks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
