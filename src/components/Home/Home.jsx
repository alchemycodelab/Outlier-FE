import React from 'react';
import LoginHooks from '../../hooks/UseLogin'
import LogoutHooks from '../../hooks/UseLogout'
import { findAuthEmail, signIn, signUp } from '../../services/auth';
import { addFavorite, deleteFavoriteById, getFavoriteId, getFavorites } from '../../services/favorites';
import { createProfile, deleteProfile, getProfileEmail, getProfiles, updateProfile } from '../../services/profile';
import { getStateByName, getStates } from '../../services/states';
// import { auth, createProfile, deleteProfile, getProfileEmail, getProfileId, getProfiles, updateProfile } from '../../services/profile';

export default function HomeComponent() {
const email = {
  email: '303josephb@gmail.com'
}

const test = {
  email: 'test@email.com'
}


  return (
    <>
      {/* //Test Auth services
      //returns id and email from auth table
      <button onClick={() => findAuthEmail(me.email)}>Test 1</button>
      //inserts email into auth table
      <button onClick={() => signUp({ email: me.email, password: 'passwordhere' })}>Test 2</button>
      //logs existing user into data base
      <button onClick={() => signIn( email, 'passwordhere' )}>Test 3</button> */}

      {/* //test profile services
      <button onClick={() => getProfiles()}>Test</button>
      <button onClick={() => createProfile('pdxjosephb@gmail.com')}>Test</button>
      <button onClick={async () => await getProfileEmail('test@email.com')}>Test 2</button>
      <button onClick={() => updateProfile({email: 'pdxjosephb@gmail.com', username: 'test', avatar: 'test.png'})}>Test 3</button>
      <button onClick={() => deleteProfile(3)}>Test 4</button> */}


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