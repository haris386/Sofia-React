import React from "react";
import "./CIAwaiscourseassigning.scss";

export const CIAwaiscourseassigning = () => {
  const cells = document.querySelectorAll(".editable");

  // Add event listeners to each editable cell
  cells.forEach((cell) => {
    cell.addEventListener("blur", () => {
      // When a cell loses focus (on blur), save the content
      // You can send this data to your server or save it locally
      console.log(cell.textContent);
    });
  });

  return (
    <div class="container-fluid">
      <div class="row">
        <div class=" col-sm-12 col-md-12 col-lg-4 left">
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
                  <div class="circle1">
                    <i class="bi bi-check"></i>
                  </div>
                  <div class="circle-line1"></div>

                  <div class="circle1"></div>
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
                <h5>Instructor Inventory</h5>
                <h5>Instructor Details</h5>
                <h5>Classroom Timetable</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-8  ">
          <div className="row right">
            <div class="p-4 text-set">
              <h4>Drag courses to respective Programs</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Dui sagittis ornare
                adipiscing scelerisque. Netus blandit in varius mauris egestas
                ultricies posuere ultrices sollicitudin. Ornare.
              </p>
            </div>
            <div className="Main">
              <div class="col-4  Responsive ">
                <table class="table table-bordered custom-table">
                  <thead>
                    <tr>
                      <th>
                        <i class="bi bi-search"></i>
                        <input
                          class="search-input"
                          type="text"
                          placeholder="Search Course"
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <div
                        class="table-scroll"
                        style={{ border: "1px solid #00000033" }}
                      >
                        <td>
                          {" "}
                          <div class="specific-data">Course 1</div>
                        </td>
                        <td>
                          {" "}
                          <div class="specific-data">Course 2</div>
                        </td>
                        <td>
                          {" "}
                          <div class="specific-data">Course 3</div>
                        </td>
                        <td>
                          {" "}
                          <div class="specific-data">Course 4</div>
                        </td>
                        <td>
                          {" "}
                          <div class="specific-data">Course 5</div>
                        </td>
                        <td>
                          {" "}
                          <div class="specific-data">Course 6</div>
                        </td>
                        <td>
                          {" "}
                          <div class="specific-data">Course 7</div>
                        </td>
                      </div>
                    </tr>

                    {/* <!-- Add more rows as needed --> */}
                  </tbody>
                </table>
              </div>
              <div className="table-container ">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th className="col-3">
                        <i class="bi bi-search"></i>
                        <input
                          class="search-input"
                          type="text"
                          placeholder="Search Course"
                        />
                      </th>

                      <th className="col-5 courses-right">Courses</th>
                    </tr>
                  </thead>
                  <tbody className="table-scroll">
                    <tr>
                      <td style={{ verticalAlign: "middle" }}>Program 1</td>
                      <td class="editable" contenteditable="true">
                        <div className="btn-style">
                          <button>course1</button>
                          <button>
                            Course3<i class="bi bi-dash-circle"></i>
                          </button>
                          <button>course6</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ verticalAlign: "middle" }}>Program 2</td>
                      <td class="editable" contenteditable="true">
                        <div className="btn-style">
                          <button>course1</button>
                          <button>course2</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Program 3</td>
                      <td class="editable" contenteditable="true"></td>
                    </tr>
                    <tr>
                      <td>Program 4</td>
                      <td class="editable" contenteditable="true">
                        <div className="btn-style">
                          <button>course7</button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>Program 5</td>
                      <td class="editable" contenteditable="true"></td>
                    </tr>
                    <tr>
                      <td>Program 6</td>
                      <td class="editable" contenteditable="true"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="  btn-set">
              <button className="btn  set1 ">Save and Next</button>
            </div>
            <p className="mt-2">Or</p>
            <a href="#/" style={{ color: "#355070", textDecoration: "none" }}>
              Download Template
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
