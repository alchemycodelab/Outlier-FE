import { useNavigate } from "react-router-dom";
import { getProfile } from "../../services/profile";

function Profile() {
  const navigate = useNavigate();
  const { profile, setProfile } = useUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchProfile = async () => {
        const res = await getProfile();
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

  console.log(profile);

  return (
    loading ? <h1>Loading...</h1> :
    <>
      <section>
        <h1>{profile.email}</h1>
        <Link to='/edit'>Edit</Link>
      </section>
    </>
  );
};

export default Profile;