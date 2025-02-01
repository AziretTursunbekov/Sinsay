import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState("signin");
  useEffect(() => {
    const saveUserData = JSON.parse(localStorage.getItem("userData")) || {};
    if (saveUserData?.email && saveUserData?.password) {
      setIsLoggedIn("/");
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
