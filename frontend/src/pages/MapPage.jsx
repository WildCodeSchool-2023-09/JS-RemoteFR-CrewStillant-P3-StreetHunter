import { useLoaderData, Link, useOutletContext } from "react-router-dom";
import LeafletMap from "../components/Game/Map/LeafletMap";

export default function MapPage() {
  const artworks = useLoaderData();
  const { auth } = useOutletContext();

  return (
    <div className="lg:h-[88vh] ">
      <span className=" flex flex-row justify-center  font-extrabold text-4xl md:text-5xl lg:text-6xl mb-4 text-primary mt-0">
        LA CARTE
      </span>
      <div>
        <LeafletMap dbartworks={artworks} />
        {auth ? (
          <Link
            to="/game/submitartwork"
            className=" flex justify-center h-[5rem] w-[20rem] mt-2 items-center  mx-auto cursor-pointer font-bold
        px-8 py-2 border-solid border-[#1C6EA4] shadow-lg shadow-slate-800 bg-sky-800 text-[#ffffff] rounded-xl  transition hover:h-xl  hover:text-sky-600 hover:bg-white"
          >
            AJOUTER UN STREET ART
          </Link>
        ) : null}
      </div>
    </div>
  );
}
