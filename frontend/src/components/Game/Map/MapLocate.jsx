import { useState } from "react";
import { useMapEvents, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import personlogo from "../../../assets/usericon.png";

export default function LocationMarker() {
  const PersonIcon = new Icon({
    iconUrl: personlogo,
    iconSize: [20, 20],
  });
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    dblclick() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={PersonIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}
