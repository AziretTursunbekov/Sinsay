import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState("signin");
  const [state, setState] = useState(false);
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
    setState(true);
  };
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout, state }}>
      {children}
    </AuthContext.Provider>
  );
};
