import GoogleLogin, { useGoogleLogin } from "react-google-login";
import { useProfile } from '../context/Profile/ProfileCtx'
import { useNavigate } from "react-router-dom";
import { checkEmails, findAuthEmail, signUp } from "../services/auth";


const secret = process.env.REACT_APP_GOOGLE_CLIENT_ID
const clientId = `${secret}.apps.googleusercontent.com`;
const superSecret = process.env.REACT_APP_SECRET


function LoginHooks() {
  const {profile, setProfile, setAuthorized} = useProfile()
  const navigate = useNavigate();


  const onSuccess = async (res) => {
    //--email from google response--// 
    const email = res.profileObj.email;
    const googleId = res.googleId.toString();
    console.log(googleId)
    //Recieved access token from google--//
    //--Set app ctx authorized to true--//
    setAuthorized(true)
    //--Check matching email in auth table--//
    // const beRes = await findAuthEmail('test@email.com');
    //--if email exists run log in route--//
    // const authorizeEmail = await signIn(email, googleId);
    // console.log(authorizeEmail);
    //--else run create route--//
    // const registerEmail = await signUp({email, superSecret});
    // console.log(registerEmail);
  }

  const onFailure = (res) => {
    console.log('Login failed:', res)
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    // accessType: OfflineAudioCompletionEvent,
  });

  return (
    <button onClick={signIn}>Auth w/ google</button>
  )
}

export default LoginHooks;
