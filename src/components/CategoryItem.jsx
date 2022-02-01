import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '../responsive';

const Container = styled.div `
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img `
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div ` 
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex; 
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1 `
  color: #f01c1c;
  margin-bottom: 20px;
  font-weight: 700;
  ${mediaQueries("sm")`
      text-align: center;
      font-size: 20px;
   `}
`;

const Button = styled.button `
  border: none;
  padding: 10px;
  font-size: 2rem;
  letter-spacing: 5px;
  background-color: #880808;
  cursor: pointer;
  border: transparent;
  color: white;
  font-family: 'Shalimar', cursive;
`;

const CategoryItem = ({ item }) => {
    return (
       <Container>
         <Image src={item.img} />
         <Info>
             <Title>{item.title}</Title>
             <Button>Shop Now</Button>
         </Info>
       </Container>
    );
};

export default CategoryItem;
