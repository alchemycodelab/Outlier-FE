import { useEffect, useState } from 'react';
import HomeComponent from '../../components/Home/Home';
import { useProfile } from '../../context/Profile/ProfileCtx';
import LoginHooks from '../../hooks/UseLogin';
import LogoutHooks from '../../hooks/UseLogout';
// import { supabase } from '../../services/createClient';
import { auth, createProfile, deleteProfile, getProfileEmail, getProfileId, getProfiles, updateProfile } from '../../services/profile';

export default function Home() {

  return (
    <>
      <h1> HOME Page </h1>
      <HomeComponent />

    </>
  );
}
