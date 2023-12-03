import React, {useState} from "react";
import "./Register.scss";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios'
import { toast, ToastContainer } from "react-toastify";
const Register = () => {
    const navigate = useNavigate();
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [confirmPassword,setConfirmPassword] = useState()
    const [phone,setPhone] = useState()
    const handleRegister = async (e) => {
        e.preventDefault();
        const apiUrl =  'http://localhost:3001/api/user/signup';
        const data = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            phone: phone
          };
          try {
        const response = await axios.post(apiUrl, data)
        const token = response.data;
          console.log(token);
          toast.success("Register successfully!", {
            autoClose: 3000,
            onClose: () => {
              setTimeout(() => {
                navigate("/login");
              }, 3000);
            },
          });
          } catch (e) {
            console.error(e)
          }
    };
    
    console.log(name,email,password,confirmPassword,phone)
    return (
        <Container style = {{marginTop: "20px", fontFamily: "cursive"}}>
            <Row>
            <Col style = {{marginLeft: "50px"}}>
            <p style={{fontFamily: 'sans-serif', fontSize: "35px", fontWeight: "800", color: "#6c3082",marginLeft: "28px"}}>Create Account</p>
            <Container style = {{height: "55px", borderRadius: "20px" ,width: "470px", marginLeft: "28px", marginTop: "-15px"}}>
              <Row style = {{boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", borderRadius: "20px"}}>
                <Col xs = {6} style = {{textAlign: "center",marginRight: "-60px", marginLeft: "20px", marginTop: "3px"}}>
                  <img
                  src = "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  width = "38px"
                  height = "38px"
                  
                  />
                </Col>
                <Col xs = {6}>
                    <p style = {{marginLeft: "-30px", marginTop: "9px", fontWeight: "400", fontFamily: "cursive"}}>Sign up with Google</p>
                </Col>
              </Row>
            </Container>
            <Container style = {{height: "55px", borderRadius: "20px" ,width: "470px", marginLeft: "28px"}}>
              <Row style = {{boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", borderRadius: "20px"}}>
                <Col xs = {6} style = {{textAlign: "center",marginRight: "-60px", marginLeft: "20px", marginTop: "3px"}}>
                  <img
                  src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/2048px-2023_Facebook_icon.svg.png"
                  width = "38px"
                  height = "38px"
                  
                  />
                </Col>
                <Col xs = {6}>
                  <p style = {{marginLeft: "-30px", marginTop: "9px", fontWeight: "400", fontFamily: "cursive"}}>Sign up with Facebook</p>
                </Col>
              </Row>
            </Container>
            <div style = {{display: "flex"}}>
              <hr style={{ borderTop: '2px solid black', width: '210px', marginRight: '10px', marginLeft: '28px' }} />
              <span style={{ fontWeight: 'bold', fontSize: '16px', color: '#777', marginRight: '5px', marginTop: "4px" }}>Or</span>
              <hr style={{ borderTop: '2px solid black', width: '210px', marginLeft: '10px', marginRight: '10px' }} />
            </div>
            <div style = {{textAlign: "center", marginLeft: "30px"}}>
                <Form
                    name="register-form"
                    layout="vertical"
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        width: "700px",
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    className="wrapper__form"
                    onFinish={handleRegister}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Full Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Give your full name",
                            },
                        ]}
                        style = {{fontFamily: "cursive"}}
                    >
                        <Input value={name} onChange={(e) => setName(e.target.value)} style = {{fontFamily: "cursive"}} placeholder="Full Name" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Give your email address",
                            },
                        ]}
                        style = {{marginTop: "-17px"}}
                    >
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} style = {{fontFamily: "cursive"}} placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Give your password!",
                            },
                        ]}
                        style = {{marginTop: "-17px"}}
                    >
                        <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} style = {{fontFamily: "cursive"}} placeholder="Password" />
                    </Form.Item>

                    <Form.Item
                        label="Confirm Password"
                        name="confirm_password"
                        rules={[
                            {
                                required: true,
                                message: "Confirm Your Password!",
                            },
                        ]}
                        style = {{marginTop: "-17px"}}
                    >
                        <Input.Password value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Your Password" />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: "Give your phone number",
                            },
                        ]}
                        style = {{marginTop: "-17px"}}
                        
                    >
                        <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Give your phone number" />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={handleRegister}
                            style={{
                              width: '100%',
                              borderRadius: '5px', 
                              backgroundColor: '#007bff', 
                              color: '#fff',
                              marginTop: '-6px',
                              marginBottom: '10px',
                              fontFamily: "cursive"}}
                        >
                            Sign up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div style = {{fontFamily: "cursive", marginLeft: "140px", marginTop: "-25px"}}>
                <span>Already have an account?</span>
                <Link to={"/login"}>
                    <span style = {{marginLeft: "10px"}}>Sign in</span>
                </Link>
            </div>
            </Col>
            <Col style = {{marginRight: "50px"}}>
            <img 
                src = "https://www.sonikapay.com/skin/front/assets/img/bg/signup-1.png"
                width  = "100%"
                height = "98%"
                alt = "registerImage"

            />
            </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default Register;