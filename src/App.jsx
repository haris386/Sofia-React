import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Login } from "./Components/Onboarding Components/Login/Login";
import { Register } from "./Components/Onboarding Components/Register/Register";
import { RegisterationAlmostDone } from "./Components/Onboarding Components/RegisterationAlmostDone/RegisterationAlmostDone";
import { Paymentcards } from './Components/Onboarding Components/PaymentCards/Paymentcards'
import { Programinventory } from "./Components/Program Inventory Components/ProgramInventory/Programinventory";
import { Templateback } from "./Components/Program Inventory Components/TemplateBack/Templateback";
import { Uploadsuccessful } from "./Components/Program Inventory Components/UploadSuccessful/Uploadsuccessful";

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

          {/* Route for Payment Cards Screen */}
          <Route path="/paymentcards" element={<Paymentcards />} />
         
          {/* Route for Program Inventory Screen */}
          <Route path="/programinventory" element={<Programinventory />} />
          
          {/* Route for Template Back Screen */}
          <Route path="/templateback" element={<Templateback />} />
          
          {/* Route for Upload Successful Screen */}
          <Route path="/uploadsuccessful" element={<Uploadsuccessful />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
