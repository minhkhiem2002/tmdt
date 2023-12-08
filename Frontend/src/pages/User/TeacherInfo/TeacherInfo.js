import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from './../../../components/Header/Header';
import './TeacherInfo.scss';
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./../../../components/Footer/Footer";
import axios from 'axios'
import CardTeacher from '../../Teacher/CardTeacher/CardTeacher';

function TeacherInfo() {
    const [contentToShow, setContentToShow] = useState('Content 1');
    const handleButtonClick = (buttonContent) => {
        setContentToShow(buttonContent); 
      };
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
                <img class="circle-imagenew" src="https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-default-avatar-image_2237213.jpg" alt="Circle Image"  />
              </div>
              <div class="newcontent" style = {{width: "100%"}}>
                <Container style = {{width: "100%"}}>
                  <Row >
                    <Col xs = {2}> 
                    </Col>
                    <Col xs = {5} style = {{paddingLeft: "5%"}}>
                    <Form >
                      <Form.Group controlId="formHello">
                        <Form.Label style={{ fontSize: "24px", fontWeight: "900" , fontFamily: "Poppins", lineHeight: "0.5"}}>teacher</Form.Label>
                        </Form.Group>
                      <Form.Group controlId="formUsername">
                        <Form.Label style={{ fontSize: "16px", fontWeight: "200" , fontFamily: "Poppins", lineHeight: "1" }}>teacher@gmail.com</Form.Label>
                        </Form.Group>
                    </Form>
                    </Col>
                    <Col xs = {5} style = {{height: "100%"}}>
                      
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
                      <Button variant = "outline-primary" onClick={() => handleButtonClick('Content 1')}>Thông tin</Button>
                      <Button variant = "outline-primary" onClick={() => handleButtonClick('Content 2')}>Lý lịch</Button>
                      </div>
                      {contentToShow === 'Content 1' && (
                        <div className="Content 1">
                        <h1 className="section-title">Thông tin Giảng Viên</h1>
                        <div style = {{border: "1px solid gray", borderRadius: "10px"}}>

                            <CardTeacher/>
                        </div>
                      </div>
                      )}

                      {contentToShow === 'Content 2' && (
                        <div className="Content 2">
                          <Row>
                          <h1 className="section-title">Password</h1>
                  <Form>
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

export default TeacherInfo;
