import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getProfiles } from "../../services/profile";


const ProfileCtx = createContext();

function ProfileProvider({ children }) {
  const [authorized, setAuthorized] = useState(false)
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfiles()
      .then((fetchedUser) => {
        setProfile(fetchedUser);
      })
      .catch((error) => {
        throw new Error(`Error: ${error}`);
      });
  }, []);
  
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