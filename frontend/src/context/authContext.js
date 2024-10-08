import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Start with loading = true

  // Function to fetch user data based on token
  const fetchUserData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        "https://my-blog-9i38.onrender.com/api/auth/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(response.data); // Set the fetched user data
      setLoading(false); // Finished loading
    } catch (err) {
      console.error("Error fetching user data:", err);
      // If the token is invalid or user is not found, clear the token
      setToken(null);
      localStorage.removeItem("token");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchUserData(); // Fetch user data when token exists
    } else {
      setLoading(false); // No token, set loading to false
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, token, setToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
