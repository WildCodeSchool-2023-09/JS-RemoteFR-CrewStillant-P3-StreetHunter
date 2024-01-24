import { useLoaderData, Link } from "react-router-dom";
import LeafletMap from "../components/Game/Map/LeafletMap";

export default function MapPage() {
  const artworks = useLoaderData();
  return (
    <div className="lg:h-[88vh] ">
      <span className=" flex flex-row justify-center  font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4 text-primary mt-0">
        LA CARTE
      </span>
      <div>
        <LeafletMap dbartworks={artworks} />
        <Link
          to="/game/submitartwork"
          className=" flex justify-center w-[20rem] mb-2 mx-auto cursor-pointer 
        px-8 py-2 border-solid border-[#1C6EA4] shadow-lg shadow-slate-800 bg-[#ffffff] text-sky-800 rounded-xl  transition font-semibold hover:h-xl  hover:bg-sky-600 hover:text-white"
        >
          AJOUTER UN STREET ART
        </Link>
      </div>
    </div>
  );
}
