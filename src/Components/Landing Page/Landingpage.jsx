import React from "react";

// BOOTSTRAP IMPORTS
import "bootstrap/dist/css/bootstrap.css";
import "./Landingpage.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from "react-bootstrap/Button";

// import giphy from "./img/giphy-unscreen.gif";
import logo from "./img/rbglogo.png";

// ICONS
import { BsEnvelope } from "react-icons/bs";
import { FaLinkedin, FaYoutube, FaFacebookSquare } from "react-icons/fa";

import { Link } from "react-router-dom";

export const Landingpage = () => {
  return (
    <>
      {/* HEADER 2 */}
      <div className="main-landing-page-container">
        <Navbar collapseOnSelect expand="lg" className="main-navbar-2">
          <Container>
            <Navbar.Brand href="#home" className="logo">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <ul className="ms-auto main-links-navbar" style={{marginBottom: "0px"}}>
                <Link to="/login" className="button1">
                  Login
                </Link>
                <Link to="/register" className="button2">
                  Sign Up
                </Link>
              </ul>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* HERO SECTION */}
        <Container>
          <Row>
            <Col md={6}>
              <div className="orbit-container">
                <div className="glass-circle"></div>
                <div className="orbiting-square"></div>
              </div>
            </Col>

            <Col md={6}>
              {/* <h2>
              <span>Achieve with Sofia</span> Effortless Course Planning Success!
            </h2> */}
              <div className="heading-container">
                <h2 className="heading">
                  <span>Build Your Ideal Curriculum, </span>Seamlessly.
                </h2>
                <h2 className="heading">
                  <span>Auto-Assign Finds the Perfect</span> Instructor Fit for Every Course.
                </h2>
                <h2 className="heading">
                  <span>No More Course Chaos: Visualize &</span> Assign Instructors with a Single Click!
                </h2>
              </div>
            </Col>
          </Row>
        </Container>

        {/* FOOTER SECTION */}
        <Container className="footer">
          <Row>
            <Col md={4}>
              <span>Copyright Sofia. All rights reserved</span>
            </Col>
            <Col md={2}>
              <span></span>
            </Col>
            <Col md={2}>
              <span>About Sofia</span>
            </Col>
            <Col md={2}>
              <span>Terms of Use</span>
            </Col>
            <Col md={2}>
              <span>Privacy & Policy</span>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
