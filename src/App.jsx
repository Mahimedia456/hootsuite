import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { applyTheme, getInitialTheme } from "./lib/theme";

// Auth Pages
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";

// Dashboard Page
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme());

  // Fake auth state for now
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <Routes>

      {/* ================= AUTH ROUTES ================= */}

      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login
              theme={theme}
              setTheme={setTheme}
              onLogin={() => setIsAuthenticated(true)}
            />
          )
        }
      />

      <Route
        path="/forgot-password"
        element={<ForgotPassword theme={theme} setTheme={setTheme} />}
      />

      <Route
        path="/verify-email"
        element={<VerifyEmail theme={theme} setTheme={setTheme} />}
      />

      <Route
        path="/reset-password"
        element={<ResetPassword theme={theme} setTheme={setTheme} />}
      />

      {/* ================= PROTECTED ROUTE ================= */}

      <Route
        path="/dashboard"
        element={
          isAuthenticated ? (
            <Dashboard theme={theme} setTheme={setTheme} />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* Default Redirect */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
