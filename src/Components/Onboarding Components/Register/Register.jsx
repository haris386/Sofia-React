import React from "react";
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
import { RiTwitterXLine } from "react-icons/ri";

// REACT ROUTER
import { Link } from "react-router-dom";

export const Register = () => {
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
                  <h6 className="email-heading">Email ID</h6>
                  <input
                    type="email"
                    name=""
                    id=""
                    className="email-inputfield"
                  />
                </Row>
              </Col>
              <Col md={3}></Col>
            </Row>
            <br />
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <Button className="login-btn">Continue with Email</Button>
              </Col>
              <Col md={3}></Col>
              <span>OR</span>
              <Row>
                <Col md={3}></Col>
                <Col md={6}>
                  <Button className="google-btn">
                    <FcGoogle />
                    Continue with Google
                  </Button>
                  &nbsp;
                  <Button className="twitter-btn">
                    <RiTwitterXLine />
                    Continue with Twitter
                  </Button>
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
