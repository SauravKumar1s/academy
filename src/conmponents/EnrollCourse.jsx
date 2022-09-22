import React from "react";
import "../css/style.css";

const EnrollCourse = () => {
  return (
    <>
      <form className="temp_form">
        <input
          className="input"
          type="text"
          placeholder="Enter your Id"
          autoComplete="off"
          id="search"
          autoFocus
        />
        <button className="input" type="button" value="search">
          Search
        </button>
      </form>

      <body>
        <div class="main_container">
          <div class="main_div">
            <div class="div">
              <p>Course name: Daug Abacus</p>
              <p>Course Duration: 3months</p>
              <p>Course Available Timing: 6am to 6pm</p>
            </div>
            <div class="div1">
              <p>Number of Students: 222</p>
              <p>Course Description: yyyyy</p>
              <button>Enroll Now</button>
            </div>
          </div>
          <div class="main_div main_div2">
            <div class="div">
              <p>Course name: Daug Abacus</p>
              <p>Course Duration: 3months</p>
              <p>Course Available Timing: 6am to 6pm</p>
            </div>
            <div class="div1">
              <p>Number of Students: 222</p>
              <p>Course Description: yyyyy</p>
              <button>Enroll Now</button>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default EnrollCourse;
