import { NavLink } from "react-router-dom";
import LoginHooks from "../../hooks/UseLogin";
import LogoutHooks from "../../hooks/UseLogout";
import css from '../../styles/layout.css';

export default function Header() {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>
        <NavLink className={css.homeLink}to="/">Outlier</NavLink>
        <NavLink className={css.navLink}to="/map"> Map</NavLink>
        <NavLink className={css.navLink}to="/data"> Data</NavLink>
        <NavLink className={css.navLink}to="/about"> About</NavLink>
        <NavLink className={css.navLink}to="/resources"> Resources</NavLink>
      </nav>
      <div className={css.navigation}>
        <LoginHooks />
        <LogoutHooks />
      </div>
    </header>
  );
}
