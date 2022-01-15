import { useNavigate } from "react-router-dom";
import { getProfiles } from "../../services/profile";
import {useProfile} from '../../context/Profile/ProfileCtx'
import { useEffect, useState } from "react";

function Profile() {
  const navigate = useNavigate();
  const { profile, setProfile } = useProfile();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchProfile = async () => {
        const res = await getProfiles();
        setProfile(res);
      }
      fetchProfile();
      if(!profile.username) {
        navigate('/create', {replace: true});
      } else 
        setLoading(false);
    } catch (err) {
        throw new Error('failed to fetch')
    }
  }, []);

  // const handleLogOut = async () => {
  //   try {
  //     // const signOut = () => {
  //       const { error } = await supabase.auth.signOut()
  //     // }
  //   } catch(err) {
  //     throw new Error(err)
  //   }
  // }

  // console.log(profile);

  return (
    loading ? <h1>Loading...</h1> :
    <>
      <section>
        <h1>{profile.email}</h1>
        <Link to='/edit'>Edit</Link>
        <button onClick={() => handleLogOut()}>LogOut</button>
      </section>
    </>
  );
};

export default Profile;