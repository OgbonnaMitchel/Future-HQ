import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";

const ProtectedRoute = () => {
  const { isAuthenticated, initializing } = useAuth();

  if (initializing) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Checking authentication...
      </div>
    );
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
