import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Awaisregisterationscreen.scss";
import lpic from "./img/lpic.png";
import rpic from "./img/rpic.png";
import center from "./img/center.png";
import rtop from "./img/rtop.png";

export const Awaisregisterationscreen = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [agreed, setAgreed] = useState(false);
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  // Function to save user information in localStorage associated with the email
  const saveUserInfo = (email, userInfo) => {
    const storedInfo = localStorage.getItem(email);
    let existingInfo = storedInfo ? JSON.parse(storedInfo) : {};
    existingInfo = { ...existingInfo, ...userInfo };
    localStorage.setItem(email, JSON.stringify(existingInfo));
  };

  // Function to retrieve the email saved in /register page
  const getEmailFromLocalStorage = () => {
    return localStorage.getItem("email");
  };

  const handleNext = (event) => {
    event.preventDefault();
  
    // Get the email from localStorage
    const email = localStorage.getItem("email");
  
    if (!firstName || !lastName || !password || !confirmPassword) {
      setError("Please fill in all fields.");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      const userInfo = {
        firstName,
        lastName,
        password,
      };
  
      // Save user information as an object associated with their email
      localStorage.setItem(email, JSON.stringify(userInfo));
  
      // Navigate to the login page
      navigate("/login?email=" + email);
    }
  };

  return (
    <div className="main ">
      <div className="row">
        <div className="  col-md-12 col-lg-6 left  ">
          <div className="rimges d-flex flex-row justify-content-start ">
            <img src={lpic} className="img-fluid  img1" alt="" />
            <img src={center} className="img-fluid  img2" alt=" " />
            <img src={rpic} className="img-fluid  img3" alt=" " />
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
          <img src={rtop} className="img-fluid  img4" alt=" " />
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
                <label htmlFor="fname">First Name</label> <br />
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="lname">Last Name</label> <br />
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="Phnos">
              <label htmlFor="phone">Phone Number</label>
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
                <label htmlFor="pass">Password</label>
                <br />
                <input
                  type="password"
                  id="pass"
                  name="pass"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
              </div>
              <div>
                <label htmlFor="Cpass">Confirm Password</label>
                <br />
                <input
                  type="password"
                  id="cpass"
                  name="cpass"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="form-check ">
              <label className="form-check-label">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="agree"
                />
                I agree to all the Terms & Privacy Policy
              </label>
            </div>
            <div className="buttons">
              <button
                type="submit"
                className="btn regbutton"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
