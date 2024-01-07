import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import PropTypes from "prop-types";
import markerlogo from "../../../assets/marker.png";
import LocationMarker from "./MapLocate";
import "leaflet/dist/leaflet.css";

export default function LeafletMap({ dbartworks }) {
  const artworks = dbartworks;
  const PinIcon = new Icon({
    iconUrl: markerlogo,
    iconSize: [40, 90],
  });

  return (
    <div className=" flex justify-center rounded-xl bg-[#F2F2F2] md:mx-16 lg:py-7 lg:mx-36 py-3 mx-2 shadow-2xl">
      <MapContainer
        center={[45.51683, -73.58283]}
        watch
        zoom={13}
        scrollWheelZoom
        // whenReady={() => console.log("toto")}
        style={{ width: "90%", height: "80vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
        />
        {artworks &&
          artworks.map((a) => (
            <Marker
              position={[a.coordinates.x, a.coordinates.y]}
              icon={PinIcon}
              key={a.id}
            >
              <Popup className="">
                <img src={a.path_pic} className="p-25" alt="photto" /> {a.title}
              </Popup>
            </Marker>
          ))}
        <LocationMarker />
      </MapContainer>
    </div>
  );
}

LeafletMap.propTypes = {
  dbartworks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
