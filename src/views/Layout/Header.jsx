import { NavLink } from "react-router-dom";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { useProfile } from "../../context/Profile/ProfileCtx";
import LogoutHooks from "../../hooks/UseLogout";

export default function Header() {
  const { profile } = useProfile();
  return (
    <>
      <h1>Outlier</h1>
      <h3>{profile.email}</h3>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/instructions"> Instructions</NavLink>
      <NavLink to="/map"> Map</NavLink>
      <NavLink to="/data"> Data</NavLink>
      <NavLink to="/about"> About</NavLink>
      <NavLink to="/resources"> Resources</NavLink>
      <NavLink to="/profile"> Profile</NavLink>
      <LogoutHooks />
    </>
  );
}
