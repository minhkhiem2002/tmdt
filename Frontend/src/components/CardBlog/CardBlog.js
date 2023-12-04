import React from 'react';
import {Container, Col, Row} from 'react-bootstrap'
import { MdOutlineSaveAlt } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
const CardBlog = () => {
    const fontFamily = "Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol";
    return (
        <>
            <Container style = {{marginTop: "10px", marginBottom: "10px", border: "1px solid gray", borderRadius: "10px"}}>
                    <Col>
                        <Row>
                            
                            <Col xs = {10}>
                                <div style = {{display: "flex"}}>

                                    <img 
                                        src = "https://cf.shopee.vn/file/d6341c6f7781da6aef965612595d0699"
                                        style = {{borderRadius: "10px", marginTop: "5px", width :"40px", height : "40px", borderRadius: "20px"}}
                                    />
                                    <p style = {{fontFamily: fontFamily, fontSize: "18px", fontWeight: "600", marginTop: "10px", marginLeft: "10px"}}>Minh Khiêm</p>
                                </div>
                            </Col>
                            <Col xs = {2}>
                            <MdOutlineSaveAlt size = {20} style = {{marginTop: "10px", marginLeft: "40px"}}/>
                            <HiOutlineDotsHorizontal size = {20} style = {{marginTop: "10px", marginLeft: "10px"}}/>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs = {9}>
                            <p style = {{fontFamily: fontFamily, fontSize: "23px", fontWeight: "600", marginTop: "10px", marginLeft: "10px"}}>Authentication & Authorization trong ReactJS</p>
                        
                            <p style = {{fontFamily: fontFamily, fontSize: "15px", marginTop: "10px", marginLeft: "10px"}}>
                               Authentication và Authorization là một phần quan trọng trong việc phát triển phần mềm, giúp chúng ta xác thực và phân quyền người dùng trước khi cho người dùng truy cập vào tài nguyên của ứng dụng.
Trong bài viết này sẽ hướng dẫn các ReactJS thủ 🤣 cách implement Authentication và Authorization. A chị nào biết rồi giả bộ đọc hết bài viết rồi so sánh với cách đang dùng xem thế nào ha :))
Nẹt bô rồi gẹt gô thôi ReactJS thủ 🤣
                            </p>
                            
                            </Col>
                            <Col>
                            <img 
                                src = "https://files.fullstack.edu.vn/f8-prod/blog_posts/8306/65299d0ce743e.png"
                                width = "150px"
                                height = "150px"
                            />
                            </Col>
                        </Row>
                        
                    </Col>
                    
            </Container>
        </>
    )
}

export default CardBlog