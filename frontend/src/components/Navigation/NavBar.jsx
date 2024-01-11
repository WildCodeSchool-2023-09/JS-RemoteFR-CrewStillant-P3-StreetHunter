import { NavLink } from "react-router-dom";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu";
import steve from "../../assets/Steve_redimentioned .png";

export default function NavBar() {
  const navLinks = [
    {
      path: "/profil",
      title: "PROFIL",
    },
    {
      path: "/signup",
      title: "INSCRIPTION",
    },
    {
      path: "/scores",
      title: "SCORES",
    },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPagae] = useState(null);
  const handlePageStyle = (e) => {
    setPagae(e.target.text);
  };

  return (
    <div className="">
      <nav className="flex flex-row justify-between md:justify-normal md:mr-4 text-xl font-semibold text-primary_color ">
        <NavLink to="/home">
          <img alt="logo" src={steve} className="ml-5 hover:animate-spin" />
        </NavLink>
        <BurgerMenu
          navLinks={navLinks}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <ul className="md:visible md:flex flex-col md:flex-row md:justify-end md:gap-4 hidden md:ml-64 text-primary">
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
      </nav>
    </div>
  );
}
