import { useEffect, useState } from 'react';
import HomeComponent from '../../components/Home/Home';
import LoginHooks from '../../hooks/UseLogin';
import LogoutHooks from '../../hooks/UseLogout';
// import { supabase } from '../../services/createClient';
import { auth, createProfile, deleteProfile, getProfileEmail, getProfileId, getProfiles } from '../../services/profile';

export default function Home() {
  // const [session, setSession] = useState(null);

  
  // useEffect(() => {
  //   setSession(supabase.auth.session());
  //   supabase.auth.onAuthStateChange((e, session) => {
  //     setSession(session);
  //   });
  // }, []);

  const user = {
    email: 'test-post-helper-2@email.com'
  }

  const me = {
    email: '303josephb@gmail.com'
  }

  const tester = {
    email: 'test@email.com'
  }

  // const parseUser = JSON.parse(user)

  return (
    <>
      <h1> HOME Page </h1>
      {/* <GoogleOauth /> */}
      <LoginHooks />
      <LogoutHooks />
      <button onClick={() => getProfiles()}>Test</button>
      <button onClick={async () => await getProfileEmail(me.email)}>Test 2</button>
      {/* <button onClick={() => createProfile(user)}>Test 3</button>
      <button onClick={() => deleteProfile(2)}>Test 4</button> */}
    </>
  );
}
