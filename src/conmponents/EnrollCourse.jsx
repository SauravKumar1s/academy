import React from "react";
import "../css/style.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Course from "./Course";

const EnrollCourse = () => {
  const Courses = [
    {
      courseId: 1,
      courseName: "Basic Abacus Mastery",
      courseDescription: "learn basics of abacus",
      courseDuration: 20,
    },
    {
      courseId: 2,
      courseName: "Intermediate Abacus Mastery",
      courseDescription: "learn intermediate techniques",
      courseDuration: 15,
    },
    {
      courseId: 3,
      courseName: "Advanced Abacus Mastery",
      courseDescription: "learn advanced abacus techniques",
      courseDuration: 23,
    },
    {
      courseId: 4,
      courseName: "Complete Abacus zero to hero Mastery",
      courseDescription: "Full Abacus guide from beginner to expert",
      courseDuration: 48,
    },
  ];

  const navigate = useNavigate();
  const navigateToCourse = () => {
    navigate("/course");
  };
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

      <body >
        <div className="main_container ml-80 " style={{width:"140%"  }}>
          <div className="users">
            {Courses.map((courseId) => (
              <>
                <div className="main_div main_div2">
                  <div class="div">
                    <p>Course name: {courseId.courseName}</p>
                    <p>Course Duration: {courseId.courseDuration}</p>
                    <p>Course Available : {courseId.cou}</p>
                  </div>
                  <div className="div1">
                    <p>Number of Students: </p>
                    <p>Course Description : {courseId.courseDescription}</p>
                    <button className=" relative bg-fuchsia-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Button
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>

          <Routes>
            <Route path="/course" element={<Course />} />
            onClick={navigateToCourse}
          </Routes>
        </div>
      </body>
    </>
  );
};

export default EnrollCourse;
