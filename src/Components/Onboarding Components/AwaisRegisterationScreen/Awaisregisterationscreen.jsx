import React from "react";
import './Awaisregisterationscreen.scss'
import lpic from './img/lpic.png';
import rpic from './img/rpic.png';
import center from './img/center.png';
import rtop from './img/rtop.png';

export const Awaisregisterationscreen = () => {
  return (
    <div className="main ">
      <div className="row">
        <div className="  col-md-12 col-lg-6 left  ">
          <div className="rimges d-flex flex-row justify-content-start ">
            <img src= {lpic} class="img-fluid  img1" alt="" />
            <img src= {center} class="img-fluid  img2" alt=" " />
            <img src= {rpic} class="img-fluid  img3" alt=" " />
          </div>
          <div className="btext ">
            <h5>Insert Clever Tagline Here</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Convallis
              turpis ac consequat at varius turpis mattis.
            </p>
          </div>
        </div>

        <div className="   col-md-12 col-lg-6  right ">
          <img src= {rtop} class="img-fluid  img4" alt=" " />
          <div className="Rtext">
            <h4>Register</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
              ullamcorper vitae cursus erat.
            </p>
          </div>
          <form>
            <div className="names">
              <div>
                <label for="fname">First Name</label> <br />
                <input type="text" id="fname" name="fname"></input>
              </div>
              <div>
                <label for="lname">Last Name</label> <br />
                <input type="text" id="lname" name="lname"></input>
              </div>
            </div>
            <div className="Phnos">
              <label for="phone">Phone Number</label>
              <br />
            </div>
            <div className="phones">
              <select>
                <option value="+1">+1</option>
                <option value="+88">+88</option>
                <option value="+102">+102</option>
              </select>
              <input type="text" id="phno" name="phno"></input>
            </div>

            <div className="password">
              <div>
                <label for="pass">Password</label>
                <br />
                <input type="pass" id="pass" name="pass"></input>
              </div>
              <div>
                <label for="Cpass">Confirm Password</label>
                <br />
                <input type="cpass" id="cpass" name="cpass"></input>
              </div>
            </div>
            <div class="form-check ">
              <label class="form-check-label">
                <input class="form-check-input" type="checkbox" name="agree" />I
                agree to all the Terms & Privacy Policy
              </label>
            </div>
            <div className="buttons">
              <button type="Register" class="btn regbutton ">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
