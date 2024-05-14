import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }: any) => {
  const accessToken = localStorage.getItem("accessToken")
  if (!accessToken) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
