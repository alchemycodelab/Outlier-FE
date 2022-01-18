import { NavLink } from "react-router-dom";
import { useProfile } from "../../context/Profile/ProfileCtx";
import LoginHooks from "../../hooks/UseLogin";
import LogoutHooks from "../../hooks/UseLogout";

export default function Header() {
  const { profile } = useProfile();
  return (
    <header className='header'>
      <h1>Outlier</h1>
      {/* <h3>{profile.email}</h3> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/instructions"> Instructions</NavLink>
      <NavLink to="/map"> Map</NavLink>
      <NavLink to="/data"> Data</NavLink>
      <NavLink to="/about"> About</NavLink>
      <NavLink to="/resources"> Resources</NavLink>
      <NavLink to="/profile"> Profile</NavLink>
      <LoginHooks />
      <LogoutHooks />
    </header>
  );
}