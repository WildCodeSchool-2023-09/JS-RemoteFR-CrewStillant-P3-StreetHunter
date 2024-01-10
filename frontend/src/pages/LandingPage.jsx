import { NavLink } from "react-router-dom";
import Mapart from "../assets/mapart.png";
import play from "../assets/play.png";

export default function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen vh-100">
      <div className="">
        <img
          src={Mapart}
          alt="Website name for landing page"
          className="max-w-[650px] h-auto transform animate-zoom-in-out"
        />
        ;
      </div>
      <div className="transition-transform transform-gpu hover:scale-110 animate-spin-slow">
        <NavLink to="/map">
          <img
            src={play}
            alt="button play to click on to and enter the website"
            className="max-w-[300px] h-auto transform animate-zoom-in-out"
          />
        </NavLink>
      </div>
    </div>
  );
}
