import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/authContext";

const PrivateRoute = ({ children }) => {
  const { token, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>; // Prevent redirect during the loading

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
