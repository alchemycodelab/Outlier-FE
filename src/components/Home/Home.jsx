import React from 'react';
import LoginHooks from '../../hooks/UseLogin'
import LogoutHooks from '../../hooks/UseLogout'
import { addFavorite, deleteFavoriteById, getFavoriteId, getFavorites } from '../../services/favorites';
import { getStateByName, getStates } from '../../services/states';
// import { auth, createProfile, deleteProfile, getProfileEmail, getProfileId, getProfiles, updateProfile } from '../../services/profile';

export default function HomeComponent() {
  return (
    <>
      <LoginHooks />
      <LogoutHooks />


      {/* //test profile services
      <button onClick={() => getProfiles()}>Test</button>
      <button onClick={async () => await getProfileEmail(me.email)}>Test 2</button>
      <button onClick={() => updateProfile({email: 'pdxjosephb@gmail.com', username: 'test', avatar: 'test.png'})}>Test 3</button>
      <button onClick={() => deleteProfile(3)}>Test 4</button>
      <button onClick={() => console.log(profile)}>Test 5</button> */}


      {/* //test state services
      <button onClick={() => getStates()}>Test 1</button>
      <button onClick={() => getStateByName('texas')}>Test 2</button> */}

      {/* //test favorites services
      <button onClick={() => getFavorites()}>Test 1</button>
      <button onClick={() => getFavoriteId(1)}>Test 2</button>
      <button onClick={() => addFavorite()}>Test 3</button>
      <button onClick={() => deleteFavoriteById()}>Test 4</button> */}

      {/* <Link to={'/login'}>
        <button>Login</button>
      </Link>
      <Link to={'/signup'}>
        <button>SignUp</button>
      </Link> */}
    </>
  );
}
