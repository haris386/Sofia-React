import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Login.css";
import leftsideimg from "./img/leftsideimg.png";
import rightsideimg from "./img/rightsideimg.png";

// BOOTSTRAP IMPORTS
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// ICONS
import { FcGoogle } from "react-icons/fc";

// REACT ROUTER
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Get the navigate function

  // Retrieve email from query parameters when the component mounts
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const queryEmail = searchParams.get("email");
    setEmail(queryEmail || "");
  }, [location.search]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLocalStorageAuthentication = () => {
    const email = new URLSearchParams(location.search).get("email");
    const userInfo = getUserInfoFromLocalStorage(email);
    const password = userInfo ? userInfo.password : ''; // Get the password from localStorage
  
    if (email && password === password) { // Compare to the entered password
      // Authentication successful
      console.log("SUCCESSFULLY AUTHENTICATED");
      // Redirect to the dashboard or another page
    } else {
      setError("Authentication failed. Please check your email and password.");
    }
  };

  // Function to retrieve user information from localStorage
  const getUserInfoFromLocalStorage = (email) => {
    const storedInfo = localStorage.getItem(email);
    return storedInfo ? JSON.parse(storedInfo) : null;
  };

  return (
    <>
      <Container fluid>
        <Row>
          {/* LEFT SIDE COLUMN */}
          <Col md={6} className="left-side-column">
            <Row>
              <Col md={2}></Col>
              <Col md={8}>
                <img src={leftsideimg} alt="" className="leftimg" />
              </Col>
              <Col md={2}></Col>
            </Row>

            <Row className="below-img-row">
              <Col md={3}></Col>
              <Col md={6}>
                <h5>Insert Clever Tagline Here</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus magni eaque perspiciatis tenetur, animi veniam quod
                  mollitia qui.
                </p>
              </Col>
            </Row>
            <Col md={3}></Col>
          </Col>
          {/* RIGHT SIDE COLUMN */}
          <Col md={6}>
            <br />
            <Row>
              <Col md={4}></Col>
              <Col md={4}>
                <img src={rightsideimg} alt="" className="rightimg" />
              </Col>
              <Col md={4}></Col>
            </Row>

            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <h5 className="hello-heading">Hello!</h5>
                <p className="right-side-para">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Delectus magni eaque perspiciatis tenetur, animi veniam quod
                  mollitia qui.
                </p>
              </Col>
            </Row>

            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <Row>
                  <h6 className="login-email-heading">Email</h6>
                  <input
                    type="email"
                    name=""
                    id="email"
                    className="login-email-inputfield"
                    onChange={handleEmailChange}
                    value={email}
                  />
                </Row>
                <br />
                <Row>
                  <h6 className="password-heading">Password</h6>
                  <input
                    type="password"
                    name=""
                    id="password"
                    className="login-password-inputfield"
                    onChange={handlePasswordChange}
                    value={password}
                  />
                </Row>
                <Row>
                  &nbsp;
                  <Col md={12}>
                    <span className="forPword">Forgot Password?</span>
                  </Col>
                </Row>
              </Col>
              <Col md={3}></Col>
            </Row>
            <br />
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <Button
                  className="Log-login-btn"
                  onClick={handleLocalStorageAuthentication}
                >
                  LOGIN
                </Button>
              </Col>
              <Col md={3}></Col>
              <span>OR</span>
              <Row>
                <Col md={3}></Col>
                <Col md={6}>
                  <Button className="Log-google-btn">
                    <FcGoogle /> Sign in using Google
                  </Button>
                </Col>
                <Col md={3}></Col>
                &nbsp;
              </Row>
              <span>
                Don't have an account? <Link to="/register">Sign Up</Link>
              </span>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
