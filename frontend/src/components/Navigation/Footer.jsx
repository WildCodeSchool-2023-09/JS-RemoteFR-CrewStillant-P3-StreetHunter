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
      <footer className="sm:ml-8">
        <ul className="flex flex-row justify-evenly lg:text-xl">
          {footerLinks.map((n) => (
            <li key={n.title}>
              <NavLink
                className="text-md font-semibold text-primary transition-2s duration-200 hover:duration-200 hover:text-[#F5CCA0] hover:bg-cyan-800 rounded-lg px-4 hover:px-4  active:text-slate-500 "
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
