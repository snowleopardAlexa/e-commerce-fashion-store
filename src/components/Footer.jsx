import React from 'react';
import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter, } from "@material-ui/icons";
import styled from 'styled-components';
import visa from '../img/visa.png';
import maestro from '../img/maestro.png';
import paypal from '../img/paypal.png';
import americanexpress from '../img/american-express.png';

const Container = styled.div `
  display: flex;
`;

const Left = styled.div `
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1 `
  
`;

const Desc = styled.p `
  margin 20px 0px;
`;

const SocialContainer = styled.div `
  display: flex;
`;

const SocialIcon = styled.div `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${(props) => props.color};
  display: flex;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div `
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3 `
  margin-bottom: 30px;
`;

const List = styled.div `
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li `
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div `
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div `
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const PaymentContainer = styled.div `
  width: 50%;
`;

const PaymentIcon = styled.img `
  width: 40px;
  height: 40px;
  margin-left: 10px;
`;


const Footer = () => {
    return (
        <Container>
          <Left>
              <Logo>Cruella DeVil</Logo>
              <Desc>Cruella DeVil is a woman full of passion and power! Be like her!</Desc>
              <SocialContainer>
                  <SocialIcon color="#3b5998">
                      <Facebook />
                  </SocialIcon>
                  <SocialIcon color="#c32aa3">
                      <Instagram />
                  </SocialIcon>
                  <SocialIcon color="#1da1f2">
                      <Twitter />
                  </SocialIcon>
                  <SocialIcon color="#bd081c">
                      <Pinterest />
                  </SocialIcon>
              </SocialContainer>
          </Left>
          <Center>
              <Title>Useful Links</Title>
              <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>Man Fashion</ListItem>
                  <ListItem>Woman Fashion</ListItem>
                  <ListItem>Accessories</ListItem>
                  <ListItem>My Account</ListItem>
                  <ListItem>Order Tracking</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>Terms</ListItem>
              </List>
          </Center>
          <Right>
              <Title>Contact</Title>
              <ContactItem>
                  <Room style={{marginRight: "10px"}} /> 183 Eldert Street, New York City 10001
              </ContactItem>
              <ContactItem>
                  <Phone style={{marginRight: "10px"}} /> +1 756 7869 8596
              </ContactItem>
              <ContactItem>
                  <MailOutline style={{marginRight: "10px"}} /> cruelladevil@icloud.com
              </ContactItem>
              <PaymentContainer>
                 <PaymentIcon src={visa} />
                 <PaymentIcon src={maestro} />
                 <PaymentIcon src={paypal} />
                 <PaymentIcon src={americanexpress} />
              </PaymentContainer>
          </Right>
        </Container>
    );
};

export default Footer;
