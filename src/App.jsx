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
import { Piuploadsuccessful } from "./Components/Program Inventory Components/UploadSuccessful/Piuploadsuccessful";
import { Awaisuploadsuccessfulscreen } from "./Components/Program Inventory Components/AwaisUploadSuccessfulScreen/Awaisuploadsuccessfulscreen";
import { Awaisfillouttheformscreen } from "./Components/Program Inventory Components/AwaisFillOutTheFormScreen/Awaisfillouttheformscreen";

// Course Inventory Screens Imports
import { Courseninventory } from "./Components/Course Inventory Components/CourseInventory/Courseinventory";
import { Uploadtemplateback } from "./Components/Course Inventory Components/UploadTemplateBack/Uploadtemplateback";
import { Uploadingsuccessful } from "./Components/Course Inventory Components/UploadingSuccessful/Uploadingsuccessful";
import { CIAwaisfillouttheformscreen } from "./Components/Course Inventory Components/CIAwaisfillouttheformscreen/CIAwaisfillouttheformscreen";
import { CIAwaiscourseassigning } from "./Components/Course Inventory Components/CIAwaiscourseassigning/CIAwaiscourseassigning";


// Instructor Details Screen Imports
import { Instructordetails } from "./Components/Instructor Details Components/Instructordetails/Instructordetails";
import { Insuploadtemplateback } from './Components/Instructor Details Components/Insuploadtemplateback/Insuploadtemplateback'
import { Insuploadingsuccessful } from "./Components/Instructor Details Components/Insuploadingsuccessful/Insuploadingsuccessful";
import { AwaisInsfillouttheform } from "./Components/Instructor Details Components/AwaisInsfillouttheform/AwaisInsfillouttheform";

function App() {
  return (
    <>
    
    {/* ROUTES FOR ALL THE SCREENS */}
      <Router>
        <Routes>
          {/* =============================== ONBOARDING SCREENS ROUTES =============================== */}

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

          {/* =============================== PROGRAM INVENTORY SCREEN ROUTES =============================== */}

          {/* Route for Program Inventory Screen */}
          <Route path="/programinventory" element={<Programinventory />} />

          {/* Route for Template Back Screen */}
          <Route path="/templateback" element={<Templateback />} />

          {/* Route for Upload Successful Screen */}
          <Route path="/uploadsuccessful" element={<Piuploadsuccessful />} />

          {/* Route for Awais Upload Successful Screen */}
          <Route
            path="/awaisuploadsuccessful"
            element={<Awaisuploadsuccessfulscreen />}
          />

          {/* Route for Awais Program Inventory Fill Out The Form Screen */}
          <Route
            path="/awaisfillouttheform"
            element={<Awaisfillouttheformscreen />}
          />

          {/* =============================== COURSE INVENTORY SCREENS ROUTES =============================== */}

          {/* Route for Course Inventory Screen */}
          <Route path="/courseinventory" element={<Courseninventory />} />

          {/* Route for Upload Template Back Screen */}
          <Route path="/uploadtemplateback" element={<Uploadtemplateback />} />

          {/* Route for Uploading Successful Screen */}
          <Route
            path="/uploadingsuccessful"
            element={<Uploadingsuccessful />}
          />
          
          {/* Route for Awais Course Inventory Fill Out The Form Screen */}
          <Route
            path="/awaiscinvfillouttheform"
            element={<CIAwaisfillouttheformscreen />}
          />
          
          {/* Route for Awais Course Inventory Course Assigning Screen */}
            <Route
            path="/awaisciacourseassigning"
            element={<CIAwaiscourseassigning />}
          />

          {/* =============================== INSTRUCTOR DETAILS SCREENS ROUTES =============================== */}

          {/* Route for Instructor Details Screen */}
          <Route
            path="/instructordetails"
            element={<Instructordetails />}
          />
          
          {/* Route for Upload Template Back Screen */}
          <Route
            path="/insuploadtemplateback"
            element={<Insuploadtemplateback />}
          />
          
          {/* Route for Upload Succesful Screen */}
          <Route
            path="/insuploadingsuccessful"
            element={<Insuploadingsuccessful />}
          />
         
          {/* Route for Awais Fill out the form Screen */}
          <Route
            path="/awaisInsfillouttheform"
            element={<AwaisInsfillouttheform />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
