import { NavLink } from "react-router-dom";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import steve from "../../assets/Steve_redimentioned .png";

export default function NavBar() {
  const navLinks = [
    {
      path: "/signup",
      title: "INSCRIPTION",
    },
    {
      path: "/map",
      title: "LA CARTE",
    },
    {
      path: "/scores",
      title: "SCORES",
    },
    {
      path: "/administration",
      title: "ADMINISTRATION",
    },
    {
      path: "/game/artworks",
      title: "GALERIE",
    },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPagae] = useState(null);
  const handlePageStyle = (e) => {
    setPagae(e.target.text);
  };

  return (
    <div className="">
      <nav className="flex flex-row justify-between md:justify-normal md:mr-4 text-xl font-semibold text-primary_color">
        <NavLink to="/">
          <img
            alt="logo"
            src={steve}
            className="ml-2 md:ml-5 hover:animate-spin w-10"
          />
        </NavLink>
        <BurgerMenu
          navLinks={navLinks}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <div className="flex flex-row justify-between ml-auto">
          <ul className="md:visible md:flex flex-col md:flex-row md:justify-end md:gap-4 hidden md:ml-6 text-primary">
            {navLinks.map((n) =>
              page === n.title ? (
                <li key={n.title}>
                  <NavLink
                    className="hover:text-slate-800 active:text-slate-500 px-7"
                    to={n.path}
                    onClick={handlePageStyle}
                    key={n.title}
                  >
                    {n.title}
                  </NavLink>
                </li>
              ) : (
                <li key={n.title}>
                  <NavLink
                    className="hover:text-slate-800 active:text-slate-500"
                    to={n.path}
                    onClick={handlePageStyle}
                  >
                    {n.title}
                  </NavLink>
                </li>
              )
            )}
            <li>
              <button
                type="button"
                className="hover:text-slate-800 active:text-slate-500 md:px-4"
              >
                DECONNEXION
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
