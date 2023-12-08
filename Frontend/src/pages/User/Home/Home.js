import React, {useState, useCallback, useEffect} from 'react';
import Header from '../../../components/Header/Header';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Card,Modal, Form, Button, } from "react-bootstrap";
import { FcVideoCall } from "react-icons/fc";
import { FcAddImage } from "react-icons/fc";
import { FcSmartphoneTablet } from "react-icons/fc";
import axios from 'axios'
import { CiSearch } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
const UserHome = () => {
    const navigate = useNavigate()
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
    const fetchData = useCallback(async () => {
        try {
                const response = await axios.get(`http://localhost:3001/api/teacher/getAllCoursePosts`);
                    console.log("Courses",response.data)
                    if (response) {
                    setPosts(response.data.allCoursePosts);
                    } else {
                    console.error('Failed to fetch data');
                    }
            
        } catch (error) {
            console.log("error fetching", error);
        }
    }, []);
    useEffect(() => {
      fetchData();
  }, [fetchData]);
  const showTeacherInfo = () => {
        navigate('/teacherInfo')
  }
    return (
        <>
            <Header/>
            <Container fluid style = {{backgroundColor: "#f1f7f7", height: "140vh"}}>
                <Row>
                <Col xs = {2} style = {{marginLeft: "10px", marginTop: "20px"}}>
                        <div style = {{border: "1px solid grey", borderRadius: "30px", borderTop: "none",backgroundColor: "white"}}>
                            <div style = {{backgroundColor: "lightblue", borderRadius: "20px", height: "40px", display: "flex"}}>
                            <b style = {{textAlign: "center", marginLeft: "50px", marginTop: "8px", marginBottom: "0px"}}>Tìm kiếm gia sư</b>
                                <CiSearch style = {{marginTop: "10px", marginLeft: "5px", fontWeight: "1000"}} size = {18}/>
                            </div>
                            <div style = {{textAlign: "center" , marginBottom: "40px" }}>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Quận 2</p>
                                <p>Gia sư Quận 1</p>
                                <p>Gia sư Quận 5</p>
                                <p>Gia sư Quận 9</p>
                            </div>
                        </div>
                        <div style = {{border: "1px solid grey", borderRadius: "30px", marginTop: "-30px", borderTop: "none", backgroundColor: "white"}}>
                            <div style = {{backgroundColor: "lightblue", borderRadius: "20px", height: "40px", display: "flex"}}>
                            <b style = {{textAlign: "center", marginLeft: "40px", marginTop: "8px", marginBottom: "0px"}}>Đăng ký làm gia sư</b>
                                <IoPersonAdd style = {{marginTop: "10px", marginLeft: "5px", fontWeight: "1000"}} size = {18}/>
                            </div>
                            <div style = {{textAlign: "center", marginBottom: "40px"}}>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Quận 2</p>
                                <p>Gia sư Quận 1</p>
                                <p>Gia sư Quận 5</p>
                                <p>Gia sư Quận 19</p>
                            </div>
                        </div>
                        <div style = {{border: "1px solid grey", borderRadius: "30px", marginTop: "-30px", borderTop: "none", backgroundColor: "white"}}>
                            <div style = {{backgroundColor: "lightblue", borderRadius: "20px", height: "40px", display: "flex"}}>
                            <b style = {{textAlign: "center", marginLeft: "50px", marginTop: "8px", marginBottom: "0px"}}>Hỗ trợ nhanh</b>
                                <FaPhoneVolume style = {{marginTop: "10px", marginLeft: "10px", fontWeight: "1000"}} size = {18}/>
                            </div>
                            <div style = {{textAlign: "center"}}>
                                <p>Gia sư Thủ Đức</p>
                                <p>Gia sư Quận 2</p>
                                <p>Gia sư Quận 1</p>
                                <p>Gia sư Quận 5</p>
                                <p>Gia sư Quận 19</p>
                            </div>
                            <div style = {{backgroundColor: "green", borderRadius: "20px", height: "40px"}}>
                                <p style = {{textAlign: "center", color : "white", paddingTop: "10px", fontWeight: "600"}}>Có thể bạn quan tâm</p>
                            </div>
                            <div style = {{textAlign: "center"}}>
                                <img
                                    src = "https://88mobile.vn/wp-content/uploads/2023/09/Plus.png"
                                    alt = "quangcao"
                                    width = "150px"
                                    height = "150px"
                                    style = {{marginTop: "10px", borderRadius :"10px", marginBottom: "10px"}}
                                />
                                <p style = {{width: "80%", marginLeft: "10%"}}>Doulingo</p>
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
                                                                            <Col xs = {2}>
                                                                                teacher
                                                                            </Col>
                                                                            <Col xs = {4}>
                                                                                Gia sư xuất sắc tháng 12
                                                                            </Col>
                                                                            <Col xs = {4}>
                                                                                <Button className = "w-50 h-60" style = {{textAlign: "center", marginRight: "5px", marginLeft: "-5px"}} onClick = {showTeacherInfo}><span style = {{}}>View</span></Button>
                                                                                <Button className = "w-50 h-60" style = {{textAlign: "center"}}><span style = {{}}>Accept</span></Button>
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
                            <div style = {{backgroundColor: "blue", borderRadius: "20px", height: "40px"}}>
                                <b style = {{textAlign: "center", color: "white", paddingTop: "20px", marginLeft: "55px"}}>Gia sư tiêu biểu</b>
                            </div>
                            <div style = {{textAlign: "center" }}>
                            <img
                                    src = "https://storage.timviec365.vn/timviec365/pictures/2023/04/06/avatar239644.jpg"
                                    alt = "giasutieubieu"
                                    width = "150px"
                                    height = "150px"
                                />
                                <p style = {{fontWeight: "600"}}>Lê Minh Khiêm #24</p>
                                <div style = {{display: "flex"}}>
                                    <p style= {{marginLeft: "10px"}}>Đánh giá</p>
                                    <img 
                                        src = "https://scontent.fsgn2-6.fna.fbcdn.net/v/t1.15752-9/400848875_872811920984445_9211097698052232281_n.png?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGR70DLZLgRNHOcDFk14kHJD3OP5dfDRX0Pc4_l18NFfXcF4iinfXneDtTHZGlqXwWVCRq_LevK7WjdzuULJRqt&_nc_ohc=f593h8ZhpCkAX_m7yYM&_nc_ht=scontent.fsgn2-6.fna&oh=03_AdQTmeftY8lq1v8Lyafkivc-ewWYj6w71RBM48RjsXNP-w&oe=6599EF67"
                                        alt = "5sao"
                                        width = "100px"
                                        height = "70px"
                                        style = {{marginTop: "-20px", marginLeft: "50px"}}
                                    />
                                </div>
                                <p style = {{marginTop: "-20px"}}>Chuyên môn &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Toán, Lý ,Hóa</p>
                                <p style = {{marginTop: "-10px", marginBottom: "40px"}}>Cấp dạy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cấp 1,2,3</p>
                            </div>
                        </div>
                        <div style = {{border: "1px solid grey", borderRadius: "30px", marginTop: "-35px", borderTop: "none", backgroundColor: "white"}}>
                            <div style = {{backgroundColor: "orange", borderRadius: "20px", height: "40px"}}>
                                <p style = {{textAlign: "center", color : "white", paddingTop: "10px", fontWeight: "600"}}>Được tài trợ</p>
                            </div>
                            <div style = {{textAlign: "center"}}>
                                <img
                                    src = "https://icdn.dantri.com.vn/thumb_w/640/2018/11/30/s1-15435661311921215420702.png"
                                    alt = "quangcao"
                                    width = "200px"
                                    height = "200px"
                                    style = {{marginTop: "10px", borderRadius :"10px", marginBottom: "10px"}}
                                />
                                <p style = {{width: "80%", marginLeft: "10%"}}>Siêu sale Đại hội sinh nhật tháng 12</p>
                            </div>
                            <div style = {{backgroundColor: "purple", borderRadius: "20px", height: "40px"}}>
                                <p style = {{textAlign: "center", color : "white", paddingTop: "10px", fontWeight: "600"}}>Có thể bạn quan tâm</p>
                            </div>
                            <div style = {{textAlign: "center"}}>
                                <img
                                    src = "https://magiamgia.com/wp-content/uploads/2022/12/Lazada-Sale-12.12.jpg"
                                    alt = "quangcao"
                                    width = "200px"
                                    height = "200px"
                                    style = {{marginTop: "10px", borderRadius :"10px", marginBottom: "10px"}}
                                />
                                <p style = {{width: "80%", marginLeft: "10%"}}>Siêu sale Đại hội sinh nhật tháng 12</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UserHome;