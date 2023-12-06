import React from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { FaList } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
    return (
        <>
        <Container style = {{ boxShadow: "0.5px 0.866px 2px 0px rgba(0, 0, 0, 0.15)", height: "100vh"}}>
                <Col>
                  <Row>
                      <img
                        src="https://cdn.vatgia.com/pictures/thumb/w500/2013/09/fls1380328738.png"
                   
                        height="150px"
                        width="80px"
                        alt="Logo"
                      />
                  </Row>
                  <Row style = {{textAlign: "center"}}>
                    <NavLink to = '/' style = {{textDecoration: "none", display: "flex"}}>
                     <FiHome style = {{marginTop: "4px", marginRight: "5px", marginLeft: "60px"}} size = {20}/> <span style={{ fontWeight: "600", color: "black", fontSize: "20px" }}>Danh sách</span>
                    </NavLink>
                
                  </Row>
                  <Row style = {{marginTop: "15px"}}>
         
                    <NavLink to = '/onlinecourses' style = {{textDecoration: "none"}}>
                    <FaList style = {{marginTop: "-3px", marginRight: "5px", marginLeft: "60px"}} size = {20}/> <span style={{ fontWeight: "600", color: "black", fontSize: "20px", marginTop: "10px"}}>Khóa học online</span>
                    </NavLink>
                  </Row>
                  <Row style = {{marginTop: "15px"}}>
              
                    <NavLink to = '/coursePost' style = {{textDecoration: "none"}}>
                      <RiPencilLine style = {{marginTop: "-3px", marginRight: "5px", marginLeft: "60px"}} size = {20}/> <span style={{ fontWeight: "600", color: "black", fontSize: "20px" }}>Khóa học đăng tải</span>
                    </NavLink>
                  </Row>
                </Col>
            </Container>
        </>
    )
}

export default Sidebar;