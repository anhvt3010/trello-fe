import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem('token');

  if (!token) {
    // Chuyển hướng người dùng về trang login nếu không có token
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};