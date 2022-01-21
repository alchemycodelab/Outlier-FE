import { NavLink } from "react-router-dom";
import { useProfile } from "../../context/Profile/ProfileCtx";
import LoginHooks from "../../hooks/UseLogin";
import LogoutHooks from "../../hooks/UseLogout";
import css from './Header.css';

export default function Header() {
  const { profile } = useProfile();
  return (
    <header className={css.header}>
      {/* <h3>{profile.email}</h3> */}
      <nav className={css.navigation}>
        <NavLink className={css.homeLink}to="/">Outlier</NavLink>
        {/* <NavLink className={css.navLink}to="/instructions"> Instructions</NavLink> */}
        <NavLink className={css.navLink}to="/map"> Map</NavLink>
        <NavLink className={css.navLink}to="/data"> Data</NavLink>
        <NavLink className={css.navLink}to="/about"> About</NavLink>
        <NavLink className={css.navLink}to="/resources"> Resources</NavLink>
        {/* <NavLink className={css.navLink}to="/profile"> Profile</NavLink> */}
      </nav>
      <div className={css.navigation}>
        <LoginHooks />
        <LogoutHooks />
      </div>
    </header>
  );
}