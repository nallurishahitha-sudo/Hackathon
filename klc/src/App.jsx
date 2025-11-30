import React, { useState, useEffect } from "react";
import "./style.css";

import Dashboard from "./Components/Dashboard";
import Splash from "./Components/Splash";
import Login from "./Components/Login";
import Admin from "./Components/Admin";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // role → null / "user" / "admin"
  const [role, setRole] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // LOGIN HANDLER (receives object from Login.jsx)
  const handleLogin = (data) => {
    console.log("Login Data:", data);
    setRole(data.role); // user or admin
  };

  return (
    <>
      {/* SPLASH SCREEN */}
      {showSplash && <Splash />}

      {/* LOGIN PAGE */}
      {!showSplash && role === null && (
        <Login onLogin={handleLogin} />
      )}

      {/* USER DASHBOARD */}
      {role === "user" && (
        <Dashboard onLogout={() => setRole(null)} />
      )}

      {/* ADMIN DASHBOARD */}
      {role === "admin" && (
        <Admin onLogout={() => setRole(null)} />
      )}
    </>
  );
}

export default App;
