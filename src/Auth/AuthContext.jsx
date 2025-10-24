import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [loading, setLoading] = useState(false);

  // 🔹 Login function
  const login = async (credentials) => {
    setLoading(true);
    try {
      const res = await axios.post(
        "https://titusukpono.pythonanywhere.com/user/login",
        credentials
      );
      localStorage.setItem("user", JSON.stringify(res.data));
      setUser(res.data);
      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.detail || "Login failed!",
      };
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Register function
  const register = async (formData) => {
    setLoading(true);
    try {
      await axios.post(
        "https://titusukpono.pythonanywhere.com/user/register",
        formData
      );
      return { success: true };
    } catch (err) {
      return {
        success: false,
        message: err.response?.data?.error || "Registration failed!",
      };
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Logout function
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // 🔹 Check for persisted login on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, register, logout, loading, isAuthenticated: !!user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy access
export const useAuth = () => useContext(AuthContext);
