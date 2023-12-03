import React, { useCallback, useEffect, useState } from 'react';
import { Menu, Dropdown } from "antd";
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
import axios from "axios";
import { FaHome, FaChartBar, FaCogs } from 'react-icons/fa';
import { HiHome } from "react-icons/hi2";
import { SiGoogleclassroom } from "react-icons/si";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdPeopleAlt } from "react-icons/md";
import { FaStore } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
import { PiDotsNineBold } from "react-icons/pi";
import './Header.scss'


const Header = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleIconClick = (iconName) => {
        setSelectedIcon(iconName);
    };
    const userId = localStorage.getItem("userId");
    const [imgURL, setImgURL] = useState("");
    const fetchData = useCallback(async () => {
        try {
            if (userId) {
                const apiURL = `http://localhost:3001/api/user/get-detail/${userId}`;
                const res = await axios.get(apiURL);
                console.log("Check avatar",res.data)
                if (res) {
                    console.log("Avatar",res.data.data.avatar)
                    setImgURL(res?.data.data.avatar);
                }
            }
        } catch (error) {
            console.log("error fetching", error);
        }
    }, [userId]);
    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("role");
        localStorage.removeItem("token");
    };
    const menu = (
        <Menu>
            <Menu.Item key="1">
                <Link to="/personalInfo">Thông tin cá nhân</Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/personalInfo/change-passwd">
                    Thay đổi mật khẩu
                </Link>
            </Menu.Item>
            <Menu.Item key="3" onClick={handleLogout} danger>
                <Link to="/login">Đăng xuất</Link>
            </Menu.Item>
        </Menu>
    );
    useEffect(() => {
        fetchData();
    }, [fetchData]);
    return (
        <Container fluid style = {{boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)"}}>
            <Row style = {{width: "100%"}}>
                <Col xs = {1}>
                    <img 
                        src = "https://cdn.vatgia.com/pictures/thumb/w500/2013/09/fls1380328738.png"
                        alt = "Logo"
                        width = "60px"
                        height = "60px"
                    />
                </Col>
                <Col xs = {2}>
                    <div className="search-box-container" style = {{marginTop: "10px", marginLeft: "-30px"}}>
                        <label htmlFor="search box"></label>
                        <input
                            className="box-sides-circled"
                            type="text"
                            name=""
                            placeholder="Search here"
                            id=""
                        />

                    </div>
                </Col>
                <Col xs = {5} style = {{display: "flex"}}>
                    <div
                        style={{
                            width: "100px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            backgroundColor: isHovered1 ? "#f0f0f0" : "transparent",
                            transition: "background-color 0.3s",
                            marginLeft: "45px",
                            borderBottom: "3px solid blue",
                            marginLeft: "100px"
                        }}
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}
                    >
                        <Link className="" to="/" style={{ display: "flex", alignItems: "center" }}>
                            <HiHome color="blue" size={32} style = {{marginTop: "10px"}} />
                        </Link>
                    </div>
                    <div
                        style={{
                            width: "100px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            backgroundColor: isHovered2 ? "#f0f0f0" : "transparent",
                            transition: "background-color 0.3s",
                            marginLeft: "15px",
                        }}
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                    >
                        <Link className="" to="/" style={{ display: "flex", alignItems: "center" }}>
                            <MdOutlineOndemandVideo color="black" size={35} style = {{marginTop: "10px"}} />
                        </Link>
                    </div>
                    <div
                        style={{
                            width: "100px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            backgroundColor: isHovered3 ? "#f0f0f0" : "transparent",
                            transition: "background-color 0.3s",
                            marginLeft: "15px",
                        }}
                        onMouseEnter={() => setIsHovered3(true)}
                        onMouseLeave={() => setIsHovered3(false)}
                    >
                        <Link className="" to="/" style={{ display: "flex", alignItems: "center" }}>
                            <MdPeopleAlt color="black" size={32} style = {{marginTop: "10px"}} />
                        </Link>
                    </div>
                    <div
                        style={{
                            width: "100px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            backgroundColor: isHovered4 ? "#f0f0f0" : "transparent",
                            transition: "background-color 0.3s",
                            marginLeft: "15px",
                        }}
                        onMouseEnter={() => setIsHovered4(true)}
                        onMouseLeave={() => setIsHovered4(false)}
                    >
                        <Link className="" to="/onlinecourses" style={{ display: "flex", alignItems: "center" }}>
                            <FaStore color="black" size={32} style = {{marginTop: "10px"}} />
                        </Link>
                    </div>
                    <div
                        style={{
                            width: "100px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            backgroundColor: isHovered5 ? "#f0f0f0" : "transparent",
                            transition: "background-color 0.3s",
                            marginLeft: "15px",
                        }}
                        onMouseEnter={() => setIsHovered5(true)}
                        onMouseLeave={() => setIsHovered5(false)}
                    >
                        <Link className="" to="/" style={{ display: "flex", alignItems: "center" }}>
                            <FaNewspaper color="black" size={32} style = {{marginTop: "10px"}} />
                        </Link>
                    </div>

                </Col>
                <Col xs = {4} style ={{display: "flex"}}>
                    <div
                        style = {{
                            width: "46px",
                            height: "46px",
                            borderRadius: "23px",
                            backgroundColor: "#f0f0f0",
                            marginTop: "7px",
                            marginLeft: "220px"
                        }}
                    >
                        <PiDotsNineBold color="black" size={25} style = {{marginTop: "10px", marginLeft: "10px", fontWeight: "bold"}} />
                    </div>
                    <div
                        style = {{
                            width: "46px",
                            height: "46px",
                            borderRadius: "23px",
                            backgroundColor: "#f0f0f0",
                            marginTop: "7px",
                            marginLeft: "20px"
                        }}
                    >
                        <FaBell color="black" size={25} style = {{marginTop: "10px", marginLeft: "10px"}} />
                    </div>
                    <div
                        style = {{
                            width: "46px",
                            height: "46px",
                            borderRadius: "23px",
                            backgroundColor: "#f0f0f0",
                            marginTop: "7px",
                            marginLeft: "20px"
                        }}
                    >
                        <FaFacebookMessenger color="black" size={25} style = {{marginTop: "10px", marginLeft: "10px"}} />
                    </div>
                    <Dropdown overlay={menu} placement="bottomRight" arrow >
                            <Link className="" to="/personalInfo" style = {{marginLeft: "20px", marginTop: "7px"}}>

                                    <img 
                                        src={imgURL}
                                        alt="avatar" 
                                        width = "50px"
                                        height = "50px"
                                        style = {{borderRadius: "25px"}}
                                    />
    
                            </Link>
                        </Dropdown>
                </Col>
                {/* <Col xs = {1}>
                        <Dropdown overlay={menu} placement="bottomRight" arrow>
                            <Link className="" to="/personalInfo">
                                <img 
                                    src="https://iweb.tatthanh.com.vn/pic/3/blog/images/image(757).png" 
                                    alt="avatar" 
                                    width = "50px"
                                    height = "50px"
                                />
                            </Link>
                        </Dropdown>
                </Col> */}
            </Row>
        </Container>
            

                
    )
}

export default Header