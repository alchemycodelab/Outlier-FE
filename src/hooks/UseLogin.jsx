import { useGoogleLogin } from "react-google-login";
import { createProfile, getProfileEmail } from "../services/profile";
import { useProfile } from '../context/Profile/ProfileCtx'
import { useNavigate } from "react-router-dom";


//process not defined!!
const secret = process.env.REACT_APP_CLIENT_ID
const clientId = `${secret}.apps.googleusercontent.com`;


function LoginHooks() {
  // const [session, setSession] = useSession()
  const {profile, setProfile, session, setSession} = useProfile()
  const navigate = useNavigate();


  const onSuccess = async (res) => {
    const email = res.profileObj.email;
    console.log('Login Success: currentUser =', res.accessToken)
    await setSession(res.accessToken)
    const BEres = await getProfileEmail(email);
    console.log('BACK END RESPONSE', BEres);
    if(BEres.email && BEres.username) {
      console.log('REGISTERED!!')
    } else if (BEres.email) {
        await setProfile(BEres)
        // navigate('/create')
        console.log('PLEASE CREATE ACCOUNT', 'PROFILE = ', profile, session)
    } else {
        await createProfile({email});
        console.log('DB SEEDED');
    }
          // refreshTokenSetup(res);
  }
      
    // const handleLogin = async (googleData) => {
    //   const res = await fetch('/api/v1/auth/google', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       token: googleData.tokenId
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })

    //   const data = await res.json()
    //   setProfile(data)
    // }

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
    <>
    <button onClick={signIn}>Auth w/ google</button>
    <button onClick={() => console.log(session)}>Sesh</button>
    </>
  )
}

export default LoginHooks;