import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style.css'   
import Login from './Components/Login.jsx'
import Dashboard from './Components/Dashboard.jsx'
import Departments from './Components/Departments.jsx'
import Roadmap from './Components/Roadmap.jsx'
import Domains from './Components/Domains.jsx'
import Splash from './Components/Splash.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)