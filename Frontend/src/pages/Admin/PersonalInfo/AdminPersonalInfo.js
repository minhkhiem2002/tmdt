import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../../../components/Header/Header';
import './AdminPersonalInfo.scss';
import { ToastContainer, toast } from 'react-toastify';
import Footer from "../../../components/Footer/Footer";
import axios from 'axios'

function AdminPersonalInfo() {
  
  const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [phone, setPhone] = useState("")
   const [role, setRole] = useState("")
   const [avatar, setAvatar] = useState("")
   const [password, setPassword] = useState("")
   const [rePassword, setRePassword] = useState("")
   const [newPassword, setNewPassword] = useState("")
   const userId = localStorage.getItem("userId");
   const fetchData = useCallback(async () => {
       try {
           if (userId) {
               const apiURL = `http://localhost:3001/api/user/get-detail/${userId}`;
               const res = await axios.get(apiURL);
               console.log("Check avatar",res.data)
               if (res) {
                  setName(res?.data.data.name);
                  setEmail(res?.data.data.email);
                  setPhone(res?.data.data.phone);
                  setRole(res?.data.data.role);
                  setAvatar(res?.data.data.avatar);
               }
           }
       } catch (error) {
           console.log("error fetching", error);
       }
   }, [userId]);
   useEffect(() => {
    fetchData();
}, [fetchData]);
  const [contentToShow, setContentToShow] = useState('Content 1'); 

  const handleButtonClick = (buttonContent) => {
    setContentToShow(buttonContent); 
  };

  const handleSave = async (e) => {
      e.preventDefault();
      try {
        const data = {
            name,
            email,
            phone,
            role,
            avatar
        }
        const res = await axios.put(`http://localhost:3001/api/user/update-user/${userId}`,data);
        console.log(res.data)
        if (res.data.status === "401") {
          toast.error("Update Failure!");
        }
        else {
          toast.success("Update successfully!")
        }
      } catch (e) {
        toast.error("Update failed ");
      }
    }
const handleUpdatePassword = async (e) => {
      e.preventDefault();
      try {
        const data = {
            password: newPassword,
        }
          const res = await axios.put(`http://localhost:3001/api/user/update-user/${userId}`,data);
          console.log(res.data)
          if (res.data.status == "401") {
            toast.error("Update Password Failure!");
          }
          else {
            toast.success("Update Password successfully!")
          }
      } catch (e) {
        toast.error("Update Password failed ");
      }
    }

  return (
    <>
    <Header/>
    <div className = "personalinfo" >
      <Container>
        <Row>
          <Col xs = {10} className = "newmain" style = {{width: "85%", backgroundColor: "white", boxShadow: "0px 10px 10px 0px rgba(0,0,0,0.15)"}}>
            <Row style = {{width: "100%", marginTop: "25px"}}>
            <div class="newcontainer" style = {{width: "98%", marginLeft: "1%", marginRight: "1%", backgroundColor: "white", borderRadius: "1px solid #dce0e2", marginBottom: "20px"}}>
              <div class="image-newcontainer">
                <img src="https://images.unsplash.com/photo-1532767153582-b1a0e5145009?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" alt="Image" />
              </div>
              <div class="circle-image-newcontainer">
                <img class="circle-imagenew" src={avatar} alt="Circle Image"  />
              </div>
              <div class="newcontent" style = {{width: "100%"}}>
                <Container style = {{width: "100%"}}>
                  <Row >
                    <Col xs = {2}> 
                    </Col>
                    <Col xs = {5} style = {{paddingLeft: "5%"}}>
                    <Form >
                      <Form.Group controlId="formHello">
                        <Form.Label style={{ fontSize: "24px", fontWeight: "900" , fontFamily: "Poppins", lineHeight: "0.5"}}>{name}</Form.Label>
                        </Form.Group>
                      <Form.Group controlId="formUsername">
                        <Form.Label style={{ fontSize: "16px", fontWeight: "200" , fontFamily: "Poppins", lineHeight: "1" }}>{email}</Form.Label>
                        </Form.Group>
                    </Form>
                    </Col>
                    <Col xs = {5} style = {{height: "100%"}}>
                      <Row style = {{marginTop: "0px", marginLeft: "35%"}}>
                        <input type="file" />
                        
                      </Row>
                      <Row  style = {{marginTop: "5px", marginLeft: "35%"}}>
                      <Button variant="outline-success" className="change-avatar-btn" style = {{width: "140px", marginTop: "0px", borderRadius: "20px"}}>
                        Change Image
                        </Button>
                      </Row>
                    </Col>
                  </Row>
                  
                  <Row style = {{marginTop: "0px"}}>
                  <hr/> 
                    <Col xs = {4} style = {{borderRight: "1px solid #c5c8c9", marginTop: "15px"}}>         
                      <p style = {{fontSize: "20px", fontWeight: "600"}}> Introduce</p> 
                      <p>I think listening to music is my hobby. I love listening to all kind of music when I do my housework, when I do not have anything to do, or even when I have meal. I love all kinds of music; country, pop, rock and roll, and other kind of music.</p>
                    </Col>
                  
                    <Col xs = {8}> 
                      <Row>
                      <div style = {{display: "flex", marginTop: "15px", marginBottom: "10px"}}>
                      <Button variant = "outline-primary" onClick={() => handleButtonClick('Content 1')}>Personal Info</Button>
                      <Button variant = "outline-primary" onClick={() => handleButtonClick('Content 2')}>Password</Button>
                      </div>
                      {contentToShow === 'Content 1' && (
                        <div className="Content 1">
                        <h1 className="section-title">Personal Information</h1>
                        <Form style={{ marginTop: "10px" }}>
                        <Form.Group controlId="formName">
                            <Form.Label>Họ và Tên</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                          </Form.Group>

                          <Form.Group controlId="formGender">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" readOnly value={email} onChange={(e) => setEmail(e.target.value)} />
                          </Form.Group>

                          <Form.Group controlId="formEmail">
                            <Form.Label>Role</Form.Label>
                            <Form.Control type="text" readOnly value= {role}/>
                          </Form.Group>

                          <Form.Group controlId="formPhone">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control type="text" value={phone} onChange={(e) => setPhone( e.target.value)} />
                          </Form.Group>
          
          
                          <Form style={{ marginTop: "10px" }}>
                            <div className="d-flex justify-content-end">
                              <Button variant="outline-success" onClick = {handleSave} className="save-btn">
                                Save
                              </Button>
                            </div>
                          </Form>
                        </Form>
                      </div>
                      )}

                      {contentToShow === 'Content 2' && (
                        <div className="Content 2">
                          <Row>
                          <h1 className="section-title">Password</h1>
                  <Form>
                    <Form.Group controlId="formCurrentPassword">
                      <Form.Label>Mật khẩu hiện tại</Form.Label>
                      <Form.Control type="password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formNewPassword">
                      <Form.Label>Mật khẩu mới</Form.Label>
                      <Form.Control type="password" value = {rePassword} onChange = {(e) => setRePassword(e.target.value)}/>
                    </Form.Group>

                    <Form.Group controlId="formConfirmPassword">
                      <Form.Label>Xác nhận mật khẩu mới</Form.Label>
                      <Form.Control type="password" value = {newPassword} onChange = {(e) => setNewPassword(e.target.value)}/>
                    </Form.Group>

                    <Form style={{ marginTop: "10px" }}>
                      <div className="d-flex justify-content-end">
                        <Button variant="outline-success" onClick = {handleUpdatePassword} className="change-password-btn" >
                          Change Password
                        </Button>
                        <ToastContainer />
                      </div>
                    </Form>
                  </Form>
                          </Row>
                        </div>
                      )}
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>


            </Row>
          </Col>
        </Row>
      </Container>
      
    </div>
    <ToastContainer />
    <Footer/>
    </>
  );
}

export default AdminPersonalInfo;
