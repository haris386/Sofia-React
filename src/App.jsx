import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Landing Page Import
import { Landingpage } from "./Components/Landing Page/Landingpage";

// OnBoarding Screens Imports
import { Login } from "./Components/Onboarding Components/Login/Login";
import { Dashboard } from "./Components/Onboarding Components/Dashboard/Dashboard";

function App() {
  return (
    <>
    
    {/* ROUTES FOR ALL THE SCREENS */}
      <Router>
        <Routes>

          {/* =============================== LANDING PAGE SCREENS ROUTES =============================== */}
          
          {/* Default route to Landing Page */}
          <Route path="/" element={<Landingpage />} />

          {/* =============================== ONBOARDING SCREENS ROUTES =============================== */}

          {/* Route for Login */}
          <Route path="/login" element={<Login />} />

          {/* Dashboard */}
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes> 
      </Router>
    </>
  );
}

export default App;
