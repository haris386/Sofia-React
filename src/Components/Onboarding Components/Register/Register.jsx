import React, { useState, useEffect } from "react";

// FIREBASE IMPORTS
import { auth, googleAuthProvider, firestore } from "../../Firebase/Firebase";
import { signInWithPopup, getAdditionalUserInfo } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

import "./Register.css";

// BOOTSTRAP IMPORTS
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import logo from "../../Landing Page/img/logo.png";

// ICONS
import { RiGoogleLine } from "react-icons/ri";
import { PiTwitterLogo } from "react-icons/pi";

// REACT ROUTER
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Register = () => {
  return (
    <>
      {/* HEADER 2 */}
      <div className="main-landing-page-container">
        <Navbar collapseOnSelect expand="lg" className="main-navbar-2">
          <Container>
            <Navbar.Brand href="#home" className="logo">
              <img src={logo} alt="Logo" />
            </Navbar.Brand>
          </Container>
        </Navbar>

        {/* HERO SECTION */}
        <Container>
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <div className="box">
                <Row>
                  <Col md={3}></Col>
                  <Col md={6} className="login-title">
                    <span>Login to Sofia</span>
                  </Col>
                  <Col md={3}></Col>
                </Row>

                <Row>
                  <Col md={12} className="sign-in-using-gt">
                    {/* <span onClick={handleSignInWithGoogle}> */}
                    <span>
                      <RiGoogleLine size={20} /> Sign in Using Google
                    </span>
                  </Col>
                </Row>

                <Row>
                  <Col md={2}></Col>
                  <Col md={8} className="OR">
                    <span>OR</span>
                  </Col>
                  <Col md={2}></Col>
                </Row>

                <Row>
                  <input
                    type="text"
                    placeholder="Email"
                    className="input-fields"
                    // onChange={handleEmailChange}
                    // value={email}
                  />
                  {/* <FaRegEnvelope className="email-icon" /> */}
                </Row>

                <Row>
                  <Col md={6}>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="input-fields"
                      // onChange={handleEmailChange}
                      // value={email}
                    />
                  </Col>

                  <Col md={6}>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="input-fields"
                      // onChange={handleEmailChange}
                      // value={email}
                    />
                  </Col>

                  {/* <FaRegEnvelope className="email-icon" /> */}
                </Row>

                <Row>
                  <input
                    type="text"
                    placeholder="Password"
                    className="input-fields"
                    // onChange={handlePasswordChange}
                    // value={password}
                  />
                  {/* <IoLockClosedOutline className="password-icon" /> */}
                </Row>

                <Row>
                  <input
                    type="text"
                    placeholder="Confirm Password"
                    className="input-fields"
                    // onChange={handlePasswordChange}
                    // value={password}
                  />
                  {/* <IoLockClosedOutline className="password-icon" /> */}
                </Row>

                <Row>
                  <Col md={4}>
                    <input
                      type="text"
                      placeholder="+102"
                      className="input-fields"
                      // onChange={handlePasswordChange}
                      // value={password}
                    />
                  </Col>
                  <Col md={8}>
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="input-fields"
                      // onChange={handlePasswordChange}
                      // value={password}
                    />
                  </Col>
                </Row>

                <Row>
                  <Button className="btn btn-success login-btn">Register</Button>
                </Row>

                <Row>
                  <Col md={2}></Col>
                  <Col md={8} className="dhaa">
                    <span>
                      Already have an account{" "}
                      <Link to="/login" className="dhar">
                        Login{" "}
                      </Link>
                    </span>
                  </Col>
                  <Col md={2}></Col>
                </Row>
              </div>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>

        {/* FOOTER SECTION */}
        <Container className="login-footer">
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
