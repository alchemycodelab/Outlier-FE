import React from 'react';
import LoginHooks from '../../hooks/UseLogin'
import LogoutHooks from '../../hooks/UseLogout'
import { findAuthEmail, signIn, signUp } from '../../services/auth';
import { addFavorite, deleteFavoriteById, getFavoriteId, getFavorites } from '../../services/favorites';
import { createProfile, deleteProfile, getProfileEmail, getProfiles, updateProfile } from '../../services/profile';
import { getStateByName, getStates } from '../../services/states';
// import { auth, createProfile, deleteProfile, getProfileEmail, getProfileId, getProfiles, updateProfile } from '../../services/profile';

export default function HomeComponent() {
const email = {
  email: '303josephb@gmail.com'
}

const test = {
  email: 'test@email.com'
}


  return (
    <>
      <h3>Instructions:</h3>
      <div>
        Here, you can interact with data and hopefully you gain knowledge and enhance your safety, ability to advocate for funding, and your access to services. 
        
        On the MAP you can select two states by clicking directly on them. You can also swirl it around and zoom in and out! Then you can pick the population that you want to know more about and two states that matter to you. Finally, pick whether you want to see the data displayed in a bar chart or a scatter plot. 

        Then you will be redirected to the data page, where you will see the statistics for the hate crimes in each state based on population. Hover over each data point to see the associated data value. You can interact with your chart similarly to the map, zoom in an out and turn it to get different views. 
      </div>
    </>
  );
}