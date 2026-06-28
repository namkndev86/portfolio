"use client";

import React from "react";
import { useAuth } from "./auth-context";

interface AuthGuardProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
  requiredRole?: string;
  requiredPermission?: string;
}

export const RequireAuth: React.FC<AuthGuardProps> = ({
  children,
  fallback = null,
  requiredRole,
  requiredPermission,
}) => {
  const { isAuthenticated, isLoading, hasRole, hasPermission } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return fallback ? <>{fallback}</> : <div className="p-4 text-center text-red-500">Access Denied: Unauthenticated</div>;
  }

  if (requiredRole && !hasRole(requiredRole)) {
    return fallback ? <>{fallback}</> : <div className="p-4 text-center text-red-500">Access Denied: Insufficient Role</div>;
  }

  if (requiredPermission && !hasPermission(requiredPermission)) {
    return fallback ? <>{fallback}</> : <div className="p-4 text-center text-red-500">Access Denied: Missing Permission</div>;
  }

  return <>{children}</>;
};
