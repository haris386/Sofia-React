import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from 'react-bootstrap/Nav';
import { Sidebar } from "./Sidebar/Sidebar";
import { firestore, auth } from "../../Firebase/Firebase.jsx";
import { doc, getDoc } from "firebase/firestore";

import { Downloadsheet } from "./DownloadSheet/Downloadsheet";
import { Uploadsheet } from "./UploadSheet/Uploadsheet";

import { useNavigate } from "react-router-dom";




export const Dashboard = () => {

  const [userName, setUserName] = useState("");
  const [ppic, setPpic] = useState("");
  const [activeComponent, setActiveComponent] = useState("download");

  const navigate = useNavigate();


  const getUserNameFromFirestore = async () => {
    try {
      // Log the current user object
      console.log("Current User:", auth.currentUser);

      // Check if the user is authenticated before trying to get UID
      if (auth.currentUser) {
        // Get the user document from Firestore using the user's UID
        const userDocRef = doc(firestore, "users", auth.currentUser.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        console.log("User Document Snapshot:", userDocSnapshot);

        if (userDocSnapshot.exists()) {
          // If the document exists, set the userName state to the display name
          const userData = userDocSnapshot.data();
          setUserName(userData.name || "John Doe");
          setPpic(auth.currentUser.photoURL || "");
        }
      }
    } catch (error) {
      console.error("Error getting user name from Firestore:", error);
    }
  };

  useEffect(() => {
    getUserNameFromFirestore();
  }, []);

  console.log("Rendered with UserName:", userName);


  const handleLogout = async () => {
    try {
      await auth.signOut();
      // Redirect to the landing page ("/")
      navigate("/");
      console.log("Successfully logout")
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleCircleClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={3} className="left-side-col">
            <Sidebar />
          </Col>
          <Col md={9} className="right-side-col">
            {/* NAVBAR */}
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
              <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="ms-auto"> {/* Align Nav to the right */}
                    <NavDropdown title={userName} id="collasible-nav-dropdown" align="end" className="user-name">
                      <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                      <div className="subtitle">Admin</div>
                </Navbar.Collapse>
                {ppic && <img src={ppic} alt="Profile Pic" className="user-logo" />} {/* Check if ppic is not empty */}
              </Container>
            </Navbar>

            <hr />

            {/* Box */}
            {activeComponent === "download" && <Downloadsheet />}
            {activeComponent === "upload" && <Uploadsheet />}
            <Row style={{ marginTop: "-457px", cursor: "pointer", fontWeight: "500"}}>
            <Col md={4}></Col>
              <Col md={4} className="circles-box">
                <div
                  className={`circle ${activeComponent === "download" ? "active" : ""}`}
                  style={{ backgroundColor: activeComponent === "download" ? "#7240c9" : "#a687dd" }}
                  onClick={() => handleCircleClick("download")}
                >
                  <span>1</span>
                </div>
                <div
                  className={`circle ${activeComponent === "upload" ? "active" : ""}`}
                  style={{ backgroundColor: activeComponent === "upload" ? "#7240c9" : "#a687dd" }}
                  onClick={() => handleCircleClick("upload")}
                >
                  <span>2</span>
                </div>
                <div
                  className={`circle ${activeComponent === "other" ? "active" : ""}`}
                  style={{ backgroundColor: activeComponent === "other" ? "#7240c9" : "#a687dd" }}
                  onClick={() => handleCircleClick("other")}
                >
                  <span>3</span>
                </div>
              </Col>
              <Col md={4}></Col>
            </Row>
            {/* <Downloadsheet />
            <Uploadsheet /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};
