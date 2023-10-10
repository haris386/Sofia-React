import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./RegisterationAlmostDone.css";
import leftsideimg from "./img/leftsideimg.png";
import rightsideimg1 from "./img/rightsideimg1.png";
import rightsideimg2 from "./img/rightsideimg2.png";

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

export const RegisterationAlmostDone = () => {
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
                <h5>Almost Done</h5>
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
                <img src={rightsideimg1} alt="" className="rightimg" />
              </Col>
              <Col md={4}></Col>
            </Row>

            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <h5 className="hello-heading">
                  You've successfully registered
                </h5>
              </Col>
            </Row>

            <Row>
              <Col md={1}></Col>
              <Col md={10}>
                <img src={rightsideimg2} alt="" className="rightsideimg2" />
              </Col>
              <Col md={1}></Col>
            </Row>
            &nbsp;
            <Row>
              <Col md={3}></Col>
              <Col md={6}>
                <Button className="continue-btn">Continue</Button>
              </Col>
              <Col md={3}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
