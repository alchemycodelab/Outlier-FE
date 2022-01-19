import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useProfile } from '../../context/Profile/ProfileCtx';

export default function PrivateRoute({ children, ...rest}) {
  const auth = useProfile();

  return auth ? children : <Navigate to='/home' />;
}
