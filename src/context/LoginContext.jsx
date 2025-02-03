import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState("signin");
  useEffect(() => {
    const saveUserData = JSON.parse(localStorage.getItem("auth")) || {};
    console.log("saveUserData: ", saveUserData);
    if (saveUserData?.email && saveUserData?.password) {
      setIsLoggedIn("/");
    }
  }, []);
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("auth");
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
