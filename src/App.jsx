import React, { useEffect, useState } from "react";
import Login from "./pages/Login.jsx";
import { applyTheme, getInitialTheme } from "./lib/theme.js";

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return <Login theme={theme} setTheme={setTheme} />;
}
