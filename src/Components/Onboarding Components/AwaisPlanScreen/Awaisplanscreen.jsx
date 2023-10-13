import React from "react";
import './Awaisplanscreen.scss'
import abc from './img/abc.png';
export const Awaisplanscreen = () => {
  return (
    <div className="container-fluid main ">
      <div className="row">
        <div className="   col-md-12 col-lg-6 left">
          <img src= {abc} class="img-fluid m-4" alt="..." />
          <div className="col-12">
            <div className=" row d-flex justify-content-center ">
              <div className="  para">
                <h5>Help us personalize your experience</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Convallis turpis ac consequat at varius turpis mattis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="    col-md-12 col-lg-6 right mt-3">
          <div className="row d-flex flex-row justify-content-center p-3">
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
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4 ">
                <div className="card-body cards  ">
                  <h5 className="card-title">Basic</h5>
                  <h2 className="mt-3">$20</h2>
                  <p>Per month</p>
                  <div className="horizontal-line"></div>
                  <div className="d-flex  align-items-center mt-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#4CAF50"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span className="text-black p-2">Benefit 1</span>
                  </div>
                  <div className="d-flex  align-items-center  mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#4CAF50"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span className="text-black p-2">Benefit 2</span>
                  </div>
                  <div className="d-flex  align-items-center mt-2 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#4CAF50"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span className="text-black p-2 ">Benefit 3</span>
                  </div>

                  <button className="btn  btn-fill1 ">Select Plan</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-2">
                <div className="card-body cards  ">
                  <h5 className="card-title">Standard</h5>
                  <h2 className="mt-3">$35</h2>
                  <p>Per month</p>
                  <div className="horizontal-line"></div>
                  <div className="d-flex  align-items-center mt-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#4CAF50"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span className="text-black p-2">Benefit 1</span>
                  </div>
                  <div className="d-flex  align-items-center  mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#4CAF50"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span className="text-black p-2">Benefit 2</span>
                  </div>
                  <div className="d-flex  align-items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#4CAF50"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span className="text-black p-2">Benefit 3</span>
                  </div>
                  <div className="d-flex  align-items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#4CAF50"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span className="text-black p-2">Benefit 4</span>
                  </div>
                  <button className="btn  btn-fills ">Select Plan</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-2">
                <div className="card-body cards  ">
                  <h5 className="card-title">Premium</h5>
                  <h3 className="mt-3">$50</h3>
                  <p>Per month</p>
                  <div className="horizontal-line"></div>
                  <div className="d-flex  align-items-center mt-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#4CAF50"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span className="text-black p-2">Benefit 1</span>
                  </div>
                  <div className="d-flex  align-items-center  mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#4CAF50"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span className="text-black p-2">Benefit 2</span>
                  </div>
                  <div className="d-flex  align-items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#4CAF50"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span className="text-black p-2">Benefit 3</span>
                  </div>
                  <div className="d-flex  align-items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#4CAF50"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span className="text-black p-2">Benefit 4</span>
                  </div>
                  <div className="d-flex  align-items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#4CAF50"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span className="text-black p-2">Benefit 5</span>
                  </div>
                  <div className="d-flex  align-items-center mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="#4CAF50"
                      class="bi bi-check-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                    <span className="text-black p-2">Benefit 6</span>
                  </div>
                  <button className="btn  btn-fill ">Select Plan</button>
                </div>
              </div>
            </div>
          </div>
          .........
        </div>
      </div>
    </div>
  );
};
