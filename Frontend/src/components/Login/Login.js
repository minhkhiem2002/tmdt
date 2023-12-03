import { Divider, Input } from "antd";
import React, { useState } from "react";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Container from "react-bootstrap/Container";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const apiUrl =  "http://localhost:3001/api/user/login";
    const data = {
      email: email,
      password: password,
    };
    console.log(data)

    try {
      const response = await axios.post(apiUrl, data);
      const token = response.data;
      if (token.status == "401") {
        toast.error("Login Failure!");
      } else {
    
        localStorage.setItem("userId", token.userId);
        localStorage.setItem("role", token.role);
        toast.success("Login successfully!", {
          autoClose: 3000,
          onClose: () => {
            setTimeout(() => {
              navigate("/");
            }, 3000);
          },
        });
      }
    } catch (error) {
      toast.error("Login failed ");
    }
  };
  return (
    <>
    
      <Container 
        style={{ 
          height: "100%", 
          width: "100%",
        }} 
      >
        <Row >
          <Col xs={6}>
            
             <img
              src = 'https://www.sonikapay.com/skin/front/assets/img/bg/signin.png'
              width = '100%'
              height= '100%'
              alt = "image"
            />     
          </Col>
          <Col xs={6} style = {{marginTop: "30px"}}>
            <p style = {{fontFamily: 'cursive', fontSize: "35px", fontWeight: "800", height: "25px", color: "#746d74"}}>Welcome to</p>
            <p style = {{fontFamily: 'cursive', fontSize: "45px", fontWeight: "1000", marginBottom: "20px", color: "#6c3082"}}>Online Course</p>
            <Container style = {{height: "55px", borderRadius: "20px"}}>
              <Row style = {{boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", borderRadius: "20px"}}>
                <Col xs = {6} style = {{textAlign: "center",marginRight: "-60px", marginLeft: "50px"}}>
                  <img
                  src = "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  width = "38px"
                  height = "38px"
                  
                  />
                </Col>
                <Col xs = {6}>
                  <p style = {{fontFamily: "cursive",marginLeft: "-80px", marginTop: "7px", color: "#746d74"}}>Login with Google</p>
                </Col>
              </Row>
            </Container>
            <Container style = {{height: "55px", borderRadius: "20px"}}>
              <Row style = {{boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", borderRadius: "20px"}}>
                <Col xs = {6} style = {{textAlign: "center",marginRight: "-60px", marginLeft: "50px"}}>
                  <img
                  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png"
                  width = "38px"
                  height = "38px"
                  
                  />
                </Col>
                <Col xs = {6}>
                  <p style = {{fontFamily: "cursive",marginLeft: "-80px", marginTop: "7px", color: "#746d74"}}>Login with Facebook</p>
                </Col>
              </Row>
            </Container>
            <div style = {{display: "flex"}}>
              <hr style={{ borderTop: '2px solid black', width: '50%', marginRight: '10px', marginLeft: '10px' }} />
              <span style={{ fontWeight: 'bold', fontSize: '16px', color: '#777', marginRight: '5px', marginTop: "4px" }}>Or</span>
              <hr style={{ borderTop: '2px solid black', width: '50%', marginLeft: '10px', marginRight: '10px' }} />
            </div>
            <div>
              <Form>
                <Form.Group>
                  {/* <Form.Label>Email</Form.Label> */}
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    required
                    style = {{marginTop: "10px", marginBottom: "10px", borderRadius: "10px", fontFamily: "cursive", color: "#746d74"}}

                  />
                </Form.Group>
                <Form.Group>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    required
                    style = {{marginTop: "10px", marginBottom: "10px", borderRadius: "10px", fontFamily: "cursive", color: "#746d74"}}
                  />
                </Form.Group>
                <Form.Group style = {{display: "flex", marginTop: "5px"}}>
                  <Form.Check type="checkbox" label="Remember" style = {{fontFamily: "cursive"}} />
                  <div style = {{marginLeft: "400px"}}>
                      <Link to={"/forget"}>
                        <span style = {{fontFamily: "cursive"}}>Forget Password?</span>
                      </Link>
                  </div>
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  onClick={handleLogin}
                  style={{
                    width: '100%',
                    borderRadius: '5px', 
                    backgroundColor: '#007bff', 
                    color: '#fff',
                    marginTop: '10px',
                    marginBottom: '10px',
                    fontFamily: "cursive"
                  }}
                >
                  Login
                </Button>
              </Form>
                <div style = {{textAlign: "center", fontFamily: "cursive"}}>
                  <span>Don't have an account? </span>
                  <Link to={"/register"}>
                    <span>Register</span>
                  </Link>
                </div>
              </div>
      </Col>
        </Row>
        <ToastContainer />
      </Container>
  </>
  );
};

export default Login;
