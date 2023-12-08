import React, {useState} from 'react';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Header from '../Header/Header';
import { CiSearch } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegFolder } from "react-icons/fa6";
const Elearning = () => {

    return (
        <>
            <Header/>
            <Container fluid style = {{backgroundColor: "#f1f7f7", height: "100vh"}}>
                <Row>
                    <Col xs = {2} style = {{marginLeft: "10px", marginTop: "20px"}}>
                        <div style = {{border: "1px solid grey", borderRadius: "30px", borderTop: "none",backgroundColor: "white", height: "280px"}}>
                            <div style = {{backgroundColor: "lightblue", borderRadius: "20px", height: "40px", display: "flex"}}>
                                <b style = {{textAlign: "center", marginLeft: "40px", marginTop: "8px", marginBottom: "0px"}}>Tiết học hôm nay</b>
                                <CiSearch style = {{marginTop: "10px", marginLeft: "5px", fontWeight: "1000"}} size = {18}/>
                            </div>
                            <div style = {{textAlign: "left", marginLeft: "20px" }}>
                                <b>Ca 7:00 -8:30</b>
                                <p>Toán 10</p>
                                <p>Danh sách thành viên</p>
                                <b>Ca 18:00 - 19:30</b>
                                <p>Toán 12</p>
                                <p>Danh sách thành viên</p>
                            </div>
                        </div>
                        <div style = {{border: "1px solid grey", borderRadius: "30px", borderTop: "none",backgroundColor: "white", marginTop: "-30px"}}>
                            <div style = {{backgroundColor: "lightblue", borderRadius: "20px", height: "40px", display: "flex"}}>
                                <b style = {{textAlign: "center", marginLeft: "40px", marginTop: "8px", marginBottom: "0px"}}>Lịch trình dạy</b>
                                <FaPhoneVolume style = {{marginTop: "10px", marginLeft: "5px", fontWeight: "1000"}} size = {18}/>
                            </div>
                            <div style = {{textAlign: "left", marginLeft: "20px" }}>
                                <b>Thứ 2</b>
                                <p>Toán 11 (7:00 - 8:30)</p>
                                <p>Toán 10 (13:00 - 15:00)</p>
                                <b>Thứ 4</b>
                                <p>Toán 11 (7:00 - 8:30)</p>
                                <p>Toán 10 (13:00 - 15:00)</p>
                                <b>Thứ 6</b>
                                <p>Toán 11 (7:00 - 8:30)</p>
                                <p>Toán 10 (13:00 - 15:00)</p>
                                <b>Thứ 7</b>
                                <p>Toán 11 (7:00 - 8:30)</p>
                                <p>Toán 10 (13:00 - 15:00)</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs = {6}>
                        <Container style = {{marginLeft: "120px", marginTop: "20px"}}>
                            <Col>
                                <Row style = {{marginBottom: "20px", backgroundColor: "white", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", borderRadius: "15px"}}>
                                    
                                    <p style = {{fontSize: "25px",fontWeight: "600"}}>Toán 12 - Buổi 3 - Nhân chia số phức</p>
                                    <p>Lớp 18:00 - 19:30 (40 thành viên)</p>
                                    <p>Link lớp học: <a href = "https://meet.google.com/">https://meet.google.com/</a></p>
                                    <img
                                    src = "https://scontent.fsgn2-11.fna.fbcdn.net/v/t1.15752-9/403612265_644837387725918_3957965860502274501_n.png?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGttTHEPs0BN7rJUkEW9JBoAaJmYsL58V0BomZiwvnxXehZdcveRpz1LQyeV27Z8SQkvcSiaNbzvteAgFL0mbZW&_nc_ohc=PPtRSTTIAhAAX8TEmWM&_nc_oc=AQnviGH5ROmUDxL-NAlPV0OcAhN_qhxfbWr_m6RP2yNkyOwk976JmvqNd0zVjco7KGo&_nc_ht=scontent.fsgn2-11.fna&oh=03_AdSqS3iPN7VtXpTwoNUFBoUplcg58GJnlhHoKv0IHFFiXA&oe=65972F6D"
                                    alt = "meet"
                                    style = {{marginBottom: "20px"}}
                                    />
                                </Row>
                            </Col>
                        </Container>
                    </Col>
                    <Col xs = {2} style = {{marginLeft: "230px", marginTop: "20px"}}>
                    <div style = {{border: "1px solid grey", borderRadius: "30px", borderTop: "none",backgroundColor: "white"}}>
                            <div style = {{backgroundColor: "lightblue", borderRadius: "20px", height: "40px", display: "flex"}}>
                                <b style = {{textAlign: "center", marginLeft: "40px", marginTop: "8px", marginBottom: "0px"}}>Lịch trình dạy</b>
                                <FaRegFolder style = {{marginTop: "10px", marginLeft: "5px", fontWeight: "1000"}} size = {18}/>
                            </div>
                            <div style = {{textAlign: "left", marginLeft: "20px", marginRight: "15px" }}>
                                <b>Toán 12 - Buổi 3</b>
                                <p>Làm trắc nghiệm ôn tập phép cộng, trừ số phức - làm trắc nghiệm</p>
                                <p>Giới thiệu các khái niệm cơ bản phép nhân/chia số phức</p>
                                <p>Làm bài tập ví dụ</p>
                                <p>Ôn tập tổng kết bài học</p>
                                <b>Toán 12 - Buổi 4</b>
                                <p>Làm trắc nghiệm ôn tập phép cộng, trừ số phức - làm trắc nghiệm</p>
                                <p>Giới thiệu các khái niệm cơ bản phép nhân/chia số phức</p>
                                <p>Làm bài tập ví dụ</p>
                                <p>Ôn tập tổng kết bài học</p>
                                <b>Toán 12 - Buổi 5</b>
                                <p>Làm trắc nghiệm ôn tập phép cộng, trừ số phức - làm trắc nghiệm</p>
                                
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Elearning;