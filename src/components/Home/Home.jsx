import React from 'react';
import { Link } from 'react-router-dom';
import oAuth from '../Oauth/Oauth';

export default function HomeComponent() {
  return (
    <>
      {/* <oAuth /> */}
      <Link to={'/login'}>
        <button>Login</button>
      </Link>
      <Link to={'/signup'}>
        <button>SignUp</button>
      </Link>
    </>
  );
}
