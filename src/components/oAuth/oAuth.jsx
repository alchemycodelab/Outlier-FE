import { supabase } from '../../services/createClient';
import { useState } from 'react';

function Oauth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    try {
      setLoading(true);
      console.log('!!!', email);
      const { error } = await supabase.auth;
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section>
        <div>
          <h1>oAuth</h1>
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
