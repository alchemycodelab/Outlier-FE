import { createContext, useContext, useMemo, useState } from "react";


const ProfileCtx = createContext();

function ProfileProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false)
  const [profile, setProfile] = useState({});

  // const value = useMemo(() => ({ profile, setProfile}), [profile]);
  return <ProfileCtx.Provider value={{ profile, setProfile, authorized, setAuthorized }}>{children}</ProfileCtx.Provider>
};

const useProfile = () => {
  const ctx = useContext(ProfileCtx);

  if(ctx === undefined) {
    throw new Error('useProfile must be a child of Profile context');
  }

  return ctx;
};

export { ProfileCtx, ProfileProvider, useProfile};