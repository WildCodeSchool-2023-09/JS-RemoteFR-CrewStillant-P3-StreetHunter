import { NavLink } from "react-router-dom";
import { useState } from "react";
import steve from "../assets/Steve_redimentioned.png";

export default function NavBar() {
  const navLinks = [
    {
      path: "/users/login",
      title: "INSCRIPTION /CONNEXION",
    },
    {
      path: "/users/profile",
      title: "PROFIL",
    },
    {
      path: "/map",
      title: "LA CARTE",
    },
    {
      path: "/game/ranks",
      title: "GALERIE /SCORES",
    },
    {
      path: "/administration/main",
      title: "ADMINISTRATION",
    },
  ];
  // ----------------------- [for styling purpose] useState to store the page "name" we're in---------------------
  const [page, setPagae] = useState(null);
  // -----------------[for styling purpose] function to ref the page name and put it in the state --------------
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
          {/* [for styling purpose] conditional rendereing depending on page state (page name takes a diferent padding when page displayed) */}
          {navLinks.map((n) =>
            page === n.title ? (
              <li>
                <NavLink
                  className="hover:text-slate-800 active:text-slate-500 px-7"
                  to={n.path}
                  onClick={handlePageStyle}
                >
                  {n.title}
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  className="hover:text-slate-800 active:text-slate-500 "
                  to={n.path}
                  onClick={handlePageStyle}
                >
                  {n.title}
                </NavLink>
              </li>
            )
          )}
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
