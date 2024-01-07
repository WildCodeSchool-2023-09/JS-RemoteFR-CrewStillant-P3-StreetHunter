import { NavLink } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import { useState } from "react";
import PropTypes from "prop-types";
import userIcon from "../../assets/usericon.png";

export default function BurgerMenu({ navLinks }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="md:hidden">
      <button type="button" onClick={() => setOpenMenu(!openMenu)}>
        <img src={userIcon} width={50} alt="burger icon" />
      </button>
      {openMenu && (
        <Menu
          right
          width="50%"
          noOverlay
          className="bg-gradient-to-b from-backgroundOne via-backgroundTwo to-transparent rounded-xl opacity-80"
        >
          <nav>
            <ul className="flex flex-col justify-end gap-4 text-end mr-6 mt-5 text-primary">
              {navLinks.map((n) => (
                <li key={n.title}>
                  <NavLink
                    className="hover:text-slate-800 active:text-slate-500 "
                    to={n.path}
                  >
                    {n.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </Menu>
      )}
    </div>
  );
}
BurgerMenu.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
