import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { applyTheme, getInitialTheme } from "./lib/theme";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import Dashboard from "./pages/Dashboard"; // ✅ ADD THIS
import Inbox from "./pages/Inbox";
import ConversationDetail from "./pages/ConversationDetail";



export default function App() {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <Routes>
      <Route path="/login" element={<Login theme={theme} setTheme={setTheme} />} />
      <Route path="/forgot-password" element={<ForgotPassword theme={theme} setTheme={setTheme} />} />
      <Route path="/verify-email" element={<VerifyEmail theme={theme} setTheme={setTheme} />} />
      <Route path="/reset-password" element={<ResetPassword theme={theme} setTheme={setTheme} />} />

      {/* ✅ REAL DASHBOARD PAGE */}
      <Route path="/dashboard" element={<Dashboard theme={theme} setTheme={setTheme} />} />
<Route path="/inbox" element={<Inbox theme={theme} setTheme={setTheme} />} />
<Route
  path="/conversations/:id"
  element={<ConversationDetail theme={theme} setTheme={setTheme} />}
/>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
