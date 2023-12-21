import * as L from "leaflet";
import "leaflet.locatecontrol";
import "leaflet.locatecontrol/dist/L.Control.Locate.css";
import { useMap } from "react-leaflet";
// import { useEffect, useState } from "react";

export default function LocateControl() {
  // const [locate, setLocate] = useState(null);
  // console.log(locate)

  const map = useMap();
  L.control.locate().addTo(map);

  // console.log(instance)

  // L.control.locate().addTo(map);
}
