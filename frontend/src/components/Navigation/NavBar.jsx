import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import PropTypes from "prop-types";
import BurgerMenu from "./BurgerMenu";
import steve from "../../assets/Steve_redimentioned.png";

export default function NavBar({ auth, setAuth }) {
  const navigate = useNavigate();
  const decoded = auth && jwtDecode(auth.token);
  let navLinks;
  if (auth !== undefined) {
    if (decoded.isAdmin === 1) {
      navLinks = [
        {
          path: "/administration/artworks",
          title: "LISTE DES OEUVRES",
        },
        {
          path: "/administration/users",
          title: "LISTE DES JOUEURS",
        },
        {
          path: "/administration/validationroom",
          title: "ESPACE DE VALIDATION",
        },
        {
          path: `/user/profile/`,
          title: "PROFIL",
        },
        {
          path: "/game/map",
          title: "LA CARTE",
        },
      ];
    } else {
      navLinks = [
        {
          path: `/user/profile/`,
          title: "PROFIL",
        },
        {
          path: "/game/map",
          title: "LA CARTE",
        },
        {
          path: "/game/scoreboard",
          title: "SCORES",
        },

        {
          path: "/game/gallery",
          title: "GALERIE",
        },
      ];
    }
  } else {
    navLinks = [
      {
        path: "/user/signup",
        title: "INSCRIPTION",
      },
      {
        path: `/user/login/`,
        title: "CONNEXION ",
      },
      {
        path: "/game/map",
        title: "LA CARTE",
      },
    ];
  }

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
        {auth !== undefined && (
          <span className="text-primary capitalize ml-4">
            {" "}
            salut {auth.user.username} !{" "}
          </span>
        )}
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
            {auth !== undefined && (
              <li>
                <button
                  type="button"
                  className="hover:text-slate-800 active:text-slate-500 md:px-4"
                  onClick={() => {
                    setAuth(undefined);
                    navigate("/");
                  }}
                >
                  DECONNEXION
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}
NavBar.propTypes = {
  auth: PropTypes.shape({
    token: PropTypes.string.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      is_admin: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  setAuth: PropTypes.func.isRequired,
};
