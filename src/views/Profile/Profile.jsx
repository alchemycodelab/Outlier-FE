import { Link, useNavigate } from "react-router-dom";
import { getProfiles } from "../../services/profile";
import {useProfile} from '../../context/Profile/ProfileCtx'
import { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import LoginHooks from "../../hooks/UseLogin";

function Profile() {
  const { profile, authorized } = useProfile();


  return (
    <>
      {authorized ?
      <section>
        <h3>Test words here</h3>
        <button onClick={() => console.log(profile)}>Test ProfileCtx</button>
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