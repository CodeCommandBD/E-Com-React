import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { useData } from '../Context/AuthContext';

const UserProtect = () => {
  const { isLoggedIn } = useData();
  return isLoggedIn ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default UserProtect