import React, { useState } from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from "react-router-dom";


const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [resetCode, setResetCode] = useState('');
  const [isCodeSent, setCodeSent] = useState(false);
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [id, setId] = useState('');
  const handleSendMail = async (e) => {
    e.preventDefault();
    const apiUrl = "http://localhost:3001/api/user/send-reset-code";
    const data = {
      email: email
    }
    try {
      const response = await axios.post(apiUrl, data)
      console.log(response.data)
      
    } catch (error) {
      console.error(error);
    }
  };

  const handleSendCode = async (e) => {
      e.preventDefault();
      const apiUrl = "http://localhost:3001/api/user/checkValidCode";
      const data = {
        email: email,
        passwordResetCode: resetCode,
      }
      try {
        const response = await axios.post(apiUrl, data)
        console.log(response.data.data)
        if (response.data.status === 200) {
          setId(response.data.data._id)
          setCodeSent(true)
        }
      } catch (error) {
        console.error(error);
      }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const apiUrl = `http://localhost:3001/api/user/update-user/${id}`;
    const data = {
      password: password
    }
    try {
      if (password == rePassword) {

        const response = await axios.put(apiUrl, data);
        console.log(response)

      }
      else {
        alert('Password does not match')
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container style={{ height: '600px', width: "500px", textAlign: "center",marginTop: "50px" , border: "1px solid black", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)", borderRadius: "20px"}}>
      <Row>
        <Col>
          <img
            src = "https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.15752-9/371375610_874792300758700_2319481951214377969_n.png?_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeG_O1Wo4HM84dBq5lr1jJDWSE1gFMTy9aRITWAUxPL1pEh78gXkWEonsOlYCvkvb6n0LDIm6x1KY_ZLIVh3eYuG&_nc_ohc=cUWAZQXf7jYAX8qNLEM&_nc_ht=scontent.fsgn2-9.fna&oh=03_AdSjXKbwKyXRlp9cXvwI5ZxPvFFSZwhdfsZR-1L6JAJpAg&oe=658BE762"
            alt = "ForgetPasswordImage"
            width = "200px"
            height = "200px"
          />
          <p style={{ textAlign: 'center', fontSize: '24px', fontWeight: '600', fontFamily: "cursive" }}>Reset your password</p>
          <hr style={{ width: '100%', border: '1px solid black' }} />
          {!isCodeSent ? (
            <>
              <p style = {{textAlign: "left", marginLeft: "10px"}}>Need to reset your password? No problem! Just click give your email below. If you did not make this request, please ignore this email</p>
              
              <Form>

                <Container>
                <Row>
                    <Col xs = {8}>
                        <Form.Group controlId="formEmail">
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                    </Col>
                    <Col xs = {4}>
                        <Button variant="primary" type="button" onClick={handleSendMail} style={{ width: '100%' }}>
                            Send
                        </Button>
                    </Col>
                </Row>
                </Container>
                <hr style={{ width: '100%', border: '1px solid black' }} />
            <Container style = {{textAlign: "left"}}>
              <p>We have sent a code to: {email}</p>
              <p>Please enter code below with 6 numbers</p>
              <Form>
                <Row>
                    <Col xs = {8}>
                        <Form.Group controlId="formCode">
                        <Form.Control
                            type="text"
                            placeholder="Enter the code"
                            value={resetCode}
                            onChange={(e) => setResetCode(e.target.value)}
                        />
                        </Form.Group>
                    </Col>
                    <Col xs = {4}>
                        <Button variant="primary" type="button" onClick={handleSendCode} style={{ width: '100%' }}>
                            Confirm
                        </Button>
                    </Col>
                </Row>
              </Form>
              </Container>
              </Form>
            </>
          ) : (
            <>
              <Form style={{ marginTop: '20px' }}>
                <Form.Group controlId="formNewPassword">
                  <Form.Control type="password" value = {password} onChange = {(e) => setPassword(e.target.value)} placeholder="New Password" />
                </Form.Group>
                <Form.Group controlId="formConfirmPassword" style = {{marginTop: "10px"}}>
                  <Form.Control type="password" value = {rePassword} onChange = {(e) => setRePassword(e.target.value)} placeholder="Confirm Password" />
                </Form.Group>
                <Button variant="primary" type="button" onClick={handleResetPassword} style={{ width: '100%',
                              borderRadius: '5px', 
                              backgroundColor: '#007bff', 
                              color: '#fff',
                              marginTop: '10px',
                              marginBottom: '10px',
                              fontFamily: "cursive" }}>
                  Reset Password
                </Button>
              </Form>
            </>
          )}
        </Col>
                <div style = {{textAlign: "center", fontFamily: "cursive", marginTop: "20px"}}>
                  <span>Want to login? </span>
                  <Link to={"/login"}>
                    <span>Login</span>
                  </Link>
                </div>
              
      </Row>
    </Container>
  );
};

export default ForgetPassword;
