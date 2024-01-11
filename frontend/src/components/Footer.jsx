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
      <footer className="mt-20 flex items-center justify-center">
        <ul className="flex space-x-4">
          {navLinks.map((n) => (
            <li>
              <NavLink
                className="text-xl font-semibold text-primary mt-auto hover:text-slate-800 active:text-slate-500"
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
