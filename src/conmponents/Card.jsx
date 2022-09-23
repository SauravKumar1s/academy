import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Academy from "./Academy";
import "../css/style.css";

const Card = () => {
  const navigate = useNavigate();
  const navigateToAcademy = () => {
    // 👇️ navigate to /contacts
    navigate("/academy");

  };

  const navigateToEditCard = () => {
    navigate("/editcard");
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

      <div className="pl-24 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded overflow-hidden shadow-lg w-96 h-5/5">
          <img
            className="h-44 w-96"
            src="https://cdn.pixabay.com/photo/2020/11/24/10/37/tokyo-5772125_960_720.jpg"
            alt="Mountain"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Academy</div>
            <p className="text-gray-700 text-base ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>{" "}
            <p>Student Name</p>
            <button onClick={navigateToEditCard} className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
              Edit
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
              Delete
            </button>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg w-96 h-5/5">
          <img
            className="h-44 w-96"
            src="https://cdn.pixabay.com/photo/2020/11/24/10/37/tokyo-5772125_960_720.jpg"
            alt="Mountain"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Academy</div>
            <p className="text-gray-700 text-base ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>{" "}
            <p>Student Name</p>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
              Edit
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
              Delete
            </button>
          </div>
        </div>

        <div className="rounded overflow-hidden shadow-lg w-96 h-5/5">
          <img
            className="h-44 w-96"
            src="https://cdn.pixabay.com/photo/2020/11/24/10/37/tokyo-5772125_960_720.jpg"
            alt="Mountain"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Academy</div>
            <p className="text-gray-700 text-base ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>{" "}
            <p>Student Name</p>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
              Edit
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
              Delete
            </button>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg w-96 h-5/5">
          <img
            className="h-44 w-96"
            src="https://cdn.pixabay.com/photo/2020/11/24/10/37/tokyo-5772125_960_720.jpg"
            alt="Mountain"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Academy</div>
            <p className="text-gray-700 text-base ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>{" "}
            <p>Student Name</p>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
              Edit
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
              Delete
            </button>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg w-96 h-5/5">
          <img
            className="h-44 w-96"
            src="https://cdn.pixabay.com/photo/2020/11/24/10/37/tokyo-5772125_960_720.jpg"
            alt="Mountain"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Academy</div>
            <p className="text-gray-700 text-base ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>{" "}
            <p>Student Name</p>
            <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
              Edit
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
              Delete
            </button>
          </div>
        </div>

        <div>
          <Routes>
            <Route path="/academy" element={<Academy />} />
            onClick={navigateToAcademy}
            <Route path="/editcard" element={<Academy />} />
            onClick={navigateToEditCard}
          </Routes>

        </div>
      </div>
      <div className="container fixed left-32">
        <div className="btn-holder flex flex-col h-100 justify-end">
          <button
            className="w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full"
            type="button"
          >
            Click
          </button>
        </div>
      </div>
     
      <div className="fixed bottom-20 right-20">
        <button onClick={navigateToAcademy} class="px-5 py-2 text-sm font-bold tracking-wide text-white bg-red-500 rounded-full focus:outline-none">
          Add Accademy
        </button>
      </div>
     
      <Routes>
        <Route path="/academy" element={<Academy />} />
        onClick={navigateToAcademy}
      </Routes>
    </>
  );
};

export default Card;
