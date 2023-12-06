import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

const FriendCard = ({ name, avatar }) => {
  return (
    <Container style={{ width: '265px' }}>
      <Row>
        <Col>
          <img
            src={avatar}
            alt="Avatar"
            width="241px"
            height="240px"
            style={{ borderRadius: '10px 10px 0 0', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          />
          <div style={{ border: '1px solid #d4d1cf', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderTop: 'none', borderRadius: '0 0 10px 10px' }}>
            <p style={{ paddingTop: '10px', textAlign: 'center', fontWeight: '600' }}>{name}</p>
            <Button style={{ width: '90%', marginLeft: '5%', fontWeight: '600' }}>Xác nhận</Button>
            <Button variant="light" style={{ backgroundColor: '#dedad7', width: '90%', marginLeft: '5%', fontWeight: '500', marginTop: '5px', marginBottom: '8px' }}>Xóa</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default FriendCard;
