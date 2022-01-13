import React from 'react';
import { Link } from 'react-router-dom';
import Supabase from '../oAuth/oAuth';

export default function HomeComponent() {
  return (
    <>
      <Supabase />
      <Link to={'/login'}>
        <button>Login</button>
      </Link>
      <Link to={'/signup'}>
        <button>SignUp</button>
      </Link>
    </>
  );
}
