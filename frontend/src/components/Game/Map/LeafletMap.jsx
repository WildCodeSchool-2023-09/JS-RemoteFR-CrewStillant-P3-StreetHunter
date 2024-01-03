import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import markerlogo from "../../../assets/marker.png";
import LocationMarker from "./MapLocate";
import "leaflet/dist/leaflet.css";

export default function LeafletMap() {
  const PinIcon = new Icon({
    iconUrl: markerlogo,
    iconSize: [40, 90],
  });

  return (
    <div className=" flex justify-center rounded-xl bg-[#F2F2F2] py-7 mx-36 shadow-2xl">
      <MapContainer
        center={[45.51683, -73.58283]}
        watch
        zoom={13}
        scrollWheelZoom
        style={{ width: "90%", height: "80vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
        />
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
        />
        <Marker position={[45.51683, -73.58283]} icon={PinIcon}>
          {/* //faire un component pour le popup et son contenu */}
          <Popup>
            IMAGE. <br /> TITRE
          </Popup>
        </Marker>
        <Marker position={[45.53646, -73.55026]} icon={PinIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <LocationMarker />
      </MapContainer>
    </div>
  );
}
