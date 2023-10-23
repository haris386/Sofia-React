import React from "react";

export const CIAwaisfillouttheformscreen = () => {
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
              <h4>Fill out the form</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur. Dui sagittis ornare
                adipiscing scelerisque. Netus blandit in varius mauris egestas
                ultricies posuere ultrices sollicitudin. Ornare.
              </p>
            </div>
            {/* <div class="table-container">  */}
            <div class="table-responsive  ">
              <div style={{ paddingRight: "20px" }}>
                <table class="table table-bordered ">
                  <thead>
                    <tr>
                      <th className="col-4">
                        Course Name <i class="bi bi-clipboard"></i>
                      </th>
                      <th className="col-8">
                        Description<i class="bi bi-clipboard"></i>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
              {/* <div class="table-container">   */}
              <div className="table-scroll">
                <table class="table table-bordered">
                  <tbody id="table-body">
                    {/* <!-- You can populate this with your data --> */}
                    <tr>
                      <td class="editable col-4" contenteditable="true"></td>
                      <td class="editable col-8" contenteditable="true"></td>
                    </tr>
                    <tr>
                      <td class="editable" contenteditable="true"></td>
                      <td class="editable" contenteditable="true"></td>
                    </tr>
                    <tr>
                      <td class="editable" contenteditable="true"></td>
                      <td class="editable" contenteditable="true"></td>
                    </tr>
                    <tr>
                      <td class="editable" contenteditable="true"></td>
                      <td class="editable" contenteditable="true"></td>
                    </tr>
                    <tr>
                      <td class="editable" contenteditable="true"></td>
                      <td class="editable" contenteditable="true"></td>
                    </tr>
                    <tr>
                      <td class="editable" contenteditable="true"></td>
                      <td class="editable" contenteditable="true"></td>
                    </tr>
                    <tr>
                      <td class="editable" contenteditable="true"></td>
                      <td class="editable" contenteditable="true"></td>
                    </tr>
                    <tr>
                      <td class="editable" contenteditable="true"></td>
                      <td class="editable" contenteditable="true"></td>
                    </tr>
                    <tr>
                      <td class="editable" contenteditable="true"></td>
                      <td class="editable" contenteditable="true"></td>
                    </tr>
                    {/* </div> */}
                    {/* <!-- Repeat for other rows --> */}
                  </tbody>
                </table>
              </div>
              {/* </div> */}
            </div>
            {/* </div> */}

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
