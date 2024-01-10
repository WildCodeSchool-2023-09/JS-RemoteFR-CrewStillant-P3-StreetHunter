import { NavLink } from "react-router-dom";

export default function Footer() {
  const navLinks = [
    {
      path: "/instructions",
      title: "CONDITIONS D'UTILISATION",
    },
    {
      path: "/mentions",
      title: "MENTIONS LEGALES",
    },
    {
      path: "/contact",
      title: "CONTACT",
    },
  ];
  return (
    <div>
      <footer className="flex flex-row mr-4 text-xl font-semibold text-primary_color">
        <ul>
          {navLinks.map((n) => (
            <li>
              <NavLink
                className="hover:text-slate-800 active:text-slate-500"
                to={n.path}
              >
                {n.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}
