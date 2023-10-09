import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Paymentcards.css";
import leftsideimg from "./img/leftsideimg.png";

// BOOTSTRAP IMPORTS
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// ICONS
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXLine } from "react-icons/ri";

// REACT ROUTER
import { Link } from "react-router-dom";

export const Paymentcards = () => {
  return (
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
              <h5>Help us personalize your experience</h5>
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
          <h5 style={{ textAlign: "center" }}>Payment Details</h5>
          <Row>
            <Col md={1}></Col>
            <Col md={10}>
              <div className="payment-container">
                <p className="payment-info-para">
                  All payment details are secured under XYZ security and ZYX
                  payment gateway
                </p>
                <h6 className="email-heading">Card Holder Name*</h6>
                <input type="name" name="" id="" className="email-inputfield" />
                <h6 className="email-heading" style={{ marginTop: "5%" }}>
                  Debit/Credit Card Number*
                </h6>
                <input
                  type="numeric"
                  name=""
                  id=""
                  className="email-inputfield"
                />
                <Row style={{marginLeft: '15%'}}>
                  <Col md={6}>
                    <Row>
                      <h6 className="email-heading" style={{ marginTop: "5%" }}>
                        Valid Till
                      </h6>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="email-inputfield"
                        />
                      </Col>
                      <Col md={6}>
                        <input
                          type="number"
                          name=""
                          id=""
                          className="email-inputfield"
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col md={6}>
                    <Row>
                      {" "}
                      <h6 className="email-heading" style={{ marginTop: "5%" }}>
                        CVV
                      </h6>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <input
                          type="numeric"
                          name=""
                          id=""
                          className="email-inputfield"
                        />
                      </Col>
                      <Col md={6}></Col>
                    </Row>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={10}>
                    <p style={{marginLeft: '10%'}}>Save my card for future use</p>
                  </Col>
                  <Col md={2}>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                    />
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col md={3}></Col>
                  <Col md={6}>
                    <Button className="Next-btn">Next</Button>
                    &nbsp;
                    <Button className="Go-Back-btn">Go Back</Button>
                    &nbsp;
                  </Col>
                  <Col md={3}></Col>
                </Row>
              </div>
            </Col>
            <Col md={1}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
