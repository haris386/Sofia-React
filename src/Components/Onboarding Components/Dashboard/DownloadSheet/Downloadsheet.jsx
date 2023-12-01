import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Downloadsheet.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Link } from "react-router-dom"; // Import Link from react-router-dom

// IMAGE IMPORT
import pic1 from "../img/pic1.png";

// ICONS
import { LuDownload } from "react-icons/lu";

export const Downloadsheet = () => {
  const googleDriveLink =
  "https://drive.google.com/uc?export=download&id=1xNYKvMt6Mpxu_ldPIHB74ZszZ5uk7zed";

  return (
    <>
      <div className="dlup-box">
        <Row>
          <Col md={4}></Col>
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
          <Link to={googleDriveLink} target="_blank" download>
              <Button className="download-sheet">
                <LuDownload /> Download Sheet
              </Button>
            </Link>
          </Col>
          <Col md={4}></Col>
        </Row>
      </div>
    </>
  );
};
