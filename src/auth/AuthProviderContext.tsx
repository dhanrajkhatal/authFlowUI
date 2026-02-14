import { useState, type ReactNode } from "react";
import tokenManager from "./tokenManager";
import { AuthContext } from "./AuthContext";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (token: string) => {
    tokenManager.setAccessToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    tokenManager.clearAccessToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
