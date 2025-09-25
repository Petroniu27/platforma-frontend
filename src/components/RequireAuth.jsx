import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RequireAuth({ children, allowedRoles }) {
  const { user, token } = useAuth();
  const loc = useLocation();

  // dacă nu e logat deloc
  if (!user || !token) {
    return <Navigate to="/login" state={{ from: loc }} replace />;
  }

  // dacă e logat, dar există restricții de rol și rolul nu e acceptat
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/dashboard" replace />;
  }

  // dacă totul e OK
  return children;
}
