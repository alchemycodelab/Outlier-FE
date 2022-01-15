import { useGoogleLogin } from "react-google-login";
import { createProfile, getProfileEmail } from "../services/profile";
import { useProfile } from '../context/Profile/ProfileCtx'
import { useNavigate } from "react-router-dom";


//process not defined!!
// const secret = process.env.REACT_APP_CLIENT_ID
// const clientId = `${secret}.apps.googleusercontent.com`;
const clientId = `$445544407756-bc40shinkl4jnfgpkrei8d059vuig95m.apps.googleusercontent.com`;

function LoginHooks() {
  const {profile, setProfile} = useProfile()
  const navigate = useNavigate();


  const onSuccess = async (res) => {
    console.log('Login Success: currentUser =', res.profileObj.email)
    const email = res.profileObj.email;
    const BEres = await getProfileEmail(email);
    console.log('BACK END RESPONSE', BEres);
    if(BEres.email && BEres.username) {
      console.log('REGISTERED!!')
    } else if (BEres.email) {
      await setProfile({email})
      navigate('/create')
      console.log('PLEASE CREATE ACCOUNT', 'PROFILE = ', profile)
    } else {
      await createProfile({email});
      console.log('DB SEEDED');
    }

    // refreshTokenSetup(res);
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