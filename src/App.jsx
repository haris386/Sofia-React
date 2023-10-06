import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
import { RegisterationAlmostDone } from "./Components/RegisterationAlmostDone/RegisterationAlmostDone";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Default route to Login */}
          <Route path="/" element={<Login />} />

          {/* Route for Login */}
          <Route path="/login" element={<Login />} />

          {/* Route for Register */}
          <Route path="/register" element={<Register />} />
          
          {/* Route for Registration Almost Done Screen */}
          <Route path="/registrationalmostdone" element={<RegisterationAlmostDone />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
