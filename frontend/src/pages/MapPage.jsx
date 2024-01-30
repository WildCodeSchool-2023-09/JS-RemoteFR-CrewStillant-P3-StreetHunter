import { useLoaderData, useOutletContext, Link } from "react-router-dom";
import LeafletMap from "../components/Game/Map/LeafletMap";

export default function MapPage() {
  const artworks = useLoaderData();
  const { auth } = useOutletContext();

  return (
    <div className=" ">
      <span
        className={`flex flex-row justify-center font-extrabold ${
          !auth ? "mb-11" : "mb-0"
        } text-4xl md:text-5xl lg:text-6xl text-primary mt-0`}
      >
        LA CARTE
      </span>
      <div className="flex flex-col align-bottom">
        {auth ? (
          <Link
            type="button"
            className="flex flex-row justify-center m-auto items-center px-20 focus:bg-[#90b48c] hover:bg-[#a2cb9e]  rounded-md outline outline-[#957C58] outline-offset-2 text-primary text-2xl font-secondary font-light  bg-backgroundThree my-5 lg:mb-4"
            to="/game/submitartwork"
          >
            AJOUTER
          </Link>
        ) : null}
        <LeafletMap dbartworks={artworks} />
      </div>
    </div>
  );
}
