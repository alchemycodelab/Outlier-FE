import { createContext, useContext, useMemo, useState } from "react";


const ProfileCtx = createContext();

function ProfileProvider({ children }) {
  // const activeProfile = useState({id: 1, email: 'test@email.com'})
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({});

  // const value = useMemo(() => ({ profile, setProfile}), [profile]);
  return <ProfileCtx.Provider value={{ profile, setProfile }}>{children}</ProfileCtx.Provider>
};

const useProfile = () => {
  const ctx = useContext(ProfileCtx);

  if(ctx === undefined) {
    throw new Error('useProfile must be a child of Profile context');
  }

  return ctx;
};

export { ProfileCtx, ProfileProvider, useProfile};