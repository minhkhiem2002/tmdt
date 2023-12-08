import React, { useState,useCallback,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios'
import './CardTeacher.scss'
import { GiRoundStar } from "react-icons/gi";
// import "antd/dist/antd.css"; 
import { Switch } from 'antd'; 

const CardTeacher = () => {
    const userId = localStorage.getItem("userId");
    const role = localStorage.getItem("role");
    const [imgURL, setImgURL] = useState("");
    const [data, setData] = useState({})
    const fetchData = useCallback(async () => {
        try {
            if (userId) {
                const apiURL = `http://localhost:3001/api/user/get-detail/${userId}`;
                const res = await axios.get(apiURL);
  
                if (res) {
                    console.log("Avatar",res.data.data.avatar)
                    setData(res?.data.data)
                    setImgURL(res?.data.data.avatar);
                }
            }
        } catch (error) {
            console.log("error fetching", error);
        }
    }, [userId]);
    useEffect(() => {
      fetchData();
  }, [fetchData]);
  console.log("Teacher",data)
  const [checked, setChecked] = useState(false);

  const [currentValue, setCurrentValue] = useState(false) 
  return (
    <>
    <Container>
      <Row>
        <Col xs = {2}>
          <img
            src = {imgURL}
            alt = "teacherimage"
            width = "50px"
            height = "50px" 
            style = {{borderRadius: "25px", marginLeft: "5px", marginTop: "5px"}}
          />
        </Col>
        <Col xs = {8}>
            <p style = {{fontFamily : "-moz-initial", fontWeight: "600", marginTop: "5px", fontSize: "20px", marginLeft: "-20px"}}>{data.name}</p>
            <p style = {{fontFamily : "-moz-initial", fontWeight: "400", marginTop: "-20px", fontSize: "16px", marginLeft: "-20px"}}>Trạng thái:    &nbsp; <Switch size = {18} onChange={(value) => { 
          setCurrentValue(value) 
        }} /></p>
          </Col>
        <Col xs = {2}>
          <p style = {{marginTop: "5px", marginLeft: "20px"}}>ID: #1</p>
        </Col>
      </Row>
      <Row>
        <Col xs = {2}>
          <Row style = {{marginTop :"20px"}}> <p style = {{fontFamily : "-moz-initial", fontWeight: "600", marginTop: "5px", fontSize: "16px"}}> Đánh giá</p></Row>
          <Row> <p style = {{fontFamily : "-moz-initial", fontWeight: "600", marginTop: "5px", fontSize: "16px"}}> Giải thưởng </p></Row>
        </Col>
        <Col xs = {4}>
          <Row>
            <p style = {{marginLeft: "60px", fontFamily : "-moz-initial", fontWeight: "600",fontSize: "16px"}}>Nổi bật</p>
          </Row>
          <Row style = {{marginTop: "-15px", marginBottom: "20px"}}>
                <Col> <GiRoundStar style = {{color: "orange"}}/></Col>  
                <Col style = {{marginLeft: "-30px"}}> <GiRoundStar style = {{color: "orange"}}/></Col> 
                <Col style = {{marginLeft: "-30px"}}> <GiRoundStar style = {{color: "orange"}}/></Col> 
                <Col style = {{marginLeft: "-30px"}}> <GiRoundStar style = {{color: "orange"}}/></Col> 
                <Col style = {{marginLeft: "-30px"}}> <GiRoundStar style = {{color: "orange"}}/></Col> 
          </Row>
          <Row>
            <p>Gia sư xuất sắc tháng 10</p>
          </Row>
        </Col>
        <Col xs = {2}>
          <Row style = {{marginTop :"20px"}}> <p style = {{fontFamily : "-moz-initial", fontWeight: "600", marginTop: "5px", fontSize: "16px"}}> Môn</p></Row>
          <Row> <p style = {{fontFamily : "-moz-initial", fontWeight: "600", marginTop: "5px", fontSize: "16px"}}> Lớp </p></Row>
          <Row> <p style = {{fontFamily : "-moz-initial", fontWeight: "600", marginTop: "5px", fontSize: "16px"}}> Hình Thức </p></Row>
        </Col>
        <Col xs = {4}>
           <Row>
            <p style = {{marginLeft: "50px", fontFamily : "-moz-initial", fontWeight: "600",fontSize: "16px"}}>Thông tin cơ bản</p>
          </Row>
          <Row style = {{marginTop: "-15px", marginLeft: "40px"}}>
            <p style = {{marginBottom: "20px"}}>Toán, Lý, Hóa</p>
            <p style = {{marginBottom: "20px"}}>10, 11, 12</p>
            <p>Online / Offline</p>
          </Row>
        </Col>
      </Row>
    </Container>
    </>

  );
};
export default CardTeacher;