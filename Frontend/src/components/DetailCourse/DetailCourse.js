import React, {useState, useEffect} from "react";
import { Container, Row, Col } from 'react-bootstrap';
import dataCourse from '../../data/data.json';
import Header from "../Header/Header";
import { Button } from "react-bootstrap";
import { BsPlayCircleFill } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
import axios from 'axios'

const DetailCourse = () => {
    const fontFamily = "Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol";
    const data = dataCourse.data[0];
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [isMenu1Open, setIsMenu1Open] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleMenu1 = () => {
        setIsMenu1Open(!isMenu1Open);
    };

    const [courseDetails, setCourseDetails] = useState(null);

    // Lấy location state từ useLocation
    const location = useLocation();
    const courseName = location.state?.courseName;

    useEffect(() => {
        if (courseName) {
            const fetchCourseDetails = async () => {
                try {
                    const response = await axios.get(`http://localhost:3001/api/teacher/getDetailsCourse/${courseName}`);
                    console.log('Response:', response.data);
                    setCourseDetails(response.data);
                } catch (error) {
                    console.error('Error fetching course details:', error);
                }
            };
    
            fetchCourseDetails();
        }
    }, [courseName]);
    const [paymentUrl, setPaymentUrl] = useState(null);

    useEffect(() => {
        // Kiểm tra xem đã có URL thanh toán hay chưa
        if (paymentUrl) {
            window.location.href = paymentUrl;
        }
    }, [paymentUrl]);

    const handlePayment = async () => {
        try {
            console.log("Course Details",courseDetails)
            if (!courseDetails) {
                console.error("No course details available");
                return;
            }

            // Kiểm tra xem đã có URL thanh toán hay chưa
            if (paymentUrl) {
                window.location.href = paymentUrl;
                return;
            }

            // Gọi API thanh toán tại endpoint /payment/initiate-payment
            const response = await axios.post("http://localhost:3001/api/payment/initiate-payment", {
                amount: courseDetails.data.price,
            });

            // Kiểm tra response từ server
            if (response.data && response.data.payUrl) {
                // Nếu thành công, setPaymentUrl để chuyển hướng trình duyệt đến trang thanh toán
                setPaymentUrl(response.data.payUrl);
            } else {
                console.error("Failed to initiate payment");
            }
        } catch (error) {
            console.error("Error initiating payment:", error);
        }
    };
    console.log("Detail: ",courseDetails)
    return (
        <>
            <Header/>
            <Container fluid style={{ width: "80%", marginLeft: "10%", marginTop: "20px", fontFamily: fontFamily }}>
                <Row>
                    <Col xs={9} style={{ display: "flex", flexDirection: "column" }}>
                    {courseDetails && (
                            <span style={{ fontSize: "30px", fontWeight: "800" }}>
                                Lớp dạy cấp tốc giữa kì {courseDetails.data.name}
                            </span>
                        )}

                        <span>Người dạy là trường Bách Khoa, hiện tại đang là trường Đại học về Kỹ Thuật uy tín bậc nhất miền Nam nên các bạn cứ yên tâm về chất lượng nhé !</span>
                        <span style={{ fontSize: "23px", fontWeight: "700" }}>Đối tượng tham gia</span>
                        <span>Sinh viên đại trà, chất lượng cao, Việt Pháp của Đại Học Bách Khoa HCM. Ngoài ra, sinh viên Bách Khoa Đà Nẵng, KHTN và 1 số trường giống chương trình.</span>
                        <Container style = {{marginLeft: "-15px", marginTop: "15px"}}>
                        <span style={{ fontSize: "23px", fontWeight: "700" }}>Thông tin khóa học</span>
                            <Row>
                                <Col style = {{display: "flex", flexDirection: "column"}}>
                                    <span style = {{display: "flex", flexDirection: "row"}}>

                                    <TiTick size = {20} style = {{color: "#f69432"}}/> <p>Dạy qua video </p>
                                    </span>
                                    <span style = {{display: "flex", flexDirection: "row"}}>

                                    <TiTick size = {20} style = {{color: "#f69432"}}/> <p>Kiến thức không đổi qua các kì </p>
                                    </span>
                                    <span style = {{display: "flex", flexDirection: "row"}}>

                                    <TiTick size = {20} style = {{color: "#f69432"}}/> <p>Tài liệu để các bạn học vượt</p>
                                    </span>
                                </Col>
                                <Col>
                                    <span style = {{display: "flex", flexDirection: "row"}}>

                                    <TiTick size = {20} style = {{color: "#f69432"}}/> <p>Sinh viên Bách Khoa HCM và các trường khác.</p>
                                    </span>
                                    <span style = {{display: "flex", flexDirection: "row"}}>

                                    <TiTick size = {20} style = {{color: "#f69432"}}/> <p>Tặng BTL các môn đại cương</p>
                                    </span>
                                    <span style = {{display: "flex", flexDirection: "row"}}>

                                    <TiTick size = {20} style = {{color: "#f69432"}}/> <p>Lý thuyết, bài tập, ôn tập, luyện đề, thi thử</p>
                                    </span>
                                </Col>
                            </Row>
                        </Container>
                        <Container > 
                            <span style={{ fontSize: "23px", fontWeight: "700" }}>Nội dung học</span>
                            <br/>
                            <i style = {{color: "#f69432"}}>Lưu ý, thứ tự và nội dung học có thể thay đổi để phù hợp với đề thi HK231</i>
                            <br/>
                            <button 
                                onClick={toggleMenu} 
                                style = {{width: "800px", display: "flex", justifyContent: "flex-start", alignItems: "center", border: "1px solid grey", borderRadius: "15px"}}
                            >
                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px"}}>-</span><span style = {{alignItems: "left",  fontFamily: fontFamily}}>1. Lịch học Học kì 1</span>

                            </button>
                                {isMenuOpen && (
                                    <ol>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 1: Chương 1_Chuyển động thẳng đều, thẳng biến đổi đều</span>
                                            </div>
                                            <hr style = {{color: "gray", marginTop: "5px", marginBottom: "2px", width: "95%"}}/>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 2: Chương 1_Ném xiên</span>
                                            </div>
                                            <hr style = {{color: "gray", marginTop: "5px", marginBottom: "2px", width: "95%"}}/>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 3: Chương 1_Chuyển động tròn, cộng vận tốc</span>
                                            </div>
                                            <hr style = {{color: "gray", marginTop: "5px", marginBottom: "2px", width: "95%"}}/>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 4: Chương 2_Các định luật Newton</span>
                                            </div>
                                            <hr style = {{color: "gray", marginTop: "5px", marginBottom: "2px", width: "95%"}}/>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 5: Chương 2_Bài tập định luật Newton, lực quán tính</span>
                                            </div>
                                            <hr style = {{color: "gray", marginTop: "5px", marginBottom: "2px", width: "95%"}}/>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 7: Chương 3_Khối tâm, momen quán tính</span>
                                            </div>
                                            <hr style = {{color: "gray", marginTop: "5px", marginBottom: "2px", width: "95%"}}/>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 8: Chương 3_Momen lực, momen động lượng, va chạm</span>
                                            </div>
                                            <hr style = {{color: "gray", marginTop: "5px", marginBottom: "2px", width: "95%"}}/>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 9: Ôn tập chương 1, 2</span>
                                            </div>
                                            <hr style = {{color: "gray", marginTop: "5px", marginBottom: "2px", width: "95%"}}/>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 10: Ôn tập chương 3</span>
                                            </div>
                                    </ol>
                                )}
                                <button 
                                onClick={toggleMenu1} 
                                style = {{width: "800px", display: "flex", justifyContent: "flex-start", alignItems: "center", border: "1px solid grey", borderRadius: "15px"}}
                            >
                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px"}}>-</span><span style = {{alignItems: "left",  fontFamily: fontFamily}}>2. Lịch học Học kì 2</span>

                            </button>
                                {isMenu1Open && (
                                    <ol>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 11: Chương 4_Phương trình trạng thái khí, các đẳng quá trình</span>
                                            </div>
                                            <hr style = {{color: "gray", marginTop: "5px", marginBottom: "2px", width: "95%"}}/>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 12: Chương 4 + Chương 5_Nội năng, nguyên lý 1</span>
                                            </div>
                                            <hr style = {{color: "gray", marginTop: "5px", marginBottom: "2px", width: "95%"}}/>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 13: Chương 5_Máy nhiệt, entropy</span>
                                            </div>
                                            <hr style = {{color: "gray", marginTop: "5px", marginBottom: "2px", width: "95%"}}/>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 14: Chương 6_Điện tích điểm, lưỡng cực điện</span>
                                            </div>
                                            <hr style = {{color: "gray", marginTop: "5px", marginBottom: "2px", width: "95%"}}/>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 15: Đại số tuyến tính</span>
                                            </div>
                                            <hr style = {{color: "gray", marginTop: "5px", marginBottom: "2px", width: "95%"}}/>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 16: Chương 6_Điện thế, gauss</span>
                                            </div>
                                            <hr style = {{color: "gray", marginTop: "5px", marginBottom: "2px", width: "95%"}}/>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 17: Chương 6 + Chương 7_Bài tập điện thế, gauss, vật dẫn</span>
                                            </div>
                                            <hr style = {{color: "gray", marginTop: "5px", marginBottom: "2px", width: "95%"}}/>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 21: Ôn tập chương 4, 5</span>
                                            </div>
                                            <hr style = {{color: "gray", marginTop: "5px", marginBottom: "2px", width: "95%"}}/>
                                            <div>
                                                <span style = {{color: "#f69432", fontWeight: "700", width: "20px", marginRight: "10px"}}>+</span><span style = {{alignItems: "left",  fontFamily: fontFamily, fontSize: "14px"}}>Buổi 22: Ôn tập chương 6, 7</span>
                                            </div>
                                    </ol>
                                )}
                        </Container>
                        <Container style = {{height: "100px"}}>
                            <span style={{ fontSize: "23px", fontWeight: "700" }}>Ưu đãi đăng ký sớm</span>
                            <br/>
                            <i style = {{color: "#f69432"}}>Tặng một khóa học lập trình Matlab cho tân sinh viên. Đây là kiến thức mà các bạn sinh viên đều phải biết khi học các môn đại cương</i>
                        </Container>
                    </Col>
                    <Col xs={3}>
                        {courseDetails && (
                        <div style={{ position: "relative"}}>
                            <img
                                src={courseDetails.data.image}
                                alt="details"
                                width="350px"
                                height="200px"
                                style={{ borderRadius: "20px", zIndex: "0",filter: "brightness(70%)"  }}
                            />
                            <BsPlayCircleFill style={{ position: "absolute", top: "40%", left: "55%", fontSize: "3em", color: "white", zIndex: "1" }} />
                        </div>)}
                        <Container >
                        {courseDetails && (
               
                                    <p style = {{marginLeft: "100px",alignItems: "left",fontWeight: "600",  fontFamily: fontFamily, fontSize: "16px", marginTop: "5px"}}>Giá Khóa Học: {courseDetails.data.price} VNĐ</p>
                      
                        )}
                            <Button onClick={handlePayment} style = {{marginLeft: "100px", marginTop: "0px"}}>Mua Ngay</Button>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    );
};

export default DetailCourse;
