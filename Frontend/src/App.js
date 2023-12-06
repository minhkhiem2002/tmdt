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
import DetailCourse from "./components/DetailCourse/DetailCourse";
import PersonalInfo from "./pages/User/PersonalInfo/PersonalInfo";
import Blog from "./components/Blog/Blog";

import UserHome from "./pages/User/Home/Home";
import UserCourseOnline from "./pages/User/CourseOnline/CourseOnline";
import TeacherHome from "./pages/Teacher/Home/TeacherHome";
import TeacherCourseOnline from "./pages/Teacher/CourseOnline/CourseOnline";
import AdminHome from "./pages/Admin/An/AdminHome";
import CourseOnline from "./pages/Admin/CourseOnline/CourseOnline";
import FriendPage from "./components/FriendPage/FriendPage";
import Elearning from "./components/ELearning/ELearning";
function App() {
  const [role, setRole] = useState("");

  useEffect(() => {
    
    setRole(localStorage.getItem('role'));
    console.log("App get role", role)
  }, []);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register"  element={<Register />} />
        <Route path = "/forget" element={<ForgetPassword />} />
        <Route path="/onlinecourses/:courseName" element={<DetailCourse />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/personalInfo" element={<PersonalInfo />} />
        <Route path = "/friend" element={<FriendPage/>} />
        <Route path = "/elearning" element={<Elearning />} />
        {role === "user" && (
          <>
            <Route path="/" element={<UserHome />} />
            <Route path="/onlinecourses" element={<UserCourseOnline />} />
          </>
        )}
        {role === "teacher" && (
          <>
           <Route path="/" element={<TeacherHome />} />
            <Route path="/onlinecourses" element={<TeacherCourseOnline />} />
          </>
        )}
        {role === "admin" && (
          <>
            <Route path="/" element={<AdminHome />} />
            <Route path = "/onlinecourses" element={<CourseOnline />} />
          </>
        )

        }
      </Routes>
    </>
  );
}

export default App;
