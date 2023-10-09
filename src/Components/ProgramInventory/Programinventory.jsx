import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Programinventory.css";
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

export const Programinventory = () => {
  return (
    <Container fluid>
      <Row>
        {/* LEFT SIDE COLUMN */}
        <Col md={4} className="left-side-column">
          <Container fluid className="left-container"></Container>
        </Col>

        {/* RIGHT SIDE COLUMN */}
        <Col md={8}>
          <br />
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <h5 className="PI-heading">Program Inventory</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <br />
              <img src = {rightsideimg} alt="" className="rightsideimg"/>
              <br />
              <Row>
                <Col md={6}><button className="download-template">Download Template</button></Col>
                <Col md={6}><button className="fill-up-template">Fill Up Form</button></Col>
              </Row>
              <br />
              <Row>
                <p className="skip-link">Skip</p>
              </Row>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
