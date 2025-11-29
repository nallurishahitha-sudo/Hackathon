import React, { useState, useEffect } from 'react';
import './style.css';
import Dashboard from './Components/Dashboard';
import Splash from './Components/Splash';
import Login from './Components/Login';


function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <Splash />}
      {!showSplash && !isLoggedIn && <Login onLogin={() => setIsLoggedIn(true)} />}
      {!showSplash && isLoggedIn && <Dashboard onLogout={() => setIsLoggedIn(false)} />}
    </>
  );
}

export default App;