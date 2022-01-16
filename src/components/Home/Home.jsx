import React from 'react';
// import { auth, createProfile, deleteProfile, getProfileEmail, getProfileId, getProfiles, updateProfile } from '../../services/profile';

export default function HomeComponent() {
  return (
    <>
      <LoginHooks />
      <LogoutHooks />
      {/* <button onClick={() => getProfiles()}>Test</button>
      <button onClick={async () => await getProfileEmail(me.email)}>Test 2</button>
      <button onClick={() => updateProfile({email: 'pdxjosephb@gmail.com', username: 'test', avatar: 'test.png'})}>Test 3</button>
      <button onClick={() => deleteProfile(3)}>Test 4</button>
      <button onClick={() => console.log(profile)}>Test 5</button> */}
      {/* <Link to={'/login'}>
        <button>Login</button>
      </Link>
      <Link to={'/signup'}>
        <button>SignUp</button>
      </Link> */}
    </>
  );
}
