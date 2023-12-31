import { NavLink } from "react-router-dom";
import { useState } from "react";
import steve from "../assets/Steve_redimentioned.png";

export default function NavBar() {
  const navLinks = [
    {
      path: "/map",
      title: "LA CARTE",
    },
  ];
  const [page, setPagae] = useState(null);
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
      </nav>
    </div>
  );
}
