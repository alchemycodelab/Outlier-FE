import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <h1>Outlier</h1>
      <NavLink to="/instructions"> Instructions</NavLink>
      <NavLink to="/map"> Map</NavLink>
      <NavLink to="/data"> Data</NavLink>
      <NavLink to="/about"> About</NavLink>
      <NavLink to="/resources"> Resources</NavLink>
      <NavLink to="/profile"> Profile</NavLink>
    </>
  );
}
