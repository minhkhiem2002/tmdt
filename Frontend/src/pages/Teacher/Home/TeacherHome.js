import React, {useState} from 'react';
import Header from '../../../components/Header/Header';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Card,Modal, Form, Button, } from "react-bootstrap";
import { FcVideoCall } from "react-icons/fc";
import { FcAddImage } from "react-icons/fc";
import { FcSmartphoneTablet } from "react-icons/fc";

const TeacherHome = () => {
    const [showBox, setShowBox] = useState(false);
    const [showTeacher, setShowTeacher] = useState(false);
    const [posts, setPosts] = useState([]);
    const [subject, setSubject] = useState("");
    const [method, setMethod] = useState("");
    const [location, setLocation] = useState("");
    const [requirements, setRequirements] = useState("");
    const [salary, setSalary] = useState("");

    const handleShowBox = () => {
        setShowBox(!showBox);
    }
    const handleShowTeacher = () => {
        setShowTeacher(!showTeacher);
    }

    const handlePost = () => {
        if (
            subject.trim() !== "" &&
            method.trim() !== "" &&
            location.trim() !== "" &&
            requirements.trim() !== "" &&
            salary.trim() !== ""
        ) {
            const newPost = {
                subject,
                method,
                location,
                requirements,
                salary,
            };

            setPosts([newPost, ...posts]);
            setSubject("");
            setMethod("");
            setLocation("");
            setRequirements("");
            setSalary("");
            setShowBox(false);
        }
    }

    return (
        <>
            <Header/>
            <Container fluid style = {{backgroundColor: "#f1f7f7", height: "100vh"}}>
                <Row>
                    <Col xs = {2} style = {{marginLeft: "10px", marginTop: "20px"}}>
                        <div style = {{border: "1px solid grey", borderRadius: "30px", borderTop: "none",backgroundColor: "white"}}>
                            <div style = {{backgroundColor: "lightblue", borderRadius: "20px", height: "40px"}}>
                                <p style = {{textAlign: "center"}}>Tìm kiếm gia sư</p>
                            </div>
                            <div style = {{textAlign: "center" }}>
                                <p>Gia sư Teacher</p>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Thủ Đức</p>
                            </div>
                        </div>
                        <div style = {{border: "1px solid grey", borderRadius: "30px", marginTop: "15px", borderTop: "none", backgroundColor: "white"}}>
                            <div style = {{backgroundColor: "lightblue", borderRadius: "20px", height: "40px"}}>
                                <p style = {{textAlign: "center"}}>Tìm kiếm gia sư</p>
                            </div>
                            <div style = {{textAlign: "center"}}>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Thủ Đức</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs = {6}>
                        <Container style = {{marginLeft: "120px", marginTop: "20px"}}>
                            <Col>
                                <Row style = {{height: "120px", marginBottom: "20px", backgroundColor: "white", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", borderRadius: "15px"}}>
                                    <Row style = {{height: "30px"}}>

                                        <Col xs = {2}>
                                            <img 
                                                src = "https://iweb.tatthanh.com.vn/pic/3/blog/images/image(757).png"
                                                alt = "image"
                                                width = "40px"
                                                height= "40px"
                                                style = {{borderRadius: "20px", marginTop: "10px", marginLeft: "5px"}}
                                            />
                                        </Col>
                                        <Col xs = {10}>
                                        <div
                                            onClick={handleShowBox}
                                            style={{
                                                backgroundColor: "#f1f7f7",
                                                cursor: "pointer",
                                                height: "40px",
                                                marginTop: "0px",
                                                borderRadius: "20px",
                                                width: "635px",
                                                marginLeft: "-60px",
                                                lineHeight: "40px", 
                                                paddingLeft: "15px",
                                                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"

                                            }}
                                        >
                                            <p style={{ textAlign: "start", marginTop: "10px", fontFamily: "sans-serif", fontWeight: "600", color: "#918e8e" }}>Đăng bài tuyển gia sư</p>
                                        </div>

                                            <Modal show={showBox} onHide={handleShowBox}>
                                                <Modal.Header closeButton>
                                                    <Modal.Title style = {{display: "flex"}}>
                                                        <img 
                                                            src = "https://cdn.vatgia.com/pictures/thumb/w500/2013/09/fls1380328738.png"
                                                            alt = "image"
                                                            width = "40px"
                                                            height= "40px"
                                                            style = {{borderRadius: "20px", marginTop: "10px", marginLeft: "5px"}}
                                                        />
                                                        <p style = {{fontFamily: "sans-serif", fontWeight: "600", marginTop: "13px", marginBottom: "-13px", marginLeft: "120px"}}>
                                                            Tạo bài viết
                                                        </p>
                                                    </Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                        <Form>
                                                            <Form.Group controlId="subject" style = {{display: "flex"}}>
                                                                <p style = {{fontFamily: "sans-serif", fontWeight: "600",marginTop: "10px", marginRight: "10px"}}>Môn</p>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Nhập môn"
                                                                    style = {{height: "40px", width: "380px", marginLeft: "45px"}}
                                                                    value={subject}
                                                                    onChange={(e) => setSubject(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group controlId="method" style = {{display: "flex"}}>
                                                                <p style = {{fontFamily: "sans-serif", fontWeight: "600",marginTop: "10px", marginRight: "10px"}}>Hình Thức</p>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Nhập hình thức"
                                                                    style = {{height: "40px", width: "390px", marginTop: "10px"}}
                                                                    value={method}
                                                                    onChange={(e) => setMethod(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group controlId="location" style = {{display: "flex"}}>
                                                                <p style = {{fontFamily: "sans-serif", fontWeight: "600",marginTop: "0px", marginRight: "10px"}}>Địa điểm</p>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Nhập địa điểm"
                                                                    style = {{height: "40px", width: "460px", marginLeft: "25px"}}
                                                                    value={location}
                                                                    onChange={(e) => setLocation(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group controlId="requirements" style = {{display: "flex"}}>
                                                                <p style = {{fontFamily: "sans-serif", fontWeight: "600",marginTop: "0px", marginRight: "10px"}}>Yêu cầu</p>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Nhập yêu cầu"
                                                                    style = {{height: "40px", width: "520px", marginLeft: "35px"}}
                                                                    value={requirements}
                                                                    onChange={(e) => setRequirements(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                            <Form.Group controlId="salary" style = {{display: "flex"}}>
                                                                <p style = {{fontFamily: "sans-serif", fontWeight: "600",marginTop: "10px", marginRight: "10px"}}>Lương</p>
                                                                <Form.Control
                                                                    type="text"
                                                                    placeholder="Nhập lương"
                                                                    style = {{height: "40px", width: "450px", marginLeft: "25px"}}
                                                                    value={salary}
                                                                    onChange={(e) => setSalary(e.target.value)}
                                                                />
                                                            </Form.Group>
                                                        </Form>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                       
                                                        <Button variant="primary" style = {{width: "100%"}} onClick={handlePost}>
                                                            Đăng bài
                                                        </Button>
                                                    </Modal.Footer>
                                                </Modal>
                                        </Col>
                                    </Row>
                                    <hr style = {{width: "96%", textAlign: "center", marginLeft: "2%", marginTop: "25px"}}/>
                                    <Row style = {{marginTop: "-20px"}}>
                                        <Col xs = {3} style = {{display: "flex", marginLeft: "30px"}}>
                                            <FcVideoCall size = {35}/>
                                            <span style = {{marginTop:"5px",marginLeft:"1px",fontFamily: "sans-serif", fontSize: "16px", fontWeight: "600", color: "#747171"}}>Video trực tiếp</span>
                                        </Col>
                                        <Col xs = {3} style = {{display: "flex", marginLeft: "50px"}}>
                                            <FcAddImage size = {35}/>
                                            <span style = {{marginTop:"5px",marginLeft:"5px",fontFamily: "sans-serif", fontSize: "16px", fontWeight: "600", color: "#747171"}}>Ảnh / Video</span>
                                        </Col>
                                        <Col xs = {3} style = {{display: "flex", marginLeft: "50px"}}>
                                            <FcSmartphoneTablet size = {35}/>
                                            <span style = {{marginTop:"5px",marginLeft:"5px",fontFamily: "sans-serif", fontSize: "16px", fontWeight: "600", color: "#747171"}}>Liên lạc</span>
                                        </Col>
                                    </Row>
                                </Row>
                                <Row style = {{marginTop: "20px"}}>
                                            {posts.map((post, index) => (
                                                <Card key={index} style={{ marginBottom: "10px", marginTop: "10px", backgroundColor: "white", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", borderRadius: "15px"}}>
                                                    <Card.Header style = {{display: "flex"}}>
                                                            <img 
                                                                    src = "https://cdn.vatgia.com/pictures/thumb/w500/2013/09/fls1380328738.png"
                                                                    alt = "image"
                                                                    width = "80px"
                                                                    height= "80px"
                                                                    style = {{borderRadius: "40px", marginTop: "0px", marginLeft: "0px"}}
                                                            />
                                                                <div style = {{display: "flex", flexDirection: "column", marginTop: "10px", marginBottom: "-10px"}}>

                                                                    <p style = {{marginBottom: "0px", fontFamily: "sans-serif", fontSize: "26px", fontWeight: "600"}}>Phụ Huynh</p>
                                                                    
                                                                    <div style = {{display: "flex", flexDirection: "row"}}>
                                                                        <p>Contact: 01234567</p>
                                                                        <p style = {{marginLeft: "20px"}}>8 giờ</p>
                                                                    </div>
                                                                </div>
                                                    </Card.Header>
                                                    <Card.Body>
                                                        <Container>
                                                            <Row>
                                                                <Col xs = {3}>
                                                                <p>Môn: </p>
                                                                <p>Hình Thức: </p>
                                                                <p>Địa Điểm: </p>
                                                                <p>Yêu Cầu: </p>
                                                                <p>Lương: </p>
                                                                </Col>
                                                                <Col xs = {9}>
                                                                <p>{post.subject}</p>
                                                                <p>{post.method}</p>
                                                                <p>{post.location}</p>
                                                                <p>{post.requirements}</p>
                                                                <p>{post.salary}</p>
                                                                </Col>
                                                            </Row>
                                                     
                                                        </Container>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <Container>
                                                            <Col>
                                                                <Button onClick={handleShowTeacher}>Đã liên hệ</Button>
                                                            </Col>
                                                            <Modal show={showTeacher} onHide={handleShowTeacher}>
                                                                <Modal.Header>
                                                                    <p>Danh sách giáo viên đăng ký</p>
                                                                </Modal.Header>
                                                                <Modal.Body>
                                                                    <Container>
                                                                        <Row>
                                                                            <Col xs = {2}>
                                                                                <img 
                                                                                    src = "https://iweb.tatthanh.com.vn/pic/3/blog/images/image(757).png"
                                                                                    alt = "image"
                                                                                    width = "40px"
                                                                                    height= "40px"
                                                                                    style = {{borderRadius: "20px", marginLeft: "5px"}}
                                                                                />
                                                                            </Col>
                                                                            <Col xs = {3}>
                                                                                Thông tin chung
                                                                            </Col>
                                                                            <Col xs = {4}>
                                                                                Thành tích
                                                                            </Col>
                                                                            <Col xs = {3}>
                                                                                <Button className = "w-80 h-60" style = {{textAlign: "center"}}><span style = {{}}>Đồng ý</span></Button>
                                                                            </Col>
                                                                        </Row>
                                                                    </Container>
                                                                </Modal.Body>
                                                            </Modal>
                                                        </Container>
                                                    </Card.Footer>
                                                </Card>
                                            ))}
                                </Row>
                            </Col>
                        </Container>
                    </Col>
                    <Col xs = {2} style = {{marginLeft: "230px", marginTop: "20px"}}>
                        <div style = {{border: "1px solid grey", borderRadius: "30px", borderTop: "none",backgroundColor: "white"}}>
                            <div style = {{backgroundColor: "lightblue", borderRadius: "20px", height: "40px"}}>
                                <p style = {{textAlign: "center"}}>Tìm kiếm gia sư</p>
                            </div>
                            <div style = {{textAlign: "center" }}>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Thủ Đức</p>
                            </div>
                        </div>
                        <div style = {{border: "1px solid grey", borderRadius: "30px", marginTop: "15px", borderTop: "none", backgroundColor: "white"}}>
                            <div style = {{backgroundColor: "lightblue", borderRadius: "20px", height: "40px"}}>
                                <p style = {{textAlign: "center"}}>Tìm kiếm gia sư</p>
                            </div>
                            <div style = {{textAlign: "center"}}>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Thủ Đức</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default TeacherHome;