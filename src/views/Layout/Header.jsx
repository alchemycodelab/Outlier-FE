import { NavLink } from 'react-router-dom';
import { useProfile } from '../../context/Profile/ProfileCtx';
import LoginHooks from '../../hooks/UseLogin';
import LogoutHooks from '../../hooks/UseLogout';
import css from './Header.css';

export default function Header() {
  const { profile } = useProfile();
  return (
    <>
      <section className={css.HeaderSection}>
        <div>
          <h1>Outlier</h1>
        </div>
      </section>
      <section className={css.button}>
        <LoginHooks />
        <LogoutHooks />
      </section>
      <section className={css.LinkSection}>
        {/* <h3>{profile.email}</h3> */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/instructions"> Instructions</NavLink>
        <NavLink to="/map"> Map</NavLink>
        <NavLink to="/data"> Data</NavLink>
        <NavLink to="/resources"> Resources</NavLink>
        <NavLink to="/about"> About</NavLink>
        <NavLink to="/profile"> Profile</NavLink>
      </section>
    </>
  );
}
