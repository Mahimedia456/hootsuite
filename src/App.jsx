// src/App.jsx
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { applyTheme, getInitialTheme } from "./lib/theme";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerifyEmail from "./pages/VerifyEmail";

import Dashboard from "./pages/Dashboard";
import Inbox from "./pages/Inbox";
import ConversationDetail from "./pages/ConversationDetail";
import Publisher from "./pages/Publisher";
import Analytics from "./pages/Analytics";
import Contacts from "./pages/Contacts";

// Settings + sub-pages
import Settings from "./pages/Settings"; // your Settings overview (3 cards) OR existing settings page
import InboxRules from "./pages/InboxRules";
import TeamRoles from "./pages/TeamRoles";
import ChannelConnections from "./pages/ChannelConnections";
import Calendar from "./pages/Calendar";

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <Routes>
      {/* Auth */}
      <Route path="/login" element={<Login theme={theme} setTheme={setTheme} />} />
      <Route
        path="/forgot-password"
        element={<ForgotPassword theme={theme} setTheme={setTheme} />}
      />
      <Route path="/verify-email" element={<VerifyEmail theme={theme} setTheme={setTheme} />} />
      <Route path="/reset-password" element={<ResetPassword theme={theme} setTheme={setTheme} />} />

      {/* Main */}
      <Route path="/dashboard" element={<Dashboard theme={theme} setTheme={setTheme} />} />
      <Route path="/inbox" element={<Inbox theme={theme} setTheme={setTheme} />} />
      <Route
        path="/conversations/:id"
        element={<ConversationDetail theme={theme} setTheme={setTheme} />}
      />
      <Route path="/publisher" element={<Publisher theme={theme} setTheme={setTheme} />} />
      <Route path="/analytics" element={<Analytics theme={theme} setTheme={setTheme} />} />
      <Route path="/contacts" element={<Contacts theme={theme} setTheme={setTheme} />} />
 <Route path="/calendar" element={<Calendar theme={theme} setTheme={setTheme} />} />
      {/* Settings */}
      <Route path="/settings" element={<Settings theme={theme} setTheme={setTheme} />} />
      <Route
        path="/settings/inbox-rules"
        element={<InboxRules theme={theme} setTheme={setTheme} />}
      />
      <Route
        path="/settings/team-roles"
        element={<TeamRoles theme={theme} setTheme={setTheme} />}
      />
      <Route
        path="/settings/channel-connections"
        element={<ChannelConnections theme={theme} setTheme={setTheme} />}
      />

      {/* Default */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
