import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Downloadsheet.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

// IMAGE IMPORT
import pic1 from "../img/pic1.png";

// ICONS
import { LuDownload } from "react-icons/lu";

export const Downloadsheet = () => {
  return (
    <>
      <div className="dlup-box">
        <Row>
          <Col md={4}></Col>
          {/* <Col md={4} className="circles-box">
            <div className="circle">
              <span>1</span>
            </div>
            <div className="circle">
              <span>2</span>
            </div>
            <div className="circle">
              <span>3</span>
            </div>
          </Col>
          <Col md={4}></Col> */}
        </Row>

        <Row style={{ marginTop: "10%" }}>
          <Col md={4}></Col>
          <Col md={4}>
            <img src={pic1} alt="" className="download-pic" />
            <Row>
              <span className="img-text">
                Complete Sample Sheet per its Instructions
              </span>
            </Row>
          </Col>
          <Col md={4}></Col>
        </Row>

        <Row style={{ marginTop: "10%" }}>
          <Col md={4}></Col>
          <Col md={4}>
            <Button className="download-sheet">
              <LuDownload /> Download Sheet
            </Button>
          </Col>
          <Col md={4}></Col>
        </Row>
      </div>
    </>
  );
};
