import React, { useState,useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { Table } from "antd";
import ReactSearchBox from "react-search-box";
import { Space, Form, Modal, Input } from 'antd';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./AdminHome.scss";
import Sidebar from "../../Sidebar/Sidebar";

const AdminHome = () => {
    const navigate = useNavigate();

  const [isDropdown, setIsDropdown] = useState(false);

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

    const adminId = localStorage.getItem("userId");
    const [imgURL, setImgURL] = useState("");
    const [name, setName] = useState("");
    const fetchData = useCallback(async () => {
        try {
            if (adminId) {
                const apiURL = `http://localhost:3001/api/user/get-detail/${adminId}`;
                const res = await axios.get(apiURL);
                console.log("Check avatar",res.data)
                if (res) {
                    console.log("Avatar",res.data.data.avatar)
                    setImgURL(res?.data.data.avatar);
                    setName(res?.data.data.name)
                }
            }
        } catch (error) {
            console.log("error fetching", error);
        }
    }, [adminId]);
    const [allUsers, setAllUsers] = useState([]);
    const fetchData1 = useCallback(async () => {
      try {
          if (adminId) {
              const apiURL = `http://localhost:3001/api/user/getAll`;
              const res = await axios.get(apiURL);
              if (res) {
                setAllUsers(res?.data.data);
              }
          }
      } catch (error) {
          console.log("error fetching", error);
      }
  }, [adminId]);
    useEffect(() => {
        fetchData();
        fetchData1();
    }, [fetchData]);
    console.log('User Data',allUsers)
    const handleLogout = () => {
        localStorage.removeItem("userId");
        localStorage.removeItem("role");
        navigate('/login');
    };
    const [openModalDelete, setOpenModalDelete] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [selectedUsers, setSelectedUsers] = useState(null);

    const [form] = Form.useForm();

    const handleOpenModalDelete = (data) => {
        setOpenModalDelete(true);
        setSelectedUsers(data);
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModalEdit = (data) => {
        setSelectedUsers(data);
        setOpenModalEdit(true);
        setIsModalOpen(true);
        form.setFieldsValue({
          username: data.name,
          phone: data.phone,
        });
    };
    const handleCancel = () => {
      setOpenModalDelete(false);
      setSelectedUsers(null);
      setIsModalOpen(false);
    };

    const handleCancelEdit = () => {
        setOpenModalEdit(false);
        setSelectedUsers(null);
        setIsModalOpen(false);
        form.resetFields();
    };
    const onFinish = (data) => {
        const apiURL = `http://localhost:3001/api/user/update-user/${selectedUsers._id}`;
        try {
            const res = axios.put(apiURL, {
                name: data.username,
                phone: data.phone,
            });
            if (res) {
                setOpenModalEdit(false);
                toast.success("Update user successfully");

                setAllUsers((prevUsers) =>
                    prevUsers.map((user) =>
                        user._id === selectedUsers._id
                            ? {
                                  ...user,
                                  name: data.username,
                                  phone: data.phone,
                              }
                            : user
                    )
                );
            }
        } catch (error) {
            toast.error('Update failed')
            console.error(error);
        }
    };

    const handleDeleteUser = () => {
        const apiURL = `http://localhost:3001/api/user/delete-user/${selectedUsers._id}`;
        try {
            const res = axios.delete(apiURL);
            if (res) {
                toast.success('Delete user successfully')
                setAllUsers((prevUsers) =>
                    prevUsers.filter((user) => user._id !== selectedUsers._id)
                );
            }
        } catch (error) {
            toast.error('Delete user failed: ')
            console.log(error);
        } finally {
            setOpenModalDelete(false);
        }
    };

  return (
    <Container fluid style = {{height: "100vh"}}>
      <ToastContainer/>
      <Row >
        <Col xs={3} style = {{boxShadow: "0.5px 0.866px 2px 0px rgba(0, 0, 0, 0.15)"}} className={isModalOpen ? 'hidden-col' : ''}>
          <Sidebar/>
        </Col>
        <Col xs = {9}>
          <Row>
                <Col xs = {10} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                  <p className="headerName" style={{ marginTop: "-10px", marginLeft: "10px" }}>
                      Hello {name}!
                  </p>
                </Col>
                <Col style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
              <Dropdown className="headerLogin">
                <Dropdown.Toggle style={{ backgroundColor: "white", border: "none", width: "100%" }}>
                  <img
                    src= {imgURL}
                    alt="User Avatar"
                    className="headerUserAvatar"
                    onClick={handleDropdown}
                    width="50px"
                    height="50px"
            
                  ></img>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item style={{ display: "flex", flexDirection: "column" }}>
                    <NavLink to="/">Personal Information</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Item style={{ display: "flex", flexDirection: "column" }}>
                    <NavLink to="/request">Request</NavLink>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item style={{ display: "flex", flexDirection: "column" }} onClick = {handleLogout}>
                    Log out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
                </Col>
          </Row>
          <Row>
            <bold style={{ fontSize: "40px", fontWeight: "700" }}>Quản lý danh sách của thư viện</bold>
          </Row>
          <Row style={{ width: "100%", marginTop: "15px" }}>
            <Col style={{ width: "100%" }}>
              <ReactSearchBox width="150%" placeholder="Search Here..." />
            </Col>
            <Col style={{ display: "flex" }}>
              <Button variant="outlined" color="primary" style={{ width: "80px", marginRight: "20px" }}>
                Search
              </Button>
              <Button variant="outlined" color="secondary" style={{ width: "120px" }}>
                Thêm thành viên
              </Button>
            </Col>
          </Row>
          <Row style={{ width: "100%", marginTop: "30px" }}>
            <Table dataSource={allUsers} bordered>
              {/* <Table.Column title="Id" dataIndex="id" key="id" /> */}
              <Table.Column title="Tên" dataIndex="name" key="name" />
              <Table.Column title="Email" dataIndex="email" key="email" />
              <Table.Column title="Số điện thoại" dataIndex="phone" key="phone" />
              <Table.Column title="Role" dataIndex="role" key="role" />
              <Table.Column
                title="Action"
                key="action"
                render={(text, record) => (
                  <Space size="middle">
                    <Button type="primary"  onClick={() => handleOpenModalEdit(record)}>
                      Chỉnh sửa
                    </Button>
                    <Button danger type="primary"  onClick={() => handleOpenModalDelete(record)}>
                      Xóa
                    </Button>
                  </Space>
                )}
              />
            </Table>
          </Row>
        </Col>
      </Row>
            <Modal
                    open={openModalDelete}
                    title="Bạn có chắc chắc muốn xóa người dùng này?"
                    onOk={handleDeleteUser}
                    onCancel={handleCancel}
                    footer={[
                        <Button key="back" onClick={handleCancel}>
                            Hủy
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"
                            onClick={handleDeleteUser}
                        >
                            Xác nhận
                        </Button>,
                    ]}
                >
                    <p style={{ fontSize: "18px" }}>
                        Xác nhận xóa người dùng{" "}
                        <strong>{selectedUsers?.name}</strong>?
                    </p>
                </Modal>
                <Modal
                    open={openModalEdit}
                    title="Chỉnh sửa người dùng"
                    onCancel={handleCancelEdit}
                    footer={[
                        <Button key="back" onClick={handleCancelEdit}>
                            Hủy
                        </Button>,
                        <Button
                            key="submit"
                            type="primary"
                            form="form_update"
                            htmlType="submit"
                        >
                            Xác nhận
                        </Button>,
                    ]}
                >
                    <Form
                        id="form_update"
                        name="basic"
                        layout="vertical"
                        onFinish={onFinish}
                        form={form}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            initialValue={selectedUsers?.name}
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Số điện thoại"
                            name="phone"
                            initialValue={selectedUsers?.phone}
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    </Form>
                </Modal>
    </Container>
  );
};

export default AdminHome;
