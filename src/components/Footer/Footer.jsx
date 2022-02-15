import React from "react";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import visa from "../.././img/visa.png";
import maestro from "../.././img/maestro.png";
import paypal from "../.././img/paypal.png";
import americanexpress from "../.././img/american-express.png";

import {
  Container,
  Left,
  Right,
  Logo,
  Desc,
  SocialContainer,
  SocialIcon,
  Center,
  Title,
  List,
  ListItem,
  PaymentContainer,
  ContactItem,
  PaymentIcon,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Cruella DeVil</Logo>
        <Desc>
          Cruella DeVil is a woman full of passion and power! Be like her!
        </Desc>
        <SocialContainer>
          <SocialIcon color="#3b5998">
            <Facebook style={{ marginTop: "8px" }} />
          </SocialIcon>
          <SocialIcon color="#c32aa3">
            <Instagram style={{ marginTop: "8px" }} />
          </SocialIcon>
          <SocialIcon color="#1da1f2">
            <Twitter style={{ marginTop: "8px" }} />
          </SocialIcon>
          <SocialIcon color="#bd081c">
            <Pinterest style={{ marginTop: "8px" }} />
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
          <Room style={{ marginRight: "10px" }} /> 183 Eldert Street, New York
          City 10001
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 756 7869 8596
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          cruelladevil@icloud.com
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
