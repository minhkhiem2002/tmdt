import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import React from "react";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";
import { useState,useEffect } from "react";
import './App.css'
import UserHome from "./pages/User/Home/Home";
import CourseOnline from "./pages/User/CourseOnline/CourseOnline";
import DetailCourse from "./components/DetailCourse/DetailCourse";
import PersonalInfo from "./pages/User/PersonalInfo/PersonalInfo";
function App() {
  const [role, setRole] = useState("");

  useEffect(() => {
    
    setRole(localStorage.getItem('role'));
  }, []);

  // const renderDashboard = () => {
  //   if (role === "user") {
  //     return <Contacts />;
  //   } else if (role === "manager") {
  //     return <ListRequest />;
  //   } else if (role === "finance") {
  //     return <FRequest />;
  //   } else {
  //     return <Contacts />;
  //   }
  // };
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register"  element={<Register />} />
        <Route path = "/forget" element={<ForgetPassword />} />
        <Route path = "/" element = {<UserHome/>}/>
        <Route path = "/onlinecourses" element={<CourseOnline/>} />
        <Route path = "/onlinecourses/:courseName" element = {<DetailCourse/>}/>
        <Route path = "/personalInfo" element = {<PersonalInfo/>} />
      </Routes>
    </>
  );
}

export default App;
