"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { UserSession, tokenStorage } from "./tokens";

interface AuthContextType {
  user: UserSession | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  loginSession: (token: string, user: UserSession) => void;
  logoutSession: () => void;
  hasRole: (role: string) => boolean;
  hasPermission: (permission: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserSession | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const savedUser = tokenStorage.getUser();
    const savedToken = tokenStorage.getToken();
    if (savedUser && savedToken) {
      setUser(savedUser);
    }
    setIsLoading(false);
  }, []);

  const loginSession = (token: string, userData: UserSession) => {
    tokenStorage.setToken(token);
    tokenStorage.setUser(userData);
    setUser(userData);
  };

  const logoutSession = () => {
    tokenStorage.clearSession();
    setUser(null);
  };

  const hasRole = (role: string): boolean => {
    if (!user || !user.roles) return false;
    return user.roles.includes(role) || user.roles.includes("ADMIN");
  };

  const hasPermission = (permission: string): boolean => {
    if (!user || !user.permissions) return false;
    return user.permissions.includes(permission) || (user.roles && user.roles.includes("ADMIN"));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        loginSession,
        logoutSession,
        hasRole,
        hasPermission,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
