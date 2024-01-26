import { NavLink } from "react-router-dom";

export default function Footer() {
  const footerLinks = [
    {
      path: "/game/instructions",
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
      <footer className="mt-2">
        <ul className="flex flex-row justify-evenly lg:text-xl">
          {footerLinks.map((n) => (
            <li key={n.title}>
              <NavLink
                className="text-md font-semibold text-primary hover:text-slate-800 active:text-slate-500"
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
