import { useEffect, useState } from 'react';
import HomeComponent from '../../components/Home/Home';
import { Oauth } from '../../components/Oauth/Oauth';
import { supabase } from '../../services/createClient';
import Profile from '../Profile/Profile';

export default function Home() {
  const [session, setSession] = useState(null);
  useEffect(() => {
    setSession(supabase.auth.session());
    supabase.auth.onAuthStateChange((e, session) => {
      setSession(session);
    });
  }, []);
  return (
    <>
      <h1> HOME Page </h1>
      <HomeComponent />
      {!session ? (
        <Oauth />
      ) : (
        <Profile key={session.user.id} session={session} />
      )}
      <Oauth />
    </>
  );
}
