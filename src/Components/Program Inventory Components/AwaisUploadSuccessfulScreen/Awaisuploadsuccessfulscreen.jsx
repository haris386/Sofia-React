import React from "react";
import './Awaisuploadsuccessfulscreen.scss'
import dash from './img/dash.png'

export const Awaisuploadsuccessfulscreen = () => {
  return (
    <div class="container-fluid">
      <div class="row">
        <div class=" col-sm-12 col-md-4 col-lg-4 left">
          <div className="row d-flex flex-row justify-content-center p-3">
            <button type="button" className="btn   button1">
              1
            </button>
            <hr
              style={{
                height: "1px",
                width: "50px",
                border: " 1px solid #FFFFFF",
                marginTop: "20px",
              }}
            ></hr>
            <button type="button" className="button2 ">
              2
            </button>
            <hr
              className="style"
              style={{
                height: "1px",
                width: "50px",
                background: "white",
                border: " 1px solid #FFFFFF ",
                marginTop: "20px",
              }}
            ></hr>
            <button type="button" className="btn   button1">
              3
            </button>
          </div>

          <div class="card col-md-4 col-sm-6">
            <div class="card-body">
              <div class="circle-card">
                <div className="align">
                  <div class="circle1"></div>
                  <div class="circle-line1"></div>

                  <div class="circle"></div>
                  <div class="circle-line"></div>
                  <div class="circle"></div>
                  <div class="circle-line"></div>
                  <div class="circle"></div>
                  <div class="circle-line"></div>
                  <div class="circle"></div>
                </div>
              </div>
              <div className="text">
                <h5>Program Inventory</h5>
                <h5>Course Inventory</h5>
                <h5>inventort program</h5>
                <h5>inventort program</h5>
                <h5>inventort program</h5>
              </div>
            </div>
          </div>
        </div>
        <div class=" col-md-8 col-lg-8  ">
          <div className="row right">
            <div class="p-4 text-set">
              <h4>Uploading Successful</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Dui sagittis ornare
                adipiscing scelerisque. Netus blandit in varius mauris egestas
                ultricies posuere ultrices sollicitudin. Ornare.
              </p>
            </div>
            <img
              src= {dash}
              class="img-fluid setting"
              alt="..."
            ></img>
            <div className="  btn-set">
              <button className="btn  set1">Save and Next</button>
              <button className="btn  set ">Show Uploaded Files</button>
            </div>
            <p className="mt-2">Or</p>

            <a href="#">
              <i class="bi bi-arrow-left"></i>Go Back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
