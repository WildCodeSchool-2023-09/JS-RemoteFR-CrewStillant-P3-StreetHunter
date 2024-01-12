import { useLoaderData } from "react-router-dom";
import LeafletMap from "../components/Game/Map/LeafletMap";

export default function MapPage() {
  const artworks = useLoaderData();
  return (
    <div className="pb-5">
      <span className=" flex flex-row justify-center font-extrabold text-xl md:text-xl lg:text-2xl mb-4 text-primary mt-0">
        LA CARTE
      </span>
      <div className="">
        <LeafletMap dbartworks={artworks} />
      </div>
    </div>
  );
}
