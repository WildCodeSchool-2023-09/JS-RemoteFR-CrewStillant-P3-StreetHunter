import { NavLink } from "react-router-dom";
import steve from "../assets/Steve redimentioned .png";

export default function NavBar() {
  return (
    <nav className="flex flex-row mr-4 text-xl font-semibold text-primary_color ">
      <img alt="logo" src={steve} className="ml-5 hover:animate-spin" />
      <ul className="flex flex-row justify-end gap-5 ml-64 text-primary">
        <li>
          <NavLink
            className="hover:text-slate-800 focus:px-7"
            to="/users/login"
          >
            INSCRIPTION /CONNEXION
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:text-slate-800 focus:px-7"
            to="/users/profile"
          >
            PROFIL
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-slate-800 focus:px-7" to="/map">
            LA CARTE
          </NavLink>
        </li>
        <li>
          <NavLink className="hover:text-slate-800 focus:px-7" to="/game/ranks">
            GALERIE /SCORES
          </NavLink>
        </li>
        <li>
          <NavLink
            className="hover:text-slate-800 focus:pl-10"
            to="/administration/main"
          >
            ADMINISTRATION
          </NavLink>
        </li>
        {/* set deconnexion button */}
        <div>
          <li className="ml-48">
            <NavLink className="hover:text-slate-800 fixed">
              DECONNEXION
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}
