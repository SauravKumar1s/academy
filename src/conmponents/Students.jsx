import React from "react";
import "../css/style.css";

const Students = () => {
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
                <button
                  className="input"
                  type="button"
                  value="search"
                >
                  Search
                </button>
              </form>
      <div className="mt-20 lg:m-20 md:m-20 sm:m-20">
        <table style={{ width: "100%" }}>
          <tr>
            <th>Student ID</th>
            <th>Student name</th>
            <th>Enrolled Course</th>
            <th>Mobile number</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1232213</td>
            <td>Anual</td>
            <td>Levo Wooden </td>
            <td>3399990210</td>
            <td>
              <button className="edit_button">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="delete_button">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>1232213</td>
            <td>Anual</td>
            <td>Levo Wooden </td>
            <td>3399990210</td>
            <td>
              <button className="edit_button">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="delete_button">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>1232213</td>
            <td>Anual</td>
            <td>Levo Wooden </td>
            <td>3399990210</td>
            <td>
              <button className="edit_button">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="delete_button">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
          <tr>
            <td>1232213</td>
            <td>Anual</td>
            <td>Levo Wooden </td>
            <td>3399990210</td>
            <td>
              <button className="edit_button">
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="delete_button">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </td>
          </tr>
        </table>
        <div class="md:w-full px-3 mt-20">
          <button class="md:w-full bg-green-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
            Add Student
          </button>
        </div>
      </div>
    </>
  );
};

export default Students;
