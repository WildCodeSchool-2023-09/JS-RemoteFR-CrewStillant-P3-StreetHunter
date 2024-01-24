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
    <div className=" flex justify-center shadow-[-10px_15px_12px_1px_rgba(12,2,5,0.5)]  rounded-xl bg-[#f2f2f2b8] md:mx-16 lg:py-7 lg:mx- py-3 mx-2">
      <MapContainer
        center={[45.53675, -73.55028]}
        watch
        zoom={13}
        scrollWheelZoom
        whenReady={() => getLocation()}
        style={{ width: "95%", height: "65vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
        />
        {artworks &&
          artworks.map((a) =>
            a.validated ? (
              <Marker
                position={[a.longitude, a.latitude]}
                icon={PinIcon}
                key={a.id}
              >
                <Popup className="request-popup">
                  <img
                    src={a.path_pic}
                    className="center rounded-md shadow-lg shadow-slate-600"
                    alt="photto"
                  />{" "}
                  <p className="font-semibold text-2xl text-center">
                    {a.title}
                  </p>
                </Popup>
              </Marker>
            ) : null
          )}
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
