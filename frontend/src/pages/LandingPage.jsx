import { NavLink } from "react-router-dom";
import Mapart from "../assets/mapart.png";
import play from "../assets/play.png";

export default function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center h-[85vh]">
      <div className="mt-9 mb-0 md:mt-20 md:mb-2">
        <img
          src={Mapart}
          alt="Website name for landing page"
          className="h-auto w-full max-w-[250px] md:max-w-[370px] sm:max-w-[200px] transform animate-zoom-in-out"
        />
      </div>
      <div className="mb-4 transition-transform transform-gpu hover:scale-90 animate-spin-slow">
        <NavLink to="/game/map">
          <img
            src={play}
            alt="button play to click on to and enter the website"
            className="h-auto w-full max-w-[200px] md:max-w-[150px] sm:max-w-[100px] transform animate-zoom-in-out"
          />
        </NavLink>
      </div>
    </div>
  );
}
