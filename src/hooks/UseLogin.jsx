import GoogleLogin, { useGoogleLogin } from "react-google-login";
import { useProfile } from '../context/Profile/ProfileCtx'
import { useNavigate } from "react-router-dom";
import { checkEmails, findAuthEmail, signUp } from "../services/auth";
import { createProfile, getProfileEmail, getProfiles } from "../services/profile";


const secret = process.env.REACT_APP_GOOGLE_CLIENT_ID
const clientId = `${secret}.apps.googleusercontent.com`;
const superSecret = process.env.REACT_APP_SECRET


function LoginHooks() {
  const {profile, setProfile, setAuthorized} = useProfile()
  const navigate = useNavigate();


  const onSuccess = async (res) => {
    //--email from google response--// 
    const email = res.profileObj.email;
    await setProfile({email});
    console.log(res.profileObj);
    //Recieved access token from google--//
    //--Set app ctx authorized to true--//
    setAuthorized(true)
    //--Check matching email in auth table--//
    const beRes = await findAuthEmail(res.profileObj.email);
    console.log(beRes);
    //--if email exists run log in route--//
    if(beRes.email) {
      const authorizeEmail = signIn({email: profile.email, password: `${superSecret}`});
      // const authorizeEmail = signIn({email: beRes.email, password: `${superSecret}`});
      console.log('SUCCESS SIGNING IN', authorizeEmail);
    } else {
      //--else run create route--//
      const registerEmail = await signUp({email: res.profileObj.email, password: `${superSecret}`});
      console.log('GOOGLE SUCEEDED ADDING ACT', registerEmail);
      navigate('/create');
    }
  }

  const onFailure = (res) => {
    console.log('Login failed:', res)
  }

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
  });

  return (
    <button onClick={signIn}>Auth w/ google</button>
  )
}

export default LoginHooks;
