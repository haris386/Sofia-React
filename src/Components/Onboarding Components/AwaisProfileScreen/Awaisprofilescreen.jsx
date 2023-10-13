import React from "react";
import './Awaisprofilescreen.scss'
import abc from './img/abc.png';
import Ellipse7 from './img/Ellipse7.png';
var loadFile = function (event) {
  var image = document.getElementById("output");
  image.src = URL.createObjectURL(event.target.files[0]);
};

export const Awaisprofilescreen = () => {
  return (
    <div className="container-fluid main ">
      <div className="row ">
        <div className="   col-md-10 col-lg-6 left ">
          <img src= {abc} class="img-fluid m-4" alt="..." />
          <div className=" row   para">
            <h5>Help us personalize your experience</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              turpis ac consequat at varius turpis mattis.
            </p>
          </div>
        </div>
        {/* <div className=' dirs'> 
            <hr/>
            </div> */}
        <div className=" col-md-8 col-lg-6 right">
          <div className="row d-flex flex-row justify-content-end p-3">
            <button type="button" className="btn  btn-primary button1">
              1
            </button>
            <hr
              style={{
                height: "1px",
                width: "50px",
                border: " 1px solid #346F68",
                color: "#346F68",
                marginTop: "20px",
              }}
            ></hr>
            <button type="button" className="button2 ">
              2
            </button>
          </div>
          <div className="row profile-photo ">
            <h5>Profile Photo</h5>
            <p>Choose a photo for others to recognize you </p>
          </div>

          <div class="profile-pic d-flex justify-content-start">
            <label class="-label" for="file">
              <span class="glyphicon glyphicon-camera"></span>
              <span>
                <i class="bi bi-pencil-fill h-5 w-5"></i>
              </span>
            </label>
            <input id="file" type="file" onChange={(e) => loadFile(e)} />
            <img
              src= {Ellipse7}
              id="output"
              width="200"
              alt="Selected"
            />
          </div>
          <div className="row youT ">
            <h4>You are....</h4>
          </div>
          <div className=" buttonsR d-flex flex-row ">
            <button type="button" class="btn    m-2 b1">
              Instructor
            </button>
            <button type="button" class="btn   m-2 b2">
              Admin
            </button>
            <button type="button" class="btn   m-2 b3">
              Others
            </button>
          </div>
          <div className="row next">
            <button type="button" class="btn    m-5 b2">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
