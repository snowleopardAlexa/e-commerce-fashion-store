import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import women from './women.jpg';

const Container = styled.div `
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div `
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props => props.direction === "left" && "10px"};
  right: ${props => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div `
  height: 100%;
  display: flex;
`;

const Slide = styled.div `
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const ImgContainer = styled.div `
  flex: 1;
  height: 100%;
`;

const Image = styled.div `
  height: 80%;
  width: 80%;
`;

const InfoContainer = styled.div `
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1 `
  font-size: 2rem;
`;

const Desc = styled.p `
  margin: 50px 0px;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 3px;
`;

const Button = styled.button `
  padding: 10px;
  font-size: 2rem;
  letter-spacing: 5px;
  background-color: #880808;
  cursor: pointer;
  border: transparent;
  color: white;
  font-family: 'Shalimar', cursive;
`;



const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
              <Slide bg="black">
               <ImgContainer>
                   <Image src={women} />
               </ImgContainer>
               <InfoContainer>
                   <Title>DEVIL'S SOUL COLLECTION SALE</Title>
                   <Desc>GET 30% OFF FOR NEW ARRIVAL</Desc>
                   <Button>Shop Now</Button>
               </InfoContainer>
               </Slide>
               <Slide bg="yellow">
               <ImgContainer>
                   <Image src={women} />
               </ImgContainer>
               <InfoContainer>
                   <Title>DEVIL'S SOUL COLLECTION SALE</Title>
                   <Desc>GET 30% OFF FOR NEW ARRIVAL</Desc>
                   <Button>Shop Now</Button>
               </InfoContainer>
               </Slide>
               <Slide bg="pink">
               <ImgContainer>
                   <Image src={women} />
               </ImgContainer>
               <InfoContainer>
                   <Title>DEVIL'S SOUL COLLECTION SALE</Title>
                   <Desc>GET 30% OFF FOR NEW ARRIVAL</Desc>
                   <Button>Shop Now</Button>
               </InfoContainer>
               </Slide>
            </Wrapper>    
            <Arrow direction="right">
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider;
