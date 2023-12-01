import React, { useState, useEffect } from "react";

// FIREBASE IMPORTS
import { auth, googleAuthProvider, firestore } from "../../Firebase/firebase";
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
  // const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Get the navigate function

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // GOOGLE AUTHENTICATION
  const handleSignInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);

      // Check if the user already exists in Firestore
      const userDocRef = doc(firestore, "users", result.user.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (!userDocSnapshot.exists()) {
        // Fetch additional user information, including the profile picture
        const additionalUserInfo = await getAdditionalUserInfo(result);

        // If the user doesn't exist, add them to the "users" collection
        await setDoc(userDocRef, {
          email: result.user.email,
          name: result.user.displayName,
          profilepic: additionalUserInfo.profile.picture || "",
          // Add other user information as needed
        });
      }

      localStorage.setItem("token", result.user.accessToken);
      localStorage.setItem("user", JSON.stringify(result.user));
      console.log("SUCCESSFULLY AUTHENTICATED WITH GOOGLE");

      // Log the user information object to the console
      console.log("User Information:", result.user);

      // Redirect to the dashboard or another page
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

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
                  <Col md={6} className="sign-in-using-gt">
                    <span onClick={handleSignInWithGoogle}>
                      <RiGoogleLine size={20} /> Sign in Using Google
                    </span>
                  </Col>
                  <Col md={6} className="sign-in-using-gt">
                    <span>
                      <PiTwitterLogo size={20} /> Sign in Using Twitter
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
                    onChange={handleEmailChange}
                    value={email}
                  />
                  {/* <FaRegEnvelope className="email-icon" /> */}
                </Row>

                <Row>
                  <input
                    type="text"
                    placeholder="Password"
                    className="input-fields"
                    onChange={handlePasswordChange}
                    value={password}
                  />
                  {/* <IoLockClosedOutline className="password-icon" /> */}
                </Row>

                <Row>
                  <Col md={4} className="forgot-password">
                    <span>Forgot Password?</span>
                  </Col>
                  <Col md={4}></Col>
                  <Col md={4}></Col>
                </Row>

                <Row>
                  <Button className="btn btn-success login-btn">Login</Button>
                </Row>

                <Row>
                  <Col md={2}></Col>
                  <Col md={8} className="dhaa">
                    <span>
                      Don't have an account{" "}
                      <Link to="/register" className="dhar">
                        Register{" "}
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
