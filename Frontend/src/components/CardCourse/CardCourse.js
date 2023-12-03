import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './CardCourse.scss'

const CardCourse = ({ data }) => {
  console.log("Data get",data)
    const navigate = useNavigate();
    const handleDetailClick = () => {
      navigate(`/onlinecourses/${data.name}`, { state: { courseName: data.name } });
    };
  return (
    <Container fluid style={{ marginTop: "20px", marginLeft: "-20px", marginBottom: "10px" }}>
      <Row>
        <div className="course-card" style={{ borderRadius: "10px" }}>
          <img
            src={data.image}
            alt="CourseOnline"
            width="260px"
            height="150px"
            className="course-image"
          />
          <div className="overlay">
            <button className="detail-button" onClick={handleDetailClick}><span style={{ fontFamily: "-moz-initial", fontWeight: "500" }}>Xem chi tiết</span></button>
          </div>
        </div>
      </Row>
      <Row>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "0px" }}>
          <span style={{ fontFamily: "-moz-initial", fontSize: "18px", fontWeight: "700" }}>{data.name}</span>
          <span style={{ fontFamily: "-moz-initial" }}><s>1500000VNĐ</s> <span style={{ color: "#e27631", fontWeight: "600" }}>{data.price} VNĐ</span></span>
        </div>
      </Row>
    </Container>
  );
};

export default CardCourse;
