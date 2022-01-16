import { createContext, useContext, useMemo, useState } from "react";


const ProfileCtx = createContext();

function ProfileProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState('')
  const [profile, setProfile] = useState({});

  // const value = useMemo(() => ({ profile, setProfile}), [profile]);
  return <ProfileCtx.Provider value={{ profile, setProfile, session, setSession }}>{children}</ProfileCtx.Provider>
};

const useProfile = () => {
  const ctx = useContext(ProfileCtx);

  if(ctx === undefined) {
    throw new Error('useProfile must be a child of Profile context');
  }

  return ctx;
};

export { ProfileCtx, ProfileProvider, useProfile};