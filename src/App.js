
import './App.css';

import Register from './conmponents/Register';

import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './conmponents/Nav';
import Academy from './conmponents/Academy';
import Login from './conmponents/Login';
import Card from './conmponents/Card';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Course from './conmponents/Course';
import Students from './conmponents/Students';
import EnrollCourse from './conmponents/EnrollCourse';
import StudentAdd from './conmponents/StudentAdd';
import EditCard from './conmponents/EditCard';



function App() {
  return (
    <>
    
    <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/card" element={<Card />} />
          <Route exact path="/academy" element={<Academy />} />
          <Route exact path="/enrollcourse" element={<EnrollCourse />} />
          <Route exact path="/course" element={<Course />} />
          <Route exact path="/students" element={<Students />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/Card" element={<Card />} />
          <Route exact path="/add" element={<StudentAdd />} />
          <Route exact path="/editcard" element={<EditCard />} />
        </Routes>
       </BrowserRouter>
    
    </>
  );
}

export default App;
