import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header/Header';
import CarouselComponent from '../../../components/CarouselComponent/CarouselComponent';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import CardCourse from '../../../components/CardCourse/CardCourse';
import Footer from '../../../components/Footer/Footer';
import axios from 'axios';

const UserCourseOnline = () => {
  const [data1, setData1] = useState([""]);
  const [hasFetchedData, setHasFetchedData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/teacher/getAllCourse`);
        if (response.data.status === 200) {
          setData1(response.data.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (err) {
        console.error(err);
      }
    };
  
    fetchData();
  }, []); // Chỉ gọi một lần khi component mount
  
  useEffect(() => {
    console.log("Data is", data1);
  }, [data1]);
  return (
    <Container fluid style={{ height: "100vh", backgroundColor: "#f1f7f7" }}>
      <Header />
      <CarouselComponent />
      <div style={{ display: "flex", marginLeft: "150px", marginTop: "20px" }}>
        <span style={{ fontFamily: "initial", fontSize: "22px", fontWeight: "900" }}>Khóa học hiện có</span>
        <img
          src="https://bachkhoacncp.com/static/media/hot.de77e6ee742583f71c78.gif"
          width="25px"
          height="25px"
        />
      </div>
      <Container style={{ width: "80%", height: "550px" }}>
        <Row>
        {Array.isArray(data1) ? (
          data1.map((item, index) => {
            console.log("Item", item);
            return (
              <Col key={index} md={3}>
                <CardCourse data={item} />
              </Col>
            );
          })
        ) : (
          <p>Data is not an array</p>
        )}
        </Row>
      </Container>
      <Footer />
    </Container>
  );
};

export default UserCourseOnline;
