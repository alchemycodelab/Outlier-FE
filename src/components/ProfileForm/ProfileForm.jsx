import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ids } from "webpack";
import { useProfile } from "../../context/Profile/ProfileCtx";


function ProfileForm() {
  const [create, setCreate] = useState(true);
  const navigate = useNavigate();
  const {profile, setProfile} = useProfile();


  useEffect(() => {
    if(profile.username) {
      setCreate(false);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onsubmit(formState);
      setProfile(formState);
    } catch(err) {
      setFormError(err.message);
    }
  };

  const handleToggle = () => {
    setActive(v => !v);
  };

  return (
    <form>
      <h1>{create ? 'Create' : 'Edit'}</h1>
        <h3>{profile.email}</h3>
    </form>
  )
}

export default ProfileForm;