import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import About from './views/About/About';
import Data from './views/Data/Data';
import Map from './views/Map/Map';
import Resources from './views/Resources/Resources';
import Profile from './views/Profile/Profile';
import Layout from './views/Layout/Layout';
import styles from './App.css';
import { ProfileProvider } from './context/Profile/ProfileCtx';
// import ProfileForm from './components/ProfileForm/ProfileForm';
// import ProfileSettings from './views/Profile/ProfileSettings';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { StateProvider } from './context/State/StateCtx';
import { DataProvider } from './context/Data/DataCtx';
import { ThemeProvider } from './context/Theme/Theme';
import { ScreenProvider } from './context/Device/Device';
import Favicon from 'react-favicon';


export default function App() {
  return (
    <>
      <Favicon url="photos/favicon.ico" />
      <ThemeProvider>
        <ScreenProvider>
          <ProfileProvider>
            <StateProvider>
              <DataProvider>
                <Router>
                  <Layout>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route
                        path="/profile"
                        element={
                          <PrivateRoute>
                            <Profile />
                          </PrivateRoute>
                        }
                      />
                      <Route path="/map" element={<Map />} />
                      <Route path="/data" element={<Data />} />
                      <Route path="/resources" element={<Resources />} />
                    </Routes>
                  </Layout>
                </Router>
              </DataProvider>
            </StateProvider>
          </ProfileProvider>
        </ScreenProvider>
      </ThemeProvider>
    </>
  );
}
