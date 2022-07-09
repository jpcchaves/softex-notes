// CSS
import styles from "./Navbar.module.css";
// Router
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <span className="brand">Softex</span>
      </NavLink>
    </nav>
  );
};

export default Navbar;
