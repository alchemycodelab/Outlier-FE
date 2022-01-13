import React from 'react'
import { Link } from 'react-router-dom';

export default function HomeComponent() {
  return (
    <>
      <Link to={'/login'}>
        <button>Login</button>
      </Link>
      <Link to={'/signup'}>
        <button>SignUp</button>
      </Link>
    </>
  );
}
