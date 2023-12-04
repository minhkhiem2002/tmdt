import React from 'react'
import {Container, Col, Row, Button} from 'react-bootstrap'
import Header from "./../Header/Header";
import Footer from "./../Footer/Footer";
import CardBlog from '../CardBlog/CardBlog';
const Blog = () => {
    const fontFamily = "Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol";
    return (
        <>
            <Header/>
                <Container fluid style = {{width: "80%", marginLeft: "10%", marginBottom: "30px"}}>
                    <Row>
                        <Col xs = {8}>
                            <Row>
                                <p style = {{fontFamily: fontFamily, fontSize: "28px", fontWeight: "800", marginTop: "20px"}}>Bài viết nổi bật</p>
                                <br/>
                                <p style = {{fontFamily: fontFamily, fontSize: "18px", fontWeight: "300", marginTop: "-10px"}}>
                                    Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học tập, phân bổi thời gian và chế độ nghỉ ngơi.
                                </p>
                            </Row>
                            <CardBlog/>
                            <CardBlog/>
                        </Col>
                        <Col xs = {4}>
                        <p style = {{fontFamily: fontFamily, fontSize: "20px", fontWeight: "400", marginTop: "67px"}}>Các chủ đề được đề xuất</p>
                        <Button style = {{backgroundColor: "#d1cfcd", border: "none", color: "black", borderRadius: "10px"}}>Frontend/Backend apps</Button>
                        <Button style = {{backgroundColor: "#d1cfcd", border: "none", color: "black", borderRadius: "10px", marginLeft: "10px"}}>UI/UI Design</Button>
                        <Button style = {{backgroundColor: "#d1cfcd", border: "none", color: "black", borderRadius: "10px", marginTop: "10px"}}>Backend DevOps</Button>
                        <Button style = {{backgroundColor: "#d1cfcd", border: "none", color: "black", borderRadius: "10px", marginLeft: "10px", marginTop: "10px"}}>Others</Button>
                        </Col>
                    </Row>
                </Container>
            <Footer/>
        </>
        
    )
}

export default Blog