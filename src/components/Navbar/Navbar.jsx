// CSS
import styles from "./Navbar.module.css";
// Router
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/">
        <span className={styles.brand}>Softex</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink
            to="/modulo1"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Modulo 1
          </NavLink>
          <NavLink
            to="/modulo2"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Modulo 2
          </NavLink>
          <NavLink
            to="/modulo3"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Modulo 3
          </NavLink>
          <NavLink
            to="/modulo4"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Modulo 4
          </NavLink>
          <NavLink
            to="/modulo5"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Modulo 5
          </NavLink>
          <NavLink
            to="/modulo6"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Modulo 6
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
