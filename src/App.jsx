import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Data from './views/Data/Data';
import Map from './views/Map/Map';
import Instructions from './views/Instructions/Instructions';
import Resources from './views/Resources/Resources';
import Profile from './views/Profile/Profile';
import Layout from './views/Layout/Layout';
import styles from './App.css';
import { ProfileProvider } from './context/Profile/ProfileCtx';
// import ProfileForm from './components/ProfileForm/ProfileForm';
import ProfileSettings from './views/Profile/ProfileSettings';

export default function App() {
  return (
    <>
      <ProfileProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<ProfileSettings />} />
              <Route path="/about" element={<About />} />
              <Route path="/data" element={<Data />} />
              <Route path="/map" element={<Map />} />
              <Route path="/instructions" element={<Instructions />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Layout>
        </Router>
      </ProfileProvider>
    </>
  );
}