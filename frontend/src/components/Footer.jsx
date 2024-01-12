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
      <footer className="mt-20 flex flex-col items-center justify-center">
        <ul className="flex flex-col md:flex-row space-y-4 md:space-x-4 md:space-y-0 items-center justify-center">
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
