import { useGoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../context/Profile/ProfileCtx";
import css from '../App.css';



//process not defined
const secret = process.env.REACT_APP_GOOGLE_CLIENT_ID
const clientId = `${secret}.apps.googleusercontent.com`;

function LogoutHooks() {
  const {profile, setProfile, setAuthorized} = useProfile()

  const onLogoutSuccess = (res) => {
    console.log(res)
    alert('success!');
    setProfile(null);
    setAuthorized(false);
  };

  const onFailure = () => {
    console.log('Failed to logout');
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button className={css.button} onClick={signOut}>Log Out</button>
  );
}

export default LogoutHooks;