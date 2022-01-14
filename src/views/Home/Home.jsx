import { useEffect, useState } from 'react';
import HomeComponent from '../../components/Home/Home';
import { Oauth } from '../../components/Oauth/Oauth';
import { supabase } from '../../services/createClient';
import { createProfile, getProfile, getProfileId } from '../../services/profile';
import Profile from '../Profile/Profile';

export default function Home() {
  const [session, setSession] = useState(null);

  
  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((e, session) => {
      setSession(session);
    });
  }, []);

  const user = {
    email: 'test-post-helper@email.com'
  }

  return (
    <>
      <h1> HOME Page </h1>
      <HomeComponent />
      {!session ? (
        <Oauth />
      ) : (
        <Profile key={session.user.id} session={session} />
      )}
      <button onClick={() => getProfile()}>Test</button>
      <button onClick={() => getProfileId(1)}>Test 2</button>
      <button onClick={() => createProfile(user)}>Test 3</button>
    </>
  );
}
