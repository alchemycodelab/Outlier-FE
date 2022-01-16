import { useEffect, useState } from "react";
// import { supabase } from '../../services/createClient';
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context/Profile/ProfileCtx";
import useForm from "../../hooks/UseForm";
import { updateProfile } from "../../services/profile";


function ProfileForm() {
  const {formState, handleFormChange} = useForm({ username: '', avatar:''})
  const [create, setCreate] = useState(true);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const {profile, setProfile, session} = useProfile();


  useEffect(() => {
    profile;
    if(profile.username) {
      setCreate(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(formState);
      setProfile(formState);
      updateProfile(profile.id, { username: formState.username, avatar: formState.avatar});
      navigate('/profile')
    } catch(err) {
      setFormError(err.message);
    }
  };

  const handleToggle = () => {
    setActive(v => !v);
  };

  // const handleLogOut = async () => {
  //   try {
  //       const { error } = await supabase.auth.signOut()
  //   } catch(err) {
  //     throw new Error(err)
  //   }
  // }

  return (
    <form>
      <h3>{profile.email}</h3>
      {/* <h1>{create ? 'Create' : 'Edit'}</h1> */}
        {/* <button onClick={() => handleLogOut()}>LogOut</button> */}
      <button onClick={() => console.log(profile)}>Test</button>
      <label htmlFor='username'>Username:</label>
      <input 
        id='username'
        name='username'
        type='username'
        onChange={(value) => handleFormChange(value)}
        value={formState.username}
        />
      <label htmlFor='avatar'>Avatar:</label>
      <input
        id='avatar'
        name='avatar' 
        type='avatar'
        value={formState.avatar}
        onChange={(value) => handleFormChange(value)}
      />
      {create ? 
        <button
          type='submit'
          aria-label='create-profile' 
          onClick={() => handleSubmit()}
          >
          Create
        </button> 
        : 
        <button 
          type='submit'
          aria-label='edit-profile' 
          onClick={() => handleSubmit()}
        >
          Edit
        </button>
      }
    </form>
  )
}

export default ProfileForm;