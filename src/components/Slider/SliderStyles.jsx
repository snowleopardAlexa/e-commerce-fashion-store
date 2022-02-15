import styled from "styled-components";
import { mediaQueries } from '../responsive';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Arrow = styled.div`
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
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

export const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #880808;
`;

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

export const Image = styled.img`
  height: 100%;
  ${mediaQueries("md")`
      width: 100%;
   `}
   ${mediaQueries("lr")`
      width: 100%;
   `}
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  ${mediaQueries("sm")`
      display: none;
   `}

  ${mediaQueries("lr")`
      display: none;
  `}
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #eef2f3;
`;

export const SubTitle = styled.h3`
  font-size: 1.5rem;
  color: #eef2f3;
  font-weight: 300;
`;

export const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  color: #eef2f3;
`;

export const Button = styled.button`
  padding: 20px;
  font-size: 20px;
  background-color: #000000;
  cursor: pointer;
  border: none;
  color: #eef2f3;
`;

