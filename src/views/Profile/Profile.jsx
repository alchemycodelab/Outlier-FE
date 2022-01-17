import { Link, useNavigate } from "react-router-dom";
import { getProfiles } from "../../services/profile";
import {useProfile} from '../../context/Profile/ProfileCtx'
import { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import LoginHooks from "../../hooks/UseLogin";

function Profile() {
  const navigate = useNavigate();
  const { profile, setProfile, authorized, setAuthorized } = useProfile();
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   try {
  //     const fetchProfile = async () => {
  //       const res = await getProfiles();
  //       setProfile(res);
  //     }
  //     fetchProfile();
  //     if(!profile.username) {
  //       navigate('/create', {replace: true});
  //     } else 
  //       setLoading(false);
  //   } catch (err) {
  //       throw new Error('failed to fetch')
  //   }
  // }, []);


  return (
    <>
      {authorized ?
      <section>
        {/* <h1>{profile ? profile.email : null}</h1> */}
        {/* <button onClick={() => handleLogOut()}>LogOut</button> */}
      </section>
      :      
      <>
        <h1>Please Log in</h1>
        <LoginHooks />
        <Link to='/create'>Not a member?</Link>
      </>
      }
    </>
  );
};

export default Profile;