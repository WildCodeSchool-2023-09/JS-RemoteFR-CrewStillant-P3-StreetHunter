import { NavLink } from "react-router-dom";
import { useState } from "react";
import steve from "../assets/Steve_redimentioned.png";

export default function NavBar() {
  // useState to store the page we're in
  const [page, setPagae] = useState(null);
  // function to ref the page name and put it in the state
  const handlePageStyle = (e) => {
    setPagae(e.target.text);
  };

  return (
    <div>
      <nav className="flex flex-row mr-4 text-xl font-semibold text-primary_color ">
        <NavLink to="/home">
          <img alt="logo" src={steve} className="ml-5 hover:animate-spin" />
        </NavLink>
        <ul className="flex flex-row justify-end gap-4 ml-64 text-primary">
          {/* conditional rendereing depending on the page state for styling purpose (diferent padding when we're on the page) */}
          {/* inscription page */}
          {page === "INSCRIPTION /CONNEXION" ? (
            <li>
              <NavLink
                className="hover:text-slate-800 active:text-slate-500 px-7"
                to="/users/login"
                onClick={handlePageStyle}
              >
                INSCRIPTION /CONNEXION
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                className="hover:text-slate-800 active:text-slate-500 "
                to="/users/login"
                onClick={handlePageStyle}
              >
                INSCRIPTION /CONNEXION
              </NavLink>
            </li>
          )}
          {/* profile page */}
          {page === "PROFIL" ? (
            <li>
              <NavLink
                className="hover:text-slate-800 active:text-slate-500 px-7"
                to="/users/profile"
                onClick={handlePageStyle}
              >
                PROFIL
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                className="hover:text-slate-800 active:text-slate-500"
                to="/users/profile"
                onClick={handlePageStyle}
              >
                PROFIL
              </NavLink>
            </li>
          )}
          {/* map page */}
          {page === "LA CARTE" ? (
            <li>
              <NavLink
                className="hover:text-slate-800 active:text-slate-500 px-7"
                to="/map"
                onClick={handlePageStyle}
              >
                LA CARTE
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                className="hover:text-slate-800 active:text-slate-500"
                to="/map"
                onClick={handlePageStyle}
              >
                LA CARTE
              </NavLink>
            </li>
          )}
          {/* galery/scores page */}
          {page === "GALERIE /SCORES" ? (
            <li>
              <NavLink
                className="hover:text-slate-800 active:text-slate-500 px-7"
                to="/game/ranks"
                onClick={handlePageStyle}
              >
                GALERIE /SCORES
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                className="hover:text-slate-800 active:text-slate-500"
                to="/game/ranks"
                onClick={handlePageStyle}
              >
                GALERIE /SCORES
              </NavLink>
            </li>
          )}
          {/* admin page */}
          {page === "ADMINISTRATION" ? (
            <li>
              <NavLink
                className="hover:text-slate-800 active:text-slate-500 pl-10"
                to="/administration/main"
                onClick={handlePageStyle}
              >
                ADMINISTRATION
              </NavLink>
            </li>
          ) : (
            <li>
              <NavLink
                className="hover:text-slate-800 active:text-slate-500 "
                to="/administration/main"
                onClick={handlePageStyle}
              >
                ADMINISTRATION
              </NavLink>
            </li>
          )}

          {/* set deconnexion button */}
        </ul>
        <div>
          <button
            type="button"
            className="hover:text-slate-800 active:text-slate-500 ml-48 text-primary"
          >
            DECONNEXION
          </button>
        </div>
      </nav>
    </div>
  );
}
