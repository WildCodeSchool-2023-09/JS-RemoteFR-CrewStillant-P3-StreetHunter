import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import marker from "../../../assets/marker.png";
import "leaflet/dist/leaflet.css";

export default function LeafletMap() {
  const PinIcon = new Icon({
    iconUrl: marker,
    iconSize: [40, 90],
  });

  return (
    <MapContainer
      center={[45.51683, -73.58283]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[45.51683, -73.58283]} icon={PinIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[45.53646, -73.55026]} icon={PinIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
