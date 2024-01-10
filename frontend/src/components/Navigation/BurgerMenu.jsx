import { NavLink } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import PropTypes from "prop-types";
import { CustomBurgerIcon, CustomCrossIcon } from "./CustomBurgerIcon";
import "./BurgerMenu.css";

export default function BurgerMenu({ navLinks, menuOpen, setMenuOpen }) {
  return (
    <div className="md:hidden">
      <Menu
        customBurgerIcon={<CustomBurgerIcon />}
        customCrossIcon={<CustomCrossIcon />}
        right
        width="100%"
        noOverlay
        isOpen={menuOpen}
        onOpen={() => setMenuOpen(!menuOpen)}
        className="bg-gradient-to-b from-backgroundOne to-backgroundTwo rounded-xl opacity-90"
      >
        <nav>
          <ul className="flex flex-col gap-6 text-center ml-3 mt-28 text-slate-800 text-3xl">
            {navLinks.map((n) => (
              <li key={n.title}>
                <NavLink
                  className="hover:text-slate-800 active:text-primary "
                  to={n.path}
                  onClick={() => setMenuOpen(false)}
                >
                  {n.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </Menu>
    </div>
  );
}
BurgerMenu.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
