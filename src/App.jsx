import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// OnBoarding Screens Imports
import { Login } from "./Components/Onboarding Components/Login/Login";
import { Register } from "./Components/Onboarding Components/Register/Register";
import { Awaisregisterationscreen } from "./Components/Onboarding Components/AwaisRegisterationScreen/Awaisregisterationscreen";
import { Awaisprofilescreen } from "./Components/Onboarding Components/AwaisProfileScreen/Awaisprofilescreen";
import { Awaisplanscreen } from "./Components/Onboarding Components/AwaisPlanScreen/Awaisplanscreen";
import { RegisterationAlmostDone } from "./Components/Onboarding Components/RegisterationAlmostDone/RegisterationAlmostDone";
import { Paymentcards } from "./Components/Onboarding Components/PaymentCards/Paymentcards";

// Program Inventory Screens Imports
import { Programinventory } from "./Components/Program Inventory Components/ProgramInventory/Programinventory";
import { Templateback } from "./Components/Program Inventory Components/TemplateBack/Templateback";
import { Uploadsuccessful } from "./Components/Program Inventory Components/UploadSuccessful/Uploadsuccessful";
import { Awaisuploadsuccessfulscreen } from "./Components/Program Inventory Components/AwaisUploadSuccessfulScreen/Awaisuploadsuccessfulscreen";
import { Awaisfillouttheformscreen } from "./Components/Program Inventory Components/AwaisFillOutTheFormScreen/Awaisfillouttheformscreen";

// Course Inventory Screens Imports
import { Courseninventory } from "./Components/Course Inventory Components/CourseInventory/Courseinventory";
import { Uploadtemplateback } from "./Components/Course Inventory Components/UploadTemplateBack/Uploadtemplateback";
import { Uploadingsuccessful } from "./Components/Course Inventory Components/UploadingSuccessful/Uploadingsuccessful";

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

          {/* Route for Awais Registeration Screen */}
          <Route
            path="/awaisregistrationscreen"
            element={<Awaisregisterationscreen />}
          />

          {/* Route for Awais Profile Screen */}
          <Route path="/awaisprofilescreen" element={<Awaisprofilescreen />} />

          {/* Route for Awais Plan Screen */}
          <Route path="/awaisplanscreen" element={<Awaisplanscreen />} />

          {/* Route for Registration Almost Done Screen */}
          <Route
            path="/registrationalmostdone"
            element={<RegisterationAlmostDone />}
          />

          {/* Route for Payment Cards Screen */}
          <Route path="/paymentcards" element={<Paymentcards />} />

          {/* Route for Program Inventory Screen */}
          <Route path="/programinventory" element={<Programinventory />} />

          {/* Route for Template Back Screen */}
          <Route path="/templateback" element={<Templateback />} />

          {/* Route for Upload Successful Screen */}
          <Route path="/uploadsuccessful" element={<Uploadsuccessful />} />

          {/* Route for Awais Upload Successful Screen */}
          <Route
            path="/awaisuploadsuccessful"
            element={<Awaisuploadsuccessfulscreen />}
          />

          {/* Route for Awais Fill Out The Form Screen */}
          <Route
            path="/awaisfillouttheform"
            element={<Awaisfillouttheformscreen />}
          />

          {/* Route for Course Inventory Screen */}
          <Route path="/courseinventory" element={<Courseninventory />} />

          {/* Route for Upload Template Back Screen */}
          <Route path="/uploadtemplateback" element={<Uploadtemplateback />} />

          {/* Route for Uploading Successful Screen */}
          <Route
            path="/uploadingsuccessful"
            element={<Uploadingsuccessful />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
