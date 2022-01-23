import { NavLink } from "react-router-dom";
import LoginHooks from "../../hooks/UseLogin";
import LogoutHooks from "../../hooks/UseLogout";
// import css from '../../styles/layout.css';
import logo from '../../styles/utlier.png';
import css from './Header.css';

export default function Header() {
  return (
    <header className={css.header}>
      <nav className={css.navigation}>

        {/* <NavLink className={css.homeLink}to="/"><img alt="Outlier logo, Homepage" src={logo}/></NavLink> */}
        <NavLink className={css.homeLink} to="/">
          Outlier
        </NavLink>
        {/* <NavLink className={css.navLink}to="/instructions"> Instructions</NavLink> */}
        <NavLink className={css.navLink} to="/map">
          {' '}
          Map
        </NavLink>
        {/* <NavLink className={css.navLink}to="/data"> Data</NavLink> */}
        <NavLink className={css.navLink} to="/about">
          {' '}
          About
        </NavLink>
        <NavLink className={css.navLink} to="/resources">
          {' '}
          Resources
        </NavLink>
        {/* <NavLink className={css.navLink}to="/profile"> Profile</NavLink> */}

      </nav>
      {/* <div className={css.navigation}>
        <LoginHooks />
        <LogoutHooks />
      </div> */}
    </header>
  );
}
