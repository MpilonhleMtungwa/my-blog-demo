import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/authContext"; // Import the AuthContext (adjust the path if needed)

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check for token

  if (!isAuthenticated) {
    return <Navigate to="/login" />; // Redirect to login if not authenticated
  }

  return children; // Render children if authenticated
};

export default ProtectedRoute;
