import { useLoaderData, useOutletContext, Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import LeafletMap from "../components/Game/Map/LeafletMap";
import add from "../assets/button/addbtn.png";

export default function MapPage() {
  const artworks = useLoaderData();
  const { auth } = useOutletContext();
  const decoded = auth && jwtDecode(auth.token);

  return (
    <div className="">
      <span
        className={`flex flex-row justify-center font-extrabold ${
          !auth || decoded?.isAdmin ? "mb-11" : "mb-0"
        } text-4xl md:text-5xl lg:text-6xl text-primary mt-0`}
      >
        LA CARTE
      </span>
      <div className="flex flex-col align-bottom">
        {auth && decoded?.isAdmin !== 1 ? (
          <Link
            type="button"
            className="flex flex-row justify-center m-auto items-center my-2 lg:mb-4"
            to="/game/submitartwork"
          >
            <img
              src={add}
              alt="valider"
              className="justify-center lg:w-[200px] w-[200px]"
            />
          </Link>
        ) : null}
        <LeafletMap dbartworks={artworks} />
      </div>
    </div>
  );
}
