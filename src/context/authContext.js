import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Start with loading = true

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token"); // Ensure token is retrieved here

        if (!token) {
          console.error("No token found, authorization denied.");
          return;
        }

        const response = await axios.get("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`, // Make sure the token is sent correctly
          },
        });

        setUser(response.data); // Assuming this line sets user data
        console.log("User data:", response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, token, setToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
