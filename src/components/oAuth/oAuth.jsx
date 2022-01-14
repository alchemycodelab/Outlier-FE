import { supabase } from '../../services/createClient';
import { useState } from 'react';
import { useProfile } from '../../context/Profile/ProfileCtx';
import { useNavigate } from 'react-router-dom';

function Oauth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const {profile, setProfile} = useProfile();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { user, session, error } = await supabase.auth.signIn({
        email,
        provider: 'google',
      });
      setProfile(profile)
      console.log('PROFILE AT OAUTH', profile);
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
      navigate('/profile', {replace: true});
    }
  };

  return (
    <>
      <section>
        <div>
          <h1>{profile.email}</h1>
          <p>Sign in via magic link with your email below</p>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleLogin(email);
            }}
            disabled={loading}
          >
            {loading ? <span>loading...</span> : <span>send</span>}
          </button>
        </div>
      </section>
    </>
  );
}

export { Oauth };
