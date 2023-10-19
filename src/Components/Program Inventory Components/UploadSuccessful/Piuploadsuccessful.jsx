import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Piuploadsuccessful.css";
import rightsideimg from "./img/rightsideimg.png";

// BOOTSTRAP IMPORTS
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Piuploadsuccessful = () => {
  return (
    <Container fluid>
      <Row>
        {/* LEFT SIDE COLUMN */}
        <Col md={4} className="PI-left-side-column">
          <div class="row col-12 x-row cl123">
            <div class="tree-x-axis c1">1</div>
            <span class="tree-x-axis-line"></span>
            <div class="tree-x-axis c2">2</div>
            <span class="tree-x-axis-line"></span>
            <div class="tree-x-axis c3">3</div>
          </div>
          <Container>
            <div class="row">
              <div class="card">
                <div class="card-body">
                  <div class="row tree-row">
                    <div class="experience__container bd-grid">
                      <div class="linecontent">
                        <div class="linetime">
                          <span class="Hrounder r1"></span>
                          <span class="Hline l1"></span>
                        </div>
                        <div class="linedata bd-grid">
                          <h3 class="linetitle t1">Program Inventory</h3>
                        </div>
                      </div>
                      <div class="linecontent">
                        <div class="linetime">
                          <span class="Hrounder r2"></span>
                          <span class="Hline l2"></span>
                        </div>
                        <div class="linedata bd-grid">
                          <h3 class="linetitle">Course Inventory</h3>
                        </div>
                      </div>
                      <div class="linecontent">
                        <div class="linetime">
                          <span class="Hrounder r3"></span>
                          <span class="Hline l3"></span>
                        </div>
                        <div class="linedata bd-grid">
                          <h3 class="linetitle">Instructor Inventory</h3>
                        </div>
                      </div>

                      <div class="linecontent">
                        <div class="linetime">
                          <span class="Hrounder r3"></span>
                          <span class="Hline l3"></span>
                        </div>
                        <div class="linedata bd-grid">
                          <h3 class="linetitle">Instructor Details</h3>
                        </div>
                      </div>
                      <div class="linecontent">
                        <div class="linetime">
                          <span class="Hrounder r3"></span>
                          <span class="Hline l3"></span>
                        </div>
                        <div class="linedata bd-grid">
                          <h3 class="linetitle">Instructor Preference</h3>
                        </div>
                      </div>
                      <div class="linecontent">
                        <div class="linetime">
                          <span class="Hrounder r3"></span>
                          <span class="Hline l3"></span>
                        </div>
                        <div class="linedata bd-grid">
                          <h3 class="linetitle">Instructor Availability</h3>
                        </div>
                      </div>
                      <div class="linecontent">
                        <div class="linetime">
                          <span class="Hrounder r3"></span>
                        </div>
                        <div class="linedata bd-grid">
                          <h3 class="linetitle">Classroom Timeable</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <button className="show-uploaded-files">Show Uploaded Files</button>
        </Col>

        {/* RIGHT SIDE COLUMN */}
        <Col md={8}>
          <br />
          <Row>
            <Col md={3}></Col>
            <Col md={6}>
              <h5 className="PI-heading">Uploading Successful</h5>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <br />
              <img src={rightsideimg} alt="" className="rightsideimg" />
              <br />
              <br />
              <br />
              <Row>
                <Col md={3}></Col>
                <Col md={6}>
                  <button className="download-template">Save and Next</button>
                </Col>
                <Col md={3}></Col>
                <br />
                <p className="skip-link">OR</p>
              </Row>
              <Row>
                <p className="skip-link">Go Back</p>
              </Row>
            </Col>
            <Col md={3}></Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};