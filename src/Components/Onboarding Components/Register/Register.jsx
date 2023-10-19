import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Register.css";
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
import { Link, useNavigate  } from "react-router-dom"; // Import useHistory from react-router-dom

export const Register = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize navigate


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRegistration = () => {
    if (!email) {
      setError("Please fill in both email and password fields.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      // Save the email in local storage
      localStorage.setItem("email", email);
  
      // Navigate to the next page, "/awaisregistrationscreen"
      navigate("/awaisregistrationscreen");
    }
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
                <h5 className="hello-heading">Register</h5>
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
                  <h6 className="register-email-heading">Email ID</h6>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="register-email-inputfield"
                    onChange={handleEmailChange}
                    value={email}
                  />
                </Row>
              </Col>
              <Col md={3}></Col>
            </Row>
            <br />
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                {error && <p className="error-message">{error}</p>}
                <Button className="google-btn">
                    <FcGoogle />
                    Continue with Google
                  </Button>
              </Col>
              <Col md={3}></Col>
              <span>OR</span>
              <Row>
                <Col md={3}></Col>
                <Col md={6}>
                <Button className="Reg-login-btn" onClick={handleRegistration}>Next</Button>
                  &nbsp;
                </Col>
                <Col md={3}></Col>
              </Row>
              <span>
                Already have an account? <Link to="/login">Sign in</Link>
              </span>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
