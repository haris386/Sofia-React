import React from "react";

// BOOTSTRAP IMPORTS
import "bootstrap/dist/css/bootstrap.css";
import "./Landingpage.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import herorightimg from "./img/hero-right-img.svg";
import giphy from "./img/giphy.gif";

// ICONS
import { BsEnvelope } from "react-icons/bs";
import { FaLinkedin, FaYoutube, FaFacebookSquare } from "react-icons/fa";

export const Landingpage = () => {
  return (
    <>
      {/* HEADER 1 */}
      {/* <Navbar collapseOnSelect expand="lg" className="main-navbar-1">
        <Container> */}
      {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
      {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
      {/* <Nav className="me-auto">
              <Nav.Link href="mailto: info@rrampup.com">
              <BsEnvelope /> info@rrampup.com
              </Nav.Link>
              <Nav.Link href="tel:+1 5589 55488 55">+1 5589 55488 55</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">
                <FaLinkedin />
              </Nav.Link>
              <Nav.Link href="#">
                <FaYoutube />
              </Nav.Link>
            </Nav> */}
      {/* </Navbar.Collapse> */}
      {/* </Container>
      </Navbar> */}

      {/* HEADER 2 */}
      <Navbar collapseOnSelect expand="lg" className="main-navbar-2">
        <Container>
          <Navbar.Brand href="#home" className="title">
            Sofia.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <ul className="ms-auto main-links-navbar">
              <a href="#features" className="pages-links">
                Getting Started
              </a>
              <a href="#pricing" className="pages-links">
                Pricing
              </a>
              <a href="#" className="button1">
                Login
              </a>
              <a href="#" className="button2">
                Sign Up Free
              </a>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* HERO SECTION */}
      <Container>
        <Row>
          <Col md={6}>
            <h2>
              <span>Sofia</span> - More Intelligence with scheduling
            </h2>
            <span className="hero-para">
              Fast Execution, Meaningful insight, Actionable Intelligence.
            </span>
            <Row style={{marginTop: "10%"}}>
              <Col md={6}>
                <a href="#" className="button3">
                  Try Sofia Free
                </a>
              </Col>
              <Col md={6}></Col>
            </Row>
          </Col>
          <Col md={6}>
            <img src={giphy} alt="" className="herorightsideimg" />
          </Col>
        </Row>
      </Container>

      {/* FOOTER SECTION */}
      {/* <Container className="footer">
        <Row>
          <Col md={4}>
            <h1>Sofia .</h1>
            <span>Fast Execution, Meaningful insight, Actionable Intelligence.</span>
          </Col>
          <Col md={4}>
            <h1>Register</h1>
            <ul>
            <li>Login</li>
            <li>SignUp</li>
            </ul>
          </Col>
          <Col md={4}>
            <h1>Contact Us</h1>
            <a href="tel:+1 5589 55488 55">+1 5589 55488 55</a>
            <a href="mailto: info@rrampup.com">info@rrampup.com</a>
            <span><FaLinkedin /><FaYoutube /><FaFacebookSquare /></span>
          </Col>
        </Row>
      </Container> */}
    </>
  );
};
