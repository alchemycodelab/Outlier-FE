import { useEffect, useState } from 'react';
import HomeComponent from '../../components/Home/Home';
import { useProfile } from '../../context/Profile/ProfileCtx';
import { useActiveStates } from '../../context/State/StateCtx';
import LoginHooks from '../../hooks/UseLogin';
import LogoutHooks from '../../hooks/UseLogout';
// import { supabase } from '../../services/createClient';
import { auth, createProfile, deleteProfile, getProfileEmail, getProfileId, getProfiles, updateProfile } from '../../services/profile';
import { getStates } from '../../services/states';

export default function Home() {
  const { stateNames, setStateNames, activeStates, setActiveStates } = useActiveStates();

  // useEffect(() => {
  //   const fetchStates = async () => {
  //     const res = await getStates();
  //     setStateNames(res);
  //   };
  //   fetchStates();
  //   // setLoading(false)
  // }, []);
  // console.log(stateNames)

  return (
    <>
      <h1> HOME Page </h1>
      <button onClick={() => console.log(stateNames[0].abrv)}>Test</button>
      <HomeComponent />

    </>
  );
}