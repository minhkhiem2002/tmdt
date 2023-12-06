import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FriendCard from './FriendCard/FriendCard';

const FriendPage = () => {
  const friendData = [
    { name: 'Hoàng Phiếm', avatar: 'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-1/335659402_424919463190562_6907599162075638516_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeHYfs0pwqzLBI8Bd82jfAC9jUlT_YL00CSNSVP9gvTQJO2h10KZMQpib0TXJmr-k8cw41jRBV-55Jt5kPwy2q1P&_nc_ohc=9Az2ahA0anMAX_0Pe1h&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfC9qOKV6qQY7EMevhGMmPzOvOncVArSbbmp7z-uSKsP0g&oe=657527E2' },
    { name: 'Hồng Quang', avatar: 'https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/402141301_1724936641315804_2395579155325692326_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeE46mDZF2OrizWwM6ba4DgQy1PRVo0YJCHLU9FWjRgkIYUUb7kmcB-BadIQNITfn05PezZTXu4wH4R2QnX8ngUs&_nc_ohc=vevCtOyNhwMAX-UI_du&_nc_ht=scontent.fsgn2-10.fna&oh=00_AfATFWugpN1jFNKOF1cau6VC3vdmI6vX98XplDQktOJfbg&oe=6573809F' },
    { name: 'Huỳnh Trang', avatar: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.15752-9/385544017_2571562939686816_5858786277411971627_n.png?_nc_cat=101&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFc9eFV3eIh2DGqq2cMS_Cg3zf5NbJESC7fN_k1skRILi46E7nRIzhZePAo8mTBHMjVQqCA4BnoyJv--_jwHfpz&_nc_ohc=uRUiyx78sb0AX9qhgfk&_nc_ht=scontent.fsgn2-4.fna&oh=03_AdSq6e5l0Fi4U1cGku1pnp5Rw1bnwMJuftHOu829oD7qLg&oe=6596FD85' },
    { name: 'Ken Ichi', avatar: 'https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/40933850_475833486234228_6182835508285014016_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeHTMEYY_bDCWqOc0JwyiBtWHKz8cv09bagcrPxy_T1tqGFe6gYEsHuG6I8F2VYU1R8yoiWbBbSmwYjBaX35SGUO&_nc_ohc=d8JiTauf7CgAX_X5kZB&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfC2kfXwcGmpSnszPxX0iO9axk0r0-1TkJSw0r0cfH8lbw&oe=6596F7D6https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.6435-9/40933850_475833486234228_6182835508285014016_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7a1959&_nc_eui2=AeHTMEYY_bDCWqOc0JwyiBtWHKz8cv09bagcrPxy_T1tqGFe6gYEsHuG6I8F2VYU1R8yoiWbBbSmwYjBaX35SGUO&_nc_ohc=d8JiTauf7CgAX_X5kZB&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfC2kfXwcGmpSnszPxX0iO9axk0r0-1TkJSw0r0cfH8lbw&oe=6596F7D6' },
    { name: 'Hoàng Nam', avatar: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/140970176_2832436140367631_6708966955906074692_n.jpg?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=3a23d8&_nc_eui2=AeHmk1nR6NanxUy20_UGRUBCd_PL17_dwgp388vXv93CCsmsWrQ1RprGWwrbIFAJ-CmrbPA1LIAlBXtFps8e-qUm&_nc_ohc=M5vZ6fpmtPUAX-2zEMZ&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfD3iDlOzj5KOVl6Lf4QepEvtTjgGmgPA7y0uIs5iv3zIA&oe=65971697' },
    { name: 'Mạnh Quyền', avatar: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/330613629_1302485263642834_4879746312402719330_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeHpyqkaiPn4f-uunfsLbfxezCLTj5Pf9OvMItOPk9_06ypZo9y-bjMoTYcqdvw39f-DcFog8Fulagw1zpteGXfq&_nc_ohc=ErlAM3kqZsEAX9hDShd&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfCTVB8vAjNji9zZ1lU3mthlwwI2JkC_Q24VnwWE-iGVQQ&oe=6573AEDA' },
    { name: 'Minh Khiêm', avatar: 'https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/255039528_423043432870753_1022114777015234674_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeG2tqSk_-ev6WQ_RoftDhcJ5csHQVZrVpDlywdBVmtWkLCLbHgSV6wc7pwwf3fPrunjpy-OxrYrei8_-Qr-IbZ9&_nc_ohc=DR5Wn6_KYKsAX9sp-Aj&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfDmlfTqW-P6M2UgyLHGeLgGCtb_m4UsRFNZLvbsP2BADg&oe=65748ADD' },
  ];

  // Tính số hàng cần để hiển thị tất cả FriendCard
  const numberOfRows = Math.ceil(friendData.length / 4);

  return (
    <>
      <Header />
      <Container fluid style={{ width: '80%', marginLeft: '10%' }}>
        <p style = {{marginLeft: "20px", fontFamily: "poppins", fontWeight: "700", fontSize: "24px"}}>Lời mời kết bạn</p>
        {[...Array(numberOfRows)].map((_, rowIndex) => (
          <Row key={rowIndex}>
            {friendData.slice(rowIndex * 4, (rowIndex + 1) * 4).map((friend, colIndex) => (
              <Col key={colIndex} xs={12} md={3} style = {{marginBottom: "20px"}}>
                <FriendCard name={friend.name} avatar={friend.avatar} />
              </Col>
            ))}
          </Row>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default FriendPage;
