import { useMap } from "react-leaflet";
import { useEffect } from "react";
import PropTypes from "prop-types";

export default function RecenterPosition({ lat, long }) {
  const map = useMap();

  useEffect(() => {
    map.setView([lat, long]);
  }, [lat, long, map]);
  return null;
}

RecenterPosition.propTypes = {
  lat: PropTypes.number.isRequired,
  long: PropTypes.number.isRequired,
};
